/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var task = target.getValue("obj").task || {};
      var option = target.getValue("obj").option || {};
      //   var myDate = new Date().Format("yyyy-MM-dd hh:mm:ss");
      var myDate = "";
      var disStyle = {};
      event.global.fire("savetask", task);
      var editStatus = false;
      var teamworkReason = "";
      var teamworkVerdict = "";
      if (option == "look") {
        editStatus = true;
        if (task.values && task.values.teamworkReason != undefined) {
          teamworkReason = task.values.teamworkReason;
        }
        if (task.values && task.values.teamworkVerdict != undefined) {
          teamworkVerdict = task.values.teamworkVerdict;
        }
        if (task.values && task.values.teamworkTime != undefined) {
          myDate = new Date(task.values.teamworkTime).Format("yyyy-MM-dd hh:mm:ss");
        }
      } else {
        task.values = {
          "teamworkTime": new Date()
        };
        disStyle = {
          "display": "none"
        };
      }
      var ctrlGroups = [
        [{
          type: "label",
          value: "会诊参与人:",
          class: "col-sm-1",
          style: {
            color: "#a6bacc",
            // paddingLeft:"36px",
            fontSize: "14px"
          }

        }, {
          type: "label",
          value: "" + task.participant + "",
          composory: "none",
          class: "col-sm-4"
        }],
        [{
          type: "label",
          value: "协同时间:",
          style: disStyle,
          class: "col-sm-1",
          style: {
            color: "#a6bacc",
            // paddingLeft:"36px",
            fontSize: "14px"
          }

        }, {
          type: "label",
          value: "" + myDate + "",
          style: disStyle,
          composory: "none",
          class: "col-sm-4"
        }],
        [{
          type: "label",
          value: "原因分析:",
          style: {
            color: "#a6bacc",
            // paddingLeft:"36px",
            fontSize: "14px"
          },
          class: "col-sm-1"
        }, {
          type: option == "look" ? "label" : "textarea",
          class: "col-sm-4",
          value: "" + teamworkReason + "",
          composory: "none",
          labelStyle: option == "look" ? {
            "word-break": "normal",
            "width": "auto",
            "display": "block",
            "white-space": "pre-wrap",
            "word-wrap": " break-word"
          } : "",
          on: {
            change: function(elem) {
              // task.values["teamworkReason"] = elem.value;
              if (event.global.detailTask.values) {
                event.global.detailTask.values["teamworkReason"] = elem.value;
              }

            }
          }
        }],
        [{
          type: "label",
          value: "结论:",
          class: "col-sm-1",
          style: {
            color: "#a6bacc",
            fontSize: "14px"
          }

        }, {
          type: option == "look" ? "label" : "textarea",
          class: "col-sm-4",
          value: "" + teamworkVerdict + "",
          composory: "none",
          labelStyle: option == "look" ? {
            "word-break": "normal",
            "width": "auto",
            "display": "block",
            "white-space": "pre-wrap",
            "word-wrap": " break-word"
          } : "",
          on: {
            change: function(elem) {
              // task.values["teamworkVerdict"] = elem.value;
              if (event.global.detailTask.values) {
                event.global.detailTask.values["teamworkVerdict"] = elem.value;
              }
            }
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}