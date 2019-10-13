/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;


      var ctrlGroups = [
        [{
          type: "label",
          value: "设备名称:" + target.getPopupData().split(",")[0],
          class: "col-md-6",
          style: {
            textAlign: "left"
          }
        }, {
          type: "label",
          value: "设备编号:" + target.getPopupData().split(",")[1],
          class: "col-md-6",
          style: {
            textAlign: "left"
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}