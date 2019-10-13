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
                  var params = event.target.getPopupData();
                  params.taskStatus = 200;
                  params.values = target.getValue("reportAuthorized");
                  var ins = target.getValue("dataTableInstance").getChecked();
                  params.values.offlineReportList = ins;
                  delete(params.variables)

                  function requiredFields() {
                    if (params.values.abnPhenomenon == "" || params.values.abnPhenomenon == undefined) {
                      target.growl("请选择异常现象", "warning")
                      return false
                    }
                    if (params.values.technicsStatus == "" || params.values.technicsStatus == undefined) {
                      target.growl("请选择工艺状况", "warning")
                      return false
                    }
                    if (params.values.position == "" || params.values.position == undefined) {
                      target.growl("请选择检测部位", "warning")
                      return false
                    }
                    if (params.values.standard == "" || params.values.standard == undefined) {
                      target.growl("请选择判断标准", "warning")
                      return false
                    }
                    if (params.values.basis == "" || params.values.basis == undefined) {
                      target.growl("请选择判断依据", "warning")
                      return false
                    }
                    if (params.values.statusGrade == "" || params.values.statusGrade == undefined) {
                      target.growl("请选择综合状态等级", "warning")
                      return false
                    }
                    if (params.values.abnType == "" || params.values.abnType == undefined) {
                      target.growl("请选择异常类型", "warning")
                      return false
                    }
                    if (params.values.multipleConclusion == "" || params.values.multipleConclusion == undefined) {
                      target.growl("请选择综合判断结论", "warning")
                      return false
                    }
                    if (params.values.cessingScheme == "" || params.values.cessingScheme == undefined) {
                      target.growl("请选择处理方案建议", "warning")
                      return false
                    }
                    return true;
                  }
                  if (requiredFields()) {
                    event.target.postService("ticketTaskService", "doTask", params, function(tc) {
                      if (tc.code == 0) {
                        target.cancel();
                        target.trigger("search_toDolistList");
                        target.trigger("search_ticket");
                        event.target.growl("处理成功", "success");
                      }
                    })
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