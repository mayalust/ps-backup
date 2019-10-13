/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width: "auto",
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;


      var render = function () {
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
                params.taskStatus = 200;
                // 关闭委托  
                if (target.getValue("tempDealType") == "4") {
                  params.values = {
                    tempDealType: target.getValue("tempDealType"),
                    closeReason: target.getValue("closeReason"),    // 关闭原因
                  }
                  delete(params.variables)

                  function requiredFields() {
                    if (params.values.closeReason == "" || params.values.closeReason == undefined) {
                      target.growl("请填写关闭说明", "warning")
                      return false
                    }
                    return true;
                  }

                  if (requiredFields()) {
                    target.postService("ticketTaskService", "doTask", params, function (tc) {
                      if (tc.code == 0) {
                        event.target.growl("处理成功", "success");
                        target.trigger("queryTabelList1");
                        target.trigger("queryTabelList2");
                        target.cancel();
                      } else {
                        event.target.growl(tc.message, "info");
                      }
                    })
                  }

                } else if (target.getValue("tempDealType") == "5") {
                  // 重新下发
                  var createTrust = target.getValue("createTrust");
                  var promise = new Promise(function (resolve, reject) {
                    function requiredFields() {
                      if (createTrust.standardProjectId == "" || createTrust.standardProjectId == undefined) {
                        target.growl("请选择标准项目编号", "warning")
                        return false
                      }
                      if (createTrust.projectType == "" || createTrust.projectType == undefined) {
                        target.growl("请选择项目分类", "warning")
                        return false
                      }
                      if (createTrust.trustDate == "" || createTrust.trustDate == undefined) {
                        target.growl("请选择委托日期", "warning")
                        return false
                      }
                      if (createTrust.propseReason == "" || createTrust.propseReason == undefined) {
                        target.growl("请填写请修原因", "warning")
                        return false
                      }
                      if (createTrust.trustId == "" || createTrust.trustId == undefined) {
                        target.growl("请填写委托单号", "warning")
                        return false
                      }
                      if (createTrust.standardProjectName == "" || createTrust.standardProjectName == undefined) {
                        target.growl("请填写工程项目名称", "warning")
                        return false
                      }
                      if (createTrust.constructionType == "" || createTrust.constructionType == undefined) {
                        target.growl("请填写施工类别", "warning")
                        return false
                      }
                      if (createTrust.projectCategory == "" || createTrust.projectCategory == undefined) {
                        target.growl("请填写项目类别", "warning")
                        return false
                      }
                      if (createTrust.workContent == "" || createTrust.workContent == undefined) {
                        target.growl("请填写工作内容", "warning")
                        return false
                      }
                      // if (createTrust.totalPerpsonNum == undefined && isNaN(createTrust.totalPerpsonNum)) {
                      //   target.growl("总人数为数字", "warning")
                      //   return false
                      // }
                      if (createTrust.totalPerpsonNum == "" || createTrust.totalPerpsonNum == undefined) {

                        target.growl("请填写总人数", "warning")
                        return false
                      } else {
                        if (isNaN(createTrust.totalPerpsonNum)) {
                          target.growl("总人数为数字", "warning")
                          return false
                        }
                        if (createTrust.totalPerpsonNum < 0 || createTrust.totalPerpsonNum > 10000) {
                          target.growl("请输入0～10000之间的数字", "warning")
                          return false
                        }
                      }
                      if (createTrust.estiRepairBeginDate == "" || createTrust.estiRepairBeginDate == undefined) {
                        target.growl("请选择预计施工日期 ", "warning")
                        return false
                      }
                      if (createTrust.suggesTeamCode == "" || createTrust.suggesTeamCode == undefined) {
                        target.growl("请填写建议施工班组", "warning")
                        return false
                      }
                      if (createTrust.projectCategory == "" || createTrust.projectCategory == undefined) {
                        target.growl("请选择项目类别", "warning")
                        return false
                      }
                      if (createTrust.totalUseTime == "" || createTrust.totalUseTime == undefined) {
                        target.growl("请填写总工时", "warning")
                        return false
                      } else {
                        if (isNaN(createTrust.totalUseTime)) {
                          target.growl("工时为数字", "warning")
                          return false
                        }
                        if (createTrust.totalUseTime < 0 || createTrust.totalUseTime > 10000) {
                          target.growl("请输入0～10000之间的数字", "warning")
                          return false
                        }
                      }
                      return true;
                    }

                    // 发起委托请求接口
                    if (requiredFields()) {
                      target.postService("deviceResumeUIService", "addDeviceCheckTrust", createTrust, function (tc) {
                        if (tc.code == 0) {
                          resolve(createTrust);
                        } else {
                          event.target.growl(tc.message, "info");
                        }
                      });
                    }
                  });
                  promise.then(function (e) {
                    params.values = {
                      tempDealType: target.getValue("tempDealType"),
                      // deviceSparePart: target.getValue("sparePart"),
                       standardProjectId: createTrust.standardProjectId
                    };
                    delete(params.variables);
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
                  });
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
      }
      render()
    },
  }
}