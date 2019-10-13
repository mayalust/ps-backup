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
            wrap.css("height", "40px");
            //wrap.css("height", "35px");
            wrap.css("width", "40px");
            wrap.css("margin", "auto");
            bar.css("width", "10px");
            //bar.css("height", "25px");
            bar.css("height", "40px");
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
            var value = $("<div></div>");
            value.css("color", "#fff");
            value.css("position", "absolute");
            value.css("font-size", "12px");
            value.css("text-align", "right");
            value.css("font-weight", "bold");
            value.text(element.value);
            value.css("top", "12px");
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