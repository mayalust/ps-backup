/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
psdefine(function() {
  return {
    "label": "关闭说明的弹出框",
    "layout": {
      "type": "column",
      "children": [{
          "label": "控制板1",
          "type": "block",
          "source": "BLOCK",
          "style": {
            "padding": "5px",
            "margin": "5px",
            "background-color": "#3a5066",
            "border": "0"
          },
          "advance": {
            "expression": "expression = {\n  on: {\n    init:function(event) {\n      var target = event.target;\n      \n      var data = target.getPopupData();\n      if(data.variables.dealType == 17){\n          target.setInvisible(false); \n      }\n \n    }\n  }\n}"
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "border-bottom": "1px solid #8ea0b0",
                  "border-left": "0",
                  "border-right": "0",
                  "border-top": "0",
                  "background-color": "#3a5066",
                  "margin-bottom": "10px"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "文字",
                    "type": "text",
                    "source": "TEXT",
                    "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                    "data": {
                      "applied": false,
                      "multipleCi": false,
                      "multipleKpi": false,
                      "resource": [],
                      "modelType": 300,
                      "resfilltype": "parameter",
                      "series": {
                        "manual": "新建文字",
                        "bind": "(function (source){\n  var formatter=function(elem){\n    return elem.value\n   }\n  return source.ci.getSeries(formatter);\n})"
                      },
                      "modelDisable": true
                    },
                    "style": {
                      "margin": "auto",
                      "padding": "0",
                      "font-size": "16px",
                      "font-weight": "bold",
                      "text-align": "center",
                      "width": "100px",
                      "height": "30px",
                      "background-color": "#4084bd",
                      "line-height": "30px",
                      "color": "rgb(255, 255, 255)",
                      "margin-left": "1px"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": [
                        "kpi",
                        "{object:kpiQueryModel}"
                      ],
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"点检评价\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }]
                }],
                "url": "images/map/map1.png"
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
                "parameters": {
                  "cgroupstyle": "table"
                }
              }
            ]
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
            "background-color": "#3a5066",
            "border": "0"
          },
          "advance": {
            "expression": {}
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "border-bottom": "1px solid #8ea0b0",
                  "border-left": "0",
                  "border-right": "0",
                  "border-top": "0",
                  "background-color": "#3a5066",
                  "margin-bottom": "10px"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "文字",
                    "type": "text",
                    "source": "TEXT",
                    "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                    "data": {
                      "applied": false,
                      "multipleCi": false,
                      "multipleKpi": false,
                      "resource": [],
                      "modelType": 300,
                      "resfilltype": "parameter",
                      "series": {
                        "manual": "新建文字",
                        "bind": "(function (source){\n  var formatter=function(elem){\n    return elem.value\n   }\n  return source.ci.getSeries(formatter);\n})"
                      },
                      "modelDisable": true
                    },
                    "style": {
                      "margin": "auto",
                      "padding": "0",
                      "font-size": "16px",
                      "font-weight": "bold",
                      "text-align": "center",
                      "width": "100px",
                      "height": "30px",
                      "background-color": "#4084bd",
                      "line-height": "30px",
                      "color": "rgb(255, 255, 255)",
                      "margin-left": "1px"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": [
                        "kpi",
                        "{object:kpiQueryModel}"
                      ],
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"关闭审核\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }]
                }],
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
                }
              }
            ]
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
            "background-color": "#3a5066",
            "border": "0"
          },
          "advance": {
            "expression": {}
          },
          "children": [{
            "type": "column",
            "col": 12,
            "children": [{
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "border": "none"
                },
                "advance": {
                  "expression": require("./content/block_3.js")
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
                              "expression": require("./content/repeater_7.js")
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
              },
              {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "border": "none"
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
                              "expression": require("./content/repeater_8.js")
                            },
                            "children": [{
                              "type": "column",
                              "children": [{
                                  "label": "控件组",
                                  "type": "ctrlgroup",
                                  "source": "CTRLGROUP",
                                  "advance": {
                                    "expression": require("./content/ctrlgroup_12.js")
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
                                    "expression": require("./content/ctrlgroup_13.js")
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
                  "expression": require("./content/block_5.js")
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
                              "expression": require("./content/repeater_9.js")
                            },
                            "children": [{
                              "type": "column",
                              "children": [{
                                  "label": "控件组",
                                  "type": "ctrlgroup",
                                  "source": "CTRLGROUP",
                                  "advance": {
                                    "expression": require("./content/ctrlgroup_14.js")
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
                                    "expression": require("./content/ctrlgroup_15.js")
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
                  "border-bottom": "1px solid #8ea0b0",
                  "border-left": "0",
                  "border-right": "0",
                  "border-top": "0",
                  "background-color": "#3a5066",
                  "margin-bottom": "10px"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "文字",
                    "type": "text",
                    "source": "TEXT",
                    "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                    "data": {
                      "applied": false,
                      "multipleCi": false,
                      "multipleKpi": false,
                      "resource": [],
                      "modelType": 300,
                      "resfilltype": "parameter",
                      "series": {
                        "manual": "新建文字",
                        "bind": "(function (source){\n  var formatter=function(elem){\n    return elem.value\n   }\n  return source.ci.getSeries(formatter);\n})"
                      },
                      "modelDisable": true
                    },
                    "style": {
                      "margin": "auto",
                      "padding": "0",
                      "font-size": "16px",
                      "font-weight": "bold",
                      "text-align": "center",
                      "width": "100px",
                      "height": "30px",
                      "background-color": "#4084bd",
                      "line-height": "30px",
                      "color": "rgb(255, 255, 255)",
                      "margin-left": "1px"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": [
                        "kpi",
                        "{object:kpiQueryModel}"
                      ],
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"历史记录\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }]
                }],
                "url": "images/map/map1.png"
              },
              {
                "label": "高级列表",
                "type": "dataTableAdvance",
                "source": "DATATABLEADVANCE",
                "parameters": {
                  "col": 1,
                  "pageSize": 5,
                  "listbottom": "standard"
                },
                "advance": {
                  "expression": require("./content/dataTableAdvance_6.js")
                },
                "style": {},
                "url": "images/map/map1.png",
                "echart": {}
              }
            ]
          }],
          "url": "images/map/map1.png",
          "parameters": {}
        },
        {
          "label": "控件组",
          "type": "ctrlgroup",
          "source": "CTRLGROUP",
          "advance": {
            "expression": require("./content/ctrlgroup_0.js")
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
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})