/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var ctrlGroups = [
        [{
          type: "label",
          value: "提交人"
        }, {
          type: "label",
          value: "点检管理员"
        }, {
          type: "label",
          value: "设备名称"
        }, {
          type: "label",
          value: "助燃风机#1",
        }],
        [{
          type: "label",
          value: "设备编号"
        }, {
          type: "label",
          value: "mdsa235464"
        }, {
          type: "label",
          value: "评价等级"
        }, {
          type: "label",
          value: "正确",
        }],
        [{
          type: "label",
          value: "评价说明"
        }, {
          type: "label",
          value: "诊断结果与点检结果一致"
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}