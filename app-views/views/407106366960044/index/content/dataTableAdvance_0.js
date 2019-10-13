/** 仪表板 : [ 我的首页[炼铁-生产操作员-1级] ] - 407106366960044 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var navigateTrigger = false;
      //--------------------------自定义输入-----------------------------

      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉


      var Dictionary = {
        customerName: "产线",
        devName: {
          name: "设备信息",
          type: "link",
          value: "devName",
          on: {
            click: function(data) {
              
              var nodeId = data.row.nodeId;
              target.navigateTo("index", "实时状态", {
                id: nodeId
              });
            }
          }
        },
        deviceCode: "设备编码",
        // taskTypeName: "任务分类",
        appName:
        // "appName",

        {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function(elem) {
              elem.row.values.alertItemList.forEach(function(ele) {
                ele.deviceName = elem.row.values.devName;
              });
              if (elem.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                  "title": "报警详情",
                  "top": "10%",
                  "width": "50%",
                }, elem.row.values.alertItemList);
              }
            }
          }
        },
        message: "报警消息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        firstArisingTime: "首次报警时间",
        count: "报警次数",
        arisingTime: "最近报警时间",
        tickeTaskStatusName: "任务状态",
        // lastDealTime: "计划处理时间",
      };

      var tickeTaskStatus = {
        5: "已确认",
        10: "处理中",
        100: "新产生",
      }



      function getTableData(params, pageRequest, cb) {
        var domainaa = target.getCurrentUser();
        var params = {
          domain: domainaa.domainPath,
          nodeIds: "",
          nodeType: "",
          pageSize: 1000,
          severities: "1,2,3,4",
          states: "-100,5,10"
        };
        target.getAlertByPage(params, pageRequest, function(tc) {
          tc.data.forEach(function(ele) {

            //   
            var e = target.getdomainNameHandler(ele.domains, [])
            ele.customerName = e[3];

            ele.deviceCode = target.getRootScope("getAllDeviceInfo")[ele.nodeId].externalDevId


            ele.firstArisingTime = useMomentFormat(ele.firstArisingTime, "yyyy-MM-dd hh:mm:ss");
            ele.arisingTime = useMomentFormat(ele.arisingTime, "yyyy-MM-dd hh:mm:ss");
            if (ele.state == -100) {
              ele.state = 100
            }
            ele.tickeTaskStatusName = tickeTaskStatus[ele.state];

            ele.tickeTaskStatus = "other";

            // if(ele.values.alertItemList.length>1){
            //       ele.appName =  "合并告警";
            // }
            // else{
            //       ele.appName =  ele.values.appName;
            // }

          })

          //   target.trigger("panelTwo");
          cb(tc.data, tc.total)
        });
      }

      //   getTableData();


      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      var render = function(datas) {
        var format = [];
        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }


        format.push({
          name: "操作",
          type: "valueBased",
          value: "tickeTaskStatus",
          options: {
            "other": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "查看趋势",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function(elem) {
                    target.navigateTo("index", "专业分析", {
                      id: elem.row.nodeId
                    });
                  }
                }
              }]
            },
            "": {
              // name: "操作",
              // type: "buttonGroup",
              // content: [{
              //   label: "评价",
              //   icon: "null",
              //   class: "btn btn-default btn-sm",
              //   on: {
              //     click: function(elem) {
              //         target.createSystemPopupByLocalPath("page1", {
              //           width: "500px",
              //           title: "忽略",
              //         }, elem.row);
              //     }
              //   }
              // }]
            }
          }
        });
        target.render({
          data: datas,
          paging: getTableData,
          format: format
        });
      };

      setTimeout(
        render([]), 1000);


    }
  }
}