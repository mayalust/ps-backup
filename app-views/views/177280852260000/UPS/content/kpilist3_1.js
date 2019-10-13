/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      ；
      var target = event.target;

      var resource = target.getValue("global/resource");

      if (resource) {

        //从模版上获取数据项的单位
        var kpiDic = target.getRootScope("rootModelsDic")[resource.modelId].kpiDic;

        var accessConfigs = resource.physicalConfig.accessConfigs.filter(function(ele) {
          return ele.instance == "01"
        })








        // 从设备上获取到所有的数据项
        var kpiObj = {};
        for (var i in accessConfigs) {
          kpiObj[accessConfigs[i].dataItemId] = accessConfigs[i];
        }

        // 获取到设备状态的数据
        var accessConfigs1 = resource.physicalConfig.accessConfigs.filter(function(ele) {
          return ele.instance == "02"
        })
        var kpiObj1 = {};
        for (var i in accessConfigs1) {
          kpiObj1[accessConfigs1[i].dataItemId] = accessConfigs1[i];
        }





        var params = ["kpi", {
          "category": "ci",
          "isRealTimeData": true,
          "timePeriod": 0,
          "nodeIds": [resource.id],
          "kpiCodes": accessConfigs.map(function(ele) {
            return ele.dataItemId
          }),
          "startTime": null,
          "endTime": null,
          "timeRange": "",
          "statisticType": "psiot",
          "condList": [],
          "includeInstance": true,
          "queryInstances": "01"
        }]
        // 获取kpi对应的值
        target.postService("kpiDataFlexService", "getKpiValueList", params, function(tc) {

          if (tc.code == 0) {
            var kpiValueObj = {};
            for (var i in tc.data) {
              kpiValueObj[tc.data[i].kpiCode] = tc.data[i];
            }
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
              var alertLevelObj1 = {},
                alertLevelObj2 = {};
              for (var i in rs.data) {
                var instance = rs.data[i].instance.split("_");
                if (instance[1] == "01") {
                  alertLevelObj1[instance[0]] = rs.data[i];
                } else if (instance[1] == "02") {
                  alertLevelObj2[instance[0]] = rs.data[i];
                }

              }
              // 获取到设备状态的数据
              var deviceStatus = {
                kpiObj: kpiObj1,
                alertLevelObj: alertLevelObj2
              }
              target.trigger("deviceStatus", deviceStatus);

              target.render(kpiObj, kpiValueObj, kpiDic, alertLevelObj1);
            }

          })

        })
      }

    }
  }
}