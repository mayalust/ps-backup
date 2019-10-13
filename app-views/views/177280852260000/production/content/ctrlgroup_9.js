/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  bootstrap: true,
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var workObj = target.getParameter("id");
      //
      var filter = {
        "layer": 1,
        "modelId": 302,
        "domains": workObj
      };
      function getFakeData(rowName, columnName) {
        var rows = ['加热炉', '粗轧E1/R1', '卷取', '精轧机组', '层流冷却系统'];
        if (columnName == '综合诊断准确率') {
          if (rowName == '加热炉') {
            return 83;
          } else if (rowName == '粗轧E1/R1') {
            return 81;
          } else if (rowName == '卷取') {
            return 83
          } else if (rowName == '精轧机组') {
            return 85;
          } else if (rowName == '层流冷却系统') {
            return 82;
          } else if (rowName == 'Z301皮带') {
            return 81;
          } else if (rowName == 'Y302皮带') {
            return 80;
          } else if (rowName == 'TRT发电机组') {
            return 85;
          } else if (rowName == 'X303皮带') {
            return 83;
          } else if (rowName == 'X302皮带') {
            return 84;
          } else if (rowName == 'Y301皮带') {
            return 82;
          } else if (rowName == '原料系统') {
            return 83;
          } else if (rowName == '中控电气室') {
            return 80;
          } else if (rowName == '主排电气室') {
            return 85;
          } else if (rowName == '主排系统') {
            return 83;
          }
        } else if (columnName == '智能诊断准确率') {
          if (rowName == '加热炉') {
            return 75 * 1.05;
          } else if (rowName == '粗轧E1/R1') {
            return 73 * 1.05;
          } else if (rowName == '卷取') {
            return 72 * 1.05;
          } else if (rowName == '精轧机组') {
            return 71 * 1.05;
          } else if (rowName == '层流冷却系统') {
            return 74 * 1.05;
          } else if (rowName == 'Z301皮带') {
            return 69 * 1.05;
          } else if (rowName == 'Y302皮带') {
            return 75 * 1.05;
          } else if (rowName == 'TRT发电机组') {
            return 79 * 1.05;
          } else if (rowName == 'X303皮带') {
            return 70 * 1.05;
          } else if (rowName == 'X302皮带') {
            return 76 * 1.05;
          } else if (rowName == 'Y301皮带') {
            return 65 * 1.05;
          } else if (rowName == '原料系统') {
            return 70 * 1.05;
          } else if (rowName == '中控电气室') {
            return 72 * 1.05;
          } else if (rowName == '主排电气室') {
            return 75 * 1.05;
          } else if (rowName == '主排系统') {
            return 70 * 1.05;
          }
        } else if (columnName == '大数据预警准确率') {
          if (rowName == '加热炉') {
            return 90;
          }
        }
        return 0;
      }
      target.getDomainsByFilter(filter, function(returnData) {
        var baseName = [];
        var mountain = [];
        returnData = returnData.reduce(function(a, b) {
          if (b.values.hide) {
            return a;
          }
          var find = returnData.find(function(e) {
            return e.id == b.parentID;
          });
          if (!find) {
            a.push(b)
          }
          return a;
        },
        []);

        for (var i = 0; i < returnData.length; i++) {
          baseName.push(returnData[i].name);
          mountain.push(returnData[i].id);
        }
        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": mountain,
          "kpiCodes": [6106]
        }];
        target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {

          var data = returnData.data;
          var synthesize = [];
          var capacity = [];
          var big = [];
          for (var j = 0; j < mountain.length; j++) {
            for (var i = 0; i < data.length; i++) {
              //
              if (data[i].nodeId == mountain[j]) {
                if (data[i].instance == '1,all,values') {
                  synthesize.push(data[i].value.toFixed(0))
                } else if (data[i].instance == '2,all,values') {
                  capacity.push(data[i].value.toFixed(0))
                } else if (data[i].instance == '3,all,values') {
                  big.push(data[i].value.toFixed(0))
                }
              }
            }

            var jlength = (j + 1);
            if (synthesize.length != jlength) {
              var add = jlength - synthesize.length;
              for (var z = 0; z < add; z++) {
                synthesize.push('0')
              }

            }
            if (capacity.length != jlength) {
              var add = jlength - capacity.length;
              for (var x = 0; x < add; x++) {
                capacity.push('0')
              }
            }
            if (big.length != jlength) {
              var add = jlength - big.length;
              for (var y = 0; y < add; y++) {
                big.push('0')
              }

            }

          }

          var column = ['区域', '综合诊断准确率', '智能诊断准确率', '大数据预警准确率'];
          var inx = 0;
          var ctrlGroups = [column.map(function(elem) {
            var a = {
              type: "label",
              value: elem,
              class: inx ? (inx == 3 ? "col-md-4": "col-md-3") : "col-md-2",
              style: {
                "text-align": "center"
              }
            }
            inx++;
            return a;
          })];

          //var row = ['宝山','东山','天山','湛江'];
          var row = baseName;
          for (var i in row) {
            var arr = [{
              type: "label",
              value: row[i],
              //class : "col-md-3",
              class: "col-md-2",
              style: {
                "text-align": "left"
              }
            }];
            var rowName = row[i];
            column.slice(1, 4).forEach(function(item, index) {
              var val = getFakeData(rowName, item).toFixed(0);
              arr.push({
                type: "progressbar",
                shownumber: true,
                value: val,
                class: index == 2 ? "col-md-4": "col-md-3"
              });
            })
            /*var index = i;
            for (var i in column.slice(1, 4)) {
              if (i == '0') {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  value: synthesize[index],
                  class: i == 2 ? "col-md-3" : "col-md-3"
                }])
              } else if (i == 1) {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  value: capacity[index],
                  class: i == 2 ? "col-md-3" : "col-md-3"
                }])
              } else if (i == 2) {
                Array.prototype.push.apply(arr, [{
                  shownumber: true,
                  type: "progressbar",
                  value: big[index],
                  class: i == 2 ? "col-md-4" : "col-md-4"
                }])
              }

            }*/
            ctrlGroups.push(arr);
          };

          target.render(ctrlGroups);
        })
      })
    }
  }
};