/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var deviceId = target.getParameter('id')
      target.$getResourceById(deviceId, function(d) {

      })

      var queryParams = {
        "domain": "",
        "nodeType": "",
        "pageSize": 1000,
        "severities": "1,2,3,4",
        "states": "0,5,10,20",
        "nodeIds": deviceId
      };
      var queryParams4Page = {
        "start": 0,
        "length": "",
        "sort": "createTime",
        "sortType": "desc",
        "statCount": true,
        "total": 0
      };
      var params = [queryParams, queryParams4Page]

      target.postService("alertQueryFlexService", "getAlertByPage", params, function(returnData) {
        target.trigger("detaiPageloaded", "alert");
        var alertsDevice = [];
        var alerts = returnData.data.data;
        for (var i = 0; i < alerts.length; i++) {
          if (alerts[i].state == 0 || alerts[i].state == 5 || alerts[i].state == 10) {
            alertsDevice.push(alerts[i])
          }
        };
        target.setValue("device/alerts", alertsDevice.map(function(alert) {
          alert.label = alert.devName + "(" + alert.message + ")";
          alert.valueStr = target.getAlertWord(alert.severity);
          alert.status = alert.severity;
          return alert;
        }));
        target.render({
          data: alertsDevice,
          on: {
            rowClick: function(event) {
              //target.navigateTo('production', {});
            }
          },
          format: [{
            "name": "报警来源",
            "value": "appName",
            "type": "text",
            //"width" : 300
            "format": function(elem) {
              if (elem == 1) {
                return "在线预警";
              } else if (elem == 2) {
                return "智能诊断";
              } else if (elem == 3) {
                return "大数据分析";
              } else {
                return "离线诊断";
              }
            }
          }, {
            "name": "报警消息",
            "value": "message",
            "type": "text",
          }, {
            "name": "报警级别",
            "type": "priority",
            "value": "severity",
            "format": function(elem) {
              if (elem == 2) {
                return "注意";
              } else if (elem == 3) {
                return "异常";
              } else if (elem == 4) {
                return "警告";
              } else {
                return "正常";
              }
            }
          }, {
            "name": "首次报警时间",
            "value": "firstArisingTime",
            "type": "date"
          }, {
            "name": "报警次数",
            "value": "count"
          }, {
            "name": "最近报警时间",
            "value": "arisingTime",
            "type": "date"
          }, {
            "name": "操作",
            "type": "buttonGroup",
            "content": [{
              type: "button",
              label: "过程跟踪",
              icon: "glyphicon glyphicon-cog",
              btnclass: "btn btn-primary",
              on: {
                click: function(elem) {
                  event.target.postService("ticketTaskService", "getDealTicketListByPage", [{
                      "attrs": {
                        "origId": elem.row.alertId
                      },
                      "categorys": "50,90,260"
                    },
                    {
                      "start": 0,
                      "length": 10
                    }
                  ], function(dt) {
                    if (dt.data.data.length > 0) {
                      target.navigateToTracker(dt.data.data[0].ticketNo);
                    } else {
                      target.growl("告警未转工单", "warning")
                    }
                  })
                }
              }
            }]
          }]
        });
      })
    }
  }
}