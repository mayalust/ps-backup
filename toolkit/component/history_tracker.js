define([], function () {
  return {
    width: "100%",
    on: {
      init: function (event) {
        var target = event.target;


        //   var ticketNo = target.getPopupData();

        var ticketNo = target.getValue("ticketNo");




        var specialtyPropsList = target.getRootScope("myDicts")["specialtyProps"];
        // 报警来源
        var appNameList = target.getRootScope("myDicts")["appName"];
        // 报警级别 alertSeverity
        var alertSeverityList = target.getRootScope("myDicts")["alertSeverity"];
        // 综合状态等级
        var statusGrades = target.getRootScope("myDicts")["statusGrade"];

        var dealTypeObj = {
          "1": "暂不处理",
          "2": "自行处理",
          "3": "发起委托",
        }
        var ctrlGroups = [{
          time: "2017-11-12 12:30:10",
          icon: "fa fa-user fa-fw fa-circle-o bg-green",
          disList: [{
            value: "<a>报警产生</a>"
          }, {
            value: "报警类型：振动报警"
          }, {
            value: "报警级别：警告"
          }, {
            value: "报警描述：速度有效值:1.250mm/s超出预警范围"
          }]
        },
        {
          time: "2017-11-12 12:30:10",
          icon: "fa fa-user bg-aqua bg-orange",
          disList: [{
            value: "<a>检修反馈</a>"
          }]
        },
        {
          time: "2017-11-12 12:30:10",
          icon: "fa fa-user fa-fw fa-circle-o bg-green",
          disList: [{
            value: "<a>检修反馈</a>"
          }]
        }];


        var dateToString = function (now) {
          var year = now.getFullYear();
          var month = (now.getMonth() + 1).toString();
          var day = (now.getDate()).toString();
          var hour = (now.getHours()).toString();
          var minute = (now.getMinutes()).toString();
          var second = (now.getSeconds()).toString();
          if (month.length == 1) {
            month = "0" + month;
          }
          if (day.length == 1) {
            day = "0" + day;
          }
          if (hour.length == 1) {
            hour = "0" + hour;
          }
          if (minute.length == 1) {
            minute = "0" + minute;
          }
          if (second.length == 1) {
            second = "0" + second;
          }
          var dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
          return dateTime;
        }


        if (ticketNo) {

          // // 获取委托带过来的数据
          var createTrust;
          target.postService("deviceResumeUIService", "getDeviceCheckTrustByCondition", {
            ticketNo: ticketNo
          }, function (tc) {
            if (tc.code == 0) {
              createTrust = tc.data[0] || {};
            }
          });

          target.postService("ticketLogService", "getByTicketNo", [ticketNo], function (dt) {
            if (dt.code == 0) {
              var ticketHistoryList = dt.data;
              if (ticketHistoryList[0].logType != "start" && ticketHistoryList[0].logType != "startEvent") { //第一个节点为开始
                ticketHistoryList.unshift({
                  logType: "startEvent"
                })
              }

              /**
               *  判断是告警还是任务
               */

              if (ticketHistoryList.length == 0) {
                target.growl("此工单[" + ticketNo + "]已被删除", "error");
                return;
              }

              var arr = [];
              if (ticketHistoryList[1].ticketTask.variables.ticket.category == "50") {

                /**
                 *  合并多条告警
                 *  是多条展示弹框/单条跟之前一样
                 *
                 */
                if (ticketHistoryList[1].ticketTask.variables.alertItemList && ticketHistoryList[1].ticketTask.variables.alertItemList.length == 1) {

                  //fa fa-user fa-fw fa-circle-o
                  var specialtyName = ticketHistoryList[1].ticketTask.variables.alertItemList[0].specialtyName,
                    appNameListName, alertSeverityListName;


                  appNameList.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.appName) {
                      appNameListName = e.label;
                      return;
                    }
                  })
                  //报警级别 alertSeverity

                  alertSeverityList.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.severity) {
                      alertSeverityListName = e.label;
                      return;
                    }
                  });

                  arr = [{
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.variables.ticket.values.alertArisingTime)),
                    icon: "fa fa-user fa-fw fa-circle-o bg-green",
                    disList: [{
                      value: "<a>报警产生</a>"
                    }, {
                      value: "报警类型:  " + (specialtyName ? specialtyName : "无")
                    }, {
                      value: "报警级别:  " + alertSeverityListName
                    }, {
                      value: "报警描述:  " + ticketHistoryList[1].ticketTask.variables.ticket.values.alertTitle
                    }, {
                      value: "报警来源: " + appNameListName,
                      style: {
                        color: "red"
                      }
                    }]
                  }, {
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                    icon: "fa fa-user bg-aqua",
                    disList: [{
                      value: "<a>报警处理</a>"
                    },
                    {
                      value: "处理人: " + ticketHistoryList[1].ticketTask.variables.ticket.creatorName
                    },
                    {
                      value: "处理方式:  分配"
                    },
                    {
                      value: "处理原因:  "
                    }]
                  }];


                } else {
                  var alertItemList = ticketHistoryList[1].ticketTask.variables.alertItemList;
                  var deviceName = ticketHistoryList[1].ticketTask.variables.devName

                  arr = [{
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.variables.ticket.values.alertArisingTime)),
                    icon: "fa fa-user fa-fw fa-circle-o bg-green",
                    disList: [{
                      value: "<a>报警产生</a>"
                    }, {
                      value: "报警描述:  " + ticketHistoryList[1].ticketTask.variables.ticket.values.alertTitle
                    }, {
                      value: '<button class="btn btn-primary btn-sm alertItemList">合并告警</button>'
                    }]
                  }];

                }
              } else if (ticketHistoryList[1].ticketTask.variables.ticket.category == "90") {

                var ticketDealing90Data = ticketHistoryList[1].ticketTask;
                /**
                 *  合并多条告警
                 *  是多条展示弹框/单条跟之前一样
                 *
                 */
                if (ticketHistoryList[1].ticketTask.variables.alertItemList &&
                  ticketHistoryList[1].ticketTask.variables.alertItemList.length == 1) {

                  //fa fa-user fa-fw fa-circle-o
                  var specialtyName = ticketHistoryList[1].ticketTask.variables.alertItemList[0].specialtyName,
                    appNameListName, alertSeverityListName;


                  appNameList.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.appName) {
                      appNameListName = e.label;
                      return;
                    }
                  })


                  var statusGradeListName;

                  statusGrades.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.statusGrade) {
                      statusGradeListName = e.label;
                      return;
                    }
                  })

                  //报警级别 alertSeverity

                  alertSeverityList.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.severity) {
                      alertSeverityListName = e.label;
                      return;
                    }
                  });

                  arr = [{
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.variables.ticket.values.alertArisingTime)),
                    icon: "fa fa-user fa-fw fa-circle-o bg-green",
                    disList: [{
                      value: "<a>报警产生</a>"
                    }, {
                      value: "报警类型:  " + (specialtyName ? specialtyName : "无")
                    }, {
                      value: "报警级别:  " + alertSeverityListName
                    }, {
                      value: "报警描述:  " + ticketHistoryList[1].ticketTask.variables.ticket.values.alertTitle
                    }, {
                      value: "报警来源: " + appNameListName,
                      style: {
                        color: "red"
                      }
                    }]
                  }, {
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                    icon: "fa fa-user bg-aqua",
                    disList: [{
                      value: "<a>综合诊断</a>"
                    }, {
                      value: "处理人:  " + ticketHistoryList[1].ticketTask.senderName
                    }, {
                      value: "<span style='color:#2997bb'>状态诊断<span>"
                    }, {
                      value: "综合状态等级:  " + (statusGradeListName ? statusGradeListName : "")
                    }, {
                      value: "处理方案建议:  " + (ticketHistoryList[1].ticketTask.variables.cessingScheme ?
                        ticketHistoryList[1].ticketTask.variables.cessingScheme : "")
                    }, {
                      value: "<span style='color:#2997bb'>状态处理<span>"
                    }, {
                      value: "处理人:  " + ticketHistoryList[1].ticketTask.senderName
                    }, {
                      value: "处理方式:  " + dealTypeObj[ticketHistoryList[1].ticketTask.variables.ticket.values.dealType]
                    }, {
                      value: "检修标准编号:  " +
                        (ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectId ?
                          ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectId :
                          "")
                    }, {
                      value: "标准项目名称:  " +
                        (ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectName ?
                          ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectName :
                          "")
                    }, {
                      // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                      value: '<button class="btn btn-primary btn-sm dealing90" value="' +
                        ticketHistoryList[1].ticketTask.ticketNo +
                        '">方案履历</button>'
                    }]
                  }];


                } else {
                  var alertItemList = ticketHistoryList[1].ticketTask.variables.alertItemList;
                  var deviceName = ticketHistoryList[1].ticketTask.variables.devName
                  var statusGradeListName;

                  statusGrades.forEach(function (e) {
                    if (e.valueCode == ticketHistoryList[1].ticketTask.variables.statusGrade) {
                      statusGradeListName = e.label;
                      return;
                    }
                  })
                  arr = [{
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.variables.ticket.values.alertArisingTime)),
                    icon: "fa fa-user fa-fw fa-circle-o bg-green",
                    disList: [{
                      value: "<a>报警产生</a>"
                    }, {
                      value: "报警描述:  " + ticketHistoryList[1].ticketTask.variables.ticket.values.alertTitle
                    }, {
                      value: '<button class="btn btn-primary btn-sm alertItemList">合并告警</button>'
                    }]
                  }, {
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                    icon: "fa fa-user bg-aqua",
                    disList: [{
                      value: "<a>综合诊断</a>"
                    }, {
                      value: "处理人:  " + ticketHistoryList[1].ticketTask.senderName
                    }, {
                      value: "<span style='color:#2997bb'>状态诊断<span>"
                    }, {
                      value: "综合状态等级:  " + (statusGradeListName ? statusGradeListName : "")
                    }, {
                      value: "处理方案建议:  " + (ticketHistoryList[1].ticketTask.variables.cessingScheme ?
                        ticketHistoryList[1].ticketTask.variables.cessingScheme : "")
                    }, {
                      value: "<span style='color:#2997bb'>状态处理<span>"
                    }, {
                      value: "处理人:  " + ticketHistoryList[1].ticketTask.handlerName
                    }, {
                      value: "处理方式:  " + dealTypeObj[ticketHistoryList[1].ticketTask.variables.ticket.values.dealType]
                    }, {
                      value: "检修标准编号:  " +
                        (ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectId ?
                          ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectId :
                          "")
                    }, {
                      value: "标准项目名称:  " +
                        (ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectName ?
                          ticketHistoryList[1].ticketTask.variables.ticket.values.standardProjectName :
                          "")
                    }, {
                      // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                      value: '<button class="btn btn-primary btn-sm dealing90" value="' +
                        ticketHistoryList[1].ticketTask.ticketNo +
                        '">方案履历</button>'
                    }]
                  }];

                }


              } else if (ticketHistoryList[1].ticketTask.variables.ticket.category == "260") {
                //fa fa-user fa-fw fa-circle-o
                var specialtyName = ticketHistoryList[1].ticketTask.variables.alertItemList[0].specialtyName,
                  appNameListName, alertSeverityListName;


                appNameList.forEach(function (e) {
                  if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.appName) {
                    appNameListName = e.label;
                    return;
                  }
                })
                //报警级别 alertSeverity

                alertSeverityList.forEach(function (e) {
                  if (e.valueCode == ticketHistoryList[1].ticketTask.variables.ticket.values.severity) {
                    alertSeverityListName = e.label;
                    return;
                  }
                });

                arr = [{
                  time: dateToString(new Date(ticketHistoryList[1].ticketTask.variables.ticket.values.alertArisingTime)),
                  icon: "fa fa-user fa-fw fa-circle-o bg-green",
                  disList: [{
                    value: "<a>报警产生</a>"
                  }, {
                    value: "报警类型:  " + (specialtyName ? specialtyName : "无")
                  }, {
                    value: "报警级别:  " + alertSeverityListName
                  }, {
                    value: "报警描述:  " + ticketHistoryList[1].ticketTask.variables.ticket.values.alertTitle
                  }, {
                    value: "报警来源: " + appNameListName,
                    style: {
                      color: "red"
                    }
                  }]
                }];

              }


              // 新建临时委托拼接一个节点
              if (ticketHistoryList[1].ticketTask.variables.ticket.category == "210") {

                arr = [{
                  time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                  icon: "fa fa-user fa-fw fa-circle-o bg-green",
                  disList: [{
                    value: "<a>临时委托</a>"
                  }, {
                    value: "委托人:  " + ticketHistoryList[1].ticketTask.senderName
                  }, {
                    value: "检修标准编号:  " + createTrust.standardProjectId
                  }, {
                    value: "标准项目名称:  " + createTrust.standardProjectName
                  }, {
                    value: "处理方式:  临时委托"
                  }, {
                    // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                    value: '<button class="btn btn-primary btn-sm trusting" value="' +
                      ticketHistoryList[1].ticketTask.variables.devName + ',' +
                      ticketHistoryList[1].ticketTask.variables.deviceCode + ',' +
                      ticketHistoryList[1].ticketTask.ticketNo +
                      '">检修委托详情</button>'
                  }]
                }];
              }


              // 点检异常处理
              if (ticketHistoryList[1].ticketTask.variables.ticket.category == "130") {

                var pointTicketNo = ticketHistoryList[1].ticketTask.variables.pointTicketNo;

                arr = [{
                  time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                  icon: "fa fa-user fa-fw fa-circle-o bg-green",
                  disList: [{
                      value: "<a>点检计划</a>"
                    }, {
                      value: "处理人:  " + ticketHistoryList[1].ticketTask.senderName
                    },
                    //   {
                    //     value: "检修标准编号:  " +standInfo.standardProjectId
                    //   },
                    //   {
                    //     value: "标准项目名称:  " + standInfo.standardProjectName
                    //   },
                    {
                      value: "处理方式:  录入实绩"
                    }, {
                      value: '<button class="btn btn-primary btn-sm dianjianyichang">任务详情</button>'
                    }
                  ]
                }, {
                  time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                  icon: "fa fa-user fa-fw fa-circle bg-green",
                  disList: [{
                    value: "<a>点检异常</a>"
                  }, {
                    value: "处理人:  " + ticketHistoryList[1].ticketTask.handlerName
                  }, {
                    value: "异常描述:  " + ticketHistoryList[1].ticketTask.ticketTitle
                  }]
                }];


              }


              for (var i = 1; i < ticketHistoryList.length; i++) {
                var historyList = {
                  icon: "",
                  disList: "",
                  time: ticketHistoryList[i].ticketTask.values ? dateToString(new Date(ticketHistoryList[i].ticketTask.finishedTime)) : ""
                };


                // 结束
                if (ticketHistoryList[i].logType == "endEvent") {
                  historyList.icon = "fa fa-fw fa-circle bg-green";
                  historyList.disList = [{
                      value: ticketHistoryList[i].message
                    },
                    {
                      value: "处理人: " + ticketHistoryList[i].ticketTask.handlerName
                    }

                  ]
                }


                // 任务详细流程


                if (ticketHistoryList[i].logType == "userTask") {





                  // 显示icon
                  if (ticketHistoryList[i].ticketTask.taskStatus == 200) {
                    historyList.icon = "fa fa-user bg-aqua";
                  } else {
                    historyList.icon = "fa fa-user bg-aqua bg-orange";
                  }


                  // 诊断分析
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "checking") {

                    if (ticketHistoryList[i].ticketTask.values) {
                      // 综合状态等级
                      var statusGradeListName;
                      var statusGradeList = target.getRootScope("myDicts")["statusGrade"];
                      statusGradeList.forEach(function (e) {
                        if (e.valueCode == ticketHistoryList[i].ticketTask.values.statusGrade) {
                          statusGradeListName = e.label;
                          return;
                        }
                      })
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "诊断人: " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "综合状态等级: " + (statusGradeListName ? statusGradeListName : "")
                      },
                      {
                        value: "综合判断结论: " + ticketHistoryList[i].ticketTask.values.multipleConclusion
                      },
                      {
                        value: "处理方案建议:  " + (ticketHistoryList[i].ticketTask.variables.cessingScheme ?
                          ticketHistoryList[i].ticketTask.variables.cessingScheme : "")
                      },
                      {
                        value: '<button class="btn btn-primary btn-sm checking" value="' +
                          ticketHistoryList[i].ticketTask.variables.devName + ',' +
                          ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                          ticketHistoryList[i].ticketTask.id + ',' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          '">详情</button>'
                      }]

                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "诊断人: " + ticketHistoryList[i].ticketTask.handlerName
                      }]

                    }
                  }

                  // 诊断审核
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "auditing") {

                    if (ticketHistoryList[i].ticketTask.values) {

                      if (ticketHistoryList[i].ticketTask.values.isAudit == 0) {
                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "审核人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "审核结果:  驳回"
                        },
                        {
                          value: "审核意见: " + ticketHistoryList[i].ticketTask.values.auditOpinion
                        }]
                      } else {
                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "审核人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: ticketHistoryList[i].ticketTask.values.isAudit == 0 ? "审核结果:  驳回" : "审核结果:  通过"
                        },
                        {
                          value: "审核意见: " + ticketHistoryList[i].ticketTask.values.auditOpinion
                        },
                        {
                          value: '综合诊断报告:   ' +
                            '<a target="_blank" href = "/api/rest/download/deviceResumeUIService/getReportBytes/' +
                            ticketHistoryList[i].ticketNo + '.pdf/' + ticketHistoryList[i].ticketNo + '">' +
                            ticketHistoryList[i].ticketNo + '.pdf</a>'
                        }]
                      }


                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "审核人: " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "审核结果:  待审核"
                      }]

                    }

                  }


                  // 点检处理
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "trusting") {
                    var dealTypeName;

                    if (ticketHistoryList[i].ticketTask.values) {
                      var dealTypeName;
                      if (ticketHistoryList[i].ticketTask.values.dealType == 1) {
                        dealTypeName = "暂不处理"
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 2) {
                        dealTypeName = "自行处理"
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 3) {
                        dealTypeName = "发起委托"

                      }


                      if (ticketHistoryList[i].ticketTask.values.dealType == 3) {
                        if (ticketHistoryList[i].ticketTask.values.standardProjectId) {
                          historyList.disList = [{
                              value: "<a>" + ticketHistoryList[i].message + "</a>"
                            },
                            {
                              value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                            },
                            {
                              value: "处理方式: " + dealTypeName
                            },
                            {
                              value: "标准项目编号: " + ticketHistoryList[i].ticketTask.values.standardProjectId
                            },
                            {
                              value: "工程项目名称: " + createTrust.standardProjectName
                            },
                            {
                              value: "定年修主控重点: " + createTrust.isSk
                            },
                            {
                              value: "质量层级: " + createTrust.qualityLevel
                            },
                            {
                              value: "高危等级: " + createTrust.highDangerLevel
                            },
                            {
                              // value: '<button class="btn btn-primary btn-sm" id="trusting">检修委托详情</button>',
                              value: '<button class="btn btn-primary btn-sm trusting" value="' +
                                ticketHistoryList[i].ticketTask.variables.devName + ',' +
                                ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                                ticketHistoryList[i].ticketTask.ticketNo +
                                '">检修委托详情</button>'
                            }

                          ]
                        } else {
                          historyList.disList = [{
                              value: "<a>" + ticketHistoryList[i].message + "</a>"
                            },
                            {
                              value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                            },
                            {
                              value: "处理方式: " + dealTypeName
                            },
                            {
                              // value: '<button class="btn btn-primary btn-sm" id="trusting">检修委托详情</button>',
                              value: '<button class="btn btn-primary btn-sm trusting" value="' +
                                ticketHistoryList[i].ticketTask.variables.devName + ',' +
                                ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                                ticketHistoryList[i].ticketTask.ticketNo +
                                '">检修委托详情</button>'
                            }

                          ]
                        }
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 1) {
                        var tallyCheckboxlist = "";
                        if (ticketHistoryList[i].ticketTask.values.tallyCheckboxlist) {
                          ticketHistoryList[i].ticketTask.values.tallyCheckboxlist.forEach(function (elem) {
                            tallyCheckboxlist += elem.label + " ; "
                          })
                        }

                        historyList.disList = [{
                            value: "<a>" + ticketHistoryList[i].message + "</a>"
                          },
                          {
                            value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                          },
                          {
                            value: "处理方式: " + dealTypeName
                          },
                          {
                            value: "处理原因: " + tallyCheckboxlist
                          },
                          {
                            value: ticketHistoryList[i].ticketTask.values.tallyDealExplain ? "处理说明: " + ticketHistoryList[i].ticketTask.values.tallyDealExplain : "处理说明: "
                          }


                        ]
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 17) {
                        //报警强制关闭

                        historyList.disList = [{
                          value: "<a>强制关闭</a>"
                        },
                        {
                          value: "处理人: " + ticketHistoryList[i].ticketTask.handlerName
                        }]

                      } else {
                        historyList.disList = [{
                            value: "<a>" + ticketHistoryList[i].message + "</a>"
                          },
                          {
                            value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                          },
                          {
                            value: "处理方式: " + dealTypeName
                          },
                          {
                            value: "处理原因: " + ticketHistoryList[i].ticketTask.values.tallyReason
                          },
                          {
                            value: ticketHistoryList[i].ticketTask.values.tallyCourseReason ?
                              "处理说明: " + ticketHistoryList[i].ticketTask.values.tallyCourseReason : "处理说明: "
                          }


                        ]
                      }


                    } else {
                      dealTypeName = "待委托";
                      historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "处理方式: " + dealTypeName
                        }


                      ]
                    }


                  }


                  // 检修计划，点检异常   发起委托/暂不处理/自行处理


                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "dealing" &&
                    ticketHistoryList[i].ticketTask.variables.ticket.category == "260"
                  ) {

                    // 异常处理是2050|脱硫产线发起的  
                    var statusGradesName = "";

                    var ticketDealing260Data = ticketHistoryList[i].ticketTask;
                    statusGrades.forEach(function (e) {
                      if (e.valueCode == ticketHistoryList[i].ticketTask.variables.ticket.values.statusGrade) {
                        statusGradesName = e.label;
                        return;
                      }
                    });

                    historyList.time = dateToString(new Date(ticketHistoryList[i].ticketTask.sendTime));


                    historyList.disList = [{
                        value: "<a>综合诊断</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.senderName
                      }, {
                        value: "<span style='color:#2997bb'>状态诊断<span>"
                      }, {
                        value: "综合状态等级:  " + (statusGradeListName ? statusGradeListName : "")
                      }, {
                        value: "综合判断结论:  " + ticketHistoryList[i].ticketTask.variables.ticket.values.multipleConclusion
                      }, {
                        value: "处理方案建议:  " + (ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme ? ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme : "")
                      }, {
                        // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                        value: '<button class="btn btn-primary btn-sm dealing260" value="' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          //   + JSON.stringify(ticketHistoryList[i].ticketTask) +
                          '">方案履历</button>'
                      }, {
                        value: "<span style='color:#2997bb'>状态处理<span>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      },

                    ];
                    if (ticketHistoryList[i].ticketTask.values && ticketHistoryList[i].ticketTask.values.complexDealType == 2) {
                      historyList.disList = [{
                        value: "<a>综合诊断</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.senderName
                      }, {
                        value: "<span style='color:#2997bb'>状态诊断<span>"
                      }, {
                        value: "综合状态等级:  " + (statusGradeListName ? statusGradeListName : "")
                      }, {
                        value: "综合判断结论:  " + ticketHistoryList[i].ticketTask.variables.ticket.values.multipleConclusion
                      }, {
                        value: "处理方案建议:  " + (ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme ? ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme : "")
                      }, {
                        value: '<button class="btn btn-primary btn-sm dealing260" value="' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          '">方案履历</button>'
                      }, {
                        value: "<span style='color:#2997bb'>报警关闭<span>"
                      },
                      {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "关闭原因:  " + ticketHistoryList[i].ticketTask.values.colseReason
                      }, ];
                    } else if (ticketHistoryList[i].ticketTask.values) {

                      historyList.disList = [{
                        value: "<a>综合诊断</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.senderName
                      }, {
                        value: "<span style='color:#2997bb'>状态诊断<span>"
                      }, {
                        value: "综合状态等级:  " + (statusGradeListName ? statusGradeListName : "")
                      }, {
                        value: "综合判断结论:  " + ticketHistoryList[i].ticketTask.variables.ticket.values.multipleConclusion
                      }, {
                        value: "处理方案建议:  " + (ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme ? ticketHistoryList[i].ticketTask.variables.ticket.values.cessingScheme : "")
                      }, {
                        value: "<span style='color:#2997bb'>状态处理<span>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      }, {
                        value: "处理方式:  " + (dealTypeObj[ticketHistoryList[i].ticketTask.values.dealType] ?
                          dealTypeObj[ticketHistoryList[i].ticketTask.values.dealType] : "待处理")
                      }, {
                        value: "检修标准编号:  " + (ticketHistoryList[i].ticketTask.values.standardProjectId ? ticketHistoryList[i].ticketTask.values.standardProjectId : "")
                      }, {
                        value: "标准项目名称:  " + (ticketHistoryList[i].ticketTask.values.standardProjectName ? ticketHistoryList[i].ticketTask.values.standardProjectName : "")
                      }, {
                        // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                        value: '<button class="btn btn-primary btn-sm dealing260" value="' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          '">方案履历</button>'
                      }];


                    }


                  } else if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "dealing") {


                    var dealTypeName;

                    if (ticketHistoryList[i].ticketTask.values) {
                      var dealTypeName;
                      if (ticketHistoryList[i].ticketTask.values.dealType == 1) {
                        dealTypeName = "暂不处理"
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 2) {
                        dealTypeName = "自行处理"
                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 3) {
                        dealTypeName = "发起委托"

                      }


                      if (ticketHistoryList[i].ticketTask.values.dealType == 3) {

                        historyList.disList = [{
                          value: "<a>检修计划</a>"
                        }, {
                          value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                        }, {
                          value: "检修标准编号:  " + createTrust.standardProjectId
                        }, {
                          value: "标准项目名称:  " + createTrust.standardProjectName
                        }, {
                          value: "处理方式:  " + dealTypeName
                        }, {
                          // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                          value: '<button class="btn btn-primary btn-sm trusting" value="' +
                            ticketHistoryList[i].ticketTask.variables.devName + ',' +
                            ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                            ticketHistoryList[i].ticketTask.ticketNo +
                            '">检修委托详情</button>'
                        }];

                      } else if (ticketHistoryList[i].ticketTask.values.dealType == 1) {
                        var tallyCheckboxlist = "";
                        if (ticketHistoryList[i].ticketTask.values.tallyCheckboxlist) {
                          ticketHistoryList[i].ticketTask.values.tallyCheckboxlist.forEach(function (elem) {
                            tallyCheckboxlist += elem.label + " ; "
                          })
                        }

                        historyList.disList = [{
                            value: "<a>检修计划</a>"
                          },
                          {
                            value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                          },
                          {
                            value: "处理方式: " + dealTypeName
                          },
                          {
                            value: "处理原因: " + tallyCheckboxlist
                          },
                          {
                            value: ticketHistoryList[i].ticketTask.values.tallyDealExplain ? "处理说明: " + ticketHistoryList[i].ticketTask.values.tallyDealExplain : "处理说明: "
                          }


                        ]
                      } else {
                        historyList.disList = [{
                            value: "<a>检修计划</a>"
                          },
                          {
                            value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                          },
                          {
                            value: "处理方式: " + dealTypeName
                          },
                          {
                            value: "处理原因: " + ticketHistoryList[i].ticketTask.values.tallyReason
                          },
                          {
                            value: ticketHistoryList[i].ticketTask.values.tallyCourseReason ? "处理说明: " +
                              ticketHistoryList[i].ticketTask.values.tallyCourseReason : "处理说明: "
                          }


                        ]
                      }


                    } else {
                      dealTypeName = "待处理";
                      historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "点检人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "处理方式: " + dealTypeName
                        }


                      ]
                    }


                  }


                  //


                  // 检修实绩
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "maintaining") {

                    if (ticketHistoryList[i].ticketTask.values) {

                      if (ticketHistoryList[i].ticketTask.values.tempDealType == 1) {
                        historyList.disList = [{
                          value: "<a>检修实绩</a>"
                        },
                        {
                          value: "检修人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "状态: 被退回"
                        },
                        {
                          value: "退回说明: " + ticketHistoryList[i].ticketTask.values.recallExplain
                        }]
                      } else {
                        historyList.disList = [{
                            value: "<a>检修实绩</a>"
                          },
                          {
                            value: "检修人: " + ticketHistoryList[i].ticketTask.handlerName
                          },
                          {

                            value: '<button class="btn btn-primary btn-sm maintainingProject" value="' +
                              ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                              ticketHistoryList[i].ticketTask.variables.standardProjectId + ',' +
                              ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                              ticketHistoryList[i].ticketNo +
                              '">维修方案</button>'
                          },
                          {
                            value: "<button class='btn btn-primary btn-sm repairProject' value='" +
                              JSON.stringify(ticketHistoryList[i].ticketTask.values) +
                              "'>检修实绩</button>"
                          }

                        ]
                      }


                    } else {
                      historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "检修人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {

                          value: '<button class="btn btn-primary btn-sm maintainingProject" value="' +
                            ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                            ticketHistoryList[i].ticketTask.variables.standardProjectId + ',' +
                            ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                            ticketHistoryList[i].ticketNo +
                            '">维修方案</button>'
                        }

                      ]
                    }

                  }

                  // 检修验收
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "accepting") {


                    if (ticketHistoryList[i].ticketTask.variables.ticket.category == "50") {
                      if (ticketHistoryList[i].ticketTask.values) {
                        // var tallyCheckName;
                        // if (ticketHistoryList[i].ticketTask.values.tallyCheck == 0) {
                        //   tallyCheckName = "通过"
                        // } else if (ticketHistoryList[i].ticketTask.values.tallyCheck == 1) {
                        //   tallyCheckName = "不通过"
                        // }
                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "验收人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "验收说明:  " + (ticketHistoryList[i].ticketTask.values.tallyCheck ? ticketHistoryList[i].ticketTask.values.tallyCheck : "")
                        },
                        {
                          value: "备注  : " + (ticketHistoryList[i].ticketTask.values.tallyRemark ? ticketHistoryList[i].ticketTask.values.tallyRemark : "")
                        }]
                      } else {
                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "验收人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "验收说明:  待验收"
                        }]
                      }


                    } else {
                      // 判断是检修计划的评价

                      if (ticketHistoryList[i].ticketTask.values) {

                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "验收人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "<button class='btn btn-primary btn-sm taskEvaluate' value='" +
                            JSON.stringify(ticketHistoryList[i].ticketTask) +
                            "'>验收说明</button>"
                        }]


                      } else {
                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        }, {
                          value: "处理人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "评价说明: 待评价"
                        }]
                      }
                    }

                  }
                  // 诊断评价   tallyEvaluateCheckboxlist


                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "assessing") {


                    if (ticketHistoryList[i].ticketTask.values) {
                      // 判断如果是暂不处理
                      if (ticketHistoryList[i].ticketTask.values.abnormalEvaluateCheckboxlist) {
                        var tallyEvaluateCheckboxlistName;
                        if (ticketHistoryList[i].ticketTask.values.abnormalEvaluateCheckboxlist == 0) {
                          tallyEvaluateCheckboxlistName = "有效"
                        } else if (ticketHistoryList[i].ticketTask.values.abnormalEvaluateCheckboxlist == 1) {
                          tallyEvaluateCheckboxlistName = "无效"
                        }

                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "评价人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "异常处理等级:  " + tallyEvaluateCheckboxlistName
                        },
                        {
                          value: "评价说明  : " + (ticketHistoryList[i].ticketTask.values.abnormalEvaluateDealExplain ?
                            ticketHistoryList[i].ticketTask.values.abnormalEvaluateDealExplain : "")
                        }]
                      } else {
                        var tallyEvaluateCheckboxlistName;
                        if (ticketHistoryList[i].ticketTask.values.tallyEvaluateCheckboxlist == 0) {
                          tallyEvaluateCheckboxlistName = "正确"
                        } else if (ticketHistoryList[i].ticketTask.values.tallyEvaluateCheckboxlist == 1) {
                          tallyEvaluateCheckboxlistName = "基本正确"
                        } else {
                          tallyEvaluateCheckboxlistName = "不正确"
                        }

                        historyList.disList = [{
                          value: "<a>" + ticketHistoryList[i].message + "</a>"
                        },
                        {
                          value: "评价人: " + ticketHistoryList[i].ticketTask.handlerName
                        },
                        {
                          value: "评价等级:  " + tallyEvaluateCheckboxlistName
                        },
                        {
                          value: "评价说明  : " + (ticketHistoryList[i].ticketTask.values.tallyEvaluateDealExplain ?
                            ticketHistoryList[i].ticketTask.values.tallyEvaluateDealExplain : "")
                        }]
                      }


                      // 判断是1580 没有验收评价
                      if (ticketHistoryList[i].ticketTask.variables.ticket.category != "50") {

                        var item = {
                          value: "<button class='btn btn-primary btn-sm taskEvaluate' value='" +
                            JSON.stringify(ticketHistoryList[i].ticketTask) +
                            "'>验收说明</button>"
                        }
                        historyList.disList.push(item)

                      }


                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "评价人: " + ticketHistoryList[i].ticketTask.handlerName
                      }]
                    }
                  }


                  // 半总包这里验收、评价是分开的
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "assessingAgain") {



                    if (ticketHistoryList[i].ticketTask.values) {



                      historyList.disList = [{
                        value: "<a>报警评价</a>"
                      },
                      {
                        value: "评价人: " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "<button class='btn btn-primary btn-sm assessingAgain'  value='" +
                          JSON.stringify(ticketHistoryList[i].ticketTask) +
                          "'>报警评价</button>"
                      }]
                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "评价人: " + ticketHistoryList[i].ticketTask.handlerName
                      }]
                    }

                  }


                  // 报警关闭
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "explaining") {
                    if (ticketHistoryList[i].ticketTask.values) {
                      var alertEvaluateInfoList = ticketHistoryList[i].ticketTask.variables.alertItemList;
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "说明人  : " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "关闭说明  : " + (ticketHistoryList[i].ticketTask.values.diagnoseDeclare ? ticketHistoryList[i].ticketTask.values.diagnoseDeclare : "")
                      },
                      {
                        value: "<button class='btn btn-primary btn-sm alertEvaluateInfoList'  value='" +
                          JSON.stringify(ticketHistoryList[i].ticketTask.values.alertEvaluateInfoList) +
                          "'>报警评价</button>"
                      }]
                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "说明人: " + ticketHistoryList[i].ticketTask.handlerName
                      }]
                    }
                  }


                  // 关闭审核
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "closing") {
                    if (ticketHistoryList[i].ticketTask.values) {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "审核人: " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: ticketHistoryList[i].ticketTask.values.isClose == 0 ? "审核结果:  驳回" : "审核结果:  通过"
                      },
                      {
                        value: "审核说明  : " + (ticketHistoryList[i].ticketTask.values.auditDeclare ? ticketHistoryList[i].ticketTask.values.auditDeclare : "")
                      }]
                    } else {
                      historyList.disList = [{
                        value: "<a>" + ticketHistoryList[i].message + "</a>"
                      },
                      {
                        value: "审核人: " + ticketHistoryList[i].ticketTask.handlerName
                      }]

                    }

                  }
                  if (ticketHistoryList[i].ticketTask.variables.ticket.category == "120" &&
                    ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "backing") {

                    if (ticketHistoryList[i].ticketTask.values && ticketHistoryList[i].ticketTask.values.tempDealType == 5) {
                      historyList.disList = [{
                        value: "<a>检修计划</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "检修标准编号:  " + ticketHistoryList[i].ticketTask.values.standardProjectId
                      },
                      {
                        value: "标准项目名称:  " + ticketHistoryList[i].ticketTask.variables.standardInfo.standardProjectName
                      },
                      {
                        value: "处理方式:  重新下发"
                      }, {
                        // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                        value: '<button class="btn btn-primary btn-sm trusting" value="' +
                          ticketHistoryList[i].ticketTask.variables.devName + ',' +
                          ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          '">检修委托详情</button>'
                      }]
                    } else if (ticketHistoryList[i].ticketTask.values && ticketHistoryList[i].ticketTask.values.tempDealType == 4) {
                      historyList.disList = [{
                        value: "<a>检修计划</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "检修标准编号:  " + ticketHistoryList[i].ticketTask.variables.standardInfo.standardProjectId
                      },
                      {
                        value: "标准项目名称:  " + ticketHistoryList[i].ticketTask.variables.standardInfo.standardProjectName
                      },
                      {
                        value: "处理方式:  点检关闭"
                      }, {
                        value: "关闭说明:  " + ticketHistoryList[i].ticketTask.values.closeReason
                      }, ]
                    } else {
                      historyList.disList = [{
                        value: "<a>检修计划</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      }]
                    }

                  }


                  // 当日点检的过程跟踪
                  if (ticketHistoryList[i].ticketTask.variables.ticket.category == "100" &&
                    ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "end") {
                    if (ticketHistoryList[i].ticketTask.values) {

                      var dangridianjianData = ticketHistoryList[i].ticketTask;
                      historyList.disList = [{
                        value: "<a>当日点检</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[1].ticketTask.senderName
                      },
                      {
                        value: "处理方式:  录入实绩"
                      }, {
                        value: '<button class="btn btn-primary btn-sm dangridianjian">任务详情</button>'
                      }]
                    }

                  }


                  // 临时委托退回处理
                  if (ticketHistoryList[i].ticketTask.variables.ticket.values.theTicketType == "tempTrust" &&
                    ticketHistoryList[i].ticketTask.variables.ticket.values.tickeTaskStatus == "backing") {


                    if (ticketHistoryList[i].ticketTask.values && ticketHistoryList[i].ticketTask.values.tempDealType == 5) {
                      historyList.disList = [{
                        value: "<a>临时委托</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      },
                      {
                        value: "检修标准编号:  " + ticketHistoryList[i].ticketTask.variables.ticket.values.standardProjectId
                      },
                      {
                        value: "标准项目名称:  " + ticketHistoryList[i].ticketTask.variables.ticket.values.standardProjectName
                      },
                      {
                        value: "处理方式:  重新下发"
                      }, {
                        // value: '<button class="btn btn-primary btn-sm alertItemList">详情</button>'
                        value: '<button class="btn btn-primary btn-sm trusting" value="' +
                          ticketHistoryList[i].ticketTask.variables.devName + ',' +
                          ticketHistoryList[i].ticketTask.variables.deviceCode + ',' +
                          ticketHistoryList[i].ticketTask.ticketNo +
                          '">检修委托详情</button>'
                      }]
                    } else if (ticketHistoryList[i].ticketTask.values && ticketHistoryList[i].ticketTask.values.tempDealType == 4) {

                      historyList.disList = [{
                        value: "<a>临时委托</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      }, {
                        value: "处理方式: 关闭委托"
                      }, {
                        value: "关闭说明: " + ticketHistoryList[i].ticketTask.values.closeReason
                      }]

                    } else {

                      historyList.disList = [{
                        value: "<a>临时委托</a>"
                      }, {
                        value: "处理人:  " + ticketHistoryList[i].ticketTask.handlerName
                      }]
                    }
                  }


                }


                arr.push(historyList);
              }


              //   event.target.render(arr);


              function fn() {



                // 诊断分析详情的按钮
                $(".checking").on("click", function (e) {
                  event.target.createSystemPopupByLocalPath("page3", {
                    width: "800px",
                    title: "诊断分析详情",
                  }, e.target.value);
                });


                $(".dealing260").on("click", function (e) {


                  target.setValue("global/resource", ticketDealing260Data);
                  target.createSystemPopupByViewId("478671371040000", {
                    width: "80%",
                    title: "处理方案编制",
                  }, "onlyRead");


                });

                $(".dealing90").on("click", function (e) {


                  target.setValue("global/resource", ticketDealing90Data);
                  target.createSystemPopupByViewId("475059852490000", {
                    width: "80%",
                    title: "处理方案编制",
                  }, "onlyRead");


                });


                // 检修委托详情的按钮
                $(".trusting").on("click", function (e) {
                  event.target.createSystemPopupByLocalPath("page4", {
                    width: "800px",
                    title: "检修委托详情",
                  }, e.target.value);
                });

                // 维修方案的按钮
                $(".maintainingProject").on("click", function (e) {
                  var ticketNo = {
                    ticketNo: e.target.value.split(",")[3]
                  }
                  // 是否制定维修方案
                  target.postService("deviceResumeUIService", "getMaintainStandardListByCondition", ticketNo, function (tc) {
                    if (tc.data.length > 0) {
                      event.target.createSystemPopupByLocalPath("page5", {
                        width: "800px",
                        title: "维修方案",
                      }, e.target.value);

                    } else {
                      target.growl("请先制定维修方案", "warning")
                    }

                  })

                });
                // 检修实绩的按钮
                $(".repairProject").on("click", function (e) {
                  event.target.createSystemPopupByLocalPath("page6", {
                    width: "800px",
                    top: "13%",
                    title: "检修实绩",
                  }, e.target.value);
                });
                // 合并告警弹框
                $(".alertItemList").on("click", function (e) {
                  alertItemList.forEach(function (ele) {
                    ele.deviceName = deviceName;
                  });

                  target.createSystemPopupByViewId("357383633040000", {
                    "title": "报警详情",
                    "top": "10%",
                    "width": "80%",
                  }, ["alertItemList", alertItemList]);
                })

                // 报警评价
                $(".alertEvaluateInfoList").on("click", function (e) {

                  //   var alertEvaluateInfoList = JSON.parse(e.target.value);



                  target.setValue("alertEvaluateInfoList", alertEvaluateInfoList);

                  target.createSystemPopupByLocalPath("page7", {
                    width: "800px",
                    top: "13%",
                    title: "报警评价",
                  });
                })


                /**
                 *  判断如果是半总包流程分开，这里只显示验收
                 *  是全总包这里需要显示所有的信息
                 */
                $(".taskEvaluate").on("click", function (e) {


                  var Obj = JSON.parse(e.target.value);


                  if (Obj.values.alertEvaluateInfoList && Obj.values.alertEvaluateInfoList.length > 0) {

                    target.setValue("global/resource", Obj);
                    target.createSystemPopupByLocalPath("page8", {
                      width: "800px",
                      title: "验收评价",
                    }, "onlyRead");

                  } else {
                    target.setValue("global/resource", Obj);
                    target.createSystemPopupByLocalPath("page11", {
                      width: "800px",
                      title: "验收",
                    }, "onlyRead");
                  }


                })


                // 半总包的告警评价
                $(".assessingAgain").on("click", function (e) {
                  var Obj = JSON.parse(e.target.value);
                  target.setValue("global/resource", Obj);
                  target.createSystemPopupByLocalPath("page10", {
                    width: "800px",
                    title: "验收评价",
                  }, "onlyRead");

                })
                // 任务的评价
                $(".dianjianyichang").on("click", function (e) {

                  target.postService("ticketLogService", "getByTicketNo", [pointTicketNo], function (dt) {
                    target.createSystemPopupByLocalPath("page9", {
                      width: "90%",
                      title: "点检实绩登录",
                    }, dt.data[1].ticketTask);
                  })
                })
                // 当日点检
                $(".dangridianjian").on("click", function (e) {


                  target.createSystemPopupByLocalPath("page9", {
                    width: "90%",
                    title: "点检实绩登录",
                  }, dangridianjianData);


                })
              }


              var params = {
                "validUserFlag": false,
                "variables": {
                  "paramTicket._id": ticketNo
                }
              }
              target.getTicketTasksByCondition(params, function (tc) {
                if (tc.length > 0) {
                  // 知识整理
                  var knowledge = {
                    time: dateToString(new Date(ticketHistoryList[1].ticketTask.sendTime)),
                    icon: tc[0].taskStatus == 10 ? "fa fa-user bg-orange" : "fa  fa-user bg-aqua",

                    disList: [{
                      value: "<a>知识整理</a>"
                    }, {
                      value: "整理人:  " + tc[0].handlerName
                    }, {
                      value: "审核结果:  " + (tc[0].taskStatus == 10 ? "未处理" :
                        (tc[0].values.dealType == 1 ? " 知识整理" : "忽略"))
                    }]
                  };

                  if (tc[0].taskStatus == 200 && tc[0].values.dealType == 1) {
                    var item = {
                      value: "整理判断依据:  " + tc[0].values.typicalBasis.toString()
                    }
                    knowledge.disList.push(item)
                  }

                  arr.push(knowledge);
                  event.target.render(arr);
                  fn();
                } else {
                  event.target.render(arr);
                  fn();
                }
              })
            }
          })
        } else {
          event.target.render(ctrlGroups);
        }

      }
    }
  }
});