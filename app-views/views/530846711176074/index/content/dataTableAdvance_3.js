/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function (event) {
      var target = event.target;
      var navigateTrigger = false;
      //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        ticketNo: "任务编号",
        customerName: "产线",
        // devName : "设备信息",
        filePath: {
          type: "link",
          value: "devName",
          name: "设备信息",
          on: {
            click: function (data) {
              var deviceId = data.row.deviceId;
              target.getResourceById(deviceId,
                function (resource) {
                  //resource.$location = "device";
                  if (resource.values.viewType == "motor") {
                    resource.$location = "motor"
                  } else {
                    resource.$location = "device";
                  }
                  target.setValue("global/resource", resource);
                  target.setParameter("id", resource.id);
                  /**
                   *  通过别名的方法调准啊
                   */
                  target.navigateToTab("device");
                })
            }
          }
        },
        appName: {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function (data) {


              // 判断跳转到那个页面。1.在线 2 智能 3.大数据 4.离线
              if (data.row.appName == 2) {
                target.navigateTo("index", {
                    main: 2,
                    sub: 6,
                  },
                  "self");

              } else if (data.row.appName == 3) {
                target.navigateTo("index", {
                    main: 2,
                    sub: 5,
                  },
                  "self");
              } else if (data.row.appName == 4) {
                if (data.row.tickeTaskStatus != "待诊断") {
                  window.location.href = "/api/rest/download/deviceResumeUIService/getReportBytes/" + data.row.ticketNo + ".pdf/" + data.row.ticketNo;
                }

              } else if (data.row.appName == 1) {
                // target.growl("报告还未生成", "warning")
              } else if (data.row.appName == "合并告警") {
                data.row.alertItemList.forEach(function (ele) {
                  ele.deviceName = data.row.devName;
                });
                if (data.appName = "合并告警") {
                  target.createSystemPopupByViewId("357383633040000", {
                    "title": "报警详情",
                    "top": "10%",
                    "width": "50%",
                  }, data.row.alertItemList);
                }
              }
            }
          }
        },
        alertTitle: "报警信息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        sendTime: "报警分配时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };

      function getTableData1(time) {
        var param = {
          //   "variables":{"theTicketType":"normal"},
          "taskStatus": 10,
          "categorys": "50",
          "tickeTaskStatus": "checking,explaining",
          "sendBeginTime": time ? time.firstTimeFrom : "",
          "sendEndTime": time ? time.firstTimeTo : "",
        };
        var params = eval("(" + JSON.stringify(param) + ")");
        target.postService("ticketTaskService", "getTicketTasksByCondition", params,
          function (tc) {
            if (tc.data) {
              var datas = [];
              tc.data.forEach(function (ele) {
                if (ele.variables.ticket) {
                  var data = ele.variables.ticket.values;

                  if (ele.variables.alertItemList.length > 1) {
                    data.appName = "合并告警";
                  }

                  if (ele.variables.isAudit == 0 && ele.variables.ticket.values.tickeTaskStatus == "checking") {
                    data.tickeTaskStatus = "被驳回";
                    data.tickeTaskStatusName = "reject" // 审核被驳回
                  } else if (ele.variables.isClose == 0 && ele.variables.ticket.values.tickeTaskStatus == "explaining") {
                    data.tickeTaskStatus = "被驳回";
                    data.tickeTaskStatusName = "rejectExplaining" // 说明再次被驳回展示的按钮
                  } else if (ele.variables.ticket.values.tickeTaskStatus == "explaining") {
                    data.tickeTaskStatus = "待说明";
                    data.tickeTaskStatusName = "explaining"
                  } else {
                    data.tickeTaskStatus = "待诊断";
                    data.tickeTaskStatusName = "checking"
                  }
                  data.ticket = ele;
                  data.handlerName = ele.handlerName;
                  data.sendTime = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
                  datas.push(data);
                }

              })

              target.trigger("pendingTaskData", datas.length);
              success(datas)
            }
          });
      }

      getTableData1();
      //--------------------------自定义输入-----------------------------


      //注意，下面内容别动！！！
      function success(datas) {
        var render = function (advsearch) {
          var format = [];
          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);

            format.push(item);
          }
          format.push({
            name: "操作",
            type: "valueBased",
            value: "tickeTaskStatusName",
            options: {
              // 待诊断展示的按钮
              checking: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                    label: "分析",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {
                        target.navigateTo("index", "专业分析", {
                          id: elem.row.deviceId,
                          //specialty: elem.row.specialtyProp,
                          sensor: elem.row.alertInstance,
                          startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                          enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                        });

                      }
                    }
                  },
                  {
                    label: "编制报告",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {

                        // 获取当前的告警信息
                        var alertInfo = elem.row.ticket;

                        target.setValue("alertInfo", alertInfo);

                        var resource = {
                          id: elem.row.deviceId
                        }

                        target.setValue("global/resource", resource);

                        target.navigateTo("index", {
                          main: 3,
                          sub: 3,
                        }, {
                          id: elem.row.deviceId
                        });


                      }
                    }
                  }
                ],
                render: function () {
                  return ""
                }
              },
              // 待说明展示的按钮
              explaining: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                    label: "分析",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {

                        target.navigateTo("index", "专业分析", {
                          id: elem.row.deviceId,
                          startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                          enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                        });
                      }
                    }
                  },
                  {
                    label: "关闭说明",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {
                        target.createSystemPopupByLocalPath("page2", {
                          width: "800px",
                          title: "关闭说明",
                        }, elem.row.ticket);
                      }
                    }
                  }
                ],
                render: function () {
                  return ""
                }
              },
              // 被驳回展示的按钮
              reject: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                    label: "分析",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {
                        target.navigateTo("index", "专业分析", {
                          id: elem.row.deviceId,
                          specialty: elem.row.specialtyProp,
                          sensor: elem.row.alertInstance,
                          startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                          enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                        });

                      }
                    }
                  },
                  {
                    label: "修改报告",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {
                        //   var ticketObj = elem.row.ticket;
                        //   delete(ticketObj.variables);
                        //   target.navigateTo("index", {
                        //     main : [0,"bhbgbz"],
                        //     taskId : elem.row.ticket.id,
                        //     devName : elem.row.devName,
                        //     externalDevId : elem.row.deviceCode,
                        //     ticketNo: elem.row.ticketNo,
                        //     // ticketObj: ticketObj
                        //   }, "self");
                        target.createSystemPopupByLocalPath("bhbgbz", {
                            width: "750px",
                            top: "20px",
                            title: "修改报告",
                          },
                          elem.row.ticket);
                      }
                    }
                  }
                ],
                render: function () {
                  return ""
                }
              },
              // 说明再次被驳回展示的按钮
              rejectExplaining: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                    label: "分析",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {

                        target.navigateTo("index", "专业分析", {
                          id: elem.row.deviceId,
                          specialty: elem.row.specialtyProp,
                          sensor: elem.row.alertInstance,
                          startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                          enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                        });
                      }
                    }
                  },
                  {
                    label: "关闭说明",
                    icon: "null",
                    class: "btn btn-default btn-sm",
                    on: {
                      click: function (elem) {
                        target.createSystemPopupByLocalPath("page5", {
                            width: "800px",
                            title: "关闭说明",
                          },
                          elem.row.ticket);
                      }
                    }
                  }
                ],
                render: function () {
                  return ""
                }
              }
            }
          });
          target.render({
            data: datas,
            on: {
              rowClick: function (event) {

              }
            },
            format: format
          });
        };
        // 点击查询按钮
        target.off("search_toDolistList");
        target.on("search_toDolistList",
          function (time) {
            getTableData1(time);
            render();
          });

        render();
      };
    }
  }
}