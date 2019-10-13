/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
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
          "padding": "0",
          "margin": "0",
          "border": "0",
          "background-color": "rgba(250,250,250,0)",
          "max-height": "calc( 100vh - 115px)",
          "overflow-y": "scroll"
        },
        "advance": {
          "expression": "{}"
        },
        "children": [{
          "type": "column",
          "col": 12,
          "children": [{
              "label": "重复单元",
              "type": "repeater",
              "source": "REPEATER",
              "parameters": {
                "col": 4
              },
              "advance": {
                "getListTable": "allprojects",
                "expression": require("./content/repeater_0.js")
              },
              "children": [{
                "type": "column",
                "children": [{
                  "label": "控制板1",
                  "type": "block",
                  "source": "BLOCK",
                  "style": {
                    "padding": "10px",
                    "margin": "5px"
                  },
                  "advance": {
                    "expression": "expression = {\n  on: {\n    repeat: function(event) {\n      var target = event.target;\n\n      var data = target.$repeatData;\n      var css = data.css;\n\n      target.setCss(css);\n    },\n    click: function(event) {\n      var target = event.target;\n      var data = target.$repeatData;\n\n    }\n  }\n}"
                  },
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
                      }
                    }]
                  }],
                  "url": "images/map/map1.png",
                  "parameters": {}
                }],
                "col": [
                  3,
                  0
                ]
              }],
              "style": {},
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
                            "text-align": "left"
                          },
                          "advance": {
                            "getfunction": "kpiDataService.getValueList",
                            "category": "ci",
                            "condition": [
                              "kpi",
                              "{object:kpiQueryModel}"
                            ],
                            "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待检修任务\")\n        }\n    }\n}"
                          },
                          "parameters": {},
                          "echart": {},
                          "url": "images/map/map1.png"
                        }],
                        "col": 10
                      },
                      {
                        "type": "column",
                        "children": [],
                        "col": 2
                      }
                    ]
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
                      "expression": require("./content/dataTableAdvance_1.js")
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
                            "text-align": "left"
                          },
                          "advance": {
                            "getfunction": "kpiDataService.getValueList",
                            "category": "ci",
                            "condition": [
                              "kpi",
                              "{object:kpiQueryModel}"
                            ],
                            "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待维护任务\")\n        }\n    }\n}"
                          },
                          "parameters": {},
                          "echart": {},
                          "url": "images/map/map1.png"
                        }],
                        "col": 10
                      },
                      {
                        "type": "column",
                        "children": [],
                        "col": 2
                      }
                    ]
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
                      "expression": require("./content/dataTableAdvance_2.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "12px"
                    },
                    "url": "images/map/map1.png",
                    "echart": {}
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
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": require("./content/ctrlgroup_3.js")
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
                      "text-align": "left"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": [
                        "kpi",
                        "{object:kpiQueryModel}"
                      ],
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"未结束任务\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
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
                      "expression": require("./content/dataTableAdvance_4.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "12px"
                    },
                    "url": "images/map/map1.png",
                    "echart": {}
                  }
                ]
              }],
              "url": "images/map/map1.png",
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