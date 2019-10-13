/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      var resource = target.getValue("global/resource");

      if (resource) {

        var accessConfigs = resource.physicalConfig.accessConfigs;

        //从模版上获取数据项的单位
        var kpiDic = target.getRootScope("rootModelsDic")[resource.modelId].kpiDic;

        // 从设备上获取到所有的数据项
        var kpiCodeObj = {};
        for (var i in accessConfigs) {
          kpiCodeObj[accessConfigs[i].dataItemId] = accessConfigs[i];
        }

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
        var instanceObj = {};
        instanceList.sort(function(a, b) {
          return a.name - b.name;
        })
        for (var i in instanceList) {
          instanceObj[instanceList[i].name] = instanceList[i];
        }

        // 获取背景色的kpi
        var params1 = ["kpi", {
          includeInstance: true,
          isRealTimeData: true,
          nodeIds: [resource.id],
          kpiCodes: [999997]
        }];
        target.postService("kpiDataFlexService", "getKpiValueList", params1, function(rs) {

          var alertLevelObj = {};
          for (var i in rs.data) {
            var instance = rs.data[i].instance.split("_");
            alertLevelObj[instance[1]] = alertLevelObj[instance[1]] && alertLevelObj[instance[1]] > rs.data[i].value ? alertLevelObj[instance[1]] : rs.data[i].value;
          }

          // 
          var params2 = ["kpi", {
            includeInstance: true,
            isRealTimeData: true,
            nodeIds: [resource.id],
            kpiCodes: accessConfigs.map(function(ele) {
              return ele.dataItemId
            })
          }];

          target.postService("kpiDataFlexService", "getKpiValueList", params2, function(tc) {
            if (tc.code == "0") {

              var datas = tc.data;
              var datasObj = {};
              for (var i in datas) {
                datasObj[datas[i].kpiCode] = datas[i];
              }

              var instanceList = {}
              for (var i in instanceObj) {

                instanceList[i] = [];
                for (var j = 0; j < accessConfigs.length; j++) {

                  if (accessConfigs[j].instance * 1 == instanceObj[i].name * 1) {
                    var kpiItem = {
                      instance: accessConfigs[j].instance,
                      instanceName: instanceObj[accessConfigs[j].instance].label,
                      kpiCode: accessConfigs[j].dataItemId,
                      kpiName: accessConfigs[j].kpiName,
                      alertLevel: alertLevelObj[accessConfigs[j].instance] ? alertLevelObj[accessConfigs[j].instance] : 1,
                      value: datasObj[accessConfigs[j].dataItemId] ? datasObj[accessConfigs[j].dataItemId].value + kpiDic[accessConfigs[j].dataItemId].unit : "-",
                      arisingTime: datasObj[accessConfigs[j].dataItemId] ? datasObj[accessConfigs[j].dataItemId].arisingTime : "-",
                    }
                    instanceList[i].push(kpiItem);
                  }
                }

              }

              target.render(instanceList);

            }
          });

        });
      }
    }
  }
}