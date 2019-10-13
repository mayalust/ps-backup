/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var options = [{
        id: 0,
        label: "正确"
      }, {
        id: 1,
        label: "基本正确"
      }, {
        id: 2,
        label: "不正确"
      }]
      var val = [options[0]];
      var tallyEvaluateDealExplain = "";
      var render = function () {
        var selectInfo = val.map(function (elem) {
          return elem.id;
        });
        if (selectInfo.length > 0) {
            target.setValue("tallyEvaluateCheckboxlist", selectInfo[0]);  
        } else {
          //   selectInfo = "没有选项被选中";
        }
        var ctrlGroups = [
          [{
            type: "label",
            value: "评价等级",
            class: "col-md-2"
          }, {
            type: "checkboxlist",
            multiselect :  false,
            icon: "glyphicon glyphicon-search",
            column: 3,
            value: val.map(function (elem) {
              return elem.id;
            }),
            on: {
              change: function (elem) {  
                val =  elem.value
                render();
              }
            },
            colSpan : 2,
            class: "col-md-10",
            options: options
          }],
          [{
            type: "label",
            value: "评价说明",
            class: "col-md-2"
          }, {
            type: "textarea",
            colSpan : 2,
            class: "col-md-10",
            value:tallyEvaluateDealExplain,
            on: {
              change: function (elem) {
                tallyEvaluateDealExplain = elem.value;
                target.setValue("tallyEvaluateDealExplain", elem.value);
              }
            },
          }],
          [{
            type: "label",
            value: ""
          },{
            type: "button",
            value: "提交",
              btnStyle: {
                  "width": "100px",
                  "border": "#10a4fb solid 1px"
                },
            btnclass: "btn btn-primary",
            class: "col-md-6",
            on: {
              click: function (elem) { 
                var params = target.getPopupData();
                params.taskStatus = 200;
                params.values = {
                  tallyEvaluatUserName : target.getCurrentUser().userName,    
                  tallyEvaluateCheckboxlist: target.getValue("tallyEvaluateCheckboxlist"),
                  tallyEvaluateDealExplain: target.getValue("tallyEvaluateDealExplain")
                }

                delete(params.variables)
                event.target.postService("ticketTaskService", "doTask", params, function (tc) {
                  if (tc.code == 0) {
                    event.target.growl("处理成功", "success");
                    target.trigger("search_toDolist");
                    target.trigger("inspectionLoaded");
                    
                    target.cancel();
                  } else {
                    event.target.growl(tc.message, "info");
                  }
                })
              }
            }
          }, {
            type: "button",
            value: "取消",
            btnclass: "btn btn-default",
            class: "col-md-6",
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