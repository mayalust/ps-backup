expression = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var scope = target.getRootScope();

      var timeObj = {
        rollerNo : null,
        firstTimeFrom: null,
        firstTimeTo: null
      };
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期 

      var render = function() {
        var ctrlGroups = [
          [{
              type: "label",
              value: "辊道编码:"
            }, {
              type: "input",
              on: {
                change: function(elem) {
                  timeObj.rollerNo = elem.value;
                }
              }
            }, {
              type: "label",
              value: "备修委托时间",
              style: {
                textAlign: "right",
                width: "100px"
              }
            },
            {
              type: "button",
              value: "当日委托",
              btnclass: currStatus == "today" ? "btn btn-primary" : "btn btn-default",
              btnStyle: {
                "width": "100px",
                "border": "#10a4fb solid 1px"
              },
              on: {
                click: function(elem) {
                  var today = new Date();
                  today.setHours(0);
                  today.setMinutes(0);
                  today.setSeconds(0);
                  today.setMilliseconds(0);
                  timeObj.firstTimeFrom = formatDatebyMomentToUTC(today);
                  timeObj.firstTimeTo = formatDatebyMomentToUTC(now);
                  currStatus = "today";
                  render();

                  target.trigger("queryTabelList1", timeObj);
                }
              }
            }, {
              type: "button",
              value: "本周委托",
              btnclass: currStatus == "bz" ? "btn btn-primary" : "btn btn-default",
              btnStyle: {
                "width": "100px",
                "border": "#10a4fb solid 1px"
              },
              on: {
                click: function(elem) {

                  //获得本周的开端日期 
                  function getWeekStartDate() {
                    var nowDayOfWeek = now.getDay(); //今天本周的第几天 
                    var nowDay = now.getDate() + 1; //当前日 
                    var nowMonth = now.getMonth(); //当前月 
                    var nowYear = now.getFullYear(); //当前年 
                    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
                    return weekStartDate;
                  }

                  timeObj.firstTimeFrom = formatDatebyMomentToUTC(getWeekStartDate());
                  timeObj.firstTimeTo = formatDatebyMomentToUTC(now);
                  currStatus = "bz";
                  render();
                  target.trigger("queryTabelList1", timeObj);
                }
              }
            }, {
              type: "button",
              value: "本月委托",
              btnclass: currStatus == "month" ? "btn btn-primary" : "btn btn-default",
              btnStyle: {
                "width": "100px",
                "border": "#10a4fb solid 1px"
              },
              on: {
                click: function(elem) {

                  //当前月的第一天
                  function getCurrentMonthFirst() {
                    var date = new Date();
                    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
                    return firstDay;
                  }

                  timeObj.firstTimeFrom = formatDatebyMomentToUTC(getCurrentMonthFirst());
                  timeObj.firstTimeTo = formatDatebyMomentToUTC(now);
                  currStatus = "month";
                  render();
                  target.trigger("queryTabelList1", timeObj);
                }
              }
            }, {
              type: "dateRangePicker",
              value: "",
              class: "col-md-5",
              id: 0,
              style: {
                width: "200px",
                textAlign: "center"
              },
              on: {
                change: function(elem) {
                  timeObj.firstTimeFrom = elem.value.start;
                  timeObj.firstTimeTo = elem.value.end;
                  if(elem.value.start) {
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

                  if(inpStatus) {
                    inpStatus = false;
                  } else {
                    timeObj.firstTimeFrom = "";
                    timeObj.firstTimeTo = "";
                    currStatus = false;
                    render()
                  }
                   

                  // scope.$broadcast("LISTSEARCHCLICK", timeObj); //通知别的视图,我查询了
                  target.trigger("queryTabelList1", timeObj)
                }
              }
            }
          ]
        ];
        event.target.render(ctrlGroups);
      }
      render()
    }
  }
}