/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var id = target.getParameter("id");
      target.getDomainAreaLineTree_alertStatus(function(resource) {
        return resource.getBrothers().then(function(brothers) {
          return resource.getChildren(function(n, i, l) {
            return true;
          }).then(function(children) {
            var fd = brothers.find(function(v) {
                return v.$attr("values/view/viewId");
              }) || {},
              viewId = resource.$attr("view/viewId") ||
              resource.$attr("values/view/viewId") ||
              fd.$attr("values/view/viewId");
            target.getViewById(viewId, function(view) {
              var content = view.content;
              var json = JSON.parse(content);
              target.render(json);
              target.on("$loadCiKpiComplete", function(cells) {
                var position = {
                  x: 180,
                  y: 0
                };
                var is = target.createCurrentStatus(resource.label, position, resource.getAlertState());
                /**
                find.$on("statusChanged", function(nd) {
                  is.setAlarmStatus(find.status)
                });**/
                for (var i in cells) {
                  cells[i].attr("circle/opacity", 0);
                  cells[i].attr("text/opacity", 0);
                  cells[i].attr("rect/opacity", 0);
                }
                var createAlarm = function(index, node) {
                  var cell = cells[index] || {};
                  var position;
                  if (cell) {
                    position = typeof cell.position == "function" ? cell.position() : null;
                  } else {
                    position = {
                      x: Math.floor(100 + Math.random() * 300),
                      y: Math.floor(100 + Math.random() * 200)
                    }
                  }
                  position ? target.createAlarm(node.label, function(ins) {
                    ins.setPos(position);
                    ins.on("click", function(event) {
                      target.createCurrentStatusByItem(find.id, position);
                      /**
                       target.createSystemPopupByLocalPath("page8", {
                         width : "400px",
                         title: node.label,
                        },node.id);*/
                    })
                  }) : null;
                };
                for (var i in children) {
                  createAlarm(i, children[i])
                }
              });
            });
          })
        })
      });
    }
  }
}