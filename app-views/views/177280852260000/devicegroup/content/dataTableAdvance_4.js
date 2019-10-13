/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var nodeId = target.getParameter("id");
      var main = target.getParameter("main");
      var clears = [];
      target.getDomainAreaLineTree_alertStatus(function(find) {
        if (find) {
          find.getChildren(function(n, i, l) {
            return l < 2;
          }).then(function(children) {
            var ci = children.map(function(elem) {
              return elem.id;
            });
            var params = ["kpi", {
              "isRealTimeData": true,
              "timePeriod": 0,
              "nodeIds": ci,
              "kpiCodes": [999999]
            }]
            target.postService("kpiDataFlexService", "getKpiValueList", params, function(returnData) {
              for (var i = 0; i < children.length; i++) {
                for (var j = 0; j < returnData.data.length; j++) {
                  if (returnData.data[j].nodeId == children[i].id) {
                    children[i].status = returnData.data[j].value
                  }
                }
              }
              target.render({
                pageSize: 1000,
                data: children,
                on: {
                  rowClick: function(event) {
                    var data = event.row;
                    var find = children.find(function(elem) {
                      return elem.id == data.id;
                    });
                    find.getPathAndShowTreeLocation()
                      .then(function(d) {
                        target.refresh({
                          id: find.id,
                          showTree: d.showTree,
                          index: d.location
                        });
                      })
                  }
                },
                "format": [{
                  "name": "设备名称",
                  "value": "label",
                  "type": "label",
                  "style": {
                    cursor: "pointer",
                  },
                }, {
                  "name": "状态",
                  "value": "status",
                  "type": "jquery",
                  "render": function(elem) {
                    var el = children.find(function(nd) {
                      return nd.id == elem.id;
                    })
                    var wrap = $("<div></div>");
                    var circle = $("<div></div>");
                    var text = $("<div></div>");
                    var t = $("<div></div>");
                    circle.css("width", "20px");
                    circle.css("margin-right", "5px");
                    circle.css("height", "20px");
                    circle.css("border-radius", "50%");
                    circle.css("display", "inline-block");
                    circle.css("cursor", "pointer");
                    circle.css("background-color", target.getAlertColor(elem.status));
                    // text.css("position", "relative");
                    // text.css("color", target.getAlertColor(elem.status));
                    // text.css("font-weight", "bold");
                    // text.css("cursor", "pointer");
                    // t.text(target.getAlertWord(elem.status));
                    // text.append(t);
                    t.css("position", "absolute");
                    t.css("top", "-20px");
                    circle.attr("id", "circle_" + elem.id);
                    //text.attr("id", "text_" + elem.id);
                    //t.attr("id", "t_" + elem.id);
                    wrap.append(circle);
                    //wrap.append(text);
                    clears.push(el.$on("statusChanged", function statusChanged(value) {
                      var circle = $("#circle_" + el.id);
                      circle.css("background-color", target.getAlertColor(value));
                      //text.css("color", target.getAlertColor(node.status));
                      t.css("color", target.getAlertColor(value));
                      //t.text(target.getAlertWord(node.status));
                    }));
                    //text.css("line-height", "20px");
                    return wrap;
                  }
                }]
              })
            })
          });
        }
      });
      target.on("$destroy", function() {
        for (var i = 0; i < clears.length; i++) {
          clears[i]();
        }
      })
    }
  }
}