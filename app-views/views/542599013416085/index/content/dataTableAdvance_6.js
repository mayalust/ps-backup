/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
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
        ticketNo :  "任务编号",
        "values.customerName" :  "产线",
        "values.devName" : "设备信息",
        "message" : "任务信息",
        // appName : {
        //   name:"报警来源",
        //   type:"alarmSource",
        //   value : "appName"
        // },
        filePath: {
          type : "link",
          value : "fileName",
          linkage : "filePath",
          name : "来源"
        },
        "values.severity" :{
          name:"报警级别",
          type:"priority",
          value : "values.severity"
        },
        commitTimeUtc : "报警处理时间",
        handlerName : "当前处理人",
        tickeTaskStatus : "任务状态"
      };
      
      
      var tickeTaskStatusObj = {
          "checking":"待诊断",
          "auditing":"待审批",
          "trusting":"待委托",
          "end":"已完成",
          "assessing":"待说明",
          "closing":"待关闭",
          "accepting":"待验收",
          "maintaining":"待检修",
          "explaining":"已完成",
          "backing":"被退回"
      }

      function getTableData(params, pageRequest, cb) {
        target.getDealTicketListByPage(params, pageRequest, function (tc) {
          tc.data.forEach(function (data) {
              
              
            // 报警来源
                // 判断是任务还是告警
            if (data.category == "100") {
              data.fileName = "当日点检";
            } else if (data.category == "120") {
              data.fileName = "检修计划";
            } else if (data.category == "130") {
              data.fileName = "点检异常";
            } else {
              data.filePath = "/api/rest/download/deviceResumeUIService/getReportBytes/" + data.ticketNo + ".pdf/" + data.ticketNo;
              data.fileName = "诊断推送";
            }

            data.tickeTaskStatus = tickeTaskStatusObj[data.values.tickeTaskStatus],
            data.commitTimeUtc = useMomentFormat(data.commitTime, "yyyy-MM-dd hh:mm:ss");

          

          });
            cb(tc.data, tc.total)
        })
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      var render = function(datas, time) {

        var params = {
          categorys:"50,100,130,120",
          validUserFlag:true,
          tickeTaskStatus: time?time.status:"",
          commitBeginTime: time?time.firstTimeFrom:"",
          commitEndTime: time?time.firstTimeTo:"",
          processedTaskStatusList:[
            {"category":"50","targetStatus":"trusting"},
            {"category":"100","targetStatus":"dealreadying"},
            {"category":"130","targetStatus":"dealing"},
            {"category":"120","targetStatus":"dealing"}
          ]
        };



        var format = [];
        for(var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }
        //方法
        format.push({
          name : "操作",
          type: "buttonGroup",
          content :[{
            label : "过程跟踪",
            icon: "null",
            class: "btn btn-default btn-sm",
            on : {
              click : function(elem){
                   target.setValue("ticketNo", elem.row.ticketNo);
                target.navigateTo("index", {
                  main : [0, "viewId:9246777620035"],
       
                });

              }
            }
          }]
        });
        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      };
      target.off("inspectionLoaded");
      target.on("inspectionLoaded", function(e){
        render([], e);
      });
      render([]);
    }
  }
}

