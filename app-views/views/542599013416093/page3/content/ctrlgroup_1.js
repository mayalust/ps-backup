/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;


      var taskId = target.getValue("rowData").rowObj.id;



      var protocol = window.location.protocol;
      var host = window.location.host;
      var lc = protocol + "//" + host;
      var myDicts = {};

      var ctrlGroupsObj = {};

      var ctrlGroups = [];

      event.target.postService("dictionaryService", "getAllDicts", [], function(returnObj) {
        ;

        if (returnObj.code == 0) {
          var dic = {};
          for (var i in returnObj.data) {
            var obj = returnObj.data[i];
            if (dic[obj.dictCode]) {
              dic[obj.dictCode].push(obj);
            } else {
              dic[obj.dictCode] = [];
              dic[obj.dictCode].push(obj);
            }
          }
          for (var items in dic) {
            myDicts[items] = dic[items];
          }

          event.target.postService("ticketTaskService", "getTicketTaskById", taskId, function(tc) {
            if (tc.code == 0) {
              ctrlGroupsObj = tc.data.variables;
              target.trigger("offlineReportList", ctrlGroupsObj.offlineReportList);

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
              // if(ctrlGroupsObj.attention !=undefined){
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
              // }
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

                var basisStr = "";
                ctrlGroupsObj.basis.forEach(function(elem) {
                  basisStr += elem + ";  ";
                })
                var obj = [{
                  type: "label",
                  value: "判断依据",
                  class: "col-md-2"
                }, {
                  type: "input",
                  disabled: true,
                  value: basisStr
                }]
                ctrlGroups.push(obj);
              }


              var str = "";
              if (ctrlGroupsObj.basisImage != undefined) {
                if (ctrlGroupsObj.basisImage.length > 0) {
                  var arr = ctrlGroupsObj.basisImage;
                  for (var j in arr) {

                    if (j % 5 == 0) {
                      if (j == 0) {
                        str += "<a  target='_blank' href='" + arr[j].value + "'><img src='" +
                          lc + "" + arr[j].value + "' style='width: 100px;height: 100px;margin-right: 10px;' /></a>"
                      } else {
                        str += "<a  target='_blank' href='" + arr[j].value + "'><img src='" +
                          lc + "" + arr[j].value + "' style='width: 100px;height: 100px;margin-right: 10px;' /></a><br />"

                      }


                    } else {
                      str += "<a  target='_blank' href='" + arr[j].value + "'><img src='" +
                        lc + "" + arr[j].value + "' style='width: 100px;height: 100px;margin-right: 10px;' /></a>";
                    }

                  }
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

              if (ctrlGroupsObj.statusGrade != undefined) {

                var statusGrades = target.getRootScope("myDicts")["statusGrade"];
                statusGrades.forEach(function(elem) {
                  if (elem.valueCode == ctrlGroupsObj.statusGrade) {
                    ctrlGroupsObj.statusGrade = elem.label;
                  }
                  return;
                })

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
              if (ctrlGroupsObj.abnType != undefined) {
                var obj = [{
                  type: "label",
                  value: "异常类型",
                  class: "col-md-2"
                }, {
                  type: "input",
                  disabled: true,
                  value: ctrlGroupsObj.abnType
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
              // if(ctrlGroupsObj.remark !=undefined){
              var obj = [{
                type: "label",
                value: "备注",
                class: "col-md-2"
              }, {
                type: "input",
                disabled: true,
                value: ctrlGroupsObj.remark
              }]
              ctrlGroups.push(obj);
              // }

              var str = "";
              if (ctrlGroupsObj.attUpload != undefined) {
                if (ctrlGroupsObj.attUpload.length > 0) {
                  var arr = ctrlGroupsObj.attUpload;
                  for (var j in arr) {
                    str += "<a href='" + lc + "" + arr[j].value + "' target='_blank' style='margin-right:10px;'>" + arr[j].label + "</a><br />";
                  }
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

              event.global.fire("savetask", tc.data)
              event.target.render(ctrlGroups);
            }
          })
        }
      });


    }
  }
}