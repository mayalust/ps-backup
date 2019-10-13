/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var list = [{
        label: "待处理任务数",
        value: "0",
        index:0,
        icon: "proudsmart ps-bw_05",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      },{
          label: "故障停机时间（本周）",
          value: "0h",
          index:1,
          icon: "proudsmart ps-bw_06",
          css: {
            "background-color": "#484b2f",
            "border": "1px solid #e7b52b"
          }
        }, {
          label: "故障停机次数（本周）",
          value: "0",
          index:2,
          icon: "proudsmart ps-bw_07",
          css: {
            "background-color": "#472d3c",
            "border": "1px solid #e55057"
          }
        }];

      // 待处理报警数
      target.on("inspectioned",function(e){
          list[0].value = e;
          target.render(list);
     
      })
      function randerData(){
           // 已诊断任务数
           target.postService("ticketTaskService", "getDealDoneTaskNumber", [], function (tc) {
             if (tc.data) {
               list[1].value =  tc.data + "h"
               target.render(list);
             }
           })
           // 诊断审核通过率   综合诊断准确率
           target.postService("ticketTaskService", "getDiagosticRightAndAuditRate", [], function (tc) {
             if (tc.data) {
               list[2].value =  tc.data.DiagosticAuditRate + "";
               target.render(list);
             }
           })
        
      }
            // randerData();
    }
  }
}