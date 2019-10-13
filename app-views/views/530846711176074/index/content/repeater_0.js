/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;


      var list = [{
        label: "待处理任务数",
        index: 0,
        value: "-",
        icon: "proudsmart ps-bw_01",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }, {
        label: "已诊断任务数（本月）",
        value: "-",
        index: 1,
        icon: "proudsmart ps-bw_02",
        css: {
          "background-color": "#484b2f",
          "border": "1px solid #e7b52b"
        }
      }, {
        label: "诊断审核通过率",
        value: "-",
        index: 2,
        icon: "proudsmart ps-bw_03",
        css: {
          "background-color": "#472d3c",
          "border": "1px solid #e55057"
        }
      }, {
        label: "诊断准确率",
        value: "-",
        index: 3,
        icon: "proudsmart ps-bw_04",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }];

      // 待处理报警数
      target.on("pendingTaskData", function(e) {
        list[0].value = e;

        target.render(list);

      })

      function randerData() {
        // 已诊断任务数
        target.postService("ticketTaskService", "getDealDoneTaskNumber", [], function(tc) {
          if (tc.data) {
            list[1].value = tc.data
            target.render(list);
          }
        })
        // 诊断审核通过率   综合诊断准确率
        target.postService("ticketTaskService", "getDiagosticRightAndAuditRate", [], function(tc) {
          if (tc.data) {
            list[2].value = tc.data.DiagosticAuditRate + "%";
            list[3].value = tc.data.DiagosticRightRate + "%";
            target.render(list);
          }
        })

      }
      randerData();
    }
  }
}