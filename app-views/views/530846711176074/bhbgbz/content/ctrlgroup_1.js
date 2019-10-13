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
      var basisImageStr = "",
        attUploadStr = "";
      var ctrlGroups;
      var configParam = {
        "resourceId": "5555555"
      };


      // 请求回来的数据
      var taskId = event.target.getPopupData();

      var abnPhenomenons = target.getRootScope("myDicts")["abnPhenomenon"];
      var technicsStatus = target.getRootScope("myDicts")["technicsStatus"];
      var positions = target.getRootScope("myDicts")["position"];
      var standards = target.getRootScope("myDicts")["standard"];
      var basises = target.getRootScope("myDicts")["basis"];
      var statusGrades = target.getRootScope("myDicts")["statusGrade"];
      var abnType = target.getRootScope("myDicts")["abnType"];
      var abnPositions = target.getRootScope("myDicts")["abnPosition"];
      var multipleConclusions = target.getRootScope("myDicts")["multipleConclusion"];
      var cessingSchemes = target.getRootScope("myDicts")["cessingScheme"];



      if (taskId) {
        event.target.postService("ticketTaskService", "getTicketTaskById", taskId.id, function(tc) {

          if (tc.code == 0) {

            ctrlGroupsObj = tc.data.variables;

            reportAuthorized = {
              alertTitle: ctrlGroupsObj.alertTitle,
              abnPhenomenon: ctrlGroupsObj.abnPhenomenon,
              technicsStatus: ctrlGroupsObj.technicsStatus,
              position: ctrlGroupsObj.position,
              attention: ctrlGroupsObj.attention,
              standard: ctrlGroupsObj.standard,
              basis: ctrlGroupsObj.basis,
              basisImage: ctrlGroupsObj.basisImage,
              statusGrade: ctrlGroupsObj.statusGrade,
              abnPosition: ctrlGroupsObj.abnPosition,
              abnType: ctrlGroupsObj.abnType,
              //   failureRepairReson: ctrlGroupsObj.failureRepairReson,
              multipleConclusion: ctrlGroupsObj.multipleConclusion,
              cessingScheme: ctrlGroupsObj.cessingScheme,
              userName: ctrlGroupsObj.userName,
              remark: ctrlGroupsObj.remark,
            }
            target.setValue("reportAuthorized", reportAuthorized);
            // 获取图片
            if (ctrlGroupsObj.basisImage) {
              var arr = ctrlGroupsObj.basisImage;
              imagesList = ctrlGroupsObj.basisImage;
              // reportAuthorized.attUpload =  ctrlGroupsObj.basisImage;
              for (var j in arr) {
                basisImageStr += '<div><a target="_blank" href = "' + arr[j].value + '">' + arr[j].label +
                  '</a><p data-value="' + arr[j].label + '" style="margin-left: 20px" class="glyphicon glyphicon-remove remove-icon"></p></div>'
              }
            }

            if (ctrlGroupsObj.attUpload) {

              fileList = ctrlGroupsObj.attUpload;
              // reportAuthorized.attUpload =  ctrlGroupsObj.basisImage;
              for (var j in fileList) {
                attUploadStr += '<div><a target="_blank" href = "' + fileList[j].value + '">' + fileList[j].label +
                  '</a><p data-value="' + fileList[j].label + '" style="margin-left: 20px" class="glyphicon glyphicon-remove remove-icon"></p></div>'
              }
            }

            ctrlGroups = [
              [{
                type: "label",
                class: "col-md-2",
                value: "设备告警信息"
              }, {
                colSpan: 2,
                type: "input",
                value: ctrlGroupsObj.alertTitle,
                disabled: true,
                style: {
                  padding: "6px 0"
                }
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
                value: ctrlGroupsObj.abnPhenomenon,
                on: {
                  change: function(elem) {
                    reportAuthorized.abnPhenomenon = elem.value.valueCode;
                  }
                },
                options: abnPhenomenons,
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
                value: ctrlGroupsObj.technicsStatus,
                on: {
                  change: function(elem) {
                    reportAuthorized.technicsStatus = elem.value.valueCode;

                  }
                },
                options: technicsStatus,
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
                value: ctrlGroupsObj.position,
                on: {
                  change: function(elem) {
                    reportAuthorized.position = elem.value.valueCode;
                  }
                },
                options: positions,
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
                value: ctrlGroupsObj.attention,
                on: {
                  change: function(elem) {
                    reportAuthorized.attention = elem.value;
                  }
                }
              }],
              [{
                type: "label",
                class: "col-md-2",
                composory: true,
                value: "判断标准",
                style: {
                  padding: "6px 0"
                }
              }, {
                colSpan: 2,
                type: "inputableSelect",
                value: ctrlGroupsObj.standard,
                on: {
                  change: function(elem) {
                    reportAuthorized.standard = elem.value.valueCode;
                  }
                },
                options: standards,
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
                type: "inputableSelect",
                value: ctrlGroupsObj.basis,
                on: {
                  change: function(elem) {
                    reportAuthorized.basis = elem.value.valueCode;
                  }
                },
                options: basises,
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
                type: "customHtml",
                value: basisImageStr, //basisImage
              }, {
                type: "uploadFile2",
                icon: "glyphicon glyphicon-file",
                group: "enterprisesImages",
                url: "api/rest/upload/resourceFileUIService/uploadResourceFile",
                groupId: "uploadImg1",
                fileFormat: "png|jpg",
                formData: configParam,
                text: "上传图片",
                style: {
                  width: "300px",
                  textAlign: "center"
                },
                on: {
                  submit: function(elem) {
                    var pictureObj = {
                      label: elem.label,
                      value: elem.value.qualifiedName
                    }
                    imagesList.push(pictureObj);
                    reportAuthorized.basisImage = imagesList;
                    $("#uploadImg1").parent().parent().siblings().eq(1).find("div:first")
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
                value: ctrlGroupsObj.statusGrade,
                options: statusGrades,
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
                value: ctrlGroupsObj.abnPosition ? ctrlGroupsObj.abnPosition : "",
                on: {
                  change: function(elem) {
                    reportAuthorized.abnPosition = elem.value.valueCode;

                  }
                },
                options: abnPositions,
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
                type: "inputableSelect",
                value: ctrlGroupsObj.abnType ? ctrlGroupsObj.abnType : "",
                on: {
                  change: function(elem) {
                    reportAuthorized.abnType = elem.value.valueCode;

                  }
                },
                options: abnType,
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
                value: ctrlGroupsObj.failureRepairReson,
                on: {
                  change: function (elem) {
                    reportAuthorized.failureRepairReson = elem.value.valueCode;

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
                value: ctrlGroupsObj.multipleConclusion,
                options: multipleConclusions,
                on: {
                  change: function(elem) {
                    reportAuthorized.multipleConclusion = elem.value.valueCode;
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
                value: ctrlGroupsObj.cessingScheme,
                options: cessingSchemes,
                on: {
                  change: function(elem) {
                    reportAuthorized.cessingScheme = elem.value.valueCode;
                  }
                },
                format: {
                  "id": "valueCode",
                  "label": "label"
                }
              }],
              /* [
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
                                value: ctrlGroupsObj.userName,
                              }], */
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
                value: ctrlGroupsObj.remark,
                on: {
                  change: function(elem) {
                    reportAuthorized.remark = elem.value;

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
                type: "customHtml",
                value: attUploadStr, //attUpload
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
                    $("#uploadImg2").parent().parent().siblings().eq(1).find("div:first")
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

            target.render(ctrlGroups);
          }


        })
      }


      //   // 获取所有的字典表     
      //   event.target.postService("dictionaryService", "getAllDicts", [], function (returnObj) {
      //     if (returnObj.code == 0) {
      //       var dic = {};
      //       for (var i in returnObj.data) {
      //         var obj = returnObj.data[i];
      //         if (dic[obj.dictCode]) {
      //           dic[obj.dictCode].push(obj);
      //         } else {
      //           dic[obj.dictCode] = [];
      //           dic[obj.dictCode].push(obj);
      //         }
      //       }
      //       for (var items in dic) {
      //         myDicts[items] = dic[items];
      //       }
      //       ctrlGroups[1][1].options = myDicts["abnPhenomenon"];
      //       ctrlGroups[2][1].options = myDicts["technicsStatus"];
      //       ctrlGroups[3][1].options = myDicts["position"];
      //       ctrlGroups[4][1].options = myDicts["attention"];
      //       ctrlGroups[5][1].options = myDicts["standard"];
      //       ctrlGroups[6][1].options = myDicts["basis"];
      //       ctrlGroups[8][1].options = myDicts["statusGrade"];
      //       ctrlGroups[9][1].options = myDicts["abnPosition"];
      //       ctrlGroups[10][1].options = myDicts["abnType"];
      //     //   ctrlGroups[11][1].options = myDicts["failureRepairReson"];
      //       ctrlGroups[12][1].options = myDicts["multipleConclusion"];
      //       ctrlGroups[13][1].options = myDicts["cessingScheme"];
      //       target.render(ctrlGroups);
      //     }
      //   })


      // 获取设备告警信息

      //   var resource = target.getPopupData();

      //   if (resource) {
      //     ctrlGroups[0][1].value = resource.ticketTitle;
      //     reportAuthorized.alertTitle = resource.ticketTitle;

      //     target.render(ctrlGroups);
      //     // 获取审核人
      //     var params = {
      //       loginName: resource.variables.AuditPerson
      //     }
      //     target.postService("userUIService", "queryUserByCondition", params, function (tc) {
      //       if (tc.data) {
      //         ctrlGroups[14][1].value = tc.data[0].userName;
      //         reportAuthorized.userName = tc.data[0].userName;
      //         // if (event.global.detailTask.values && event.global.detailTask.values.userName != undefined) {
      //         //   event.global.detailTask.values.userName = fileList;
      //         // }
      //         target.render(ctrlGroups);
      //       }
      //     })
      //   }


    }
  }
}