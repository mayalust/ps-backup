/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;


      var isFlag = true;

      var render = function() {
        var ctrlGroups = [
          [{
              type: "button",
              value: "提   交",
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


                  if (isFlag) {



                    var params = target.getPopupData();
                    var alertItemList = target.getValue("getAlertItemList");
                    params.taskStatus = 200;
                    params.values = {
                      "alertEvaluateInfoList": target.getValue("getAlertItemList"),
                      diagnoseDeclare: target.getValue("diagnoseDeclare"),
                    }

                    function requiredFields() {
                      if (params.values.diagnoseDeclare == "" || params.values.diagnoseDeclare == undefined) {
                        target.growl("请填写关闭说明", "warning");
                        return false
                      }

                      for (var i = 0; i < alertItemList.length; i++) {
                        if (alertItemList[i].evaluateCheckboxlist == "2" && (alertItemList[i].evaluateDealExplain == null || alertItemList[i].evaluateDealExplain == "")) {
                          target.growl("请填写报警消息是" + alertItemList[i].alertTitle + "的评价说明", "warning");
                          return false;
                        }
                      }
                      return true;
                    }
                    if (requiredFields()) {
                      delete(params.variables);
                      isFlag = false;
                      target.postService("ticketTaskService", "doTask", params, function(tc) {
                        if (tc.code == 0) {
                          event.target.growl("处理成功", "success");
                          target.trigger("search_toDolistList");
                          target.trigger("search_ticket");
                          target.cancel();
                        } else {
                          event.target.growl(tc.message, "info");
                        }
                      })
                    }
                  }
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