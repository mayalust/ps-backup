/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var task = target.getValue("obj").task;
      var limit = new Date(task.sendTime).Format("yyyy-MM-dd hh:mm:ss");
      var ctrlGroups = [
        [{
          type: "label",
          value: "报警信息:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            // textAlign:"right",
            fontSize: "14px"
          }
        }, , {
          type: "label",
          value: task.alertTitle,
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }],
        [{
          type: "label",
          value: "申请时间:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            // textAlign:"right",
            fontSize: "14px"
          }
        }, , {
          type: "label",
          value: limit,
          class: "col-sm-4",
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}