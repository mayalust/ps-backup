/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function(event) {
      var target = event.target;
      var global = event.global;
      var label = target.$repeatData.province;
      var description = target.$repeatData.description || 0;
      var ctrlGroups = [
        [{
          type: "jquery",
          render: function() {
            var wrap = $("<div></div>");
            //   wrap.css("height", "70px");
            //   wrap.css("border", "1px solid rgba(250,250,250,.3)");
            //   wrap.css("background-color", "rgba(0,100,250,.1)");
            var title = $("<div></div>");
            //   title.text(label);
            title.css("font-size", "12px");
            title.css("color", "#fff");
            title.css("position", "absolute");
            title.css("top", "142px");
            title.css("left", "15px");
            title.css("font-weight", "bold");
            wrap.append(title);

            return wrap;
          }
        }]
      ];
      target.render(ctrlGroups);
    }
  }
}