/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
psdefine(function() {
  return {
    "label": "报告编制",
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
          "background-color": "#031f32",
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
              "label": "按钮",
              "type": "button",
              "source": "BUTTON",
              "parameters": {
                "text": "返回",
                "icon": {
                  "perfix": "proudsmart",
                  "css": "ps-exit",
                  "id": "56"
                }
              },
              "advance": {
                "expression": "expression = {\n  on : {\n    click : function(event){\n       var target = event.target;\n       target.navigateTo(\"index\", {\n                main: 0,\n            }, \"self\");\n    }\n  }\n}"
              },
              "style": {
                "color": "#fff",
                "background-color": "#3c8dbc",
                "margin": "5px"
              },
              "url": "images/map/map1.png"
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
                "font-size": "14px",
                "font-weight": "bold"
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
                "expression": require("./content/ctrlgroup_1.js")
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
              "label": "控制板1",
              "type": "block",
              "source": "BLOCK",
              "style": {
                "padding": "0px",
                "margin": "0px",
                "background-color": ""
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"离线诊断\")\n        }\n    }\n}"
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
                      "expression": require("./content/dataTableAdvance_2.js")
                    },
                    "style": {},
                    "url": "images/map/map1.png",
                    "echart": {}
                  },
                  {
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