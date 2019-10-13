/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
psdefine(function() {
  return {
    "label": "验收与评价弹出框",
    "layout": {
      "type": "column",
      "children": [{
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
            "padding": "5px",
            "margin": "5px",
            "border": "none"
          },
          "advance": {
            "expression": require("./content/block_0.js")
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
              "label": "控制板2",
              "type": "box",
              "class": "box box-info",
              "source": "BOX",
              "parameters": {
                "title": "检修验收"
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
              "advance": {}
            }]
          }],
          "parameters": {},
          "url": "images/map/map1.png"
        },
        {
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
            "border": "none",
            "margin": "5px",
            "padding": "5px"
          },
          "advance": {
            "expression": require("./content/block_1.js")
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
              "label": "控制板2",
              "type": "box",
              "class": "box box-info",
              "source": "BOX",
              "parameters": {
                "title": "状态判断评价"
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
                        "expression": require("./content/ctrlgroup_4.js")
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
            }]
          }],
          "parameters": {},
          "url": "images/map/map1.png"
        },
        {
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
            "padding": "5px",
            "margin": "5px",
            "border": "none"
          },
          "advance": {
            "expression": {}
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
              "label": "控制板2",
              "type": "box",
              "class": "box box-info",
              "source": "BOX",
              "parameters": {
                "title": "异常处理评价"
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
                        "expression": require("./content/ctrlgroup_5.js")
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
            }]
          }],
          "parameters": {},
          "url": "images/map/map1.png"
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
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})