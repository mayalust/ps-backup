/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
psdefine(function() {
  return {
    "label": "历史记录备用",
    "layout": {
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
                "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"历史记录\")\n        }\n    }\n}"
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
                "expression": require("./content/dataTableAdvance_0.js")
              },
              "style": {},
              "url": "images/map/map1.png",
              "echart": {}
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