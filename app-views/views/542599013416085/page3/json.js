/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
psdefine(function() {
  return {
    "label": "发起委托",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控件组",
        "type": "ctrlgroup",
        "source": "CTRLGROUP",
        "advance": {
          "expression": require("./content/ctrlgroup_0.js")
        },
        "style": {
          "margin": "5px",
          "font-size": "12px"
        },
        "help": "../pdf/ctrlgroup.pdf",
        "url": "images/map/map1.png",
        "parameters": {
          "cgroupstyle": "table"
        }
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})