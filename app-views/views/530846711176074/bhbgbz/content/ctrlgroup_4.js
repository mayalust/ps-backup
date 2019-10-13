/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {

      var target = event.target;
      var global = event.global;

      var ticketNo = target.getPopupData();
      target.postService("ticketTaskService", "getTicketTasks", [ticketNo.ticketNo], function(tc) {
        if (tc.data) {

          var historyDatas = [];
          for (var i = tc.data.length - 1; i >= 0; i--) {
            if (tc.data[i].values && tc.data[i].values.auditOpinion) {
              var item = {
                finishedTime: new Date(tc.data[i].finishedTime).Format("yyyy-MM-dd hh:mm:ss"),
                handlerName: tc.data[i].handlerName,
                content: tc.data[i].values.auditOpinion
              }
              historyDatas.unshift(item);
            }
          }




          if (historyDatas.length > 0) {
            var ctrlGroups = [
              [{
                type: "label",
                value: "审核人:"
              }, {
                disabled: "true",
                type: "label",
                value: historyDatas[0].handlerName
              }, {
                type: "label",
                value: "说明时间:",
                style: {
                  marginLeft: "70px"
                }
              }, {
                disabled: "true",
                type: "label",
                value: new Date(historyDatas[0].finishedTime).Format("yyyy-MM-dd hh:mm:ss"),
              }],
              [{
                type: "label",
                value: "审核意见"
              }, {
                type: "textarea",
                colSpan: 4,
                disabled: "true",
                value: historyDatas[0].content,
                style: {
                  marginLeft: "-30px"
                }
              }],
            ];
            event.target.render(ctrlGroups);
          } else {
            var ctrlGroups = [
              [{
                type: "label",
                value: "暂无信息",
                style: {
                  textAlign: "center"
                }

              }],
            ]
            target.render(ctrlGroups)
          }
        }
      });


    }
  }
}