/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      // 获取字典表的内容 项目类别|项目分类|施工类别
      var baowuProjectCategory = target.getRootScope("myDicts")["baowuProjectCategory"];
      var baowuProjectType = target.getRootScope("myDicts")["baowuProjectType"];
      var constructionType = target.getRootScope("myDicts")["constructionType"];
      // 定义工程项目名称，标准项目编号，质量层级，高危等级,定年修主控/重点
      var standardProjectName, standardProjectNo = {}, highDangerPrograms, qualityScores,
        highDangerProgramsName, highDangerLevel, isSkValue;
        
        
        
      var type = "select"
      // 判断是不是发起临时委托和检修计划
      if(target.getPopupData().variables.ticket.category=="120"){
          type = "input";
      }


      var params = {
        deviceId: target.getPopupData().deviceId,
        ticketCategory: "120"
      }
      target.getTaskByCondition(params, function (tc) {
        // 0 是标准 1 是历史维修方案
        var standardProject = tc.filter(function (ele) {
          return ele.maintainStandard.type == "0"
        })
        // 查询临时委托
        target.postService("deviceResumeUIService", "getDeviceCheckTrustByCondition", {ticketNo: target.getPopupData().ticketNo}, function (tc) {
          if (tc.code == 0) {
            var createTrust = tc.data[0];
            standardProjectNo = createTrust.standardProjectId;
            
            
             // 取出质量层级
             qualityScores = createTrust.qualityLevel + "类";

              // 取出高危等级
             if(createTrust.highDangerLevel == null){
                  highDangerLevel = ""
             }else if(createTrust.highDangerLevel == "0") {
               highDangerLevel = "无"
             } else {
               highDangerLevel = createTrust.highDangerLevel + "级";
             }
        


            // var createTrust = {
            //   psiotDeviceId: target.getPopupData().deviceId || "",
            //   ticketNo: target.getPopupData().ticketNo,
            //   trustDate: useMomentFormat(new Date(), "yyyy-MM-dd hh:mm:ss"),
            //   projectType: "常规"
            // };
            
            
             var standardProjecthistoryHistory = {
                  standardProjectNo: standardProjectNo,
             }
             target.trigger("standardProject", standardProjecthistoryHistory);


            var render = function () {
              target.setValue("createTrust", createTrust);
              var ctrlGroups = [
                [{
                  type: "label",
                  composory: true,
                  value: "标准项目编号"
                }, {
                  type: type,
                  disabled:true,
                  options: standardProject,
                  value: standardProjectNo,
                  on: {
                    change: function (elem) {
                      standardProjectNo = elem.value.standardProjectId;

                      // 工程项目名称
                      standardProjectName = elem.value.standardProjectName;
                      // 取出质量层级
                      qualityScores = elem.value.qualityLevel+"类";

                      // 取出高危等级
                     if(elem.value.highDangerLevel == null){
                          highDangerLevel = ""
                     }else if(elem.value.highDangerLevel == "0") {
                       highDangerLevel = "无"
                     } else {
                       highDangerLevel = elem.value.highDangerLevel + "级";
                     }

                      // 施工类别
                      createTrust.constructionType = elem.value.constructionType;
                      // 项目类别
                      createTrust.projectCategory = elem.value.projectCategory;
                      createTrust.qualityLevel = elem.value.qualityLevel;
                      createTrust.standardProjectId = elem.value.standardProjectId;
                      createTrust.standardProjectName = standardProjectName;
                      createTrust.highDangerLevel = elem.value.highDangerLevel;
                      // 获取当前的用户
                      createTrust.propseUserJobId = target.getCurrentUser().userName;
                      //   createTrust.highDangerFileName = highDangerProgramsName;
                      // 建议施工班组
                      createTrust.suggesTeamCode = elem.value.suggesTeamCode;
                      // 工作内容
                      createTrust.workContent = elem.value.workContent;
                      // 总人数
                      createTrust.totalPerpsonNum = elem.value.totalPerpsonNum;
                      // 总工时
                      createTrust.totalUseTime = elem.value.totalUseTime;

                      var standardProject = {
                        standardProjectNo: elem.value.standardProjectId,
                        deviceCode: target.getPopupData().deviceCode
                      }
                      target.trigger("standardProject", standardProject);
                      render();
                    }
                  },
                  format: {
                    "id": "standardProjectId",
                    "label": "standardProjectId"
                  }
                }, {
                  type: "label",
                  composory: true,
                  value: "项目分类"

                }, {
                  type: "select",
                  value: createTrust.projectType,
                  options: baowuProjectType,
                  on: {
                    change: function (elem) {
                      createTrust.projectType = elem.value.valueCode;
                    }
                  },
                  format: {
                    "id": "valueCode",
                    "label": "label",
                    "valueCode": "valueCode"
                  }
                }, {
                  type: "label",
                  value: "数量"
                }, {
                  type: "input",
                  value: createTrust.trustNum,
                  on: {
                    change: function (elem) {
                      createTrust.trustNum = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  composory: true,
                  value: "委托日期"
                }, {
                  id: 1,
                  value: createTrust.trustDate ? useMomentFormat(createTrust.trustDate, "yyyy-MM-dd hh:mm:ss") : new Date(),
                  type: "datePicker",
                  on: {
                    change: function (elem) {
                      createTrust.trustDate = elem.value.getUTCDateString;
                    }
                  }
                }, {
                  type: "label",
                  value: "委托人"
                }, {
                  type: "input",
                  value: createTrust.propseUserJobId,
                  on: {
                    change: function (elem) {
                      createTrust.propseUserJobId = elem.value;
                    }
                  }
                }, {
                  type: "label",
                  value: "负责人"
                }, {
                  type: "input",
                  value: createTrust.suggesTeamName,
                  on: {
                    change: function (elem) {
                      createTrust.suggesTeamName = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  composory: true,
                  value: "请修原因"
                }, {
                  type: "input",
                  value: createTrust.propseReason,
                  on: {
                    change: function (elem) {
                      createTrust.propseReason = elem.value;
                    }
                  }
                }, {
                  type: "label",
                  value: "定年修主控/重点",
                }, {
                  type: "select",
                  options: [{
                    id: 0,
                    label: "否"
                  }, {
                    id: 1,
                    label: "是"
                  }],
                  value: createTrust.isSk,
                  on: {
                    change: function (elem) {
                      createTrust.isSk = elem.value.id;
                    }
                  },
                  format: {
                    "id": "id",
                    "label": "label"
                  }
                }, {
                  type: "label",
                  composory: true,
                  value: "委托单号"
                }, {
                  type: "input",
                  value: createTrust.trustId,
                  on: {
                    change: function (elem) {
                      createTrust.trustId = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  value: "工程项目名称"
                }, {
                  type: "input",
                  value: createTrust.standardProjectName,
                  disabled: true,
                }, {
                  type: "label",
                  composory: true,
                  value: "施工类别"
                }, {
                  type: "select",
                  value: createTrust.constructionType,
                  options: constructionType,
                  on: {
                    change: function (elem) {
                      createTrust.constructionType = elem.value.valueCode;
                    }
                  },
                  format: {
                    "id": "valueCode",
                    "label": "label",
                  }
                }, {
                  type: "label",
                  composory: true,
                  value: "项目类别"
                }, {
                  type: "select",
                  value: createTrust.projectCategory,
                  options: baowuProjectCategory,
                  on: {
                    change: function (elem) {
                      createTrust.projectCategory = elem.value.label;
                    }
                  },
                  format: {
                    "id": "valueCode",
                    "label": "label"
                  }
                }], [{
                  type: "label",
                  value: "质量层级"
                }, {
                  type: "input",
                  value: qualityScores,
                  disabled: true,
                }, {
                  type: "label",
                  value: "高危等级"
                }, {
                  type: "input",
                  value: highDangerLevel,
                  disabled: true
                }, {
                  type: "label",
                  composory: true,
                  value: "建议施工班组"
                }, {
                  type: "input",
                  value: createTrust.suggesTeamCode,
                  on: {
                    change: function (elem) {
                      createTrust.suggesTeamCode = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  composory: true,
                  value: "工作内容"
                }, {
                  colSpan: 3,
                  type: "input",
                  hideExtraText: "370px",
                  value: createTrust.workContent,
                  on: {
                    change: function (elem) {
                      createTrust.workContent = elem.value;
                    }
                  }
                }, {
                  type: "label",
                  composory: true,
                  value: "总人数"
                }, {
                  type: "input",
                  value: createTrust.totalPerpsonNum,
                  on: {
                    change: function (elem) {
                      createTrust.totalPerpsonNum = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  composory: true,
                  value: "预计施工日期"
                }, {
                  id: 3,
                  type: "datePicker",
                  value: useMomentFormat(createTrust.estiRepairBeginDate, "yyyy-MM-dd hh:mm:ss"),
                  on: {
                    change: function (elem) {
                      createTrust.estiRepairBeginDate = elem.value.getUTCDateString;
                    }
                  }
                }, {
                  type: "label",
                  composory: true,
                  value: "总工时"
                }, {
                  type: "input",
                  value: createTrust.totalUseTime,
                  on: {
                    change: function (elem) {
                      createTrust.totalUseTime = elem.value;
                    }
                  }
                }, {
                  type: "label",
                  value: "异常联络单编码"
                }, {
                  type: "input",
                  value: createTrust.abnNo,
                  on: {
                    change: function (elem) {
                      createTrust.abnNo = elem.value;
                    }
                  }
                }], [{
                  type: "label",
                  value: "故障台编号"
                }, {
                  type: "input",
                  value: createTrust.combFailureLedgerId,
                  on: {
                    change: function (elem) {
                      createTrust.combFailureLedgerId = elem.value;
                    }
                  }
                }, {
                  type: "label",
                  value: "计划完工日期"
                }, {
                  id: 2,
                  type: "datePicker",
                  value: createTrust.bstiRepairEndDate ? useMomentFormat(createTrust.bstiRepairEndDate, "yyyy-MM-dd hh:mm:ss") : "",
                  on: {
                    change: function (elem) {
                      createTrust.bstiRepairEndDate = elem.value.getUTCDateString;
                    }
                  }
                }]
              ];
              event.target.render(ctrlGroups);
            }
            render()


          }
        })


      })

    }
  }
}