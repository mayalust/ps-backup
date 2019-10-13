/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var auditDeclare;
      target.setValue("auditDeclare", "");
      var ctrlGroups = [
        [{
            type: "label",
            composory: true,
            value: "审核说明:",
            class: "col-md-2",
            style: {
              color: "#a6bacc",
              textAlign: "right",
              fontSize: "14px",
              paddingRight: "30px"
            }
          },
          {
            colSpan: 2,
            type: "textarea",
            value: "",
            on: {
              change: function(elem) {
                target.setValue("auditDeclare", elem.value);
              }
            }
          }
        ]
      ];
      event.target.render(ctrlGroups);
    }
  }
}