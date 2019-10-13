expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      debugger
      var target = event.target;
      var navigateTrigger = false;
      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      //自定义输入
      var Dictionary = {
        customerName: "产线",
        devName: "设备信息",
        deviceCode: "设备编码",
        alertTitle: "任务信息",
        appName: "任务来源",
        alertArisingTime: "任务接收时间",
        tickeTaskStatusName: "任务状态"
      };

      function getTableData(time) {

        var params = [{
          "categorys": "130,120,210",
          "validUserFlag": true,
          "nodeIds": resource.id,
          "commitBeginTime": time ? time.firstTimeFrom : "",
          "commitEndTime": time ? time.firstTimeTo : "",
        }];

        target.postService("ticketTaskService", "getDealTicketList", params, function(tc) {
          if(tc.data) {
            var datas = [];
            tc.data.forEach(function(ele) {
              var data = ele;
              if(data.category == "90") {
                data.devName = ele.values.devName;
                data.appName = ele.values.appName;
                data.severity = ele.values.severity;
              } else if(data.category == 130) {
                data.appName = "点检异常";
              } else if(data.category == 120) {
                data.appName = "检修计划";
              } else if(data.category == 210) {
                data.appName = "临时委托";
              }
              var projectDomains = {
                domains: ele.projectDomains
              }
              var domains = target.getdomainListName([projectDomains]);
              data.customerName = domains[3];
              data.alertTitle = ele.message;
              data.devName = ele.values.devName;
              data.tickeTaskStatus = ele.values.tickeTaskStatus;
              data.alertArisingTime = useMomentFormat(ele.values.alertArisingTime, "yyyy-MM-dd hh:mm:ss");
              data.commitTime = useMomentFormat(ele.commitTime, "yyyy-MM-dd hh:mm:ss");
              if(ele.values.tickeTaskStatus == "maintaining") {
                data.tickeTaskStatusFlag = "-";
                data.tickeTaskStatusName = "待检修";
              } else if(ele.values.tickeTaskStatus == "end" && ele.values.dealType == "3") {
                data.tickeTaskStatusName = "已完成";
                data.tickeTaskStatusFlag = "yiwancheng";
              } else if(ele.values.tickeTaskStatus == "end") {
                data.tickeTaskStatusName = "已完成";
                data.tickeTaskStatusFlag = "";
              }
              datas.push(data);
            })
            target.trigger("panelTwo", datas.length)
            success(datas)
          }
        });
      }
      var resource = target.getValue("global/resource");
      if (resource) {
        getTableData();
      }
      target.on("tree_resourceChange", function(e) {
        resource = e.resource;
        getTableData();
      })
      // 点击查询按钮debugger
      target.on("queryTabelList2", function(time) {
        getTableData(time)
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
            value: "tickeTaskStatusFlag",
            options: {
              // appName是1，2，3，4
              "-": {
                name: "操作",
                type: "label",
                content: [{
                  label: "-",
                  //   icon: "null",
                  //   class: "btn btn-default btn-sm",
                  //   on: {
                  //     click: function (elem) {
                  //       target.createSystemPopupByLocalPath("page3", {
                  //         width: "800px",
                  //         title: "检修委托",
                  //       }, elem.row);
                  //     }
                  //   }
                }],
                // render: function () {
                //   return ""
                // }
              },
              // 待说明展示的按钮
              "yiwancheng": {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "检修详情",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function(elem) {
                      target.createSystemPopupByLocalPath("page9", {
                        width: "800px",
                        title: "检修详情",
                      }, elem.row);

                    }
                  }
                }],
                render: function() {
                  return ""
                }
              },
              "": {
                name: "操作",
                type: "label",
                content: [{
                  label: "-",
                }],
                render: function() {
                  return ""
                }
              }
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

        render();
        
      };
    }
  }
}