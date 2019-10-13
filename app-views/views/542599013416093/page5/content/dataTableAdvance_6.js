/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        finishedTime: "时间",
        content: "内容",
        handlerName: "说明人"
      };

      function getTableData(time) {
        target.postService("ticketTaskService", "getTicketTasks", [target.getPopupData().ticketNo], function(tc) {
          if (tc.data) {
            var historyDatas = [];
            for (var i = tc.data.length - 2; i >= 0; i--) {
              if (tc.data[i].values && tc.data[i].values.diagnoseDeclare ||
                tc.data[i].values && tc.data[i].values.auditDeclare) {
                var item = {
                  finishedTime: new Date(tc.data[i].finishedTime).Format("yyyy-MM-dd hh:mm:ss"),
                  handlerName: tc.data[i].handlerName,
                  content: tc.data[i].values.diagnoseDeclare || tc.data[i].values.auditDeclare
                }
                historyDatas.push(item);
              }
            }
            success(historyDatas)
          }
        });
      }
      getTableData();
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