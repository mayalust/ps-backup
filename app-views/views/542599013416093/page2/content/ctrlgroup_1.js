/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var ctrlGroups = [
        [{
          type: "label",
          value: "关闭说明"
        }, {
          colSpan: 2,
          type: "textarea",
          value: "",
        }],
        [{
          type: "label",
          value: "",
        }, {
          type: "button",
          value: "按钮",
          btnclass: "btn-primary",
          on: {
            click: function(elem) {
              
            }
          }
        }, {
          type: "button",
          value: "取消",
          btnclass: "btn-primary",
          on: {
            click: function(elem) {
              
            }
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}