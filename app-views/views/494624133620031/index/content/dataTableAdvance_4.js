/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var navigateTrigger = false;
      //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      //自定义输入
      var Dictionary = {
        "values.customerName": "产线",
        "values.devName": "设备信息",
        "values.deviceCode": "设备编码",
        "taskJob": "任务分类",
        appName: {
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

        "message": "任务消息",
        "ticketCreateTime": "任务接收时间",
        "ticketTitle": "任务名称",
        "tickeTaskStatusName": "任务状态",
        "realFinishTime": "实际完工日期",

      };

      var tickeTaskStatusObj = {
        "dealing": "待处理",
        "maintaining": "待检修",
        "backing": "被退回",
        "assessing": "待评价",
        "accepting": "待验收",
        "assessingAgain": "待评价",
        "end": "结束",
        "assessingAgain": "待评价",
        "summarizing": "待总结",

      }

      function getTableData(params, pageRequest, cb) {

        target.getDealTicketListByPage(params, pageRequest, function(tc) {

          if (tc.data) {
            tc.data.forEach(function(ele) {

              ele.realFinishTime = ele.values.realFinishTime ? useMomentFormat(ele.values.realFinishTime, "yyyy-MM-dd hh:mm:ss") : "";
              ele.ticketCreateTime = ele.values.ticketCreateTime ? useMomentFormat(ele.values.ticketCreateTime, "yyyy-MM-dd hh:mm:ss") : "";
              ele.tickeTaskStatusName = tickeTaskStatusObj[ele.values.tickeTaskStatus];

              if (ele.category == 310 && ele.values.taskJob == 1) {
                //  
                ele.taskJob = "计划实施";
                ele.appName = "状态维护标准";
                ele.message = "周期性维护";
                ele.ticketTitle = ele.message;
              } else if (ele.category == 310) {
                ele.taskJob = "综合处理";
                ele.appName = "智能决策";
                ele.ticketTitle = ele.message;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 340) {
                ele.taskJob = "故障处理";
                ele.appName = "突发停机";
                /** 340的情况任务名称和任务消息反了  */
                ele.ticketTitle = ele.message;
                ele.message = ele.values.deviceExcavationTask.accidentName
              } else if (ele.category == 320 && ele.values.taskJob == 1) {
                ele.taskJob = "计划实施";
                ele.appName = "智能检修标准";
                ele.message = "周期性维护";
                ele.ticketTitle = ele.values.standardProjectName;
              } else if (ele.category == 320) {
                ele.taskJob = "综合处理";
                ele.appName = "智能决策";
                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 290) {
                ele.taskJob = "智能决策";
                ele.appName = "综合处理";
                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 330) {
                ele.taskJob = "计划实施";
                ele.appName = "临时委托";

                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;

              } else if (ele.category == 280) {
                ele.taskJob = "综合处理";

                ele.ticketTitle = ele.values.standardProjectName;

                if (ele.values.hasOwnProperty("alertItemList") && ele.values.alertItemList.length > 1) {
                  ele.appName = "合并告警";
                } else {
                  ele.appName = ele.values.alertItemList[0].appName;
                }
                ele.message = ele.message;

              }
              ele.tickeTaskStatusFlag = "";
              if (ele.category != 310 && ele.category != 340) {
                ele.tickeTaskStatusFlag = "过程跟踪";
              }

            })

            cb(tc.data, tc.total)
          }
        });
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      function render(datas, time) {
        var format = [];
        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);

          format.push(item);
        }

        format.push({
          name: "操作",
          type: "valueBased",
          value: "tickeTaskStatusFlag",
          options: {
            //     "待总结": {
            //       name: "操作",
            //       type: "buttonGroup",
            //       content: [{
            //         label: "总结分析",
            //         icon: "null",
            //         class: "btn btn-default btn-sm",
            //         on: {
            //           click: function(elem) {
            //             target.setValue("rowData", elem.row);
            //             target.createSystemPopupByLocalPath("page3", {
            //               width: "1200px",
            //               title: "故障总结",
            //             });
            //           }
            //         }
            //       },{
            //         label: "排故履历",
            //         icon: "null",
            //         class: "btn btn-default btn-sm",
            //         on: {
            //           click: function(elem) {
            //             target.setValue("rowData", elem.row);
            //             target.createSystemPopupByLocalPath("page4", {
            //               width: "1200px",
            //               title: "排故履历",
            //             });
            //           }
            //         }
            //       }],
            // },
            // ,
            "过程跟踪": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "过程跟踪",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function(elem) {
                    target.refresh("prod_tracker", {
                      ticketNo: elem.row.ticketNo
                    });
                  }
                }
              }]
            },
            // 待说明展示的按钮
            "": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "过程跟踪",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function(elem) {
                    target.refresh("prod_tracker", {
                      ticketNo: elem.row.ticketNo
                    });
                  }
                }
              }]
            }
          }
        });
        var params = {
          "categorys": "280,290,320,330,340,310",
          validUserFlag: true,
          "ticketStatus": 100,
          "commitBeginTime": time ? time.firstTimeFrom : "",
          "commitEndTime": time ? time.firstTimeTo : "",

        };

        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      };
      render([]);
      // 点击查询按钮
      target.off("queryTabel3");
      target.on("queryTabel3", function(time) {
        render([], time);
      });

    }
  }
}