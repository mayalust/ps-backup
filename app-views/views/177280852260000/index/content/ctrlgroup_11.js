/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function(event) {


      var target = event.target;


      var colors = [target.getAlertColor(1), target.getAlertColor(2), target.getAlertColor(3)];
      var global = event.global;
      var ctrlGroups = [];
      var createTr = function(index, element) {

        return [{
          type: "jquery",
          render: function() {
            var wrap = $("<div></div>");
            var title = $("<div></div>");
            var bar = $("<div></div>");
            wrap.css("height", "25px");
            wrap.css("width", "40px");
            wrap.css("margin", "auto");
            bar.css("width", "10px");
            bar.css("height", "25px");
            bar.css("background-color", colors[index]);
            bar.css("position", "absolute");
            wrap.css("position", "relative");
            bar.css("left", "25px");
            wrap.append(bar);
            title.css("text-align", "right");
            title.css("color", "#a0a0a0");
            title.css("margin-right", "15px");
            title.css("position", "absolute");
            title.css("font-size", "12px");
            title.text(element.name);
            var value = $("<div id=" + target.$repeatData.id + " severity=" + severity + "  value=" + element.value + "></div>");
            value.css("color", "#fff");
            value.css("position", "absolute");
            value.css("font-size", "12px");
            value.css("text-align", "right");
            value.css("font-weight", "bold");
            value.css("top", "12px");
            var severity = "";
            if (element.name == "警告") {
              value.attr("severity", 3)
              value.css("cursor", "pointer");
            } else if (element.name == "注意") {
              value.attr("severity", 2)
              value.css("cursor", "pointer");
            }

            value.text(element.value);
            // 点击警告、注意 传入所在的域和告警级别。查出所在的设备
            value.click(function(e) {
              var position = {
                clientX: e.clientX,
                clientY: e.clientY,
                screenWidth: $("body").width(),
                screenHeight: $("body").height()
              }
              var params = {
                "nodeId": $(e.target).attr("id") - 0,
                "severity": $(e.target).attr("severity"),
              };
              if ($(e.target).attr("severity") != "undefined") {
                if ($(e.target).attr("value") != 0) {
                  target.getAlertDeviceList(params, function(tc) {
                    target.createCurrentStatusByItem(tc, position);
                  })
                } else {
                  target.growl("没有告警设备", "warning")
                }
              }

            })
            wrap.append(title);
            wrap.append(value);
            return wrap;
          }
        }]
      }
      for (var i = target.$repeatData.data.length - 1; i >= 0; i--) {
        ctrlGroups.push(createTr(i, target.$repeatData.data[i]));
      }
      event.target.render(ctrlGroups);
    }
  }
}