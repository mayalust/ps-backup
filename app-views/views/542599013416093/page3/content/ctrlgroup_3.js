/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
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
              value: "通   过",
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

                  var obj = {
                    "isAudit": 1,
                    "auditOpinion": ""
                  };
                  event.global.detailTask.taskStatus = 200;
                  event.global.detailTask.values = obj;

                  var taskObj = {
                    "detailTask": event.global.detailTask
                  };

                  target.createSystemPopupByLocalPath("popup1", {
                    title: "审核",
                    width: "40%",
                    top: "15%",
                    theme: "system",

                  }, taskObj);
                }
              }
            },
            {
              type: "button",
              value: "驳   回",
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
                  var obj = {
                    "isAudit": 0,
                    "auditOpinion": ""
                  };
                  event.global.detailTask.taskStatus = 200;
                  event.global.detailTask.values = obj;

                  var taskObj = {
                    "detailTask": event.global.detailTask
                  };
                  target.createSystemPopupByLocalPath("popup1", {
                    title: "审核",
                    width: "40%",
                    top: "15%",
                    theme: "system",

                  }, taskObj);
                }
              }
            }
          ]
        ];
        event.target.render(ctrlGroups);
      }
      render()
    },
    savetask: function(event) {

      event.global.detailTask = event.params;
    }
  }
}