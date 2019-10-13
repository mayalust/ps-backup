/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var id = target.getParameter("id");
      target.getDomainAreaLineTree(function(find) {
        if (find) {
          var label = find.label;
          var description = find.description;
          var domains = [];
          domains.push(label);
          var params = ["kpi", {
            "isRealTimeData": true,
            "includeInstance": true,
            "nodeIds": [id],
            "kpiCodes": [6100]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
            var kpiNames = ['正常', '注意', '警告', '监测台数', '重要台数', '数据采集点'];
            var data = returnData.data;
            var all = [];
            var normal = [];
            var notice = [];
            var warning = [];
            var risk = [];
            var data = returnData.data;
            //对数据的处理
            for (var i = 0; i < data.length; i++) {
              if (data[i].instance == "severity,0") {
                all.push(data[i].value)
              } else if (data[i].instance == "severity,-1") {
                normal.push(data[i].value)
              } else if (data[i].instance == "severity,2") {
                notice.push(data[i].value)
              } else if (data[i].instance == "severity,3") {
                warning.push(data[i].value)
              } else if (data[i].instance == "severity,4") {
                risk.push(data[i].value)
              }
            }
            if (all.length != 1) {
              all.push('0')
            }
            if (notice.length != 1) {
              notice.push('0')
            }
            if (normal.length != 1) {
              normal.push('0')
            }
            if (warning.length != 1) {
              warning.push('0')
            }
            if (risk.length != 1) {
              risk.push('0')
            }
            var params = ["kpi", {
              "isRealTimeData": true,
              "includeInstance": true,
              "nodeIds": [id],
              "kpiCodes": [6104]
            }];
            target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
              gather = returnData.data[0].value;
              var list = domains.map(function(domain, index) {
                var num = index;
                var rs = {};
                rs.province = label;
                rs.data = kpiNames.map(function(kp, index) {
                  var r = {};
                  r.name = kpiNames[index];
                  if (index == 0) {
                    r.value = normal[num]
                  } else if (index == 1) {
                    r.value = notice[num]
                  } else if (index == 2) {
                    r.value = warning[num]
                  } else if (index == 3) {
                    r.value = all[num]
                  } else if (index == 4) {
                    r.value = description;
                  } else if (index == 5) {
                    r.value = gather;
                  }
                  return r;
                })
                return rs;
              });
              target.render(list);
            })
          });
        }
      })
    }
  }
}