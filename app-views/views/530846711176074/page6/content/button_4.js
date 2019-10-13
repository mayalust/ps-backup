/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    click: function(event) {

      var target = event.target;


      // 打开求助页面


      var resource = target.getValue("global/rowObj");
      // 公用的是申请专家-知识库页面
      target.createSystemPopupByViewId("174283678280002", {
        width: "80%",
        top: "140px",
        title: "知识库",
      }, [resource.alertTitle, resource.ticket.deviceId])


    }
  }
}