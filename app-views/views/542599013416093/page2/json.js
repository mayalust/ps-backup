/** 仪表板 : [ 我的首页[审核工作员-1级] ] - 542599013416093 **/
psdefine(function() {
  return {
    "label": "带关闭弹出框",
    "layout": {
      "type": "column",
      "children": [{
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
                "label": "文字",
                "type": "text",
                "source": "TEXT",
                "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                "style": {
                  "margin": "5px",
                  "padding": "0",
                  "font-size": "14px",
                  "font-weight": "bold"
                },
                "advance": {
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"点检评价\")\n        }\n    }\n}"
                },
                "data": {
                  "modelType": 300,
                  "resfilltype": "parameter",
                  "modelDisable": true
                },
                "parameters": {}
              },
              {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "5px",
                  "margin": "5px",
                  "border-top": "0",
                  "border-bottom": "1px solid #eee"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": []
                }]
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
                "parameters": {
                  "cgroupstyle": "table"
                }
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
                "label": "文字",
                "type": "text",
                "source": "TEXT",
                "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                "style": {
                  "margin": "5px",
                  "padding": "0",
                  "font-size": "14px",
                  "font-weight": "bold"
                },
                "advance": {
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"关闭说明\")\n        }\n    }\n}"
                },
                "data": {
                  "modelType": 300,
                  "resfilltype": "parameter",
                  "modelDisable": true
                },
                "parameters": {}
              },
              {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "5px",
                  "margin": "5px",
                  "border-top": "0",
                  "border-bottom": "1px solid #eee"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": []
                }]
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
                }
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
                "label": "文字",
                "type": "text",
                "source": "TEXT",
                "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
                "style": {
                  "margin": "5px",
                  "padding": "0",
                  "font-size": "14px",
                  "font-weight": "bold"
                },
                "advance": {
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"历史记录\")\n        }\n    }\n}"
                },
                "data": {
                  "modelType": 300,
                  "resfilltype": "parameter",
                  "modelDisable": true
                },
                "parameters": {}
              },
              {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "5px",
                  "margin": "5px",
                  "border-top": "0",
                  "border-bottom": "1px solid #eee"
                },
                "advance": {
                  "expression": {}
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": []
                }]
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
              }
            ]
          }],
          "parameters": {},
          "url": "images/map/map1.png"
        }
      ],
      "col": 12
    },
    "setting": require("../setting.js")
  }
})