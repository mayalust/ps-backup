/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      target.setValue("diagnoseDeclare", "");
      var ctrlGroups = [
        [{
            type: "label",
            value: "关闭说明:",
            composory: true,
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
                target.setValue("diagnoseDeclare", elem.value);
              }
            }
          }
        ]
      ];
      event.target.render(ctrlGroups);
    }
  }
}