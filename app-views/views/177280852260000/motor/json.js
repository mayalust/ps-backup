/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function() {
  return {
    "label": "电机",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "8px",
          "margin": "5px"
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
                    }
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
                      "expression": require("./content/ctrlgroup_0.js")
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
              "label": "控制板1",
              "type": "block",
              "source": "BLOCK",
              "style": {
                "padding": "0px",
                "margin": "0px",
                "border": "0",
                "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
                "background-color": "rgba(250,250,250,0)",
                "height": "calc(100vh - 130px)",
                "overflow-y": "auto",
                "overflow-x": "hidden"
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
                    "padding": "0px",
                    "margin": "0px",
                    "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
                    "background-color": "rgba(250,250,250,0)",
                    "border": "0"
                  },
                  "children": [{
                    "type": "column",
                    "col": 12,
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
                            "type": "row",
                            "source": "ROW",
                            "parameters": {
                              "alignment": "bootstrap"
                            },
                            "style": {},
                            "children": [{
                                "type": "column",
                                "children": [{
                                  "label": "控制板1",
                                  "type": "block",
                                  "source": "BLOCK",
                                  "style": {
                                    "padding": "5px",
                                    "margin": "5px",
                                    "border": "0px"
                                  },
                                  "advance": {
                                    "expression": {}
                                  },
                                  "children": [{
                                    "type": "column",
                                    "col": 12,
                                    "children": [{
                                      "label": "组态视图",
                                      "type": "topo",
                                      "source": "TOPO",
                                      "advance": {
                                        "variable": "",
                                        "expression": require("./content/topo_4.js")
                                      },
                                      "style": {
                                        "margin": "5px",
                                        "font-size": "12px",
                                        "background-repeat": "no-repeat"
                                      },
                                      "viewId": 469973748826064,
                                      "parameters": {},
                                      "url": "images/map/map1.png",
                                      "hooks": {
                                        "hooks": {}
                                      }
                                    }]
                                  }]
                                }],
                                "col": 4
                              },
                              {
                                "type": "column",
                                "children": [{
                                  "label": "控制板1",
                                  "type": "block",
                                  "source": "BLOCK",
                                  "style": {
                                    "padding": "5px",
                                    "margin": "5px",
                                    "border": "0",
                                    "border-left": "1px solid #25729D",
                                    "height": "450px"
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
                                          "margin": "5px",
                                          "padding": "0",
                                          "font-size": "15px",
                                          "font-weight": "bold",
                                          "color": "rgb(255, 255, 255)"
                                        },
                                        "advance": {
                                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"电机电流趋势\")\n        }\n    }\n}"
                                        },
                                        "data": {
                                          "modelType": 300,
                                          "resfilltype": "parameter",
                                          "modelDisable": true
                                        },
                                        "parameters": {}
                                      },
                                      {
                                        "label": "高级视图",
                                        "type": "advanceEchart",
                                        "source": "ADVANCEECHART",
                                        "parameters": {
                                          "theme": "default"
                                        },
                                        "advance": {
                                          "expression": require("./content/advanceEchart_5.js")
                                        },
                                        "style": {
                                          "width": "100%",
                                          "height": "400px"
                                        },
                                        "url": "images/map/map1.png"
                                      }
                                    ]
                                  }],
                                  "parameters": {}
                                }],
                                "col": 8
                              }
                            ],
                            "url": "images/map/map1.png",
                            "advance": {
                              "expression": require("./content/row_2.js")
                            }
                          }]
                        }]
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
                              "label": "控制板1",
                              "type": "block",
                              "source": "BLOCK",
                              "style": {
                                "margin": "5px"
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
                                      "margin": "5px",
                                      "padding": "0",
                                      "font-size": "14px",
                                      "font-weight": "bold",
                                      "line-height": "30px",
                                      "text-align": "left",
                                      "color": "rgb(238, 238, 238)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警通知\");\n        }\n    }\n}"
                                    },
                                    "parameters": {},
                                    "url": "images/map/map1.png"
                                  },
                                  {
                                    "label": "高级列表",
                                    "type": "dataTableAdvance",
                                    "source": "DATATABLEADVANCE",
                                    "parameters": {
                                      "col": 1,
                                      "pageSize": 10,
                                      "listbottom": "standard"
                                    },
                                    "advance": {
                                      "expression": require("./content/dataTableAdvance_3.js")
                                    },
                                    "style": {
                                      "margin": "5px",
                                      "font-size": "12px"
                                    },
                                    "url": "images/map/map1.png"
                                  }
                                ]
                              }],
                              "parameters": {}
                            }],
                            "col": 7
                          },
                          {
                            "type": "column",
                            "children": [{
                              "label": "控制板1",
                              "type": "block",
                              "source": "BLOCK",
                              "style": {
                                "margin": "5px"
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
                                      "margin": "5px",
                                      "padding": "0",
                                      "font-size": "14px",
                                      "font-weight": "bold",
                                      "line-height": "30px",
                                      "text-align": "left",
                                      "color": "rgb(238, 238, 238)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"离线诊断\");\n        }\n    }\n}"
                                    },
                                    "parameters": {},
                                    "url": "images/map/map1.png"
                                  },
                                  {
                                    "label": "高级列表",
                                    "type": "dataTableAdvance",
                                    "source": "DATATABLEADVANCE",
                                    "parameters": {
                                      "col": 1,
                                      "pageSize": 10,
                                      "listbottom": "none"
                                    },
                                    "advance": {
                                      "expression": "require(['solution/customview/offline.js'])"
                                    },
                                    "style": {
                                      "margin": "5px",
                                      "font-size": "12px"
                                    },
                                    "url": "images/map/map1.png"
                                  }
                                ]
                              }]
                            }],
                            "col": 5
                          }
                        ],
                        "url": "images/map/map1.png",
                        "advance": {
                          "expression": require("./content/row_1.js")
                        }
                      }
                    ]
                  }],
                  "advance": {
                    "expression": {}
                  },
                  "url": "images/map/map1.png",
                  "parameters": {}
                }]
              }],
              "parameters": {}
            }
          ]
        }],
        "url": "images/map/map1.png",
        "parameters": {}
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})