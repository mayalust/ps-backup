define({
  on: {
    init: function (event) {
      runtime("echart1 start!");
      var target = event.target;
      var global = event.global;
      var color = "#ffe400";
      var LENGTH = 50;
      var resource = target.getValue("global/resource");
      var kpiDes = target.getValue("global/kpi");
      var endTime;
      var startTime;
      var alertTime = target.getValue("global/alertTime");
      if(alertTime){
        alertTime = target.dateHandler(alertTime);
        startTime = alertTime.clone();
        endTime = alertTime.clone();
        startTime.addHour(-2);
        endTime.addHour(1);
      } else {
        endTime = target.dateHandler();
        startTime = endTime.clone();
        startTime.addHour(-2);
      };
      startTime = startTime.getUTCDateString();
      endTime = endTime.getUTCDateString();
      var noSignalkpis;
      var renderEchart = function renderEchartFn(a) {
        renderEchart = function(){
           
        };
        target.showLoading();
        target.hideNoData();
        if(noSignalkpis){
          getNoSignalKpis()
        } else {
          target.getKpiTypeByFilter({
            hasSingnal : false
          }, function(data){
            noSignalkpis = data;
            getNoSignalKpis();
          })
        }
        function getNoSignalKpis(){
          var id = target.getParameter("id");
          var ci = id ? [id] : [resource.id];
          var extension = {
            includeInstance : true,
            isRealTimeData : false
          };
          if(kpiDes && kpiDes[0]){
            extension['queryInstances'] = kpiDes[0].instance;
            //kpiDes = [kpiDes];
          }
          if(startTime){
            extension['startTime'] = startTime;
          }
          if(endTime){
            extension['endTime'] = endTime;
          }
          var xAxis = [];
          target.show();
          var kpi = kpiDes && kpiDes.map(function(e){
            return e.dataItemId;
          }) || [];
          runtime("echart start to load AJAX!");
          target.getKpiValueList(ci, kpi, null, function (returnData) {
            runtime("echart AJAX loaded!");
            target.hideLoading();
            // console.warn("渲染上面的视图啦＝＝＝＝");
            // console.warn("渲染上面的视图啦＝＝＝＝", extension);
            kpiDes && console.warn("渲染上面的视图啦＝＝＝＝", kpiDes[0]);
            if(returnData.length > 0){
              var minDate = returnData.reduce(function(a, b){
                var dt = target.dateHandler(b.arisingTime)
                if(a){
                  if(dt.before(a)){
                    return dt;
                  } else {
                    return a;
                  }
                } else {
                  return dt
                }
              }, null);
              var maxDate = returnData.reduce(function(a, b){
                var dt = target.dateHandler(b.arisingTime)
                if(a){
                  if(dt.after(a)){
                    return dt;
                  } else {
                    return a;
                  }
                } else {
                  return dt
                }
              }, null);
              var endInx = 0;
              var series = kpiDes.map(function(kpi){
                var rdata = returnData.filter(function(vdata){
                  var kpiCode = vdata.kpiCode;
                  var instance = vdata.instance;
                  return kpi.dataItemId == kpiCode && kpi.instance == instance;
                })
                rdata.sort(function(a, b){
                  var dt1 = new Date(a.arisingTime);
                  var dt2 = new Date(b.arisingTime);
                  return dt1.getTime() - dt2.getTime();
                });
                var rs = {
                  name : kpi.kpiName,
                  type : "line",
                  symbolSize :0,
                  data : rdata.map(function(elem){
                    var dt = new Date(elem.arisingTime);
                    var dh = target.dateHandler(dt);
                    var D2017 = target.dateHandler("2017/01/01");
                    var result = dh.minus(minDate);
                    return [result,elem.value]
                  })
                }
                return rs;
              });
              var option = {
                animation : false,
                title: {
                  textStyle: {color: "#fff"}
                },
                grid :{
                  containLabel:"true",
                  left:"23px",
                  right:"50px"
                },
                tooltip : {
                  trigger: 'axis',
                  formatter : function(params, b, c){
                    var str = "";
                    for(var i in params){
                      var time = params[i].value[0];
                      var val = params[i].value[1];
                      var marker = params[i].marker;
                      var seriesIndex = params[i].seriesIndex;
                      var d = minDate.clone().addTimeStamp(time)
                      if(kpi){
                        str += marker + kpiDes[seriesIndex].kpiName;
                        str += ":" + val + "[" + d.getDateString("MM/dd,hh:mm:ss") + "]<br>";
                      };
                    }
                    return str;
                  }
                },

                legend: {
                  data: kpiDes.map(function (elem) {
                    return elem.kpiName;
                  })
                },
                toolbox: {
                  feature: {
                    dataZoom: {},
                    restore: {},
                    saveAsImage:{
                      type:"png",
                      name:"综合趋势-测点图",
                      backgroundColor:"#0b2232"
                    }
                  },
                  iconStyle:{
                    normal:{
                      borderColor:"#fff"
                    },
                    emphasis:{
                      borderColor:"#fff"
                    }
                  }
                },
                xAxis: {
                  boundaryGap: false,
                  type: 'value',
                  max : "dataMax",
                  axisLabel : {
                    formatter : function(params){
                      var d = minDate.clone().addTimeStamp(params)
                      return d.getDateString("MM/dd,hh:mm:ss");
                    }
                  }
                },
                yAxis: {
                  type: 'value'
                },
                series: series
              };
              var ins = target.render(option);
            } else {
              target.showNoData();
            };
            renderEchart = renderEchartFn;
            runtime("echart rendered!");
          }, extension)
        }
      }
      target.off("multiSelectValues.generalChart");
      target.on("multiSelectValues.generalChart", function multiSelectValues(dataItems){
        kpiDes = dataItems;
        //  
        if(resource && kpiDes){
          //target.show();
          renderEchart(1);
        } else {
          //target.hide();
        }
      })
      target.off("tree_resourceChange.generalChart");
      target.on("tree_resourceChange.generalChart", function tree_resourceChange_generalChart(res){
        resource = res.resource;
         
        if(resource && kpiDes){
          //target.show();
          renderEchart(2);
        } else {
          //target.hide();
        }
      });
      if(resource && kpiDes){
        //target.show();
        //renderEchart(3);
      } else {
        //target.hide();
      }
      target.off("drawDiagnoseFeatureEchart.generalChart");
      target.on("drawDiagnoseFeatureEchart.generalChart", function drawDiagnoseFeatureEchart(dateRangeTime) {
        //debugger;
         
        startTime = dateRangeTime[0].getUTCDateString();
        endTime = dateRangeTime[1].getUTCDateString();
        if(resource && kpiDes){
          //target.show();
          renderEchart(4);
        } else {
          //target.hide();
        }
      });
    }
  }
});