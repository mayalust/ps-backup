/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function() {
  return {
    "label": "厂区二层",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "0px",
          "margin": "0px",
          "border": "0",
          "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
          "background-color": "rgba(250,250,250,0)"
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
              "padding": "10px",
              "margin": "5px",
              "border": "0",
              "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
              "background-color": "rgba(250,250,250,0)"
            },
            "advance": {
              "expression": {}
            },
            "children": [{
              "type": "column",
              "col": 12,
              "children": [{
                  "type": "row",
                  "source": "ROW",
                  "parameters": {
                    "alignment": "bootstrap"
                  },
                  "style": {},
                  "children": [{
                      "type": "column",
                      "children": [{
                        "label": "数结构导航",
                        "type": "navitree",
                        "source": "NAVITREE",
                        "advance": {
                          "expression": ""
                        },
                        "style": {}
                      }],
                      "col": 8
                    },
                    {
                      "type": "column",
                      "children": [{
                        "label": "控件组",
                        "type": "ctrlgroup",
                        "source": "CTRLGROUP",
                        "advance": {
                          "expression": require("./content/ctrlgroup_1.js")
                        },
                        "style": {
                          "margin": "5px",
                          "font-size": "14px",
                          "font-weight": "bold"
                        },
                        "help": "../pdf/ctrlgroup.pdf",
                        "url": "images/map/map1.png",
                        "parameters": {
                          "cgroupstyle": "table"
                        }
                      }],
                      "col": 4
                    }
                  ],
                  "advance": {
                    "expression": "expression = {\n \"on\": {\n  \"init\": function(event) {\n   var target = event.target;\n   var tabs = target.getValue(\"global/tabs\");\n   var main = target.getParameter(\"main\");\n   if (tabs && main) {\n    if (tabs[main].alias != \"home\") {\n     target.setDimension([0, 0]);\n    }\n   }\n  }\n }\n};"
                  }
                },
                {
                  "type": "row",
                  "source": "ROW",
                  "parameters": {
                    "alignment": "bootstrap"
                  },
                  "style": {},
                  "children": [{
                      "type": "column",
                      "children": [{
                          "label": "组态视图",
                          "type": "topo",
                          "source": "TOPO",
                          "advance": {
                            "variable": "",
                            "expression": "require(['../solution/customview/deviceAreaPreview/arealevel2'])"
                          },
                          "style": {
                            "font-size": "12px",
                            "background-repeat": "no-repeat"
                          },
                          "viewId": 469973748826065,
                          "parameters": {},
                          "hooks": {
                            "hooks": {}
                          }
                        },
                        {
                          "label": "控制板1",
                          "type": "block",
                          "source": "BLOCK",
                          "style": {
                            "height": "276px",
                            "overflow-y": "auto"
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
                                "style": {
                                  "padding": "0",
                                  "font-size": "12px",
                                  "font-weight": "bold",
                                  "color": "rgb(255, 255, 255)"
                                },
                                "advance": {
                                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"检修实绩(当月内)\")\n        }\n    }\n}"
                                },
                                "data": {
                                  "modelType": 300,
                                  "resfilltype": "parameter",
                                  "modelDisable": true
                                },
                                "parameters": {}
                              },
                              {
                                "label": "重复单元",
                                "type": "repeater",
                                "source": "REPEATER",
                                "parameters": {
                                  "col": 3
                                },
                                "advance": {
                                  "getListTable": "allprojects",
                                  "expression": require("./content/repeater_4.js")
                                },
                                "children": [{
                                  "type": "column",
                                  "children": [{
                                    "label": "高级视图",
                                    "type": "advanceEchart",
                                    "source": "ADVANCEECHART",
                                    "parameters": {
                                      "theme": "default"
                                    },
                                    "advance": {
                                      "expression": require("./content/advanceEchart_7.js")
                                    },
                                    "style": {
                                      "margin": "auto",
                                      "width": "100%",
                                      "height": "250px"
                                    },
                                    "url": "images/map/map1.png"
                                  }],
                                  "col": [
                                    4,
                                    0
                                  ]
                                }],
                                "style": {}
                              }
                            ]
                          }],
                          "parameters": {}
                        }
                      ],
                      "col": 8
                    },
                    {
                      "type": "column",
                      "children": [{
                          "label": "控制板1",
                          "type": "block",
                          "source": "BLOCK",
                          "style": {
                            "margin": "3px 5px 5px 5px",
                            "padding": "10px",
                            "height": "290px",
                            "overflow-y": "auto"
                          },
                          "advance": {
                            "expression": "{}"
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
                                  "margin": "10px  5px 5px 5px",
                                  "padding": "0",
                                  "font-size": "12px",
                                  "font-weight": "bold",
                                  "color": "rgb(255, 255, 255)"
                                },
                                "advance": {
                                  "getfunction": "kpiDataService.getValueList",
                                  "category": "ci",
                                  "condition": [
                                    "kpi",
                                    "{object:kpiQueryModel}"
                                  ],
                                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"状态总览 \");\n        }\n    }\n}"
                                },
                                "parameters": {}
                              },
                              {
                                "label": "重复单元",
                                "type": "repeater",
                                "source": "REPEATER",
                                "parameters": {
                                  "col": 3
                                },
                                "advance": {
                                  "getListTable": "allprojects",
                                  "expression": require("./content/repeater_5.js")
                                },
                                "children": [{
                                  "type": "column",
                                  "col": [
                                    4,
                                    0
                                  ],
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
                                      }
                                    },
                                    {
                                      "type": "row",
                                      "source": "ROW",
                                      "parameters": {
                                        "alignment": "bootstrap"
                                      },
                                      "style": {},
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
                                            }
                                          }],
                                          "col": 6
                                        },
                                        {
                                          "type": "column",
                                          "children": [{
                                            "label": "SVG视图",
                                            "type": "svgchart",
                                            "source": "SVGCHART",
                                            "advance": {
                                              "expression": require("./content/svgchart_13.js")
                                            },
                                            "style": {
                                              "margin": "0px",
                                              "font-size": "12px",
                                              "height": "150px"
                                            },
                                            "parameters": {}
                                          }],
                                          "col": 6
                                        }
                                      ],
                                      "url": "images/map/map1.png",
                                      "advance": {
                                        "expression": require("./content/row_9.js")
                                      }
                                    }
                                  ]
                                }],
                                "style": {},
                                "url": "images/map/map1.png"
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
                            "margin": "5px 5px 5px 5px",
                            "padding": "10px",
                            "height": "270px",
                            "overflow-y": "auto"
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
                                "style": {
                                  "padding": "5px",
                                  "font-size": "12px",
                                  "font-weight": "bold",
                                  "text-align": "left",
                                  "color": "rgb(255, 255, 255)"
                                },
                                "advance": {
                                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                                },
                                "data": {
                                  "modelType": 300,
                                  "resfilltype": "parameter",
                                  "modelDisable": true
                                },
                                "url": "images/map/map1.png"
                              },
                              {
                                "label": "控件组",
                                "type": "ctrlgroup",
                                "source": "CTRLGROUP",
                                "advance": {
                                  "expression": "require([\"../solution/customview/homepage/diagnoseReport.js\"])"
                                },
                                "style": {
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
                          "url": "images/map/map1.png",
                          "parameters": {}
                        },
                        {
                          "label": "控制板1",
                          "type": "block",
                          "source": "BLOCK",
                          "style": {
                            "margin": "8px 7px 7px 5px",
                            "height": "330px",
                            "overflow-y": "auto"
                          },
                          "advance": {
                            "expression": require("./content/block_2.js")
                          },
                          "children": [{
                            "type": "column",
                            "col": 12,
                            "children": [{
                                "label": "文字",
                                "type": "text",
                                "source": "TEXT",
                                "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                                "style": {
                                  "padding": "5px",
                                  "font-size": "12px",
                                  "font-weight": "bold",
                                  "text-align": "left",
                                  "color": "rgb(255, 255, 255)"
                                },
                                "advance": {
                                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常预报分类（当月内）\")\n        }\n    }\n}"
                                },
                                "data": {
                                  "modelType": 300,
                                  "resfilltype": "parameter",
                                  "modelDisable": true
                                },
                                "url": "images/map/map1.png"
                              },
                              {
                                "label": "高级视图",
                                "type": "advanceEchart",
                                "source": "ADVANCEECHART",
                                "parameters": {
                                  "theme": "default"
                                },
                                "advance": {
                                  "expression": "require([\"../solution/customview/homepage/abnormalCategory.js\"])"
                                },
                                "style": {
                                  "margin": "auto",
                                  "width": "100%",
                                  "height": "320px"
                                },
                                "url": "images/map/map1.png"
                              }
                            ]
                          }],
                          "parameters": {}
                        },
                        {
                          "label": "控制板1",
                          "type": "block",
                          "source": "BLOCK",
                          "style": {
                            "margin": "5px 5px 10px 5px",
                            "height": "272px"
                          },
                          "advance": {
                            "expression": require("./content/block_3.js")
                          },
                          "children": [{
                            "type": "column",
                            "col": 12,
                            "children": [{
                                "label": "文字",
                                "type": "text",
                                "source": "TEXT",
                                "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                                "style": {
                                  "margin": "auto",
                                  "padding": "5px",
                                  "font-size": "12px",
                                  "font-weight": "bold",
                                  "text-align": "left",
                                  "color": "rgb(255, 255, 255)"
                                },
                                "advance": {
                                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件统计（当月内）\")\n        }\n    }\n}"
                                },
                                "data": {
                                  "kpi": [],
                                  "modelType": 300,
                                  "resfilltype": "parameter",
                                  "resource": [],
                                  "modelDisable": true
                                },
                                "parameters": {}
                              },
                              {
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
                                "label": "重复单元",
                                "type": "repeater",
                                "source": "REPEATER",
                                "parameters": {
                                  "col": 3
                                },
                                "advance": {
                                  "getListTable": "allprojects",
                                  "expression": "require([\"../solution/customview/homepage/abnormalReport.js\"])"
                                },
                                "children": [{
                                  "type": "column",
                                  "col": [
                                    4,
                                    0
                                  ],
                                  "children": [{
                                      "label": "高级视图",
                                      "type": "advanceEchart",
                                      "source": "ADVANCEECHART",
                                      "parameters": {
                                        "theme": "default"
                                      },
                                      "advance": {
                                        "expression": require("./content/advanceEchart_10.js")
                                      },
                                      "style": {
                                        "margin": "auto",
                                        "width": "100%",
                                        "height": "250px"
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
                                  ]
                                }],
                                "style": {},
                                "url": "images/map/map1.png"
                              }
                            ]
                          }],
                          "url": "images/map/map1.png",
                          "parameters": {}
                        }
                      ],
                      "col": 4
                    }
                  ],
                  "advance": {
                    "expression": require("./content/row_0.js")
                  }
                }
              ]
            }],
            "url": "images/map/map1.png"
          }]
        }]
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})