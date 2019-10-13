/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
psdefine(function() {
  return {
    "label": "编制报告",
    "layout": {
      "type": "column",
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
                "style": {
                  "margin": "5px",
                  "padding": "0",
                  "font-size": "12px",
                  "font-weight": "bold"
                },
                "advance": {
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"\")\n        }\n    }\n}"
                },
                "data": {
                  "modelType": 300,
                  "resfilltype": "parameter",
                  "modelDisable": true
                },
                "parameters": {}
              }],
              "col": 11
            },
            {
              "type": "column",
              "children": [{
                "label": "按钮",
                "type": "button",
                "source": "BUTTON",
                "parameters": {
                  "text": "求助",
                  "icon": {
                    "perfix": "proudsmart",
                    "css": "ps-help",
                    "id": "66"
                  }
                },
                "advance": {
                  "expression": require("./content/button_4.js")
                },
                "style": {
                  "color": "#fff",
                  "background-color": "#3c8dbc"
                },
                "url": "images/map/map1.png"
              }],
              "col": 1
            }
          ],
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
            "font-size": "12px"
          },
          "help": "../pdf/ctrlgroup.pdf",
          "url": "images/map/map1.png",
          "parameters": {
            "cgroupstyle": "table"
          }
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
      "col": 12,
      "reportAuthorized": {}
    },
    "setting": require("../setting.js")
  }
})