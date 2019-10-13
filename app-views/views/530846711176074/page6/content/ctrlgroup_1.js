/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var myDicts = {};
      var protocol = window.location.protocol;
      var host = window.location.host;
      var lc = protocol + "//" + host;
      var reportAuthorized = {};
      var imagesList = [];
      var fileList = [];
      var configParam = {
        "resourceId": "5555555"
      };
      target.setValue("reportAuthorized", reportAuthorized);
      var ctrlGroups = [
        [{
          type: "label",
          class: "col-md-2",
          value: "设备告警信息",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "input",
          value: "",
          disabled: true
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "异常现象",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.abnPhenomenon = elem.value.valueCode;
              // if (event.global.detailTask.values && event.global.detailTask.values.abnPhenomenon != undefined) {
              //   event.global.detailTask.values.abnPhenomenon = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "工艺状况",
          style: {
            padding: "6px 0"
          }

        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.technicsStatus = elem.value.valueCode;
              // if (event.global.detailTask.values && event.global.detailTask.values.technicsStatus != undefined) {
              //   event.global.detailTask.values.technicsStatus = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "检测部位",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.position = elem.value.valueCode;
              // if (event.global.detailTask.values && event.global.detailTask.values.position != undefined) {
              //   event.global.detailTask.values.position = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          value: "注意事项",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "input",
          on: {
            change: function(elem) {
              reportAuthorized.attention = elem.value;
              // if (event.global.detailTask.values && event.global.detailTask.values.attention != undefined) {
              //   event.global.detailTask.values.attention = elem.value;
              // }
            }
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          value: "判断标准",
          composory: true,
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.standard = elem.value.valueCode;

              // if (event.global.detailTask.values && event.global.detailTask.values.standard != undefined) {
              //   event.global.detailTask.values.standard = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "判断依据",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "multipleSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.basis = elem.value;
              // if (event.global.detailTask.values && event.global.detailTask.values.basis != undefined) {
              //   event.global.detailTask.values.basis = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          value: "判断依据图片",
          style: {
            padding: "6px 0"
          }
        }, {
          type: "label",
          value: "",

        }, {
          type: "uploadFile2",
          icon: "glyphicon glyphicon-file",
          group: "enterprisesImages",
          url: "api/rest/upload/resourceFileUIService/uploadResourceFile",
          groupId: "uploadImg1",
          fileFormat: "png|jpg",
          formData: configParam,
          style: {
            width: "300px",
            textAlign: "center"
          },
          text: "上传图片",
          on: {
            submit: function(elem) {
              var pictureObj = {
                label: elem.label,
                value: elem.value.qualifiedName
              }
              imagesList.push(pictureObj);
              reportAuthorized.basisImage = imagesList;
              $("#uploadImg1").parent().parent().siblings().eq(1).find("span:last")
                .append(
                  '<div><a target="_blank" href = "' + elem.value.qualifiedName + '">' + elem.label +
                  '</a><p data-value="' + elem.label + '" style="margin-left: 20px" class="glyphicon glyphicon-remove remove-icon"></p></div>');
              event.target.growl("上传文件成功", "success");
              // 删除文件
              $('.remove-icon').click(function(e) {
                $(this).parent().remove();
                for (var i = 0; i < reportAuthorized.basisImage.length; i++) {
                  if (reportAuthorized.basisImage[i].label == $(this).attr("data-value")) {
                    reportAuthorized.basisImage.splice(i, 1);
                    break;
                  }
                }
                
                event.target.growl("删除成功", "success");
              })


            }
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "综合状态等级",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "select",
          value: "请选择",
          options: [],
          on: {
            change: function(elem) {
              reportAuthorized.statusGrade = elem.value.valueCode;
              // if (event.global.detailTask.values && event.global.detailTask.values.statusGrade != undefined) {
              //   event.global.detailTask.values.statusGrade = elem.value.valueCode;
              // }
            }
          },
          format: {
            "id": "valueCode",
            "label": "label",
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          value: "异常部位",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.abnPosition = elem.value.valueCode;
              // if (event.global.detailTask.values && event.global.detailTask.values.abnPosition != undefined) {
              //   event.global.detailTask.values.abnPosition = elem.value.valueCode;
              // }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "异常类型",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "select",
          value: "请选择",
          on: {
            change: function(elem) {
              reportAuthorized.abnType = elem.value.valueCode;
              //   if (event.global.detailTask.values && event.global.detailTask.values.abnType != undefined) {
              //     event.global.detailTask.values.abnType = elem.value.valueCode;
              //   }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        /*
        [{
          type: "label",
          class: "col-md-2",
          value: "故障产生原因"
        }, {
          colSpan: 2,
          type: "select",
          value: "请选择",
          on: {
            change: function (elem) {
              reportAuthorized.failureRepairReson = elem.value.valueCode;
              //   if (event.global.detailTask.values && event.global.detailTask.values.failureRepairReson != undefined) {
              //     event.global.detailTask.values.failureRepairReson = elem.value.valueCode;
              //   }
            }
          },
          options: [],
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],*/
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "综合判断结论",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          options: [],
          on: {
            change: function(elem) {
              reportAuthorized.multipleConclusion = elem.value.valueCode;
              //   if (event.global.detailTask.values && event.global.detailTask.values.multipleConclusion != undefined) {
              //     event.global.detailTask.values.multipleConclusion = elem.value.valueCode;
              //   }
            }
          },
          format: {
            "id": "valueCode",
            "label": "label"
          }
        }],
        [{
          type: "label",
          class: "col-md-2",
          composory: true,
          value: "处理方案建议",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "inputableSelect",
          value: "请选择",
          options: [],
          on: {
            change: function(elem) {
              reportAuthorized.cessingScheme = elem.value.valueCode;
              //   if (event.global.detailTask.values && event.global.detailTask.values.cessingScheme != undefined) {
              //     event.global.detailTask.values.cessingScheme = elem.value.valueCode;
              //   }
            }
          },
          format: {
            "id": "valueCode",
            "label": "label",
            style: {
              padding: "6px 0"
            }
          }
        }],
        /*[
                 {
                   type: "label",
                   value: "审核人",
                   class: "col-md-2",
                    style:{
                   padding:"6px 0"
               }
                 }, {
                   colSpan: 2,
                   type: "label",
                   value: ""
                 }],*/
        [{
          type: "label",
          value: "备注",
          class: "col-md-2",
          style: {
            padding: "6px 0"
          }
        }, {
          colSpan: 2,
          type: "textarea",
          on: {
            change: function(elem) {
              reportAuthorized.remark = elem.value;
              //   if (event.global.detailTask.values && event.global.detailTask.values.remark != undefined) {
              //     event.global.detailTask.values.remark = elem.value;
              //   }
            }
          }
        }],
        [{
          type: "label",
          value: "附件",
          style: {
            padding: "6px 0"
          }
        }, {
          type: "label",
          value: "",

        }, {
          type: "uploadFile2",
          icon: "glyphicon glyphicon-file",
          group: "enterprisesImages",
          url: "api/rest/upload/resourceFileUIService/uploadResourceFile",
          groupId: "uploadImg2",
          fileFormat: "txt|xlsx|docx|pdf|doc|png|jpg",
          formData: configParam,
          style: {
            width: "300px",
            textAlign: "center"
          },
          on: {
            submit: function(elem) {

              var fileObj = {
                label: elem.label,
                value: elem.value.qualifiedName
              }
              fileList.push(fileObj);
              reportAuthorized.attUpload = fileList;
              $("#uploadImg2").parent().parent().siblings().eq(1).find("span:last")
                .append(
                  '<div><a target="_blank" href = "' + elem.value.qualifiedName + '">' + elem.label +
                  '</a><p data-value="' + elem.label + '" style="margin-left: 20px" class="glyphicon glyphicon-remove remove-icon"></p></div>');
              event.target.growl("上传文件成功", "success");
              // 删除文件
              $('.remove-icon').click(function(e) {
                $(this).parent().remove();
                for (var i = 0; i < reportAuthorized.attUpload.length; i++) {
                  if (reportAuthorized.attUpload[i].label == $(this).attr("data-value")) {
                    reportAuthorized.attUpload.splice(i, 1);
                    break;
                  }
                }
                
                event.target.growl("删除成功", "success");
              })


            }
          }
        }]

      ];

      // 获取所有的字典表     
      event.target.postService("dictionaryService", "getAllDicts", [], function(returnObj) {
        if (returnObj.code == 0) {
          var dic = {};
          for (var i in returnObj.data) {
            var obj = returnObj.data[i];
            if (dic[obj.dictCode]) {
              dic[obj.dictCode].push(obj);
            } else {
              dic[obj.dictCode] = [];
              dic[obj.dictCode].push(obj);
            }
          }
          for (var items in dic) {
            myDicts[items] = dic[items];
          }
          ctrlGroups[1][1].options = myDicts["abnPhenomenon"];
          ctrlGroups[2][1].options = myDicts["technicsStatus"];
          ctrlGroups[3][1].options = myDicts["position"];
          ctrlGroups[4][1].options = myDicts["attention"];
          ctrlGroups[5][1].options = myDicts["standard"];
          ctrlGroups[6][1].options = myDicts["basis"];
          ctrlGroups[8][1].options = myDicts["statusGrade"];
          ctrlGroups[9][1].options = myDicts["abnPosition"];
          ctrlGroups[10][1].options = myDicts["abnType"];
          //   ctrlGroups[11][1].options = myDicts["failureRepairReson"];
          ctrlGroups[11][1].options = myDicts["multipleConclusion"];
          ctrlGroups[12][1].options = myDicts["cessingScheme"];
          target.render(ctrlGroups);
        }
      })


      // 获取设备告警信息

      // var ticket = target.getParameter("ticket");
      var resource = target.getPopupData();

      if (resource) {
        ctrlGroups[0][1].value = resource.ticketTitle;
        reportAuthorized.alertTitle = resource.ticketTitle;
        //  event.global.detailTask.values.alertTitle = resource.ticketTitle;

        //  event.global.detailTask.values.alertTitle = resource.ticketTitle;
        //  event.global.fire("savetask", {taskId: ticket});
        target.render(ctrlGroups);
        // 获取审核人
        var params = {
          loginName: resource.variables.AuditPerson
        }
        target.postService("userUIService", "queryUserByCondition", params, function(tc) {
          if (tc.data) {
            ctrlGroups[13][1].value = tc.data[0].userName;
            reportAuthorized.userName = tc.data[0].userName;
            // if (event.global.detailTask.values && event.global.detailTask.values.userName != undefined) {
            //   event.global.detailTask.values.userName = fileList;
            // }
            target.render(ctrlGroups);
          }
        })
      }


    }
  }
}