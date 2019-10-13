/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        ticketNo: "任务编号",
        customerName: "产线",
        devName: "设备信息",
        appName: {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function(data) {
              data.row.alertItemList.forEach(function(ele) {
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
        },
        alertTitle: "报警信息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        commitTime: "报警处理时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };

      function getTableData(time) {
        var params = {
          tickeTaskStatus: time ? time.status : "",
          commitBeginTime: time ? time.firstTimeFrom : "",
          commitEndTime: time ? time.firstTimeTo : "",
          categorys: "50",
          processedTickeTaskStatus: "checking",
          taskDealingStatus: "checking,explaining"
        };

        target.postService("ticketTaskService", "getDealTicketList", params, function(tc) {
          if (tc.data) {
            var datas = [];
            tc.data.forEach(function(ele) {
              var data = ele.values;
              data.tickeTaskStatusFlag = "过程跟踪";
              if (data.tickeTaskStatus == "checking") {
                data.tickeTaskStatus = "待诊断";
              } else if (data.tickeTaskStatus == "auditing") {
                data.tickeTaskStatus = "待审批 ";
              } else if (data.tickeTaskStatus == "trusting") {
                data.tickeTaskStatus = "待委托";
                data.tickeTaskStatusFlag = "待委托";
              } else if (data.tickeTaskStatus == "end") {
                data.tickeTaskStatus = "已完成";
              } else if (data.tickeTaskStatus == "assessing") {
                data.tickeTaskStatus = "待评价";
              } else if (data.tickeTaskStatus == "explaining") {
                data.tickeTaskStatus = "待说明";
              } else if (data.tickeTaskStatus == "closing") {
                data.tickeTaskStatus = "待关闭";
              } else if (data.tickeTaskStatus == "accepting") {
                data.tickeTaskStatus = "待验收";
              } else if (data.tickeTaskStatus == "maintaining") {
                data.tickeTaskStatus = "待检修";
              }
              if (data.alertItemList.length > 1) {
                data.appName = "合并告警";
              }
              data.ticket = ele;
              data.handlerName = ele.handlerName;
              data.commitTime = new Date(ele.commitTime).Format("yyyy-MM-dd hh:mm:ss");
              datas.push(data);
            })
            success(datas)
          }
        });
      }

      getTableData();
      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      function success(datas) {
        var render = function(advsearch) {
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
              "待委托": {
                type: "buttonGroup",
                content: [{
                  label: "过程跟踪",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.setValue("ticketNo", elem.row.ticketNo);
                      target.navigateTo("index", {
                        main: [0, "viewId:9246777620035"],
                      })
                    }
                  }
                }, {
                  label: "报警关闭",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {

                      target.setValue("closeAlert", elem.row);

                      target.createSystemPopupByLocalPath("closeAlert", {
                        width: "40%",
                        title: "提示",
                      });
                    }
                  }
                }],
              },
              "过程跟踪": {
                type: "buttonGroup",
                content: [{
                  label: "过程跟踪",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {


                      target.setValue("ticketNo", elem.row.ticketNo);
                      target.navigateTo("index", {
                        main: [0, "viewId:9246777620035"],
                      })



                      //   target.navigateTo("index", {
                      //     main: [0, "viewId:9246777620035"],
                      //     ticketNo: elem.row.ticketNo
                      //   }, "self");
                    }
                  }
                }],
              },

            }
          });
          target.render({
            data: datas,
            format: format,
          });
        };
        // 点击日期按钮
        target.off("search_ticket");
        target.on("search_ticket", function(time) {
          getTableData(time)
          render();
        });
        render();
      };
    }
  }
}