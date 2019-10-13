/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var task1 = {
        val: 1
      }
      var currStatus = "today";
      var render = function() {
        var ctrlGroups = [
          [{
            type: "button",
            //   value:"切换",
            //   btnclass:currStatus=="today"?"btn btn-primary":"btn btn-default",
            btnclass: "btn-default",
            btnStyle: {
              "width": "35px",
              "height": "35px",
              "text-align": "center",
              "font-size": "20px",
              //   "border":"#10a4fb solid 1px",
              "position": "absolute",
              "right": "1%",
              "z-index": 9999
            },
            icon: "proudsmart ps-transfer",
            on: {
              click: function(elem) {
                if (currStatus == "today") {
                  currStatus = "";
                  target.trigger("queryTabelList11", task1);
                  task1.val = 2;
                } else if (currStatus == "") {
                  currStatus = "today";
                  target.trigger("queryTabelList11", task1);
                  task1.val = 1;
                }

                render();
              }
            }
          }]

        ];
        event.target.render(ctrlGroups);
      }
      render()
    }
  }
}