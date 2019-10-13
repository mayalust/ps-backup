define({
  width: "auto",
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var id = target.$state.params.id;

      /**
       * 判断是不是时间是不是告警带过来的时间 前二后一
       * 默认是往前推两个小时
       */

      var startDate = target.$state.params.startdate ?new Date(target.$state.params.startdate):new Date(new Date().getTime()- 2*60*60*1000);
      var endDate = target.$state.params.enddate ?new Date(target.$state.params.enddate) : new Date();

      target.getResourceById(id, function (resource) {
        var sensor = target.getValue("global/sensor") || {};
        // 获取设备的测点
        var dateRangeTime = [startDate, endDate];
        var success = function () {
          var triggerEvent = function () {
            var sel = accessConfigValues.filter(function (elem) {
              return elem.select;
            });
            target.nextTick(function () {
              target.trigger("drawDiagnoseFeatureEchart1", {
                kpi: sel,
                type: type,
                dateRangeTime: dateRangeTime
              });
            });
          }
          if (!resource) {
            target.navigateTo("index", {
              main: 2,
              sub: 0
            }, "self");
          }

          var accessConfigValues = resource.physicalConfig ? resource.physicalConfig.accessConfigs : "";

          if (accessConfigValues) {
            accessConfigValues[0].select = true;
            var types = [{
              id: 0,
              label: "实时"
            }, {
              id: 1,
              label: "时平均"
            }, {
              id: 2,
              label: "天平均"
            }];
            var type = 0;
            setTimeout(function () {
              triggerEvent();
            }, 3000);
            var render = function () {
              var ctrlGroups = [
                [{
                  type: "label",
                  value: "指标",
                  style: {
                    width: "40px",
                    textAlign: "center"
                  }
                }, {
                  type: "multiSelect",
                  class: "col-md-2",
                  on: {
                    change: function (elem) {
                      for (var i in accessConfigValues) {
                        var some = elem.values.some(function (elem) {
                          return elem.kpiId == accessConfigValues[i].kpiId;
                        });
                        accessConfigValues[i].select = some;
                      }
                      triggerEvent();
                      render();
                    }
                  },
                  options: accessConfigValues,
                  format: {
                    "id": "dataItemId",
                    "value": "select",
                    "label": "kpiName"
                  }
                }, {
                  type: "label",
                  value: "分析类型",
                  style: {
                    width: "40px",
                    textAlign: "center"
                  }
                }, {
                  type: "select",
                  class: "col-md-2",
                  value: type,
                  on: {
                    change: function (elem) {
                      type = elem.value.id;
                      triggerEvent();
                      render();
                    }
                  },
                  options: types
                }, {
                  id: 1,
                  icon: "none",
                  value: startDate,
                  type: "dateTimePicker",
                  style: {
                    width: "200px"
                  },
                  on: {
                    change: function (elem) {
                      // startDate = target.dateHandler();
                      dateRangeTime[0] = elem.value.getDateString;
                      triggerEvent();
                    }
                  },
                }, {
                  type: "label",
                  value: "至",
                  style: {
                    textAlign: "center",
                    width: "30px"
                  }
                }, {
                  id: 2,
                  icon: "none",
                  value: endDate,
                  type: "dateTimePicker",
                  style: {
                    width: "200px"
                  },
                  on: {
                    change: function (elem) {
                      endDate = elem.value.getDateString;
                      dateRangeTime[1] = endDate;
                      triggerEvent();
                    }
                  },
                }]
              ];
              target.render(ctrlGroups);
            };
            render();
          }
        }
        if (resource) {
          success();
        }
      });
    }
  }
})