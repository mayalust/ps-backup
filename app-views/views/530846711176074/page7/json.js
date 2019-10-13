/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
psdefine(function() {
  return {
    "label": "导航页",
    "layout": {
      "type": "column",
      "children": [{
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
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
                "title": "在线预警评价"
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
                      "label": "重复单元",
                      "type": "repeater",
                      "source": "REPEATER",
                      "parameters": {
                        "col": "列数"
                      },
                      "advance": {
                        "getListTable": "allprojects",
                        "expression": require("./content/repeater_3.js")
                      },
                      "children": [{
                        "type": "column",
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
                          },
                          {
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
                          }
                        ],
                        "col": []
                      }],
                      "style": {}
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
            "border": "none"
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
                "title": "智能诊断评价"
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
                      "label": "重复单元",
                      "type": "repeater",
                      "source": "REPEATER",
                      "parameters": {
                        "col": "列数"
                      },
                      "advance": {
                        "getListTable": "allprojects",
                        "expression": require("./content/repeater_4.js")
                      },
                      "children": [{
                        "type": "column",
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
                          },
                          {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": require("./content/ctrlgroup_9.js")
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
                        "col": []
                      }],
                      "style": {}
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
            "border": "none"
          },
          "advance": {
            "expression": require("./content/block_2.js")
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
                "title": "大数据预警评价"
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
                      "label": "重复单元",
                      "type": "repeater",
                      "source": "REPEATER",
                      "parameters": {
                        "col": "列数"
                      },
                      "advance": {
                        "getListTable": "allprojects",
                        "expression": require("./content/repeater_5.js")
                      },
                      "children": [{
                        "type": "column",
                        "children": [{
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": require("./content/ctrlgroup_10.js")
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
                          },
                          {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": require("./content/ctrlgroup_11.js")
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
                        "col": []
                      }],
                      "style": {}
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
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})