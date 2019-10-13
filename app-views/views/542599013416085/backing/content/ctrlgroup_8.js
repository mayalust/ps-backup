/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var ctrlGroups = [
          [{
            type: "label",
            value: "关闭说明",
            composory: true,
            class: "col-md-2"
          }, {
            type: "textarea",
            class: "col-md-10",
            colSpan : 2,
            on: {
              change: function (elem) {
                target.setValue("closeReason", elem.value);
              }
            },
          }]
        ];

        target.render(ctrlGroups);
    }
  }
}