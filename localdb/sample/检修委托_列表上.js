expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //--------------------------自定义输入-----------------------------

      //自定义输入
      var Dictionary = {
        customName: "产线",
        devName: "设备信息",
        deviceCode: "设备编码",
        message: "任务信息",
        appName: "计划来源",
        sendTimeUTC: "任务接收时间",
        tickeTaskStatusName: "任务状态"
      };

      // 获取字典查专业
      //   var propsList = target.getRootScope("myDicts")["specialtyProps"];

      // 获取设备id
      function getTableData1(e) {
        var params = {
          "categorys": "120,130,210",
          "taskStatus": 10,
          "nodeIds": resource.id,
          "sendBeginTime": e ? e.firstTimeFrom : "",
          "sendEndTime": e ? e.firstTimeTo : "",
        };
        target.getTicketTasksByCondition(params, function(tc) {
          var datas = [];
          var tableData = tc;
          tableData.forEach(function(ele) {
            ele.customName = target.getdomainNameHandler(ele.variables.ticket.projectDomains, [])[3];
            ele.devName = ele.variables.devName;
            ele.deviceCode = ele.variables.device.externalDevId;
            ele.message = ele.ticketTitle;
            ele.appName = ele.variables.ticket.category;
            if(ele.variables.ticket.category == "120") {
              ele.appName = "检修计划";
            } else if(ele.variables.ticket.category == "100") {
              ele.appName = "当日点检";
            } else if(ele.variables.ticket.category == "110") {
              ele.appName = "精密检测";
            } else if(ele.variables.ticket.category == "130") {
              ele.appName = "点检异常";
            } else if(ele.variables.ticket.category == "140") {
              ele.appName = "备修委托";
            } else if(ele.variables.ticket.category == "210") {
              ele.appName = "临时委托";
            }

            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
            ele.tickeTaskStatus = ele.variables.ticket.values.tickeTaskStatus;
            if(ele.variables.ticket.values.tickeTaskStatus == "dealing") {
              ele.tickeTaskStatusName = "待处理"
            } else {
              ele.tickeTaskStatusName = "待评价"
            }
            datas.push(ele);
          })
          success(datas)
        });
      }
      
      
      var resource = target.getValue("global/resource");
      if (resource) {
        getTableData1();
      }
      
      target.on("tree_resourceChange", function(e) {
        resource = e.resource;
        getTableData1();
      })
      // 点击查询按钮debugger
      target.on("queryTabelList1", function(time) {
        getTableData1(time)
      });
      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      function success(datas) {
        var render = function(advsearch) {
          var format = [];
          for(var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          }
          format.push({
            name: "操作",
            type: "valueBased",
            value: "tickeTaskStatusName",
            options: {
              "待处理": {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "发起委托",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page4", {
                        width: "800px",
                        title: "发起委托",
                      }, elem.row);
                    }
                  }
                }, {
                  label: "自行处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page5", {
                        width: "800px",
                        title: "自行处理",
                      }, elem.row);
                    }
                  }
                }, {
                  label: "暂不处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page6", {
                        width: "800px",
                        title: "暂不处理",
                      }, elem.row);
                    }
                  }
                }],
                render: function() {
                  return ""
                }
              },
              "待评价": {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "评价验收",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page10", {
                        width: "800px",
                        title: "验收与评价",
                      }, elem.row);

                    }
                  }
                }],
                render: function() {
                  return ""
                }
              }
            }
          });
          target.render({
            data: datas,
            format: format
          });
        };
        render();
      };
    }
  }
}