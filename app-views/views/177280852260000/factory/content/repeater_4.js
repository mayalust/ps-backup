/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {

      var target = event.target;

      var workObj = target.getParameter("id");
      var filter = {
        "layer": 1,
        "modelId": 301,
        "domains": workObj
      };
      target.getDomainsByFilter(filter, function(returnData) {
        var factoryName = [];
        var factory = [];
        for (var i = 0; i < returnData.length; i++) {
          factoryName.push(returnData[i].label);
          factory.push(returnData[i].id)
        }

        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": factory,
          "kpiCodes": [6101]
        }];
        target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {

          var data = returnData.data;
          var unfinished = [];
          var finished = [];

          for (var j = 0; j < factory.length; j++) {
            for (var i = 0; i < data.length; i++) {

              if (data[i].nodeId == factory[j]) {
                if (data[i].instance == 'state,0') {
                  unfinished.push(data[i].value)
                } else if (data[i].instance == 'state,1') {
                  finished.push(data[i].value)
                }
              }
            }
            var jlength = (j + 1);
            if (finished.length != jlength) {
              var add = jlength - finished.length;
              for (var x = 0; x < add; x++) {
                finished.push('0')
              }
            }
            if (unfinished.length != jlength) {
              var add = jlength - unfinished.length;
              for (var y = 0; y < add; y++) {
                unfinished.push('0')
              }
            }
          }






          var list = [];
          for (var i = 0; i < factoryName.length; i++) {
            var item = {
              factoryName: factoryName[i],
              unfinished: unfinished[i],
              finished: finished[i]
            }

            list.push(item);
          }


          target.render(list);
        })
      })
    }
  }
}