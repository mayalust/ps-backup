/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var id = target.getParameter("id");
      var units = {};
      //工艺参数
      target.getDomainAreaLineTree_alertStatus(function(domaintree) {

        // 
        var find = domaintree.find(function(node) {
          return node.id == id;
        });
        // 
        var modelId = [find.modelId]
        var accessConfigValues = find.physicalConfig.accessConfigs;
        // 

        target.getAttrsByResource(find, function(attrs) {
          var MeasurePointLocate = attrs["MeasurePointLocate"] || {};
          var sourceValue = eval(MeasurePointLocate) || "";
          var sourceValueArr = [];
          for (var i in sourceValue) {
            for (var j in sourceValue[i]) {
              for (var k in sourceValue[i][j]) {
                var ins = sourceValue[i][j][k];
                ins.configValues = accessConfigValues.find(function(accessConfigValue) {
                  return ins.name == accessConfigValue.instance;
                })
                sourceValueArr.push(ins);
                //multiSelectValues.push(ins);
              }
            }
          };
          var whole = sourceValueArr.find(function(elem) {
            var regExp = /\s*整体\s*/g;
            return regExp.test(elem.label);
          });
          var options = accessConfigValues.filter(function(elem) {
            return elem.instance == whole.name;
          });

          //   

          var ci = [find.id];
          var kpi = options.map(function(elem) {
            return elem.dataItemId;
          });

          //获取模板
          target.getKpisByModelId(modelId, function(subData) {
            var getValueList = function(valueList) {
              var kpiMap = {};
              valueList.forEach(function(kpiItem) {
                if (kpiItem.instance && kpiItem.instance.indexOf("avg") < 0) {
                  kpiMap[kpiItem.kpiCode + ""] = kpiItem;
                }
              })
              options = options.map(function(option) {
                /*var find = valueList.find(function(elem){
                 return elem.kpiCode == option.dataItemId && (!elem.instance || elem.instance.indexOf("avg") < 0);
                 });*/
                var find = kpiMap[option.dataItemId + ""];
                if (find) {
                  option.value = find.value;
                  option.time = target.dateHandler(find.arisingTime).getDateString("yy/MM/dd hh:mm:ss")
                } else {
                  option.value = option.value || "-";
                  option.time = option.time || "-";
                }
                return option;
              });
              //拼接单位
              var kpiCodes = [];
              for (var i = 0; i < options.length; i++) {
                if (!units[options[i].dataItemId]) {
                  kpiCodes.push(options[i].dataItemId)
                };
              };
              //   
              if (kpiCodes.length > 0) {
                target.postService("resourceUIService", "getKpisByKpiIds", [kpiCodes], callback);
              } else {
                callback({
                  data: []
                });
              }

              function callback(returnData) {
                for (var i = 0; i < returnData.data.length; i++) {
                  units[returnData.data[i].id] = returnData.data[i];
                }
                for (var z = 0; z < options.length; z++) {
                  var u = units[options[z].dataItemId];
                  if (u) {
                    options[z].unit = u;
                  };
                };
                var render = function() {
                  var ctrlGroups = [
                    [{
                      type: "label",
                      value: "名称",
                      composory: "none",
                      style: {
                        //"white-space" : "normal"
                        "white-space": "pre-wrap",
                        "borderBottom": "1px solid #666666",
                        "height": "41px",

                      },
                      class: "col-xs-4"
                    }, {
                      type: "label",
                      composory: "none",
                      //value : option.value != "-" ? target.toFix(option.value, 2) : "-",
                      value: "数值",
                      class: "col-xs-4",
                      style: {
                        "white-space": "pre-wrap",
                        "borderBottom": "1px solid #666666",
                        "height": "41px",
                        "backgroudColor": "red"
                      }
                    }, {
                      type: "label",
                      value: "更新时间",
                      composory: "none",
                      class: "col-xs-4",
                      style: {
                        "white-space": "pre-wrap",
                        "paddingLeft": "12px",
                        "borderBottom": "1px solid #666666",
                        "height": "41px",
                      }
                    }]
                  ];
                  var addData = function(option) {
                    // console.log(typeof(option.value))
                    // 
                    if (typeof(option.value) == "number") {
                      if (option.value % 1 === 0) {
                        var val = option.value != "-" ? option.value : "-";
                      } else {
                        var val = option.value != "-" ? target.toFix(option.value, 2) : "-";
                      }

                    } else {
                      var val = option.value
                    }

                    if (option.unit) {
                      val += option.unit.unit || "";
                    };
                    return [{
                      type: "label",
                      value: option.kpiName,
                      composory: "none",
                      style: {
                        //"white-space" : "normal"
                        "white-space": "pre-wrap",
                        "borderBottom": "1px solid #666666",
                        "height": "41px"
                      },
                      class: "col-xs-4"
                    }, {
                      type: "label",
                      composory: "none",
                      value: val,
                      //value:option.value,
                      class: "col-xs-4",
                      style: {
                        "white-space": "pre-wrap",
                        "borderBottom": "1px solid #666666",
                        "height": "41px"

                      }
                    }, {
                      type: "label",
                      value: option.time,
                      composory: "none",
                      class: "col-xs-4",
                      style: {
                        "white-space": "pre-wrap",
                        "paddingLeft": "12px",
                        "borderBottom": "1px solid #666666",
                        "height": "41px"
                      }
                    }]
                  }
                  for (var i in options) {
                    for (var j = 0; j < subData.length; j++) {
                      if (options[i].dataItemId == subData[j].id) {
                        // 
                        if (subData[j].range != null) {
                          // 
                          // 
                          if (options[i].value !== undefined) {
                            //   
                            var obj = JSON.parse(subData[j].range);
                            var objVal = options[i].value
                            // 
                            for (let key in obj) {
                              options[i].value = obj[objVal]
                            }
                          } else {
                            options[i].value = "-"
                            // 替换
                            //options[i].value = options[i].value;

                          }
                        }
                      }
                    }
                    ctrlGroups.push(addData(options[i]));
                    //ctrlGroups.push(addData(options[i]));
                  }
                  target.render(ctrlGroups);
                };
                render();
              };
            }
            target.webSocket(ci, kpi, function(data) {
              getValueList([data])
            })
            target.getKpiValueCi(ci, kpi, getValueList, {
              isRealTimeData: true,
              includeInstance: true
            })
          })
        })
      });
    }
  }
}