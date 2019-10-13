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
              value: "同意",
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
                  var params = target.getPopupData();
                  params.taskStatus = 200;
                  params.values = {
                    isClose: 1,
                    auditDeclare: target.getValue("auditDeclare")
                  }
                  delete(params.variables);

                  function requiredFields() {
                    if (params.values.auditDeclare == "" || params.values.auditDeclare == undefined) {
                      target.growl("请填写审核说明", "warning");
                      return false
                    }
                    return true;
                  }
                  if (requiredFields()) {
                    event.target.postService("ticketTaskService", "doTask", params, function(tc) {
                      if (tc.code == 0) {
                        event.target.growl("处理成功", "success");
                        target.trigger("search_toDolist");
                        target.trigger("search_dolist");
                        target.cancel();
                      } else {
                        event.target.growl(tc.message, "info");
                      }
                    })
                  }

                }
              }
            },
            {
              type: "button",
              value: "驳回",
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

                  var params = target.getPopupData();
                  params.taskStatus = 200;
                  params.values = {
                    isClose: 0,
                    auditDeclare: target.getValue("auditDeclare")
                  }
                  delete(params.variables);

                  function requiredFields() {
                    if (params.values.auditDeclare == "" || params.values.auditDeclare == undefined) {
                      target.growl("请填写审核说明", "warning");
                      return false
                    }
                    return true;
                  }

                  if (requiredFields()) {
                    event.target.postService("ticketTaskService", "doTask", params, function(tc) {
                      if (tc.code == 0) {
                        event.target.growl("处理成功", "success");
                        target.trigger("search_toDolist");
                        target.trigger("search_dolist");
                        target.cancel();
                      } else {
                        event.target.growl(tc.message, "info");
                      }
                    })
                  }
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