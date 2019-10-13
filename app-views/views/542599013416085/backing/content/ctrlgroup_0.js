/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
    
     var resource =  target.getPopupData();

     var render = function () { 
    
        var ctrlGroups = [
          [{
            type: "label",
            value: "设备名称:",
            class: "col-md-2",
            style: {
              "paddingLeft": "8%"
            }
          }, {
            type: "label",
            value: resource.variables.devName,
            class: "col-md-4"
          }, {
            type: "label",
            value: "设备编号:",
            class: "col-md-2",
            style: {
              "paddingLeft": "8%"
            }
          }, {
            type: "label",
            value: resource.variables.deviceCode,
            class: "col-md-4"
          }]
        ];
        event.target.render(ctrlGroups);
      }
      render();
    }
  }
}