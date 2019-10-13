/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      target.setInvisible(false);
      if (target.getPopupData()) {
        var getAlertItemList = target.getPopupData().variables.alertEvaluateInfoList;
        // 找出大数据的报警
        getAlertItemList.forEach(function(ele) {
          if (ele.appName == 3) {
            target.setInvisible(true);
          }
        });
      }
    }
  }
}