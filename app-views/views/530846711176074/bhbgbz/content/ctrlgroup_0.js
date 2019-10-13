/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var devName = event.target.getParameter("devName");

      //   var deviceCode = event.target.getParameter("externalDevId");
      //   var ticket = event.target.getParameter("ticket");



      var ticket = target.getPopupData();


      if (ticket) {


        var dName = "设备名称:";
        var numberD = "设备编号:";

        dName = "设备名称:" + ticket.variables.devName + "";


        numberD = "设备编号:" + ticket.variables.deviceCode + "";

        var ctrlGroups = [
          [{
            type: "label",
            value: dName,
            class: "col-md-6",
            style: {
              textAlign: "center"
            }
          }, {
            type: "label",
            value: numberD,
            class: "col-md-6",
            style: {
              textAlign: "center"
            }
          }]
        ];
        event.target.render(ctrlGroups);

      }
    }
  }
}