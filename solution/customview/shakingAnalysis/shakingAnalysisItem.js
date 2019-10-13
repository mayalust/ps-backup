define({
  width : "auto",
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var dItem,kpi;
      target.$getCurrentResource(function(resource){
        var sensor = target.getValue("global/sensor") || {};
        var subaccessConfigValues;
        var deviceId;
        if(resource){

          deviceId = resource.id;
        }
        var endDate = target.getEndDate();
        var startDate = target.getStartDate();
        // 获取设备的测点
        var alertInstance = target.getParameter("alertInstance");
        var dateRangeTime = [startDate, endDate];
        var all = target.getValue("global/hasSingnal") || [];
        var success = function () {
          var ci = [resource.id]; // 设备 526443915616079
          var modelId = [resource.modelId] // 获取modelId
          target.getKpiTypeByFilter({
            hasSingnal : true
          }, function(kpis){
            var CONDITIONA = function(value){
              return dItem && value.instance == dItem.name && kpis.some(function(elem){
                return elem.id == value.dataItemId;
              });
            };
            var CONDITIONB = function(value){
              return value.instance == dItem.name;
            };
            var accessConfigValues = resource.physicalConfig?resource.physicalConfig.accessConfigs:"";
            condition = CONDITIONA;
            if(accessConfigValues){
              target.getAttrsByResourceId(resource.id, function(attrs){
                var MeasurePointLocate = attrs['MeasurePointLocate'];
                var triggerEvent = function () {
                  target.trigger("drawDiagnoseFeatureEchart1", {
                    ins: dItem,
                    kpi: kpi,
                    dateRangeTime:dateRangeTime
                  });
                  target.setValue("featureEchart", {
                    ins: dItem,
                    kpi: kpi,
                    dateRangeTime:dateRangeTime
                  });
                }

                // 设备的属性表达式
                var sourceValue = eval(MeasurePointLocate)|| "";
                var sourceValueArr = [];
                for (var i in sourceValue) {
                  for (var j in sourceValue[i]) {
                    for(var k in sourceValue[i][j]){
                      sourceValueArr.push(sourceValue[i][j][k])
                    }
                  }
                };
                sourceValueArr = sourceValueArr.filter(function(e){
                  return e.name.length < 4;
                })

                dItem = sourceValueArr.find(function(elem){
                  if(alertInstance) {
                    return alertInstance == elem.name;
                  } else {
                    return sensor.instance == elem.name;
                  }
                }) || sourceValueArr[0];

                subaccessConfigValues = accessConfigValues.filter(condition)
                kpi = subaccessConfigValues.find(function(elem){
                  return elem.dataItemId == ( sensor.kpiId || sensor.id );
                }) || subaccessConfigValues[0];
                kpi = kpi || {};
                triggerEvent();
                var render = function () {
                  target.setValue("global/hasSingnal", all);
                  var ctrlGroups = [
                    [{
                      type: "label",
                      value: "测点",
                      style: {
                        width : "40px",
                        textAlign: "center"
                      }
                    }, {
                      type: "select",
                      value: dItem.name,
                      class: "col-md-2",
                      on: {
                        change: function (elem) {
                          dItem = elem.value;
                          subaccessConfigValues = accessConfigValues.filter(condition);
                          kpi = subaccessConfigValues[0] || {};
                          triggerEvent();
                          render();
                        }
                      },
                      options: sourceValueArr,
                      format: {
                        "id": "name",
                        "label": "label"
                      }
                    }, {
                      type: "label",
                      value: "参数",
                      style: {
                        width : "40px",
                        textAlign: "center"
                      }
                    }, {
                      type: "select",
                      value: kpi.kpiId,
                      class: "col-md-2",
                      on: {
                        change: function (elem) {
                          kpi = elem.value;
                          triggerEvent();
                        }
                      },
                      options: subaccessConfigValues,
                      format: {
                        "id": "kpiId",
                        "label": "kpiName"
                      },
                    }, {
                      type: "checkboxlist",
                      value: all,
                      style: {
                        width : "80px",
                        textAlign: "center"
                      },
                      options : [{
                        id : 0,
                        label : "全部"
                      }],
                      on : {
                        change : function(event){
                          all = event.value.map(function(elem){
                            return elem.id;
                          });
                          condition = event.value.length > 0 ? CONDITIONB : CONDITIONB;
                          subaccessConfigValues = accessConfigValues.filter(condition);
                          if(subaccessConfigValues.indexOf(kpi) == -1){
                            kpi || subaccessConfigValues[0];
                          }
                          render();
                          triggerEvent();

                        }
                      }
                    }, {
                      id:1,
                      icon:"none",
                      value : startDate,
                      type: "dateTimePicker",
                      style : {
                        width : "200px"
                      },
                      on: {
                        change: function (elem) {
                          startDate = target.dateHandler(elem.value.getUTCDateString);
                           
                          dateRangeTime[0] = startDate;
                          triggerEvent();
                        }
                      },
                    }, {
                      type: "label",
                      value: "至",
                      style: {
                        textAlign: "center",
                        width : "30px"
                      }
                    },{
                      id:2,
                      icon:"none",
                      value : endDate,
                      type: "dateTimePicker",
                      style : {
                        width : "200px"
                      },
                      on: {
                        change: function (elem) {
                          endDate = target.dateHandler(elem.value.getUTCDateString);
                           
                          dateRangeTime[1] = endDate;
                          triggerEvent();
                        }
                      },
                    }, {
                      type: "button",
                      class: "col-md-1",
                      btnclass: "btn btn-primary",
                      value: "设备信息",
                      btnStyle: {
                        width: "100%",
                      },
                      on:{
                        click:function (elem) {
                          target.setValue("device",deviceId);
                          target.createPopupByViewIdPath(294542434560000, "page1", {
                            width: "600px",
                            title: "设备信息"
                          })
                        }
                      }
                    }, {
                      type: "button",
                      class: "col-md-1",
                      btnclass: "btn btn-primary",
                      value: "信号分析",
                      btnStyle: {
                        width: "100%",
                      },
                      on: {
                        click: function (elem) {
                          target.trigger("analysisShakeNavigateTo", 2);
                          /**
                           target.navigateTo("index", {
                        main : 2,
                        sub : 0,
                        sub2 : 2
                      }, "self");*/
                        }
                      }
                    },{
                      type: "button",
                      class: "col-md-1",
                      btnclass: "btn btn-primary",
                      value: "求助知识库",
                      btnStyle: {
                        width: "100%",
                      },
                      on: {
                        click: function (elem) {
                          target.createSystemPopupByViewId("174283678280002",{
                            width:"80%",
                            top:"140px",
                            title:"知识库",
                          },["",deviceId])
                        }
                      }
                    }, ]
                  ];
                  target.render(ctrlGroups);
                };
                render();
              })

            }

          })
        }
        if(resource){
          success();
        };
        target.off("tree_resourceChange.shaking");
        target.on("tree_resourceChange.shaking", function (node) {
          success();
        })
      })
    }
  }
})