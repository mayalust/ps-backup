/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;
      var treated = [];
      var processed = [];
      var monthList = [];
      var yearList = [];

      function getCurrentMonthFirst() {
        var date = new Date();
        date.setDate(1);
        return date;
      }
      var nowDate = new Date();
      var now = new Date().getTime(); //当前日期 
      var monthDate = (new Date(getCurrentMonthFirst())).getTime(); //当月第一天
      var currentYear = nowDate.getFullYear();
      var currentYearFirstDate = new Date(currentYear, 0, 1);
      var yearDate = (new Date(currentYearFirstDate)).getTime(); //本年第一天
      var ticketTaskQueryModel = {
        "variables": {
          "theTicketType": "join"
        }
      };
      event.target.postService("ticketTaskService", "getTicketTasksByCondition", ticketTaskQueryModel, function(tc) {
        if (tc.code == 0) {
          var taskList = tc.data;
          for (var i in taskList) {
            if (taskList[i].taskStatus == 10) {
              treated.push(taskList[i]);
            } else if (taskList[i].taskStatus == 200) {
              processed.push(taskList[i]);
              var sendTime = (new Date(taskList[i].sendTime)).getTime()
              if (taskList[i].taskStatus == 200 && (sendTime > monthDate && sendTime < now)) {
                monthList.push(taskList[i]);
              }

              if (taskList[i].taskStatus == 200 && (sendTime > yearDate && sendTime < now)) {
                yearList.push(taskList[i]);
              }
            }
          }

          var list = [{
            label: "待协同任务数",
            value: treated.length,
            index: 0,
            icon: "proudsmart ps-bw_01",
            kpi: 3004,
            css: {
              "background-color": "#0c466d",
              "border": "1px solid #21a6fb"
            }
          }, {
            label: "已协同任务数（本月）",
            value: monthList.length,
            kpi: 3019,
            index: 1,
            icon: "proudsmart ps-bw_02",
            css: {
              "background-color": "#484b2f",
              "border": "1px solid #e7b52b"
            }
          }, {
            label: "已协同任务数（本年）",
            value: yearList.length,
            kpi: 3051,
            index: 2,
            icon: "proudsmart ps-bw_03",
            css: {
              "background-color": "#472d3c",
              "border": "1px solid #e55057"
            }
          }];
          target.render(list);
        }

      })

    }
  }
}