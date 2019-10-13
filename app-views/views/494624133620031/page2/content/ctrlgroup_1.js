/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      // 初始化数据
      target.setValue("startStepList", null);
      var rowData = target.getValue("rowData");
      //   stepsList
      var deviceExcavationBook = rowData.variables.deviceExcavationTask.deviceExcavationBook;
      // 故障手顺书
      var stepsList = deviceExcavationBook.stepsList;

      var startStep = stepsList[0];

      var index;

      // 记录下当前故障处理的过程
      var startStepList = [];

      function render() {

        var ctrlGroups = [
          [{
              type: "label",
              class: "col-md-2",
              value: "排故步骤"
            },
            {
              type: "label",
              class: "col-md-10",
              hideExtraText: "600px",
              value: startStep.content
            }
          ],
          [{
              type: "label",
              class: "col-md-2",
              value: "判断方法"
            },
            {
              type: "label",
              class: "col-md-10",
              hideExtraText: "600px",
              value: startStep.judgeMethod
            }
          ],
          [{
              type: "label",
              class: "col-md-2",
              value: "判断标准"
            },
            {
              type: "label",
              class: "col-md-10",
              hideExtraText: "600px",
              value: startStep.judgeStandard
            }
          ],
          [{
              type: "label",
              value: "判断结果",
              composory: true,
            },
            {
              type: "select",
              value: startStep && target.getValue("startStepList") ? startStep.result : "",
              options: [{
                  id: "0",
                  label: "正常"
                },
                {
                  id: "1",
                  label: "异常"
                }
              ],
              on: {
                change: function(elem) {
                  // 判断当前选的是正常还是异常

                  if (elem.value.id == 0) {
                    index = startStep.rightNext;
                    startStep.result = 0;

                  } else {
                    index = startStep.errorNext;
                    startStep.result = 1;
                  }

                  target.setValue("index", index);

                }
              }

            }
          ]
        ];
        target.render(ctrlGroups);
      }

      render();
      target.off("lastStep");
      target.on("lastStep", function(lastStep) {
        startStep = lastStep;
        startStepList = target.getValue("startStepList");
        // 返回上一步 
        target.setValue("startStep", startStep);
        target.setValue("index", startStep.index);
        target.trigger("startStepList", startStepList);
        render();
      });

      target.off("nextStep");
      target.on("nextStep", function() {


        if (index == undefined || startStep.result == undefined) {
          target.growl("请选择判断结果", "warning");
        } else {
          // 回填数据
          if (startStep.result == 0) {
            index = startStep.rightNext;
          } else if (startStep.result == 1) {
            index = startStep.errorNext;
          }
          target.setValue("index", index);

          if (startStep) {
            startStepList.push(startStep);
          }

          target.setValue("startStep", startStep);

          startStep = stepsList.filter(function(ele) {
            return ele.index == index;
          })[0];

          target.trigger("startStepList", startStepList);

          if (startStep) {
            render();
          }

        }

      });

      target.off("finish");
      target.on("finish", function() {

        if (index == undefined) {
          target.growl("请选择判断结果", "warning");
        } else {

          if (startStep) {
            startStepList.push(startStep);
          }

          deviceExcavationBook.stepsList = startStepList;
          var params = [rowData.ticketNo, deviceExcavationBook];
          target.postService("baogangTicketService", "doDeviceExcavationTask", params, function(tc) {
            if (tc.code == 0) {
              event.target.growl("处理成功", "success");
              target.trigger("queryTable1");
              target.trigger("queryTable2");
              target.trigger("queryTable3");
            }
            target.cancel();
          })

        }
      });

    }
  }
}