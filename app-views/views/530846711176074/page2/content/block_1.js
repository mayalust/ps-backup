/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      target.setInvisible(false);
      if (target.getPopupData()) {


        var getAlertItemList = target.getPopupData().variables.alertItemList;
        // 找出智能诊断的报警
        getAlertItemList.forEach(function(ele) {
          if (ele.appName == 2) {
            target.setInvisible(true);
          }
        });
      }
    }
  }
}