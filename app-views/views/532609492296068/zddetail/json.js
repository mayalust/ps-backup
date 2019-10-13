/** 仪表板 : [ 我的首页[协同工作员-1级] ] - 532609492296068 **/
psdefine(function() {
  return {
    "label": "诊断详情",
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"申请方意见\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }]
                }],
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
                        "expression": require("./content/ctrlgroup_2.js")
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
                    }],
                    "col": 6
                  },
                  {
                    "type": "column",
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
                      "url": "images/map/map1.png",
                      "parameters": {
                        "cgroupstyle": "table"
                      }
                    }],
                    "col": 6
                  }
                ],
                "advance": {
                  "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                }
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"协同方意见\")\n        }\n    }\n}"
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
                "url": "images/map/map1.png",
                "parameters": {
                  "cgroupstyle": "table"
                }
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
            "margin": "5px",
            "font-size": "12px"
          },
          "help": "../pdf/ctrlgroup.pdf",
          "url": "images/map/map1.png",
          "parameters": {
            "cgroupstyle": "table"
          }
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})