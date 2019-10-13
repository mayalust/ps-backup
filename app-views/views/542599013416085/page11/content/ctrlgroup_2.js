/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var render = function() {
        var ctrlGroups = [[{
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

              var params = target.getPopupData();

              var paramsValues = {};

              // 异常处理评价
              var abnormalEvaluateObj = target.getValue("abnormalEvaluateObj");
              paramsValues.abnormalEvaluateCheckboxlist = abnormalEvaluateObj.abnormalEvaluateCheckboxlist;
              paramsValues.abnormalEvaluateDealExplain = abnormalEvaluateObj.abnormalEvaluateDealExplain;

              function requiredFields() {

                if (params.variables.dealType == 3) {
                  // 检修验收
                  var evaluateObj = target.getValue("evaluateObj");
                  paramsValues.tallyCheck = evaluateObj.tallyCheck;
                  paramsValues.isAccord = evaluateObj.isAccord;
                  paramsValues.isQuality = evaluateObj.isQuality;
                  paramsValues.tallyRemark = evaluateObj.tallyRemark;

                  if (evaluateObj.tallyCheck == "1" && (paramsValues.tallyRemark == "" || paramsValues.tallyRemark == undefined)) {
                    target.growl("请填写验收说明", "warning");
                    return false
                  }
                }

                if (params.variables.ticket.category == "260") {
                  // 综合诊断评价
                  var diagnoseEvaluateObj = target.getValue("diagnoseEvaluateObj");
                  paramsValues.tallyEvaluateCheckboxlist = diagnoseEvaluateObj.tallyEvaluateCheckboxlist;
                  paramsValues.tallyEvaluateDealExplain = diagnoseEvaluateObj.tallyEvaluateDealExplain;

                  if (diagnoseEvaluateObj.tallyEvaluateCheckboxlist == 2 && (paramsValues.tallyEvaluateDealExplain == "" || paramsValues.tallyEvaluateDealExplain == undefined)) {
                    target.growl("请填写状态判断评价的评价说明", "warning");
                    return false
                  }
                }

                if (abnormalEvaluateObj.abnormalEvaluateCheckboxlist == 1 && (paramsValues.abnormalEvaluateDealExplain == "" || paramsValues.abnormalEvaluateDealExplain == undefined)) {
                  target.growl("请填写异常处理的评价说明", "warning");
                  return false
                }
                return true;
              }

              if (requiredFields()) {

                // 调用接口
                target.postService("baogangTicketService", "doTask", [params.ticketNo, paramsValues], function(tc) {
                  if (tc.code == 0) {
                    target.growl("处理成功", "success");
                    target.cancel();
                    target.trigger("search_toDolist");
                    target.trigger("inspectionLoaded");
         
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
        }]];
        event.target.render(ctrlGroups);
      }
      render()
    },
  }
}