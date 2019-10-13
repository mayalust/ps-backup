/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      var resource = target.getValue("global/resource");

      if (resource) {



        // 获取到设备的测点
        var instanceList = [];

        var MeasurePointLocate = eval(resource.values.MeasurePointLocate);

        for (var i = 0; i < MeasurePointLocate.length; i++) {
          for (var k in MeasurePointLocate[i]) {
            for (var j = 0; j < MeasurePointLocate[i][k].length; j++) {
              var item = {
                name: MeasurePointLocate[i][k][j].name,
                label: MeasurePointLocate[i][k][j].label
              }
              instanceList.push(item);
            }
          }
        }

        var kpiObj = {};
        for (var i in instanceList) {
          kpiObj[instanceList[i].name] = instanceList[i];
        }

        var params = ["kpi", {
          "category": "ci",
          "isRealTimeData": true,
          "timePeriod": 0,
          "nodeIds": [resource.id],
          "kpiCodes": [999997],
          "startTime": null,
          "endTime": null,
          "timeRange": "",
          "statisticType": "psiot",
          "condList": [],
          "includeInstance": true,
          "queryInstances": ""
        }]
        //  获取告警的状态
        target.postService("kpiDataFlexService", "getKpiValueList", params, function(rs) {

          if (rs.code == 0) {
            var alertLevelObj = {},
              alertLevelObj2 = {};
            for (var i in rs.data) {
              var instance = rs.data[i].instance.split("_");

              alertLevelObj[instance[1]] = alertLevelObj[instance[1]] && alertLevelObj[instance[1]] > rs.data[i].value ? alertLevelObj[instance[1]] : rs.data[i].value;
            }

            var list = [];
            for (var i in kpiObj) {
              var item = {
                kpiName: kpiObj[i].name,
                kpiValue: alertLevelObj[i] ? alertLevelObj[i] : "1"
              }
              list.push(item);
            }



            function sliceArr(array, size) {
              var result = [];
              for (var x = 0; x < Math.ceil(array.length / size); x++) {
                var start = x * size;
                var end = start + size;
                result.push(array.slice(start, end));
              }
              return result;
            }


            target.render(sliceArr(list.sort(function(a, b) {
              return a.kpiName * 1 - b.kpiName * 1
            }), list.length / 16));

          }

        })

      }

    }
  }
}