/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
module.exports = {
  on: {
    repeat: function(event) {

      var target = event.target;
      var global = event.global;
      var data = target.$repeatData;
      var ctrlGroups = [
        [{
          type: "label",
          value: data.value,
          style: {
            "font-size": "30px",
            "text-align": "left",
            "padding": "0 0 0 20px"
          },
          class: "col-md-12"
        }, {
          type: "icon",
          class: "col-md-12",
          rowSpan: 2,
          style: {
            "font-size": "40px",
            "color": "#ddd"
          },
          tdStyle: {
            "text-align": "right",
            "padding": "0 10px 0 0"
          },
          icon: data.icon
        }],
        [{
          type: "label",
          value: data.label,
          class: "col-md-12",
          style: {
            "font-size": "12px",
            "text-align": "left",
            "padding": "0 0 0 20px"
          }
        }]
      ];
      event.target.render(ctrlGroups);
    }
  }
}