/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      //   var resDic = target.getResourceDic;

      var DIC = target.getRootScope()['myDicts'];

      //--------------------------自定义输入-----------------------------


      function getTableData1(params, pageRequest, cb) {

        target.postService("alertQueryFlexService", "getAlertByPage", [params, pageRequest], function(tc) {

          var alerts = tc.data.data;
          cb(tc.data.data, tc.data.total)
        });
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！
      var render = function(datas, e) {




        var param = {
          "domain": "/0/515445641576227/515445641576264/515445641576272/554925002946064/",
          "severities": "1,2,3,4",
          "states": "0,5,-100",
        };

        target.render({
          data: datas,
          params: param,
          paging: getTableData1,
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
            "name": "设备名称",
            "value": "devName",
            "type": "text",
          }, {
            "name": "报警状态",
            "type": "text",
            "value": "state",
            "format": function(elem) {
              if (elem == -100) {
                return "新产生";
              } else if (elem == 0) {
                return "新产生";
              } else if (elem == 5) {
                return "已确认";
              } else {
                return "";
              }
            }
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
                        "origId": [elem.row.alertId]
                      },
                      "categorys": "290,280"
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
      };

      render([]);


    }
  }
}