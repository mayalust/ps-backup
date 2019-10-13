define({
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var color = "#ffe400";
      var kpi;
      var LENGTH = 50;
      target.$getCurrentResource(function (resource) {
        var sensor = target.getValue("global/sensor") || {};
        var time = target.getValue("global/time") || 0;
        var ci = [resource.id];
        var renderFFTEchart = function (ci, kpi, time) {
          time = time || target.dateHandler();
          var params = {
            time: 0,
            kpiCodes: kpi || [],
            includeInstance: sensor ? true : false,
            queryInstances: sensor ? sensor.instance : null,
            isRealTimeData: false,
            nodeIds: ci || [],
            startTime: time.getUTCDateString(),
            endTime: time.getUTCDateString(),
            transformerType: "FFT"
          }
          target.showLoading();
          target.hideNoData();
          event.target.postService("kpiDataFlexService", "getKpiValueList", ["kpi", params],
            function (returnData) {
              target.hideLoading();
              if (returnData.data.length > 0) {
                var data = eval(returnData.data[0].value);
                var valueList = data[0].map(function (n, i) {
                  return [n, data[1][i]];
                });
                var render = function (init, sub) {
                  var type = target.getValue("type") || 0;
                  var x0 = target.getValue("x0") || 0;
                  var x1 = target.getValue("x1") || 180;
                  if (type == 0) {
                    var markLine = undefined;
                    var markPoint = undefined;
                  } else if (type == 1) {
                    var markLine = {
                      animation: false,
                      symbol: 'none',
                      silent: false,
                      lineStyle: {
                        normal: {
                          width: 1,
                          color: "#436fff",
                          type: 'solid'
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          position: 'end',
                          formatter: function (elem) {
                            var v = elem.data.value - 0;
                            return (typeof v === "number" && v === v ? v.toFixed(2) : "-") + "Hz";
                          }
                        }
                      },
                      data: (function () {
                        var rs = [];
                        for (i = 0; i < 10; i++) {
                          var item = {
                            xAxis: x0 * (i + 2) + ''
                          };
                          rs.push(item)
                        }
                        return rs;
                      })()
                    }
                    var markPoint = {
                      symbol: "circle",
                      symbolSize: 8,
                      animation: false,
                      silent: false,
                      label: {
                        normal: {
                          show: false
                          //                        formatter: '{b}: {d}'
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: "#fff",
                          borderColor: "blue"
                        }
                      },
                      data: (function () {
                        var rs = [];
                        for (i = 0; i < 10; i++) {
                          var yData = data[x0 / 1 * (i + 2)];
                          if (yData) {
                            var item = {
                              xAxis: x0 * (i + 2) + '',
                              yAxis: yData[1]
                            };
                            rs.push(item)
                          }
                        }
                        return rs;
                      })()
                    }
                  } else if (type == 2) {
                    var markLine = {
                      animation: false,
                      symbol: 'none',
                      silent: false,
                      lineStyle: {
                        normal: {
                          color: "red",
                          type: 'solid'
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          position: 'end',
                          formatter: function (elem) {
                            var v = elem.data.value - 0;
                            return (typeof v === "number" && v === v ? v.toFixed(2) : "-") + "Hz";
                          }
                        }
                      },
                      data: (function () {
                        var rs = [];
                        for (var i = -5; i < 7; i++) {
                          rs.push({
                            xAxis: parseFloat(x1) + i * (parseFloat(x0) - parseFloat(x1))
                          })
                        };
                        return rs;
                      })()
                    };
                    var markPoint = {
                      symbol: "circle",
                      symbolSize: 8,
                      snap: true,
                      animation: false,
                      silent: false,
                      label: {
                        normal: {
                          show: false
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: "#fff",
                          borderColor: "red"
                        }
                      },
                      data: (function () {
                        var rs = [];
                        for (var i = -5; i < 5; i++) {
                          rs.push({
                            xAxis: parseInt(x1) + i * (parseInt(x0) - parseInt(x1)),
                            yAxis: valueList[parseInt(x1) + i * (parseInt(x0) - parseInt(x1))]
                          })
                        };
                        return rs;
                      })()
                    }
                  } else if (type == 3) {
                    var markLine = {
                      animation: false,
                      symbol: 'none',
                      silent: false,
                      lineStyle: {
                        normal: {
                          color: "red",
                          type: 'solid'
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          position: 'end',
                          formatter: function (elem) {
                            var v = elem.data.value - 0;
                            return (typeof v === "number" && v === v ? v.toFixed(2) : "-") + "Hz";
                          }
                        }
                      },
                      data: (function () {
                        var rs = [],
                          i, j, temp;
                        for (i = 0; i < valueList.length; i++) {
                          j = rs.push(valueList[i]);
                          while (--j > 0) {
                            if (rs[j][1] > rs[j - 1][1]) {
                              temp = rs[j];
                              rs[j] = rs[j - 1];
                              rs[j - 1] = temp;
                            }
                          }
                          if (rs.length > 10) {
                            rs.pop();
                          }

                        }
                        return rs.map(function (n) {
                          return {
                            xAxis: n[0]
                          }
                        });
                      })()
                    };
                    var markPoint = {
                      symbol: "circle",
                      symbolSize: 8,
                      snap: true,
                      animation: false,
                      silent: false,
                      label: {
                        normal: {
                          show: false
                        }
                      },
                      itemStyle: {
                        normal: {
                          color: "#fff",
                          borderColor: "red"
                        }
                      },
                      data: (function () {
                        var rs = [];
                        for (var i = -5; i < 5; i++) {
                          rs.push({
                            xAxis: parseInt(x1) + i * (parseInt(x0) - parseInt(x1)),
                            yAxis: valueList[parseInt(x1) + i * (parseInt(x0) - parseInt(x1))]
                          })
                        };
                        return rs;
                      })()
                    }
                  };
                  var option = {
                    grid: [{
                      "top": "10%",
                      "width": "90%",
                      "left": "5%",
                      "height": "65%"
                    },
                    {
                      "top": "10%",
                      "width": "90%",
                      "left": "5%",
                      "height": "65%"
                    }],
                    tooltip: {
                      "alwaysShowContent": true,
                      triggerOn: 'none'
                    },
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
                    xAxis: [{
                      type: "value",
                      axisPointer: {
                        label: {
                          show: true,
                          formatter: function (val) {
                            if (val.seriesData[0]) {
                              target.setValue("x0", val.value);
                              target.setValue("y0", val.seriesData[0].data[1]);
                              target.trigger("handleChange1");
                              if (type == 1) {
                                if (init == false) {
                                  render();
                                };
                                init = false;
                              };
                            }
                            var v = val.value - 0;
                            return (typeof v === "number" && v === v) ? v.toFixed(2) : null
                          },
                          backgroundColor: "#666"
                        },
                        lineStyle: {
                          color: "blue",
                          width: 2
                        },
                        handle: {
                          show: true,
                          size: 30,
                          margin: 40,
                        },
                        "value": x0,
                        snap: false,
                      }
                    }, {
                      axisPointer: {
                        snap: true,
                        label: {
                          formatter: function (val) {
                            if (val.seriesData[0]) {
                              target.setValue("x1", val.value);
                              target.setValue("y1", val.seriesData[0].data[1]);
                              target.trigger("handleChange1");
                              if (type == 2) {
                                if (init == false) {
                                  render();
                                };
                                init = false;
                              };
                            }
                            var v = val.value - 0;
                            return (typeof v === "number" && v === v) ? v.toFixed(2) : null
                          },
                          backgroundColor: "#666"
                        },
                        lineStyle: {
                          color: "red",
                          width: 2
                        },
                        handle: {
                          show: true,
                          size: 30,
                          margin: 40,

                        },
                        "value": x1,
                        snap: false,
                      },
                      gridIndex: 1
                    }],
                    yAxis: [{
                      splitLine: {
                        show: true
                      }

                    },
                    {
                      splitLine: {
                        show: false
                      },
                      gridIndex: 1
                    }],
                    dataZoom: [{
                      show: true,
                      realtime: true,
                      start: 0,
                      end: 100,
                      xAxisIndex: [0, 1]
                    }],
                    series: [{
                      type: 'line',
                      showSymbol: false,
                      data: valueList,
                      markLine: markLine,
                      markPoint: markPoint
                    },
                    {
                      type: 'line',
                      showSymbol: false,
                      lineStyle: {
                        normal: {
                          opacity: 0
                        }
                      },
                      data: valueList,
                      xAxisIndex: 1,
                      yAxisIndex: 1
                    }]
                  };
                  target.render(option);
                };
                render();
                /* target.on("renderChart",
                  function() {
                    render(undefined, "renderChart");
                  }) */
              } else {
                target.showNoData();
              }
            })
        };
        resource ? target.getAttrsByModelId(resource.modelId, function (attrs) {
          var getArr = function (sourceValue) {
              var rs = [];
              for (var i in sourceValue) {
                for (var j in sourceValue[i]) {
                  for (var k in sourceValue[i][j]) {
                    rs.push(sourceValue[i][j][k])
                  }
                }
              };
              return rs;
            },
            sourceValue = (
              sourceValue = attrs.find(function (elem) {
                return elem.name == "MeasurePointLocate";
              }),
              sourceValue = sourceValue ? eval(sourceValue.sourceValue) : null,
              getArr(sourceValue)
            ),
            dItem = (sourceValue.find(function (elem) {
              return sensor ? sensor.instance == elem.name : false;
            }) || sourceValue[0]),
            accessConfigValues = resource.physicalConfig.accessConfigs,
            subaccessConfigValues = accessConfigValues.filter(function (value) {
              return value.instance == dItem.name;
            }),
            kpi = (subaccessConfigValues.find(function (elem) {
              return sensor ? elem.dataItemId == sensor.kpiId : false;
            }) || subaccessConfigValues[0]);
          kpi ? null : console.warn("kpi is " + Object.prototype.call(kpi));
          renderFFTEchart(ci, [kpi.dataItemId], time);
        }) : renderFFTEchart();
      });
    }
  }
});