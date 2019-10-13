/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
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
                    "expression": require("./content/block_1.js")
                  },
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
                "padding": "10px",
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
                }]
              }],
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待处理任务\")\n        }\n    }\n}"
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
                      "expression": require("./content/dataTableAdvance_3.js")
                    },
                    "style": {},
                    "url": "images/map/map1.png",
                    "echart": {}
                  },
                  {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "padding": "5px",
                      "margin": "5px",
                      "background-color": ""
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
                            "expression": require("./content/ctrlgroup_5.js")
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
                            "margin": "5px",
                            "padding": "0",
                            "font-size": "16px",
                            "font-weight": "bold"
                          },
                          "advance": {
                            "getfunction": "kpiDataService.getValueList",
                            "category": "ci",
                            "condition": [
                              "kpi",
                              "{object:kpiQueryModel}"
                            ],
                            "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"已处理任务\")\n        }\n    }\n}"
                          },
                          "parameters": {}
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
                            "expression": require("./content/dataTableAdvance_6.js")
                          },
                          "style": {
                            "margin": "5px",
                            "font-size": "12px"
                          },
                          "url": "images/map/map1.png"
                        }
                      ]
                    }],
                    "url": "images/map/map1.png"
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