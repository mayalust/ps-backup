/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;


      var render = function() {
        var ctrlGroups = [
          [{
              type: "button",
              value: "确   认",
              btnclass: "btn btn-primary",
              style: {
                width: "600",
                textAlign: "right"
              },
              btnStyle: {
                "width": "100px",
                "border": "#10a4fb solid 1px"
              },
              on: {
                click: function(elem) {

                  var closeAlert = target.getValue("closeAlert");


                  target.doTaskCloseAlert(closeAlert.ticketNo, {}, function(tc) {

                    target.trigger("search_toDolistList");
                    target.trigger("search_ticket");
                    target.growl("处理成功", "success");
                    target.cancel();

                  });



                }
              }
            },
            {
              type: "button",
              value: "取   消",
              btnclass: "btn btn-default",
              style: {
                width: "400",
                textAlign: "left"
              },
              btnStyle: {
                "width": "100px",
                "border": "#10a4fb solid 1px"
              },
              on: {
                click: function(elem) {
                  target.cancel();
                }
              }
            }
          ]
        ];
        event.target.render(ctrlGroups);
      }
      render()
    },
  }
}