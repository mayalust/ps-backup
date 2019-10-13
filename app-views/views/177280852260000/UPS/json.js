/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function() {
  return {
    "label": "UPS",
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
          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n        }\n    }\n}"
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
                    "parameters": {},
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
                "padding": "5px",
                "margin": "10px",
                "border": "0",
                "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
                "background-color": "rgba(250,250,250,0)",
                "height": "calc(100vh - 130px)",
                "overflow-y": "auto",
                "overflow-x": "hidden"
              },
              "advance": {
                "expression": "{}"
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
                        "label": "组态视图",
                        "type": "topo",
                        "source": "TOPO",
                        "advance": {
                          "variable": "",
                          "expression": "require([\"../solution/customview/homepage/deviceDetail\"])"
                        },
                        "style": {
                          "margin": "5px",
                          "font-size": "12px",
                          "background-repeat": "no-repeat"
                        },
                        "viewId": 546900339506067,
                        "url": "images/map/map1.png",
                        "parameters": {},
                        "hooks": {
                          "hooks": {}
                        }
                      }]
                    }]
                  },
                  {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
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
                                "margin": "5px",
                                "overflow-y": "scroll",
                                "height": "280px"
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
                                      "text-align": "left",
                                      "color": "rgb(255, 255, 255)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"模拟量监测\")\n        }\n    }\n}"
                                    },
                                    "parameters": {},
                                    "url": "images/map/map1.png"
                                  },
                                  {
                                    "parameters": {
                                      "colwidth": 2,
                                      "itemstyle": "normal",
                                      "webSocket": true
                                    },
                                    "data": {
                                      "applied": false,
                                      "model": {
                                        "id": 2013359220068
                                      },
                                      "kpi": [],
                                      "modelType": 0,
                                      "resfilltype": "manual",
                                      "resource": [],
                                      "series": {
                                        "manual": [],
                                        "bind": "(function (source){\n  return source.getResource();\n})"
                                      }
                                    },
                                    "label": "检测数据列表",
                                    "type": "kpilist3",
                                    "source": "KPILIST3",
                                    "advance": {
                                      "variable": "",
                                      "getoption": "selected-kpi",
                                      "expression": require("./content/kpilist3_1.js")
                                    }
                                  }
                                ]
                              }]
                            }],
                            "col": 6
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
                                "height": "280px",
                                "overflow-y": "scroll"
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
                                      "text-align": "left",
                                      "color": "rgb(255, 255, 255)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"设备状态\");\n        }\n    }\n}"
                                    },
                                    "parameters": {},
                                    "url": "images/map/map1.png"
                                  },
                                  {
                                    "label": "重复单元",
                                    "type": "repeater",
                                    "source": "REPEATER",
                                    "parameters": {
                                      "col": 4
                                    },
                                    "advance": {
                                      "getListTable": "allprojects",
                                      "expression": require("./content/repeater_2.js")
                                    },
                                    "children": [{
                                      "type": "column",
                                      "children": [{
                                        "label": "控制板1",
                                        "type": "block",
                                        "source": "BLOCK",
                                        "style": {
                                          "padding": "0 3px",
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
                                            "parameters": {
                                              "colwidth": 2,
                                              "itemstyle": "normal",
                                              "webSocket": true
                                            },
                                            "data": {
                                              "applied": false,
                                              "model": {
                                                "id": 2013359220068
                                              },
                                              "kpi": [],
                                              "modelType": 0,
                                              "resfilltype": "manual",
                                              "resource": [],
                                              "series": {
                                                "manual": [],
                                                "bind": "(function (source){\n  return source.getResource();\n})"
                                              }
                                            },
                                            "label": "状态列表展示",
                                            "type": "kpilist4",
                                            "source": "KPILIST4",
                                            "advance": {
                                              "variable": "",
                                              "getoption": "selected-kpi",
                                              "expression": require("./content/kpilist4_4.js")
                                            }
                                          }]
                                        }],
                                        "parameters": {}
                                      }],
                                      "col": [
                                        3,
                                        0
                                      ]
                                    }]
                                  }
                                ]
                              }]
                            }],
                            "col": 6
                          }
                        ]
                      }]
                    }]
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
                      "expression": {}
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
                                      "text-align": "left",
                                      "color": "rgb(255, 255, 255)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警通知\")\n        }\n    }\n}"
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
                                      "pageSize": 5,
                                      "listbottom": "none"
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
                              }]
                            }],
                            "col": 6
                          },
                          {
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
                                      "text-align": "left",
                                      "color": "rgb(255, 255, 255)"
                                    },
                                    "advance": {
                                      "getfunction": "kpiDataService.getValueList",
                                      "category": "ci",
                                      "condition": [
                                        "kpi",
                                        "{object:kpiQueryModel}"
                                      ],
                                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"离线诊断\")\n        }\n    }\n}"
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
                                      "pageSize": 25,
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
                            "col": 6
                          }
                        ]
                      }]
                    }]
                  }
                ]
              }],
              "parameters": {}
            }
          ]
        }],
        "parameters": {}
      }],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})