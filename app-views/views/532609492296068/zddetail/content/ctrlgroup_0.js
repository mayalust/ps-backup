/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var option = target.getValue("obj").option;
      var ctrlGroups = [
        [{
          type: "button",
          value: "提交",
          btnclass: "btn btn-primary",
          class: "col-md-12",
          style: {
            "text-align": "right"
          },
          btnStyle: {
            "color": "#c0c0c0",
          },
          on: {
            click: function(elem) {
              event.global.detailTask.taskStatus = 200;
              var detailString = JSON.stringify(event.global.detailTask);
              event.target.postService("ticketTaskService", "doTask", eval("(" + detailString + ")"), function(tc) {
                if (tc.code == 0) {
                  event.target.growl("处理成功", "success");
                  target.cancel();
                  target.submit({
                    "statuc": "success"
                  });
                } else {
                  event.target.growl(tc.message, "info");
                }
              })
            }
          }
        }, {
          type: "button",
          value: "取消",
          btnclass: "btn btn-default",
          class: "col-md-12",
          style: {
            "text-align": "center"
          },
          btnStyle: {
            "color": "#c0c0c0",

          },
          on: {
            click: function(elem) {
              target.cancel()

            }
          }
        }]
      ];
      if (option == "edit") {
        event.target.render(ctrlGroups);
      }
    },
    savetask: function(event) {

      event.global.detailTask = event.params;
    }
  }
}