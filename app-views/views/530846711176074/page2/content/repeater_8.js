/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      if (target.getPopupData()) {
        var getAlertItemList = target.getPopupData().variables.alertItemList;
        // 找出大数据的报警
        var appName3 = [];
        getAlertItemList.forEach(function(ele) {
          if (ele.appName == 3) {
            appName3.push(ele);
          }
        });
        target.render(appName3);
      }
    }
  }
}