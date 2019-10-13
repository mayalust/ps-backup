/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var ticketNo = target.getPopupData();
      if (ticketNo.variables.tallyEvaluateCheckboxlist == 0) {
        ticketNo.variables.tallyEvaluateCheckboxlist = "正确"
      } else if (ticketNo.variables.tallyEvaluateCheckboxlist == 1) {
        ticketNo.variables.tallyEvaluateCheckboxlist = "基本正确"
      } else if (ticketNo.variables.tallyEvaluateCheckboxlist == 2) {
        ticketNo.variables.tallyEvaluateCheckboxlist = "不正确"
      } else {
        ticketNo.variables.tallyEvaluateCheckboxlist = ticketNo.variables.tallyEvaluateCheckboxlist;
      }

      var ctrlGroups = [
        [{
          type: "label",
          value: "提交人:",
          class: "col-md-2",
          style: {
            color: "#a6bacc",
            textAlign: "right",
            fontSize: "14px",
            paddingRight: "30px"
          }
        }, {
          type: "label",
          value: ticketNo.variables.tallyEvaluatUserName
        }, {
          type: "label",
          value: "设备名称:",
          class: "col-md-2",
          style: {
            color: "#a6bacc",
            textAlign: "right",
            fontSize: "14px",
            paddingRight: "30px"
          }
        }, {
          type: "label",
          value: ticketNo.variables.device.label
        }],
        [{
          type: "label",
          value: "设备编号:",
          class: "col-md-2",
          style: {
            color: "#a6bacc",
            textAlign: "right",
            fontSize: "14px",
            paddingRight: "30px"
          }
        }, {
          type: "label",
          value: ticketNo.variables.deviceCode
        }, {
          type: "label",
          value: "评价等级:",
          class: "col-md-2",
          style: {
            color: "#a6bacc",
            textAlign: "right",
            fontSize: "14px",
            paddingRight: "30px"
          }
        }, {
          type: "label",
          value: ticketNo.variables.tallyEvaluateCheckboxlist
        }],
        [{
          type: "label",
          value: "评价说明:",
          class: "col-md-2",
          style: {
            color: "#a6bacc",
            textAlign: "right",
            fontSize: "14px",
            paddingRight: "30px"
          }
        }, {
          type: "label",
          value: ticketNo.variables.tallyEvaluateDealExplain
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}