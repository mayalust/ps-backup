/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/407106366960044/index/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/407106366960044/index/content/dataTableAdvance_0.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/407106366960044/index/content/dataTableAdvance_0.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[炼铁-生产操作员-1级] ] - 407106366960044 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target;
      var navigateTrigger = false; //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        customerName: "产线",
        devName: {
          name: "设备信息",
          type: "link",
          value: "devName",
          on: {
            click: function click(data) {
              var nodeId = data.row.nodeId;
              target.navigateTo("index", "实时状态", {
                id: nodeId
              });
            }
          }
        },
        deviceCode: "设备编码",
        // taskTypeName: "任务分类",
        appName: // "appName",
        {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function click(elem) {
              elem.row.values.alertItemList.forEach(function (ele) {
                ele.deviceName = elem.row.values.devName;
              });

              if (elem.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                  "title": "报警详情",
                  "top": "10%",
                  "width": "50%"
                }, elem.row.values.alertItemList);
              }
            }
          }
        },
        message: "报警消息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        firstArisingTime: "首次报警时间",
        count: "报警次数",
        arisingTime: "最近报警时间",
        tickeTaskStatusName: "任务状态" // lastDealTime: "计划处理时间",

      };
      var tickeTaskStatus = {
        5: "已确认",
        10: "处理中",
        100: "新产生"
      };

      function getTableData(params, pageRequest, cb) {
        var domainaa = target.getCurrentUser();
        var params = {
          domain: domainaa.domainPath,
          nodeIds: "",
          nodeType: "",
          pageSize: 1000,
          severities: "1,2,3,4",
          states: "-100,5,10"
        };
        target.getAlertByPage(params, pageRequest, function (tc) {
          tc.data.forEach(function (ele) {
            //   
            var e = target.getdomainNameHandler(ele.domains, []);
            ele.customerName = e[3];
            ele.deviceCode = target.getRootScope("getAllDeviceInfo")[ele.nodeId].externalDevId;
            ele.firstArisingTime = useMomentFormat(ele.firstArisingTime, "yyyy-MM-dd hh:mm:ss");
            ele.arisingTime = useMomentFormat(ele.arisingTime, "yyyy-MM-dd hh:mm:ss");

            if (ele.state == -100) {
              ele.state = 100;
            }

            ele.tickeTaskStatusName = tickeTaskStatus[ele.state];
            ele.tickeTaskStatus = "other"; // if(ele.values.alertItemList.length>1){
            //       ele.appName =  "合并告警";
            // }
            // else{
            //       ele.appName =  ele.values.appName;
            // }
          }); //   target.trigger("panelTwo");

          cb(tc.data, tc.total);
        });
      } //   getTableData();
      //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas) {
        var format = [];

        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }

        format.push({
          name: "操作",
          type: "valueBased",
          value: "tickeTaskStatus",
          options: {
            "other": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "查看趋势",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.navigateTo("index", "专业分析", {
                      id: elem.row.nodeId
                    });
                  }
                }
              }]
            },
            "": {// name: "操作",
              // type: "buttonGroup",
              // content: [{
              //   label: "评价",
              //   icon: "null",
              //   class: "btn btn-default btn-sm",
              //   on: {
              //     click: function(elem) {
              //         target.createSystemPopupByLocalPath("page1", {
              //           width: "500px",
              //           title: "忽略",
              //         }, elem.row);
              //     }
              //   }
              // }]
            }
          }
        });
        target.render({
          data: datas,
          paging: getTableData,
          format: format
        });
      };

      setTimeout(render([]), 1000);
    }
  }
};

/***/ }),

/***/ "./app-views/views/407106366960044/index/json.js":
/*!*******************************************************!*\
  !*** ./app-views/views/407106366960044/index/json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 我的首页[炼铁-生产操作员-1级] ] - 407106366960044 **/
psdefine(function () {
  return {
    "label": "index",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "5px",
          "margin": "5px",
          "max-height": "calc( 100vh - 115px)",
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
              "margin": "auto",
              "padding": "0",
              "font-size": "16px",
              "font-weight": "bold",
              "text-align": "left"
            },
            "advance": {
              "getfunction": "kpiDataService.getValueList",
              "category": "ci",
              "condition": ["kpi", "{object:kpiQueryModel}"],
              "expression": "expression = {\n  on: {\n    init: function(event) {\n      var target = event.target;\n      target.setText(\"报警列表\");\n    }\n  }\n}"
            },
            "parameters": {},
            "echart": {},
            "url": "images/map/map1.png"
          }, {
            "label": "高级列表",
            "type": "dataTableAdvance",
            "source": "DATATABLEADVANCE",
            "parameters": {
              "col": 1,
              "pageSize": 5,
              "listbottom": "standard"
            },
            "advance": {
              "expression": __webpack_require__(/*! ./content/dataTableAdvance_0.js */ "./app-views/views/407106366960044/index/content/dataTableAdvance_0.js")
            },
            "style": {
              "margin": "5px",
              "font-size": "12px"
            },
            "url": "images/map/map1.png",
            "echart": {}
          }]
        }],
        "url": "images/map/map1.png",
        "parameters": {}
      }],
      "col": 12
    },
    "setting": __webpack_require__(/*! ../setting.js */ "./app-views/views/407106366960044/setting.js")
  };
});

/***/ }),

/***/ "./app-views/views/407106366960044/setting.js":
/*!****************************************************!*\
  !*** ./app-views/views/407106366960044/setting.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module["export"] = {};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ });
//# sourceMappingURL=407106366960044.index.js.map