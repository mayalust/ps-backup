/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;




      var resource = target.getValue("maintainListData");



      var render = function() {
        var ctrlGroups = [
          [{
            type: "label",
            class: "col-md-2",
            value: "设备名称:"
          }, {
            type: "label",
            class: "col-md-4",
            value: resource.variables.devName
          }, {
            type: "label",
            class: "col-md-2",
            value: "设备编号:",

          }, {
            type: "label",
            class: "col-md-4",
            value: resource.variables.deviceCode,
          }]
        ];
        event.target.render(ctrlGroups);
      }
      render();
    }
  }
}