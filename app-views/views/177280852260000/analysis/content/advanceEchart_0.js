/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var color = "#ffe400";
      var LENGTH = 50;
      var pdata = target.getPopupData();
      var resource = pdata.resource;
      var sensor = pdata.sensor || {};
      var kpiName;
      var endTime = target.dateHandler();
      var startTime = endTime.clone();
      startTime.addDay(-2);
      endTime = endTime.getUTCDateString();
      startTime = startTime.getUTCDateString();
      // 渲染echart图
      var renderEchart = function(ci, kpi) {
        // 扩展参数
        target.showLoading();
        target.hideNoData();
        var extension = {
          includeInstance: true,
          queryInstances: sensor.instance,
          isRealTimeData: false,
          startTime: startTime,
          endTime: endTime
        };
        var xAxis = [];
        target.getKpiValueList(ci, kpi, 0, function(returnData) {
          if (returnData.length > 0) {
            target.hideLoading();
            var xAxisData = [];
            target.setValue("global/sensor", {
              kpiId: returnData[0].kpiCode,
              instance: returnData[0].instance
            });
            target.setValue("global/dt", returnData[0]);
            target.setValue("global/time", target.dateHandler(returnData[0].arisingTime));
            var seriesData = [];
            var minDate = target.dateHandler(returnData[0].arisingTime).getTime();
            if (returnData) {
              for (var i in kpi) {
                var item = {
                  name: kpiName,
                  data: returnData.map(function(elem) {
                    var arisingTime = target.dateHandler(elem.arisingTime).getTime();
                    return [arisingTime - minDate, elem.value];
                  })
                }
                seriesData.push(item);
              }
            }
            var option = {
              title: {
                textStyle: {
                  color: "#fff"
                }
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'cross',
                  label: {
                    backgroundColor: '#6a7985'
                  }
                }
              },
              legend: {
                data: seriesData.map(function(elem) {
                  return elem.name;
                })
              },
              grid: {
                top: "5%",
                height: "70%"
              },
              xAxis: {
                boundaryGap: false,
                type: 'value',
                max: "dataMax",
                axisLabel: {
                  formatter: function(item) {
                    return target.dateHandler(minDate + item).getDateString("yy/MM/dd,hh:mm:ss");
                  }
                }
              },
              yAxis: {
                type: 'value'
              },
              toolbox: {
                feature: {
                  dataZoom: {},
                  restore: {},
                  saveAsImage: {
                    type: "png",
                    name: "振动分析图",
                    backgroundColor: "#0b2232"
                  },
                },
                iconStyle: {
                  normal: {
                    borderColor: "#fff"
                  },
                  emphasis: {
                    borderColor: "#e6e2e2"
                  }
                }
              },
              series: seriesData.map(function(elem) {
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
      }
      target.off("drawDiagnoseFeatureEchart1");
      target.on("drawDiagnoseFeatureEchart1", function(condition) {
        startTime = condition.dateRangeTime[0].getUTCDateString();
        endTime = condition.dateRangeTime[1].getUTCDateString();
        var ci = [resource.id];
        var kpi = [];
        if (condition.kpi.dataItemId) {
          kpi.push(condition.kpi.dataItemId);
          kpiName = condition.kpi.label;
        }
        renderEchart(ci, kpi);
      });
      renderEchart([resource.id], [sensor.id]);
    }
  }
};