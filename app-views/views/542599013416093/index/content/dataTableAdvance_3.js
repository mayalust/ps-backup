/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
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
        filePath: {
          type: "link",
          value: "devName",
          name: "设备信息",
          on: {
            click: function(data) {
              var deviceId = data.row.deviceId;
              target.getResourceById(deviceId, function(resource) {
                if (resource.values.viewType == "motor") {
                  resource.$location = "motor"
                } else {
                  resource.$location = "device";
                }
                target.setValue("global/resource", resource);
                target.navigateTo("index", {
                  main: 1
                }, "self");

                target.setParameter("id", resource.id);

              })
            }
          }
        },
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
        sendTime: "报警分配时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };

      function getTableData(time) {
        var param = {
          //   "variables":{"theTicketType":"normal"},
          "taskStatus": 10,
          "categorys": "50",
          "tickeTaskStatus": "auditing,closing",
          "sendBeginTime": time ? time.firstTimeFrom : "",
          "sendEndTime": time ? time.firstTimeTo : "",
        };
        var params = eval("(" + JSON.stringify(param) + ")");
        target.postService("ticketTaskService", "getTicketTasksByCondition", params, function(tc) {
          if (tc.data) {
            var datas = [];
            tc.data.forEach(function(ele) {
              var data = ele.variables.ticket.values;
              if (ele.variables.ticket.values.tickeTaskStatus == "auditing") {
                data.tickeTaskStatus = "待审批";
                data.tickeTaskStatusName = "auditing"
              } else if (ele.variables.ticket.values.tickeTaskStatus == "closing") {
                data.tickeTaskStatus = "待关闭";
                data.tickeTaskStatusName = "closing"
              } else if (ele.variables.ticket.values.tickeTaskStatus == "assessing") {
                data.tickeTaskStatus = "待评价"
                data.tickeTaskStatusName = "accepting"
              }
              if (ele.variables.alertItemList && ele.variables.alertItemList.length > 1) {
                data.appName = "合并告警";

              }
              data.rowObj = ele;
              data.handlerName = ele.handlerName;
              data.sendTime = new Date(ele.sendTime).Format("yyyy-MM-dd hh:mm:ss");
              datas.push(data);
            })

            target.trigger("auditLoaded", datas);
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

          // 方法
          format.push({
            name: "操作",
            type: "valueBased",
            value: "tickeTaskStatusName",
            options: {
              //  待审核出现的情况
              auditing: {
                type: "buttonGroup",
                content: [{
                  label: "报告审核",
                  icon: "null",
                  class: "btn btn-primary btn-sm",
                  on: {
                    click: function(elem) {

                      target.setValue("rowData", elem.row);

                      // target.navigateTo("index", { 
                      //     main : [0,"page3"],
                      // }, "self");


                      target.navigateTo("index", {
                        main: [0, "viewId:23394156288688"],
                      });




                      //  target.createSystemPopupByLocalPath("page3", {
                      //   width : "100%",
                      //   top:"0px",
                      //   title : "自行处理说明",
                      // });





                    }
                  }
                }]
              },
              // 待关闭出现的情况
              closing: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "关闭审核",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page5", {
                        width: "800px",
                        title: "关闭审核",
                      }, elem.row.rowObj);

                    }
                  }
                }],
                render: function() {
                  return ""
                }
              },

            }
          });


          target.render({
            data: datas,
            on: {
              rowClick: function(event) {

              }
            },
            format: format
          });
        };
        // 点击查询按钮

        target.off("search_toDolist");
        target.on("search_toDolist", function(time) {
          getTableData(time)
          render();
        });

        render();
      };
    }
  }
}