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
       
      var params = {
        deviceCode: target.getPopupData().variables.deviceCode,
        type: 0
      }
      target.postService("deviceResumeUIService", "getMaintainStandardListByCondition", params, function (tc) {

        if (tc.code == 0) {
          var standardProject = tc.data;
          var createTrust = {
            psiotDeviceId: target.getPopupData().deviceId || "",
            ticketNo: target.getPopupData().ticketNo
          };
          var render = function () {
            var ctrlGroups = [
              [{
                type: "label",
                composory: true,
                value: "标准项目编号"
              }, {
                type: "select",
                options: standardProject,
                value: standardProjectNo.id,
                on: {
                  change: function (elem) {
                    standardProjectNo = elem.value;

                    // 定年修主控/重点
                    if (elem.value.isSk == 0) {
                      isSkValue = "否"
                    } else {
                      isSkValue = "是"
                    }
                    // 工程项目名称
                    standardProjectName = elem.value.standardName;
                    // 取出质量层级
                    qualityScores = elem.value.qualityLevel;
                    // 取出高危等级
                    if (elem.value.highDangerLevel == "0") {
                      highDangerLevel = "无"
                    } else {
                      highDangerLevel = elem.value.highDangerLevel + "级";
                    }
                    ;
                    for (var i in elem.value.fileList) {
                      if (elem.value.fileList[i].type == "3") {
                        highDangerProgramsName = elem.value.fileList[i].fileName;
                      }
                    }
                    createTrust.qualityLevel = qualityScores;
                    createTrust.standardProjectId = elem.value.standardProjectNo;
                    createTrust.standardProjectName = standardProjectName;
                    createTrust.highDangerLevel = highDangerLevel;
                    createTrust.isSk = isSkValue;
                    createTrust.highDangerFileName = highDangerProgramsName;
                    render();
                  }
                },
                format: {
                  "id": "id",
                  "label": "standardProjectNo"
                }
              }, {
                type: "label",
                composory: true,
                value: "项目分类"

              }, {
                type: "select",
                options: baowuProjectType,
                on: {
                  change: function (elem) {
                    createTrust.projectType = elem.value.label;
                  }
                },
                format: {
                  "id": "id",
                  "label": "label",
                  "valueCode": "valueCode"
                }
              }, {
                type: "label",
                value: "数量"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.trustNum = elem.value;
                  }
                }
              }], [{
                type: "label",
                composory: true,
                value: "需求日期"
              }, {
                id:0,
                type: "datePicker",
                on: {
                  change: function (elem) { 
                    createTrust.propseDate = elem.value.getUTCDateString;
                  }
                }
              }, {
                type: "label",
                composory: true,
                value: "委托日期"
              }, {
                id:1,
                type: "datePicker",
                on: {
                  change: function (elem) {
                    createTrust.trustDate =  elem.value.getUTCDateString;
                  }
                }
              }, {
                type: "label",
                value: "委托人岗号"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.propseUserJobId = elem.value;
                  }
                }
              }], [{
                type: "label",
                composory: true,
                value: "请修原因"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.propseReason = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "定年修主控/重点"
              }, {
                type: "input",
                value: isSkValue,
                disabled: true,
              }, {
                type: "label",
                value: "委托单号"
              }, {
                type: "input",
                placeholder:"不修改则按规则生成",
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
                value: standardProjectName,
                disabled: true,
              }, {
                type: "label",
                composory: true,
                value: "施工类别"
              }, {
                type: "select",
                options: constructionType,
                on: {
                  change: function (elem) {
                    createTrust.constructionType = elem.value.valueCode;
                  }
                },
                format: {
                  "id": "id",
                  "label": "label",
                  "valueCode": "valueCode"
                }
              }, {
                type: "label",
                composory: true,
                value: "项目类别"
              }, {
                type: "select",
                options: baowuProjectCategory,
                on: {
                  change: function (elem) {
                    createTrust.projectCategory = elem.value.label;
                  }
                },
                format: {
                  "id": "id",
                  "label": "label",
                  "valueCode": "valueCode"
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
                colSpan: 2,
                type: "input",
                value: highDangerProgramsName,
                style: {
                  width: "400px"
                },
                disabled: true
              }], [{
                type: "label",
                composory: true,
                value: "工作内容"
              }, {
                colSpan: 3,
                type: "input",
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
                on: {
                  change: function (elem) {
                    createTrust.totalPerpsonNum = elem.value;
                  }
                }
              }], [{
                type: "label",
                composory: true,
                value: "计划编号"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.planId = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "序号"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.no = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "异常联络单编码"
              }, {
                type: "input",
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
                on: {
                  change: function (elem) {
                    createTrust.combFailureLedgerId = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "计划完工日期"
              }, {
                id:2,
                type: "datePicker",
                on: {
                  change: function (elem) {
                    createTrust.bstiRepairEndDate = elem.value.getUTCDateString;
                  }
                }
              }, {
                type: "label",
                composory: true,
                value: "建议班组名称"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.suggesTeamCode = elem.value;
                  }
                }
              }], [{
                type: "label",
                value: "负责人"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.suggesTeamName = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "备件代码"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.sparePartsCode = elem.value;
                  }
                }
              }, {
                type: "label",
                value: "备件名称"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.sparePartsName = elem.value;
                  }
                }
              }], [{
                type: "label",
                value: "预计施工日期"
              }, {
                id:3,
                type: "datePicker",
                on: {
                  change: function (elem) {
                    createTrust.estiRepairBeginDate = elem.value.getUTCDateString;
                  }
                }
              }, {
                type: "label",
                value: "备件型号"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.sparePartType = elem.value;
                  }
                }
              }, {
                type: "label",
                composory: true,
                value: "总工时"
              }, {
                type: "input",
                on: {
                  change: function (elem) {
                    createTrust.totalUseTime = elem.value;
                  }
                }
              }], [{
                type: "label",
                value: ""
              }, {
                type: "button",
                value: "提交",
                btnStyle: {
                  "width": "100px",
                  "border": "#10a4fb solid 1px"
                },
                btnclass: "btn btn-primary",
                on: {
                  click: function (elem) {

                    var promise = new Promise(function (resolve, reject) {

                      function requiredFields() {
                        if (createTrust.standardProjectId == "" || createTrust.standardProjectId == undefined) {
                          target.growl("请选择标准项目编号", "warning")
                          return false
                        }
                        if (createTrust.projectType == "" || createTrust.projectType == undefined) {
                          target.growl("请选择项目分类", "warning")
                          return false
                        }
                        if (createTrust.propseDate == "" || createTrust.propseDate == undefined) {
                          target.growl("请选择需求日期", "warning")
                          return false
                        }
                        if (createTrust.trustDate == "" || createTrust.trustDate == undefined) {
                          target.growl("请选择委托日期", "warning")
                          return false
                        }
                        if (createTrust.propseReason == "" || createTrust.propseReason == undefined) {
                          target.growl("请填写请修原因", "warning")
                          return false
                        }
                        // if (createTrust.trustId == "" || createTrust.trustId == undefined) {
                        //   target.growl("请填写委托单号", "warning")
                        //   return false
                        // }
                        if (createTrust.standardProjectName == "" || createTrust.standardProjectName == undefined) {
                          target.growl("请填写工程项目名称", "warning")
                          return false
                        }
                        if (createTrust.constructionType == "" || createTrust.constructionType == undefined) {
                          target.growl("请填写施工类别", "warning")
                          return false
                        }
                        if (createTrust.projectCategory == "" || createTrust.projectCategory == undefined) {
                          target.growl("请填写项目类别", "warning")
                          return false
                        }
                        if (createTrust.workContent == "" || createTrust.workContent == undefined) {
                          target.growl("请填写工作内容", "warning")
                          return false
                        }
                        // if (createTrust.totalPerpsonNum == undefined && isNaN(createTrust.totalPerpsonNum)) {
                        //   target.growl("总人数为数字", "warning")
                        //   return false
                        // }
                        if (createTrust.totalPerpsonNum == "" || createTrust.totalPerpsonNum == undefined) {
                         
                          target.growl("请填写总人数", "warning")
                          return false
                        } else {
                          if (isNaN(createTrust.totalPerpsonNum)) {
                            target.growl("总人数为数字", "warning")
                            return false
                          }
                          
                          if(createTrust.totalPerpsonNum<0||createTrust.totalPerpsonNum>10000){ 
                                 target.growl("请输入0～10000之间的数字", "warning")
                                 return false
                          }
                          
                        }
                        
                        
                     
                        if (createTrust.planId == "" || createTrust.planId == undefined) {
                          target.growl("请输入计划编号", "warning")
                          return false
                        }
                        if (createTrust.suggesTeamCode == "" || createTrust.suggesTeamCode == undefined) {
                          target.growl("请填写建议班组名称", "warning")
                          return false
                        }
                        if (createTrust.projectCategory == "" || createTrust.projectCategory == undefined) {
                          target.growl("请选择项目类别", "warning")
                          return false
                        }
                        if (createTrust.totalUseTime == "" || createTrust.totalUseTime == undefined) {
                          target.growl("请填写总工时", "warning")
                          return false
                        } else {
                          if (isNaN(createTrust.totalUseTime)) {
                            target.growl("工时为数字", "warning")
                            return false
                          }
                          
                          if(createTrust.totalUseTime<0||createTrust.totalUseTime>10000){ 
                                 target.growl("请输入0～10000之间的数字", "warning")
                                 return false
                          }
                        }
                        return true;
                      }

                      // 发起委托请求接口
                      if (requiredFields()) {
                        target.postService("deviceResumeUIService", "addDeviceCheckTrust", createTrust, function (tc) {
                          if (tc.code == 0) {
                            resolve(createTrust);
                          } else {
                            event.target.growl(tc.message, "info");
                          }
                        });
                      }
                    });
                    promise.then(function (e) {
                      var params = target.getPopupData();
                      params.taskStatus = 200;
                      params.values = {
                        constructionType: createTrust.constructionType,
                        dealType: 3,
                        standardProjectId: createTrust.standardProjectId,
                      };
                      delete(params.variables);
                      event.target.postService("ticketTaskService", "doTask", params, function (tc) {
                        if (tc.code == 0) {
                          event.target.growl("处理成功", "success");
                          target.trigger("search_toDolist");
                          target.trigger("inspectionLoaded");
                          target.cancel();
                        } else {
                          event.target.growl(tc.message, "info");
                        }
                      })
                    });
                  }
                }
              }, {
                type: "button",
                value: "取消",
                btnclass: "btn btn-default",
                class: "col-md-5",
                btnStyle: {
                  "width": "100px",
                  "border": "#10a4fb solid 1px"
                },
                on: {
                  click: function (elem) {
                    target.cancel();
                  }
                }
              }]
            ];
            event.target.render(ctrlGroups);
          }

          render()
        }
      })
    }
  }
}