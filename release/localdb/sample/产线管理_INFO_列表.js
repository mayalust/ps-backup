expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var scope = target.getRootScope();
      var resource = target.getValue("global/resource");
      var format = [{
        name: "label",
        label: "易耗件名称",
        composory: true,
        index: 0
      }, {
        name: "values.type",
        label: "类型",
        render: function(data, type, full) {
          var item;
          if(scope.myDicts.sparePartType) {
            item = scope.myDicts.sparePartType.find(function(item) {
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
        options: scope.myDicts.sparePartType,
        composory: true,
        index: 2
      }, {
        name: "model",
        label: "规格型号",
        index: 4
      }, {
        name: "values.manufacturer",
        label: "生产厂家",
        index: 3
      }, {
        name: "name",
        label: "编码",
        composory: true,
        index: 1
      }, {
        name: "values.position",
        label: "应用位置",
        index: 5
      }, {
        name: "originalNumber",
        label: "库存",
        composory: true,
        attrs: {
          type: "number"
        },
        index: 6
      }, {
        name: "status",
        label: "状态",
        popuptype: "select",
        selectId: "id",
        selectLabel: "label",
        options: [{
          id: 0,
          label: "在线"
        }, {
          id: 1,
          label: "离线"
        }, {
          id: 2,
          label: "报废"
        }],
        composory: true
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
              target.deleteSparePart(index.row.id, function(returnObj) {
                if(returnObj.code == 0) {
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
          status: status
        }

        target.createSystemPopupByLocalPath("popup", {
          width: "40%",
          title: "易耗件信息",
          on: {
            submit: function(data,destroy) {
              if(data.statuc == "success" && data.data) {
                target.saveSparePart(data.data, function(returnObj) {
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
      var render = function(workArray) {
        target.render({
          data: workArray,
          format: format.map(function(elem) {
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

      var readerData = function() {
        target.getSparePartByDeviceId(resource.id, function(returnObj) {
          render(returnObj)
        })
      }
      //监听别的地方告诉我添加
      if(scope.popupaddclick) {
        scope.popupaddclick();
        scope.popupaddclick = null;
      }
      scope.popupaddclick = scope.$on("POPUPADDCLICK", function() {
        popupHandler({
          values: {},
          deviceId: resource.id
        }, 1)
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