/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function(event) {
      var target = event.target;
      var nodeId = target.getParameter("id");
      var main = target.getParameter("main");
      target.getDomainAreaLineTree_alertStatus(function(resource) {
        resource.getChildren(function(n, i, l) {
          return true;
        }).then(function(children) {
          target.render({
            pageSize: 1000,
            data: children,
            on: {
              rowClick: function(event) {
                var fd = children.find(function(child) {
                  return event.row.id == child.id;
                })
                fd.getPathAndShowTreeLocation().then(({
                  showTree,
                  location
                }) => {
                  target.refresh({
                    showTree: showTree,
                    index: location,
                    id: fd.id
                  })
                })
              }
            },
            "format": [{
              "name": "设备名称",
              "value": "label",
              "type": "text"
            }, {
              "name": "状态",
              "value": "status",
              "type": "jquery",
              "render": function(elem) {
                var wrap = $("<div></div>");
                var circle = $("<div></div>");
                //var text = $("<div></div>");
                var t = $("<div></div>");
                var el = children.find(function(nd) {
                  return nd.id == elem.id;
                })
                circle.css("width", "20px");
                circle.css("margin-right", "5px");
                circle.css("height", "20px");
                circle.css("border-radius", "50%");
                circle.css("display", "inline-block");
                circle.attr("id", "circle_" + elem.id);
                circle.css("background-color", target.getAlertColor(elem.status));
                //   text.css("position", "relative");
                //   text.attr("id", "text_" + elem.id);
                //   text.css("display", "inline-block");
                //   text.css("color", target.getAlertColor(elem.status));
                //   text.css("font-weight", "bold");
                //   t.attr("id", "t_" + elem.id);
                //   t.text(target.getAlertWord(elem.status));
                //text.append(t);
                t.css("position", "absolute");
                t.css("top", "-20px");
                wrap.append(circle);
                //wrap.append(text);
                //text.css("line-height", "20px");
                el.$on("statusChanged", function statusChanged(node) {
                  var circle = $("#circle_" + node.id);
                  //   var text = $("#text_" + node.id);
                  //   var text = $("#t_" + node.id);
                  //
                  circle.css("background-color", target.getAlertColor(node.status));
                  //text.css("color", target.getAlertColor(node.status));
                  t.css("color", target.getAlertColor(node.status));
                  t.text(target.getAlertWord(node.status));
                })
                return wrap;
              }
            }, ]
          })
        })
      });
    }
  }
}