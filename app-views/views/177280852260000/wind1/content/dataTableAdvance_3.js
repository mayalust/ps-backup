/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var projectModel;
      var projectAttr;
      var render = function() {
        var projectId = target.getParameter("id");
        target.getResourceById(projectId, function(resource) {
          target.queryFromDb({
            domain: resource.domains
          }, function(alerts) {

            var alertsDevice = [];
            for (var i = 0; i < alerts.length; i++) {
              if (alerts[i].state == 0 || alerts[i].state == 5 || alerts[i].state == 10) {
                if (alerts[i].severity != -1) {
                  alertsDevice.push(alerts[i])
                }
              }
            }
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

                }
              },
              format: [{
                "name": "设备名称",
                "value": "devName",
                "type": "text",
                //"width" : 300
              }, {
                "name": "报警来源",
                "value": "appName",
                "type": "text",
                "format": function(elem) {
                  if (elem == "1") {
                    return "在线预警"
                  } else if (elem == "2") {
                    return "智能诊断"
                  } else if (elem == "3") {
                    return "大数据分析"
                  } else if (elem == "4") {
                    return "离线诊断"
                  }
                }
              }, {
                "name": "报警消息",
                "value": "message",
                "type": "text",
                "style": {
                  "white-space": "pre-wrap"
                }
              }, {
                "name": "报警级别",
                "type": "priority",
                "value": "severity",
                "format": function(elem) {

                  if (elem == -1) {
                    return "正常";
                  } else if (elem == 2) {
                    return "注意";
                  } else if (elem == 3) {
                    return "异常";
                  } else if (elem == 4) {
                    return "警告";
                  }
                }
              }, {
                "name": "报警时间",
                "value": "arisingTime",
                "type": "date"
              }, {
                "name": "报警状态",
                "value": "state",
                "type": "text",
                "format": function(elem) {
                  if (elem == 0) {
                    return "新产生";
                  } else if (elem == 5) {
                    return "已确认";
                  } else if (elem == 10) {
                    return "待处理";
                  } else if (elem == 20) {
                    return "已解决";
                  } else if (elem == 30) {
                    return "已忽略";
                  }
                }
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
        })

      }
      target.getEditorStatus("PROJECTMODEL", function(pmodel) {
        var dt = pmodel || {}
        projectModel = dt.projectModel || [];
        projectAttr = dt.projectAttr || {};
        render();
      });
    }
  }
}