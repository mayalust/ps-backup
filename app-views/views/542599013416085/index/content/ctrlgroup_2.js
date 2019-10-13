/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width: "auto",
  on: {
    init: function (event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {"firstTimeFrom": "", "firstTimeTo": ""};
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期 
      var render = function () {
        var ctrlGroups = [
          [
            {
              type: "label",
              value: "时 间：",
              style: {
                width: "100px",
                textAlign: "right"
              }
            }, {
            type: "button",
            value: "当日任务",
            btnclass: currStatus == "today" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function (elem) {
               timeObj.firstTimeFrom = moment(moment().startOf('day')).utc().format();
               timeObj.firstTimeTo = moment(moment().endOf('day')).utc().format();
                target.trigger("search_toDolist", timeObj)
                currStatus = "today";
                render();
              }
            }
          }, {
            type: "button",
            value: "本周任务",
            btnclass: currStatus == "bz" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function (elem) {

                //获得本周的开端日期 
               timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
               timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
                target.trigger("search_toDolist", timeObj)
                currStatus = "bz";
                render();
              }
            }
          }, {
            type: "button",
            value: "本月任务",
            btnclass: currStatus == "month" ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function (elem) {

                //当前月的第一天
               timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
               timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
                target.trigger("search_toDolist", timeObj);
                currStatus = "month";
                render();
              }
            }
          }, {
                id:0,
            type: "dateRangePicker",
            value: "",
            class: "col-md-5",
            style: {
              width: "200px",
              textAlign: "center"
            },
            on: {
              change: function (elem) {
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
              click: function (elem) {
                if (inpStatus) {
                  target.trigger("search_toDolist", timeObj)
                  currStatus = "";
                  inpStatus = false;
                  //   render();
                } else {
                  target.trigger("search_toDolist", {"firstTimeFrom": "", "firstTimeTo": ""})
                  currStatus = "";
                  render();
                }
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