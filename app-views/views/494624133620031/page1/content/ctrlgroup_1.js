/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;


      var Dic = {
        major: {
          label: "退回说明",
          type: "textarea",
          on: {
            change: function(elem) {
              target.setValue("recallExplain", elem.value);
            }
          }
        },
      }
      var ctrlGroups = [];
      var loop = function(item) {

        var labelObj = {
          type: "label",
          value: item.label,
          composory: true,
          class: "col-md-2"
        }
        var type = item.type;
        var obj = {};
        obj.type = type;
        obj.composory = true;
        obj.options = item.options;
        obj.class = "col-md-9";
        obj.colSpan = 2;
        obj.on = item.on;
        return [labelObj, obj];

      }
      for (var i in Dic) {
        ctrlGroups.push(loop(Dic[i]));
      }
      ctrlGroups.push([{
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
          click: function(elem) {


            var params = target.getValue("maintainListData");
            params.taskStatus = 200;
            params.values = {
              tempDealType: 1,
              recallExplain: target.getValue("recallExplain"),
            }
            delete(params.variables)

            function requiredFields() {
              if (params.values.recallExplain == "" || params.values.recallExplain == undefined) {
                target.growl("请填写退回说明", "warning")
                return false
              }
              return true;
            }
            if (requiredFields()) {
              event.target.postService("ticketTaskService", "doTask", params, function(tc) {
                if (tc.code == 0) {
                  event.target.growl("处理成功", "success");
                  target.trigger("queryTable1");
                  target.trigger("queryTable2");
                  target.trigger("queryTable3");
                  target.cancel();
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
          click: function(elem) {
            target.cancel();
          }
        }
      }])
      target.render(ctrlGroups);
    }
  }
}