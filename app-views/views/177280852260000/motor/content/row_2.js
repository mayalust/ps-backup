/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "click": function(event) {
      var ticketNo = event.data.values.ticketNo;
      event.tools.location.href = '../../app-oc/index.html#/workOrderTimeLine/' + ticketNo;
    }
  },
  "format": [{
      "name": "工单号",
      "value": "{item:ticketNo}",
      "type": "text"
    },
    {
      "name": "内容",
      "value": "{item:message}",
      "type": "text"
    },
    {
      "name": "紧急度",
      "value": "{item:priorityCode}",
      "type": "priority"
    }
  ]
}