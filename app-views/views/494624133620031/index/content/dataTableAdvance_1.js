/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //--------------------------自定义输入-----------------------------
      //自定义输入
      var Dictionary = {
        "variables.customerName": "产线",
        "variables.devName": "设备信息",
        "variables.deviceCode": "设备编码",

        "taskType": "任务分类",
        "appName": {
          name: "任务来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function(elem) {
              elem.row.variables.alertItemList.forEach(function(ele) {
                ele.deviceName = elem.row.variables.devName;
              });
              if (elem.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                    "title": "报警详情",
                    "top": "10%",
                    "width": "50%",
                  },
                  elem.row.variables.alertItemList);
              }
            }
          }
        },
        message: "任务消息",

        sendTimeUTC: "任务接收时间",
        ticketName: "任务名称",
        tickeTaskStatusName: "任务状态",
        planTimeUTC: "计划处理时间",
      };

      function getTableData1(params, pageRequest, cb) {

        target.getTicketTasksByConditionAndPage(params, pageRequest, function(tc) {
          var tableData = tc.data;
          tableData.forEach(function(ele) {
            if (ele.variables && ele.variables.devName == "GF11_10#电机") {

            }

            ele.taskType = "综合处理";
            if (ele.variables.ticket.category == 330) {
              ele.taskType = "计划实施";
              ele.appName = "临时检修委托";
              /* ele.taskType = "计划实施";
              ele.appName = "临时委托"; */
              ele.message = ele.ticketTitle;
              ele.message = ele.variables.ticket.values.taskMessage;

              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            } else if (ele.variables.ticket.category == 290) {
              ele.taskType = "综合处理";
              ele.ticketName = ele.variables.standardProjectName;
              ele.message = ele.variables.taskMessage;;
              ele.appName = "智能决策";
            } else if (ele.variables.ticket.category == 280) {
              ele.taskType = "综合处理";
              ele.ticketName = ele.variables.standardProjectName;
              ele.message = ele.ticketTitle;
              if (ele.variables.alertItemList.length > 1) {
                ele.appName = "合并告警";
              } else {
                ele.appName = ele.variables.alertItemList[0].appName;
              }
            } else if (ele.variables.ticket.category == 320 && ele.variables.ticket.values.taskJob == 1) {
              ele.taskType = "计划实施";
              ele.appName = "智能检修标准";
              ele.message = "周期性检修";
              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            } else if (ele.variables.ticket.category == 320) {
              ele.taskType = "综合处理";
              ele.appName = "智能决策";

              ele.message = ele.variables.ticket.values.taskMessage;
              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            }

            ele.tickeTaskStatusName = "待检修";
            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
            ele.planTimeUTC = useMomentFormat(ele.variables.planTime, "yyyy-MM-dd hh:mm:ss");

          });
          cb(tc.data, tc.total)
        });
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      var render = function(datas, e) {

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

            "待检修": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                  label: "计划确认",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {

                      target.setValue("maintainListData", elem.row);

                      /**
                       *  这里按照的是新方法
                       * 
                       */

                      var params = {
                        standardProjectNo: elem.row.variables.standardProjectId,
                        //   type:0,
                      }

                      target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", [params], function(tc) {
                        if (tc.data) {

                          var createProject = tc.data;
                          var createProjectFlag = true;
                          // 标准项目编号 历史维修方案
                          var standardProject = [],
                            historyProject = [];
                          for (var i = 0; i < createProject.length; i++) {
                            if (createProject[i].type == "0") {
                              standardProject.push(createProject[i])
                            } else if (createProject[i].type == "1" && createProject[i].ticketNo == elem.row.ticketNo) {
                              // 展示下标准的历史选中纪录
                              standardProject = [createProject[i]];

                              //判断当前的工单是否提交了历史记录
                              if (createProject[i].ticketNo == elem.row.ticketNo) {
                                createProjectFlag = false;
                                // standardProject = createProject[i];
                                // standardProject.ticketNo = elem.row.ticketNo;
                              }
                            }
                          }


                          target.setValue("createProjectFlag", createProjectFlag);
                          target.setValue("MaintainPlan", standardProject[0]);
                          target.setValue("getMaintainPlanListData", standardProject);
                          target.createSystemPopupByViewId("516704673750000", {
                            "title": "计划确认",
                            // "top":"10%",
                            "width": "80%",
                          });

                        }

                      })

                    }
                  }
                },
                {
                  label: "录入实绩",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.setValue("ticketNo", elem.row.ticketNo);
                      var ticketNo = {
                        ticketNo: elem.row.ticketNo
                      }
                      target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", ticketNo, function(tc) {
                        if (tc.data.length > 0) {
                          target.setValue("maintainListDataflag", true);
                          target.setValue("maintainListData", tc.data[0]);
                          // 录入实绩弹框有问题
                          target.createSystemPopupByViewId("521445861880000", {
                            "title": "录入实绩",
                            "width": "90%",
                          });
                        } else {
                          target.growl("请先确认检修计划", "warning")
                        }
                      })
                    }
                  }
                },
                {
                  label: "退回",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {

                      target.setValue("maintainListData", elem.row);

                      var ticketNo = {
                        ticketNo: elem.row.ticketNo
                      }
                      // 是否制定维修方案
                      target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", ticketNo, function(tc) {
                        if (tc.data.length > 0) {

                          target.growl("计划确认后不能提交", "warning")
                        } else {
                          target.createSystemPopupByLocalPath("page1", {
                            width: "500px",
                            title: "检修退回",
                          });

                        }

                      })

                    }
                  }
                },
                {
                  label: "远程支持",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {

                      var link = "https://rtc.ronghub.com/video.html?convId=2332&isCameraClose=false&resolution=1280*720&" +
                        "userId=cc3c-26e6-1cc3-cb7e-42d9-d2d6-0f95-2a48&appId=x4vkb1qpxfrzk&userType=1";

                      window.open(link, "_blank");


                    }
                  }
                }
              ]
            },

          }
        });

        var param = {
          "taskStatus": 10,
          "categorys": "280,290,320,330",
          "tickeTaskStatus": "maintaining"
        };

        target.render({
          data: datas,
          params: param,
          paging: getTableData1,
          format: format
        });
      };

      render([]);
      target.off("queryTable1");
      target.on("queryTable1", function() {
        render([]);
      })

    }
  }
}