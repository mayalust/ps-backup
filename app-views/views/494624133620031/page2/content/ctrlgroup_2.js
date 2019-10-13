/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;

      // 故障手顺书
      var stepsList = target.getValue("rowData").variables.deviceExcavationTask.deviceExcavationBook.stepsList;
      var ctrlGroups;

      function randerDom() {
        ctrlGroups = [
          [{
              type: "button",
              value: "下一步",
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
                click: function(elem) {
                  target.trigger("nextStep");
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
                click: function(elem) {

                  target.cancel();

                }
              }
            }
          ]
        ];
        target.render(ctrlGroups);
      }
      target.off("startStepList");
      target.on("startStepList", function(startStepList) {



        // 判断是不是最后一步
        if (target.getValue("index") == -1 || target.getValue("index") == -1 ||
          target.getValue("index") > 10000 || target.getValue("index") > 10000) {
          // 判断上一步按钮是否存在
          ctrlGroups = [
            [{
                type: "button",
                value: "确定",
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
                  click: function(elem) {

                    target.trigger("finish");

                  }
                }
              },
              {
                type: "button",
                value: "上一步",
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
                  click: function(elem) {

                    if (startStepList.length > 0) {
                      var lastStep = startStepList[startStepList.length - 1];
                      startStepList.length--;
                      target.setValue("startStepList", startStepList);
                      target.trigger("lastStep", lastStep);
                    }

                  }
                }
              },
            ]
          ];

          target.render(ctrlGroups);
        } else {
          // 判断上一步按钮是否存在
          ctrlGroups = [
            [{
                type: "button",
                value: "下一步",
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
                  click: function(elem) {
                    target.trigger("nextStep");
                  }
                }
              },
              {
                type: "button",
                value: "上一步",
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
                  click: function(elem) {

                    if (startStepList.length > 0) {
                      var lastStep = startStepList[startStepList.length - 1];
                      startStepList.length--;
                      target.setValue("startStepList", startStepList);
                      target.trigger("lastStep", lastStep);
                    }

                  }
                }
              },
            ]
          ];

          target.render(ctrlGroups);
        }

      });

      randerDom();

    }
  }
}