/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var options = [{
        id: 0,
        label: "没有停机时间"
      }, {
        id: 1,
        label: "缺少备件"
      }, {
        id: 2,
        label: "技术不具备"
      }, {
        id: 3,
        label: "其他"
      }]
      var val = [options[0]];
      var render = function () {
        var selectInfo = val.map(function (elem) {
          return elem.label;
        });
        if (selectInfo.length > 0) {
            var selectInfoList = [{
                id: 0,
                label:selectInfo.toString()
            }];
            target.setValue("tallyCheckboxlist", selectInfoList);  
          //   selectInfo = "[" + selectInfo.toString() + "],被选中了";
        } else {
          //   selectInfo = "没有选项被选中";
        }
        var ctrlGroups = [
          [{
            type: "label",
            value: "处理原因",
             composory: true,
            class: "col-md-2",
          }, {
            type: "checkboxlist",
            icon: "glyphicon glyphicon-search",
            column: 4,
            value: val.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {
                  //---------------
                  val = elem.value;
                  //---------------
                target.setValue("tallyCheckboxlist", elem.value);  
               
              }
            },
            colSpan : 2,
            class: "col-md-10",
            options: options
          }],
          [{
            type: "label",
            value: "处理说明",
             composory: true,
            class: "col-md-2"
          }, {
            label: "处理说明",
            type: "textarea",
            class: "col-md-10",
            colSpan : 2,
            on: {
              change: function (elem) {
                target.setValue("tallyDealExplain", elem.value);
            
              }
            },
          }],
          [{
            type: "label",
            value: ""
          }, {
            type: "button",
            value: "提交",
            btnclass: "btn btn-primary",
            class: "col-md-1",
               btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function (elem) { 
                var params = target.getPopupData();
                params.taskStatus = 200;
                params.values = {
                  dealType: 1,
                  tallyCheckboxlist: target.getValue("tallyCheckboxlist"),
                  tallyDealExplain: target.getValue("tallyDealExplain")
                }
                delete(params.variables)
                
                function requiredFields() {
                    if (params.values.tallyCheckboxlist.length==0) {
                      target.growl("请选择处理原因", "warning")
                      return false
                    }
                    if (params.values.tallyDealExplain == "" || params.values.tallyDealExplain == undefined) {
                      target.growl("请填写处理说明", "warning")
                      return false
                    }
                    return true;
                } 
                if(requiredFields()){
                     event.target.postService("ticketTaskService", "doTask", params, function (tc) {
                        if (tc.code == 0) {
                          event.target.growl("处理成功", "success");
                          target.trigger("inspectionLoaded");
                          target.trigger("search_toDolist");
                          target.cancel();
                        } else {
                          event.target.growl(tc.message, "info");
                        }
                      })
                }
               
              }
            }
          }, {
            type: "button",
            value: "取消",
            btnclass: "btn btn-default",
            class: "col-md-1",
               btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function (elem) {
                target.cancel();
              }
            }
          }]
        ];

        target.render(ctrlGroups);
      }
      render();
    }
  }
}