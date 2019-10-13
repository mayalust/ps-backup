/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
psdefine(function() {
  return {
    "label": "退回弹框",
    "layout": {
      "type": "column",
      "children": [{
        "type": "row",
        "children": [{
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
                "font-size": "12px",
                "background-color": "#051f32"
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
            }
          ],
          "col": 12
        }],
        "source": "ROW",
        "parameters": {
          "alignment": "bootstrap"
        },
        "style": {},
        "advance": {
          "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
        },
        "url": "images/map/map1.png"
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})