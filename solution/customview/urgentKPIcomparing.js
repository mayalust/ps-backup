define({
  on: {
    init: function (event) {
      var target = event.target,
        selections = [],
        kpi,
        kpis = [],
        titles = ['基地', '厂区', '产线', '设备区域', '设备']
      resourceCache = createCache();

      function getTitle(t) {
        switch (t) {
        case "devicegroup":
          return "虚拟大设备";
        case "index":
          return "虚拟大设备";
        case "production":
          return "设备区域";
        case "navigate":
          return "基地";
        case "device":
          return "设备";
        case "factory":
          return "厂区";
        case "motor":
          return "电机";
        }
      }

      function createCache() {
        var cached = function (key, val) {
          cached[key] = val;
        };
        return cached;
      }

      function clone(obj) {
        var rs = [];
        for (var i in obj) {
          rs[i] = obj[i];
        };
        return rs;
      }

      function toLowerCase(str) {
        return typeof str === "string" ?
          str.toLowerCase() :
          "";
      }

      function getPhysicalConfigById(id, callback) {
        resourceCache[id] ?
          callback(resourceCache[id]) :
          target.getResourceById(id, function (resource) {
            resourceCache[id] = resource ?
              (resource.physicalConfig ?
                resource.physicalConfig.accessConfigs :
                []) :
              [];
            callback(resourceCache[id]);
          })
      }
      target.getDomainAreaLineTree(function (domaintree) {
        domaintree.getRoot().then(function (rootNode) {
           
        })
        domaintree.getChildren(function () { return true }).then(function (children) {
          function traverse(inx, children) {
            return children ? (
              selections[inx] = children[0],
              selections[inx].children ?
              traverse(inx + 1, selections[inx].children) :
              (toLowerCase(selections[inx].resourceType) ?
                selections[inx] :
                null)
            ) : null;
          }

          function renderByDevice(device) {
            if (device) {
              getPhysicalConfigById(device.id, function (accessConfigs) {
                kpis = accessConfigs.filter(function (elem) {
                  return elem.instance == "00";
                });
                kpi = kpis[0] || {};
                render();
              });
            } else {
              render();
            }
          }

          function render() {
            var ctrlgroup = [];
            var loop = function (inx, selection) {
              var row = [{
                type: "label",
                value: getTitle(selection.$location) || titles[inx],
                class: "col-md-3"
              }];
              if (selections.length > 5 && inx == 4) {
                var loopElement = function (i, element) {
                  row.push({
                    type: "select",
                    value: selections[i].id,
                    options: selections[i].parent.children,
                    class: "col-md-3",
                    on: {
                      change: function (event) {
                        var sel = event.value,
                          device;
                        if (sel.resourceType !== "device") {
                          selections[i] = sel;
                          selections = selections.slice(0, i + 1);
                          device = traverse(i + 1, sel.children);
                          renderByDevice(device);
                        } else {
                          selections[i] = sel;
                          renderByDevice(sel);
                        }
                      }
                    }
                  });
                }
                for (var i = inx; i < selections.length; i++) {
                  loopElement(i, selections[i]);
                }
              } else {
                row.push({
                  type: "select",
                  value: selection.id,
                  options: selection.parent.children,
                  class: (inx != selections.length - 1) ? "col-md-9" : "col-md-6",
                  colSpan: 3,
                  on: {
                    change: function (event) {
                      var sel = event.value,
                        device;
                      if (sel.resourceType !== "device") {
                        selections[inx] = sel;
                        selections = selections.slice(0, inx + 1);
                        device = traverse(inx + 1, sel.children);
                        renderByDevice(device);
                      } else {
                        selections[inx] = sel;
                        renderByDevice(sel);
                      }
                    }
                  }
                })
              }
              ctrlgroup.push(row);
            }
            for (var i = 0; i < (selections.length > 5 ? 5 : selections.length); i++) {
              loop(parseInt(i), selections[i]);
            }
            if (kpi) {
              ctrlgroup.push([{
                type: "label",
                value: '指标',
                class: "col-md-3"
              }, {
                type: "select",
                value: kpi.dataItemId,
                options: kpis,
                class: "col-md-6",
                colSpan: 2,
                on: {
                  change: function (event) {
                    var sel = event.value;
                    kpi = sel;
                    render();
                  }
                },
                format: {
                  id: "dataItemId",
                  label: "kpiName"
                }
              }, {
                type: "button",
                value: "加入对比",
                class: "col-md-3",
                btnclass: "btn btn-primary pull-right",
                on: {
                  click: function (event) {
                    target.trigger("addToSelection", {
                      selections: clone(selections),
                      kpi: kpi
                    })
                  }
                }
              }]);
            };
            target.render(ctrlgroup);
          }
          renderByDevice(traverse(0, root[0].children));
        })
      })
    }
  }
});