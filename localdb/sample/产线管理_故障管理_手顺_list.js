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
        name: "bookId",
        label: "故障处理手顺书编号",
        index: 6
      }, {
        name: "name",
        label: "故障处理手顺书名称",
        composory: true,
        // type: "date"
        index: 1
      }, {
        name: "faultLedgerCode",
        label: "故障台账编号",
        composory: true,
        index: 3
      }, {
        name: "faultPosition",
        label: "故障部位",
        index: 2
      }, {
        name: "handleTotalTime",
        label: "处理累计时间(h)",
        attrs: {
          type: "number",
          min: 0
        },
        index: 5
      }, {
        name: "faultPerfor",
        label: "故障现象",
        composory: true,
        popuptype: "textarea",
        stretch: true,
        index: 9
      }, {
        name: "reason",
        label: "故障原因",
        composory: true,
        popuptype: "textarea",
        stretch: true,
        index: 10
      }, {
        name: "createTime",
        label: "创建日期",
        type: "date",
        popuptype: "datePicker",
        hide: true,
        index: 8
      }, {
        name: "handleTime",
        label: "处理时间",
        type: "date",
        popuptype: "datePicker",
        composory: true,
        hide: true
      }, {
        name: "createby",
        label: "创建人",
        index: 7,
        hide: true
      }, {
        name: "technology",
        label: "技术要点",
        popuptype: "textarea",
        composory: true,
        stretch: true,
        hide: true,
        index: 11
      }, {
        name: "tools",
        label: "使用工具",
        popuptype: "textarea",
        composory: true,
        stretch: true,
        hide: true,
        index: 12
      }, {
        name: "handleCondition",
        label: "处理条件安全要点",
        composory: true,
        popuptype: "textarea",
        stretch: true,
        hide: true,
        index: 13
      }, {
        name: "faultName",
        label: "故障名称",
        composory: true,
        hide: true,
        index: 4
      }, {
        name: "externalDevId",
        label: "设备编号",
        stretch: true,
        hide: true
      }, {
        name: "fileList",
        label: "附件",
        popuptype: "uploadFile2",
        stretch: true,
        manual: true,
        multiple: true, // 上传多个文件
        text: "", //文件的名称
        path: "", //文件的路径
        btnstatus: "delete,download",
        hide: true,
        index: 14
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
              target.deleteDeviceFaultBookById(index.row.id, function(returnObj) {
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
        if(!inputparam.fileList) inputparam.fileList = [];
        format.forEach(function(fmt) {
          if(fmt.name == 'fileList') {
            var texAry = [];
            var pathAry = [];
            inputparam.fileList.forEach(function(item) {
              texAry.push(item.label);
              pathAry.push(item.filePath);
            })
            fmt.text = texAry.toString();
            fmt.path = pathAry.toString();
          }
        })

        //只有让有index的传递到popup
        var objfmt = format.filter(function(fmt) {
          //   if (fmt.name == "fileList") {
          //     fmt.text = inputparam.label;
          //     fmt.path = inputparam.qualifiedName;
          //   }
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
          title: "手顺书信息",
          on: {
            submit: function(data, destroy) {
              if(data.statuc == "success" && data.data) {
                if(data.data.hasOwnProperty("fileList")) {
                  for (var i in data.data["fileList"]) {
                    data.data["fileList"][i].fileName = data.data["fileList"][i].label;
                    data.data["fileList"][i].filePath = data.data["fileList"][i].qualifiedName;
                  }
                }
                target.saveDeviceFaultBook(data.data, function(returnObj) {
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
          name: "",
          faultLedgerCode: ""
        }
        var sort = {
          "sort": "bookId"
        };

        for(var k in extendParam) {
          paras4list[k] = extendParam[k]
        }
        target.getDeviceFaultBookList([paras4list, sort], function(returnObj) {
          render(returnObj);
        })
      }

      //监听别的地方告诉我添加
      if(scope.popupaddclick) {
        scope.popupaddclick();
        scope.popupaddclick = null;
      }
      scope.popupaddclick = scope.$on("POPUPADDCLICK", function() {
        popupHandler({
          fileList: [],
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