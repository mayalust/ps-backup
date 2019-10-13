expression = {
  "theme": "dark",
  "on": {
    "init": function(event) {
      var target = event.target;
      var scope = target.getRootScope();

      // 获取设备的信息
      var resource = target.getValue("global/resource");

      //进度位字典
      var tickeTaskStatusDic = {
        "receiving": "待接收",
        "waitrepairing": "待维修",
        "repairing": "维修中",
        "receiveparting": "待收货",
        "end": "已完成"
      }
      //format是列表和popup的来源，index用户popup排序，hide表示不显示在list
      var format = [{
        name: "values.rollerPart.rollerName",
        label: "辊道名称"
      }, {
        name: "values.rollerPart.rollerNo",
        label: "辊道编号"
      }, {
        name: "values.rollerPart.rollerName",
        label: "下机原因"
      }, {
        name: "values.remark",
        label: "备注",
        popuptype: "textarea",
        stretch: true,
        index: 1
      }, {
        name: "values.theCreateUserName",
        label: "申请人"
      }, {
        name: "values.tickeTaskStatus",
        label: "进度位",
        render: function(data, type, full) {
          return tickeTaskStatusDic[data];
        }
      }, {
        name: "commitTime",
        label: "备修委托时间",
        type: "date"
      }, {
        label: "操作",
        type: "valueBased",
        name: "values.tickeTaskStatus",
        options: {
          // 待收货时有按钮
          "receiveparting": {
            name: "操作",
            type: "buttonGroup",
            content: [{
              label: "收货",
              icon: "null",
              on: {
                click: function(index, row, columnIndex) {
                  target.doTask4Baogang(index.row.ticketNo,{},function(returnObj) {
                    if (returnObj.code == 0) {
                      target.trigger("queryTabelList2", {})
                      readerData();
                      target.growl("操作成功");
                    }
                  })
                }
              }
            }, {
              label: "备修报告",
              icon: "null",
              on: {
                click: function(index, row, columnIndex) {
                  
                }
              }
            }]
          },
          "" : {
            name: "操作",
            type: "label",
            render: function() {
              return ""
            }
          }
        }
      }]

      var render = function(workArray) {
        target.render({
          data: workArray,
          format: format.map(function(elem) {
            if(elem.hide) return false;
            return {
              "name": elem.label,
              "value": elem.name,
              "type": elem.type || "text",
              "content": elem.content,
              "render": elem.render,
              "options": elem.options
            }
          })
        });
      }

      // 弹出框  status==1 是可以编辑  0 是不可以编辑
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
          width: "800px",
          title: "辊道备修信息",
          on: {
            submit: function(data, destroy) {
              if(data.statuc == "success" && data.data) {
                var rollerPartList = data.data.rollerPartList;
                var paramValues = {
                  remark: data.data.values.remark,
                  RollerPerson: "baowu_gd"
                }
                target.rollerTrust(rollerPartList, paramValues, function(returnObj) {
                  if(returnObj) {
                    target.growl("保存成功");
                    readerData();
                    if(destroy) {
                      destroy();
                    }
                  }
                })
              }
            }
          }
        }, obj);
      }

      // 查询表格的接口
      var extendParam = {};
      var readerData = function() {
        var params = {
          categorys: "220",
          validNotFinish: false,
          ticketStatus: 100
        };
        if(extendParam.firstTimeFrom || extendParam.firstTimeTo) {
          params.attrs = {
            commitTime: [extendParam.firstTimeFrom, extendParam.firstTimeTo]
          }
        }
        if(extendParam.rollerNo) {
          params.values = {
            "rollerPart.rollerNo": extendParam.rollerNo
          }
        }

        target.getDealTicketList(params, function(tc) {
          render(tc);
        })
      }

      //监听别的地方告诉我添加
      if(scope.popupaddclick) {
        scope.popupaddclick();
        scope.popupaddclick = null;
      }
      scope.popupaddclick = scope.$on("POPUPADDCLICK", function() {
        popupHandler({
          itemList: [],
          deviceId: resource.id,
          values: {}
        }, 1)
      });

      //如果有选中的设备，直接查询
      if(resource) {
        readerData();
      }
      target.on("tree_resourceChange", function(obj) {
        resource = obj.resource;
        readerData();
      });

      target.on("queryTabelList1", function(e) {
        extendParam = e;
        readerData();
      });
    }
  }
}