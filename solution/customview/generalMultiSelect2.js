define({
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var dItem, kpi;
      var duration = null;
      var resource = target.getValue("global/resource");
      var sensorId = target.getParameter("sensorId");
      var multiSelectValues = [];
      var success = function (resource) {
        multiSelectValues = [];
        var ci = [resource.id]; // 设备 526443915616079
        var modelId = [resource.modelId] // 获取modelId
        var accessConfigValues = resource.physicalConfig.accessConfigs;
        target.getAttrsByResource(resource, function (attrs) {
          var MeasurePointLocate = attrs['MeasurePointLocate'];
          var sourceValue = eval(MeasurePointLocate)|| "";
          var sourceValueArr = [];
          for (var i in sourceValue) {
            for (var j in sourceValue[i]) {
              for(var k in sourceValue[i][j]){
                var ins = sourceValue[i][j][k];
                ins.configValues = accessConfigValues.find(function(accessConfigValue){
                  return ins.name == accessConfigValue.instance;
                })
                sourceValueArr.push(ins);
              }
            }
          };
          var whole = sourceValueArr.find(function(elem){
            var regExp = /\s*整体\s*/g;
            return regExp.test(elem.label);
          }) || {};
          var options = accessConfigValues.filter(function(elem){
            return elem.instance == whole.name;
          });
          multiSelectValues = [];
          if(options.length > 0){
            var find = options.find(function(op){
              return op.dataItemId == sensorId;
            });
            if(find){
              var inx = options.indexOf(find);
              options.splice(inx, 1);
              options.unshift(find);
            }
            multiSelectValues.push(options[0]);
          }
          target.trigger("showGeneralChart2", multiSelectValues.length > 0);
          var render = function () {
            target.nextTick(function(){
              target.trigger("multiSelectValues2",multiSelectValues);
            });
            var ctrlGroups = [
              [{
                type : "label",
                value : "工艺类数据项"
              }],[{
                type: "checkboxlist",
                value: multiSelectValues.map(function(source){
                  return source.kpiId;
                }),
                style:{
                  padding:"0px"
                },
                on: {
                  change: function (elem) {
                    var elemValues = elem.value;
                    multiSelectValues = elem.value;
                    render();
                  }
                },
                options: options,
                format: {
                  "id": "kpiId",
                  "label": "kpiName"
                }
              }]
            ];
            target.render(ctrlGroups);
            runtime("下免checkbox渲染完成");
          };
          render();
        })
      };
      if(resource){
        success(resource);
      }
      target.off("tree_resourceChange.generalChartMulti2");
      target.on("tree_resourceChange.generalChartMult2", function tree_resourceChange_multiSelect2(node) {
        debugger;
        success(node.resource);
      })
    }
  }
})