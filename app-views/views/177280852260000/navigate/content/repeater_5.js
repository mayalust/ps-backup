/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var id = target.getParameter("id") || target.getValue("device/id");
      var main = target.getParameter("main");
      target.getDomainAreaLineTree(function(find) {
        if (find) {
          find.getChildren(function(n, i, l) {
            return l < 2;
          }, true).then(function(domains) {
            var mountain = domains.map(function(elem) {
              return elem.id;
            });

            var params = ["kpi", {
              "isRealTimeData": true,
              "includeInstance": true,
              "nodeIds": mountain,
              "kpiCodes": [6100]
            }];
            target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
              var kpiNames = ['正常', '注意', '警告', '监测台数'];
              var kpiIds = ['severity,4', 'severity,3', 'severity,2', 'description']
              var data = returnData.data;

              var all = [];
              var normal = [];
              var notice = [];
              var warning = [];
              var risk = [];
              var data = returnData.data;
              //对数据的处理
              for (var j = 0; j < domains.length; j++) {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].nodeId == domains[j].id) {
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
                }
                var jlength = (j + 1)
                if (all.length != jlength) {
                  var add = jlength - all.length;
                  for (var z = 0; z < add; z++) {
                    all.push('0')
                  }
                }
                if (notice.length != jlength) {
                  var add = jlength - notice.length;
                  for (var z = 0; z < add; z++) {
                    notice.push('0')
                  }
                }
                if (normal.length != jlength) {
                  var add = jlength - normal.length;
                  for (var x = 0; x < add; x++) {
                    normal.push('0')
                  }
                }
                if (warning.length != jlength) {
                  var add = jlength - warning.length;
                  for (var y = 0; y < add; y++) {
                    warning.push('0')
                  }

                }
                if (risk.length != jlength) {
                  var add = jlength - risk.length;
                  for (var y = 0; y < add; y++) {
                    risk.push('0')
                  }
                }
              }
              var list = domains.map(function(domain, index) {
                var num = index;
                var rs = {};
                rs.province = domain.label;
                rs.description = domain.description;
                rs.data = kpiNames.map(function(kp, index) {
                  var r = {};
                  r.name = kpiNames[index];
                  //   r.value = data.reduce(function(a, b){
                  //     if(b.instance == kpiIds[index]){
                  //       //a++;
                  //       return a = (b.value);

                  //     }

                  //   },0);
                  //为0的时候为了测试，用模拟数据
                  // r.value = r.value || parseInt(Math.random() * 10);
                  //为0的时候为了测试，用模拟数据
                  if (index == 0) {
                    r.value = normal[num]
                  } else if (index == 1) {
                    r.value = notice[num]
                  } else if (index == 2) {
                    r.value = warning[num]
                  } else if (index == 3) {
                    r.value = all[num]
                  }
                  return r;
                })
                return rs;
              });

              for (var j = 0; j < list.length; j++) {
                if (list[j].description) {
                  var listNum = list[j];
                  list.splice(j, 1)
                  list.unshift(listNum)
                }
              }
              
              target.render(list);
            });
          });
        }
      });
    }
  }
}