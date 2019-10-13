/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
psdefine(function() {
  return {
    "label": "退回重新下发弹出框",
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
        },
        {
          "label": "控件组",
          "type": "ctrlgroup",
          "source": "CTRLGROUP",
          "advance": {
            "expression": require("./content/ctrlgroup_2.js")
          },
          "style": {
            "font-size": "12px",
            "text-align": "left",
            "line-height": "30px"
          },
          "help": "../pdf/ctrlgroup.pdf",
          "parameters": {
            "cgroupstyle": "table"
          },
          "url": "images/map/map1.png"
        },
        {
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
            "padding": "5px",
            "margin": "5px"
          },
          "advance": {
            "expression": require("./content/block_3.js")
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
              "type": "row",
              "children": [{
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
                    "margin": "5px",
                    "background-color": "#051f32"
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
                            "expression": require("./content/ctrlgroup_8.js")
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
                }],
                "col": 12
              }],
              "source": "ROW",
              "parameters": {
                "alignment": "bootstrap"
              },
              "style": {},
              "advance": {
                "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
              }
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
            "margin": "5px"
          },
          "advance": {
            "expression": require("./content/block_4.js")
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
                  "title": "检修委托"
                },
                "style": {
                  "font-size": "12px",
                  "font-weight": "bold",
                  "text-align": "left",
                  "margin": "5px",
                  "background-color": "#051f32"
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
                          "expression": require("./content/ctrlgroup_6.js")
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
                  "margin": "5px",
                  "background-color": "#051f32"
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
                          "expression": require("./content/ctrlgroup_7.js")
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
              }
            ]
          }],
          "parameters": {},
          "url": "images/map/map1.png"
        },
        {
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
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})