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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/530846711176074/closeAlert/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/530846711176074/closeAlert/content/ctrlgroup_0.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/530846711176074/closeAlert/content/ctrlgroup_0.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  width: "auto",
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;

      var render = function render() {
        var ctrlGroups = [[{
          type: "button",
          value: "确   认",
          btnclass: "btn btn-primary",
          style: {
            width: "600",
            textAlign: "right"
          },
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              var closeAlert = target.getValue("closeAlert");
              target.doTaskCloseAlert(closeAlert.ticketNo, {}, function (tc) {
                target.trigger("search_toDolistList");
                target.trigger("search_ticket");
                target.growl("处理成功", "success");
                target.cancel();
              });
            }
          }
        }, {
          type: "button",
          value: "取   消",
          btnclass: "btn btn-default",
          style: {
            width: "400",
            textAlign: "left"
          },
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              target.cancel();
            }
          }
        }]];
        event.target.render(ctrlGroups);
      };

      render();
    }
  }
};

/***/ }),

/***/ "./app-views/views/530846711176074/closeAlert/json.js":
/*!************************************************************!*\
  !*** ./app-views/views/530846711176074/closeAlert/json.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
psdefine(function () {
  return {
    "label": "报警强制关闭弹出框",
    "layout": {
      "type": "column",
      "children": [{
        "label": "文字",
        "type": "text",
        "source": "TEXT",
        "help": "http://localhost/app-free-style/index.html#/help/index%7Ctext/%5B%220%22,%7B%7D%5D",
        "style": {
          "margin": "5px",
          "padding": "0",
          "font-size": "18px",
          "font-weight": "normal",
          "text-align": "left",
          "color": "rgb(255, 255, 255)"
        },
        "advance": {
          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警强制关闭后无法修改，是否确认关闭报警？\")\n        }\n    }\n}"
        },
        "data": {
          "kpi": [],
          "modelType": 300,
          "resfilltype": "parameter",
          "resource": [],
          "modelDisable": true
        },
        "parameters": {},
        "url": "images/map/map1.png"
      }, {
        "label": "控件组",
        "type": "ctrlgroup",
        "source": "CTRLGROUP",
        "advance": {
          "expression": __webpack_require__(/*! ./content/ctrlgroup_0.js */ "./app-views/views/530846711176074/closeAlert/content/ctrlgroup_0.js")
        },
        "style": {
          "margin": "5px",
          "font-size": "12px",
          "text-align": "center"
        },
        "help": "../pdf/ctrlgroup.pdf",
        "parameters": {
          "cgroupstyle": "table"
        },
        "url": "images/map/map1.png"
      }],
      "col": 12
    },
    "setting": __webpack_require__(/*! ../setting.js */ "./app-views/views/530846711176074/setting.js")
  };
});

/***/ }),

/***/ "./app-views/views/530846711176074/setting.js":
/*!****************************************************!*\
  !*** ./app-views/views/530846711176074/setting.js ***!
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
//# sourceMappingURL=530846711176074.closeAlert.js.map