/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function() {
  return {
    "label": "产线",
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
          "background-color": "rgba(250,250,250,0)",
          "height": "calc(100vh - 100px)"
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
                          "expression": require("./content/ctrlgroup_5.js")
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
                    "padding": "8px",
                    "margin": "5px  5px  10px 5px"
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
                          "font-weight": "bold"
                        },
                        "advance": {
                          "getfunction": "kpiDataService.getValueList",
                          "category": "ci",
                          "condition": [
                            "kpi",
                            "{object:kpiQueryModel}"
                          ],
                          "expression": "expression = {\n on: {\n  init: function(event) {\n   var target = event.target;\n   var workObj = target.getParameter(\"id\");\n   target.getDomainAreaLineTree(function(find) {\n    if (find) {\n     var label = find.label;\n    }\n    target.setText(label);\n   });\n  }\n }\n}"
                        },
                        "parameters": {}
                      },
                      {
                        "label": "组态视图",
                        "type": "topo",
                        "source": "TOPO",
                        "advance": {
                          "variable": "",
                          "expression": require("./content/topo_6.js")
                        },
                        "style": {
                          "margin": "5px",
                          "font-size": "12px",
                          "background-repeat": "no-repeat"
                        },
                        "viewId": 469973748826064,
                        "parameters": {},
                        "hooks": {
                          "hooks": {}
                        }
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
                    "padding": "5px",
                    "margin": "5px"
                  },
                  "advance": {
                    "expression": require("./content/block_0.js")
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
                          "font-size": "12px",
                          "font-weight": "bold"
                        },
                        "advance": {
                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警列表\")\n        }\n    }\n}"
                        },
                        "data": {
                          "modelType": 300,
                          "resfilltype": "parameter",
                          "modelDisable": true
                        }
                      },
                      {
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "margin": "5px",
                          "padding": "10px",
                          "overflow-y": "auto",
                          "overflow-x": "hidden",
                          "border": "0"
                        },
                        "advance": {
                          "expression": {}
                        },
                        "children": [{
                          "type": "column",
                          "col": 12,
                          "children": [{
                            "label": "高级列表",
                            "type": "dataTableAdvance",
                            "source": "DATATABLEADVANCE",
                            "parameters": {
                              "col": 1,
                              "pageSize": 5,
                              "listbottom": "standard"
                            },
                            "advance": {
                              "expression": require("./content/dataTableAdvance_7.js")
                            },
                            "style": {
                              "margin": "5px",
                              "font-size": "12px"
                            },
                            "url": "images/map/map1.png"
                          }]
                        }],
                        "url": "images/map/map1.png",
                        "parameters": {}
                      }
                    ]
                  }],
                  "parameters": {}
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
                  "label": "控制板1",
                  "type": "block",
                  "source": "BLOCK",
                  "style": {
                    "padding": "5px",
                    "margin": "5px"
                  },
                  "advance": {
                    "expression": require("./content/block_2.js")
                  },
                  "children": [{
                    "type": "column",
                    "col": 12,
                    "children": [{
                      "type": "row",
                      "source": "ROW",
                      "advance": {
                        "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                      },
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
                              "margin": "5px  5px 0px 5px",
                              "min-height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"检修实绩（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
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
                                    "expression": require("./content/advanceEchart_8.js")
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
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }],
                          "col": 3
                        },
                        {
                          "type": "column",
                          "children": [{
                            "label": "控制板1",
                            "type": "block",
                            "source": "BLOCK",
                            "style": {
                              "padding": "5px",
                              "margin": "5px  5px 0px 5px",
                              "min-height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件分布（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
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
                            "url": "images/map/map1.png",
                            "parameters": {}
                          }],
                          "col": 5
                        },
                        {
                          "type": "column",
                          "children": [{
                            "label": "控制板1",
                            "type": "block",
                            "source": "BLOCK",
                            "style": {
                              "padding": "5px",
                              "margin": "5px  5px 0px 5px",
                              "overflow-y": "scroll",
                              "height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
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
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }],
                          "col": 4
                        }
                      ]
                    }]
                  }],
                  "url": "images/map/map1.png",
                  "parameters": {}
                },
                {
                  "label": "控制板1",
                  "type": "block",
                  "source": "BLOCK",
                  "style": {
                    "margin": "5px 5px 5px 5px"
                  },
                  "advance": {
                    "expression": require("./content/block_3.js")
                  },
                  "children": [{
                    "type": "column",
                    "col": 12,
                    "children": [{
                      "type": "row",
                      "source": "ROW",
                      "advance": {
                        "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                      },
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
                              "margin": "5px  5px 5px 5px",
                              "min-height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"智能决策任务实施状况（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
                                  "url": "images/map/map1.png"
                                },
                                {
                                  "type": "row",
                                  "source": "ROW",
                                  "advance": {
                                    "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                                  },
                                  "parameters": {
                                    "alignment": "bootstrap"
                                  },
                                  "style": {},
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
                                          "expression": require("./content/advanceEchart_15.js")
                                        },
                                        "style": {
                                          "width": "100%",
                                          "height": "250px"
                                        },
                                        "url": "images/map/map1.png"
                                      }],
                                      "col": 6
                                    },
                                    {
                                      "type": "column",
                                      "children": [{
                                        "label": "高级视图",
                                        "type": "advanceEchart",
                                        "source": "ADVANCEECHART",
                                        "parameters": {
                                          "theme": "default"
                                        },
                                        "advance": {
                                          "expression": require("./content/advanceEchart_16.js")
                                        },
                                        "style": {
                                          "width": "100%",
                                          "height": "250px"
                                        },
                                        "url": "images/map/map1.png"
                                      }],
                                      "col": 6
                                    }
                                  ]
                                }
                              ]
                            }],
                            "parameters": {},
                            "url": "images/map/map1.png"
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
                              "margin": "5px  5px 5px 5px",
                              "min-height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件统计（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
                                  "url": "images/map/map1.png"
                                },
                                {
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
                                  "label": "重复单元",
                                  "type": "repeater",
                                  "source": "REPEATER",
                                  "parameters": {
                                    "col": 3
                                  },
                                  "advance": {
                                    "getListTable": "allprojects",
                                    "expression": require("./content/repeater_11.js")
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
                                          "expression": require("./content/advanceEchart_17.js")
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
                                          "expression": require("./content/ctrlgroup_18.js")
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
                              "margin": "5px  5px 0px 5px",
                              "overflow-y": "scroll",
                              "height": "390px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
                                  "url": "images/map/map1.png"
                                },
                                {
                                  "label": "控件组",
                                  "type": "ctrlgroup",
                                  "source": "CTRLGROUP",
                                  "advance": {
                                    "expression": require("./content/ctrlgroup_12.js")
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
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }],
                          "col": 4
                        }
                      ]
                    }]
                  }],
                  "url": "images/map/map1.png",
                  "parameters": {}
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
                      "type": "row",
                      "source": "ROW",
                      "advance": {
                        "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                      },
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
                              "height": "390px",
                              "margin": "5px  5px  0px  5px"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"设备状态总览\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
                                  "url": "images/map/map1.png"
                                },
                                {
                                  "label": "重复单元",
                                  "type": "repeater",
                                  "source": "REPEATER",
                                  "parameters": {
                                    "col": 1
                                  },
                                  "advance": {
                                    "getListTable": "allprojects",
                                    "expression": require("./content/repeater_13.js")
                                  },
                                  "children": [{
                                    "type": "column",
                                    "col": [
                                      12,
                                      0
                                    ],
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
                                            "label": "控件组",
                                            "type": "ctrlgroup",
                                            "source": "CTRLGROUP",
                                            "advance": {
                                              "expression": require("./content/ctrlgroup_22.js")
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
                                              "expression": require("./content/svgchart_23.js")
                                            },
                                            "style": {
                                              "margin": "0px",
                                              "font-size": "12px",
                                              "height": "334px",
                                              "width": "62px",
                                              "margin-top": "-30px"
                                            },
                                            "parameters": {}
                                          }],
                                          "col": 6
                                        }
                                      ],
                                      "advance": {
                                        "expression": require("./content/row_19.js")
                                      }
                                    }]
                                  }],
                                  "style": {},
                                  "url": "images/map/map1.png"
                                }
                              ]
                            }],
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }],
                          "col": 2
                        },
                        {
                          "type": "column",
                          "children": [{
                            "label": "控制板1",
                            "type": "block",
                            "source": "BLOCK",
                            "style": {
                              "padding": "5px",
                              "height": "390px",
                              "margin": "5px  5px  0px  5px",
                              "overflow-y": "scroll"
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
                                    "padding": "5px",
                                    "font-size": "14px",
                                    "font-weight": "bold",
                                    "margin": "5px",
                                    "color": "rgb(255, 255, 255)"
                                  },
                                  "advance": {
                                    "getfunction": "kpiDataService.getValueList",
                                    "category": "ci",
                                    "condition": [
                                      "kpi",
                                      "{object:kpiQueryModel}"
                                    ],
                                    "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"在线测点状态总览\")\n        }\n    }\n}"
                                  },
                                  "parameters": {},
                                  "url": "images/map/map1.png"
                                },
                                {
                                  "label": "重复单元",
                                  "type": "repeater",
                                  "source": "REPEATER",
                                  "parameters": {
                                    "col": 7
                                  },
                                  "advance": {
                                    "getListTable": "allprojects",
                                    "expression": require("./content/repeater_14.js")
                                  },
                                  "children": [{
                                    "type": "column",
                                    "col": [
                                      1,
                                      5
                                    ],
                                    "children": [{
                                        "label": "控件组",
                                        "type": "ctrlgroup",
                                        "source": "CTRLGROUP",
                                        "advance": {
                                          "expression": require("./content/ctrlgroup_20.js")
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
                                                "expression": require("./content/ctrlgroup_24.js")
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
                                                "expression": require("./content/svgchart_25.js")
                                              },
                                              "style": {
                                                "margin": "0px",
                                                "font-size": "12px",
                                                "height": "140px",
                                                "width": "63px"
                                              },
                                              "parameters": {}
                                            }],
                                            "col": 6
                                          }
                                        ],
                                        "advance": {
                                          "expression": require("./content/row_21.js")
                                        }
                                      }
                                    ]
                                  }],
                                  "style": {
                                    "margin-left": "10px"
                                  },
                                  "url": "images/map/map1.png"
                                }
                              ]
                            }],
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }],
                          "col": 10
                        }
                      ]
                    }]
                  }],
                  "url": "images/map/map1.png",
                  "parameters": {}
                }
              ]
            }],
            "advance": {
              "expression": "{}"
            },
            "parameters": {},
            "url": "images/map/map1.png"
          }]
        }]
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})