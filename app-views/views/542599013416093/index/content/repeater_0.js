/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var list = [{
          label: "待审核任务数",
          value: "-",
          index: 0,
          icon: "proudsmart ps-bw_01",
          css: {
            "background-color": "#0c466d",
            "border": "1px solid #21a6fb"
          }
        },
        {
          label: "已审核任务数（本月）",
          value: "-",
          index: 1,
          icon: "proudsmart ps-bw_02",
          css: {
            "background-color": "#484b2f",
            "border": "1px solid #e7b52b"
          }
        },
        {
          label: "已审核任务数（本年）",
          value: "-",
          index: 2,
          icon: "proudsmart ps-bw_03",
          css: {
            "background-color": "#472d3c",
            "border": "1px solid #e55057"
          }
        },
        {
          label: "诊断准确率（本月）",
          value: "-",
          index: 3,
          icon: "proudsmart ps-bw_04",
          css: {
            "background-color": "#0c466d",
            "border": "1px solid #21a6fb"
          }
        }
      ];

      // 待诊断任务数
      target.on("auditLoaded",
        function(e) {
          list[0].value = e.length;
          target.render(list);
        });

      function randerData() {
        // 已审核任务数（本月）已审核任务数（本年) 
        target.postService("ticketTaskService", "getAuditTaskNumber", [],
          function(tc) {
            if (tc.data) {
              list[1].value = tc.data.MONTH;
              list[2].value = tc.data.YEAR;
              target.render(list);
            }
          })
        // 已审核任务数（本年)   诊断准确率（本月）
        target.postService("ticketTaskService", "getDiagosticRightAndAuditRate", [],
          function(tc) {
            if (tc.data) {
              list[3].value = tc.data.DiagosticRightRate + "%"; // 综合诊断准确率
              target.render(list);
            }
          })
      }

      randerData();

    }
  }
}