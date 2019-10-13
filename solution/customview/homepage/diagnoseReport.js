define({
  "on": {
    "init": function (event, complete, df) {
      var target = event.target;

      function toPersentage(v) {
        v = v - 0;
        if (v !== v) {
          return 0;
        }
        return Math.round(v * 100)
      }

      function getChildren(callback) {
        target.getDomainAreaLineTree(function (resource) {
          resource.getChildren(function (n, i, l) {
              return l < 2
            })
            .then(function (children) {
              callback(children);
            })
        })
      }

      function getKpivValueList(nodeIds, kpiCodes, callback) {
        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": nodeIds,
          "kpiCodes": kpiCodes
        }]
        target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
          callback(returnData);
        }, {
          "isRealTimeData": true,
          "includeInstance": true
        })
      }
      getChildren(function (children) {
        var valueListMap = {},
          kpis = {
            7303: '综合诊断准确率',
            7304: '智能诊断准确率'
          },
          column = ['区域'].concat(Object.values(kpis));
        getKpivValueList(children.map(function (d) {
          return d.id;
        }), [7303, 7304], function (returnData) {
          valueListMap = returnData.data.reduce(function (a, b) {
            var kpiCode = b.kpiCode,
              nodeId = b.nodeId,
              instance = b.instance;
            if (instance == null) {
              return a;
            }
            a[nodeId] = a[nodeId] || {};
            a[nodeId][kpiCode] = b;
            return a;
          }, {});
          var inx = 0,
            ctrlGroups = [
              column.map(function (elem) {
                var a = {
                  type: "label",
                  value: elem,
                  class: inx ? (inx == 3 ? "col-md-4" : "col-md-5") : "col-md-2",
                  style: {
                    "text-align": "center"
                  }
                }
                inx++;
                return a;
              })
            ].concat(children.map(function (domain) {
              return [{
                type: "label",
                value: domain.label,
                class: "col-md-2",
                style: {
                  "text-align": "center",
                  "color": "white"
                }
              }].concat(Object.keys(kpis).map(function (kpi) {
                var val = valueListMap[domain.id] && valueListMap[domain.id][kpi] || {};
                return {
                  type: "progressbar",
                  shownumber: true,
                  value: toPersentage(val.value),
                  class: "col-md-5",
                }
              }));
            }));
          target.render(ctrlGroups);
        })
      })
    }
  }
});