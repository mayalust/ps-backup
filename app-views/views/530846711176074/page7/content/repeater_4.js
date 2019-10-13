/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      if (target.getPopupData()) {
        var getAlertItemList = target.getPopupData().variables.alertEvaluateInfoList;
        // 找出智能诊断的报警
        var appName2 = [];
        getAlertItemList.forEach(function(ele) {
          if (ele.appName == 2) {
            appName2.push(ele);
          }
        });
        target.render(appName2);
      }
    }
  }
}