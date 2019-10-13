/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
psdefine(function() {
  return {
    "label": "点检异常弹出框",
    "layout": {
      "type": "column",
      "children": [{
          "label": "控制板2",
          "type": "box",
          "class": "box box-info",
          "source": "BOX",
          "parameters": {
            "title": "检修委托"
          },
          "style": {
            "font-size": "12px",
            "font-weight": "bold",
            "text-align": "left",
            "margin": "5px"
          },
          "children": [{
              "class": "box-body",
              "type": "box-body",
              "children": [{
                "type": "column",
                "col": 12,
                "children": [{
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
                }]
              }]
            },
            {
              "class": "box-footer",
              "type": "box-footer",
              "children": [{
                "type": "column",
                "col": 12,
                "children": []
              }]
            }
          ],
          "advance": {},
          "url": "images/map/map1.png"
        },
        {
          "label": "控制板2",
          "type": "box",
          "class": "box box-info",
          "source": "BOX",
          "parameters": {
            "title": "检修方案"
          },
          "style": {
            "font-size": "12px",
            "font-weight": "bold",
            "text-align": "left",
            "margin": "5px"
          },
          "children": [{
              "class": "box-body",
              "type": "box-body",
              "children": [{
                "type": "column",
                "col": 12,
                "children": [{
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
                }]
              }]
            },
            {
              "class": "box-footer",
              "type": "box-footer",
              "children": [{
                "type": "column",
                "col": 12,
                "children": []
              }]
            }
          ],
          "advance": {},
          "url": "images/map/map1.png"
        },
        {
          "label": "控制板2",
          "type": "box",
          "class": "box box-info",
          "source": "BOX",
          "parameters": {
            "title": "易耗件申领"
          },
          "style": {
            "font-size": "12px",
            "font-weight": "bold",
            "text-align": "left",
            "margin": "5px"
          },
          "children": [{
              "class": "box-body",
              "type": "box-body",
              "children": [{
                "type": "column",
                "col": 12,
                "children": [{
                  "label": "控件组",
                  "type": "ctrlgroup",
                  "source": "CTRLGROUP",
                  "advance": {
                    "expression": require("./content/ctrlgroup_3.js")
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
                }]
              }]
            },
            {
              "class": "box-footer",
              "type": "box-footer",
              "children": [{
                "type": "column",
                "col": 12,
                "children": []
              }]
            }
          ],
          "advance": {},
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
            "font-size": "12px"
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