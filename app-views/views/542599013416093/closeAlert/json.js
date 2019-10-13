/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
psdefine(function() {
  return {
    "label": "报警强制关闭弹出框",
    "layout": {
      "type": "column",
      "children": [{
          "label": "文字",
          "type": "text",
          "source": "TEXT",
          "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
          "style": {
            "margin": "5px",
            "padding": "0",
            "font-size": "18px",
            "font-weight": "normal",
            "text-align": "left",
            "color": "rgb(255, 255, 255)"
          },
          "advance": {
            "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警强制关闭后无法修改，是否确认关闭报警？？\")\n        }\n    }\n}"
          },
          "data": {
            "kpi": [],
            "modelType": 300,
            "resfilltype": "parameter",
            "resource": [],
            "modelDisable": true
          },
          "parameters": {},
          "url": "images/map/map1.png"
        },
        {
          "label": "控件组",
          "type": "ctrlgroup",
          "source": "CTRLGROUP",
          "advance": {
            "expression": require("./content/ctrlgroup_0.js")
          },
          "style": {
            "margin": "5px",
            "font-size": "12px",
            "text-align": "center"
          },
          "help": "../pdf/ctrlgroup.pdf",
          "parameters": {
            "cgroupstyle": "table"
          },
          "url": "images/map/map1.png"
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})