/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var diagnoseDeclare;
      target.setValue("diagnoseDeclare", "");
      var ctrlGroups = [
        [{
          type: "label",
          composory: true,
          class: "col-md-2",
          value: "关闭说明"
        }, {

          type: "textarea",
          value: "",
          class: "col-md-10",
          on: {
            change: function(elem) {
              target.setValue("diagnoseDeclare", elem.value)
            }
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}