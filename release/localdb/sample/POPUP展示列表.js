expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      debugger
      var target = event.target;
      var scope = target.getRootScope();
      var resource = target.getValue("global/resource");
      var params = target.getPopupData().resource;
      var status = target.getPopupData().status; //0表示查看，1表示编辑
      //这里把需要的list变成标准的editList
      var editList = target.getPopupData().editList?target.getPopupData().editList:"";
      if (!editList) { //如果没有设置的话，查找params里是array的保存
        for (var k in params) {
          if ($.isArray(params[k])) {
            editList = params[k];
            break;
          }
        }
      }
      var editModel = false;
      scope.editObj = {};
      var baserender = function(data, display, full, fmt) {
        if(!data) data = "";
        if(full.isEdit) {
          return "<input name='" + fmt.value + "' ng-model='editObj." + fmt.value + "' style='width:100%' class='form-control' type='text' value='" + data + "'>";
        }
        return data;
      };
      
      /********以下是需要修改的地方********/
      var format = [{
        name: "itemNumber",
        label: "序号",
        render: baserender,
        index: 0
      }, {
        name: "repairContent",
        label: "修复内容及要求",
        render: baserender,
        index: 1
      }, {
        label: "操作",
        type: "buttonGroup",
        content: [{
          label: "编辑",
          sublabel: "保存",
          icon: "null",
          name: "isEdit",
          on: {
            click: function(data, row, columnIndex) {
              if(editModel) {
                editList[data.index] = $.extend({}, scope.$parent.editObj, true);
                editList.forEach(function(item) {
                  item.isEdit = false;
                })
                scope.$parent.editObj = {};
                editModel = false;
              } else {
                editList[data.index].isEdit = true;
                scope.$parent.editObj = editList[data.index];
                editModel = true;
              }
              popupHandler();
            }
          }
        }, {
          label: "删除",
          icon: "null",
          on: {
            click: function(data, row, columnIndex) {
              editModel = false;
              if(editList[data.index].tableElement) {
                editList[data.index].tableElement.removeRow();
                editList.splice(data.index, 1);
              } else {
                editList.splice(data.index, 1);
                popupHandler();
              }
            }
          }
        }]
      }]

      var render = function(workArray) {
        target.render({
          data: workArray,
          rowCallbackKey: "itemNumber",
          format: format.map(function(elem) {
            if(elem.hide) return false;
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

      var popupHandler = function() {
        render(editList);
      }

      //监听别的地方告诉我添加
      if(scope.popup2addclick) {
        scope.popup2addclick();
        scope.popup2addclick = null;
      }
      scope.popup2addclick = scope.$on("POPUP2ADDCLICK", function() {
        if(!editModel) {
          editModel = true;
          //恢复所有的编辑状态
          editList.forEach(function(item) {
            item.isEdit = false;
          })
          editList.push({
            isEdit: true
          });
          popupHandler()
        } else {
          target.growl("当前有编辑的内容", "info")
        }
      });

      if(params) {
        render(editList);
      }
    }
  }
}