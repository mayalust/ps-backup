/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var ctrlGroups = [
        [{
          type: "clock",
          icon: "glyphicon glyphicon-search",
          value: function(time) {
            return "当前时间 ： " + time
          },
          btnclass: "btn btn-primary",
          class: "col-md-12",
          style: {
            "float": "right",
            "font-weight": "bold"
          }
        }]
      ];
     // event.target.render(ctrlGroups);
    }
  }
}