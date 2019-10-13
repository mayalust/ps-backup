/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;

      var taskId = target.getPopupData().split(",")[2];

      var protocol = window.location.protocol;
      var host = window.location.host;
      var lc = protocol + "//" + host;
      var myDicts = {};

      var ctrlGroupsObj = {};
      var ctrlGroups = [];

      event.target.postService("ticketTaskService", "getTicketTaskById", taskId, function(tc) {
        if (tc.code == 0) {
          ctrlGroupsObj = tc.data.values;
          if (ctrlGroupsObj.alertTitle != undefined) {
            var obj = [{
              type: "label",
              value: "设备告警信息",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.alertTitle
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.abnPhenomenon != undefined) {
            var obj = [{
              type: "label",
              value: "异常现象",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.abnPhenomenon
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.technicsStatus != undefined) {
            var obj = [{
              type: "label",
              value: "工艺状况",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.technicsStatus
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.position != undefined) {
            var obj = [{
              type: "label",
              value: "检测部位",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.position
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.attention != undefined) {
            var obj = [{
              type: "label",
              value: "注意事项",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.attention
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.standard != undefined) {
            var obj = [{
              type: "label",
              value: "判断标准",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.standard
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.basis != undefined) {
            var obj = [{
              type: "label",
              value: "判断依据",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.basis
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.basisImage != undefined) {
            var str = "";
            if (ctrlGroupsObj.basisImage.length > 0) {
              var arr = ctrlGroupsObj.basisImage;
              for (var j in arr) {
                str += "<img src='" + lc + "" + arr[j].value + "' style='width: 200px;height: 200px;margin-right: 10px;' />";
              }
            }

            var obj = [{
              type: "label",
              value: "判断依据图片",
              class: "col-md-2"
            }, {
              type: "customHtml",
              disabled: true,
              value: str
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.statusGrade != undefined) {
            var obj = [{
              type: "label",
              value: "综合状态等级",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.statusGrade
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.abnPosition != undefined) {
            var obj = [{
              type: "label",
              value: "异常部位",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.abnPosition
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.failureRepairReson != undefined) {
            var obj = [{
              type: "label",
              value: "故障产生原因",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.failureRepairReson
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.multipleConclusion != undefined) {
            var obj = [{
              type: "label",
              value: "综合判断结论",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.multipleConclusion
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.cessingScheme != undefined) {
            var obj = [{
              type: "label",
              value: "处理方案建议",
              class: "col-md-2"
            }, {
              type: "input",
              disabled: true,
              value: ctrlGroupsObj.cessingScheme
            }]
            ctrlGroups.push(obj);
          }
          if (ctrlGroupsObj.attUpload != undefined) {
            var str = "";
            if (ctrlGroupsObj.attUpload.length > 0) {
              var arr = ctrlGroupsObj.attUpload;
              for (var j in arr) {
                str += "<a href='" + lc + "" + arr[j].value + "' target='_blank' style='margin-right:10px;'>" + arr[j].label + "</a>";
              }
            }
            var obj = [{
              type: "label",
              value: "附件",
              class: "col-md-2"
            }, {
              type: "customHtml",
              disabled: true,
              value: str
            }]
            ctrlGroups.push(obj);
          }
          event.global.fire("savetask", tc.data)
          event.target.render(ctrlGroups);
        } else {
          event.target.growl(tc.message, "info");
        }
      })

      //  event.target.postService("dictionaryService", "getAllDicts", [], function(returnObj){
      //      if(returnObj.code == 0){
      //           var dic = {};
      //             for(var i in returnObj.data) {
      //               var obj = returnObj.data[i];
      //               if(dic[obj.dictCode]) {
      //                 dic[obj.dictCode].push(obj);
      //               } else {
      //                 dic[obj.dictCode] = [];
      //                 dic[obj.dictCode].push(obj);
      //               }
      //             }
      //             for(var items in dic) {
      //               myDicts[items] = dic[items];
      //             }

      //      }
      //  });
    }
  }
}