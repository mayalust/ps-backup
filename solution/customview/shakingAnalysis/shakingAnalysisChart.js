define({
  on: {
    init: function (event) {
      var target = event.target,
        global = event.global,
        color = "#ffe400",
        LENGTH = 50,
        kpiName,
        instance,
        endDate = target.getEndDate(),
        startDate = target.getStartDate(),
        endTime = endDate.getUTCDateString(),
        startTime = startDate.getUTCDateString();
      // 渲染echart图
      target.$getCurrentResource(function(resource){
        var renderEchart = function (ci, kpi, instance) {
          // 扩展参数
          var hasSingnal = target.getValue("global/hasSingnal") || [];
          target.showLoading();
          target.hideNoData();
          if(ci.length > 0 && kpi.length > 0 && instance){
            var extension = {
              isRealTimeData : false,
              startTime:startTime,
              endTime:endTime,
              includeInstance : true,
              queryInstances : instance
            };
            if(hasSingnal.length < 1){
              extension.hasSingnal = true
            }
            var xAxis = [];
            target.getKpiValueList(ci, kpi, 0, function (returnData) {
              if(returnData.length > 0){
                target.hideLoading();
                var xAxisData = [];
                target.setValue("global/sensor", {
                  kpiId : returnData[0].kpiCode,
                  instance : returnData[0].instance
                });
                target.setValue("echarts/data",returnData);//缓存返回的KPI
                target.setValue("global/dt", returnData[0]);
                target.setValue("global/time", target.dateHandler(returnData[0].arisingTime));
                var etTime = target.dateHandler(returnData[returnData.length - 1].arisingTime);
                var edTimeInx = 0;
                returnData.forEach(function (ele) {
                  var tmp = target.dateHandler(ele.arisingTime);
                  if(etTime.minus(tmp) > 4 * 3600 * 1000){
                    edTimeInx++;
                  }
                  xAxisData.push(tmp.getDateString("yy/MM/dd,hh:mm:ss"));
                });
                var seriesData = []
                if (returnData) {
                  for (var i in kpi) {
                    var item = {
                      name: kpiName,
                      data: returnData.map(function (elem) {
                        return elem.value;
                      })
                    }
                    seriesData.push(item);
                  }
                }
                var option = {
                  title: {
                    textStyle: {color: "#fff"}
                  },
                  tooltip: {
                    triggerOn: 'none',
                    position: function (pt, param) {
                      var dataIndex = param[0].dataIndex;
                      var dt = returnData[dataIndex];
                      target.setValue("global/sensor", {
                        kpiId : dt.kpiCode,
                        instance : dt.instance
                      });
                      target.setValue("global/dt", dt);
                      target.setValue("global/time", target.dateHandler(dt.arisingTime));
                    }
                  },
                  legend: {
                    data: seriesData.map(function (elem) {
                      return elem.name;
                    })
                  },
                  grid : {
                    top : "5%",
                    height : "70%"
                  },
                  toolbox: {
                    feature: {
                      dataZoom: {},
                      restore: {},
                      saveAsImage:{
                        type:"png",
                        name:"振动分析-特征趋势图",
                        backgroundColor:"#0b2232"
                      },
                    },
                    iconStyle:{
                      normal:{
                        borderColor:"#fff"
                      },
                      emphasis:{
                        borderColor:"#e6e2e2"
                      }
                    }
                  },
                  xAxis: {
                    boundaryGap: false,
                    type: 'category',
                    data: xAxisData,
                    axisPointer: {
                      value: xAxisData[0],
                      snap: false,
                      lineStyle: {
                        color: '#126296',
                        opacity: 0.5,
                        width: 2
                      },
                      label: {
                        show: true,
                        backgroundColor: '#126296'
                      },
                      handle: {
                        shadowBlur : 0,
                        shadowColor : "#fff",
                        show: true,
                        color: '#126296'
                      }
                    },
                  },
                  yAxis: {
                    type: 'value',
                    max: function(value) {
                      return (value.max * 1.2).toFixed(3);
                    },
                  },
                  /**
                   dataZoom: [{
                    show: false,
                    realtime: true,
                    startValue: edTimeInx,
                    end: 100,
                  }],*/
                  series: seriesData.map(function (elem) {
                    elem.type = "line";
                    elem.symbolSize = 8;
                    elem.data = elem.data;
                    return elem;
                  })
                };
                var ins = target.render(option);
              } else {
                target.showNoData();
              }
            }, extension)
          } else {
            target.showNoData();
          }
        };
        var callback = function(condition){
          startTime = condition.dateRangeTime[0].getUTCDateString();
          endTime = condition.dateRangeTime[1].getUTCDateString();
          var ci = [resource.id];
          var kpi = [];
          if(condition.kpi.dataItemId){
            kpi.push(condition.kpi.dataItemId);
            kpiName = condition.kpi.label;
            instance = condition.kpi.instance;
          }
          target.setValue("featureEchart", null);
          renderEchart(ci, kpi, instance);
        }
        var condition = target.getValue("featureEchart");
        if(condition){
          callback(condition);
        }
        target.off("drawDiagnoseFeatureEchart1");
        target.on("drawDiagnoseFeatureEchart1", function (condition) {
          callback(condition);
        });
      });
    },
    dblclick: function(event) {
      var target = event.target;
      var returnData = target.getValue("echarts/data");
      //如果双击的index在数据里有
      if (returnData && returnData[event.ui.dataIndex]) {
        var dt = returnData[event.ui.dataIndex];
        target.setValue("global/sensor", {
          kpiId : dt.kpiCode,
          instance : dt.instance
        });
        target.setValue("global/dt", dt);
        target.setValue("global/time", target.dateHandler(dt.arisingTime));
        target.trigger("analysisShakeNavigateTo", 2);
      }
    }
  }
});