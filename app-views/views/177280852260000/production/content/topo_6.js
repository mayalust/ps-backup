/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var id = target.getParameter("id");
      var main = target.getParameter("main");
      var initcount = 0;
      target.getDomainAreaLineTree_alertStatus(function(find) {
        find.getChildren(function(node, i, l) {
          return l < 2 && (node.values ? node.values.hide != true : true);
        }, true).then(function(children) {
          var viewId = find.$attr("values/view/viewId");
          if (initcount == 0) {
            initcount++;
            target.trigger("loadDevicesFromProjectIds", children);
            target.getViewById(viewId, function(view) {
              var content = view.content;
              var json = JSON.parse(content);
              target.render(json);
              target.addCam();
              target.on("$loadCiKpiComplete", function(cells) {
                for (var i in cells) {
                  cells[i].attr("circle/opacity", 0);
                  cells[i].attr("text/opacity", 0);
                  cells[i].attr("rect/opacity", 0);
                }
                var createAlarm = function(index, node) {
                  var cell = cells.find(function(cell) {
                    var text = cell.attr("text/text") || "",
                      label = node.label;
                    if (!text) {
                      return false;
                    }
                    text = text.toLowerCase();
                    label = label.toLowerCase();
                    return label.indexOf(text) != -1;
                  }) || cells[index];
                  var position;
                  if (cell) {
                    if (cell.position) {
                      position = cell.position();
                    };
                  } else {
                    return;
                  }
                  position = position || {
                    x: Math.floor(100 + Math.random() * 300),
                    y: Math.floor(100 + Math.random() * 200)
                  }
                  target.createAlarm(node.label, function(ins) {
                    ins.setPos(position);
                    ins.setAlarmStatus(node.getAlertState());
                    ins.on("mouseover", function(event) {
                      node.getChildren(function(n, i, l) {
                        return l < 2;
                      }).then(function(children) {
                        children.length > 0 ?
                          target.createDeviceDropList(children, position, {
                            click: function(item) {
                              var params = [];
                              item.getPathAndShowTreeLocation().then(function(d) {
                                var controller = d.controller,
                                  showTree = d.showTree,
                                  location = d.location;
                                if (controller) {
                                  target.refresh("prod_" + controller, {
                                    id: item.id,
                                    showTree: showTree,
                                    viewId: null
                                  });
                                  return;
                                }
                                params.push("dashboard");
                                params.push({
                                  id: item.id,
                                  showTree: showTree,
                                  sensor: "null",
                                  index: location,
                                  startdate: "null",
                                  enddate: "null"
                                });
                                target.refresh.apply(null, params);
                              });
                            },
                            titleClick: function() {
                              var params = [];
                              node.getPathAndShowTreeLocation().then(function(d) {
                                var controller = d.controller,
                                  showTree = d.showTree,
                                  location = d.location;
                                if (controller) {
                                  target.refresh("prod_" + controller, {
                                    id: node.id,
                                    showTree: showTree,
                                    viewId: null
                                  });
                                  return;
                                }
                                params.push("dashboard");
                                params.push({
                                  id: node.id,
                                  sensor: "null",
                                  showTree: showTree,
                                  index: location,
                                  startdate: "null",
                                  enddate: "null"
                                });
                                target.refresh.apply(null, params);
                              });
                            }
                          }) : null;
                      });
                    })
                  });
                };
                for (var i in children) {
                  createAlarm(i, children[i])
                }
              });
            });
          }
        })
      });
    }
  }
}