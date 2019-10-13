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
            "kpiCodes": [6006]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
            var kpiNames = ['正常', '注意', '警告'];
            var normal = [];
            var notice = [];
            var warning = [];
            var data = returnData.data.sort();
            var newdata = [];
            for (var i = 0; i < data.length; i++) {
              if (data[i].instance.split(",")[1] == "1") {
                for (var j = 0; j < data.length; j++) {
                  if (data[i].instance.split(",")[0] == data[j].instance.split(",")[0]) {
                    newdata.push(data[j]);
                  }
                }
              }
            };
            for (var i = 0; i < newdata.length; i++) {
              if (newdata[i].instance.split(",")[1] == "1") {
                normal.push(newdata[i].value)
              } else if (newdata[i].instance.split(",")[1] == "2") {

                notice.push(newdata[i].value)
              } else if (newdata[i].instance.split(",")[1] == "3") {
                warning.push(newdata[i].value)
              }
            }
            var datas = [];
            for (var i = 0; i < newdata.length; i++) {
              var datas22 = [];
              if (newdata[i].instance.split(",")[1] == "1") {

                datas22.push(newdata[i].instance.split(",")[0])
              }
              //
              if (datas22[0]) {
                datas.push(datas22[0]);
              }
              // datas.push(datas22[0]);
            }
            var list11 = [];
            for (var i = 0; i < datas.length; i++) {
              var label = {
                label: datas[i]
              }
              list11.push(label)
            }
            var list = list11.map(function(domain, index) {
              var num = index;
              var rs = {};
              rs.province = list11[index].label;

              rs.data = kpiNames.map(function(kp, index) {
                var r = {};
                r.name = kpiNames[index];
                if (index == 0) {
                  r.value = normal[num]
                } else if (index == 1) {
                  r.value = notice[num]
                } else if (index == 2) {
                  r.value = warning[num]
                }
                return r;
              })
              return rs;
            });
            target.render(list);
          });
        }
      })
    }
  }
}