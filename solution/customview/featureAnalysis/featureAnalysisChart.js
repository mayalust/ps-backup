define({
  on: {
    init: function (event) {
      var target = event.target;
      var startDate = target.$state.params.startdate ? new Date(target.$state.params.startdate) : new Date(new Date().getTime() - 2 * 60 * 60 * 1000);
      var endDate = target.$state.params.enddate ? new Date(target.$state.params.enddate) : new Date();
      var startTime = moment(startDate).utc().format();
      var endTime = moment(endDate).utc().format();

      // 设备的ID
      var id = target.$state.params.id;
      target.$getResourceById(id, function (resource) {

        var type;
        // 渲染echart图
        var renderEchart = function (ci, kpi, instance) {
          // 扩展参数
          target.showLoading();
          target.hideNoData();
          if (ci.length > 0 && kpi.length > 0 && instance) {
            var extension = {
              isRealTimeData: false,
              includeInstance: true,
              startTime: startTime,
              endTime: endTime
            };
            if (type == 1) {
              extension.queryInstances = "00" // 00havg 之前的时平均
              extension.dataType = 11;
              extension.aggregateFunc = 2;
              extension.aggregatePeriod = "1h"
            } else if (type == 2) {
              extension.queryInstances = "00"
              extension.dataType = 11;
              extension.aggregateFunc = 2;
              extension.aggregatePeriod = "1d";
            } else {
              extension.queryInstances = "00"
            }

            var xAxis = [];
            target.getKpiValueList(ci, kpi, 0, function (returnData) {
              if (returnData.length > 0) {
                target.hideLoading();
                var minDate = returnData.reduce(function (a, b) {
                  var dt = target.dateHandler(b.arisingTime)
                  if (a) {
                    if (dt.before(a)) {
                      return dt;
                    } else {
                      return a;
                    }
                  } else {
                    return dt
                  }
                }, null);
                var maxDate = returnData.reduce(function (a, b) {
                  var dt = target.dateHandler(b.arisingTime)
                  if (a) {
                    if (dt.after(a)) {
                      return dt;
                    } else {
                      return a;
                    }
                  } else {
                    return dt
                  }
                }, null);
                var endInx = 0;
                var series = kpiDes.map(function (kpi) {
                  var rdata = returnData.filter(function (vdata) {
                    var kpiCode = vdata.kpiCode;
                    var instance = vdata.instance;
                    return kpi.dataItemId == kpiCode;
                  })
                  rdata.sort(function (a, b) {
                    var dt1 = new Date(a.arisingTime);
                    var dt2 = new Date(b.arisingTime);
                    return dt1.getTime() - dt2.getTime();
                  });
                  var rs = {
                    name: kpi.kpiName,
                    type: "line",
                    symbolSize: 0,
                    data: rdata.map(function (elem) {
                      var dt = new Date(elem.arisingTime);
                      var dh = target.dateHandler(dt);
                      var D2017 = target.dateHandler("2017/01/01");
                      var result = dh.minus(minDate);
                      return [result, elem.value]
                    })
                  }
                  return rs;
                });
                /**
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
              }*/
                var option = {
                  title: {
                    textStyle: { color: "#fff" }
                  },
                  grid: {
                    containLabel: "true",
                    left: "23px",
                    right: "50px"
                  },
                  tooltip: {
                    trigger: 'axis',
                    formatter: function (params, b, c) {
                      var str = "";
                      for (var i in params) {
                        var time = params[i].value[0];
                        var val = params[i].value[1];
                        var marker = params[i].marker;
                        var seriesIndex = params[i].seriesIndex;
                        var d = minDate.clone().addTimeStamp(time)
                        if (kpi) {
                          str += marker + kpiDes[seriesIndex].kpiName;
                          str += ":" + val + "[" + d.getDateString("MM/dd,hh:mm:ss") + "]<br>";
                        };
                      }
                      return str;
                    }
                  },
                  legend: {
                    data: series.map(function (elem) {
                      return elem.name;
                    })
                  },

                  toolbox: {
                    feature: {
                      restore: {},
                      dataZoom: {},
                      saveAsImage: {
                        type: "png",
                        name: "振动分析-特征趋势图",
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
                  xAxis: {
                    boundaryGap: false,
                    type: 'value',
                    max: "dataMax",
                    axisLabel: {
                      formatter: function (params) {
                        var d = minDate.clone().addTimeStamp(params)
                        return d.getDateString("MM/dd,hh:mm:ss");
                      }
                    }
                  },
                  yAxis: {
                    type: 'value'
                  },
                  /**
                   dataZoom: [{
                    show: false,
                    realtime: true,
                    start: 80,
                    end: 100,
                  }],*/
                  series: series.map(function (elem) {
                    elem.type = "line";
                    elem.symbolSize = 0;
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
        var callback = function (condition) {
          startTime = moment(condition.dateRangeTime[0]).utc().format();
          endTime = moment(condition.dateRangeTime[1]).utc().format();
          type = condition.type;
          var ci = [resource.id];
          var kpi = [];
          var instance = [];
          kpiDes = condition.kpi;
          for (var i in condition.kpi) {
            kpi.push(condition.kpi[i].dataItemId);
            instance.push(condition.kpi[i].instance);
          }
          instance = instance.toString();
          target.setValue("featureEchart", null);
          renderEchart(ci, kpi, instance);
        }
        var condition = target.getValue("featureEchart");
        if (condition) {
          callback(condition);
        }
        target.off("drawDiagnoseFeatureEchart1");
        target.on("drawDiagnoseFeatureEchart1", function (condition) {
          callback(condition);
        });
      })
    },
    dblclick: function (event) {
      var target = event.target;
      var returnData = target.getValue("echarts/data");
      //如果双击的index在数据里有
      if (returnData && returnData[event.ui.dataIndex]) {
        var dt = returnData[event.ui.dataIndex];
        target.setValue("global/sensor", {
          kpiId: dt.kpiCode,
          instance: dt.instance
        });
        target.setValue("global/dt", dt);
        target.setValue("global/time", target.dateHandler(dt.arisingTime));
        target.trigger("analysisShakeviewchange", 2);
      }
    }
  }
});