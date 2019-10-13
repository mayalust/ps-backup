/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  on: {
    init: function(event) {
      var target = event.target;

      var list = [{
          label: "待修项目数",
          index: 0,
          value: "-",
          icon: "proudsmart ps-bw_01",
          css: {
            "background-color": "#0c466d",
            "border": "1px solid #21a6fb"
          }
        },
        {
          label: "待维护任务数",
          value: "-",
          index: 1,
          icon: "proudsmart ps-bw_02",
          css: {
            "background-color": "#484b2f",
            "border": "1px solid #e7b52b"
          }
        },
        {
          label: "检修项目完成数",
          value: "-",
          index: 2,
          icon: "proudsmart ps-bw_09",
          css: {
            "background-color": "#66486d",
            "border": "1px solid #e0a2ef",
            "cursor": "pointer"
          }
        },
        {
          label: "维护项目完成数",
          value: "-",
          index: 3,
          icon: "proudsmart ps-bw_03",
          css: {
            "background-color": "#472d3c",
            "border": "1px solid #e55057"
          }
        }
      ];
      //   target.render(list);
      var promise = new Promise(function(resolve, reject) {
        // 今日任务
        var params = {
          "taskStatus": 10,
          "categorys": "280,290,320,330",
          "tickeTaskStatus": "maintaining"
        };

        var pageRequest = {
          "start": 0,
          "length": 1
        }
        target.getTicketTasksByConditionAndPage(params, pageRequest, function(data) {
          list[0].value = data.total;
          resolve();
        })
      });
      promise.then(function(e) {

          return new Promise(function(resolve, reject) {

            var params = {
              "categorys": "340,310",
              "taskStatus": 10,
            };

            var pageRequest = {
              "start": 0,
              "length": 1
            }
            target.getTicketTasksByConditionAndPage(params, pageRequest, function(data) {
              list[1].value = data.total;
              resolve();
            })

          })
        })

        .then(function(e) {
          // 异常处理有效率
          target.postService("baogangTicketService", " getMaintainIntelligentCount", [], function(tc) {
            return new Promise(function(resolve, reject) {
              if (tc.data) {

                list[2].value = tc.data.maintainCount;
                list[3].value = tc.data.stateMaintainCount;
                target.render(list);
              }
            })

          })
        })

    }
  }
}