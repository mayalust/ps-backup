/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;

      // 获取设备id
      var resource = target.getValue("global/resource");

      //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      var Dictionary = {
        "variables.customerName": "产线",
        "variables.devName": "设备信息",
        "variables.deviceCode": "设备编码",

        "taskJob": "任务分类",
        "appSource": "任务来源",

        message: "任务消息",
        sendTimeUTC: "任务接收时间",

        ticketTitle: "任务名称",

        tickeTaskStatusName: "任务状态",
        planTimeUTC: "计划处理时间",

      };

      function getTableData(params, pageRequest, cb) {
        target.getTicketTasksByConditionAndPage(params, pageRequest, function(tc) {

          tc.data.forEach(function(ele) {

            if (ele.variables.ticket.category == 310 && ele.variables.taskJob == 1) {
              //  
              ele.taskJob = "计划实施";
              ele.appSource = "状态维护标准";
              ele.tickeTaskStatusName = "待维护";
              ele.message = "周期性维护";

            } else if (ele.variables.ticket.category == 310 && ele.variables.taskJob == 2) {
              ele.taskJob = "计划实施";
              ele.appSource = "状态维护标准";
              ele.tickeTaskStatusName = "待维护";
              ele.message = ele.variables.taskMessage;

            } else if (ele.variables.ticket.category == 310) {
              ele.taskJob = "综合处理";
              ele.appSource = "智能决策";
              ele.tickeTaskStatusName = "待维护";
              ele.message = ele.variables.taskMessage;

            } else if (ele.variables.ticket.category == 340) {
              ele.taskJob = "故障处理";
              ele.appSource = "突发停机";
              ele.tickeTaskStatusName = "待处理";
              ele.message = ele.variables.deviceExcavationTask.accidentName;
            }

            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
            ele.planTimeUTC = useMomentFormat(ele.variables.planTime, "yyyy-MM-dd hh:mm:ss");

            cb(tc.data, tc.total)

          })

        });
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      var render = function(datas) {

        var params = {
          "categorys": "340,310",
          "taskStatus": 10,
        };

        var format = [];
        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }
        format.push({
          name: "操作",
          type: "valueBased",
          value: "taskConfigName",
          options: {
            "": {
              name: "操作",
              type: "buttonGroup",
              content: []
            },
            "待维护": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                  label: "录入实绩",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.setValue("maintainListData", elem.row.variables.standardInfo);
                      target.setValue("maintainListDataflag", false);
                      target.setValue("ticketNo", elem.row.ticketNo);
                      let faultBool = elem.row.variables &&
                        elem.row.variables.ticket &&
                        elem.row.variables.ticket.values &&
                        elem.row.variables.ticket.category == '310' &&
                        elem.row.variables.ticket.values.sourceTicketCategory &&
                        elem.row.variables.ticket.values.sourceTicketCategory == '340' ?
                        true : false;
                      if (faultBool) {
                        target.setValue('message', elem.row.message);
                      } else {
                        target.setValue('message', "");
                      }
                      // 录入实绩弹框有问题
                      target.createSystemPopupByViewId("525167783510000", {
                        "title": "录入实绩",
                        "width": "80%",
                      });
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
                      target.createSystemPopupByLocalPath("page1", {
                        width: "500px",
                        title: "维护退回",
                      });

                    }
                  }
                }
              ]
            },
            "待处理": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "排故处理",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function(elem) {


                    target.setValue("rowData", elem.row);
                    target.createSystemPopupByLocalPath("page2", {
                      width: "800px",
                      title: "排故处理",
                    });

                  }
                }
              }]
            }
          }
        });
        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      };
      render([]);
      target.off("queryTable2");
      target.on("queryTable2", function() {
        render([]);
      })
    }
  }
}