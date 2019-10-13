/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      if (target.getPopupData()) {
        var getAlertItemList = target.getPopupData().variables.alertEvaluateInfoList;
        target.setValue("getAlertItemList", getAlertItemList);
        // 找出在线的报警
        var appName1 = [];
        getAlertItemList.forEach(function(ele) {
          if (ele.appName == 1) {
            appName1.push(ele);
          }
        });
        target.render(appName1);
      }
    }
  }
}