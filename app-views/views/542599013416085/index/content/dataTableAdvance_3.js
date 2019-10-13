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
        "variables.customerName" :  "产线",
        "variables.devName" : "设备信息",
        "variables.ticket.message" : "任务信息",
        filePath: {
          type : "link",
          value : "fileName",
          linkage : "filePath",
          name : "来源"
        },
        sendTimeUTC : "任务接收时间",
        tickeTaskStatus : "任务状态"
      };

      function getTableData(params, pageRequest, cb) {
          pageRequest.statCount = true;
        target.getTicketTasksByConditionAndPage(params, pageRequest, function(tc) {
          var datas = [];

          tc.data.forEach(function(ele){
              
            


            ele.sendTimeUTC =  useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");


            if(ele.variables.ticket.values.tickeTaskStatus=="accepting"){
              ele.tickeTaskStatus = "待验收";
              ele.tickeTaskStatusName = "accepting"
            }else if(ele.variables.ticket.values.tickeTaskStatus=="assessing"&&ele.variables.dealType != 3){
              ele.tickeTaskStatus = "待评价"
              ele.tickeTaskStatusName = "assessingSelf"
            }else if(ele.variables.ticket.values.tickeTaskStatus=="assessing"){
              ele.tickeTaskStatus = "待评价"
              ele.tickeTaskStatusName = "assessing"
            }else{
              ele.tickeTaskStatus = "待委托";
              ele.tickeTaskStatusName = "trusting"
            }




            // 判断是任务还是告警
            if(ele.variables.ticket.category == "100"){
              ele.fileName = "当日点检";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "当日点检"
            }else if(ele.variables.ticket.category == "120"  && ele.variables.ticket.values.tickeTaskStatus=="backing"){
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "被退回";
              ele.tickeTaskStatusName = "backing"
            }else if(ele.variables.ticket.category == "120"  && ele.variables.ticket.values.tickeTaskStatus=="assessing"){
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "待评价"
            }else if(ele.variables.ticket.category == "120"){
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "检修计划"
            }else if(ele.variables.ticket.category == "130" && ele.variables.ticket.values.tickeTaskStatus=="accepting"){
              ele.fileName = "点检异常";
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "待评价"
            }else if(ele.variables.ticket.category == "130"){
              ele.fileName = "点检异常";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "点检异常"
            }else{
              ele.filePath = "/api/rest/download/deviceResumeUIService/getReportBytes/" + ele.ticketNo + ".pdf/" + ele.ticketNo;
              ele.fileName = "诊断推送";
            }


          });
          target.trigger("inspectioned",tc.total);
          cb(tc.data, tc.total);


        });
      }

      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      var render = function(datas, e) {

        var params = {
          //   "variables":{"theTicketType":"normal"},
          "taskStatus":10,
          "sendBeginTime": e?e.firstTimeFrom:"",
          "sendEndTime": e?e.firstTimeTo:"",
          "categorys":"50,100,130,120",
          "processedTaskStatusList":[
            {"category":"50","targetStatus":"trusting,accepting,assessing"},
            {"category":"100","targetStatus":"dealreadying"},
            {"category":"130","targetStatus":"dealing,accepting,assessing"},
            {"category":"120","targetStatus":"dealing,backing,accepting,assessing"}
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
          type : "valueBased",
          value : "tickeTaskStatusName",
          options : {
              "backing": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "退回处理",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function (elem) {

                    target.createSystemPopupByLocalPath("backing", {
                        width: "800px",
                        title: "退回处理",
                      },
                      elem.row);

                  }
                }
              }]
            },
            "检修计划": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "发起委托",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function (elem) {
                    target.createSystemPopupByLocalPath("page12", {
                        width: "800px",
                        title: "发起委托",
                      },
                      elem.row);
                  }
                }
              },
                {
                  label: "自行处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function (elem) {
                      target.createSystemPopupByLocalPath("page9", {
                          width: "800px",
                          title: "自行处理",
                        },
                        elem.row);
                    }
                  }
                },
                {
                  label: "暂不处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function (elem) {
                      target.createSystemPopupByLocalPath("page10", {
                          width: "800px",
                          title: "暂不处理",
                        },
                        elem.row);
                    }
                  }
                }]
            },
            "待评价":{
              name: "操作",
              type: "buttonGroup",
              content: [ {
                label: "评价验收",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function (elem) {
                    target.createSystemPopupByLocalPath("page11", {
                      width: "800px",
                      title: "验收与评价",
                    }, elem.row);

                  }
                }
              }]
            },
            "点检异常": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "发起委托",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function (elem) {
                    target.createSystemPopupByLocalPath("page8", {
                        width: "800px",
                        title: "发起委托",
                      },
                      elem.row);
                  }
                }
              },
                {
                  label: "自行处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function (elem) {
                      target.createSystemPopupByLocalPath("page9", {
                          width: "800px",
                          title: "自行处理",
                        },
                        elem.row);
                    }
                  }
                },
                {
                  label: "暂不处理",
                  icon: "null",
                  class: "btn btn-default btn-sm",
                  on: {
                    click: function (elem) {
                      target.createSystemPopupByLocalPath("page10", {
                          width: "800px",
                          title: "暂不处理",
                        },
                        elem.row);
                    }
                  }
                }]
            },
            "当日点检": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "实施点检",
                icon: "null",
                class: "btn btn-default btn-sm",
                on: {
                  click: function (elem) { debugger
                    var nodeId = elem.row.deviceId;
                    target.setParameter("id",elem.row.deviceId);
                    target.getDomainAreaLineTree_alertStatus(function (domaintree) {
                      var find = domaintree.find(function (node) {
                        return node.id == nodeId;
                      });
                      target.setValue("global/resource", find);
                      target.navigateTo("index", {
                          main: 1,
                          sub: 0,
                          //   ticket: elem.row.ticket.id
                        },
                        "self");
                    })
                  }
                }
              }]
            },
            //  待委托出现的情况
            trusting : {
              name : "操作",
              type: "buttonGroup",
              content :[{
                label : "自行处理",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    // 点检人员处理任务 2
                    //   elem.row.dealType = 2;
                    target.createSystemPopupByLocalPath("page1", {
                      width : "600px",
                      title : "自行处理说明",
                    }, elem.row);
                    //   target.setValue("global/resource", elem.row.resource);
                  }
                }
              },{
                label : "发起委托",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){ 
                    target.createSystemPopupByLocalPath("page3", {
                      width : "900px",
                      title : "检修委托",
                    }, elem.row);
                  }
                }
              },{
                label : "暂不处理",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    target.createSystemPopupByLocalPath("page2", {
                      width : "600px",
                      title : "暂不处理说明",
                    }, elem.row);
                  }
                }
              }]
            },
            //  待验收出现的情况
            accepting : {
              name : "操作",
              type: "buttonGroup",
              content :[{
                label : "检修验收",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    // 点检人员处理任务 2
                    //   elem.row.dealType = 2;
                    target.createSystemPopupByLocalPath("page5", {
                      width : "600px",
                      title : "检修验收",
                    }, elem.row);

                  }
                }
              }] ,
              render : function(){
                return ""
              }
            },
            //  待评价出现的情况
            assessing : {
              name : "操作",
              type: "buttonGroup",
              content :[{
                label : "检修实绩",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    target.createSystemPopupByLocalPath("page7", {
                      width : "600px",
                      title : "检修实绩",
                    }, elem.row);
                  }
                }
              },{
                label : "诊断评价",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    target.createSystemPopupByLocalPath("page6", {
                      width : "600px",
                      title : "诊断评价",
                    }, elem.row);
                  }
                }
              }] ,
              render : function(){
                return ""
              }
            },
            assessingSelf:{
              name : "操作",
              type: "buttonGroup",
              content :[{
                label : "诊断评价",
                icon: "null",
                class: "btn btn-default btn-sm",
                on : {
                  click : function(elem){
                    target.createSystemPopupByLocalPath("page6", {
                      width : "600px",
                      title : "诊断评价",
                    }, elem.row);
                  }
                }
              }] ,
              render : function(){
                return ""
              }
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
      target.off("search_toDolist");
      target.on("search_toDolist", function(e){
        render([], e);
      });
      render([]);
    }
  }
}

