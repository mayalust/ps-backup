/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {
        "firstTimeFrom": "",
        "firstTimeTo": "",
        "status": ""
      };
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期
      var list = [{
          id: 1,
          title: "全部",
          value: "",
          btnclass: "btn btn-primary",
          activeclass: ""
        }, {
          id: 2,
          title: "被驳回",
          value: "checking",
          btnclass: "btn btn-default",
          activeclass: ""
        },
        /*{
                id : 3,
                title : "待审批",
                value : "auditing",
                btnclass:"btn btn-default",
                activeclass:""
              },*/
        {
          id: 4,
          title: "待委托",
          value: "trusting",
          btnclass: "btn btn-default",
          activeclass: ""
        }, {
          id: 5,
          title: "待检修",
          value: "maintaining",
          btnclass: "btn btn-default",
          activeclass: ""
        }, {
          id: 6,
          title: "待验收",
          value: "accepting",
          btnclass: "btn btn-default",
          activeclass: ""
        }, {
          id: 7,
          title: "待评价",
          value: "assessing",
          btnclass: "btn btn-default",
          activeclass: ""
        }, {
          id: 8,
          title: "待说明",
          value: "explaining",
          btnclass: "btn btn-default",
          activeclass: ""
        }, {
          id: 10,
          title: "已完成",
          value: "end",
          btnclass: "btn btn-default",
          activeclass: ""
        }
      ];
      var render = function() {
        var ctrlGroups = [
          [{
            type: "customHtml",
            value: '<span id="two" style="font-size:12px">时 间：</span>',
            style: {
              width: "100px",
              textAlign: "right"
            }
          }, {
            type: "button",
            value: "当日处理任务",
            btnclass: currStatus == "today" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {
                timeObj.firstTimeFrom = moment(moment().startOf('day')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('day')).utc().format();
                target.trigger("search_ticket", timeObj)
                currStatus = "today";
                render();
              }
            }
          }, {
            type: "button",
            value: "本周处理任务",
            btnclass: currStatus == "bz" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {

                //获得本周的开端日期
                timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
                target.trigger("search_ticket", timeObj)
                currStatus = "bz";
                render();
              }
            }
          }, {
            type: "button",
            value: "本月处理任务",
            btnclass: currStatus == "month" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {

                //当前月的第一天
                timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
                target.trigger("search_ticket", timeObj);
                currStatus = "month";
                render();
              }
            }
          }, {
            id: 1,
            type: "dateRangePicker",
            value: "",
            class: "col-md-5",
            colSpan: 2,
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
                  target.trigger("search_ticket", timeObj)
                  currStatus = "";
                  inpStatus = false;

                } else {
                  for (var i in list) {
                    list[i].btnclass = "btn btn-default";
                  }
                  list[0].btnclass = "btn btn-primary";
                  target.trigger("search_ticket", {
                    "firstTimeFrom": "",
                    "firstTimeTo": "",
                    "status": ""
                  });
                  currStatus = "";
                  render();
                }
              }
            }
          }],
          // 完成任务
          [{
            type: "label",
            value: "任务状态:",
            style: {
              textAlign: "right",
              width: "100px"
            }
          }]
        ];
        for (var i in list) {
          ctrlGroups[1].push({
            id: list[i].id,
            type: "button",
            value: list[i].title,
            btnclass: list[i].btnclass,
            paramvalue: list[i].value,

            // style: {
            //   width: "100px",
            //   textAlign: "left"
            // },
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {
                elem.current.btnclass = "btn btn-default";
                var id = elem.current.id;
                var value = elem.current.paramvalue;
                timeObj.status = value;
                target.trigger("search_ticket", timeObj)

                for (var i in list) {
                  if (list[i].id == id) {
                    list[i].btnclass = "btn btn-primary";
                  } else {
                    list[i].btnclass = "btn btn-default";
                  }

                }
                render()
              }
            }
          });
        }
        event.target.render(ctrlGroups);
      }
      render()
    }
  }
}