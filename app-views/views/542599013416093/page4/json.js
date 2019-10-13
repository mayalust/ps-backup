/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
psdefine(function() {
  return {
    "label": "审核意见弹出框",
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
        "parameters": {
          "cgroupstyle": "table"
        },
        "url": "images/map/map1.png"
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})