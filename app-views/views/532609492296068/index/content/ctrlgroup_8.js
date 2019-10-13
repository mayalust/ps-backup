/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  width: "auto",
  on: {
    init: function(event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {
        "firstTimeFrom": "",
        "firstTimeTo": ""
      };
      var inpStatus = false;
      var now = new Date(); //当前日期 
      var currStatus = "";
      var render = function() {
        var ctrlGroups = [
          [{
            type: "label",
            value: "时 间：",
            style: {
              width: "100px",
              textAlign: "right"
            }
          }, {
            type: "button",
            value: "当日任务",
            btnclass: currStatus == 'dr' ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {
                timeObj.firstTimeFrom = moment(moment().startOf('day')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('day')).utc().format();
                event.global.fire("queryFinish", timeObj);
                currStatus = 'dr';
                render();
              }
            }
          }, {
            type: "button",
            value: "本周任务",
            btnclass: currStatus == 'bz' ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {

                //获得本周的开端日期 
                timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
                event.global.fire("queryFinish", timeObj);
                currStatus = 'bz';
                render();
              }
            }
          }, {
            type: "button",
            value: "当月任务",
            btnclass: currStatus == 'dy' ? "btn btn-primary" : "btn btn-default",
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function(elem) {

                //当前月的第一天
                timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
                timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
                event.global.fire("queryFinish", timeObj)
                currStatus = 'dy';
                render();
              }
            }
          }]
        ];
        event.target.render(ctrlGroups);
      }
      target.on("cancel_status_yb", function(time) {
        currStatus = "";
        render();
      });
      render();
    }
  }
}