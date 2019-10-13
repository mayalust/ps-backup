/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      
      var target = event.target;
      var global = event.global;
      var task = target.getValue("obj").task || {};


      var limit = new Date(task.sendTime).Format("yyyy-MM-dd hh:mm:ss");
      
      var ctrlGroups = [
        [{
          type: "label",
          value: "设备信息:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            //textAlign:"right",
            fontSize: "14px",
          }
        }, {
          type: "label",
          value: task.devName,
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }],
        [{
          type: "label",
          value: "会诊发起人:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            //textAlign:"right",
            fontSize: "14px"
          }
        }, {
          type: "label",
          value: task.sponsor,
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }],
        [{
          type: "label",
          value: "完成时限:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            // textAlign:"right",
            fontSize: "14px"
          }
        }, {
          type: "label",
          value: task.timeLimit,
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }],
        [{
          type: "label",
          value: "原因分析:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            //textAlign:"right",
            fontSize: "14px"
          }
        }, {
          type: "label",
          value: task.variables.causes,
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }],
        [{
          type: "label",
          value: "结论:",
          class: "col-sm-2",
          style: {
            color: "#a6bacc",
            // textAlign:"right",
            fontSize: "14px"
          }
        }, {
          type: "label",
          value: task.variables.conclusion ? task.variables.conclusion : "",
          class: "col-sm-4",
          style: {
            whiteSpace: "pre-wrap",
            wordBreak: "break-all"
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}