/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var ticketNo = target.getPopupData();
      if (!ticketNo) ticketNo = {
        variables: {}
      };
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
          value: "提交人"
        }, {
          type: "label",
          value: ticketNo.variables.tallyEvaluatUserName
        }, {
          type: "label",
          value: "设备名称"
        }, {
          type: "label",
          value: ticketNo.variables.devName
        }],
        [{
          type: "label",
          value: "设备编号"
        }, {
          type: "label",
          value: ticketNo.variables.deviceCode
        }, {
          type: "label",
          value: "评价等级"
        }, {
          type: "label",
          value: ticketNo.variables.tallyEvaluateCheckboxlist
        }],
        [{
          type: "label",
          value: "评价说明"
        }, {
          colSpan: 3,
          disabled: "disabled",
          type: "textarea",
          value: ticketNo.variables.tallyEvaluateDealExplain
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}