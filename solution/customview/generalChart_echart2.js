define({
  on: {
    init: function (event) {

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

      var renderEchart = function renderEchartFn() {
        // 
        renderEchart = function(){
          //  
        };
        target.showLoading();
        target.hideNoData();
        target.getKpiTypeByFilter({
          hasSingnal : false
        },function(noSignalkpis){
          var id = target.getParameter("id");
          var ci = id ? [id] : [resource.id];
          var extension = {
            includeInstance : true,
            queryInstances : "00",
            isRealTimeData : false
          };
          if(startTime){
            extension['startTime'] = startTime;
          }
          if(endTime){
            extension['endTime'] = endTime;
          }
          var xAxis = [];

          var kpi = kpiDes && kpiDes.map(function(elem){
            return elem.dataItemId;
          }) || [];

          target.getKpiValueList(ci, kpi, null, function (returnData) {
            target.hideLoading();
            // console.warn(extension, ci, kpi, returnData);
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
              var series = kpiDes.map(function(kpi){
                var rs = {
                  name : kpi.kpiName,
                  type : "line",
                  symbolSize :0,
                  data : returnData.filter(function(vdata){
                    var kpiCode = vdata.kpiCode;
                    var instance = vdata.instance;
                    return kpi.dataItemId == kpiCode && kpi.instance == instance;
                  }).sort(function(a, b){
                    var dt1 = new Date(a.arisingTime);
                    var dt2 = new Date(b.arisingTime);
                    return dt2.getTime() - dt1.getTime();
                  }).map(function(elem){
                    var dt = new Date(elem.arisingTime);
                    var dh = target.dateHandler(dt);
                    var D2017 = target.dateHandler("2017/01/01");
                    return [dh.minus(minDate),elem.value]
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
                    for(var i = 0; i < params.length; i++){
                      var time = params[i].value[0];
                      var val = params[i].value[1];
                      var marker = params[i].marker;
                      var seriesIndex = params[i].seriesIndex;
                      var d = minDate.clone().addTimeStamp(time)
                      str += marker + d.getDateString("MM/dd,hh:mm:ss") + "<br>";
                      str += kpiDes[seriesIndex].kpiName+ ":" + val + "<br>";
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
                      name:"综合趋势-工艺参数图",
                      backgroundColor:"#0b2232"
                    },
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
                  axisLabel : {
                    formatter : function(params){
                      var d = minDate.clone().addTimeStamp(params)
                      return d.getDateString("MM/dd,hh:mm:ss");
                    }
                  }
                },
                yAxis: {
                  type: 'value'
                },/**
                 dataZoom: [{
                  show: false,
                  realtime: true,
                  startValue: maxDate.minus(minDate) - 4 * 3600 * 1000,
                  endValue: maxDate.minus(minDate),
                  labelFormatter : function(value){
                        var d = minDate.clone().addTimeStamp(value)
                        return d.getDateString("MM/dd,hh:mm:ss");
                    }
                }],*/
                series: series
              };
              var ins = target.render(option);
            } else {
              target.showNoData();
            };
            // 
            renderEchart = renderEchartFn
          }, extension)
        })
      }
      target.off("multiSelectValues2.generalChart2");
      target.on("multiSelectValues2.generalChart2", function multiSelectValues2(dataItems){
        // 
        kpiDes = dataItems;
        //  
        if(resource && kpiDes){
          renderEchart();
        }
      })
      target.off("tree_resourceChange.generalChart2");
      target.on("tree_resourceChange.generalChart2", function tree_resourceChange_generalChart2(res){
        // 
        resource = res.resource;
        // renderEchart();
        /**
         if(resource && kpiDes){
          renderEchart();
        }*/
      });
      /**
       if(resource && kpiDes){
        renderEchart();
      }*/
      target.off("drawDiagnoseFeatureEchart2.generalChart2");
      target.on("drawDiagnoseFeatureEchart2.generalChart2", function drawDiagnoseFeatureEchart2(dateRangeTime) {
        // 
        startTime = dateRangeTime[0].getUTCDateString();
        endTime = dateRangeTime[1].getUTCDateString();
        if(resource && kpiDes){
          renderEchart();
        }//测点（指标）
      });
    }
  }
});