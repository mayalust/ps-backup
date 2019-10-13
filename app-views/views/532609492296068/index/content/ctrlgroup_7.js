/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      //----------------------------自定义内容----------------------------
      //要进行搜索的变量名，对应列表里相应的变量
      var attr = "sendTime";
      //----------------------------自定义内容----------------------------
      //注意，下面内容别动！！！
      var target = event.target;
      var global = event.global;
      var inpStatus = false;
      var timeObj = {};
      target.setScopeValue("search/" + attr, {
        type: "between",
        value: [null, null]
      });
      var timeBetween = function(item) {
        if (item.id == -1) {
          return null;
        } else if (item.id == 0) {
          return target.dateHandler(new Date()).addDay(-1);
        } else if (item.id == 1) {
          return target.dateHandler(new Date()).addDay(-7);
        } else if (item.id == 2) {
          return target.dateHandler(new Date()).addMonth(-1);
        }
      }
      var render = function() {
        var ctrlGroups = [
          [{
            type: "customHtml",
            value: '<span id="two" style="font-size:12px">会诊发起人 ：</span>',
            style: {
              textAlign: "center",
              width: "100px"
            }
          }, {
            type: "select",
            style: {
              textAlign: "center",
              width: "200px"
            },
            options: [],
            value: 0,
            format: {
              "id": "userID",
              "label": "userName"
            },
            on: {
              change: function(elem) {
                if (elem.value.userID > 0) {
                  timeObj["sponsor"] = elem.value.userID;
                } else {
                  if (timeObj.sponsor != undefined) {
                    delete timeObj.sponsor;
                  }
                }
                if (elem.value) {
                  inpStatus = true;
                }
              }
            }
          }, {
            id: 1,
            type: "dateRangePicker",
            value: "",
            class: "col-md-5",
            style: {
              width: "200px",
              textAlign: "center"
            },
            on: {
              change: function(elem) {
                timeObj.firstTimeFrom = elem.value.start;
                timeObj.firstTimeTo = elem.value.end;
                if (elem.value.start) {
                  inpStatus = true;
                }
              }
            },
          }, {
            type: "button",
            btnclass: "btn btn-primary",
            value: "查 询",
            btnStyle: {
              width: "100px",
            },
            on: {
              click: function(elem) {
                if (inpStatus) {
                  event.global.fire("queryFinish", timeObj);
                  target.trigger("cancel_status_yb");
                } else {
                  event.target.growl("请选择时间", "warning");
                }
              }
            }
          }]
        ];
        var queryUser = [];
        event.target.postService("userUIService", "queryUserByCondition", {}, function(returnObj) {
          if (returnObj.code == 0) {
            queryUser = returnObj.data;
            var obj = {
              "userID": "0",
              "userName": "全部"
            };
            returnObj.data.unshift(obj);
            ctrlGroups[0][1].options = returnObj.data;
            event.target.render(ctrlGroups);
          }
        })
      }
      render()
    }
  }
}