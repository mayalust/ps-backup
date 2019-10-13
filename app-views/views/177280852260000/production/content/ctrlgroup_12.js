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
      target.getDomainsByFilter(filter, function(returnData) {
        var baseName = [];
        var mountain = [];
        returnData = returnData.reduce(function(a, b) {
          if (b.values.hide) {
            return a;
          }
          var find = returnData.find(function(e) {
            return e.id == b.parentID;
          })
          if (!find) {
            a.push(b)
          };
          return a;
        }, []);

        for (var i = 0; i < returnData.length; i++) {
          baseName.push(returnData[i].name)
          mountain.push(returnData[i].id)
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

                if (data[i].instance == '1,all,values' && data[i].nodeId == 554925002946086) {
                  synthesize.push(100);
                } else if (data[i].instance == '1,all,values') {
                  synthesize.push(data[i].value.toFixed(0))
                } else if (data[i].instance == '2,all,values' && data[i].nodeId == 554925002946086) {
                  capacity.push(100)
                } else if (data[i].instance == '2,all,values') {
                  capacity.push(data[i].value.toFixed(0))
                } else if (data[i].instance == '3,all,values') {
                  big.push(data[i].value.toFixed(0))
                }
              }
            }

            var jlength = (j + 1)
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
          var ctrlGroups = [
            column.map(function(elem) {
              var a = {
                type: "label",
                value: elem,
                // class : inx ? (inx == 3 ?"col-md-4" : "col-md-3") : "col-md-2",
                class: "col-md-3",
                style: {
                  "text-align": "center"
                }
              }
              inx++;
              return a;
            })
          ];

          //var row = ['宝山','东山','天山','湛江'];
          var row = baseName;
          for (var i in row) {
            var arr = [{
              type: "label",
              value: row[i],
              class: "col-md-3",
              //   class : "col-md-2",
              style: {
                // "text-align" : "left"
                "text-align": "center"
              }
            }];
            var index = i;
            for (var i in column.slice(1, 4)) {
              if (i == '0') {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  //value : rnd,
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
                  class: i == 2 ? "col-md-3" : "col-md-3"
                  //   class : i == 2 ? "col-md-4" : "col-md-4"
                }])
              }

            }
            ctrlGroups.push(arr);
          };

          target.render(ctrlGroups);
        })
      })
    }
  }
}