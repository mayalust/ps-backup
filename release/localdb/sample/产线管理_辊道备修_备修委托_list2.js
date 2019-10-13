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
        type: "buttonGroup",
        content: [{
          label: "备修报告",
          icon: "null",
          on: {
            click: function(index, row, columnIndex) {

            }
          }
        }]
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

      // 查询表格的接口
      var extendParam = {};
      var readerData = function() {
        var params = {
          categorys: "220",
          validNotFinish: false,
          ticketStatus: 200
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

      //如果有选中的设备，直接查询
      if(resource) {
        readerData();
      }
      target.on("tree_resourceChange", function(obj) {
        resource = obj.resource;
        readerData();
      });

      target.on("queryTabelList2", function(e) {
        extendParam = e;
        readerData();
      });
    }
  }
}