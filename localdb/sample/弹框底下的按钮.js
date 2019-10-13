expression = {
  width: "auto",
  on: {
    init: function (event) {
      var target = event.target;
      var ctrlGroups = [
        [{
          type: "button",
          value: "提   交",
          btnclass: "btn btn-primary",
          style: {
            width: "600",
            textAlign: "right"
          },
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function (elem) {
              var params = target.getPopupData();
              function requiredFields() {
                if (params == "" || params == undefined) {
                  target.growl("请填写异常处理的评价说明", "warning");
                  return false
                }
                return true;
              }

              if (requiredFields()) {
                // 调用接口
                target.postService("baogangTicketService", "doTask", [params.ticketNo, params.values], function (tc) {
                  if (tc.code == 0) {
                    target.growl("处理成功", "success");
                    target.cancel();
                    target.trigger("queryTabelList1");
                    target.trigger("queryTabelList2");
                  }
                })
              }
            }
          }
        },
          {
            type: "button",
            value: "取   消",
            btnclass: "btn btn-default",
            style: {
              width: "400",
              textAlign: "left"
            },
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
      event.target.render(ctrlGroups);
    },
  }
}