/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;


      var rowData = target.getValue("rowData");

      var ctrlGroups = [
        [{
            type: "label",
            value: "设备名称:" + rowData.rowObj.variables.devName,
            class: "col-md-6",
            style: {
              textAlign: "left"
            }
          },
          {
            type: "label",
            value: "设备编号:" + rowData.rowObj.variables.deviceCode,
            class: "col-md-6",
            style: {
              textAlign: "left"
            }
          }
        ]
      ];
      event.target.render(ctrlGroups);
    }
  }
}