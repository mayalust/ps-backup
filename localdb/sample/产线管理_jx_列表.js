expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var scope = target.getRootScope();
      var resource = target.getValue("global/resource");

      // 获取所有的用户
      var values = {
        "totalUseTime": ""
      };
      var getAllUserInfo = target.getRootScope("getAllUserInfo");
      var roleList = [];
      getAllUserInfo.forEach(function(ele) {
        if(ele.roleID) {
          if(ele.roleID.indexOf("127260997560018") > -1) {
            roleList.push(ele);
          }
        }
      })

      var taskStatusAry = [{
        id: 0,
        label: "启用"
      }, {
        id: 1,
        label: "停用"
      }]

      var format = [{
        name: "standardProjectId", //values.totalPerpsonNum   standardProjectId
        label: "标准项目编号",
        composory: true,
        index: 0
      }, {
        name: "standardProjectName",
        label: "标准项目名称",
        composory: true,
        index: 1
      }, {
        name: "constructionType",
        label: "施工类别",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.constructionType) {
            item = scope.myDicts.constructionType.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.constructionType,
        index: 3
      }, {
        name: "projectCategory",
        label: "项目类别",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.baowuProjectCategory) {
            item = scope.myDicts.baowuProjectCategory.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.baowuProjectCategory,
        index: 5
      }, {
        name: "executionCycle",
        label: "周期单位",
        composory: true,
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.executionCycle,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.executionCycle) {
            item = scope.myDicts.executionCycle.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        index: 12
      }, {
        name: "cycleNum",
        label: "周期间隔",
        composory: true,
        index: 13
      }, {
        name: "workType",
        label: "工事分类",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.msWorkType) {
            item = scope.myDicts.msWorkType.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.msWorkType,
        index: 4
      }, {
        name: "highDangerLevel",
        label: "高危等级",
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.highDangerLevel) {
            item = scope.myDicts.highDangerLevel.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.highDangerLevel,
        index: 6
      }, {
        name: "qualityLevel",
        label: "质量层级",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.qualityLevel) {
            item = scope.myDicts.qualityLevel.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.qualityLevel,
        index: 9
      }, {
        name: "theMark",
        label: "双高/精度/离线标记",
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.msTheMark) {
            item = scope.myDicts.msTheMark.find(function(item) {
              if(item.valueCode == data) return item;
            })
          }
          if(item) {
            return item.label;
          }
          return data;
        },
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.msTheMark,
        hide: true,
        index: 7
      }, {
        name: "executioner",
        label: "点检员",
        composory: true,
        popuptype: "select",
        selectId: "userID",
        selectLabel: "userName",
        options: roleList,
        render: function(data, type, full) {
          var item;
          if(roleList) {
            var item = roleList.find(function(item) {
              if(item.userID == data) return item;
            })
          }
          if(item) {
            return item.userName;
          }
          return data;
        },
        index: 2
      }, {
        name: "suggesTeamCode",
        label: "建议施工班组",
        composory: true,
        index: 8
      }, {
        name: "firstExecutionTime",
        hide: true,
        label: "开始时间",
        composory: true,
        type: "date",
        popuptype: "datePicker",
        index: 14
      }, {
        name: "taskStatus",
        label: "是否启用",
        popuptype: "select",
        selectId: "id",
        selectLabel: "label",
        options: taskStatusAry,
        render: function(data, type, full) {
          var item = taskStatusAry.find(function(item) {
            if(item.id == data) return item;
          })
          if(item) {
            return item.label;
          }
          return data;
        },
        index: 15
      }, {
        name: "totalPerpsonNum",
        label: "总人数",
        composory: true,
        hide: true,
        index: 16,
      }, {
        name: "totalUseTime",
        label: "总工时(h)",
        hide: true,
        composory: true,
        index: 17
      }, {
        name: "specialDeviceNo",
        label: "特种设备编号",
        hide: true,
        index: 10
      }, {
        name: "workContent",
        label: "工作内容",
        composory: true,
        stretch: true,
        hide: true,
        index: 11
      }, {
        label: "操作",
        type: "buttonGroup",
        content: [{
          label: "详情",
          icon: "null",
          on: {
            click: function(index, row, columnIndex) {
              popupHandler(index.row, 0);
            }
          }
        }, {
          label: "编辑",
          icon: "null",
          on: {
            click: function(index, row, columnIndex) {
              popupHandler(index.row, 1);
            }
          }
        }, {
          label: "删除",
          icon: "null",
          on: {
            click: function(index, row, columnIndex) {
              target.deleteMaintainStandardTask(index.row.id, function(returnObj) {
                if(returnObj.code == 0) {
                  target.growl("删除成功");
                  readerData();
                }
              })
            }
          }
        }]
      }]
      var format2 = [{
        name: "maintainStandard.referenceImageNumber",
        label: "参考图号",
        index: 0
      }, {
        name: "1",
        label: "维修作业标准",
        popuptype: "uploadFile2",
        stretch: true,
        manual: true,
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        index: 1
      }, {
        name: "2",
        label: "质量层级表",
        popuptype: "uploadFile2",
        stretch: true,
        manual: true,
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        index: 4
      }, {
        name: "3",
        label: "高危技术方案",
        popuptype: "uploadFile2",
        stretch: true,
        manual: true,
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        index: 5
      }, {
        name: "4",
        label: "检修安全技术交底",
        popuptype: "uploadFile2",
        stretch: true,
        manual: true,
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        index: 3
      }, {
        name: "5",
        label: "工时工序表",
        stretch: true,
        popuptype: "uploadFile2",
        manual: true,
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        index: 2
      }]
      var render = function(workArray) {
        //只有让有hide=false的传递到datatable
        var tablefmt = format.filter(function(fmt) {
          if(!fmt.hide) return fmt;
        })
        target.render({
          data: workArray,
          format: tablefmt.map(function(elem) {
            return {
              "name": elem.label,
              "value": elem.name,
              "type": elem.type || "text",
              "content": elem.content,
              "render": elem.render
            }
          })
        });
      }

      var popupHandler = function(inputparam, status) {
        if(!inputparam.maintainStandard) inputparam.maintainStandard = {};
        format2.forEach(function(elem) {
          elem.text = "";
          elem.path = "";
        })

        if(inputparam.maintainStandard.fileList) {
          inputparam.maintainStandard.fileList.forEach(function(item) {
            format2.forEach(function(fmt) {
              if(item.type == fmt.name) {
                fmt.text = item.fileName;
                fmt.path = item.filePath;
              }
            })
          })
        }

        //只有让有index的传递到popup
        var objfmt = format.filter(function(fmt) {
          if(fmt.index != undefined) return fmt;
        })
        var objfmt2 = format2.filter(function(fmt) {
          if(fmt.index != undefined) return fmt;
        })
        var obj = {
          resource: inputparam,
          format: objfmt,
          format2: objfmt2,
          status: status,
          colnum: 3
        }
        target.createSystemPopupByLocalPath("popup", {
          width: "80%",
          title: "检修信息",
          on: {
            submit: function(data, destroy) {
              if(data.statuc == "success" && data.data) {
                
                format2.forEach(function(fmt) {
                  var fileObj = {
                    type: fmt.name
                  }
                  //如果有这个属性，进入处理是修改还是删除
                  if(data.data.hasOwnProperty(fmt.name)) {
                    //清空这个type的所有已有设置
                    if (!data.data.maintainStandard.fileList) data.data.maintainStandard.fileList = [];
                    for(var i = data.data.maintainStandard.fileList.length - 1; i > -1; i--) {
                      if(data.data.maintainStandard.fileList[i].type == fmt.name) {
                        data.data.maintainStandard.fileList.splice(i, 1);
                      }
                    }
                    if(data.data[fmt.name]) { //如果这个属性有值，那么进行增加和修改的操作
                      fileObj.label = fmt.label;
                      fileObj.fileName = data.data[fmt.name].label;
                      fileObj.filePath = data.data[fmt.name].value.qualifiedName;
                      data.data.maintainStandard.fileList.push(fileObj);
                    }
                  }
                })
                target.addMaintainStandardTask(data.data, function(returnObj) {
                  if(returnObj) {
                    target.growl("保存成功");
                    readerData();
                    if(destroy) destroy();
                  }
                })
              }
            }
          }
        }, obj);
      }
      var extendParam = {};
      var readerData = function() {
        var paras4list = {
          deviceId: resource.id,
          ticketCategory: "120"
        }
        if(extendParam) {
          paras4list.standardProjectId = extendParam.standardProjectId;
          paras4list.constructionType = extendParam.constructionType;
          paras4list.projectCategory = extendParam.projectCategory;
        }
        target.getTaskBySimpleConditionAndPage(paras4list, function(returnObj) {
          render(returnObj.data);
        })
      }

      //监听别的地方告诉我添加
      if(scope.popupaddclick) {
        scope.popupaddclick();
        scope.popupaddclick = null;
      }
      scope.popupaddclick = scope.$on("POPUPADDCLICK", function() {
        format2.filter(function(fmt) {
          fmt.text = "";
          fmt.path = "";
        })
        popupHandler({
          maintainStandard: {
            fileList: []
          },
          deviceId: resource.id
        }, 1)
      });
      if(scope.listsearchclick) {
        scope.listsearchclick();
        scope.listsearchclick = null;
      }
      scope.listsearchclick = scope.$on("LISTSEARCHCLICK", function(param, args) {
        extendParam = args
        readerData();
      });

      if(resource) {
        readerData();
      }
      target.on("tree_resourceChange", function(obj) {
        resource = obj.resource;
        readerData();
      });
    }
  }
}