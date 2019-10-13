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
        },
        {
          id: 1,
          label: "停用"
        }
      ]
      var format = [{
        name: "standardNo",
        label: "点检标准编号",
        composory: true,
        index: 0
      }, {
        name: "standardName",
        label: "点检项目名称",
        composory: true,
        index: 1
      }, {
        name: "fatNumber",
        label: "油脂料号",
        composory: true,
        hide: true,
        index: 2
      }, {
        name: "deviceState",
        label: "设备状态",
        composory: true,
        hide: true,
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.pcsDeviceState,
        index: 3
      }, {
        name: "actionUser",
        label: "实施方",
        composory: true,
        hide: true,
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.pcsActionUser,
        index: 4
      }, {
        name: "safetyPoint",
        label: "安全挂牌",
        composory: true,
        hide: true,
        popuptype: "select",
        selectId: "valueCode",
        selectLabel: "label",
        options: scope.myDicts.pcsSafetyPoint,
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
        index: 6
      }, {
        name: "cycleNum",
        label: "周期间隔",
        composory: true,
        index: 7
      }, {
        name: "firstExecutionTime",
        hide: true,
        composory: true,
        label: "开始时间",
        type: "date",
        popuptype: "datePicker",
        index: 8
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
        index: 9
      }, {
        name: "createTime",
        label: "制定日期",
        type: "date",
        popuptype: "datePicker"
      }, {
        name: "createUserName",
        label: "制定人"
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
                if(returnObj.code == 0) {
                  target.growl("删除成功");
                  readerData();
                }
              })
            }
          }
        }]
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
        //只有让有index的传递到popup
        var objfmt = format.filter(function(fmt) {
          if(fmt.index != undefined) return fmt;
        })
        var obj = {
          resource: inputparam,
          format: objfmt,
          status: status,
          colnum: 3
        }
        target.createSystemPopupByLocalPath("popup", {
          width: "80%",
          title: "点检信息",
          on: {
            submit: function(data,destroy) {
              if(data.statuc == "success" && data.data) {
                target.addPointCheckStanard(data.data, function(returnObj) {
                  if(returnObj) {
                    target.growl("保存成功");
                    readerData();
                    if (destroy) destroy();
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
          ticketCategory: "100"
        }
        if(extendParam) {
          paras4list.standardNo = extendParam.standardNo;
          paras4list.modifyTime = extendParam.modifyTime;
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
          pointCheckItemList: [],
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