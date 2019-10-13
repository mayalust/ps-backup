/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    init: function(event) {
      
      var target = event.target;
      var global = event.global;
      var params = target.getPopupData().detailTask;
      
      var Dic = {
        alertInfo: {
          label: "审核意见:",
          type: "textarea",
          on: {
            change: function(elem) {
              params.values.auditOpinion = elem.value;
              
            }
          }
        }
      }
      var ctrlGroups = [];
      var loop = function(item) {
        var labelObj = {
          type: "label",
          value: item.label,
          class: "col-md-2"
        }
        var type = item.type;
        var obj = {};
        obj.type = type;
        obj.options = item.options;
        obj.class = "col-md-9";
        obj.colSpan = 2;
        obj.on = item.on;
        return [labelObj, obj];
      }
      for (var i in Dic) {
        ctrlGroups.push(loop(Dic[i]))
      }
      ctrlGroups.push([{
        type: "label",
        value: ""
      }, {
        type: "button",
        value: "提交",
        btnclass: "btn btn-primary",
        btnStyle: {
          "width": "100px",
          "border": "#10a4fb solid 1px"
        },
        class: "col-md-1",
        on: {
          click: function(elem) {
            
            if (params.values.auditOpinion) {
              event.target.postService("ticketTaskService", "doTask", params, function(tc) {
                if (tc.code == 0) {
                  event.target.growl("审核意见提交成功", "success");
                  target.submit({
                    "statuc": "success"
                  });
                } else {
                  event.target.growl(tc.message, "info");
                  target.submit({
                    "statuc": "error"
                  });
                }
              })
            } else {
              event.target.growl("请填写审核意见", "warning");
            }
          }
        }
      }, {
        type: "button",
        value: "取消",
        btnStyle: {
          "width": "100px",
          "border": "#10a4fb solid 1px"
        },
        btnclass: "btn btn-default",
        class: "col-md-1",
        on: {
          click: function(elem) {
            
            target.submit({
              "statuc": "error"
            });
            target.cancel();
          }
        }
      }])

      target.render(ctrlGroups);
    }
  }
}