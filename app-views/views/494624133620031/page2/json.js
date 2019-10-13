/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
psdefine(function() {
  return {
    "label": "故障处理弹出框",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "5px",
          "margin": "5px"
        },
        "advance": {
          "expression": {}
        },
        "children": [{
          "type": "column",
          "col": 12,
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
            },
            {
              "label": "控件组",
              "type": "ctrlgroup",
              "source": "CTRLGROUP",
              "advance": {
                "expression": require("./content/ctrlgroup_1.js")
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
            },
            {
              "label": "控件组",
              "type": "ctrlgroup",
              "source": "CTRLGROUP",
              "advance": {
                "expression": require("./content/ctrlgroup_2.js")
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
            }
          ]
        }],
        "url": "images/map/map1.png"
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})