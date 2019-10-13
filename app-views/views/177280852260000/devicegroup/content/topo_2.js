/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var id = target.getParameter("id");
      var clears = [];

      function getExtCell(cell) {
        return cell.attributes.extend === "kpis";
      }
      target.getDomainAreaLineTree_alertStatus(function(find) {
        if (find) {
          find.getChildren(function(n, i, l) {
            return l < 2
          }).then(function(children) {
            var viewId = find.$attr("values/view/viewId"),
              resMap = children.reduce(function(a, b) {
                a[b.id] = b;
                return a;
              }, {});
            target.getViewById(viewId, function(view) {
              var content = view.content;
              var json = JSON.parse(content);
              target.render(json);
              target.on("$loadCiKpiComplete", function(cells) {
                var position = {
                    x: 250,
                    y: 0
                  },
                  is = target.createCurrentStatus(find.label, position, find.getAlertState()),
                  deviceCell = cells.filter(function(cell) {
                    return children.some(function(child) {
                      return cell.attr("text/text") == child.label ||
                        cell.attr("nodeId") == child.id;
                    })
                  }),
                  sensorCell = cells.filter(getExtCell);
                for (var i in cells) {
                  cells[i].attr("circle/opacity", 0);
                  cells[i].attr("text/opacity", 0);
                  cells[i].attr("rect/opacity", 0);
                  cells[i].attr(".connection/stroke", "#1f8fd8");
                  cells[i].attr(".connection/stroke-width", 2);
                  cells[i].attr(".marker-target/visibility", "hidden");
                }
                deviceCell.forEach(function(cell) {
                  var node = children.find(function(child) {
                      return cell.attr("text/text") == child.label ||
                        cell.attr("nodeId") == child.id;
                    }),
                    position = cell.attributes.position;
                  target.createAlarm(node.label, function(ins) {
                    ins.setPos(position);
                    ins.setAlarmStatus(node.getAlertState());
                    clears.push(node.$on("stateChange", function(value) {
                      ins.setAlarmStatus(value);
                    }))
                    ins.on("textClick", function(event) {

                    });
                    ins.on("click", function(event) {
                      var find = children.find(function(elem) {
                        return elem.id == node.id;
                      });
                      find.getPathAndShowTreeLocation().then(({
                        showTree,
                        location
                      }) => {
                        target.refresh({
                          id: find.id,
                          showTree: showTree,
                          index: location
                        })
                      })
                      return;
                    })
                  });
                })
              });
            });
          });
        }
      });
      target.on("$destroy", function() {
        for (var i in clears) {
          clears[i]();
        }
      })
    }
  }
}