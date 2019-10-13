expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var scope = target.getRootScope();
      var resource = target.getValue("global/resource");

      var taskStatusAry = [{
        id: 0,
        label: "启用"
      }, {
        id: 1,
        label: "停用"
      }]
      var format = [{
        name: "standardName",
        label: "项目名称",
        composory: true,
        index: 0
      }, {
        name: "specialtyProps",
        label: "检测专业",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.specialtyProps) {
            item = scope.myDicts.specialtyProps.find(function(item) {
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
        broadcast: true,
        options: scope.myDicts.specialtyProps,
        index: 1
      }, {
        name: "analyzeItem",
        label: "分析项目",
        composory: true,
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.analyzeItem) {
            item = scope.myDicts.analyzeItem.find(function(item) {
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
        parentName: "specialtyProps",
        parentKey: "parentCode",
        options: scope.myDicts.analyzeItem,
        index: 2
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
        index: 3
      }, {
        name: "cycleNum",
        label: "周期间隔",
        composory: true,
        index: 4
      }, {
        name: "firstExecutionTime",
        label: "开始时间",
        composory: true,
        type: "date",
        popuptype: "datePicker",
        index: 5
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
        index: 6
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
              target.deleteTask(index.row.id, function(returnObj) {
                if(returnObj) {
                  target.growl("删除成功");
                  readerData();
                }
              })
            }
          }
        }]
      }]

      var popupHandler = function(inputparam, status) {
        //只有让有index的传递到popup
        var objfmt = format.filter(function(fmt) {
          if(fmt.index != undefined) return fmt;
        })
        var obj = {
          resource: inputparam,
          format: objfmt,
          status: status,
          colnum: 1
        }
        target.createSystemPopupByLocalPath("popup", {
          width: "50%",
          title: "精密检测标准",
          on: {
            submit: function(data, destroy) {
              if(data.statuc == "success" && data.data) {
                target.addOfflineStandard(data.data, function(returnObj) {
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

      var extendParam = {};
      var readerData = function() {
        var paras4list = {
          deviceId: resource.id,
          ticketCategory: "110"
        }
        if(extendParam) {
          paras4list.analyzeItem = extendParam.analyzeItem;
          paras4list.specialtyProps = extendParam.specialtyProps;
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
        popupHandler({
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