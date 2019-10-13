/**
 * 注意：在使用时，删除该注释的内容
 * POPUP提交按钮标准，适用于有弹出的各级视图，绝大部分情况下请勿修改
 * 版本：1.0.1
 * 日期：2018-02-22
 * 增加了对于select的提示判断和n1+n2存在的判断
 */
expression = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var scope = target.getRootScope();
      var status = target.getPopupData().status; //0表示查看，1表示编辑
      var params = target.getPopupData().resource;
      var format = target.getPopupData().format;
      var render = function() {
        var ctrlGroups = [
          [{
            type: "button",
            value: "提   交",
            btnclass: "btn btn-primary",
            disabled: status == 0 ? "disabled" : false,
            style: {
              width: "600",
              textAlign: "right"
            },
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px",
              "color": "#c0c0c0",
              "backgroudColor": "#156eab"
            },
            on: {
              click: function(elem) {
                var checkflg = true;
                for(var i in format) {
                  var fmt = format[i];
                  var valid = fmt.n1 ? (params[fmt.n1][fmt.n2]) : (params[fmt.name]);
                  if(fmt.composory && (valid === undefined || valid === "")) {
                    if(fmt.popuptype == "select") {
                      target.growl("请选择" + fmt.label, "warning");
                    } else {
                      target.growl(fmt.label + "不能为空", "warning");
                    }
                    checkflg = false;
                    return;
                  }
                }
                if(checkflg) {
                  target.submit({
                    data: params,
                    "statuc": "success"
                  });
                }
              }
            }
          }, {
            type: "button",
            value: "取   消",
            btnclass: "btn btn-default",
            style: {
              width: "400",
              textAlign: "left"
            },
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px",
              "color": "#C0C0C0"
            },
            on: {
              click: function(elem) {
                target.submit({
                  "statuc": "cancel"
                });
              }
            }
          }]
        ];
        event.target.render(ctrlGroups);
      }
      render()
    }
  }
}