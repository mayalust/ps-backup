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


      var standardInfo = target.getPopupData().variables.standardInfo;


      var createTrust = {};
      
      // 取出高危等级
      if(standardInfo.highDangerLevel == null){
           highDangerLevel = ""
      }else if(standardInfo.highDangerLevel == "0") {
        highDangerLevel = "无"
      } else {
        highDangerLevel = elem.value.highDangerLevel + "级";
      }

      createTrust.ticketNo = target.getPopupData().ticketNo;
      createTrust.standardProjectId = standardInfo.standardProjectId;
      createTrust.standardProjectName = standardInfo.standardProjectName;
      createTrust.constructionType = standardInfo.constructionType;
      createTrust.projectCategory = standardInfo.projectCategory;
      createTrust.qualityLevel = standardInfo.qualityLevel;
      createTrust.highDangerLevel = standardInfo.highDangerLevel;
      createTrust.workContent = standardInfo.workContent;
      createTrust.suggesTeamCode = standardInfo.suggesTeamCode;
      createTrust.trustDate = moment(new Date()).utc().format();
      //获取当前的用户
      createTrust.propseUserJobId = target.getCurrentUser().userName;
      createTrust.totalPerpsonNum = standardInfo.totalPerpsonNum;
      createTrust.totalUseTime = standardInfo.totalUseTime;
      createTrust.projectType = "常规";
      //  createTrust.workContent = standardInfo.workContent; 


      // 施工类别
      var constructionTypeId = constructionType.find(function (elem) {
        if (elem.label == standardInfo.constructionType) {
          return elem.id
        }
      })
      // 项目类别
      var projectCategoryId = baowuProjectCategory.find(function (elem) {
        if (elem.label == standardInfo.projectCategory) {
          return elem.id
        }
      })


      var render = function () {
        target.setValue("createTrust", createTrust);
        var ctrlGroups = [
          [{
            type: "label",
            composory: true,
            value: "标准项目编号"
          }, {
            type: "input",
            disabled: true,
            value: createTrust.standardProjectId,
          }, {
            type: "label",
            composory: true,
            value: "项目分类"

          }, {
            type: "select",
            value:"313001",
            options: baowuProjectType,
            on: {
              change: function (elem) {
                createTrust.projectType = elem.value.valueCode;
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
            value: "委托日期"
          }, {
            id: 1,
            value: new Date(),
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
            on: {
              change: function (elem) {
                createTrust.isSk = elem.value.id;
              }
            },
            format: {
              "id": "id",
              "label": "label",
            }
          }, {
            type: "label",
            value: "委托单号"
          }, {
            type: "input",
            placeholder: "不修改则按规则生成",
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
            value: constructionTypeId.id,
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
            value: projectCategoryId.id,
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
            value: createTrust.qualityLevel+"类",
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
            id: 2,
            type: "datePicker",
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
  }
}