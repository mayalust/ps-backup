/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var projectModel;
      var projectAttr;
      var workObj = {};
      var render = function(tasks) {
        var format = [{
            name: "customerName",
            label: "产线",
            render: function(data, type, full) {
              return data;
            }
          },
          {
            name: "devName",
            label: "设备信息",
            type: "link",
            //   on: {
            //       click : function(data){  
            //           var nodeId = data.row.nodeId;
            //           target.getResourceById(nodeId, function(resource){
            //               resource.$location = "device";
            //               target.setValue("global/resource", resource);
            //               target.navigateTo("index", {
            //                   main : 1
            //               }, "self");
            //           })
            //       }
            //   }
          }, {
            name: "appName",
            label: "报警来源",
            type: "alarmSource",
            render: function(data, type, full) {
              return data;
            }
          }, {
            name: "alertTitle",
            label: "报警信息",
            render: function() {
              return random(4, 0);
            }
          },
          //   {
          //       name : "severity",
          //       label : "报警级别",
          //       type : "priority",
          //       render : function(){
          //           return random(4, 0);
          //       }
          //   },
          {
            name: "severity",
            label: "报警级别",
            type: "priority",
            render: function(data, type, full) {
              return data;
            }
          }, {
            name: "sendTime",
            label: "接收时间",
            type: "date",
            render: function(data, type, full) {
              return data;
            }
          }, {
            name: "sponsor",
            label: "会诊发起人",
            render: function(data, type, full) {
              
              return data;
            }
          }, {
            name: "participant",
            label: "会诊参与人",
            render: function(data, type, full) {
              
              return data;
            }
          }, {
            name: "timeLimit",
            label: "时限",
            render: function(data, type, full) {
              
              return data;
            }
          }, {
            name: "tickeTaskStatus",
            label: "任务状态",
            render: function(data, type, full) {
              return data;
            }
          }, {
            name: "handel",
            label: "操作",
            type: "buttonGroup",
            content: [{
              label: "分析",
              icon: "null",
              class: "btn btn-default btn-sm",
              on: {
                click: function(elem) {



                  target.navigateTo("index", "专业分析", {
                    id: elem.row.variables.deviceId,
                    specialty: elem.row.variables.specialtyProp,
                    //   sensor: elem.row.variables.alertInstance,
                    startdate: new Date(elem.row.variables.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                    enddate: new Date(elem.row.variables.arisingTime).getTime() + 1 * 60 * 60 * 1000
                  });







                }
              }
            }, {
              label: "处理",
              icon: "null",
              class: "btn btn-default btn-sm",
              on: {
                click: function(elem) {
                  var obj = {
                    "task": elem.row,
                    "option": "edit"
                  };
                  //  target.createPopupBypath('popup', {
                  //         title: "诊断详情",
                  //         theme : "system",
                  //         width: "40%",
                  //         on : {
                  //           submit : function(data){
                  //           if(data.statuc == "success"){
                  //               event.global.fire("query",{});
                  //               event.global.fire("queryFinish",{});
                  //           }
                  //           }
                  //         }
                  //  },obj);
                  target.setValue("obj", obj);
                  target.createSystemPopupByLocalPath("zddetail", {
                    width: "40%",
                    title: "诊断详情",
                    on: {
                      submit: function(data) {
                        if (data.statuc == "success") {
                          var params = {};
                          if (target.getValue("sponsor")) {
                            params = target.getValue("sponsor");
                          }
                          event.global.fire("query", params);
                          event.global.fire("queryFinish", {});
                        }
                      }
                    }
                  }, obj);

                }
              }
            }],
            render: function() {
              return ""
            }
          }
        ]
        target.setValue("formatTask", format);
        target.render({
          data: tasks,
          format: format.map(function(elem) {
            return {
              "name": elem.label,
              "value": elem.name,
              "type": elem.type || "text",
              "content": elem.content
            }
          }),
          on: {
            rowClick: function(event) {
              $(".table.dataTable:last > tbody > tr:first").removeClass("rowSelected");
              $(".table.dataTable:first > tbody > tr:first").removeClass("rowSelected");
            }
          }
        });
      }
      var myDicts = {};
      var userObj = {};
      event.target.postService("dictionaryService", "getAllDicts", [], function(returnObj) {
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
          target.setValue("allDicts", myDicts);
          event.target.postService("userUIService", "queryUserByCondition", {}, function(returnData) {
            if (returnData.code == 0) {
              var queryUser = returnData.data;
              target.setValue("user", queryUser)
              for (var i in queryUser) {
                userObj[queryUser[i].userID] = queryUser[i];
              }
              target.setValue("userObj", userObj);

              var ticketTaskQueryModel = {
                "taskStatus": 10,
                "variables": {
                  "theTicketType": "join"
                }
              };
              event.target.postService("ticketTaskService", "getTicketTasksByCondition", ticketTaskQueryModel, function(tc) {
                if (tc.code == 0) {
                  var taskList = tc.data;
                  var taskArr = [];
                  for (var j in taskList) {
                    taskList[j]["customerName"] = "";
                    taskList[j]["devName"] = "";
                    taskList[j]["appName"] = "";
                    taskList[j]["alertTitle"] = "";
                    taskList[j]["severity"] = "";
                    taskList[j]["specialtyType"] = "";
                    taskList[j]["sponsor"] = "";
                    taskList[j]["participant"] = "";
                    taskList[j]["timeLimit"] = "";
                    taskList[j]["report"] = "";
                    taskList[j]["severity"] = "";
                    taskList[j]["tickeTaskStatus"] = "待协同";
                    if (taskList[j].variables && taskList[j].variables.timeLimit != undefined) {
                      var finshTimeType = myDicts["finshTimeType"];
                      for (var f in finshTimeType) {
                        if (finshTimeType[f].valueCode == taskList[j].variables.timeLimit) {
                          taskList[j].timeLimit = finshTimeType[f].label;
                          break;
                        }
                      }
                    }
                    if (taskList[j].variables && taskList[j].variables.specialtyType != undefined) {
                      var specialtyType = myDicts["specialtyProps"];
                      for (var s in specialtyType) {
                        if (specialtyType[s].valueCode == taskList[j].variables.specialtyType) {
                          taskList[j].specialtyType = specialtyType[s].label;
                          break;
                        }
                      }
                    }
                    if (taskList[j].variables && taskList[j].variables.participant != undefined && userObj[taskList[j].variables.participant] != undefined) {
                      taskList[j].participant = userObj[taskList[j].variables.participant].userName
                    }
                    if (taskList[j].variables && taskList[j].variables.sponsor != undefined && userObj[taskList[j].variables.sponsor] != undefined) {
                      taskList[j].sponsor = userObj[taskList[j].variables.sponsor].userName;
                    }
                    if (taskList[j].variables && taskList[j].variables.customerName != undefined) {
                      taskList[j].customerName = taskList[j].variables.customerName;
                    }
                    if (taskList[j].variables && taskList[j].variables.devName != undefined) {
                      taskList[j].devName = taskList[j].variables.devName;
                    }
                    if (taskList[j].variables && taskList[j].variables.appName != undefined) {
                      taskList[j].appName = taskList[j].variables.appName;
                    }
                    if (taskList[j].variables && taskList[j].variables.alertTitle != undefined) {
                      taskList[j].alertTitle = taskList[j].variables.alertTitle;
                    }
                    if (taskList[j].variables && taskList[j].variables.severity != undefined) {
                      taskList[j].severity = taskList[j].variables.severity;
                    }
                    taskArr.push(taskList[j]);
                  }
                  render(taskArr);
                }

              })
            }
          })
        }
      })
    },
    query: function(event) {


      var target = event.target;
      var myDicts = target.getValue("allDicts");
      var userObj = target.getValue("userObj");
      var format = target.getValue("formatTask");
      var params = event.params;
      var render = function(alertData) {
        target.render({
          data: alertData,
          format: format.map(function(elem) {
            return {
              "name": elem.label,
              "value": elem.name,
              "type": elem.type || "text",
              "content": elem.content
            }
          })
        });
      }
      var queryItem = {
        "taskStatus": "10",
        "variables": {
          "theTicketType": "join",
          "sponsor": params.sponsor
        },
        "sendBeginTime": params.firstTimeFrom,
        "sendEndTime": params.firstTimeTo
      };
      var jsonToString = JSON.stringify(queryItem);
      event.target.postService("ticketTaskService", "getTicketTasksByCondition", eval("(" + jsonToString + ")"), function(tc) {
        if (tc.code == 0) {
          var taskList = tc.data;
          var taskArr = [];
          for (var j in taskList) {
            taskList[j]["customerName"] = "";
            taskList[j]["devName"] = "";
            taskList[j]["appName"] = "";
            taskList[j]["alertTitle"] = "";
            taskList[j]["severity"] = "";
            taskList[j]["specialtyType"] = "";
            taskList[j]["sponsor"] = "";
            taskList[j]["participant"] = "";
            taskList[j]["timeLimit"] = "";
            taskList[j]["report"] = "";
            taskList[j]["tickeTaskStatus"] = "待协同";
            if (taskList[j].variables && taskList[j].variables.timeLimit != undefined) {
              var finshTimeType = myDicts["finshTimeType"];
              for (var f in finshTimeType) {
                if (finshTimeType[f].valueCode == taskList[j].variables.timeLimit) {
                  taskList[j].timeLimit = finshTimeType[f].label;
                  break;
                }
              }
            }
            if (taskList[j].variables && taskList[j].variables.specialtyType != undefined) {
              var specialtyType = myDicts["specialtyProps"];
              for (var s in specialtyType) {
                if (specialtyType[s].valueCode == taskList[j].variables.specialtyType) {
                  taskList[j].specialtyType = specialtyType[s].label;
                  break;
                }
              }
            }
            if (taskList[j].variables && taskList[j].variables.participant != undefined && userObj[taskList[j].variables.participant] != undefined) {
              taskList[j].participant = userObj[taskList[j].variables.participant].userName
            }
            if (taskList[j].variables && taskList[j].variables.sponsor != undefined && userObj[taskList[j].variables.sponsor] != undefined) {
              taskList[j].sponsor = userObj[taskList[j].variables.sponsor].userName;
            }
            if (taskList[j].variables && taskList[j].variables.customerName != undefined) {
              taskList[j].customerName = taskList[j].variables.customerName;
            }
            if (taskList[j].variables && taskList[j].variables.devName != undefined) {
              taskList[j].devName = taskList[j].variables.devName;
            }
            if (taskList[j].variables && taskList[j].variables.alertTitle != undefined) {
              taskList[j].alertTitle = taskList[j].variables.alertTitle;
            }
            if (taskList[j].variables && taskList[j].variables.appName != undefined) {
              taskList[j].appName = taskList[j].variables.appName;
            }
            if (taskList[j].variables && taskList[j].variables.severity != undefined) {
              taskList[j].severity = taskList[j].variables.severity;
            }
            taskArr.push(taskList[j]);
          }
          render(taskArr);
        }
      })
    }
  }
}