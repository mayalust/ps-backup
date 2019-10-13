/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var order = {
        33001: 0,
        33002: 2,
        33004: 1
      }
      var statusMap, kpiValueMap;
      target.getDomainAreaLineTree(function(resource) {
        function getKpiValueList(kpis, callback) {
          var params = ["kpi", {
            "category": "ci",
            includeInstance: true,
            isRealTimeData: true,
            nodeIds: [resource.id],
            kpiCodes: kpis
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function(e) {
            if (e.code == 0) {
              callback && callback.call(this, e.data);
            }
          });
        }
        resource.getMeasureLocate().then(function(sensors) {
          getKpiValueList([999997], function(valuelist) {
            statusMap = valuelist.reduce(function(a, b) {
              var instance = b.instance.split("_");
              var ins = instance.pop();
              a[ins] = a[ins] || 0;
              a[ins] = b.value > a[ins] ? b.value : a[ins];
              return a;
            }, {})
            getKpiValueList([33001, 33004, 33002], function(valuelist) {
              kpiValueMap = valuelist.reduce(function(a, b) {
                var instance = b.instance;
                var kpiCode = b.kpiCode;
                a[instance] = a[instance] || {};
                a[instance][kpiCode] = b.value;
                return a;
              }, {})
              var dt = sensors.map(function(d) {
                d.status = d.kpis.filter(function(d) {
                  return order[d.dataItemId] != null;
                }).map(function(d) {
                  var num = kpiValueMap[d.instance][d.dataItemId]
                  d.name = d.kpiName;
                  d.data = typeof num == "number" ? num.toFixed(2) : "-";
                  return d;
                });
                d.status.sort(function(a, b) {
                  return order[a.dataItemId] - order[b.dataItemId];
                })
                var status = d.name + "_" + statusMap[d.name];
                d.status.splice(1, 0, status);
                return d;
              });

              function success(datas) {
                var render = function() {
                  target.render(datas);
                };
                render();
              };
              success(dt);
            })
          });
        })
      })
      target.on("queryTablelist1", function(data) {
        target.navigateTo("index", {
          main: 2,
          sub: 0,
        }, "self");
      });
    }
  }
}