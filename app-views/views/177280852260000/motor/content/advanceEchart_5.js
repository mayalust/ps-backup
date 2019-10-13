/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var global = event.global;
      var deviceId = target.getParameter('id');
      var series = [];
      var time = [];
      var minDate;
      var ins;
      if (!deviceId) return;
      target.getDevicesByCondition({
          'resourceId': deviceId
        },
        function(returnData) {
          // 
          // 
          var kpiCodes = [],
            kpis = [];
          for (var i = 0; i < returnData[0].physicalConfig.accessConfigs.length; i++) {
            kpiCodes.push(returnData[0].physicalConfig.accessConfigs[i].dataItemId);
            kpis.push(returnData[0].physicalConfig.accessConfigs[i]);
          };
          var kpiQueryModel = {
            "statisticType": "",
            "category": "time",
            "isRealTimeData": true,
            "nodeIds": [deviceId],
            "kpiCodes": kpiCodes,
            "queryInstances": null,
            "startTime": null,
            "endTime": null,
            //"timePeriod":3000000,
            "timePeriod": 120000,
            "timeRange": "",
            "statisticType": "psiot",
            "includeInstance": true,
            //"condList": []
          }
          var params = ["kpi", kpiQueryModel];
          var render = function(series) {
            //
            var option = {
              // title: {
              //   text: '电机电流趋势',
              //   textStyle:{
              //     color:"white"
              //   }
              // },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  label: {
                    backgroundColor: '#6a7985'
                  }
                },
                formatter: function(params, b, c) {
                  var str = "";
                  for (var i in params) {
                    var time = params[i].value[0];
                    var val = params[i].value[1];
                    var marker = params[i].marker;
                    var seriesIndex = params[i].seriesIndex;
                    var d = minDate.clone().addTimeStamp(time);
                    if (kpis) {
                      str += marker + series[seriesIndex].name;
                      // 
                      // 
                      if (val == false || val == true) {
                        if (val == false) {
                          val = '关'
                        } else {
                          val = '开'
                        }
                        str += ":" + val + "[" + d.getDateString("MM/dd,hh:mm:ss") + "]<br>";
                      } else {
                        str += ":" + val + "[" + d.getDateString("MM/dd,hh:mm:ss") + "]<br>";
                      }

                    };
                  }
                  return str;
                }
              },
              legend: {
                data: series.map(function(kpi) {
                  return kpi.name;
                })
              },
              grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                boundaryGap: false,
                type: 'value',
                dataL: "",
                axisLabel: {
                  formatter: function(params) {
                    var d = minDate.clone().addTimeStamp(params)
                    //return d.getDateString("MM/dd,hh:mm:ss");
                    return d.getDateString("hh:mm:ss");
                  }
                }
              },
              yAxis: [{
                type: 'value'
              }],
              series: series
            };

            target.render(option);

          }

          target.postService("kpiDataFlexService", "getKpiValueList", params, function(d) {
            var returnData = d.data;
            if (returnData.length > 0) {
              minDate = returnData.reduce(function(a, b) {
                  var dt = target.dateHandler(b.arisingTime);
                  if (a) {
                    if (dt.before(a)) {
                      return dt;
                    } else {
                      return a;
                    }
                  } else {
                    return dt
                  }
                },
                null);
            };
            var inx = 0;
            var colors = ['#2b97fc', '#b76efc', '#7dc5e2', '#e98b74', '#eaeaea'];
            series = kpis.filter(function(kpi) {
              var rdata = returnData.filter(function(vdata) {
                var kpiCode = vdata.kpiCode;
                //var instance = vdata.instance;
                return kpi.dataItemId == kpiCode //&& kpi.instance == instance;
              });
              return rdata.length > 0;
            }).map(function(kpi) {
              var rdata = returnData.filter(function(vdata) {
                var kpiCode = vdata.kpiCode;
                //var instance = vdata.instance;
                return kpi.dataItemId == kpiCode //&& kpi.instance == instance;
              });
              rdata.sort(function(a, b) {
                var dt1 = new Date(a.arisingTime);
                var dt2 = new Date(b.arisingTime);
                return dt1.getTime() - dt2.getTime();
              });
              var rs = {
                name: kpi.kpiName,
                dataItemId: kpi.dataItemId,
                type: "line",
                //stack: '数值',
                data: rdata.map(function(elem) {
                  var dt = new Date(elem.arisingTime);
                  var dh = target.dateHandler(dt);
                  var result = dh.minus(minDate);
                  return [result, elem.value]
                }),
                symbolSize: 0,
                lineStyle: {
                  normal: {
                    color: colors[inx]
                  }
                },
                itemStyle: {
                  normal: {
                    color: colors[inx],
                    borderColor: colors[inx] // 点边线的颜色
                  }
                }
              };
              inx++;
              return rs;
            });
            render(series);
            target.setTimeInterval(function() {
                target.getKpiValueCi([deviceId], kpiCodes, function(data) {
                  for (var i in series) {
                    var time = series[i]['data'][0][0];
                    if (time > 20 * 60 * 1000) {
                      series[i]['data'].shift();
                    }
                  };
                });
                for (var i = 0; i < series.length; i++) {
                  var find = data.find(function(n) {
                    return n.kpiCode === series[i].dataItemId;
                  });
                  if (find) {
                    var dt = new Date(find.arisingTime);
                    var dh = target.dateHandler(dt);
                    var result = dh.minus(minDate);
                    series[i].data.push([result, find.value]);
                  }

                }
              },
              10000);
          });
        })
    }
  }
}