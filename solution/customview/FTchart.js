define({
  on: {
    init: function (event) {
      var toString = Object.prototype.toString;
      var target = event.target;
      var global = event.global;
      var kpi;
      var type = 0;
      target.$getCurrentResource(function (resource) {
        var ci = resource ? [resource.id] : [];
        var sensor = target.getValue("global/sensor");
        var time = target.getValue("global/time");
        var kpi = sensor ? [sensor.kpiId || sensor.id] : [];
        var instance = sensor ? sensor.instance : "";
        var renderROWEchart = function (ci, kpi, time) {
          time = time || target.dateHandler();
          var params = {
            time: 0,
            kpiCodes: kpi || [],
            isRealTimeData: false,
            nodeIds: ci || [],
            startTime: time.getUTCDateString(),
            endTime: time.getUTCDateString(),
            transformerType: "ROW",
            includeInstance: true,
            queryInstances: instance
          }
          target.showLoading();
          target.hideNoData();
          event.target.postService("kpiDataFlexService", "getKpiValueList", ["kpi", params], function (returnData) {
            target.hideLoading();

            if (returnData.data.length > 0) {
              var data = eval(returnData.data[0].value);
              var dataList = data[0];
              var valueList = data[1];
              for (var i in valueList) {
                valueList[i] = [dataList[i], valueList[i]];
              };
              target.setValue("x0", dataList[0]);
              target.setValue("y0", valueList[0][1]);
              target.setValue("x1", dataList[180]);
              target.setValue("y1", valueList[180][1]);
              target.trigger("handleChange");
              var render = function (init, sub) {
                var x0 = target.getValue("x0") || 0;
                var x1 = target.getValue("x1") || 180;
                var x2 = 90;
                var markLine = undefined;
                var markPoint = undefined;
                var option = {
                  grid: [{
                    "top": "10%",
                    "width": "90%",
                    "left": "5%",
                    "height": "65%"
                  }, {
                    "top": "10%",
                    "width": "90%",
                    "left": "5%",
                    "height": "65%"
                  }, {
                    "top": "10%",
                    "width": "90%",
                    "left": "5%",
                    "height": "65%"
                  }],
                  tooltip: {
                    "alwaysShowContent": true,
                    trigger: 'item',
                    triggerOn: 'none'
                  },
                  xAxis: [{
                    type: "value",
                    max: "dataMax",
                    axisLabel: {
                      show: true
                    },
                    axisPointer: {
                      label: {
                        formatter: function (val) {
                          if (val.seriesData[0]) {
                            // 
                            target.setValue("x0", val.value);
                            if (val.seriesData[0].data) {
                              target.setValue("y0", val.seriesData[0].data[1]);
                            };
                            target.trigger("handleChange");
                            if (type == 1) {
                              if (init == false) {
                                render();
                              };
                              init = false;
                            };
                          }
                          return val.value;
                        },
                        backgroundColor: "#666"
                      },
                      lineStyle: {
                        color: "#2285d3",
                        width: 2
                      },
                      handle: {
                        show: true,
                        size: 30,
                        margin: 40,
                      },
                      "value": x0,
                      snap: true,
                    }
                  }, {
                    type: "value",
                    max: "dataMax",
                    axisLabel: {
                      show: false
                    },
                    axisPointer: {
                      label: {
                        formatter: function (val) {

                          if (val.seriesData[0]) {
                            // 
                            target.setValue("x1", val.value);
                            if (val.seriesData[0].data) {
                              target.setValue("y1", val.seriesData[0].data[1]);
                            };
                            target.trigger("handleChange");
                          }
                          return val.value;
                        },
                        backgroundColor: "#888"
                      },
                      lineStyle: {
                        color: "#ff3a3a",
                        width: 2
                      },
                      handle: {
                        show: true,
                        size: 30,
                        margin: 40
                      },
                      "value": 180,
                      snap: true,
                    },
                    gridIndex: 1
                  }],
                  yAxis: [{
                    //show : false,
                    type: "value",
                    splitLine: { show: true }
                  }, {
                    type: "value",
                    splitLine: { show: false },
                    gridIndex: 1
                  }],
                  toolbox: {
                    feature: {
                      dataZoom: {
                        yAxisIndex: false
                      },
                      restore: {},
                      saveAsImage: {
                        type: "png",
                        name: "振动分析-时域分析图",
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
                  series: [{
                    type: 'line',
                    showSymbol: false,
                    data: valueList,
                    markLine: markLine,
                    markPoint: markPoint,
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    lineStyle: {
                      normal: {
                        opacity: 1
                      }
                    }
                  }, {
                    type: 'line',
                    showSymbol: false,
                    lineStyle: {
                      normal: {
                        opacity: 0
                      }
                    },
                    data: valueList
                  }]
                };
                var ins = target.render(option);
                ins.on("mousemove", function (event) {

                })
              };
              render();
              /* target.on("renderChart", function () {
                render(undefined, "renderChart");
              }) */
            } else {
              target.showNoData();
            }
          })
        };
        renderROWEchart(ci, kpi, time);
      });
    }
  }
});