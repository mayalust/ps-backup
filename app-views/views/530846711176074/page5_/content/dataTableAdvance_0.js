/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        finishedTime: "说明时间",
        content: "审核意见",
        handlerName: "审核人"
      };
      //   var ticketNo = event.target.getParameter("ticketNo");
      var ticketNo = target.getPopupData();

      function getTableData(time) {
        target.postService("ticketTaskService", "getTicketTasks", [ticketNo.ticketNo], function(tc) {
          if (tc.data) {
            var historyDatas = [];
            for (var i = tc.data.length - 2; i >= 0; i--) {

              if (tc.data[i].values && tc.data[i].values.auditOpinion) {
                var item = {
                  finishedTime: new Date(tc.data[i].finishedTime).Format("yyyy-MM-dd hh:mm:ss"),
                  handlerName: tc.data[i].handlerName,
                  content: tc.data[i].values.auditOpinion
                }
                historyDatas.push(item);
              }
            }
            success(historyDatas)
          }
        });
      }
      if (ticketNo) {
        getTableData();
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      function success(datas) {
        var render = function(advsearch) {
          var format = [];
          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          }
          target.render({
            data: datas,
            format: format
          });
        };

        render();
      };
    }
  }
}