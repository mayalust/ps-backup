define({
  on: {
    init: function (event) {
      runtime("右边树开始加载");
      var target = event.target;
      var global = event.global;
      var resource = target.getValue("global/resource");
      var multiSelectValues = [];
      var name = target.getValue("global/instance");
      var success = function (resource) {
        multiSelectValues = [];
        var accessConfigValues = resource.physicalConfig ? resource.physicalConfig.accessConfigs : null;
        target.getAttrsByResource(resource, function(attrs){
          var MeasurePointLocate = attrs.MeasurePointLocate;
          var sourceValue = eval(MeasurePointLocate)|| "";
          var sourceValueArr = [];
          for (var i in sourceValue) {
            for (var j in sourceValue[i]) {
              for(var k in sourceValue[i][j]){
                var ins = sourceValue[i][j][k];
                ins.configValues = accessConfigValues.filter(function(accessConfigValue){
                  return ins.name == accessConfigValue.instance;
                })
                sourceValueArr.push(ins);
              }
            }
          };
          sourceValueArr = sourceValueArr.filter(function(elem){
            var regExp = /\s*整体\s*/g;
            return !regExp.test(elem.label);
          });
          var render = function () {
            var getConfigValues = function(elem){
              return elem.configValues;
            }
            var kpiDes = multiSelectValues
              .filter(getConfigValues)
              .map(getConfigValues)[0];
            target.setValue("global/kpi",kpiDes);
            if(kpiDes){
              target.trigger("showGeneralChart", true);
              target.nextTick(function(){
                target.trigger("multiSelectValues",kpiDes);
              });
            } else {
              target.trigger("showGeneralChart", false);
            };
            var ctrlGroups = [
              [{
                type : "label",
                value : "测点选择"
              }],[{
                type: "checkboxlist",
                multiselect : false,
                value: multiSelectValues.map(function(source){
                  return source.name;
                }),
                style:{
                  "padding":"0px"
                },
                on: {
                  change: function (elem) {
                    var elemValues = elem.value;
                    multiSelectValues = elem.value;
                    render();
                  }
                },
                options: sourceValueArr,
                format: {
                  "id": "name",
                  "label": "label"
                }
              }]
            ];
            event.target.render(ctrlGroups);
          };
          runtime("右边树加载完成");
          if(sourceValueArr.length > 0){
            if(name){
              multiSelectValues = sourceValueArr.filter(function(elem){
                return elem.name == name;
              })
            } else {
              multiSelectValues = [sourceValueArr[0]]
            };
            render();
            target.trigger("showGeneralChart", true);
          } else {
            target.nextTick(function(){
              target.trigger("multiSelectValues",null);
              target.trigger("showGeneralChart", false)
            });
          }
          //})
        });
      };
      if(resource){
        success(resource);
      }
      target.off("tree_resourceChange.generalChartMulti");
      target.on("tree_resourceChange.generalChartMulti", function tree_resourceChange_multiSelect(node) {
        success(node.resource);
      })
    }
  }
})