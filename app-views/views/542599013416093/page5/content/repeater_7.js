/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      if (target.getPopupData()) {
        var getAlertItemList = target.getPopupData().variables.alertEvaluateInfoList;
        // 找出智能诊断的报警
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