/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var resource = target.getPopupData();

      var render = function() {
        var ctrlGroups = [
          [{
            type: "label",
            value: "设备名称",
            class: "col-md-2"
          }, {
            type: "label",
            value: resource.variables.devName,
            class: "col-md-4"
          }, {
            type: "label",
            value: "设备编号",
            class: "col-md-2"
          }, {
            type: "label",
            value: resource.variables.deviceCode,
            class: "col-md-4"
          }]
        ];
        event.target.render(ctrlGroups);
      }
      if (resource) {
        render();
      }

    }
  }
}