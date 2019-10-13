/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    repeat: function(event) {
      var target = event.target;
      var repeatData = target.$repeatData;
      var alertSeveritys = target.getRootScope("myDicts")["alertSeverity"];
      var ctrlGroups = [
        [{
            class: "col-md-1",
            type: "label",
            value: "报警消息:",
          },
          {
            type: "label",
            class: "col-md-3",
            value: repeatData.alertTitle,
          },
          {
            type: "label",
            class: "col-md-1",
            hideExtraText: "150px",
            value: "报警级别:",
          },
          {
            type: "label",
            class: "col-md-3",
            value: alertSeveritys.find(function(ele) {
              return ele.valueCode == repeatData.severity
            }).label,
          },
          {
            type: "label",
            class: "col-md-1",
            value: "报警时间:",
          },
          {
            type: "label",
            class: "col-md-3",
            value: useMomentFormat(repeatData.arisingTime, "yyyy-MM-dd hh:mm:ss")
          }
        ]
      ];
      target.render(ctrlGroups);
    }
  }
}