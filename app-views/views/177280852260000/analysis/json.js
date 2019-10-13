/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function() {
  return {
    "label": "分析诊断",
    "layout": {
      "type": "column",
      "children": [{
        "label": "高级视图",
        "type": "advanceEchart",
        "source": "ADVANCEECHART",
        "advance": {
          "expression": require("./content/advanceEchart_0.js")
        },
        "style": {
          "margin": "auto",
          "width": "100%",
          "height": "500px"
        },
        "parameters": {
          "theme": "macarons"
        },
        "url": "images/map/map1.png"
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})