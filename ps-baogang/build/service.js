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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=services&smartangular");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/services/service_factory.js":
/*!****************************************!*\
  !*** ./js/services/service_factory.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (typeof window !== "undefined") {
    if (typeof window.define === "function") {
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      window.$services = factory();
    }
  } else {
    module.exports = factory();
  }
})(this, function () {
  "use strict";
  /** 本地服务器，代理地址: **/

  var link = "55";

  var factory = function (linkage) {
    var factory,
        version = "V2";

    switch (linkage) {
      case "55":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.26.10.55",
          origin: "http://10.26.10.55"
        };
        break;

      case "zhanjiang":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.27.16.133",
          origin: "http://10.27.16.133"
        };
        break;

      case "91":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.26.10.91",
          origin: "http://10.26.10.91"
        };
        break;

      case "steel_pro":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.27.16.133:8090",
          origin: "http://10.27.16.133:8090"
        };
        break;

      case "steel":
        factory = {
          version: version,
          protocol: "ws:",
          host: "101.132.188.149:20009",
          origin: "http://101.132.188.149:20009"
        };
        break;

      case "19980":
        factory = {
          version: version,
          protocol: "ws:",
          host: "36.110.36.118:19980",
          origin: "http://36.110.36.118:19980"
        };
        break;

      case "199":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.199",
          origin: "http://192.168.1.199"
        };
        break;

      case "baogang_prod":
        factory = {
          version: version,
          protocol: "ws:",
          host: "117.144.123.32:8080",
          origin: "http://117.144.123.32:8080/"
        };
        break;

      case "tcl_proxy":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.149:8080",
          origin: "http://192.168.1.149:8080"
        };
        break;

      case "tcl_production":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.126.72.150",
          origin: "http://10.126.72.150"
        };
        break;

      case "tcl":
        factory = {
          version: version,
          protocol: "ws:",
          host: "47.94.14.146",
          origin: "http://47.94.14.146"
        };
        break;

      case "guangxi":
        factory = {
          version: version,
          protocol: "ws:",
          host: "111.12.86.148:8443",
          origin: "http://111.12.86.148:8443"
        };
        break;

      case "xinhuaxin":
        factory = {
          version: version,
          protocol: "ws:",
          host: "47.95.207.156",
          origin: "http://47.95.207.156"
        };
        break;

      case "116":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.116",
          origin: "http://192.168.1.116"
        };
        break;

      case "115":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.115",
          origin: "http://192.168.1.115"
        };
        break;

      case "122":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.122",
          origin: "http://192.168.1.122"
        };
        break;

      case "106":
        factory = {
          version: version,
          protocol: "ws:",
          host: "106.74.18.92",
          origin: "http://106.74.18.92"
        };
        break;

      case "129":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.129",
          origin: "http://192.168.1.129"
        };
        break;

      case "91":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.26.10.91",
          origin: "http://10.26.10.91"
        };
        break;

      case "144":
        factory = {
          version: version,
          protocol: "ws:",
          host: "10.126.78.144",
          origin: "http://10.126.78.144"
        };
        break;

      case "156":
        factory = {
          version: version,
          protocol: "ws:",
          host: "47.95.207.156",
          origin: "http://47.95.207.156"
        };
        break;

      case "159":
        factory = {
          version: version,
          protocol: "wss:",
          host: "180.76.147.159",
          origin: "http://180.76.147.159"
        };
        break;

      case "112":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.112",
          origin: "http://192.168.1.112"
        };
        break;

      case "116":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.116",
          origin: "http://192.168.1.116"
        };
        break;

      case "117":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.117",
          origin: "http://192.168.1.117"
        };
        break;

      case "191":
        factory = {
          version: version,
          protocol: "ws:",
          host: "192.168.1.191",
          origin: "http://192.168.1.191"
        };
        break;

      case "19180":
        factory = {
          version: version,
          protocol: "ws:",
          host: "36.110.36.118:19180",
          origin: "http://36.110.36.118:19180"
        };
        break;

      case "11680":
        factory = {
          version: version,
          protocol: "ws:",
          host: "36.110.36.118:11680",
          origin: "http://36.110.36.118:11680"
        };
        break;

      case "11780":
        factory = {
          version: version,
          protocol: "ws:",
          host: "36.110.36.118:11780",
          origin: "http://36.110.36.118:11780"
        };
        break;

      case "yunneng":
        factory = {
          version: version,
          protocol: "wss:",
          host: "39.108.59.125",
          origin: "http://39.108.59.125"
        };
        break;

      case "204":
        factory = {
          version: version,
          protocol: "wss:",
          host: "180.76.166.204",
          origin: "http://180.76.166.204"
        };
        break;

      case "raonecloud":
        factory = {
          version: version,
          protocol: "wss:",
          host: "yzt.raonecloud.com",
          origin: "https://yzt.raonecloud.com"
        };
        break;

      case "135":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.135",
          origin: "http://192.168.1.135"
        };
        break;

      case "139":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.139",
          origin: "http://192.168.1.139"
        };
        break;

      case "121":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.121",
          origin: "http://192.168.1.121"
        };
        break;

      case "131":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.131",
          origin: "https://192.168.1.131"
        };
        break;

      case "132":
        factory = {
          version: version,
          protocol: "wss:",
          host: "10.27.16.132",
          origin: "http://10.27.16.132"
        };
        break;

      case "133":
        factory = {
          version: version,
          protocol: "wss:",
          host: "10.27.16.133",
          origin: "http://10.27.16.133"
        };
        break;

      case "114":
        factory = {
          version: version,
          protocol: "wss:",
          host: "192.168.1.114",
          origin: "http://192.168.1.114"
        };
        break;

      case "118":
        factory = {
          version: version,
          protocol: "wss:",
          host: "36.110.36.118:6443",
          origin: "https://36.110.36.118:6443"
        };
        break;

      case "demo":
        factory = {
          version: version,
          protocol: "wss:",
          host: "demo.proudsmart.com",
          origin: "http://demo.proudsmart.com"
        };
        break;

      case "baidu":
        factory = {
          version: version,
          protocol: "wss:",
          host: "iot.proudsmart.com",
          origin: "https://iot.proudsmart.com"
        };
        break;

      case "ouke":
        factory = {
          version: version,
          protocol: "wss:",
          host: "www.ek-cloud.net",
          origin: "http://www.ek-cloud.net"
        };
        break;

      case "denuo":
        factory = {
          version: version,
          protocol: "wss:",
          host: "http://36.110.36.118:8099",
          origin: "http://36.110.36.118:8099"
        };
        break;

      default:
        throw new Error("请选择一个访问链接");
        break;
    }

    factory.getUrl = function (global) {
      if (global != window) {
        throw new Error("只可在WINDOW环境下执行，NODEJS环境下不可执行！");
      }

      var hostname = global.location.hostname;
      var port = global.location.port;

      if (hostname == "localhost" && port == "63342") {
        return this.origin;
      } else {
        return "";
      }
    };

    return factory;
  }(link);

  return factory;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/common-method-service2.service?angular=service&type=script":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/common-method-service2.service?angular=service&type=script ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, parse, timeout, q, compile, ajax, $state, psUiRouterHandler, psTreeData, resourceUIService, psLoading) {
  var Explainer = {
    isQuality: function isQuality(val) {
      return ["", "符合质量标准"][val] || "";
    },
    tallyCheck: function tallyCheck(val) {
      return ["通过", "不通过"][val] || "-";
    },
    statusGrade: function statusGrade(val) {
      return ["正常", "正常", "注意", "警告", "危险"][val] || "正常";
    },
    tallyEvaluateCheckboxlist: function tallyEvaluateCheckboxlist(val) {
      return ["正确", "基本正确", "不正确"][val] || "-";
    },
    abnormalEvaluateCheckboxlist: function abnormalEvaluateCheckboxlist(val) {
      return ["有效", "无效"][val] || "-";
    }
  };
  var dictionMap = new Map();
  dictionMap.set("设备趋势", "专业分析");
  dictionMap.set("专业分析", "专业分析");
  dictionMap.set("区域态势", "实时状态");
  dictionMap.set("实时状态", "实时状态");
  var appSourceDictionary = new Map();
  appSourceDictionary.set("智能诊断", "综合处理");
  appSourceDictionary.set("在线预警", "综合处理");
  appSourceDictionary.set("离线诊断", "综合处理");
  appSourceDictionary.set("合并报警", "综合处理");
  appSourceDictionary.set("智能决策", "综合处理");
  appSourceDictionary.set("故障漏报", "故障分析");
  appSourceDictionary.set("智能检修标准", "计划实施");
  appSourceDictionary.set("突发停机", "故障处理");
  appSourceDictionary.set("状态维护标准", "计划实施");
  appSourceDictionary.set("临时检修委托", "计划实施");
  appSourceDictionary.set("临时维护委托", "计划实施");
  appSourceDictionary.set("智能备修", "综合处理");
  appSourceDictionary.set("无", "无");

  var checkType = function checkType(routeName) {
    var inx,
        checkers = [{
      regex: "prod_dashboard",
      checker: function checker(match) {
        return "dashboard";
      }
    }, {
      regex: "prod_sub_dashboard.subview",
      checker: function checker(match) {
        return "dashboard";
      }
    }, {
      regex: "prod_sub_dashboard.minor_dashboard.minor_view",
      checker: function checker(match) {
        return "dashboard";
      }
    }, {
      regex: "^prod_controller\\.(.*)$",
      checker: function checker(match) {
        return match[1];
      }
    }, {
      regex: "^prod_sub_dashboard\\.sub_(.*)$",
      checker: function checker(match) {
        return match[1];
      }
    }, {
      regex: "^prod_sub_dashboard\\.minor_dashboard\\.minor_(.*)$",
      checker: function checker(match) {
        return match[1];
      }
    }];

    while (inx < checkers.length) {
      var regex = new RegExp(checkers[i].regex),
          match = regex.exec(routeName);

      if (match) {
        return checkers[i].checker(match);
      }

      inx++;
    }

    throw new Error("wrong route ".concat(routeName));
  };

  var getDics = function getDics(ctrlname) {
    return ctrlname == "dashboard" ? ["prod_dashboard", "prod_sub_dashboard.subview", "prod_sub_dashboard.minor_dashboard.minor_view"] : ["prod_controller.".concat(ctrlname), "prod_sub_dashboard.sub_".concat(ctrlname), "prod_sub_dashboard.minor_dashboard.minor_".concat(ctrlname)];
  },
      getCurrentLevel = function getCurrentLevel(params) {
    return ["main_active_index", "sub_active_index", "minor_active_index"].reduce(function (a, b) {
      a += (typeof params[b] !== "undefined") - 0;
      return a;
    }, 0) - 1;
  };

  var commonMethodService =
  /*#__PURE__*/
  function () {
    function commonMethodService() {
      _classCallCheck(this, commonMethodService);
    }

    _createClass(commonMethodService, [{
      key: "getAlertWord",
      value: function getAlertWord(val) {
        return ["正常", "正常", "注意", "警告", "危险"][val] || "正常";
      }
      /**过程跟踪根据任务来源查询任务分类**/

    }, {
      key: "getTaskJob",
      value: function getTaskJob(appSource
      /**任务来源 */
      ) {
        return appSourceDictionary.get(appSource);
      }
    }, {
      key: "getExplainerFromDiction",
      value: function getExplainerFromDiction(name) {
        return Explainer[name] || function (d) {
          return d;
        };
      }
      /**过程跟踪查询任务来源**/

    }, {
      key: "getAppSource",
      value: function getAppSource(variables) {
        var _this = this;

        var getValue = function getValue(key) {
          return _this.$findValue(variables, key);
        },
            findV = function findV(key) {
          return function () {
            var args = [].slice.call(arguments),
                v = getValue(key);
            return args.some(function (arg) {
              return v == arg;
            });
          };
        },
            isNotSingleArray = function isNotSingleArray(a) {
          return a instanceof Array && a.length > 1;
        },
            noCondition = function noCondition() {
          return true;
        },
            isTaskjob = findV("taskJob"),
            isAppName = findV("appName"),
            isOnlineRuleId = findV("onlineRuleId"),
            isSourceTicketCategory = findV("sourceTicketCategory"),
            isCategory = findV("category"),
            isAlertItems = isNotSingleArray(getValue("alertItemList")),
            Dispatch = function Dispatch() {
          var allOk = function allOk(conditions) {
            var j = 0;

            while (j < conditions.length - 1) {
              if (typeof conditions[j] == "function" && !conditions[j]()) {
                return;
              }

              if (conditions[j] != true) {
                return;
              }

              j++;
            }

            return conditions[j];
          };

          for (var _i = 0; _i < arguments.length; _i++) {
            var check = allOk(arguments[_i]);

            if (check != null) {
              return check;
            }
          }
        },
            newRule = Dispatch([isCategory("280"), isAlertItems, "合并报警"], [isCategory("280"), isAppName(2), "智能诊断"], [isCategory("280"), isAppName(1), "在线预警"], [isCategory("310"), isAlertItems, "智能决策"], [isCategory("310"), isOnlineRuleId(1, 2, 3), "智能决策"], [isCategory("310"), isSourceTicketCategory("310"), "智能决策"], [isCategory("310"), isSourceTicketCategory("340"), "智能决策"], [isCategory("310"), isTaskjob(1), "状态维护标准"], [isCategory("310"), isTaskjob(2), "临时维护委托"], [isCategory("320"), isSourceTicketCategory("310"), "智能决策"], [isCategory("320"), isSourceTicketCategory("340"), "智能决策"], [isCategory("280"), "离线诊断"], [isCategory("290"), "智能决策"], [isCategory("320"), "智能检修标准"], [isCategory("310"), "状态维护标准"], [isCategory("330"), "临时检修委托"], [isCategory("340"), "突发停机"], [isCategory("300"), "智能备修"]);

        if (newRule == null) {
          console.error(this.$findValue(variables, "category"));
        }

        return newRule || "无";
      }
      /**遍历一个对象找个是否存在某个值，值是多少**/

    }, {
      key: "$findValue",
      value: function $findValue(data, attr) {
        var fd = this.findValue(data, attr);

        if (fd) {
          return fd.value;
        }
      }
    }, {
      key: "findValue",
      value: function findValue(data, attr) {
        if (attr == null) {
          return;
        }

        var attrs = attr.split(new RegExp("\\\\|\\.", "g")),
            root = attrs.pop(),
            fds = this.filterValues(data, root),
            fd = fds.find(function (_ref) {
          var value = _ref.value,
              path = _ref.path,
              parents = _ref.parents;

          if (attrs.length == 0) {
            return true;
          } else {
            return new RegExp("".concat(attrs.join("/"), "/").concat(root, "$")).test(path);
          }
        });
        return fd;
      }
    }, {
      key: "treeNavigateTo",
      value: function treeNavigateTo(id, deviceOnly, node) {
        var _this2 = this;

        psUiRouterHandler.getCurrentMainTab().then(function (tab) {
          tab = tab || {};

          var vid = $state.params.viewId || tab.viewId,
              url = $state.params.index,
              showt = $state.params.showTree - 0,
              viewId = tab ? tab.viewId : vid,
              changeLocation = function changeLocation() {
            var params = [];
            psTreeData(id).getPathAndShowTreeLocation(tab).then(function (_ref2) {
              var location = _ref2.location,
                  showTree = _ref2.showTree,
                  defaultNav = _ref2.defaultNav,
                  controller = _ref2.controller,
                  currentTab = _ref2.currentTab;
              psUiRouterHandler.getCurrentMainTab().then(function (mainTab) {
                if (dictionMap.get(mainTab.label) == "实时状态") {
                  if (controller) {
                    _this2.refresh("prod_".concat(controller), {
                      showTree: showTree,
                      id: id,
                      viewId: null
                    });

                    return;
                  }

                  params.push("dashboard");
                }

                if (dictionMap.get(mainTab.label) == "专业分析") {
                  $state.params.sub_active_index = 0;

                  _this2.navigateTo(mainTab.label);
                }

                psUiRouterHandler.getCurrentTab().then(function (tab) {
                  var param = {
                    id: id,
                    sensor: "null",
                    viewId: vid,
                    showTree: viewId == "177280852260000" ? showTree : showt,
                    index: (viewId == "177280852260000" ? location : url) || "index",
                    startdate: "null",
                    enddate: "null"
                  };

                  if (viewId == "177280852260000") {
                    params.push(param);

                    _this2.refresh.apply(_this2, params);
                  } else {
                    param.viewId = tab.viewId;

                    _this2.navigateTo(tab.label, param);
                  }
                });
              });
            });
          };

          return psTreeData(id).getState().then(function (res) {
            if (deviceOnly) {
              if (res.modelId < 1000) {
                node.node.toggle();
              } else {
                changeLocation();
              }
            } else {
              changeLocation();
            }
          });
        });
      }
    }, {
      key: "filterValues",
      value: function filterValues(data, attr) {
        if (data == null) {
          return [];
        }

        var rs = [];

        var LoopItem =
        /*#__PURE__*/
        function () {
          function LoopItem(data, parents, path) {
            _classCallCheck(this, LoopItem);

            this.data = data;
            this.parents = parents || [];
            this.path = path || [];
          }

          _createClass(LoopItem, [{
            key: "hasParent",
            value: function hasParent(parent) {
              return this.parents.some(function (p) {
                return p == parent;
              });
            }
          }]);

          return LoopItem;
        }();

        var queue = [new LoopItem(data)],
            item;

        while (item = queue.shift()) {
          var _item = item,
              _data = _item.data,
              parents = _item.parents,
              path = _item.path;

          if (_data.hasOwnProperty(attr)) {
            rs.push({
              parents: parents,
              value: _data[attr],
              path: path.concat([attr]).join("/")
            });
          }

          for (var _i2 in _data) {
            if (_data.hasOwnProperty(_i2) && Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(_data[_i2]) && !item.hasParent(_data[_i2])) {
              queue.push(new LoopItem(_data[_i2], parents.concat([_data]), path.concat([_i2])));
            }
          }
        }

        return rs;
      }
      /**验证scope下面对象的每个值都不为undefined**/

    }, {
      key: "validate",
      value: function validate(obj, scope) {
        var defer = q.defer();

        for (var i in obj) {
          var expression = parse(i),
              val = expression(scope);

          if (typeof val === "undefined" || val === null || val === "") {
            defer.reject(obj[i]);
            return defer.promise;
          }
        }

        defer.resolve("success");
        return defer.promise;
      }
      /**遍历对象找到符合名字的值，并返回是在对象哪个位置找到的**/

      /**验证产生一个promise方法返回值为一个promise**/

    }, {
      key: "promise",
      value: function promise(fn) {
        var defer = q.defer();
        fn(defer.resolve, defer.reject);
        return defer.promise;
      }
      /**刷新当前页面的方法**/

    }, {
      key: "refresh",
      value: function refresh(type, params) {
        if (typeof type === "undefined" && typeof params === "undefined") {
          window.location.reload();
          return;
        }

        if (_typeof(type) === "object" && typeof params === "undefined") {
          var name = $state.current.name,
              p = $state.params;
          p.count = p.count - 0 + 1;
          $state.go(name, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(p, type));
        }

        if (typeof type === "string") {
          params = params || {};
          var level = getCurrentLevel($state.params),
              dics = getDics(type),
              _name = dics[level],
              _p = $state.params,
              defaultParam = type !== "dashboard" ? psUiRouterHandler.getDefaultParamByName(type) : {};
          _p.count = _p.count - 0 + 1;
          _p = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(_p, defaultParam, params);
          _p.index = _p.index || "index";
          $state.go(_name, _p);
        }
      }
      /** 弹出模态框的方法 **/

    }, {
      key: "modal",
      value: function modal(_ref3) {
        var title = _ref3.title,
            directive = _ref3.directive,
            scope = _ref3.scope,
            top = _ref3.top,
            width = _ref3.width,
            params = _ref3.params;
        return this.promise(function (res, rej) {
          top = typeof top === "number" ? top + "px" : top;
          top = typeof top === "string" ? top : null;
          width = typeof width === "number" ? width + "px" : width;
          width = typeof width === "string" ? width : null;
          var element = document.createElement("div"),
              sc = (scope || rootScope).$new(),
              root;
          element.innerHTML = "<ps-modal><".concat(directive, "></").concat(directive, "></ps-modal>");

          function destroy() {
            element.remove();
            element = null;
            sc.$destroy();
          }

          sc.style = function () {
            return {
              top: top || "40px",
              width: width || "80%"
            };
          };

          sc.title = title;
          sc.params = params;

          sc.close = function (promiseParameter) {
            destroy();
            res(promiseParameter);
          };

          sc.submit = function (data) {
            destroy();
            res(data);
          };

          document.body.appendChild(element);
          compile(element)(sc);
        });
      }
      /** 跳转到某个页面的方法 **/

    }, {
      key: "navigateToTracker",
      value: function navigateToTracker(ext, ticketNo) {
        /** 兼容旧版本跳转到过程跟踪的适配方法 */
        var regex = "9246777620035|539596902200000",
            _self = this;

        function navigateToProcessTracking() {
          _self.refresh("prod_tracker", {
            ticketNo: ticketNo
          });
        }

        function isProcessTrackingExt(ext) {
          return new RegExp(regex).test(ext.viewId);
        }

        if (isProcessTrackingExt(ext)) {
          navigateToProcessTracking();
          return false;
        }

        return true;
        /** 兼容旧版本跳转到过程跟踪的适配方法 */
      }
    }, {
      key: "specialDeviceMove",
      value: function specialDeviceMove(parameter, ext) {
        var specialty = ext && ext.specialty,
            dic = {
          D: "电气分析",
          Z: "振动分析"
        };

        if (parameter == "专业分析" && specialty) {
          var analType = dic[specialty] ? dic[specialty] : "综合趋势";
          psUiRouterHandler.moveToNodeByCondition(function (node) {
            return node.label == analType || node.name == analType;
          }, ext);
          return;
        }

        if (parameter == "综合趋势" || parameter == "实时状态") {
          var id = ext.id;
          psUiRouterHandler.moveToNodeByCondition(function (node) {
            return node.label == parameter || node.name == parameter;
          }, {
            id: id
          });
          return;
          /*
          psTreeData(id)
            .getPathAndShowTreeLocation(node => {
              return (
                node.label == "综合趋势" ||
                node.name == "综合趋势" ||
                node.label == "实时状态" ||
                node.name == "实时状态"
              );
            })
            .then(
              ({ location, showTree, defaultNav, controller, currentTab }) => {
                if (controller) {
                  this.refresh(`prod_${controller}`, {
                    showTree: showTree,
                    id: id,
                    viewId: null
                  });
                  return;
                }
              }
            );
          return; */
        }

        return true;
      }
    }, {
      key: "convertParam",
      value: function convertParam(str) {
        var d = dictionMap.get(str);
        return d || str;
      }
    }, {
      key: "navigateTo",
      value: function navigateTo(parameter) {
        var _this3 = this;

        var ext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "index";
        var oldParameter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var viewId;

        function getViewIdNumber(str) {
          var m = /viewId\:(.*)$/.exec(str);
          return m && m[1];
        }

        function getParameter(parameter) {
          var rs = ["main", "sub", "minor"].map(function (name, inx) {
            return typeof parameter[name] !== "undefined" ? parameter[name] : parameter[inx];
          });
          return rs.reduce(function (a, b) {
            if (typeof b == "number" || typeof b == "string") {
              a.push(b - 0);
            }

            if (_typeof(b) == "object") {
              a.push(b[0]);

              var _viewId = getViewIdNumber(b[1]);

              if (_viewId) {
                ext.viewId = _viewId;
              } else {
                url = b[1];
              }
            }

            return a;
          }, []);
        }

        if (typeof parameter === "undefined") {
          throw new Error("invalid parameter found");
        }

        if (typeof parameter === "string") {
          if (/\d+/.test(parameter)) {
            parameter = {
              main: parameter - 0
            };
          } else {
            if (this.specialDeviceMove(parameter, ext)) {
              psUiRouterHandler.moveToNodeByCondition(function (node) {
                return node.label == parameter || _this3.convertParam(node.label) == parameter || _this3.convertParam(node.alias) == parameter;
              }, ext);
            }

            return;
          }
        }

        if (typeof parameter === "function") {
          psUiRouterHandler.moveToNodeByCondition(parameter, ext);
          return;
        }

        if (typeof parameter === "number") {
          parameter = {
            main: parameter
          };
        }

        if (_typeof(parameter) === "object") {
          parameter = getParameter(parameter);

          if (this.navigateToTracker(ext, oldParameter.ticketNo)) {
            psUiRouterHandler.moveToNodeByIndex(url, parameter, ext);
          }
        }
      }
      /** 获取树的根节点 **/

    }, {
      key: "getRoot",
      value: function getRoot() {
        return psTreeData.getRoot();
      }
      /** 获取当前节点的所有父节点 **/

    }, {
      key: "getCurrentParents",
      value: function getCurrentParents() {
        return psTreeData($state.params.id).getState().then(function (d) {
          return d.getParents().then(function (parents) {
            return _success(parents.concat(d));
          });
        });
      }
      /** 通过工单号获取流程图的内容 **/

    }, {
      key: "findFlowByTicketNo",
      value: function findFlowByTicketNo(ticketNo) {
        var ticketCategoryId, workflowId;
        return ajax.post("ticketTaskService.getTicket", [ticketNo]).then(function (d) {
          if (d == null) {
            return error("\u670D\u52A1\u5668\u9519\u8BEF\uFF1A\u6839\u636E\u5DE5\u5355\u53F7[".concat(ticketNo, "]\u67E5\u8BE2\u4E0D\u5230\u5DE5\u5355\u5185\u5BB9\uFF0C\u6216\u5DE5\u5355\u5DF2\u5220\u9664"));
          }

          ticketCategoryId = d.ticketCategoryId;
          return ajax.post("ticketCategoryService.getTicketCategoryById", [ticketCategoryId]);
        }).then(function (d) {
          if (d == null) {
            return error("\u670D\u52A1\u5668\u9519\u8BEF\uFF1A\u6839\u636E\u5DE5\u5355\u7C7B\u522B\u53F7[".concat(ticketCategoryId, "]\u67E5\u8BE2\u4E0D\u5230\u5DE5\u5355\u7C7B\u522B\u5185\u5BB9"));
          }

          workflowId = d.workflowId;
          return ajax.post("workflowService.getWorkflowById", [workflowId]);
        }).then(function (d) {
          if (d == null) {
            return error("\u670D\u52A1\u5668\u9519\u8BEF\uFF1A\u6839\u636E\u5DE5\u5355\u6D41\u7A0B\u53F7[".concat(workflowId, "]\u67E5\u8BE2\u4E0D\u5230\u5DE5\u5355\u6D41\u7A0B\u5185\u5BB9"));
          }

          var name = d.name;
          return ajax.post("workflowDefinitionService.getWorkflowDefinitions").then(function (d) {
            var defer = q.defer(),
                fd = d.find(function (d) {
              return d.name == name;
            });

            if (fd == null) {
              defer.reject("\u670D\u52A1\u5668\u9519\u8BEF\uFF1A\u6839\u636E\u6D41\u7A0B\u540D\u79F0[".concat(name, "]\u5339\u914D\u4E0D\u5230\u4EFB\u4F55\u4EE5\u5B58\u5728\u7684\u6D41\u7A0B\u56FE"));
            }

            defer.resolve(fd);
            return defer.promise;
          });
        });
      }
      /** = Promise.resolve **/

    }, {
      key: "success",
      value: function success(d) {
        return _success(d);
      }
      /** 根据ci,kpi查询节点值 **/

    }, {
      key: "getKpiValue",
      value: function getKpiValue(nodeId, kpis) {
        var _this4 = this;

        var kpiQueryModel = ["kpi", {
          category: "ci",
          isRealTimeData: false,
          nodeIds: [nodeId - 0],
          kpiCodes: kpis,
          statisticType: "psiot",
          condList: []
        }];
        return ajax.post("kpiDataFlexService.getKpiValueList?IncludeFields=kpiCode,value", kpiQueryModel).then(function (d) {
          return _this4.success(kpis.reduce(function (a, b) {
            a[b] = d.find(function (_ref4) {
              var kpiCode = _ref4.kpiCode;
              return kpiCode == b;
            }) || {};
            a[b] = a[b].value || null;
            return a;
          }, {}));
        });
      }
    }, {
      key: "getDataItemValuelist",
      value: function getDataItemValuelist(params) {
        var startTime = _typeof(params.time) === "object" ? params.time[0] : null,
            endTime = _typeof(params.time) === "object" ? params.time[1] : null,
            kpis = params.kpiCodes,
            timePeriod = _typeof(params.time) === "object" ? 0 : params.time;
        var kpiQueryModel = ["kpi", {
          category: "time",
          isRealTimeData: false,
          timePeriod: timePeriod,
          nodeIds: params.nodeIds,
          includeInstance: true,
          queryInstances: params.kpiCodes.reduce(function (a, b) {
            return a.indexOf(b.instance) == -1 ? a.concat([b.instance]) : a;
          }, []).join(","),
          kpiCodes: kpis.map(function (n) {
            return n.dataItemId;
          }),
          startTime: startTime,
          endTime: endTime,
          timeRange: "",
          statisticType: "psiot",
          condList: [],
          dataType: params.dataType ? params.dataType : "",
          aggregateFunc: params.dataType ? params.aggregateFunc : "",
          aggregatePeriod: params.dataType ? params.aggregatePeriod : ""
        }];
        return ajax.post("kpiDataFlexService.getKpiValueList?IncludeFields=kpiCode,value,arisingTime", kpiQueryModel).then(function (d) {
          if (d.length == 0) {
            return _success(undefined);
          }

          var minDate = Math.min.apply(null, d.map(function (n) {
            return toValue(n.arisingTime);
          }));

          var optionData =
          /*#__PURE__*/
          function () {
            function optionData(data) {
              _classCallCheck(this, optionData);

              Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, data);
            }

            _createClass(optionData, [{
              key: "getMinDate",
              value: function getMinDate() {
                return minDate;
              }
            }]);

            return optionData;
          }();

          return ajax.post("resourceUIService.getResourceById", $state.params.id).then(function (_ref5) {
            var modelId = _ref5.modelId;
            var obj = d.reduce(function (a, b) {
              a[b.kpiCode] = a[b.kpiCode] || [];
              var rangeObj = resourceUIService.rootModelsDic[modelId] && resourceUIService.rootModelsDic[modelId].kpiDic && resourceUIService.rootModelsDic[modelId].kpiDic[b.kpiCode] && resourceUIService.rootModelsDic[modelId].kpiDic[b.kpiCode].rangeObj;

              if (rangeObj) {
                b.value = rangeObj[b.value];
              }

              a[b.kpiCode].push([toValue(b.arisingTime) - minDate, b.value, b.kpiCode]);
              return a;
            }, {}),
                series = propMap(obj, function (n, i) {
              return {
                name: kpis.find(function (d) {
                  return d.dataItemId == i;
                }).kpiName,
                data: n,
                symbolSize: 0,
                type: "line"
              };
            }),
                legendProm = propMap(obj, function (n, i) {
              return kpis.find(function (d) {
                return d.dataItemId == i;
              }).kpiName;
            });
            return q.all(legendProm).then(function (legend) {
              return _success(new optionData({
                xAxis: {
                  boundaryGap: false,
                  type: "value",
                  min: "dataMin",
                  max: "dataMax",
                  axisLabel: {
                    formatter: function formatter(params) {
                      var d = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["dateparser"])(minDate).addTimeStamp(params);
                      return d.getDateString("MM/dd,hh:mm:ss");
                    }
                  }
                },
                tooltip: {
                  trigger: "axis",
                  formatter: function formatter(params, b, c) {
                    return params.reduce(function (a, b) {
                      var time = b.value[0],
                          val = b.value[1],
                          marker = b.marker,
                          seriesIndex = b.seriesIndex,
                          d = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["dateparser"])(minDate + time);
                      a += marker + legend[seriesIndex];
                      a += ":" + val + "[" + d.getDateString("MM/dd,hh:mm:ss") + "]<br>";
                      return a;
                    }, "");
                  }
                },
                series: series,
                legend: {
                  data: legend
                }
              }));
            });
          });
        });
      }
    }]);

    return commonMethodService;
  }();

  function _success(d) {
    var defer = q.defer();
    defer.resolve(d);
    return defer.promise;
  }

  function error(msg) {
    var defer = q.defer();
    defer.reject(msg);
    return defer.promise;
  }
  /** 获取timestamp **/


  function toValue(d) {
    return new Date(d) - 0;
  }
  /** 遍历对象 **/


  function propMap(obj, callback) {
    var rs = [];

    for (var _i3 in obj) {
      rs.push(callback(obj[_i3], _i3));
    }

    return rs;
  }

  return new commonMethodService();
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-area-state.service?angular=service&type=script":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-area-state.service?angular=service&type=script ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function ($q) {
  var defer = $q.defer();
  var loadEchartPromise = defer.promise;

  var loadEchart = function loadEchart() {
    if (typeof echarts == "undefined") {
      window.require(["echarts"], function (ec) {
        setTimeout(function () {
          defer.resolve(ec);
        }, 5000);
      }, function (e) {
        defer.reject(e);
      });
    } else {
      defer.resolve(echarts);
    }
  };

  console.log("--->");
  loadEchart();
  return {
    loadEchartPromise: loadEchartPromise
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-btn-click.service?angular=service&type=script":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-btn-click.service?angular=service&type=script ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** mock **/

/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, psTreeData, $state, q, cms, cms2, ajax, growl, psRouter, psDialog) {
  var target = cms(undefined, rootScope);

  function findValue(data, attr) {
    var LoopItem =
    /*#__PURE__*/
    function () {
      function LoopItem(data, parents, path) {
        _classCallCheck(this, LoopItem);

        this.data = data;
        this.parents = parents || [];
        this.path = path || [];
      }

      _createClass(LoopItem, [{
        key: "hasParent",
        value: function hasParent(parent) {
          return this.parents.some(function (p) {
            return p == parent;
          });
        }
      }]);

      return LoopItem;
    }();

    var queue = [new LoopItem(data)],
        item;

    while (item = queue.shift()) {
      var _item = item,
          _data = _item.data,
          parents = _item.parents,
          path = _item.path;

      if (_data.hasOwnProperty(attr)) {
        return {
          value: _data[attr],
          path: path.concat([attr]).join("/")
        };
      }

      for (var i in _data) {
        if (_data.hasOwnProperty(i) && Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(_data[i]) && !item.hasParent(_data[i])) {
          queue.push(new LoopItem(_data[i], parents.concat([_data]), path.concat([i])));
        }
      }
    }

    return {
      value: undefined
    };
  }

  function _planDetail(bool, title) {
    /** 方案详情 **/
    var category = this.findValue("category"),
        ticketNo = this.findValue("ticketNo"),
        ticketTask = this.findValue("ticketTask");
    target.setValue("ticketNo", ticketNo);
    target.setValue("category", category);
    cms2.modal({
      title: title || "\u65B9\u6848\u8BE6\u60C5",
      directive: "ps-alert-exception-resume-plan",
      width: "80%",
      params: {
        ticketNo: ticketNo,
        category: category,
        showHandler: bool == null ? true : bool
      }
    });
  }

  var BtnClick =
  /*#__PURE__*/
  function () {
    function BtnClick() {
      _classCallCheck(this, BtnClick);
    }

    _createClass(BtnClick, [{
      key: "checking",
      value: function checking(text) {
        target.createPopupByViewIdPath(9246777620035, "page3", {
          width: "800px",
          title: text
        }, this.mergetValues());
      }
    }, {
      key: "bcd",
      value: function bcd() {
        console.log(this);
        console.log("bcd");
      }
    }, {
      key: "retreat",
      value: function retreat() {
        var ticketNo = this.findValue("ticketNo");
        ajax.post("ticketTaskService.getTicket", [ticketNo + ""]).then(function (d) {
          target.setValue("maintainListData", d);
          var params = {
            standardProjectNo: d.values.standardProjectId
          };
          target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", [params], function (tc) {
            if (tc.data) {
              var createProject = tc.data;
              var createProjectFlag = true; // 标准项目编号 历史维修方案

              var standardProject = [],
                  historyProject = [];

              for (var i = 0; i < createProject.length; i++) {
                if (createProject[i].type == "0") {
                  standardProject.push(createProject[i]);
                } else if (createProject[i].type == "1" && createProject[i].ticketNo == d.ticketNo) {
                  // 展示下标准的历史选中纪录
                  standardProject = [createProject[i]]; //判断当前的工单是否提交了历史记录

                  if (createProject[i].ticketNo == d.ticketNo) {
                    createProjectFlag = false; // standardProject = createProject[i];
                    // standardProject.ticketNo = elem.row.ticketNo;
                  }
                }
              }

              target.setValue("createProjectFlag", createProjectFlag);
              target.setValue("MaintainPlan", standardProject[0]);
              target.setValue("getMaintainPlanListData", standardProject);
              target.createSystemPopupByViewId("494624133620012", {
                width: "70%",
                title: "退回处理"
              }, d);
            }
          });
        });
      }
    }, {
      key: "dealing260",
      value: function dealing260() {
        target.setValue("global/resource", this._ticketTask);
        target.createSystemPopupByViewId("475059852490000", {
          width: "80%",
          title: "处理方案编制"
        }, "onlyRead");
      }
    }, {
      key: "dealing90",
      value: function dealing90() {
        target.setValue("global/resource", this._ticketTask);
        target.createSystemPopupByViewId("475059852490000", {
          width: "80%",
          title: "处理方案编制"
        }, "onlyRead");
      }
    }, {
      key: "trusting",
      value: function trusting() {
        target.createPopupByViewIdPath(9246777620035, "page4", {
          width: "800px",
          title: text
        }, this.mergetValues());
      }
    }, {
      key: "probSolvingHistory",
      value: function probSolvingHistory() {
        /** 排故履历 **/
        var ticketTask = this._data.ticketTask;
        ticketTask.values.deviceExcavationTask = ticketTask.variables.deviceExcavationTask;
        target.setValue("rowData", ticketTask);
        target.createPopupByViewIdPath(494624133620017, "page4", {
          width: "1200px",
          title: "排故履历"
        });
      }
    }, {
      key: "probSolvingSummary",
      value: function probSolvingSummary() {
        /** 故障总结 **/
        var ticketTask = this._data.ticketTask;
        ticketTask.values = ticketTask.values || {};
        ticketTask.values.deviceExcavationTask = ticketTask.variables.deviceExcavationTask;
        target.setValue("rowData", ticketTask);
        target.setValue("showSubmit", false);
        target.createPopupByViewIdPath(494624133620017, "page3", {
          width: "1200px",
          title: "故障总结"
        });
      }
    }, {
      key: "alertEvaluate",
      value: function alertEvaluate() {
        /* 报警评价弹出窗; */
        var ticket = this.findValue("ticketTask");
        ticket.values.alertItemList = ticket.values.alertEvaluateInfoList; //target.setValue("$POPUPDATA", ticket);

        ticket.showSubmit = false;
        target.createPopupByViewIdPath(494624133620034, "page2", {
          width: "1200px",
          title: "报警评价"
        }, ticket);
      }
    }, {
      key: "planDetail",
      value: function planDetail() {
        _planDetail.call(this, true);
      }
    }, {
      key: "planDetailAfter",
      value: function planDetailAfter(name, title) {
        _planDetail.call(this, true, title);
        /* let deviceId = this.findValue("deviceId"),
          ticketTask = this.findValue("ticketTask");
        ticketTask.deviceId = deviceId;
        target.setValue("global/rowObj", ticketTask);
        target.createPopupByViewIdPath(517719987480000, "index", {
          width: "1200px",
          title: "综合处理"
        }); */

      }
    }, {
      key: "planDetailBefore",
      value: function planDetailBefore(name, title) {
        _planDetail.call(this, false, title);
      }
    }, {
      key: "fixingPlan",
      value: function fixingPlan() {
        /** 检修方案, 方案详情 **/
        var ticketNo = this["_ticketNo"] || this.findValue("ticketNo"); //target.refresh("prod_tracker", { ticketNo: ticketNo });

        var standardProjectId = this.findValue("standardProjectId"),
            _ticketNo = this["_ticketNo"] || this["ticketNo"],
            params = {
          standardProjectNo: standardProjectId
        };

        target.setValue("maintainListData", this);
        ajax.post("deviceResumeUIService.getMaintainPlanListByCondition", [params]).then(function (data) {
          if (data) {
            var createProject = data;
            var createProjectFlag = true;
            var standardProject = [],
                historyProject = [];

            for (var i = 0; i < createProject.length; i++) {
              if (createProject[i].type == "0") {
                standardProject.push(createProject[i]);
              } else if (createProject[i].type == "1" && createProject[i].ticketNo == _ticketNo) {
                standardProject = [createProject[i]];

                if (createProject[i].ticketNo == _ticketNo) {
                  createProjectFlag = false;
                }
              }
            }

            target.setValue("createProjectFlag", false);
            target.setValue("MaintainPlan", standardProject[0]);
            target.setValue("getMaintainPlanListData", standardProject);
            target.createSystemPopupByCtrlView("baowu-plan-confirm2", {
              title: "检修方案",
              width: "90%"
            });
          }
        });
      }
    }, {
      key: "fixingResult",
      value: function fixingResult() {
        /** 检修实绩 **/
        var _ticketNo = this["_ticketNo"] || this["ticketNo"];

        target.setValue("ticketNo", _ticketNo);
        var ticketNo = {
          ticketNo: _ticketNo
        };
        target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", ticketNo, function (tc) {
          if (tc.data.length > 0) {
            target.setValue("maintainListDataflag", false);
            target.setValue("maintainListData", tc.data[0]);
            target.createSystemPopupByCtrlView("baowu-write", {
              title: "检修实绩",
              width: "90%"
            });
          } else {
            target.growl("请先确认检修计划", "warning");
          }
        });
      }
    }, {
      key: "keepResult",
      value: function keepResult() {
        /** 维护实绩 **/
        var standardInfo = findValue(this._data, "stateMaintainResult");
        standardInfo = standardInfo ? standardInfo.value : null;
        target.setValue("maintainListDataflag", true);
        target.setValue("maintainListData", standardInfo);
        target.createSystemPopupByCtrlView("baowu-write2", {
          title: "维护实绩",
          width: "80%"
        });
      }
    }, {
      key: "checkOnlineRule",
      value: function checkOnlineRule() {
        /** 规则详情 —— 在线告警规则 */
        var onlineRuleId = this.findValue("onlineRuleId");
        ajax.post("maintenanceTaskUIService.getOnlineJudgeRuleListByConditionWithPage", [{
          id: onlineRuleId
        }, {
          start: 0,
          length: 50000,
          statCount: true
        }]).then(function (_ref) {
          var data = _ref.data;
          var rule = data[0],
              deviceId = rule.selectedDevId || rule.deviceId;
          ajax.post("resourceUIService.getResourceById", deviceId).then(function (resource) {
            var params = {
              mode: "view",
              resource: resource,
              rule: rule
            };
            cms2.modal({
              title: "\u89C4\u5219\u8BE6\u60C5",
              directive: "dialog-project-maintain",
              width: "70%",
              scope: rootScope,
              params: params
            });
          });
        });
      }
    }, {
      key: "ruleDetail",
      value: function ruleDetail() {
        /** 规则详情 **/

        /* let standardInfo = findValue(this._data, "standardInfo"),
          deviceId = findValue(this._data, "deviceId");
        $state.params.id = deviceId ? deviceId.value : undefined;
        psRouter.set({
          obj: standardInfo ? standardInfo.value : null,
          showSubmit: false
        });
        target.createSystemPopupByCtrlView("baowu-rule-maintain", {
          title: "规则详情",
          width: "1000px"
        }); */
        var deviceId = findValue(this._data, "deviceId");
        var ticketTask = findValue(this._data, "ticketTask");
        deviceId = deviceId ? deviceId.value : undefined;
        ticketTask = ticketTask ? ticketTask.value : undefined;
        ajax.post("resourceUIService.getResourceById", deviceId).then(function (resource) {
          return ajax.post("maintenanceTaskUIService.getPersonJudgeRuleListByConditionWithPage", [{
            deviceId: resource.id
          }, {
            start: 0,
            length: 10,
            statCount: true
          }]).then(function (ruleCondition) {
            return cms2.success({
              ruleCondition: ruleCondition.data,
              resource: resource
            });
          });
        }).then(function (_ref2) {
          var resource = _ref2.resource,
              ruleCondition = _ref2.ruleCondition;
          var obj = {
            label: "人工检查结果维护规则",
            type: "layout",
            children: [{
              type: "form-grid",
              children: [{
                type: "label",
                label: "设备名称",
                key: "deviceName",
                value: resource.label
              }, {
                type: "label",
                label: "设备编号",
                key: "deviceCode",
                value: resource.externalDevId
              }, {
                type: "input",
                label: "规则模型名称",
                key: "ruleName",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "checkbox",
                key: "state",
                label: "是否启用",
                format: {
                  "true": 1,
                  "false": 0
                },
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "上机服役时间(天)",
                key: "createBoardDays",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "过钢量(万吨)",
                key: "createSteelNumber",
                config: {
                  disabled: "disabled"
                }
              }]
            }, {
              label: "状态规则",
              type: "table-form",
              key: "itemList",
              config: {
                attributes: {
                  stateMantainStandardId: ["维护项目", "text"],
                  stepsIndex: ["项次", "text"],
                  resultIndex: ["判断规则", "text"],
                  needState: ["是否必须", "text"]
                },
                grid: {
                  body: [{
                    name: "stateMantainStandardId",
                    bind: function bind(row) {
                      return row.stateMaintinStandard.standardName;
                    }
                  }, {
                    name: "stepsIndex",
                    bind: function bind(row) {
                      var stepList = row.stateMaintinStandard.stepsList;
                      var obj = stepList.find(function (a) {
                        return a.index == row.stepsIndex;
                      });
                      var label = "";

                      if (obj.content) {
                        label = obj.content;
                      }

                      return label;
                    }
                  }, {
                    name: "resultIndex",
                    bind: function bind(row) {
                      var stepList = row.stateMaintinStandard.stepsList;
                      var objStep = stepList.find(function (a) {
                        return a.index == row.stepsIndex;
                      });
                      var ruleList = objStep.ruleList;
                      var objRule = ruleList.find(function (a) {
                        return a.index == row.resultIndex;
                      });
                      var label = "";

                      if (objStep.dataType && objStep.dataType != null) {
                        if (objStep.dataType == "定量") {
                          var unit = objRule.unit ? objRule.unit : "";
                          var upperLimit = objRule.upperLimit ? objRule.upperLimit : "";
                          var lowerLimit = objRule.lowerLimit ? objRule.lowerLimit : "";

                          if (upperLimit != null && upperLimit != "" && lowerLimit == null || lowerLimit == "") {
                            label = " X < " + upperLimit + "(" + unit + ")";
                          } else if (upperLimit == null && lowerLimit != null && lowerLimit != "" || upperLimit == "") {
                            label = " X >= " + lowerLimit + "(" + unit + ")";
                          } else if (upperLimit != null && lowerLimit != null && upperLimit != "" && lowerLimit != "") {
                            label = lowerLimit + " <= X < " + upperLimit + "(" + unit + ")";
                          }
                        } else if (objStep.dataType == "定性") {
                          label = objRule.result;
                        }
                      }

                      return label;
                    }
                  }, {
                    name: "needState",
                    bind: function bind(row) {
                      if (row.needState == 0) {
                        return "非必须";
                      } else if (row.needState == 1) {
                        return "必须";
                      }
                    }
                  }],
                  buttons: {},
                  config: {
                    showIndex: false,
                    showSelector: false,
                    showSearch: false,
                    showPage: false,
                    inlineAdd: {
                      stateMantainStandardId: {
                        type: "select",
                        url: "maintenanceTaskUIService.getTaskBySimpleConditionWithPage",
                        parameter: [{
                          deviceId: resource.id,
                          ticketCategory: "310"
                        }, {
                          start: 0,
                          length: 1000,
                          statCount: true
                        }],
                        after: function after(d) {
                          d.data.push({
                            id: 0,
                            standardName: "无"
                          });
                          return d.data;
                        },
                        format: {
                          id: "id",
                          label: "standardName"
                        }
                      },
                      stepsIndex: {
                        type: "select",
                        watch: {
                          key: "stateMantainStandardId",
                          handler: function handler(newValue, next) {
                            stepsList = newValue.stepsList ? newValue.stepsList : [];
                            next(stepsList);
                          }
                        },
                        format: {
                          id: "index",
                          label: "content"
                        }
                      },
                      resultIndex: {
                        type: "select",
                        watch: {
                          key: "stepsIndex",
                          handler: function handler(newValue, next) {
                            var ruleList = [];
                            var dataType = newValue.dataType ? newValue.dataType : false;

                            if (dataType && dataType != null) {
                              ruleList = newValue.ruleList;

                              if (dataType == "定性") {
                                for (var i = 0; i < ruleList.length; i++) {
                                  ruleList[i].label = ruleList[i].result;
                                }
                              } else if (dataType == "定量") {
                                var unit = ruleList[i].label.unit;
                                var upperLimit = ruleList[i].label.upperLimit;
                                var lowerLimit = ruleList[i].label.lowerLimit;

                                if (upperLimit != null && lowerLimit == null) {
                                  ruleList[i].label = " X < " + upperLimit + unit;
                                } else if (upperLimit == null && lowerLimit != null) {
                                  ruleList[i].label = " X >= " + lowerLimit + unit;
                                } else if (upperLimit != null && lowerLimit != null) {
                                  ruleList[i].label = lowerLimit + " <= X < " + upperLimit + unit;
                                }
                              }
                            }

                            next(ruleList);
                          }
                        },
                        format: {
                          id: "index",
                          label: "label"
                        }
                      },
                      needState: {
                        type: "select",
                        options: [{
                          id: 1,
                          label: "必须"
                        }, {
                          id: 0,
                          label: "非必须"
                        }]
                      },
                      submit: function submit(a, b, refreshGrid, allData) {
                        var item = {};
                        item.stateMantainStandardId = b.stateMantainStandardId && b.stateMantainStandardId.id ? b.stateMantainStandardId.id : 0;
                        item.stepsIndex = b.stepsIndex && b.stepsIndex.index ? b.stepsIndex.index : 0;
                        item.resultIndex = b.resultIndex && b.resultIndex.index ? b.resultIndex.index : 0;
                        item.needState = b.needState && b.needState.id ? b.needState.id : 0;
                        item.stateMaintinStandard = b.stateMantainStandardId ? b.stateMantainStandardId : null;
                        refreshGrid(false);
                        allData.push(item);
                      }
                    }
                  }
                }
              }
            }, {
              type: "form-grid",
              children: [{
                type: "input",
                label: "作用设备名称",
                composory: true,
                key: "deviceName",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "作用设备编码",
                composory: true,
                key: "deviceCode",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "异常名称",
                composory: true,
                key: "abnormalName",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "维护标准名称",
                key: "stateStandardName",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "label",
                label: "维护标准编号",
                key: "stateStandardNo"
              }, {
                type: "input",
                label: "维护周期单位",
                key: "executionCycle",
                watch: {
                  key: "stateStandardNo",
                  handler: function handler(e) {
                    var list = target.getRootScope("myDicts")["executionCycle"];
                    var obj = list.find(function (a) {
                      return a.valueCode == rowValue.executionCycle;
                    });
                    e.update({
                      value: obj && obj.label ? obj.label : ""
                    });
                  }
                },
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "维护周期间隔",
                key: "cycleNum",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "input",
                label: "检修标准名称",
                key: "maintainStandardName",
                config: {
                  disabled: "disabled"
                }
              }, {
                type: "label",
                label: "检修标准编号",
                key: "maintainStandardNo"
              }, {
                type: "input",
                label: "检修完成期限(天)",
                key: "maintainLimitDay",
                config: {
                  disabled: "disabled"
                }
              }]
            }]
          };
          psDialog.modal(obj, ruleCondition[0]);
        });
      }
    }, {
      key: "showTroubleShootDialog",
      value: function showTroubleShootDialog() {
        var deviceExcavationBook = this.findValue("deviceExcavationBook");
        cms2.modal({
          title: "排故手顺书详情",
          directive: "troubleshoot-dialog",
          width: "70%",
          params: {
            type: "view",
            data: deviceExcavationBook
          }
        });
      }
    }, {
      key: "showMaintainRuleDialog",
      value: function showMaintainRuleDialog() {
        var stepsNo = this.findValue("stepsNo");
        var stepsList = this.prev.node.findValue("stepsList");
        var findStep = stepsList.find(function (item) {
          return item.stepsNo == stepsNo;
        });

        if (stepsNo && stepsNo != 0) {
          cms2.modal({
            title: "维护规则",
            directive: "dialog-project-rule",
            width: "70%",
            params: {
              data: findStep
            }
          });
        } else {
          var deviceId = this.prev.node.findValue("deviceId");
          var ruleId = this.findValue("targetRuleId"); //let deviceId = findValue(this._data, "deviceId");

          var ticketTask = findValue(this._data, "ticketTask"); //deviceId = deviceId ? deviceId.value : undefined;

          ticketTask = ticketTask ? ticketTask.value : undefined;
          ajax.post("resourceUIService.getResourceById", deviceId).then(function (resource) {
            return ajax.post("maintenanceTaskUIService.getPersonJudgeRuleListByConditionWithPage", [{
              id: ruleId
            }, {
              start: 0,
              length: 10,
              statCount: true
            }]).then(function (ruleCondition) {
              return cms2.success({
                ruleCondition: ruleCondition.data,
                resource: resource
              });
            });
          }).then(function (_ref3) {
            var resource = _ref3.resource,
                ruleCondition = _ref3.ruleCondition;
            var obj = {
              label: "人工检查结果维护规则",
              type: "layout",
              children: [{
                type: "form-grid",
                children: [{
                  type: "label",
                  label: "设备名称",
                  key: "deviceName",
                  value: resource.label
                }, {
                  type: "label",
                  label: "设备编号",
                  key: "deviceCode",
                  value: resource.externalDevId
                }, {
                  type: "input",
                  label: "规则模型名称",
                  key: "ruleName",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "checkbox",
                  key: "state",
                  label: "是否启用",
                  format: {
                    "true": 1,
                    "false": 0
                  },
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "上机服役时间(天)",
                  key: "createBoardDays",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "过钢量(万吨)",
                  key: "createSteelNumber",
                  config: {
                    disabled: "disabled"
                  }
                }]
              }, {
                label: "状态规则",
                type: "table-form",
                key: "itemList",
                config: {
                  attributes: {
                    stateMantainStandardId: ["维护项目", "text"],
                    stepsIndex: ["项次", "text"],
                    resultIndex: ["判断规则", "text"],
                    needState: ["是否必须", "text"]
                  },
                  grid: {
                    body: [{
                      name: "stateMantainStandardId",
                      bind: function bind(row) {
                        return row.stateMaintinStandard.standardName;
                      }
                    }, {
                      name: "stepsIndex",
                      bind: function bind(row) {
                        var stepList = row.stateMaintinStandard.stepsList;
                        var obj = stepList.find(function (a) {
                          return a.index == row.stepsIndex;
                        });
                        var label = "";

                        if (obj.content) {
                          label = obj.content;
                        }

                        return label;
                      }
                    }, {
                      name: "resultIndex",
                      bind: function bind(row) {
                        var stepList = row.stateMaintinStandard.stepsList;
                        var objStep = stepList.find(function (a) {
                          return a.index == row.stepsIndex;
                        });
                        var ruleList = objStep.ruleList;
                        var objRule = ruleList.find(function (a) {
                          return a.index == row.resultIndex;
                        });
                        var label = "";

                        if (objStep.dataType && objStep.dataType != null) {
                          if (objStep.dataType == "定量") {
                            var unit = objRule.unit ? objRule.unit : "";
                            var upperLimit = objRule.upperLimit ? objRule.upperLimit : "";
                            var lowerLimit = objRule.lowerLimit ? objRule.lowerLimit : "";

                            if (upperLimit != null && upperLimit != "" && lowerLimit == null || lowerLimit == "") {
                              label = " X < " + upperLimit + "(" + unit + ")";
                            } else if (upperLimit == null && lowerLimit != null && lowerLimit != "" || upperLimit == "") {
                              label = " X >= " + lowerLimit + "(" + unit + ")";
                            } else if (upperLimit != null && lowerLimit != null && upperLimit != "" && lowerLimit != "") {
                              label = lowerLimit + " <= X < " + upperLimit + "(" + unit + ")";
                            }
                          } else if (objStep.dataType == "定性") {
                            label = objRule.result;
                          }
                        }

                        return label;
                      }
                    }, {
                      name: "needState",
                      bind: function bind(row) {
                        if (row.needState == 0) {
                          return "非必须";
                        } else if (row.needState == 1) {
                          return "必须";
                        }
                      }
                    }],
                    buttons: {},
                    config: {
                      showIndex: false,
                      showSelector: false,
                      showSearch: false,
                      showPage: false,
                      inlineAdd: {
                        stateMantainStandardId: {
                          type: "select",
                          url: "maintenanceTaskUIService.getTaskBySimpleConditionWithPage",
                          parameter: [{
                            deviceId: resource.id,
                            ticketCategory: "310"
                          }, {
                            start: 0,
                            length: 1000,
                            statCount: true
                          }],
                          after: function after(d) {
                            d.data.push({
                              id: 0,
                              standardName: "无"
                            });
                            return d.data;
                          },
                          format: {
                            id: "id",
                            label: "standardName"
                          }
                        },
                        stepsIndex: {
                          type: "select",
                          watch: {
                            key: "stateMantainStandardId",
                            handler: function handler(newValue, next) {
                              stepsList = newValue.stepsList ? newValue.stepsList : [];
                              next(stepsList);
                            }
                          },
                          format: {
                            id: "index",
                            label: "content"
                          }
                        },
                        resultIndex: {
                          type: "select",
                          watch: {
                            key: "stepsIndex",
                            handler: function handler(newValue, next) {
                              var ruleList = [];
                              var dataType = newValue.dataType ? newValue.dataType : false;

                              if (dataType && dataType != null) {
                                ruleList = newValue.ruleList;

                                if (dataType == "定性") {
                                  for (var i = 0; i < ruleList.length; i++) {
                                    ruleList[i].label = ruleList[i].result;
                                  }
                                } else if (dataType == "定量") {
                                  var unit = ruleList[i].label.unit;
                                  var upperLimit = ruleList[i].label.upperLimit;
                                  var lowerLimit = ruleList[i].label.lowerLimit;

                                  if (upperLimit != null && lowerLimit == null) {
                                    ruleList[i].label = " X < " + upperLimit + unit;
                                  } else if (upperLimit == null && lowerLimit != null) {
                                    ruleList[i].label = " X >= " + lowerLimit + unit;
                                  } else if (upperLimit != null && lowerLimit != null) {
                                    ruleList[i].label = lowerLimit + " <= X < " + upperLimit + unit;
                                  }
                                }
                              }

                              next(ruleList);
                            }
                          },
                          format: {
                            id: "index",
                            label: "label"
                          }
                        },
                        needState: {
                          type: "select",
                          options: [{
                            id: 1,
                            label: "必须"
                          }, {
                            id: 0,
                            label: "非必须"
                          }]
                        },
                        submit: function submit(a, b, refreshGrid, allData) {
                          var item = {};
                          item.stateMantainStandardId = b.stateMantainStandardId && b.stateMantainStandardId.id ? b.stateMantainStandardId.id : 0;
                          item.stepsIndex = b.stepsIndex && b.stepsIndex.index ? b.stepsIndex.index : 0;
                          item.resultIndex = b.resultIndex && b.resultIndex.index ? b.resultIndex.index : 0;
                          item.needState = b.needState && b.needState.id ? b.needState.id : 0;
                          item.stateMaintinStandard = b.stateMantainStandardId ? b.stateMantainStandardId : null;
                          refreshGrid(false);
                          allData.push(item);
                        }
                      }
                    }
                  }
                }
              }, {
                type: "form-grid",
                children: [{
                  type: "input",
                  label: "作用设备名称",
                  composory: true,
                  key: "deviceName",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "作用设备编码",
                  composory: true,
                  key: "deviceCode",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "异常名称",
                  composory: true,
                  key: "abnormalName",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "维护标准名称",
                  key: "stateStandardName",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "label",
                  label: "维护标准编号",
                  key: "stateStandardNo"
                }, {
                  type: "input",
                  label: "维护周期单位",
                  key: "executionCycle",
                  watch: {
                    key: "stateStandardNo",
                    handler: function handler(e) {
                      var list = target.getRootScope("myDicts")["executionCycle"];
                      var obj = list.find(function (a) {
                        return a.valueCode == rowValue.executionCycle;
                      });
                      e.update({
                        value: obj && obj.label ? obj.label : ""
                      });
                    }
                  },
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "维护周期间隔",
                  key: "cycleNum",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "input",
                  label: "检修标准名称",
                  key: "maintainStandardName",
                  config: {
                    disabled: "disabled"
                  }
                }, {
                  type: "label",
                  label: "检修标准编号",
                  key: "maintainStandardNo"
                }, {
                  type: "input",
                  label: "检修完成期限(天)",
                  key: "maintainLimitDay",
                  config: {
                    disabled: "disabled"
                  }
                }]
              }]
            };
            psDialog.modal(obj, ruleCondition[0]);
          });
        }
      }
    }, {
      key: "maintainingProject",
      value: function maintainingProject(text) {
        var _this = this;

        var ticketNo = {
          ticketNo: this._ticketNo
        };
        ajax.post("deviceResumeUIService.getMaintainStandardListByCondition", ticketNo).then(function (tc) {
          if (tc && tc.length > 0) {
            target.createPopupByViewIdPath(9246777620035, "page5", {
              width: "800px",
              title: text
            }, _this.mergetValues());
          } else {
            growl.warning("请先制定维修方案");
          }
        });
      }
    }, {
      key: "repairProject",
      value: function repairProject(text) {
        target.createPopupByViewIdPath(9246777620035, "page6", {
          width: "800px",
          top: "13%",
          title: text
        }, JSON.stringify(this._ticketTaskValues));
      }
    }, {
      key: "alertItemList",
      value: function alertItemList() {
        var alertItemList = attr(this._data, "ticketTask/variables/alertItemList") || [],
            deviceName = attr(this._data, "ticketTask/variables/devName");
        alertItemList.forEach(function (ele) {
          ele.deviceName = deviceName;
        });
        target.createSystemPopupByViewId("357383633040000", {
          title: "报警详情",
          top: "10%",
          width: "80%"
        }, ["alertItemList", alertItemList]);
      }
    }, {
      key: "alertEvaluateInfoList",
      value: function alertEvaluateInfoList() {
        var alertEvaluateInfoList = attr(this._data, "ticketTask/variables/alertItemList");
        target.setValue("alertEvaluateInfoList", alertEvaluateInfoList);
        target.createPopupByViewIdPath(9246777620035, "page7", {
          width: "800px",
          top: "13%",
          title: "报警评价"
        });
      }
    }, {
      key: "taskEvaluate",
      value: function taskEvaluate() {
        var ticketTask = attr(this._data, "ticketTask");
        var alertEvaluateInfoList = attr(this._data, "ticketTask/values/alertEvaluateInfoList");

        if (alertEvaluateInfoList && alertEvaluateInfoList.length > 0) {
          target.setValue("global/resource", ticketTask);
          target.createPopupByViewIdPath(9246777620035, "page8", {
            width: "800px",
            title: "验收评价"
          }, "onlyRead");
        } else {
          target.setValue("global/resource", ticketTask);
          target.createPopupByViewIdPath(9246777620035, "page11", {
            width: "800px",
            title: "验收"
          }, "onlyRead");
        }
      }
    }, {
      key: "assessingAgain",
      value: function assessingAgain() {
        var ticketTask = attr(this._data, "ticketTask");
        target.setValue("global/resource", ticketTask);
        target.createSystemPopupByLocalPath("page10", {
          width: "800px",
          title: "验收评价"
        }, "onlyRead");
      }
    }, {
      key: "dianjianyichang",
      value: function dianjianyichang() {
        var pointTicketNo = attr(this._data, "ticketTask/variables/pointTicketNo");
        target.postService("ticketLogService", "getByTicketNo", [pointTicketNo], function (dt) {
          target.createPopupByViewIdPath(9246777620035, "page9", {
            width: "90%",
            title: "点检实绩登录"
          }, dt.data[1].ticketTask);
        });
      }
    }, {
      key: "dangridianjian",
      value: function dangridianjian() {
        var ticketTask = attr(this._data, "ticketTask");
        target.createPopupByViewIdPath(9246777620035, "page9", {
          width: "90%",
          title: "点检实绩登录"
        }, ticketTask);
      }
    }, {
      key: "baogao",
      value: function baogao() {
        cms2.modal({
          title: "详情",
          directive: "dialog-detail-alert",
          width: "50%",
          params: {
            mode: "view",
            type: "",
            data: this.ticketTask
          }
        }).then(function (d) {});
      }
    }, {
      key: "formulateScheme",
      value: function formulateScheme() {
        var _this2 = this;

        cms2.modal({
          title: "制定方案",
          directive: "dialog-detail-plan",
          width: "85%",
          params: {
            mode: "view",
            hasHead: true,
            data: this.next ? this.next.node.ticketTask : this.ticketTask
          }
        }).then(function (d) {
          if (d) {
            ajax.post("baogangTicketService.formulateScheme", [_this2.ticketNo, d]).then(function (e) {
              growl.info("录入完成");
              initDoud();
            });
          }
        });
      }
    }, {
      key: "disassemblyDetection",
      value: function disassemblyDetection() {
        var _this3 = this;

        cms2.modal({
          title: "解体检测",
          directive: "dialog-detail-performance",
          width: "85%",
          params: {
            mode: "view",
            hasHead: true,
            data: this.next ? this.next.node.ticketTask : this.ticketTask
          }
        }).then(function (d) {
          if (d) {
            ajax.post("baogangTicketService.disintegrationCheck", [_this3.ticketNo, d]).then(function (e) {
              growl.info("录入完成");
              initDoud();
            });
          }
        });
      }
    }, {
      key: "recordResults",
      value: function recordResults() {
        cms2.modal({
          title: "录入实绩",
          directive: "dialog-detail-performancess",
          width: "85%",
          params: {
            mode: "view",
            luru: true,
            hasHead: true,
            data: this.next ? this.next.node.ticketTask : this.ticketTask
          }
        });
      }
    }, {
      key: "factoryInspection",
      value: function factoryInspection() {
        cms2.modal({
          title: "出厂检验",
          directive: "dialog-detail-performancess",
          width: "85%",
          params: {
            mode: "view",
            luru: true,
            chuchang: true,
            hasHead: true,
            data: this.next ? this.next.node.ticketTask : this.ticketTask
          }
        });
      }
    }, {
      key: "detailsProblem",
      value: function detailsProblem() {
        cms2.modal({
          title: "问题详情",
          directive: "dialog-common-alerts",
          width: "50%",
          params: {
            mode: "view",
            hasHead: true,
            commonKey: "问题详情",
            data: this.next ? this.next.node.ticketTask : this.ticketTask,
            problem: "problem"
          }
        }).then(function (d) {
          if (d) {// growl.info("报废完成");
          }
        });
      }
    }, {
      key: "scrap",
      value: function scrap() {
        cms2.modal({
          title: "报废详情",
          directive: "dialog-common-alerts",
          width: "50%",
          params: {
            mode: "edit",
            hasHead: true,
            commonKey: "报废原因",
            data: this.next ? this.next.node.ticketTask : this.ticketTask
          }
        }).then(function (d) {
          if (d) {}
        });
      }
    }, {
      key: "downReport",
      value: function downReport() {
        var downloadDom = document.createElement('a');
        downloadDom.setAttribute('target', '_blank');
        downloadDom.setAttribute('href', "/api/rest/download/deviceResumeUIService/getReportBytes/".concat(this.ticketNo, ".pdf/").concat(this.ticketNo));
        downloadDom.click();
      }
    }]);

    return BtnClick;
  }();

  return new BtnClick();
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-config.service?angular=service&type=script":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-config.service?angular=service&type=script ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** mainCtrlRm" **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q) {
  var getConfigValues = q.defer();

  function parse(str) {
    var obj = null;

    try {
      obj = JSON.parse(str);
    } catch (e) {
      return null;
    }

    return obj;
  }

  var factory = {
    getRoleValues: function getRoleValues() {
      return getConfigValues.promise;
    },
    setRoleValues: function setRoleValues(d) {
      getConfigValues.resolve(parse(d));
    },
    updateRoleValues: function updateRoleValues(d) {
      getConfigValues = q.defer();
      getConfigValues.resolve(parse(d));
      return getConfigValues.promise;
    }
  };
  return factory;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-mock.service?angular=service&type=script":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-mock.service?angular=service&type=script ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** mock **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q) {
  function Mock(factory) {
    var MockData = function MockData() {
      _classCallCheck(this, MockData);
    };

    var _loop = function _loop(i) {
      Object.defineProperty(MockData.prototype, i, {
        enumerable: false,
        value: function value() {
          var fnStr = factory[i].toString();
          fnStr = fnStr.replace(/serviceProxy\.get/, "serviceProxy.mock");
          new Function(fnStr).apply(void 0, arguments);
        }
      });
    };

    for (var i in factory) {
      _loop(i);
    }
  }

  return Mock;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-new-websocket.service?angular=service&type=script":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-new-websocket.service?angular=service&type=script ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../js/services/service_factory.js */ "./js/services/service_factory.js");
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = (function (q, rootScope) {
  var DEBUG = false,
      protocol = _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default.a.protocol || "ws",
      host = _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default.a.host,
      websockets = {},
      websocketOpened = q.defer(),
      url = "".concat(protocol, "//").concat(host, "/websocket/message"),
      getId = function getId(d) {
    return _typeof(d) === "object" ? d.id : d;
  };

  function stringify(obj) {
    return JSON.stringify(obj);
  }

  function parse(str) {
    var a = {};

    try {
      a = JSON.parse(str);
    } catch (e) {}

    return a;
  }

  function createWs(name) {
    var WebsocketCls =
    /*#__PURE__*/
    function () {
      function WebsocketCls() {
        var _this = this;

        _classCallCheck(this, WebsocketCls);

        this.listeners = [];
        this.name = name;
        this.uuid = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_1__["random"])();
        this.ws = new WebSocket(url);

        this.ws.onopen = function () {
          websocketOpened.resolve(_this.ws);
        };

        this.ws.onerror = function (e) {
          console.log("websocket was on error, please try to re-link");
        };

        this.ws.onclose = function (e) {
          console.log("websocket was closed, please try to re-link");
        };

        this.ws.onmessage = function (e) {
          var data = parse(e.data);

          var _ref = data.data ? data.data : data,
              nodeId = _ref.nodeId,
              kpiCode = _ref.kpiCode,
              value = _ref.value;

          var fn = _this.listeners["".concat(nodeId, "_").concat(kpiCode)];

          fn ? fn.forEach(function (f) {
            f(data.data);
          }) : null;
        };
      }

      _createClass(WebsocketCls, [{
        key: "send",
        value: function send(ci, kpi) {
          var _this2 = this;

          websocketOpened.promise.then(function (ws) {
            ws.send(stringify({
              uuid: _this2.uuid,
              operation: "register",
              type: "kpi",
              param: {
                ciid: ci.map(getId).join(","),
                kpi: kpi.map(getId).join(",")
              }
            }));
          });
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.ws.send(stringify({
            uuid: this.uuid,
            operation: "unregister"
          }));
        }
      }, {
        key: "on",
        value: function on(ci, kpi, callback) {
          this.listeners["".concat(ci, "_").concat(kpi)] = this.listeners["".concat(ci, "_").concat(kpi)] || [];
          this.listeners["".concat(ci, "_").concat(kpi)].push(callback);
        }
      }]);

      return WebsocketCls;
    }();

    return new WebsocketCls(name);
  }

  return function (name) {
    websockets[name] = websockets[name] || createWs(name);
    return websockets[name];
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-polling.service?angular=service&type=script":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-polling.service?angular=service&type=script ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, ajax, psWebsocket) {
  /** 抽象轮询和websocket查寻数据的方法 */
  var id = 0;

  var KpiValueListGetter =
  /*#__PURE__*/
  function () {
    function KpiValueListGetter(time) {
      _classCallCheck(this, KpiValueListGetter);

      this.id = id++;
      this.time = time;
    }

    _createClass(KpiValueListGetter, [{
      key: "getKpiValueList",
      value: function getKpiValueList(nodeIds, kpiCodes) {
        var _this = this;

        var instances = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        var callback = arguments.length > 3 ? arguments[3] : undefined;
        var params = ["kpi", {
          includeInstance: true,
          isRealTimeData: true,
          nodeIds: nodeIds,
          queryInstances: instances.join(","),
          kpiCodes: kpiCodes
        }];
        ajax.post("kpiDataFlexService.getKpiValueList", params).then(function (d) {
          callback && callback.call(_this, d);
        })["catch"](function (e) {
          callback && callback.call(_this, []);
        });
      }
    }]);

    return KpiValueListGetter;
  }();

  var Polling =
  /*#__PURE__*/
  function (_KpiValueListGetter) {
    _inherits(Polling, _KpiValueListGetter);

    function Polling(time) {
      _classCallCheck(this, Polling);

      return _possibleConstructorReturn(this, _getPrototypeOf(Polling).call(this, time));
    }

    _createClass(Polling, [{
      key: "getData",
      value: function getData(nodeIds, kpiCodes, instances, callback) {
        var _this2 = this;

        this.polling = function () {
          _this2.getKpiValueList(nodeIds, kpiCodes, instances, function (valuelist) {
            callback && callback.call(_this2, valuelist);
            _this2.timer = setTimeout(function () {
              _this2.polling && _this2.polling();
            }, _this2.time);
          });
        };

        this.polling();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        clearTimeout(this.timer);
        delete this.time;
        delete this.polling;
      }
    }]);

    return Polling;
  }(KpiValueListGetter);

  var WebSocket =
  /*#__PURE__*/
  function (_KpiValueListGetter2) {
    _inherits(WebSocket, _KpiValueListGetter2);

    function WebSocket(time, isDebug) {
      var _this3;

      _classCallCheck(this, WebSocket);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(WebSocket).call(this, time));
      _this3.isDebug = isDebug;
      return _this3;
    }

    _createClass(WebSocket, [{
      key: "getData",
      value: function getData(nodeIds, kpiCodes, instances, callback) {
        var _this4 = this;

        this.ws = psWebsocket("webSocket_" + this.id, this.time, this.isDebug);
        this.ws.on(function (v, dt) {
          callback && callback.call(_this4, v, dt);
        });
        this.getKpiValueList(nodeIds, kpiCodes, instances, function (valuelist) {
          callback && callback.call(_this4, valuelist);

          _this4.ws.send(nodeIds, kpiCodes, instances);
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.ws.destroy();
      }
    }]);

    return WebSocket;
  }(KpiValueListGetter);

  var PsPolling =
  /*#__PURE__*/
  function () {
    function PsPolling(time, isWebsocket, isDebug) {
      _classCallCheck(this, PsPolling);

      this.time = time;
      this.isWebsocket = isWebsocket;
      this.valueGetter = this.isWebsocket ? new WebSocket(this.time, isDebug) : new Polling(this.time);
    }

    _createClass(PsPolling, [{
      key: "getData",
      value: function getData(nodeIds, kpiCodes, instances, callback) {
        var _this5 = this;

        this.valueGetter.getData(nodeIds, kpiCodes, instances, function (v, dt) {
          _this5.saveApply(function () {
            callback && callback.call(_this5, v, dt);
          });
        });
      }
    }, {
      key: "saveApply",
      value: function saveApply(fn) {
        if (rootScope.$$phase == "$digest" || rootScope.$$phase == "$apply") {
          return fn();
        }

        return rootScope.$apply(fn);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.valueGetter.destroy();
      }
    }]);

    return PsPolling;
  }();

  return function (time, mode, isDebug) {
    return new PsPolling(time, mode, isDebug);
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo.service?angular=service&type=script":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-topo.service?angular=service&type=script ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** mainCtrlRm" **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, $state, psTreeData, ajax, resourceUIService, kpiDataService, psWebsocket, SwSocket, unitService, cms2) {
  return function (data) {
    var elemData = data,
        uuid,
        timer,
        timerCallback,
        ws = psWebsocket("ps_topo"),

    /** keep consequence with old version **/
    persentage = 0,

    /** keep consequence with old version **/
    events = {},
        kpisMap = {},
        units = {},
        resourceMap = {},
        scope = elemData.scope,
        timeout = elemData.timeout,
        topo = $("<div></div>"),
        wrap = $("<div></div>"),
        svgId,
        isArray = isType("Array"),
        previewMode = elemData.previewMode,
        element = elemData.element,
        self = elemData.element,
        viewId = self.viewId,
        global = elemData.global,
        style = element.style || {},
        linkAnHandler = function linkAnHandler(cell) {
      var dr = cell.get("attrs")[".connection"]["stroke-dasharray"],
          linkAn = cell.get("linkAn"),
          cellDom = jQuery("[model-id=" + cell.id + "]").find(".connection")[0],
          oldClass = cellDom.getAttribute("class");
      oldClass = oldClass.replace(" runslow", "");
      oldClass = oldClass.replace(" runnormal", "");
      oldClass = oldClass.replace(" runfast", "");

      if (dr && dr != "0") {
        if (linkAn == "慢速") {
          oldClass = oldClass + " runslow";
        } else if (linkAn == "普通") {
          oldClass = oldClass + " runnormal";
        } else if (linkAn == "快速") {
          oldClass = oldClass + " runfast";
        }
      }

      cellDom.setAttribute("class", oldClass);
    };

    function isType(type) {
      return function (target) {
        return {}.toString.call(target) === "[object " + type + "]";
      };
    }

    function collapse(a, b) {
      var item,
          queue = isArray(b) ? b.slice() : [b];

      while (item = queue.shift()) {
        if (isArray(item)) {
          [].push.apply(queue, item);
        } else {
          a.push(item);
        }
      }

      return a;
    }

    function extend() {
      var args = [].slice.call(arguments),
          first = args.shift();
      args.forEach(function (d) {
        for (var i in d) {
          first[i] = d[i];
        }
      });
      return first;
    }

    function random(length) {
      length = length || 16;
      var chars = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
          rs = "",
          rnd,
          len = chars.length;

      for (var i = 0; i < length; i++) {
        rnd = parseInt(Math.random() * len);
        rs += chars[rnd];
      }

      return rs;
    }

    function directive(cell) {
      var context = {};
      var position = cell.position,
          div;
      var directiveIds = cell.directiveIds.map(function (e) {
        return typeof e == "number" && e || parseInt(e.split("number:")[1]);
      });
      var modelId = cell.modelId && cell.modelId.split("number:")[1];
      var nodeId = cell.modelId && cell.nodeId.split("number:")[1];

      if (modelId) {
        var getDirectivesByModelId = function getDirectivesByModelId() {
          return new Promise(function (resolve) {
            resourceUIService.getDirectivesByModelId(modelId, function (d) {
              resolve(d.data);
            });
          });
        };

        var getKpisByModelId = function getKpisByModelId() {
          return new Promise(function (resolve) {
            resourceUIService.getKpisByModelId(modelId, function (d) {
              resolve(d.data);
            });
          });
        };

        Promise.all([getDirectivesByModelId(), getKpisByModelId()]).then(function (ret) {
          var directives = ret[0];
          var kpis = ret[1];
          directives = directives.filter(function (d) {
            return directiveIds.indexOf(d.id) != -1;
          });
          directives.forEach(function (directive) {
            kpis.forEach(function (kpi) {
              if (kpi.id == directive.kpiDefinitionIds[0]) {
                directive.kpiLabel = kpi.name;
              }
            });
            var wrap = $("<div></div>");
            var label = $("<label></label>");
            var input = $("<input />");
            var btn = $("<button></button>");
            var timesInput = $("<input />");
            var timesLabel = $("<label></label>");
            label.css("margin", "5px");
            input.css("margin", "5px");
            timesInput.css("margin", "5px");
            timesInput.css("width", "30px");
            timesInput.val(1);
            btn.text("发送");
            timesLabel.text("次");
            label.text(directive.name);
            wrap.append(label);
            wrap.append(input);
            wrap.append(btn);
            wrap.append(timesInput);
            wrap.append(timesLabel);
            div.append(wrap);
            btn.on("click", function (e) {
              var times = timesInput.val();
              times = Number(times);
              var params = {};
              params[directive.kpiLabel] = input.val();
              close();

              for (var j = 0; j < times; j++) {
                element.sendDirective(parseInt(nodeId), directive.id, params, function (e) {});
              }
            });
          });
        });
      }

      var p = persentage || 1;
      div = $("<div></div>");
      div.css("position", "absolute");
      div.css("top", cell.position.y / p + "px");
      div.css("left", (cell.position.x < 300 ? 100 + cell.position.x : cell.position.x - 280) / p + "px");
      div.css("border", "1px solid #ddd");
      div.css("z-index", 199);
      div.css("padding", "10px");
      div.css("background-color", "#eee");
      setTimeout(function () {
        div.on("click", function (e) {
          e.stopPropagation();
        });
        $("body").on("click.directive", close);
      });
      topo.append(div);

      function close(e) {
        div.children().remove();
        div.remove();
        $("body").off("click.directive");
      }

      return context;
    }

    function tip(cell) {
      var context = {};
      var position = cell.position,
          div;
      var kpiId = cell.kpiId && cell.kpiId.split("number:")[1];
      var nodeId = cell.nodeId && cell.nodeId.split("number:")[1];
      var modelId = cell.modelId && cell.modelId.split("number:")[1];

      if (kpiId && nodeId) {
        kpiDataService.getRealTimeKpiData([nodeId * 1], [kpiId * 1], function (ret) {
          if (ret.code == 0 && ret.data.length) {
            var wrap = $("<div></div>");
            var label = $("<label></label>");
            label.css("margin", "5px");
            label.css("color", "#fff");
            label.css("font-size", "18px");
            var unitLabel = scope.$root.rootModelsDic[modelId][kpiId].unitLabel || "";
            label.text(ret.data[0].value + unitLabel);
            wrap.append(label);
            div.append(wrap);
            var p = persentage || 1;
            div = $("<div></div>");
            div.css("position", "absolute");
            div.css("left", cell.position.x / p + "px");
            div.css("top", (cell.size.height + cell.position.y) / p + "px");
            div.css("border", "1px solid #fff");
            div.css("z-index", 199);
            div.css("padding", "5px");
            div.css("border-radius", "5px");
            div.css("background-color", "rgba(0,0,0,0.5");
            setTimeout(function () {
              div.on("click", function (e) {
                e.stopPropagation();
              });
              $("body").on("click.tip", close);
            });
            topo.append(div);
          }
        });
      }

      function close(e) {
        div.children().remove();
        div.remove();
        $("body").off("click.tip");
      }

      return context;
    }

    function promise(fn) {
      var defer = q.defer();
      fn(defer.resolve, defer.reject);
      return defer.promise;
    }

    function success(d) {
      var defer = q.defer();
      defer.resolve(d);
      return defer.promise;
    }

    function getExpression() {
      return promise(function (res, rej) {
        var exp = element.$attr("advance/expression");

        if (_typeof(exp) == "object") {
          res(exp);
          return;
        }

        $$.runExpression(exp, function (funRes) {
          if (funRes.code == "0") {
            var fnResult = funRes.data;
            res(fnResult);
          } else {
            rej(funRes.message);
          }
        });
      });
    }

    function renderJSON(json) {
      return promise(function (res, rej) {
        self.hooks.call("viewloaded", json.cells, function (d) {
          res(json);
        });
      });
    }

    function parse(str) {
      var a;

      try {
        a = JSON.parse(str);
      } catch (e) {
        return;
      }

      return a;
    }

    function getViewById(viewId) {
      return promise(function (res, rej) {
        self.getViewById(viewId, function (view) {
          if (view == null) {
            return res();
          }

          res(parse(view.content));
        });
      });
    }

    function getRapppid() {
      return promise(function (res, rej) {
        $$.loadExternalJs(["rappid-joint", "lodash", "backbone"], function (joint) {
          res(joint);
        });
      });
    }

    function noEmpty(d) {
      return d;
    }

    function getKpiValueList(ci, kpi, instancs, mock) {
      var params = ["kpi", {
        category: "ci",
        isRealTimeData: true,
        timePeriod: 0,
        nodeIds: ci,
        kpiCodes: kpi,
        startTime: null,
        endTime: null,
        timeRange: "",
        statisticType: "psiot",
        condList: [],
        includeInstance: true //queryInstances: instancs.join(",")

      }];
      return mock === true ? ajax.$mock().post("kpiDataFlexService.getKpiValueList", params) : ajax.post("kpiDataFlexService.getKpiValueList", params);
    }

    function getNumber(str) {
      var match = /(?:.*\:)*([^\:]*)/.exec(str);

      if (typeof str == "string" || typeof str == "number") {
        return match ? match[1] - 0 : str;
      }
    }

    function getString(str) {
      var match = /(?:.*\:)*([^\:]*)/.exec(str);

      if (typeof str == "string" || typeof str == "number") {
        return match ? match[1] : str;
      }
    }

    function getFill(obj) {
      var rs = {};

      for (var i in obj) {
        rs = obj[i];
        break;
      }

      return rs.fill;
    }

    function getType(type) {
      if (type == "basic.Rect") {
        return "rect";
      } else if (type == "basic.Circle") {
        return "circle";
      }
    }

    function removeSpace(str) {
      var match = /^\s*([^\s]+)\s*$/g.exec(str);
      return match ? match[1] : "";
    }

    function equalStr(target, st) {
      return new RegExp("^\\s*" + st + "\\s*$").test(target);
    }

    function getUnit(unit) {
      if (equalStr(unit, "NA") || equalStr(unit, "wave")) {
        return "";
      }

      if (typeof unit !== "string") {
        return "";
      }

      return " " + removeSpace(unit);
    }

    function getTextFill(obj) {
      return obj["text"] && obj["text"]["fill"];
    }

    self.$on = function (eventName, callback) {
      events[eventName] = callback;
    };

    self.setResources = function (resources) {
      self.hooks.tap("viewloaded", function (cells, next) {
        cells.forEach(function (cell) {
          var modelId = cell.modelId;
          modelId = typeof modelId === "string" ? /^number\:(\d+)$/g.exec(modelId) : null;
          modelId = modelId ? modelId[1] : null;

          if (modelId) {
            cell.nodeId = "number:" + resources.id;
          }
        });
        next();
      });
    };

    self.hooks = self.Synchook();

    self.createDeviceDropList = function (data, pos, config) {
      var p = persentage || 1;
      var hitArea = $("<div></div>");
      var titleArea = $("<div></div>");
      var popup = $("<div></div>");
      var config = config || {};
      var clickFn = config.$attr("click");
      var titleClickFn = config.$attr("titleClick");
      $("#devicelistscroll").remove();
      hitArea.attr("id", "devicelistscroll");
      titleArea.css("width", "100%");
      titleArea.css("height", "50px");
      hitArea.css("position", "absolute");
      hitArea.css("z-index", 199);
      popup.css("padding", "2px");
      popup.css("background-color", "#1e415d");
      popup.css("border", "1px solid #000");
      popup.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.5)");
      popup.css("max-height", "150px");
      popup.css("overflow-x", "hidden");
      popup.css("overflow-y", "auto");
      hitArea.css("cursor", "pointer");
      hitArea.css("top", pos.y / p - (config.y || 30) + "px");
      hitArea.css("left", pos.x / p - (config.x || 50) + "px");
      hitArea.css("background-color", "rgba(0,0,0,0)");
      hitArea.on("mouseleave", function (event) {
        $("#devicelistscroll").remove();
      });
      titleArea.on("click", function (event) {
        titleClickFn();
      });

      var createDom = function createDom(item) {
        var wrap = $("<div></div>"),
            label = $("<span></span>"),
            status = $("<div></div>");
        wrap.attr("id", "wrap");
        status.css("margin-right", "5px");
        status.css("width", "10px");
        status.css("height", "10px");
        status.css("border-radius", "50%");
        status.css("background-color", self.getAlertColor(item.status));
        status.css("display", "inline-block");
        wrap.css("padding", "5px 15px");
        label.text(item.label);
        label.css("padding-right", "10px");
        wrap.append(status);
        wrap.append(label);
        wrap.on("mouseenter", function (event) {
          hitArea.find("#wrap").css("background-color", "rgba(0,0,0,0)");
          wrap.css("background-color", "rgba(0,0,0,.3)");
        });
        wrap.on("mouseleave", function (event) {
          wrap.css("background-color", "rgba(0,0,0,0)");
        });
        wrap.on("click", function (event) {
          clickFn(item);
        });
        /**
           item.$on("statusChanged", function (node) {
          status.css("background-color", self.getAlertColor(item.status));
        });**/

        return wrap;
      };

      for (var i in data) {
        popup.append(createDom(data[i]));
      }

      hitArea.append(titleArea);
      hitArea.append(popup);
      topo.prepend(hitArea);
    }; //150 - 235


    self.createAttrDisp = function (t, data, pos, callback, planeMode, height) {
      var popup, body, title, wrap;
      var orderKey = ["速度有效值", "冲击平均值", "震动", "冲击", "速度", "温度", "电压", "电流"];
      height = height || 50;

      function findIndex(arr, callback) {
        var i, find;

        for (i = 0; i < arr.length; i++) {
          find = callback(arr[i], i);

          if (find) {
            return i;
          }
        }
      }

      function AttrDisp() {
        popup = $("<div></div>");
        body = $("<div></div>");
        title = $("<div></div>");
        wrap = $("<table></table>");
        popup.css("position", "absolute");
        popup.css("padding", "2px");
        popup.css("background-color", "rgba(30,65,93,.9)");
        popup.css("border", "1px solid #000");
        popup.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.5)");
        popup.css("z-index", 99);

        if (planeMode) {
          body.css("max-height", "300px");
          body.css("min-width", "380px");
        } else {
          data.sort(function (a, b) {
            var ka = findIndex(orderKey, function (d) {
              return (a.kpiName || a.label).indexOf(d) != -1;
            }) || a.label;
            var kb = findIndex(orderKey, function (d) {
              return (b.kpiName || b.label).indexOf(d) != -1;
            }) || b.label;
            return ka < kb ? -1 : 1;
          });
          body.css("max-height", height + "px");
        }

        body.css("overflow-y", "auto");
        body.css("overflow", "auto");
        title.css("text-align", "center");
        title.css("font-weight", "bold");
        title.css("padding", "3px");
        title.css("color", "#fff");
        title.css("background-color", "#295375");
        title.text(t);
        popup.css("top", pos.y + "px");
        popup.css("left", pos.x + "px");
        popup.append(title);

        var createDom = function createDom(item) {
          var tr = $("<tr></tr>");
          var td1 = $("<td></td>");
          var td2 = $("<td></td>");
          var td3 = $("<td></td>");
          var td4 = $("<td></td>");
          var time = item.arisingTime ? useMomentFormat(item.arisingTime, "yyyy-MM-dd hh:mm:ss") : "-";
          td1.css("padding", "5px 6px 1px 6px");
          td2.css("padding", "5px 6px 1px 6px");
          td3.css("padding", "5px 6px 1px 6px");
          td4.css("padding", "5px 6px 1px 6px");
          td1.css("vertical-align", "middle");
          td2.css("vertical-align", "middle");
          td3.css("vertical-align", "middle");
          td4.css("vertical-align", "middle");
          var label = $("<span></span>");
          var button = $('<button id="button" rel="popover" ></button>');

          if (!planeMode) {
            button.popover({
              placement: "right",
              trigger: "manual",
              title: "上报时间",
              container: "body",
              content: function content() {
                return time;
              }
            }).on("mouseenter", mouseenter).on("mouseleave", mouseleave);
            label.text(item.label);
            td1.append(label);
          } else {
            var span1 = $("<span>" + item.devName + "</span>");
            var span2 = $("<span>" + item.message + "</span>");
            var span3 = $("<span>" + useMomentFormat(item.arisingTime, "yyyy-MM-dd hh:mm:ss") + "</span>");
            span1.css("white-space", "normal");
            span2.css("white-space", "normal");
            span3.css("white-space", "normal");
            span1.css("display", "inline-block");
            span2.css("display", "inline-block");
            span3.css("display", "inline-block");
            span1.css("max-width", "100px");
            span2.css("max-width", "220px");
            td1.append(span1);
            td3.append(span2);
            td4.append(span3);
          }

          if (item.valueStr) {
            button.text(item.valueStr);
          } else if (item.value != "-") {
            button.text(self.toFix(item.value, 2));
          } else {
            button.text("-");
          }

          function mouseenter() {
            if (t) {
              $(this).popover("show");
            }
          }

          function mouseleave() {
            $(this).popover("hide");
          }

          label.css("color", "#aaa");
          label.css("padding-right", "10px");

          item.updateValue = function (value, unit) {
            var val = typeof value !== "undefined" && value !== null ? value : "-";
            val = typeof val == "number" ? self.toFix(val, 2) : val;

            if (unit != "NA" && unit) {
              val += unit;
            }

            button.text(val);
            this.value = value;
          };

          item.updateStatus = function (value) {
            this.status = value;
            button.css("background-color", self.getAlertColor(value));
          };

          item.updateTime = function (t) {
            if (t) {
              time = useMomentFormat(t, "yyyy-MM-dd hh:mm:ss");
            } else {
              time = "-";
            }
          };

          button.css("min-width", "50px");
          button.css("text-align", "center");
          button.css("line-height", "12px");
          button.css("border", 0);
          button.css("color", "#fff");
          button.css("border-radius", "10px");
          button.css("background-color", self.getAlertColor(item.status));
          button.on("click", function (event) {
            $(this).popover("destroy");
            var param = {
              id: item.nodeId,
              sensor: item.instance,
              dataItems: item.id || item.kpiCode
            };

            if (item.arisingTime) {
              param.enddate = new Date(item.arisingTime).getTime();
              param.startdate = param.enddate - 2 * 60 * 60 * 1000;
            }

            self.navigateTo("index", "专业分析", param);
          });

          if (item.label) {
            tr.append(td1);
          }

          if (planeMode) {
            tr.append(td3);
            tr.append(td4);
          }

          tr.append(td2);
          td2.append(button);
          return tr;
        };

        for (var i in data) {
          wrap.append(createDom(data[i]));
        }

        body.append(wrap);
        popup.append(body);
        topo.append(popup);
      }

      AttrDisp.prototype.destroy = function () {
        popup.remove();
      };

      AttrDisp.prototype.getData = function () {
        return data;
      };

      return new AttrDisp();
    };

    var itemins;
    var CamraDic = {
      A101: 1021,
      A201: 1022,
      A301: 1023,
      A401: 1024,
      A102: 1025,
      A202: 1026,
      A302: 1027,
      A402: 1028,
      A103: 1029,
      A203: 1030,
      A303: 1031,
      A403: 1032,
      A731: 1033,
      A831: 1034,
      A732: 1035,
      A832: 1036,
      A833: 1037,
      A835: 1038
    };

    function bind(target, fn) {
      return function () {
        return fn.apply(target, arguments);
      };
    }

    var Camera =
    /*#__PURE__*/
    function () {
      function Camera(ip, path, protocol) {
        _classCallCheck(this, Camera);

        this.ip = ip;
        this.path = path;
        this.protocol = protocol;
      }

      _createClass(Camera, [{
        key: "isValid",
        value: function isValid() {
          return this.valid;
        }
      }, {
        key: "getURLs",
        value: function getURLs() {
          var _this = this;

          return this.ports.map(function (port) {
            return _this.protocol + _this.ip + ":" + port + _this.path;
          });
        }
      }]);

      return Camera;
    }();

    var CoalSiloCamera =
    /*#__PURE__*/
    function (_Camera) {
      _inherits(CoalSiloCamera, _Camera);

      function CoalSiloCamera(ip, path, protocol, label) {
        var _this2;

        _classCallCheck(this, CoalSiloCamera);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CoalSiloCamera).call(this, ip, path, protocol));
        _this2.valid = new RegExp("^煤筒仓$").test(label);
        _this2.ports = [1039, 1040];
        return _this2;
      }

      return CoalSiloCamera;
    }(Camera);

    var RobotCamera =
    /*#__PURE__*/
    function (_Camera2) {
      _inherits(RobotCamera, _Camera2);

      function RobotCamera(ip, path, protocol, label) {
        var _this3;

        _classCallCheck(this, RobotCamera);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RobotCamera).call(this, ip, path, protocol));
        var match = new RegExp("^(A\\d+)\\D.*$").exec(label);
        _this3.index = match ? match[1] : null;
        _this3.valid = !!match;

        if (!_this3.valid) {
          return _possibleConstructorReturn(_this3);
        }

        _this3.ports = [CamraDic[_this3.index]];
        return _this3;
      }

      return RobotCamera;
    }(Camera);

    var SetCamera =
    /*#__PURE__*/
    function () {
      function SetCamera(wrap, ip, path) {
        _classCallCheck(this, SetCamera);

        this.ip = ip;
        this.path = path;
        this.wrap = wrap;
        this.protocol = "http://";
        this.init();
      }

      _createClass(SetCamera, [{
        key: "init",
        value: function init() {
          var _this4 = this;

          this.getResource().then(function (resource) {
            _this4.cam = new CoalSiloCamera(_this4.ip, _this4.path, _this4.protocol, resource.label);

            if (_this4.cam.isValid()) {
              _this4.createDom();

              return;
            }

            _this4.cam = new RobotCamera(_this4.ip, _this4.path, _this4.protocol, resource.label);

            if (_this4.cam.isValid()) {
              _this4.createDom();

              return;
            }

            _this4.cam = null;
          });
        }
      }, {
        key: "getResource",
        value: function getResource() {
          return psTreeData($state.params.id).getState();
        }
      }, {
        key: "createDom",
        value: function createDom() {
          var div = document.createElement("button");
          div.innerText = "视频";
          div.style.position = "absolute";
          div.style.top = "20px";
          div.style.right = "20px";
          div.style.zIndex = 999;
          div.setAttribute("class", "btn btn-primary");
          div.onclick = bind(this, this.onclick);
          this.wrap.prepend(div);
        }
      }, {
        key: "onclick",
        value: function onclick() {
          cms2.modal({
            title: "视频监控",
            directive: "dialog-video-cam",
            width: "60%",
            scope: scope,
            params: {
              mode: "videoCam",
              url: this.cam.getURLs()
            }
          });
        }
      }]);

      return SetCamera;
    }();

    self.addCam = function () {
      var ip = "10.3.150.39",
          path = "/test",
          camera = new SetCamera(topo, ip, path);
    };

    self.createCurrentStatus = function (txt, pos, status, abs) {
      var wrap = topo.find("div#cStatus");
      var title = $("<div></div>");
      var addOn = $("<div></div>");
      var circle = $("<div></div>");
      var ins;
      wrap = wrap.size() ? wrap : $('<div id="cStatus"></div>');
      wrap.children().remove();

      function wholeClick() {
        $("body").off("click");
        ins.destroy();

        if (itemins) {
          itemins.destroy();
        }
      }

      function clickFn(event) {
        var p = persentage || 1;
        var data = self.getValue("device/alerts");

        if (ins) {
          ins.destroy();
        }

        $("body").off("click");

        if (data) {
          if (data.length > 0) {
            ins = self.createAttrDisp("告警信息", data, {
              x: pos.x / p - 200,
              y: pos.y / p + 15
            }, function (item) {
              var nodeId = item.nodeId;
              var resource;
              var ROLE = self.getValue("global/ROLE");
              self.getDomainAreaLineTree_alertStatus(function (domaintree) {
                domaintree.traverse(function (node) {
                  if (node.id == nodeId) {
                    getResourceById(node.id).then(function (resource) {
                      return ajax.post(getAttrsByModelId, resource.modelId).then(function (attrs) {
                        extend(node, resource);
                        var sub,
                            accessConfigs = node.physicalConfig.accessConfigs || {},
                            sensor = accessConfigs.find(function (n) {
                          return n.instance === item.instance;
                        }) || null;
                        self.setParameter("id", node.id);
                        self.setValue("global/alertTime", item.arisingTime);
                        self.setValue("global/resource", node);
                        self.setValue("global/sensor", sensor);
                        self.setValue("global/instance", item.instance);
                        self.setParameter("sensorId", sensor.dataItemId);

                        if (item.specialty == "Z") {
                          sub = 0;
                        } else if (item.specialty == "D") {
                          sub = 1;
                        } else {
                          sub = 7;
                        }

                        self.navigateToTab("analysis", sub, 1);
                      });
                    });
                  }
                });
              });
            }, true);
            setTimeout(function () {
              $("body").on("click", wholeClick);
            });
          } else {
            self.growl("暂无未处理的告警信息！");
          }
        }
      }

      function currentStatus() {
        wrap.css("position", "absolute");
        var p = abs ? 1 : persentage || 1;
        wrap.css("cursor", "pointer");
        wrap.css("top", pos.y + "px");
        wrap.css("left", pos.x + "px");
        title.text(txt);
        title.css("padding-right", "6px");
        title.css("font-weight", "bold");
        title.css("line-height", "14px");
        title.css("display", "inline-block");
        title.css("color", "#fff");
        addOn.css("display", "inline-block");
        circle.css("display", "block");
        circle.css("position", "absolute");
        circle.css("top", "1px");
        circle.css("width", "14px");
        circle.css("height", "14px");
        circle.css("border-radius", "50%");
        circle.css("background-color", self.getAlertColor(status));
        circle.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,1)");

        if (status > 0) {
          title.css("text-decoration", "underline");
          wrap.off("click");
          wrap.on("click", clickFn);
        }

        addOn.append(circle);
        wrap.append(title);
        wrap.append(addOn);
        topo.append(wrap);
        wrap.css("marginLeft", -(14 + wrap.width()) / 2);
      }

      currentStatus.prototype.setAlarmStatus = function (status) {
        circle.css("background-color", self.getAlertColor(status));

        if (status > 0) {
          title.css("text-decoration", "underline");
          wrap.off("click");
          wrap.on("click", clickFn);
        }
      };

      return new currentStatus();
    };

    self.createCurrentStatusByItem = function (id, pos) {
      function wholeClick() {
        $("body").off("click");
        if (itemins) itemins.destroy();
      }

      function clickFn(event) {
        var p = persentage || 1;
        var data = self.getValue("device/alerts");

        if (itemins) {
          itemins.destroy();
        }

        data = data.filter(function (elm) {
          return elm.nodeId == id;
        });
        $("body").off("click");

        if (data.length > 0) {
          itemins = self.createAttrDisp("告警信息", data, {
            x: pos.x / p,
            y: pos.y / p
          }, function (item) {
            var nodeId = item.nodeId;
            var resource;
            var ROLE = self.getValue("global/ROLE");
            self.getDomainAreaLineTree_alertStatus(function (domaintree) {
              domaintree.traverse(function (node) {
                var sub;

                if (node.id == nodeId) {
                  self.setValue("global/resource", node);
                  self.setValue("global/instance", item.instance);
                  self.setValue("global/sensor", item);
                  self.setValue("global/alertTime", item.arisingTime);
                  self.setParameter("sensorId", item.id);

                  if (node.specialty == "Z") {
                    sub = 0;
                  } else if (node.specialty == "D") {
                    sub = 1;
                  } else {
                    sub = 7;
                  }

                  if (ROLE == 1) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 2) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 3) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else {
                    self.growl("此角色无法显示特征曲线");
                  }
                }
              });
            });
          }, true);
          setTimeout(function () {
            $("body").on("click", wholeClick);
          });
        } else {
          self.growl("此设备暂无未处理的告警信息！");
        }
      }

      clickFn();
    };

    self.createMarker = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/marker"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        });
        callback(ins);
      });
    };

    self.createAlarm = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/alarm"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        });
        callback(ins);
      });
    };

    self.createAlarmSmall = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/alarm"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title,
          smallMode: true
        });
        callback(ins);
      });
    };

    self.create3Dbar = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/3dbarchart"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        }); //ins.setPos(cell.position());
        //ins.setValue(0);

        callback(ins);
      });
    }; //获得缩放的点位


    self.getPersentageSite = function (position) {
      var p = persentage || 1;
      var tempPosition = {
        x: 0,
        y: 0
      };
      tempPosition.x = position.x / p;
      tempPosition.y = position.y / p;
      return tempPosition;
    };

    getExpression().then(function (expression) {
      var clickEvent = expression.$attr("on/click"),
          initEvent = expression.$attr("on/init"),
          emptyEvent = expression.$attr("on/empty"),
          completeEvent = expression.$attr("on/complete");

      function openCellTools(cellView) {
        if (previewMode) {
          var cell = cellView.model || cellView,
              modelId = getNumber(cell.get("modelId")),
              nodeId = getNumber(cell.get("nodeId")),
              kpiId = getNumber(cell.get("kpiId")),
              subViewId = getNumber(cell.get("subViewId")),
              text = cell.attr("text");

          if (cell.get("valueConfig")) {
            var isSend = false; //是否发送过

            var dirModel = resourceUIService.rootModelsDic[modelId];

            if (cell.get("valueConfig") && dirModel) {
              cell.get("valueConfig").forEach(function (valueLvevel) {
                if (valueLvevel.stateDisplay && valueLvevel.valueDirective && valueLvevel.valueDirectiveAttr) {
                  isSend = true;
                  dirModel.directives.forEach(function (dirObj) {
                    if (valueLvevel.valueDirective == dirObj.id) {
                      dirObj.value = valueLvevel.valueDirectiveAttr;
                      self.sendItemDir(dirObj, nodeId);
                    }
                  });
                }
              });

              if (!isSend && cell.get("valueConfig")[0].valueDirective && cell.get("valueConfig")[0].valueDirectiveAttr) {
                dirModel.directives.forEach(function (dirObj) {
                  if (cell.get("valueConfig")[0].valueDirective == dirObj.id) {
                    dirObj.value = cell.get("valueConfig")[0].valueDirectiveAttr;
                    self.sendItemDir(dirObj, nodeId);
                  }
                });
              }
            }

            return;
          }

          if (typeof clickEvent == "function") {
            clickEvent({
              cellView: cell,
              ui: {
                modelId: modelId,
                resourceId: nodeId,
                kpiId: kpiId,
                subViewId: subViewId
              },
              target: self,
              self: self,
              global: global,
              tools: elemData
            });
          }
        }
      }

      function getCellsMap(cells) {
        var rs = {};
        cells.forEach(function (cell) {
          var nodeId = getNumber(getAttributes(cell, "nodeId")) || 0,
              kpiId = getNumber(getAttributes(cell, "kpiId")) || 0;
          rs[nodeId + "_" + kpiId] = rs[nodeId + "_" + kpiId] || [];
          rs[nodeId + "_" + kpiId].push(cell);
          rs[nodeId + "_" + 999999] = rs[nodeId + "_" + 999999] || [];
          rs[nodeId + "_" + 999999].push(cell);
          rs[nodeId + "_" + 999998] = rs[nodeId + "_" + 999998] || [];
          rs[nodeId + "_" + 999998].push(cell);
        });
        return rs;
      }

      function getAttributes(obj, attr) {
        return obj ? obj.attributes[attr] : null;
      }

      function getKpi(cell) {
        return scope.$root.allDataItemsLoaded.then(function () {
          var cellModelId = getNumber(getAttributes(cell, "modelId")),
              cellKpiId = getNumber(getAttributes(cell, "kpiId"));
          return success(resourceUIService.rootModelsDic[cellModelId].kpiDic[cellKpiId]);
        });
      }

      function makeFunction(str) {
        return function (value) {
          if (typeof str !== "string") {
            return;
          }

          try {
            var fn = new Function("color", "(" + str + ")( color )"),
                rs = fn(value);
          } catch (e) {
            console.error(e);
            return;
          }

          return rs;
        };
      }

      function sortBySeries(kpisMap) {
        kpisMap = kpisMap || {};
        return function (a, b) {
          var item1 = kpisMap[a.dataItemId] || {},
              item2 = kpisMap[b.dataItemId] || {},
              s1 = item1.serial || 0,
              s2 = item2.serial || 0;
          return s1 - s2;
        };
      }

      function getMeasurePointData(queue) {
        var item,
            rs = [];
        queue = isArray(queue) ? queue : [queue];

        function allObj(obj) {
          var arr = [],
              i;

          for (i in obj) {
            if (_typeof(obj[i]) !== "object") {
              return false;
            }

            arr.push(obj[i]);
          }

          return arr;
        }

        while (item = queue.shift()) {
          if (isArray(item)) {
            [].push.apply(queue, item);
          } else {
            var arr = allObj(item);

            if (arr) {
              [].push.apply(queue, arr);
            } else {
              rs.push(item);
            }
          }
        }

        return rs;
      }

      function mapKpi(kpi) {
        return {
          id: kpi.dataItemId,
          instance: kpi.instance,
          label: kpi.kpiName,
          value: "-",
          status: 0,
          arisingTime: kpi.arisingTime
        };
      }

      function mapDataItem(nodeId) {
        return function (kpi) {
          return {
            nodeId: nodeId,
            id: kpi.dataItemId,
            instance: kpi.instance,
            value: "-",
            status: 0,
            arisingTime: kpi.arisingTime
          };
        };
      }

      function getAllUnits() {
        return resourceUIService.unitLoader();
      }

      function getResourceById(id) {
        resourceMap[id] = resourceMap[id] || function (defer) {
          self.getResourceById(id, function (res) {
            defer.resolve(res);
          });
          return defer.promise;
        }(q.defer());

        return resourceMap[id];
      }

      function getResourceByIds(ids) {
        var proms,
            rs = [];

        function recursive(ids) {
          var id = ids.shift();

          if (id) {
            return getResourceById(id).then(function (n) {
              rs.push(n);
              return recursive(ids);
            });
          } else {
            return success(rs);
          }
        }

        return recursive(ids.slice());
      }

      function getKpisByModelIds(ids) {
        return resourceUIService.modelLoader().then(function (rootModelsDic) {
          ids.forEach(function (d) {
            kpisMap[d] = rootModelsDic[d] && rootModelsDic[d]["kpiDic"];
          });
          return success(kpisMap);
        });
      }

      function getKpisByModelId(id) {
        return resourceUIService.modelLoader().then(function (rootModelsDic) {
          kpisMap[id] = rootModelsDic[id] && rootModelsDic[id]["kpiDic"];
          return success(kpisMap);
        });
      }

      self.render = function (inputJson) {
        if (!inputJson && !viewId) {
          return emptyEvent();
        }

        (inputJson ? renderJSON(inputJson) : getViewById(viewId).then(function (json) {
          return renderJSON(json);
        })).then(function (json) {
          return getRapppid().then(function (joint) {
            var graph = new joint.dia.Graph(),
                config = makeConfig(json),
                paper = new joint.dia.Paper(config),
                paperScroller = new joint.ui.PaperScroller({
              el: wrap,
              paper: paper,
              autoResizePaper: false,
              padding: 0
            }),
                PatternLinkView = {
              //渲染的模板
              patternMarkup: ['<pattern id="pattern-<%= id %>" patternUnits="userSpaceOnUse">', '<image xlink:href=""/>', "</pattern>"].join(""),
              initialize: function initialize() {
                joint.dia.LinkView.prototype.initialize.apply(this, arguments);

                _.bindAll(this, "fillWithPattern");
              },
              render: function render() {
                // 调用父节点的render方法
                joint.dia.LinkView.prototype.render.apply(this, arguments); // 建立监听

                this.listenTo(this.model, "change:pattern change:patternColor", this.update);
                return this;
              },
              remove: function remove() {
                // 确保我们停止了正在进行的模式更新。
                joint.util.cancelFrame(this.frameId);
                joint.dia.LinkView.prototype.remove.apply(this, arguments);
                this.clearPattern();
              },
              clearPattern: function clearPattern() {
                if (this.pattern) {
                  // 从DOM中删除模式。
                  this.pattern.remove();
                  this.pattern = null;
                }
              },
              update: function update() {
                joint.dia.LinkView.prototype.update.apply(this, arguments);

                if (this.model && !this.model.get("pattern")) {
                  return this;
                }

                this.clearPattern(); // 确保pattern不存在

                if (!this.pattern) {
                  // 创建模式和图像元素。
                  this.pattern = joint.V(_.template(this.patternMarkup)({
                    id: this.id
                  })); // 缓存图像元素以便更快地访问。

                  this.patternImage = this.pattern.findOne("image"); // 将模式附加到pager的defs中。

                  joint.V(this.paper.svg).defs().append(this.pattern); // 通知 '.connection' 路径使用pattern渲染

                  var connection = joint.V(this.el).findOne(".connection").attr({
                    stroke: "url(#pattern-" + this.id + ")"
                  }); // 缓存原来的stroke-width

                  this.strokeWidth = connection.attr("stroke-width") || 1;
                } // 确保我们停止了正在进行的模式更新。


                joint.util.cancelFrame(this.frameId);
                this.frameId = joint.util.nextFrame(this.fillWithPattern);
                return this;
              },
              fillWithPattern: function fillWithPattern() {
                var strokeWidth = this.strokeWidth;
                var bbox = joint.g.rect(joint.V(this.el).bbox(true)).moveAndExpand({
                  x: -strokeWidth,
                  y: -strokeWidth,
                  width: 2 * strokeWidth,
                  height: 2 * strokeWidth
                });
                var points = [].concat(this.sourcePoint, this.route, this.targetPoint);
                points = _.map(points, function (point) {
                  return joint.g.point(point.x - bbox.x, point.y - bbox.y);
                });
                var canvas = document.createElement("canvas");
                canvas.width = bbox.width;
                canvas.height = bbox.height;
                var ctx = canvas.getContext("2d");
                ctx.lineWidth = strokeWidth;
                ctx.lineJoin = "round"; //lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。bevel/round/miter。

                ctx.lineCap = "round"; //lineCap 属性设置或返回线条末端线帽的样式。butt/round/square

                for (var i = 0, pointsCount = points.length - 1; i < pointsCount; i++) {
                  ctx.save();
                  var gradientPoints = this.gradientPoints(points[i], points[i + 1], strokeWidth);
                  var gradient = ctx.createLinearGradient.apply(ctx, gradientPoints);
                  this.drawPattern.call(this, ctx, points[i], points[i + 1], strokeWidth, gradient);
                  ctx.restore();
                } // generate data URI from the canvas


                var dataUri = canvas.toDataURL("image/png"); // update the pattern image and the dimensions

                this.pattern.attr(bbox);
                this.patternImage.attr({
                  width: bbox.width,
                  height: bbox.height,
                  "xlink:href": dataUri
                });
              },
              // finds a gradient with perpendicular direction to a link segment
              gradientPoints: function gradientPoints(from, to, width) {
                var angle = joint.g.toRad(from.theta(to) - 90);
                var center = joint.g.line(from, to).midpoint();
                var start = joint.g.point.fromPolar(width / 2, angle, center);
                var end = joint.g.point.fromPolar(width / 2, Math.PI + angle, center);
                return [start.x, start.y, end.x, end.y];
              },
              // A drawing function executed for all links segments.
              drawPattern: function drawPattern(ctx, from, to, width, gradient) {
                var innerWidth = width - 4;
                var outerWidth = width;
                var buttFrom = joint.g.point(from).move(to, -outerWidth / 2);
                var buttTo = joint.g.point(to).move(from, -outerWidth / 2);
                var lineColor = "blue";

                if (this.model.get("attrs") && this.model.get("attrs")[".connection"]) {
                  lineColor = this.model.get("attrs")[".connection"]["stroke"] ? this.model.get("attrs")[".connection"]["stroke"] : lineColor;
                }

                var patternColor = "#ffffff";

                if (this.model.get("patternColor")) {
                  patternColor = this.model.get("patternColor");
                }

                gradient.addColorStop(0.0, lineColor);
                gradient.addColorStop(0.5, patternColor);
                gradient.addColorStop(1.0, lineColor);
                ctx.beginPath();
                ctx.lineWidth = innerWidth;
                ctx.strokeStyle = gradient;
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.stroke();
                ctx.closePath();
              }
            };

            function setLevel(cell, value) {
              var range = cell.attributes.range;

              if (range) {
                range = eval(range);
              }

              var persent = (value - range[0]) / (range[1] - range[0]);
              cell.prop("attrs/text/text", "");
              cell.transition("attrs/rect", {
                transform: "translate(0,0)",
                height: 60 * persent
              }, {
                delay: 0,
                duration: 1000,
                valueFunction: function valueFunction(start, end) {
                  return function (time) {
                    var height = start["height"] + (end["height"] - start["height"]) * time;
                    var all = 0;
                    return {
                      transform: "translate(0," + (60 - height) + ")",
                      height: height
                    };
                  };
                }
              });
            }

            function setOpenAngle(cell, value, element) {
              var range = cell.attributes.range;
              var id = cell.id;
              openAngles[id].setValue(value);
            }

            function pathAnimate(cell, value, type, kpiRange) {
              if (!kpiRange) kpiRange = [0, 1];
              var p = (value - kpiRange[0]) / (kpiRange[1] - kpiRange[0]);
              if (p < 0) p = -p;
              if (p > 1) p = 1;

              if (!cell.linkDomBox) {
                var pathlink = linksDic["source:" + cell.id]; //渲染的link

                if (!pathlink) pathlink = linksDic["target:" + cell.id];
                if (!pathlink) return;
                cell.linkDom = jQuery("[model-id=" + pathlink.id + "]")[0]; //定义的link

                cell.linkDomBox = cell.linkDom.getBoundingClientRect();
              }

              var movetox = -1;
              var movetoy = -1;

              if (type == "number:1") {
                //X轴正方向
                if (cell.offsetx == undefined) {
                  cell.offsetx = cell.get("position").x;
                }

                movetox = cell.offsetx + cell.linkDomBox.width * p / scale;
              } else if (type == "number:2") {
                //x轴负方向
                if (cell.offsetx == undefined) {
                  cell.offsetx = cell.get("position").x;
                }

                movetox = cell.offsetx - cell.linkDomBox.width * p / scale;
              } else if (type == "number:3") {
                //y轴正方向
                if (cell.offsety == undefined) {
                  cell.offsety = cell.get("position").y;
                }

                movetoy = cell.offsety + cell.linkDomBox.height * p / scale;
              } else if (type == "number:4") {
                //y轴负方向
                if (cell.offsety == undefined) {
                  cell.offsety = cell.get("position").y;
                }

                movetoy = cell.offsety - cell.linkDomBox.height * p / scale;
              } else if (type == "number:5") {
                var connection = cell.linkDom.firstChild;
                var cellDom = jQuery("[model-id=" + cell.id + "]")[0];
                var attrs = {
                  "xlink:href": "#" + cellDom.firstChild.attributes["id"].value,
                  path: connection.attributes["d"].value,
                  dur: "5s",
                  begin: "1s",
                  rotate: "auto"
                };
                var animateMotion = joint.V("animateMotion", attrs);
                cellDom.firstChild.append(animateMotion.node);
              }

              if (movetox > -1) {
                cell.transition("position/x", movetox, {
                  delay: 100,
                  duration: 1000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      return a + (b - a) * t;
                    };
                  }
                });
              }

              if (movetoy > -1) {
                cell.transition("position/y", movetoy, {
                  delay: 100,
                  duration: 1000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      return a + (b - a) * t;
                    };
                  }
                });
              }
            }

            function fill(cell, color) {
              var type = getType(getAttributes(cell, "type"));
              cell.transition("attrs/" + type + "/fill", color, {
                delay: 300,
                duration: 500,
                valueFunction: joint.util.interpolate.hexColor
              });
            }

            function fillColor(cell, type, color, state, color2) {
              var stateId = cell.get("stateId");

              if (stateId) {
                if (state < 1) state = 0;
                cell.state = state;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];
                var colorAry2 = [color2, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:1" || stateId == "number:3") {
                  if (type && colorAry[state]) {
                    cell.transition("attrs/" + type + "/fill", colorAry[state], {
                      delay: 300,
                      duration: 500,
                      valueFunction: joint.util.interpolate.hexColor
                    });
                  }
                }

                if ((stateId == "number:2" || stateId == "number:3") && colorAry2[state]) {
                  cell.transition("attrs/text/fill", colorAry2[state], {
                    delay: 300,
                    duration: 500,
                    valueFunction: joint.util.interpolate.hexColor
                  });
                }
              }
            }

            function breathFlash(cell, type, color, state, opacityState) {
              var stateId = cell.get("stateId");

              var flash = function flash(el) {
                var defaultOpacity = opacityState ? 1 : el.opacity;
                el.transition("attrs/" + type + "/opacity", defaultOpacity, {
                  delay: 0,
                  duration: 3000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      var o = a + b * (defaultOpacity - Math.abs(defaultOpacity - 2 * defaultOpacity * t));
                      return Number(o.toFixed(2));
                    };
                  }
                });
              };

              if (stateId) {
                if (state < 0) state = 0;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:2") {
                  type = "text";
                }

                if (type) {
                  if (!cell.opacity) {
                    cell.opacity = jQuery.isNumeric(cell.prop("attrs/" + type + "/opacity")) ? cell.prop("attrs/" + type + "/opacity") : 1;
                  }

                  cell.state = state;
                  cell.prop("attrs/" + type + "/opacity", 0.1);
                  cell.prop("attrs/" + type + "/fill", colorAry[state]);

                  if (cell.state > 0) {
                    if (_.contains(cell.getTransitions(), "attrs/" + type + "/opacity")) return;
                    cell.on("transition:end", function (el, path) {
                      if (el.state > 0) {
                        flash(el);
                      } else {
                        el.off("transition:end");
                        el.prop("attrs/" + type + "/opacity", el.opacity);
                      }
                    });
                    flash(cell);
                  } else {
                    cell.prop("attrs/" + type + "/opacity", cell.opacity);
                  }
                }
              }
            }

            function bubbleFlash(cell, type, color, state, opacityState) {
              var stateId = cell.get("stateId");

              var flash = function flash() {
                cell.prop("attrs/" + type + "/r", 0);
                cell.prop("attrs/" + type + "/opacity", opacityState ? 1 : cell.opacity);
                cell.transition("attrs/" + type, {
                  r: cell.r,
                  opacity: 0
                }, {
                  delay: 0,
                  duration: 1500,
                  valueFunction: function valueFunction(start, end) {
                    return function (time) {
                      return {
                        r: start["r"] + (end["r"] - start["r"]) * time,
                        opacity: start["opacity"] - start["opacity"] * time
                      };
                    };
                  }
                });
              };

              if (stateId) {
                if (state < 0) state = 0;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:2") {
                  type = "text";
                }

                if (type) {
                  if (!cell.opacity) {
                    cell.opacity = jQuery.isNumeric(cell.prop("attrs/" + type + "/opacity")) ? cell.prop("attrs/" + type + "/opacity") : 1;
                    cell.r = cell.prop("attrs/" + type + "/r");
                    cell.prop("attrs/" + type + "/opacity", opacityState ? 1 : cell.opacity);
                  }

                  cell.state = state;
                  cell.prop("attrs/" + type + "/fill", colorAry[state]);

                  if (cell.state > 0) {
                    if (_.contains(cell.getTransitions(), "attrs/" + type)) return;
                    cell.on("transition:end", function (el) {
                      if (el.state > 0) {
                        flash();
                      } else {
                        cell.prop("attrs/" + type + "/opacity", cell.opacity);
                        cell.prop("attrs/" + type + "/r", cell.r);
                      }
                    });
                    flash();
                  } else {
                    cell.prop("attrs/" + type + "/opacity", cell.opacity);
                    cell.prop("attrs/" + type + "/r", cell.r);
                  }
                }
              }
            }

            function changeIconAndText(cell, state, type) {
              if (!type) type = "alertConfig";

              if (type == "alertConfig") {
                var alertIcon = cell.get("alertConfig");

                if (alertIcon) {
                  if (state < 1) state = 0;
                  var alertConfig = cell.get(type);
                  alertConfig.forEach(function (item) {
                    if (item.id == state) {
                      cell.prop("attrs/text/text", item.alertText || "");
                      if (item.alertIcon) cell.prop("attrs/image/xlink:href", item.alertIcon);
                    }
                  });
                }
              } else if (type == "valueConfig") {
                var valueConfig = cell.get(type);
                valueConfig.forEach(function (item) {
                  item.stateDisplay = false;

                  if (item.valueText == state) {
                    item.stateDisplay = true;
                    if (item.valueText) cell.prop("attrs/text/text", item.valueText);
                    if (item.valueIcon) cell.prop("attrs/image/xlink:href", item.valueIcon);
                  }
                });
              }
            }

            function makeConfig(json) {
              var width = topo.width(),
                  w = json.width,
                  h = json.height,
                  portion = h / w,
                  height = width * portion;
              /** keep consequence with old version **/

              persentage = w / width;
              /** keep consequence with old version **/

              return {
                width: width,
                height: height,
                model: graph,
                interactive: false,
                scale: width / w,
                perpendicularLinks: true,
                gridSize: 0,
                markAvailable: true,
                linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
                defaultLink: new joint.dia.Link({
                  attrs: {
                    ".marker-source": {
                      d: "M 10 0 L 0 5 L 10 10 z",
                      transform: "scale(0.001)"
                    },
                    ".marker-target": {
                      d: "M 10 0 L 0 5 L 10 10 z"
                    },
                    ".connection": {
                      stroke: "black"
                    }
                  }
                }),
                linkView: joint.dia.LinkView.extend(PatternLinkView)
              };
            }

            function removeSame(a, b) {
              a.indexOf(b) == -1 ? a.push(b) : null;
              return a;
            }

            function makeValueEval(rangeObj) {
              var json = parse(rangeObj);

              if (isArray(json) || _typeof(json) !== "object" || json === null) {
                return function removeSingnal(val) {
                  if (typeof val === "undefined" || val === null) {
                    return;
                  }

                  if (isArray(val)) {
                    val = val.reduce(collapse, []);
                    return val[0];
                  }

                  if (val[0] == "[" && val[val.length - 1] == "]") {
                    val = parse(val);

                    if (isArray(val)) {
                      val = val.reduce(collapse, []);
                      return val[0];
                    } else {
                      return "-";
                    }
                  }

                  return val;
                };
              }

              return function (val) {
                return json[val];
              };
            }

            paperScroller.scroll(0, 0);
            paperScroller.$el.css("padding-left", "0");
            paperScroller.$el.css("padding-top", "0");
            paperScroller.$el.css("overflow", "hidden");
            paper.on("element:pointerup", function (cellView) {
              if (cellView.model instanceof joint.dia.Element) {
                openCellTools(cellView);
              }
            });
            paper.on("cell:pointerup", function (cellView, evt) {
              if (cellView.model instanceof joint.dia.Link) {
                openCellTools(cellView);
              }

              if (cellView.model.attributes.extend == "directive") {
                directive(cellView.model.attributes);
              }

              if (cellView.model.attributes.extend == "tip") {
                tip(cellView.model.attributes);
              }
            });

            if ($$.isString(json.bgimage)) {
              paper.$el.css("background-image", 'url("' + json.bgimage + '")');
              paper.$el.css("background-size", "contain");
              paper.$el.css("background-repeat", "no-repeat");
              paper.$el.css("background-position", "center");
            }

            paper.el.oncontextmenu = function (evt) {
              evt.preventDefault();
            }; //paper.$el.css("background-color", json.bgcolor);


            graph.fromJSON(json);
            svgId = wrap.find("svg")[0];
            topo.find(".viewport").attr("transform", "scale(" + config.scale + ")");

            function hiddenMarkers() {
              $("g.marker-vertices").attr("display", "none");
              $("g.marker-arrowheads").attr("display", "none");
              $("g.link-tools").attr("display", "none");
            }

            hiddenMarkers();
            /** --------------- keep consequence with old version ------------------- **/

            if (events["$renderGraphComplete"]) {
              events["$renderGraphComplete"](graph.getCells());
            }

            self.trigger("$renderGraphComplete", graph.getCells());

            if (events["$loadCiKpiComplete"]) {
              events["$loadCiKpiComplete"](graph.getCells());
            }

            self.trigger("$loadCiKpiComplete", graph.getCells());
            /** --------------- keep consequence with old version ------------------- **/

            graph.getCells().forEach(function (cell) {
              var modelId = cell.get("id");
              var cursorStr = cell.get("cursor");
              var cursor = "";

              if (cursorStr) {
                var cursorAry = cursorStr.split(":");

                if (cursorAry.length > 0 && cursorAry[cursorAry.length - 1] != "?") {
                  cursor = cursorAry[cursorAry.length - 1];
                }
              }

              var $_cell_el = paper.$el.find('g[model-id="' + modelId + '"]');

              if (cursor) {
                $_cell_el.get(0).style = "cursor: " + cursor + "!important";
              }
            });
            self.getDomainAreaLineTree_alertStatus(function (res) {
              res.getChildren(function () {
                return true;
              }).then(function (children) {
                getAllUnits().then(function (u) {
                  units = u;
                  var explainer = {
                    " ": {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attr("kpiId"));
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId")),
                              kpiId = getNumber(cell.attr("kpiId"));
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {}
                    },
                    value: {
                      before: function before(cell) {
                        var ins = cell.attributes.attrs.text.text;
                        cell.prop("_instance", ins);
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attributes.kpiId);
                      },
                      getInstance: function getInstance(cell) {
                        return cell.attributes.attrs.text.text;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes.nodeId),
                              kpiId = getNumber(cell.attributes.kpiId),
                              instance = cell.prop("_instance");
                          return nodeId == value.nodeId && kpiId == value.kpiCode && instance == value.instance;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var val = valuelist[0];
                        changeIconAndText(cell, val ? val.value : 0, "valueConfig");
                      }
                    },
                    alarm: {
                      before: function before(cell) {
                        cell.prop("attrs/text/text", " ");
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return undefined;
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId")),
                              kpiId = getNumber(cell.attr("kpiId"));
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        }),
                            val = valuelist.find(function (value) {
                          return value.nodeId == nodeId && value.kpiCode == 999999;
                        }) || {},
                            state = val.value || 0;
                        changeIconAndText(cell, state);
                      }
                    },
                    instance: {
                      before: function before(cell) {
                        cell.prop("attrs/text/text", " ");
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attributes.kpiId);
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes["nodeId"]),
                              kpiId = getNumber(cell.attributes["kpiId"]);
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            dataItemId = getNumber(cell.attributes.kpiId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        }),
                            val = valuelist.find(function (value) {
                          return value.nodeId == nodeId && value.kpiCode == dataItemId;
                        }) || {}; //cell.prop( "attrs/text/text", "-" );

                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId],
                                kpiData = kpisMap[resource.modelId][dataItemId] || {},
                                range = makeValueEval(kpiData.range),
                                unit = getUnit(units[kpiData.unit]);
                            cell.prop("attrs/text/fill", "white");
                            cell.prop("attrs/text/visibility", "visible");
                            cell.prop("attrs/text/text", formatVal(range(val.value)) + unit);
                          });
                        });
                      }
                    },
                    alert: {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attr("nodeId"));
                      },
                      getKpiId: function getKpiId(cell) {
                        return;
                      },
                      getInstance: function getInstance(cell) {
                        return;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId"));
                          return nodeId == value.nodeId && kpiId == 999999;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        });

                        function run(ins) {
                          ins.setPos(cell.attributes.position);
                          ins.setAlarmStatus(node.state);
                          ins.on("textClick", function (event) {});
                          ins.on("click", function (event) {
                            self.refresh({
                              id: node.id
                            });
                          });
                        }

                        if (cell.$ins == null) {
                          self.createAlarm(node.label, function (ins) {
                            cell.$ins = ins;
                            run(cell.$ins);
                          });
                        } else {
                          run(cell.$ins);
                        }
                      }
                    },
                    baowualarm: {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes["nodeId"]);
                      },
                      getKpiId: function getKpiId(cell) {
                        return;
                      },
                      getInstance: function getInstance(cell) {
                        return;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes.nodeId);
                          return nodeId == value.nodeId && value.kpiCode == 999999;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            value = valuelist.find(function (v) {
                          return v.nodeId == nodeId;
                        });

                        if (typeof value === "undefined") {
                          return;
                        }

                        breathFlash(cell, "rect", "#ff0000", value.value, false);
                      }
                    },
                    dataItem: {
                      getNodeId: function getNodeId(cell) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            nodeId = getNumber(cell.attributes.nodeId);
                        return currentdevice ? res.id : nodeId;
                      },
                      getKpiId: function getKpiId(cell) {
                        return cell.attributes.dataItem;
                      },
                      getInstance: function getInstance(cell) {
                        return getString(cell.attributes.sensor);
                      },
                      filter: function filter(cell) {
                        var dataItem = cell.attributes.dataItem,
                            sensor = cell.attributes.sensor;
                        return function (value) {
                          var kpiCode = value.kpiCode,
                              instance = value.instance;

                          if (kpiCode == 999997) {
                            instance = instance.split("_");
                            kpiCode = instance[0];
                            instance = instance[1];
                          }

                          return sensor == instance && dataItem.indexOf(kpiCode - 0) != -1;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            dataItem = cell.attributes.dataItem,
                            nodeId = currentdevice ? res.id : getNumber(cell.attributes.nodeId),
                            sensor = getString(cell.attributes.sensor);
                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId];
                            return success(getMeasurePointData(parse(resource.values.MeasurePointLocate))).then(function (sensors) {
                              var sen = sensors.find(function (s) {
                                return s.name === sensor;
                              }),
                                  kpis = allaccessConfigs.filter(function (d) {
                                return d.instance == sensor && currentModelKpiMap[d.dataItemId] && !currentModelKpiMap[d.dataItemId]["needTransform"];
                              }).map(function (kpi) {
                                var obj = valuelist.find(function (val) {
                                  return val.kpiCode == kpi.dataItemId;
                                });
                                obj ? kpi.arisingTime = obj.arisingTime : null;
                                return kpi;
                              }),
                                  kpiFilter = kpis.filter(function (kpi) {
                                return dataItem.indexOf(kpi.dataItemId) != -1;
                              }),
                                  dt;
                              kpis.sort(function (a, b) {
                                return currentModelKpiMap[a.dataItemId].serial - currentModelKpiMap[b.dataItemId].serial;
                              });

                              if (!sen) {
                                return;
                              }

                              if (kpiFilter.length > 0) {
                                cell.$attrDisp = cell.$attrDisp || self.createAttrDisp(kpiFilter[0].kpiName, kpiFilter.map(mapDataItem(nodeId)), self.getPersentageSite(cell.attributes.position)), function () {};
                                dt = remapAttrDist(cell.$attrDisp.getData());
                                valuelist.forEach(function (v) {
                                  var dataItemId = v.kpiCode,
                                      instance = v.instance;

                                  if (dataItemId === 999997) {
                                    instance = instance.split("_");
                                    dataItemId = instance[0];
                                    instance = instance[1];
                                  }

                                  var rs = dt[instance + "/" + dataItemId],
                                      kpiData = kpisMap[resource.modelId][dataItemId],
                                      range = makeValueEval(kpiData.range),
                                      unit = getUnit(units[kpiData.unit]);

                                  if (v.kpiCode == 999997) {
                                    rs.updateStatus(v.value);
                                  } else {
                                    rs ? rs.updateValue(formatVal(range(v.value)) + unit) : null;
                                    rs ? rs.updateTime(v.arisingTime) : null;
                                  }
                                });
                              }
                            });
                          });
                        });
                      }
                    },
                    kpis: {
                      getNodeId: function getNodeId(cell) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            nodeId = getNumber(cell.attributes.nodeId);
                        return currentdevice ? res.id : nodeId;
                      },
                      getKpiId: function getKpiId(cell) {
                        return cell.attributes.dataItem;
                      },
                      getInstance: function getInstance(cell) {
                        return getString(cell.attributes.sensor);
                      },
                      filter: function filter(cell) {
                        var dataItem = cell.attributes.dataItem,
                            sensor = getString(cell.attributes.sensor);
                        return function (value) {
                          var kpiCode = value.kpiCode,
                              instance = value.instance;

                          if (kpiCode == 999997) {
                            instance = instance.split("_");
                            kpiCode = instance[0];
                            instance = instance[1];
                          }

                          return sensor == instance && dataItem.indexOf(kpiCode - 0) != -1;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            dataItem = cell.attributes.dataItem,
                            dataItems,
                            valuelistMap = valuelist.reduce(function (a, b) {
                          a[b.kpiCode] = b;
                          return a;
                        }, {}),
                            nodeId = currentdevice ? res.id : getNumber(cell.attributes.nodeId),
                            sensor = getString(cell.attributes.sensor);

                        if (valuelist && valuelist.length > 0) {}

                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId];
                            return success(getMeasurePointData(parse(resource.values.MeasurePointLocate))).then(function (sensors) {
                              var sen = sensors.find(function (s) {
                                return s.name === sensor;
                              }),
                                  kpis = allaccessConfigs.filter(function (d) {
                                return d.instance == sensor && currentModelKpiMap[d.dataItemId] && !currentModelKpiMap[d.dataItemId]["needTransform"];
                              }),
                                  dt;
                              kpis.sort(function (a, b) {
                                return currentModelKpiMap[a.dataItemId].serial - currentModelKpiMap[b.dataItemId].serial;
                              });

                              if (!sen) {
                                return;
                              }

                              dataItems = kpis.filter(function (kpi) {
                                valuelistMap[kpi.dataItemId] ? kpi.arisingTime = valuelistMap[kpi.dataItemId].arisingTime : null;
                                return dataItem.indexOf(kpi.dataItemId) != -1;
                              }).map(mapKpi); //

                              cell.$attrDisp = cell.$attrDisp || self.createAttrDisp(sen.label, dataItems.map(function (d) {
                                d.nodeId = nodeId;
                                return d;
                              }), self.getPersentageSite(cell.attributes.position), undefined, undefined, cell.get("absheight"));
                              dt = remapAttrDist(cell.$attrDisp.getData());
                              valuelist.forEach(function (v) {
                                if (nodeId != v.nodeId) {
                                  return;
                                }

                                var dataItemId = v.kpiCode,
                                    instance = v.instance;

                                if (dataItemId == 999997) {
                                  instance = instance.split("_");
                                  dataItemId = instance[0];
                                  instance = instance[1];
                                }

                                var rs = dt[instance + "/" + dataItemId],
                                    kpiData = kpisMap[resource.modelId][dataItemId] || {},
                                    range = makeValueEval(kpiData.range),
                                    unit = getUnit(units[kpiData.unit]);

                                if (typeof range(v.value) === "undefined") {}

                                if (typeof (formatVal(range(v.value)) + unit) == "undefined") {}

                                if (v.kpiCode == 999997) {
                                  rs.updateStatus(v.value);
                                } else {
                                  rs ? rs.updateValue(formatVal(range(v.value)) + unit) : null;
                                  rs ? rs.updateTime(v.arisingTime) : null;
                                }
                              });
                            });
                          });
                        });
                      }
                    }
                  };

                  function toFix(n) {
                    var num = n - 0;

                    if (num !== num) {
                      return n;
                    }

                    return num.toFixed(2);
                  }

                  function formatVal(val) {
                    if (typeof val == "undefined" || val === null) {
                      return "-";
                    }

                    if (_typeof(val) === "object") {
                      return toFix(val[0]);
                    }

                    return toFix(val);
                  }

                  function remapAttrDist(arr) {
                    var obj = {};

                    for (var i = 0; i < arr.length; i++) {
                      obj[arr[i].instance + "/" + arr[i].id] = arr[i];
                      obj[arr[i].instance + "/999998"] = arr[i];
                      obj[arr[i].instance + "/999997"] = arr[i];
                    }

                    return obj;
                  }

                  function isNotUndefined(d) {
                    return typeof d !== "undefined";
                  }

                  function attribute(cell, attr, val) {
                    var attrs = attr.split("/").filter(isNotUndefined),
                        item;

                    if (typeof val === "undefined") {
                      rs = cell;

                      while ((item = attrs.shift()) && rs) {
                        rs = rs[item];
                      }

                      return rs;
                    }

                    var last = attrs.pop(),
                        rs = cell;

                    while ((item = attrs.shift()) && rs) {
                      rs = rs[item];
                    }

                    if (_typeof(rs) === "object") {
                      rs[last] = val;
                    }
                  }

                  function getNodeId(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getNodeId"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function getKpiId(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getKpiId"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function getInstance(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getInstance"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function eachProp(obj, callback) {
                    for (var i in obj) {
                      callback(obj[i], i, obj);
                    }
                  }

                  return success(graph).then(function (graph) {
                    completeEvent && completeEvent({
                      target: self,
                      self: self,
                      global: global,
                      tools: elemData
                    });
                    var cells = graph.getCells(),
                        nodeIds = cells.map(function (cell) {
                      return getNodeId(cell);
                    }).filter(noEmpty).reduce(removeSame, []),
                        kpiIds = cells.map(function (cell) {
                      return getKpiId(cell);
                    }).filter(noEmpty).concat([999997, 999998, 999999]).reduce(collapse, []).reduce(removeSame, []),
                        instances = cells.map(function (cell) {
                      return getInstance(cell);
                    }).filter(noEmpty).reduce(removeSame, []);

                    function startSocket(callback) {
                      var paramSocket = {
                        ciid: nodeIds.toString(),
                        kpi: kpiIds.toString()
                      },
                          operation = "register";
                      uuid = Math.uuid();

                      function toArr(obj) {
                        var rs = [];

                        for (var i in obj) {
                          for (var j in obj[i]) {
                            for (var k in obj[i][j]) {
                              rs.push(obj[i][j][k]);
                            }
                          }
                        }

                        return rs;
                      }

                      function throttle(fn, time) {
                        var timer,
                            obj = {};
                        return function (event) {
                          var _this5 = this;

                          var nodeId = event.data.nodeId,
                              kpiCode = event.data.nodeId,
                              instance = event.data.instance || "_";

                          if (timer == null) {
                            timer = setTimeout(function () {
                              fn.call(_this5, toArr(obj));
                              timer = null;
                              obj = {};
                            }, time);
                          } else {
                            obj[nodeId] = obj[nodeId] || {};
                            obj[nodeId][kpiCode] = obj[nodeId][kpiCode] || {};
                            obj[nodeId][kpiCode][instance] = event.data;
                          }
                        };
                      }

                      ws.send(nodeIds, kpiIds);
                      ws.on(throttle(function (events) {
                        var dis = $(topo[0].parentNode).css("display");

                        if (dis != "none") {
                          callback(events);
                        }
                      }, 3000));
                    }

                    function inputValue(condition) {
                      return function (valueList) {
                        cells.forEach(function (cell) {
                          var ext = cell.attributes.extend,
                              config = explainer[ext || " "];

                          if (typeof config == "undefined") {
                            return;
                          }

                          var fitered = config.filter,
                              handler = config["handler"],
                              data = valueList.filter(fitered(cell));

                          if (condition(data)) {
                            handler(cell, data);
                          }
                        });
                      };
                    }

                    cells.forEach(function (cell) {
                      var ext = cell.attributes.extend,
                          config = explainer[ext || " "];

                      if (typeof config == "undefined") {
                        return;
                      }

                      config.before ? config.before(cell) : null;
                    });

                    function getData() {
                      timer = null;

                      timerCallback = function timerCallback(valuelist) {
                        inputValue(function (data) {
                          return true;
                        })(valuelist);
                        timer = setTimeout(getData, 6000);
                        /* startSocket(function(valuelist) {
                            inputValue(function(data) {
                              return data.length > 0;
                            })(valuelist);
                          }); */
                      };

                      if (nodeIds && nodeIds.length > 0 && kpiIds && kpiIds.length > 0) {
                        getKpiValueList(nodeIds, kpiIds, instances, false).then(function (d) {
                          /* let last = d[d.length - 1];
                          last.instance = last.kpiCode + "_" + last.instance;
                          last.kpiCode = 999997;
                          last.value = 4; */
                          timerCallback && timerCallback(d);
                        });
                      } else {
                        inputValue(function (data) {
                          return true;
                        })([]);
                      }
                    }

                    getResourceByIds(nodeIds).then(function (resources) {
                      var rs = {},
                          modelIds = resources.reduce(function (a, b) {
                        if (a.indexOf(b.modelId) == -1) {
                          a.push(b.modelId);
                        }

                        return a;
                      }, []);
                      return getKpisByModelIds(modelIds);
                    }).then(function (d) {
                      extend(kpisMap, d);
                      getData();
                    });
                  });
                });
              });
            });
          });
        });
      };

      if (typeof initEvent == "function") {
        try {
          initEvent({
            target: self,
            self: self,
            global: global,
            tools: elemData
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        self.render();
      }
    });
    topo.css(style);
    topo.css("position", "relative");
    topo.append(wrap);
    self.on("$destroy", function () {
      clearTimeout(timer);
      timer = undefined;
      timerCallback = undefined;
      SwSocket.unregister(uuid);
    });
    return topo;
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo2.service?angular=service&type=script":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-topo2.service?angular=service&type=script ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** mainCtrlRm" **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, $state, psTreeData, ajax, resourceUIService, kpiDataService, psWebsocket, SwSocket, unitService, cms2) {
  return function (data) {
    var elemData = data,
        uuid,
        timer,
        timerCallback,
        ws = psWebsocket("ps_topo"),

    /** keep consequence with old version **/
    persentage = 0,

    /** keep consequence with old version **/
    events = {},
        kpisMap = {},
        units = {},
        resourceMap = {},
        scope = elemData.scope,
        timeout = elemData.timeout,
        topo = $("<div></div>"),
        wrap = $("<div></div>"),
        svgId,
        isArray = isType("Array"),
        previewMode = elemData.previewMode,
        element = elemData.element,
        self = elemData.element,
        viewId = self.viewId,
        global = elemData.global,
        style = element.style || {},
        linkAnHandler = function linkAnHandler(cell) {
      var dr = cell.get("attrs")[".connection"]["stroke-dasharray"],
          linkAn = cell.get("linkAn"),
          cellDom = jQuery("[model-id=" + cell.id + "]").find(".connection")[0],
          oldClass = cellDom.getAttribute("class");
      oldClass = oldClass.replace(" runslow", "");
      oldClass = oldClass.replace(" runnormal", "");
      oldClass = oldClass.replace(" runfast", "");

      if (dr && dr != "0") {
        if (linkAn == "慢速") {
          oldClass = oldClass + " runslow";
        } else if (linkAn == "普通") {
          oldClass = oldClass + " runnormal";
        } else if (linkAn == "快速") {
          oldClass = oldClass + " runfast";
        }
      }

      cellDom.setAttribute("class", oldClass);
    };

    function isType(type) {
      return function (target) {
        return {}.toString.call(target) === "[object " + type + "]";
      };
    }

    function collapse(a, b) {
      var item,
          queue = isArray(b) ? b.slice() : [b];

      while (item = queue.shift()) {
        if (isArray(item)) {
          [].push.apply(queue, item);
        } else {
          a.push(item);
        }
      }

      return a;
    }

    function extend() {
      var args = [].slice.call(arguments),
          first = args.shift();
      args.forEach(function (d) {
        for (var i in d) {
          first[i] = d[i];
        }
      });
      return first;
    }

    function random(length) {
      length = length || 16;
      var chars = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
          rs = "",
          rnd,
          len = chars.length;

      for (var i = 0; i < length; i++) {
        rnd = parseInt(Math.random() * len);
        rs += chars[rnd];
      }

      return rs;
    }

    function directive(cell) {
      var context = {};
      var position = cell.position,
          div;
      var directiveIds = cell.directiveIds.map(function (e) {
        return typeof e == "number" && e || parseInt(e.split("number:")[1]);
      });
      var modelId = cell.modelId && cell.modelId.split("number:")[1];
      var nodeId = cell.modelId && cell.nodeId.split("number:")[1];

      if (modelId) {
        var getDirectivesByModelId = function getDirectivesByModelId() {
          return new Promise(function (resolve) {
            resourceUIService.getDirectivesByModelId(modelId, function (d) {
              resolve(d.data);
            });
          });
        };

        var getKpisByModelId = function getKpisByModelId() {
          return new Promise(function (resolve) {
            resourceUIService.getKpisByModelId(modelId, function (d) {
              resolve(d.data);
            });
          });
        };

        Promise.all([getDirectivesByModelId(), getKpisByModelId()]).then(function (ret) {
          var directives = ret[0];
          var kpis = ret[1];
          directives = directives.filter(function (d) {
            return directiveIds.indexOf(d.id) != -1;
          });
          directives.forEach(function (directive) {
            kpis.forEach(function (kpi) {
              if (kpi.id == directive.kpiDefinitionIds[0]) {
                directive.kpiLabel = kpi.name;
              }
            });
            var wrap = $("<div></div>");
            var label = $("<label></label>");
            var input = $("<input />");
            var btn = $("<button></button>");
            var timesInput = $("<input />");
            var timesLabel = $("<label></label>");
            label.css("margin", "5px");
            input.css("margin", "5px");
            timesInput.css("margin", "5px");
            timesInput.css("width", "30px");
            timesInput.val(1);
            btn.text("发送");
            timesLabel.text("次");
            label.text(directive.name);
            wrap.append(label);
            wrap.append(input);
            wrap.append(btn);
            wrap.append(timesInput);
            wrap.append(timesLabel);
            div.append(wrap);
            btn.on("click", function (e) {
              var times = timesInput.val();
              times = Number(times);
              var params = {};
              params[directive.kpiLabel] = input.val();
              close();

              for (var j = 0; j < times; j++) {
                element.sendDirective(parseInt(nodeId), directive.id, params, function (e) {});
              }
            });
          });
        });
      }

      var p = persentage || 1;
      div = $("<div></div>");
      div.css("position", "absolute");
      div.css("top", cell.position.y / p + "px");
      div.css("left", (cell.position.x < 300 ? 100 + cell.position.x : cell.position.x - 280) / p + "px");
      div.css("border", "1px solid #ddd");
      div.css("z-index", 199);
      div.css("padding", "10px");
      div.css("background-color", "#eee");
      setTimeout(function () {
        div.on("click", function (e) {
          e.stopPropagation();
        });
        $("body").on("click.directive", close);
      });
      topo.append(div);

      function close(e) {
        div.children().remove();
        div.remove();
        $("body").off("click.directive");
      }

      return context;
    }

    function tip(cell) {
      var context = {};
      var position = cell.position,
          div;
      var kpiId = cell.kpiId && cell.kpiId.split("number:")[1];
      var nodeId = cell.nodeId && cell.nodeId.split("number:")[1];
      var modelId = cell.modelId && cell.modelId.split("number:")[1];

      if (kpiId && nodeId) {
        kpiDataService.getRealTimeKpiData([nodeId * 1], [kpiId * 1], function (ret) {
          if (ret.code == 0 && ret.data.length) {
            var wrap = $("<div></div>");
            var label = $("<label></label>");
            label.css("margin", "5px");
            label.css("color", "#fff");
            label.css("font-size", "18px");
            var unitLabel = scope.$root.rootModelsDic[modelId][kpiId].unitLabel || "";
            label.text(ret.data[0].value + unitLabel);
            wrap.append(label);
            div.append(wrap);
            var p = persentage || 1;
            div = $("<div></div>");
            div.css("position", "absolute");
            div.css("left", cell.position.x / p + "px");
            div.css("top", (cell.size.height + cell.position.y) / p + "px");
            div.css("border", "1px solid #fff");
            div.css("z-index", 199);
            div.css("padding", "5px");
            div.css("border-radius", "5px");
            div.css("background-color", "rgba(0,0,0,0.5");
            setTimeout(function () {
              div.on("click", function (e) {
                e.stopPropagation();
              });
              $("body").on("click.tip", close);
            });
            topo.append(div);
          }
        });
      }

      function close(e) {
        div.children().remove();
        div.remove();
        $("body").off("click.tip");
      }

      return context;
    }

    function promise(fn) {
      var defer = q.defer();
      fn(defer.resolve, defer.reject);
      return defer.promise;
    }

    function success(d) {
      var defer = q.defer();
      defer.resolve(d);
      return defer.promise;
    }

    function getExpression() {
      return promise(function (res, rej) {
        var exp = element.$attr("advance/expression");

        if (_typeof(exp) == "object") {
          res(exp);
          return;
        }

        $$.runExpression(exp, function (funRes) {
          if (funRes.code == "0") {
            var fnResult = funRes.data;
            res(fnResult);
          } else {
            rej(funRes.message);
          }
        });
      });
    }

    function renderJSON(json) {
      return promise(function (res, rej) {
        self.hooks.call("viewloaded", json.cells, function (d) {
          res(json);
        });
      });
    }

    function parse(str) {
      var a;

      try {
        a = JSON.parse(str);
      } catch (e) {
        return;
      }

      return a;
    }

    function getViewById(viewId) {
      return promise(function (res, rej) {
        self.getViewById(viewId, function (view) {
          if (view == null) {
            return res();
          }

          res(parse(view.content));
        });
      });
    }

    function getRapppid() {
      return promise(function (res, rej) {
        $$.loadExternalJs(["rappid-joint", "lodash", "backbone"], function (joint) {
          res(joint);
        });
      });
    }

    function noEmpty(d) {
      return d;
    }

    function getKpiValueList(ci, kpi, instancs, mock) {
      var params = ["kpi", {
        category: "ci",
        isRealTimeData: true,
        timePeriod: 0,
        nodeIds: ci,
        kpiCodes: kpi,
        startTime: null,
        endTime: null,
        timeRange: "",
        statisticType: "psiot",
        condList: [],
        includeInstance: true //queryInstances: instancs.join(",")

      }];
      return mock === true ? ajax.$mock().post("kpiDataFlexService.getKpiValueList", params) : ajax.post("kpiDataFlexService.getKpiValueList", params);
    }

    function getNumber(str) {
      var match = /(?:.*\:)*([^\:]*)/.exec(str);

      if (typeof str == "string" || typeof str == "number") {
        return match ? match[1] - 0 : str;
      }
    }

    function getString(str) {
      var match = /(?:.*\:)*([^\:]*)/.exec(str);

      if (typeof str == "string" || typeof str == "number") {
        return match ? match[1] : str;
      }
    }

    function getFill(obj) {
      var rs = {};

      for (var i in obj) {
        rs = obj[i];
        break;
      }

      return rs.fill;
    }

    function getType(type) {
      if (type == "basic.Rect") {
        return "rect";
      } else if (type == "basic.Circle") {
        return "circle";
      }
    }

    function removeSpace(str) {
      var match = /^\s*([^\s]+)\s*$/g.exec(str);
      return match ? match[1] : "";
    }

    function equalStr(target, st) {
      return new RegExp("^\\s*" + st + "\\s*$").test(target);
    }

    function getUnit(unit) {
      if (equalStr(unit, "NA") || equalStr(unit, "wave")) {
        return "";
      }

      if (typeof unit !== "string") {
        return "";
      }

      return " " + removeSpace(unit);
    }

    function getTextFill(obj) {
      return obj["text"] && obj["text"]["fill"];
    }

    self.$on = function (eventName, callback) {
      events[eventName] = callback;
    };

    self.setResources = function (resources) {
      self.hooks.tap("viewloaded", function (cells, next) {
        cells.forEach(function (cell) {
          var modelId = cell.modelId;
          modelId = typeof modelId === "string" ? /^number\:(\d+)$/g.exec(modelId) : null;
          modelId = modelId ? modelId[1] : null;

          if (modelId) {
            cell.nodeId = "number:" + resources.id;
          }
        });
        next();
      });
    };

    self.hooks = self.Synchook();

    self.createDeviceDropList = function (data, pos, config) {
      var p = persentage || 1;
      var hitArea = $("<div></div>");
      var titleArea = $("<div></div>");
      var popup = $("<div></div>");
      var config = config || {};
      var clickFn = config.$attr("click");
      var titleClickFn = config.$attr("titleClick");
      $("#devicelistscroll").remove();
      hitArea.attr("id", "devicelistscroll");
      titleArea.css("width", "100%");
      titleArea.css("height", "50px");
      hitArea.css("position", "absolute");
      hitArea.css("z-index", 199);
      popup.css("padding", "2px");
      popup.css("background-color", "#1e415d");
      popup.css("border", "1px solid #000");
      popup.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.5)");
      popup.css("max-height", "150px");
      popup.css("overflow-x", "hidden");
      popup.css("overflow-y", "auto");
      hitArea.css("cursor", "pointer");
      hitArea.css("top", pos.y / p - (config.y || 30) + "px");
      hitArea.css("left", pos.x / p - (config.x || 50) + "px");
      hitArea.css("background-color", "rgba(0,0,0,0)");
      hitArea.on("mouseleave", function (event) {
        $("#devicelistscroll").remove();
      });
      titleArea.on("click", function (event) {
        titleClickFn();
      });

      var createDom = function createDom(item) {
        var wrap = $("<div></div>"),
            label = $("<span></span>"),
            status = $("<div></div>");
        wrap.attr("id", "wrap");
        status.css("margin-right", "5px");
        status.css("width", "10px");
        status.css("height", "10px");
        status.css("border-radius", "50%");
        status.css("background-color", self.getAlertColor(item.status));
        status.css("display", "inline-block");
        wrap.css("padding", "5px 15px");
        label.text(item.label);
        label.css("padding-right", "10px");
        wrap.append(status);
        wrap.append(label);
        wrap.on("mouseenter", function (event) {
          hitArea.find("#wrap").css("background-color", "rgba(0,0,0,0)");
          wrap.css("background-color", "rgba(0,0,0,.3)");
        });
        wrap.on("mouseleave", function (event) {
          wrap.css("background-color", "rgba(0,0,0,0)");
        });
        wrap.on("click", function (event) {
          clickFn(item);
        });
        /**
           item.$on("statusChanged", function (node) {
          status.css("background-color", self.getAlertColor(item.status));
        });**/

        return wrap;
      };

      for (var i in data) {
        popup.append(createDom(data[i]));
      }

      hitArea.append(titleArea);
      hitArea.append(popup);
      topo.prepend(hitArea);
    }; //150 - 235


    self.createAttrDisp = function (t, data, pos, callback, planeMode, height) {
      var popup, body, title, wrap;
      var orderKey = ["速度有效值", "冲击平均值", "震动", "冲击", "速度", "温度", "电压", "电流"];
      height = height || 50;

      function findIndex(arr, callback) {
        var i, find;

        for (i = 0; i < arr.length; i++) {
          find = callback(arr[i], i);

          if (find) {
            return i;
          }
        }
      }

      function AttrDisp() {
        popup = $("<div></div>");
        body = $("<div></div>");
        title = $("<div></div>");
        wrap = $("<table></table>");
        popup.css("position", "absolute");
        popup.css("padding", "2px");
        popup.css("background-color", "rgba(30,65,93,.9)");
        popup.css("border", "1px solid #000");
        popup.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.5)");
        popup.css("z-index", 99);

        if (planeMode) {
          body.css("max-height", "300px");
          body.css("min-width", "380px");
        } else {
          data.sort(function (a, b) {
            var ka = findIndex(orderKey, function (d) {
              return (a.kpiName || a.label).indexOf(d) != -1;
            }) || a.label;
            var kb = findIndex(orderKey, function (d) {
              return (b.kpiName || b.label).indexOf(d) != -1;
            }) || b.label;
            return ka < kb ? -1 : 1;
          });
          body.css("max-height", height + "px");
        }

        body.css("overflow-y", "auto");
        body.css("overflow", "auto");
        title.css("text-align", "center");
        title.css("font-weight", "bold");
        title.css("padding", "3px");
        title.css("color", "#fff");
        title.css("background-color", "#295375");
        title.text(t);
        popup.css("top", pos.y + "px");
        popup.css("left", pos.x + "px");
        popup.append(title);

        var createDom = function createDom(item) {
          var tr = $("<tr></tr>");
          var td1 = $("<td></td>");
          var td2 = $("<td></td>");
          var td3 = $("<td></td>");
          var td4 = $("<td></td>");
          var time = item.arisingTime ? useMomentFormat(item.arisingTime, "yyyy-MM-dd hh:mm:ss") : "-";
          td1.css("padding", "5px 6px 1px 6px");
          td2.css("padding", "5px 6px 1px 6px");
          td3.css("padding", "5px 6px 1px 6px");
          td4.css("padding", "5px 6px 1px 6px");
          td1.css("vertical-align", "middle");
          td2.css("vertical-align", "middle");
          td3.css("vertical-align", "middle");
          td4.css("vertical-align", "middle");
          var label = $("<span></span>");
          var button = $('<button id="button" rel="popover" ></button>');

          if (!planeMode) {
            button.popover({
              placement: "right",
              trigger: "manual",
              title: "上报时间",
              container: "body",
              content: function content() {
                return time;
              }
            }).on("mouseenter", mouseenter).on("mouseleave", mouseleave);
            label.text(item.label);
            td1.append(label);
          } else {
            var span1 = $("<span>" + item.devName + "</span>");
            var span2 = $("<span>" + item.message + "</span>");
            var span3 = $("<span>" + useMomentFormat(item.arisingTime, "yyyy-MM-dd hh:mm:ss") + "</span>");
            span1.css("white-space", "normal");
            span2.css("white-space", "normal");
            span3.css("white-space", "normal");
            span1.css("display", "inline-block");
            span2.css("display", "inline-block");
            span3.css("display", "inline-block");
            span1.css("max-width", "100px");
            span2.css("max-width", "220px");
            td1.append(span1);
            td3.append(span2);
            td4.append(span3);
          }

          if (item.valueStr) {
            button.text(item.valueStr);
          } else if (item.value != "-") {
            button.text(self.toFix(item.value, 2));
          } else {
            button.text("-");
          }

          function mouseenter() {
            if (t) {
              $(this).popover("show");
            }
          }

          function mouseleave() {
            $(this).popover("hide");
          }

          label.css("color", "#aaa");
          label.css("padding-right", "10px");

          item.updateValue = function (value, unit) {
            var val = typeof value !== "undefined" && value !== null ? value : "-";
            val = typeof val == "number" ? self.toFix(val, 2) : val;

            if (unit != "NA" && unit) {
              val += unit;
            }

            button.text(val);
            this.value = value;
          };

          item.updateStatus = function (value) {
            this.status = value;
            button.css("background-color", self.getAlertColor(value));
          };

          item.updateTime = function (t) {
            if (t) {
              time = useMomentFormat(t, "yyyy-MM-dd hh:mm:ss");
            } else {
              time = "-";
            }
          };

          button.css("min-width", "50px");
          button.css("text-align", "center");
          button.css("line-height", "12px");
          button.css("border", 0);
          button.css("color", "#fff");
          button.css("border-radius", "10px");
          button.css("background-color", self.getAlertColor(item.status));
          button.on("click", function (event) {
            $(this).popover("destroy");
            var param = {
              id: item.nodeId,
              sensor: item.instance,
              dataItems: item.id || item.kpiCode
            };

            if (item.arisingTime) {
              param.enddate = new Date(item.arisingTime).getTime();
              param.startdate = param.enddate - 2 * 60 * 60 * 1000;
            }

            self.navigateTo("index", "专业分析", param);
          });

          if (item.label) {
            tr.append(td1);
          }

          if (planeMode) {
            tr.append(td3);
            tr.append(td4);
          }

          tr.append(td2);
          td2.append(button);
          return tr;
        };

        for (var i in data) {
          wrap.append(createDom(data[i]));
        }

        body.append(wrap);
        popup.append(body);
        topo.append(popup);
      }

      AttrDisp.prototype.destroy = function () {
        popup.remove();
      };

      AttrDisp.prototype.getData = function () {
        return data;
      };

      return new AttrDisp();
    };

    var itemins;
    var CamraDic = {
      A101: 1021,
      A201: 1022,
      A301: 1023,
      A401: 1024,
      A102: 1025,
      A202: 1026,
      A302: 1027,
      A402: 1028,
      A103: 1029,
      A203: 1030,
      A303: 1031,
      A403: 1032,
      A731: 1033,
      A831: 1034,
      A732: 1035,
      A832: 1036,
      A833: 1037,
      A835: 1038
    };

    function bind(target, fn) {
      return function () {
        return fn.apply(target, arguments);
      };
    }

    var Camera =
    /*#__PURE__*/
    function () {
      function Camera(ip, path, protocol) {
        _classCallCheck(this, Camera);

        this.ip = ip;
        this.path = path;
        this.protocol = protocol;
      }

      _createClass(Camera, [{
        key: "isValid",
        value: function isValid() {
          return this.valid;
        }
      }, {
        key: "getURLs",
        value: function getURLs() {
          var _this = this;

          return this.ports.map(function (port) {
            return _this.protocol + _this.ip + ":" + port + _this.path;
          });
        }
      }]);

      return Camera;
    }();

    var CoalSiloCamera =
    /*#__PURE__*/
    function (_Camera) {
      _inherits(CoalSiloCamera, _Camera);

      function CoalSiloCamera(ip, path, protocol, label) {
        var _this2;

        _classCallCheck(this, CoalSiloCamera);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CoalSiloCamera).call(this, ip, path, protocol));
        _this2.valid = new RegExp("^煤筒仓$").test(label);
        _this2.ports = [1039, 1040];
        return _this2;
      }

      return CoalSiloCamera;
    }(Camera);

    var RobotCamera =
    /*#__PURE__*/
    function (_Camera2) {
      _inherits(RobotCamera, _Camera2);

      function RobotCamera(ip, path, protocol, label) {
        var _this3;

        _classCallCheck(this, RobotCamera);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(RobotCamera).call(this, ip, path, protocol));
        var match = new RegExp("^(A\\d+)\\D.*$").exec(label);
        _this3.index = match ? match[1] : null;
        _this3.valid = !!match;

        if (!_this3.valid) {
          return _possibleConstructorReturn(_this3);
        }

        _this3.ports = [CamraDic[_this3.index]];
        return _this3;
      }

      return RobotCamera;
    }(Camera);

    var SetCamera =
    /*#__PURE__*/
    function () {
      function SetCamera(wrap, ip, path) {
        _classCallCheck(this, SetCamera);

        this.ip = ip;
        this.path = path;
        this.wrap = wrap;
        this.protocol = "http://";
        this.init();
      }

      _createClass(SetCamera, [{
        key: "init",
        value: function init() {
          var _this4 = this;

          this.getResource().then(function (resource) {
            _this4.cam = new CoalSiloCamera(_this4.ip, _this4.path, _this4.protocol, resource.label);

            if (_this4.cam.isValid()) {
              _this4.createDom();

              return;
            }

            _this4.cam = new RobotCamera(_this4.ip, _this4.path, _this4.protocol, resource.label);

            if (_this4.cam.isValid()) {
              _this4.createDom();

              return;
            }

            _this4.cam = null;
          });
        }
      }, {
        key: "getResource",
        value: function getResource() {
          return psTreeData($state.params.id).getState();
        }
      }, {
        key: "createDom",
        value: function createDom() {
          var div = document.createElement("button");
          div.innerText = "视频";
          div.style.position = "absolute";
          div.style.top = "20px";
          div.style.right = "20px";
          div.style.zIndex = 999;
          div.setAttribute("class", "btn btn-primary");
          div.onclick = bind(this, this.onclick);
          this.wrap.prepend(div);
        }
      }, {
        key: "onclick",
        value: function onclick() {
          cms2.modal({
            title: "视频监控",
            directive: "dialog-video-cam",
            width: "60%",
            scope: scope,
            params: {
              mode: "videoCam",
              url: this.cam.getURLs()
            }
          });
        }
      }]);

      return SetCamera;
    }();

    self.addCam = function () {
      var ip = "10.3.150.39",
          path = "/test",
          camera = new SetCamera(topo, ip, path);
    };

    self.createCurrentStatus = function (txt, pos, status, abs) {
      var wrap = topo.find("div#cStatus");
      var title = $("<div></div>");
      var addOn = $("<div></div>");
      var circle = $("<div></div>");
      var ins;
      wrap = wrap.size() ? wrap : $('<div id="cStatus"></div>');
      wrap.children().remove();

      function wholeClick() {
        $("body").off("click");
        ins.destroy();

        if (itemins) {
          itemins.destroy();
        }
      }

      function clickFn(event) {
        var p = persentage || 1;
        var data = self.getValue("device/alerts");

        if (ins) {
          ins.destroy();
        }

        $("body").off("click");

        if (data) {
          if (data.length > 0) {
            ins = self.createAttrDisp("告警信息", data, {
              x: pos.x / p - 200,
              y: pos.y / p + 15
            }, function (item) {
              var nodeId = item.nodeId;
              var resource;
              var ROLE = self.getValue("global/ROLE");
              self.getDomainAreaLineTree_alertStatus(function (domaintree) {
                domaintree.traverse(function (node) {
                  if (node.id == nodeId) {
                    getResourceById(node.id).then(function (resource) {
                      return ajax.post(getAttrsByModelId, resource.modelId).then(function (attrs) {
                        extend(node, resource);
                        var sub,
                            accessConfigs = node.physicalConfig.accessConfigs || {},
                            sensor = accessConfigs.find(function (n) {
                          return n.instance === item.instance;
                        }) || null;
                        self.setParameter("id", node.id);
                        self.setValue("global/alertTime", item.arisingTime);
                        self.setValue("global/resource", node);
                        self.setValue("global/sensor", sensor);
                        self.setValue("global/instance", item.instance);
                        self.setParameter("sensorId", sensor.dataItemId);

                        if (item.specialty == "Z") {
                          sub = 0;
                        } else if (item.specialty == "D") {
                          sub = 1;
                        } else {
                          sub = 7;
                        }

                        self.navigateToTab("analysis", sub, 1);
                      });
                    });
                  }
                });
              });
            }, true);
            setTimeout(function () {
              $("body").on("click", wholeClick);
            });
          } else {
            self.growl("暂无未处理的告警信息！");
          }
        }
      }

      function currentStatus() {
        wrap.css("position", "absolute");
        var p = abs ? 1 : persentage || 1;
        wrap.css("cursor", "pointer");
        wrap.css("top", pos.y + "px");
        wrap.css("left", pos.x + "px");
        title.text(txt);
        title.css("padding-right", "6px");
        title.css("font-weight", "bold");
        title.css("line-height", "14px");
        title.css("display", "inline-block");
        title.css("color", "#fff");
        addOn.css("display", "inline-block");
        circle.css("display", "block");
        circle.css("position", "absolute");
        circle.css("top", "1px");
        circle.css("width", "14px");
        circle.css("height", "14px");
        circle.css("border-radius", "50%");
        circle.css("background-color", self.getAlertColor(status));
        circle.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,1)");

        if (status > 0) {
          title.css("text-decoration", "underline");
          wrap.off("click");
          wrap.on("click", clickFn);
        }

        addOn.append(circle);
        wrap.append(title);
        wrap.append(addOn);
        topo.append(wrap);
        wrap.css("marginLeft", -(14 + wrap.width()) / 2);
      }

      currentStatus.prototype.setAlarmStatus = function (status) {
        circle.css("background-color", self.getAlertColor(status));

        if (status > 0) {
          title.css("text-decoration", "underline");
          wrap.off("click");
          wrap.on("click", clickFn);
        }
      };

      return new currentStatus();
    };

    self.createCurrentStatusByItem = function (id, pos) {
      function wholeClick() {
        $("body").off("click");
        if (itemins) itemins.destroy();
      }

      function clickFn(event) {
        var p = persentage || 1;
        var data = self.getValue("device/alerts");

        if (itemins) {
          itemins.destroy();
        }

        data = data.filter(function (elm) {
          return elm.nodeId == id;
        });
        $("body").off("click");

        if (data.length > 0) {
          itemins = self.createAttrDisp("告警信息", data, {
            x: pos.x / p,
            y: pos.y / p
          }, function (item) {
            var nodeId = item.nodeId;
            var resource;
            var ROLE = self.getValue("global/ROLE");
            self.getDomainAreaLineTree_alertStatus(function (domaintree) {
              domaintree.traverse(function (node) {
                var sub;

                if (node.id == nodeId) {
                  self.setValue("global/resource", node);
                  self.setValue("global/instance", item.instance);
                  self.setValue("global/sensor", item);
                  self.setValue("global/alertTime", item.arisingTime);
                  self.setParameter("sensorId", item.id);

                  if (node.specialty == "Z") {
                    sub = 0;
                  } else if (node.specialty == "D") {
                    sub = 1;
                  } else {
                    sub = 7;
                  }

                  if (ROLE == 1) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 2) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 3) {
                    self.navigateTo("index", {
                      main: 2,
                      sub: sub,
                      backHistory: 1
                    }, "self");
                  } else {
                    self.growl("此角色无法显示特征曲线");
                  }
                }
              });
            });
          }, true);
          setTimeout(function () {
            $("body").on("click", wholeClick);
          });
        } else {
          self.growl("此设备暂无未处理的告警信息！");
        }
      }

      clickFn();
    };

    self.createMarker = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/marker"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        });
        callback(ins);
      });
    };

    self.createAlarm = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/alarm"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        });
        callback(ins);
      });
    };

    self.createAlarmSmall = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/alarm"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title,
          smallMode: true
        });
        callback(ins);
      });
    };

    self.create3Dbar = function (title, callback) {
      $$.loadExternalJs(["toolkit/configure/3dbarchart"], function (threeDbar) {
        var ins = threeDbar.init(svgId, {
          title: title
        }); //ins.setPos(cell.position());
        //ins.setValue(0);

        callback(ins);
      });
    }; //获得缩放的点位


    self.getPersentageSite = function (position) {
      var p = persentage || 1;
      var tempPosition = {
        x: 0,
        y: 0
      };
      tempPosition.x = position.x / p;
      tempPosition.y = position.y / p;
      return tempPosition;
    };

    getExpression().then(function (expression) {
      var clickEvent = expression.$attr("on/click"),
          initEvent = expression.$attr("on/init"),
          emptyEvent = expression.$attr("on/empty"),
          completeEvent = expression.$attr("on/complete");

      function openCellTools(cellView) {
        if (previewMode) {
          var cell = cellView.model || cellView,
              modelId = getNumber(cell.get("modelId")),
              nodeId = getNumber(cell.get("nodeId")),
              kpiId = getNumber(cell.get("kpiId")),
              subViewId = getNumber(cell.get("subViewId")),
              text = cell.attr("text");

          if (cell.get("valueConfig")) {
            var isSend = false; //是否发送过

            var dirModel = resourceUIService.rootModelsDic[modelId];

            if (cell.get("valueConfig") && dirModel) {
              cell.get("valueConfig").forEach(function (valueLvevel) {
                if (valueLvevel.stateDisplay && valueLvevel.valueDirective && valueLvevel.valueDirectiveAttr) {
                  isSend = true;
                  dirModel.directives.forEach(function (dirObj) {
                    if (valueLvevel.valueDirective == dirObj.id) {
                      dirObj.value = valueLvevel.valueDirectiveAttr;
                      self.sendItemDir(dirObj, nodeId);
                    }
                  });
                }
              });

              if (!isSend && cell.get("valueConfig")[0].valueDirective && cell.get("valueConfig")[0].valueDirectiveAttr) {
                dirModel.directives.forEach(function (dirObj) {
                  if (cell.get("valueConfig")[0].valueDirective == dirObj.id) {
                    dirObj.value = cell.get("valueConfig")[0].valueDirectiveAttr;
                    self.sendItemDir(dirObj, nodeId);
                  }
                });
              }
            }

            return;
          }

          if (typeof clickEvent == "function") {
            clickEvent({
              cellView: cell,
              ui: {
                modelId: modelId,
                resourceId: nodeId,
                kpiId: kpiId,
                subViewId: subViewId
              },
              target: self,
              self: self,
              global: global,
              tools: elemData
            });
          }
        }
      }

      function getCellsMap(cells) {
        var rs = {};
        cells.forEach(function (cell) {
          var nodeId = getNumber(getAttributes(cell, "nodeId")) || 0,
              kpiId = getNumber(getAttributes(cell, "kpiId")) || 0;
          rs[nodeId + "_" + kpiId] = rs[nodeId + "_" + kpiId] || [];
          rs[nodeId + "_" + kpiId].push(cell);
          rs[nodeId + "_" + 999999] = rs[nodeId + "_" + 999999] || [];
          rs[nodeId + "_" + 999999].push(cell);
          rs[nodeId + "_" + 999998] = rs[nodeId + "_" + 999998] || [];
          rs[nodeId + "_" + 999998].push(cell);
        });
        return rs;
      }

      function getAttributes(obj, attr) {
        return obj ? obj.attributes[attr] : null;
      }

      function getKpi(cell) {
        return scope.$root.allDataItemsLoaded.then(function () {
          var cellModelId = getNumber(getAttributes(cell, "modelId")),
              cellKpiId = getNumber(getAttributes(cell, "kpiId"));
          return success(resourceUIService.rootModelsDic[cellModelId].kpiDic[cellKpiId]);
        });
      }

      function makeFunction(str) {
        return function (value) {
          if (typeof str !== "string") {
            return;
          }

          try {
            var fn = new Function("color", "(" + str + ")( color )"),
                rs = fn(value);
          } catch (e) {
            console.error(e);
            return;
          }

          return rs;
        };
      }

      function sortBySeries(kpisMap) {
        kpisMap = kpisMap || {};
        return function (a, b) {
          var item1 = kpisMap[a.dataItemId] || {},
              item2 = kpisMap[b.dataItemId] || {},
              s1 = item1.serial || 0,
              s2 = item2.serial || 0;
          return s1 - s2;
        };
      }

      function getMeasurePointData(queue) {
        var item,
            rs = [];
        queue = isArray(queue) ? queue : [queue];

        function allObj(obj) {
          var arr = [],
              i;

          for (i in obj) {
            if (_typeof(obj[i]) !== "object") {
              return false;
            }

            arr.push(obj[i]);
          }

          return arr;
        }

        while (item = queue.shift()) {
          if (isArray(item)) {
            [].push.apply(queue, item);
          } else {
            var arr = allObj(item);

            if (arr) {
              [].push.apply(queue, arr);
            } else {
              rs.push(item);
            }
          }
        }

        return rs;
      }

      function mapKpi(kpi) {
        return {
          id: kpi.dataItemId,
          instance: kpi.instance,
          label: kpi.kpiName,
          value: "-",
          status: 0,
          arisingTime: kpi.arisingTime
        };
      }

      function mapDataItem(nodeId) {
        return function (kpi) {
          return {
            nodeId: nodeId,
            id: kpi.dataItemId,
            instance: kpi.instance,
            value: "-",
            status: 0,
            arisingTime: kpi.arisingTime
          };
        };
      }

      function getAllUnits() {
        return resourceUIService.unitLoader();
      }

      function getResourceById(id) {
        resourceMap[id] = resourceMap[id] || function (defer) {
          self.getResourceById(id, function (res) {
            defer.resolve(res);
          });
          return defer.promise;
        }(q.defer());

        return resourceMap[id];
      }

      function getResourceByIds(ids) {
        var proms,
            rs = [];

        function recursive(ids) {
          var id = ids.shift();

          if (id) {
            return getResourceById(id).then(function (n) {
              rs.push(n);
              return recursive(ids);
            });
          } else {
            return success(rs);
          }
        }

        return recursive(ids.slice());
      }

      function getKpisByModelIds(ids) {
        return resourceUIService.modelLoader().then(function (rootModelsDic) {
          ids.forEach(function (d) {
            kpisMap[d] = rootModelsDic[d] && rootModelsDic[d]["kpiDic"];
          });
          return success(kpisMap);
        });
      }

      function getKpisByModelId(id) {
        return resourceUIService.modelLoader().then(function (rootModelsDic) {
          kpisMap[id] = rootModelsDic[id] && rootModelsDic[id]["kpiDic"];
          return success(kpisMap);
        });
      }

      self.render = function (inputJson) {
        if (!inputJson && !viewId) {
          return emptyEvent();
        }

        (inputJson ? renderJSON(inputJson) : getViewById(viewId).then(function (json) {
          return renderJSON(json);
        })).then(function (json) {
          return getRapppid().then(function (joint) {
            var graph = new joint.dia.Graph(),
                config = makeConfig(json),
                paper = new joint.dia.Paper(config),
                paperScroller = new joint.ui.PaperScroller({
              el: wrap,
              paper: paper,
              autoResizePaper: false,
              padding: 0
            }),
                PatternLinkView = {
              //渲染的模板
              patternMarkup: ['<pattern id="pattern-<%= id %>" patternUnits="userSpaceOnUse">', '<image xlink:href=""/>', "</pattern>"].join(""),
              initialize: function initialize() {
                joint.dia.LinkView.prototype.initialize.apply(this, arguments);

                _.bindAll(this, "fillWithPattern");
              },
              render: function render() {
                // 调用父节点的render方法
                joint.dia.LinkView.prototype.render.apply(this, arguments); // 建立监听

                this.listenTo(this.model, "change:pattern change:patternColor", this.update);
                return this;
              },
              remove: function remove() {
                // 确保我们停止了正在进行的模式更新。
                joint.util.cancelFrame(this.frameId);
                joint.dia.LinkView.prototype.remove.apply(this, arguments);
                this.clearPattern();
              },
              clearPattern: function clearPattern() {
                if (this.pattern) {
                  // 从DOM中删除模式。
                  this.pattern.remove();
                  this.pattern = null;
                }
              },
              update: function update() {
                joint.dia.LinkView.prototype.update.apply(this, arguments);

                if (this.model && !this.model.get("pattern")) {
                  return this;
                }

                this.clearPattern(); // 确保pattern不存在

                if (!this.pattern) {
                  // 创建模式和图像元素。
                  this.pattern = joint.V(_.template(this.patternMarkup)({
                    id: this.id
                  })); // 缓存图像元素以便更快地访问。

                  this.patternImage = this.pattern.findOne("image"); // 将模式附加到pager的defs中。

                  joint.V(this.paper.svg).defs().append(this.pattern); // 通知 '.connection' 路径使用pattern渲染

                  var connection = joint.V(this.el).findOne(".connection").attr({
                    stroke: "url(#pattern-" + this.id + ")"
                  }); // 缓存原来的stroke-width

                  this.strokeWidth = connection.attr("stroke-width") || 1;
                } // 确保我们停止了正在进行的模式更新。


                joint.util.cancelFrame(this.frameId);
                this.frameId = joint.util.nextFrame(this.fillWithPattern);
                return this;
              },
              fillWithPattern: function fillWithPattern() {
                var strokeWidth = this.strokeWidth;
                var bbox = joint.g.rect(joint.V(this.el).bbox(true)).moveAndExpand({
                  x: -strokeWidth,
                  y: -strokeWidth,
                  width: 2 * strokeWidth,
                  height: 2 * strokeWidth
                });
                var points = [].concat(this.sourcePoint, this.route, this.targetPoint);
                points = _.map(points, function (point) {
                  return joint.g.point(point.x - bbox.x, point.y - bbox.y);
                });
                var canvas = document.createElement("canvas");
                canvas.width = bbox.width;
                canvas.height = bbox.height;
                var ctx = canvas.getContext("2d");
                ctx.lineWidth = strokeWidth;
                ctx.lineJoin = "round"; //lineJoin 属性设置或返回所创建边角的类型，当两条线交汇时。bevel/round/miter。

                ctx.lineCap = "round"; //lineCap 属性设置或返回线条末端线帽的样式。butt/round/square

                for (var i = 0, pointsCount = points.length - 1; i < pointsCount; i++) {
                  ctx.save();
                  var gradientPoints = this.gradientPoints(points[i], points[i + 1], strokeWidth);
                  var gradient = ctx.createLinearGradient.apply(ctx, gradientPoints);
                  this.drawPattern.call(this, ctx, points[i], points[i + 1], strokeWidth, gradient);
                  ctx.restore();
                } // generate data URI from the canvas


                var dataUri = canvas.toDataURL("image/png"); // update the pattern image and the dimensions

                this.pattern.attr(bbox);
                this.patternImage.attr({
                  width: bbox.width,
                  height: bbox.height,
                  "xlink:href": dataUri
                });
              },
              // finds a gradient with perpendicular direction to a link segment
              gradientPoints: function gradientPoints(from, to, width) {
                var angle = joint.g.toRad(from.theta(to) - 90);
                var center = joint.g.line(from, to).midpoint();
                var start = joint.g.point.fromPolar(width / 2, angle, center);
                var end = joint.g.point.fromPolar(width / 2, Math.PI + angle, center);
                return [start.x, start.y, end.x, end.y];
              },
              // A drawing function executed for all links segments.
              drawPattern: function drawPattern(ctx, from, to, width, gradient) {
                var innerWidth = width - 4;
                var outerWidth = width;
                var buttFrom = joint.g.point(from).move(to, -outerWidth / 2);
                var buttTo = joint.g.point(to).move(from, -outerWidth / 2);
                var lineColor = "blue";

                if (this.model.get("attrs") && this.model.get("attrs")[".connection"]) {
                  lineColor = this.model.get("attrs")[".connection"]["stroke"] ? this.model.get("attrs")[".connection"]["stroke"] : lineColor;
                }

                var patternColor = "#ffffff";

                if (this.model.get("patternColor")) {
                  patternColor = this.model.get("patternColor");
                }

                gradient.addColorStop(0.0, lineColor);
                gradient.addColorStop(0.5, patternColor);
                gradient.addColorStop(1.0, lineColor);
                ctx.beginPath();
                ctx.lineWidth = innerWidth;
                ctx.strokeStyle = gradient;
                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);
                ctx.stroke();
                ctx.closePath();
              }
            };

            function setLevel(cell, value) {
              var range = cell.attributes.range;

              if (range) {
                range = eval(range);
              }

              var persent = (value - range[0]) / (range[1] - range[0]);
              cell.prop("attrs/text/text", "");
              cell.transition("attrs/rect", {
                transform: "translate(0,0)",
                height: 60 * persent
              }, {
                delay: 0,
                duration: 1000,
                valueFunction: function valueFunction(start, end) {
                  return function (time) {
                    var height = start["height"] + (end["height"] - start["height"]) * time;
                    var all = 0;
                    return {
                      transform: "translate(0," + (60 - height) + ")",
                      height: height
                    };
                  };
                }
              });
            }

            function setOpenAngle(cell, value, element) {
              var range = cell.attributes.range;
              var id = cell.id;
              openAngles[id].setValue(value);
            }

            function pathAnimate(cell, value, type, kpiRange) {
              if (!kpiRange) kpiRange = [0, 1];
              var p = (value - kpiRange[0]) / (kpiRange[1] - kpiRange[0]);
              if (p < 0) p = -p;
              if (p > 1) p = 1;

              if (!cell.linkDomBox) {
                var pathlink = linksDic["source:" + cell.id]; //渲染的link

                if (!pathlink) pathlink = linksDic["target:" + cell.id];
                if (!pathlink) return;
                cell.linkDom = jQuery("[model-id=" + pathlink.id + "]")[0]; //定义的link

                cell.linkDomBox = cell.linkDom.getBoundingClientRect();
              }

              var movetox = -1;
              var movetoy = -1;

              if (type == "number:1") {
                //X轴正方向
                if (cell.offsetx == undefined) {
                  cell.offsetx = cell.get("position").x;
                }

                movetox = cell.offsetx + cell.linkDomBox.width * p / scale;
              } else if (type == "number:2") {
                //x轴负方向
                if (cell.offsetx == undefined) {
                  cell.offsetx = cell.get("position").x;
                }

                movetox = cell.offsetx - cell.linkDomBox.width * p / scale;
              } else if (type == "number:3") {
                //y轴正方向
                if (cell.offsety == undefined) {
                  cell.offsety = cell.get("position").y;
                }

                movetoy = cell.offsety + cell.linkDomBox.height * p / scale;
              } else if (type == "number:4") {
                //y轴负方向
                if (cell.offsety == undefined) {
                  cell.offsety = cell.get("position").y;
                }

                movetoy = cell.offsety - cell.linkDomBox.height * p / scale;
              } else if (type == "number:5") {
                var connection = cell.linkDom.firstChild;
                var cellDom = jQuery("[model-id=" + cell.id + "]")[0];
                var attrs = {
                  "xlink:href": "#" + cellDom.firstChild.attributes["id"].value,
                  path: connection.attributes["d"].value,
                  dur: "5s",
                  begin: "1s",
                  rotate: "auto"
                };
                var animateMotion = joint.V("animateMotion", attrs);
                cellDom.firstChild.append(animateMotion.node);
              }

              if (movetox > -1) {
                cell.transition("position/x", movetox, {
                  delay: 100,
                  duration: 1000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      return a + (b - a) * t;
                    };
                  }
                });
              }

              if (movetoy > -1) {
                cell.transition("position/y", movetoy, {
                  delay: 100,
                  duration: 1000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      return a + (b - a) * t;
                    };
                  }
                });
              }
            }

            function fill(cell, color) {
              var type = getType(getAttributes(cell, "type"));
              cell.transition("attrs/" + type + "/fill", color, {
                delay: 300,
                duration: 500,
                valueFunction: joint.util.interpolate.hexColor
              });
            }

            function fillColor(cell, type, color, state, color2) {
              var stateId = cell.get("stateId");

              if (stateId) {
                if (state < 1) state = 0;
                cell.state = state;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];
                var colorAry2 = [color2, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:1" || stateId == "number:3") {
                  if (type && colorAry[state]) {
                    cell.transition("attrs/" + type + "/fill", colorAry[state], {
                      delay: 300,
                      duration: 500,
                      valueFunction: joint.util.interpolate.hexColor
                    });
                  }
                }

                if ((stateId == "number:2" || stateId == "number:3") && colorAry2[state]) {
                  cell.transition("attrs/text/fill", colorAry2[state], {
                    delay: 300,
                    duration: 500,
                    valueFunction: joint.util.interpolate.hexColor
                  });
                }
              }
            }

            function breathFlash(cell, type, color, state, opacityState) {
              var stateId = cell.get("stateId");

              var flash = function flash(el) {
                var defaultOpacity = opacityState ? 1 : el.opacity;
                el.transition("attrs/" + type + "/opacity", defaultOpacity, {
                  delay: 0,
                  duration: 3000,
                  timingFunction: joint.util.timing.inout,
                  valueFunction: function valueFunction(a, b) {
                    return function (t) {
                      var o = a + b * (defaultOpacity - Math.abs(defaultOpacity - 2 * defaultOpacity * t));
                      return Number(o.toFixed(2));
                    };
                  }
                });
              };

              if (stateId) {
                if (state < 0) state = 0;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:2") {
                  type = "text";
                }

                if (type) {
                  if (!cell.opacity) {
                    cell.opacity = jQuery.isNumeric(cell.prop("attrs/" + type + "/opacity")) ? cell.prop("attrs/" + type + "/opacity") : 1;
                  }

                  cell.state = state;
                  cell.prop("attrs/" + type + "/opacity", 0.1);
                  cell.prop("attrs/" + type + "/fill", colorAry[state]);

                  if (cell.state > 0) {
                    if (_.contains(cell.getTransitions(), "attrs/" + type + "/opacity")) return;
                    cell.on("transition:end", function (el, path) {
                      if (el.state > 0) {
                        flash(el);
                      } else {
                        el.off("transition:end");
                        el.prop("attrs/" + type + "/opacity", el.opacity);
                      }
                    });
                    flash(cell);
                  } else {
                    cell.prop("attrs/" + type + "/opacity", cell.opacity);
                  }
                }
              }
            }

            function bubbleFlash(cell, type, color, state, opacityState) {
              var stateId = cell.get("stateId");

              var flash = function flash() {
                cell.prop("attrs/" + type + "/r", 0);
                cell.prop("attrs/" + type + "/opacity", opacityState ? 1 : cell.opacity);
                cell.transition("attrs/" + type, {
                  r: cell.r,
                  opacity: 0
                }, {
                  delay: 0,
                  duration: 1500,
                  valueFunction: function valueFunction(start, end) {
                    return function (time) {
                      return {
                        r: start["r"] + (end["r"] - start["r"]) * time,
                        opacity: start["opacity"] - start["opacity"] * time
                      };
                    };
                  }
                });
              };

              if (stateId) {
                if (state < 0) state = 0;
                var colorAry = [color, "#25bce7", "#e1cd0a", "#ed9700", "#e7675d"];

                if (stateId == "number:2") {
                  type = "text";
                }

                if (type) {
                  if (!cell.opacity) {
                    cell.opacity = jQuery.isNumeric(cell.prop("attrs/" + type + "/opacity")) ? cell.prop("attrs/" + type + "/opacity") : 1;
                    cell.r = cell.prop("attrs/" + type + "/r");
                    cell.prop("attrs/" + type + "/opacity", opacityState ? 1 : cell.opacity);
                  }

                  cell.state = state;
                  cell.prop("attrs/" + type + "/fill", colorAry[state]);

                  if (cell.state > 0) {
                    if (_.contains(cell.getTransitions(), "attrs/" + type)) return;
                    cell.on("transition:end", function (el) {
                      if (el.state > 0) {
                        flash();
                      } else {
                        cell.prop("attrs/" + type + "/opacity", cell.opacity);
                        cell.prop("attrs/" + type + "/r", cell.r);
                      }
                    });
                    flash();
                  } else {
                    cell.prop("attrs/" + type + "/opacity", cell.opacity);
                    cell.prop("attrs/" + type + "/r", cell.r);
                  }
                }
              }
            }

            function changeIconAndText(cell, state, type) {
              if (!type) type = "alertConfig";

              if (type == "alertConfig") {
                var alertIcon = cell.get("alertConfig");

                if (alertIcon) {
                  if (state < 1) state = 0;
                  var alertConfig = cell.get(type);
                  alertConfig.forEach(function (item) {
                    if (item.id == state) {
                      cell.prop("attrs/text/text", item.alertText || "");
                      if (item.alertIcon) cell.prop("attrs/image/xlink:href", item.alertIcon);
                    }
                  });
                }
              } else if (type == "valueConfig") {
                var valueConfig = cell.get(type);
                valueConfig.forEach(function (item) {
                  item.stateDisplay = false;

                  if (item.valueText == state) {
                    item.stateDisplay = true;
                    if (item.valueText) cell.prop("attrs/text/text", item.valueText);
                    if (item.valueIcon) cell.prop("attrs/image/xlink:href", item.valueIcon);
                  }
                });
              }
            }

            function makeConfig(json) {
              var width = topo.width(),
                  w = json.width,
                  h = json.height,
                  portion = h / w,
                  height = width * portion;
              /** keep consequence with old version **/

              persentage = w / width;
              /** keep consequence with old version **/

              return {
                width: width,
                height: height,
                model: graph,
                interactive: false,
                scale: width / w,
                perpendicularLinks: true,
                gridSize: 0,
                markAvailable: true,
                linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
                defaultLink: new joint.dia.Link({
                  attrs: {
                    ".marker-source": {
                      d: "M 10 0 L 0 5 L 10 10 z",
                      transform: "scale(0.001)"
                    },
                    ".marker-target": {
                      d: "M 10 0 L 0 5 L 10 10 z"
                    },
                    ".connection": {
                      stroke: "black"
                    }
                  }
                }),
                linkView: joint.dia.LinkView.extend(PatternLinkView)
              };
            }

            function removeSame(a, b) {
              a.indexOf(b) == -1 ? a.push(b) : null;
              return a;
            }

            function makeValueEval(rangeObj) {
              var json = parse(rangeObj);

              if (isArray(json) || _typeof(json) !== "object" || json === null) {
                return function removeSingnal(val) {
                  if (typeof val === "undefined" || val === null) {
                    return;
                  }

                  if (isArray(val)) {
                    val = val.reduce(collapse, []);
                    return val[0];
                  }

                  if (val[0] == "[" && val[val.length - 1] == "]") {
                    val = parse(val);

                    if (isArray(val)) {
                      val = val.reduce(collapse, []);
                      return val[0];
                    } else {
                      return "-";
                    }
                  }

                  return val;
                };
              }

              return function (val) {
                return json[val];
              };
            }

            paperScroller.scroll(0, 0);
            paperScroller.$el.css("padding-left", "0");
            paperScroller.$el.css("padding-top", "0");
            paperScroller.$el.css("overflow", "hidden");
            paper.on("element:pointerup", function (cellView) {
              if (cellView.model instanceof joint.dia.Element) {
                openCellTools(cellView);
              }
            });
            paper.on("cell:pointerup", function (cellView, evt) {
              if (cellView.model instanceof joint.dia.Link) {
                openCellTools(cellView);
              }

              if (cellView.model.attributes.extend == "directive") {
                directive(cellView.model.attributes);
              }

              if (cellView.model.attributes.extend == "tip") {
                tip(cellView.model.attributes);
              }
            });

            if ($$.isString(json.bgimage)) {
              paper.$el.css("background-image", 'url("' + json.bgimage + '")');
              paper.$el.css("background-size", "contain");
              paper.$el.css("background-repeat", "no-repeat");
              paper.$el.css("background-position", "center");
            }

            paper.el.oncontextmenu = function (evt) {
              evt.preventDefault();
            }; //paper.$el.css("background-color", json.bgcolor);


            graph.fromJSON(json);
            svgId = wrap.find("svg")[0];
            topo.find(".viewport").attr("transform", "scale(" + config.scale + ")");

            function hiddenMarkers() {
              $("g.marker-vertices").attr("display", "none");
              $("g.marker-arrowheads").attr("display", "none");
              $("g.link-tools").attr("display", "none");
            }

            hiddenMarkers();
            /** --------------- keep consequence with old version ------------------- **/

            if (events["$renderGraphComplete"]) {
              events["$renderGraphComplete"](graph.getCells());
            }

            self.trigger("$renderGraphComplete", graph.getCells());

            if (events["$loadCiKpiComplete"]) {
              events["$loadCiKpiComplete"](graph.getCells());
            }

            self.trigger("$loadCiKpiComplete", graph.getCells());
            /** --------------- keep consequence with old version ------------------- **/

            graph.getCells().forEach(function (cell) {
              var modelId = cell.get("id");
              var cursorStr = cell.get("cursor");
              var cursor = "";

              if (cursorStr) {
                var cursorAry = cursorStr.split(":");

                if (cursorAry.length > 0 && cursorAry[cursorAry.length - 1] != "?") {
                  cursor = cursorAry[cursorAry.length - 1];
                }
              }

              var $_cell_el = paper.$el.find('g[model-id="' + modelId + '"]');

              if (cursor) {
                $_cell_el.get(0).style = "cursor: " + cursor + "!important";
              }
            });
            self.getDomainAreaLineTree_alertStatus(function (res) {
              res.getChildren(function () {
                return true;
              }).then(function (children) {
                getAllUnits().then(function (u) {
                  units = u;
                  var explainer = {
                    " ": {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attr("kpiId"));
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId")),
                              kpiId = getNumber(cell.attr("kpiId"));
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {}
                    },
                    value: {
                      before: function before(cell) {
                        var ins = cell.attributes.attrs.text.text;
                        cell.prop("_instance", ins);
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attributes.kpiId);
                      },
                      getInstance: function getInstance(cell) {
                        return cell.attributes.attrs.text.text;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes.nodeId),
                              kpiId = getNumber(cell.attributes.kpiId),
                              instance = cell.prop("_instance");
                          return nodeId == value.nodeId && kpiId == value.kpiCode && instance == value.instance;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var val = valuelist[0];
                        changeIconAndText(cell, val ? val.value : 0, "valueConfig");
                      }
                    },
                    alarm: {
                      before: function before(cell) {
                        cell.prop("attrs/text/text", " ");
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return undefined;
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId")),
                              kpiId = getNumber(cell.attr("kpiId"));
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        }),
                            val = valuelist.find(function (value) {
                          return value.nodeId == nodeId && value.kpiCode == 999999;
                        }) || {},
                            state = val.value || 0;
                        changeIconAndText(cell, state);
                      }
                    },
                    instance: {
                      before: function before(cell) {
                        cell.prop("attrs/text/text", " ");
                      },
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes.nodeId);
                      },
                      getKpiId: function getKpiId(cell) {
                        return getNumber(cell.attributes.kpiId);
                      },
                      getInstance: function getInstance(cell) {
                        return undefined;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes["nodeId"]),
                              kpiId = getNumber(cell.attributes["kpiId"]);
                          return nodeId == value.nodeId && kpiId == value.kpiCode;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            dataItemId = getNumber(cell.attributes.kpiId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        }),
                            val = valuelist.find(function (value) {
                          return value.nodeId == nodeId && value.kpiCode == dataItemId;
                        }) || {}; //cell.prop( "attrs/text/text", "-" );

                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId],
                                kpiData = kpisMap[resource.modelId][dataItemId] || {},
                                range = makeValueEval(kpiData.range),
                                unit = getUnit(units[kpiData.unit]);
                            cell.prop("attrs/text/fill", "white");
                            cell.prop("attrs/text/visibility", "visible");
                            cell.prop("attrs/text/text", formatVal(range(val.value)) + unit);
                          });
                        });
                      }
                    },
                    alert: {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attr("nodeId"));
                      },
                      getKpiId: function getKpiId(cell) {
                        return;
                      },
                      getInstance: function getInstance(cell) {
                        return;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attr("nodeId"));
                          return nodeId == value.nodeId && kpiId == 999999;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            node = children.find(function (child) {
                          return child.id == nodeId;
                        });

                        function run(ins) {
                          ins.setPos(cell.attributes.position);
                          ins.setAlarmStatus(node.state);
                          ins.on("textClick", function (event) {});
                          ins.on("click", function (event) {
                            self.refresh({
                              id: node.id
                            });
                          });
                        }

                        if (cell.$ins == null) {
                          self.createAlarm(node.label, function (ins) {
                            cell.$ins = ins;
                            run(cell.$ins);
                          });
                        } else {
                          run(cell.$ins);
                        }
                      }
                    },
                    baowualarm: {
                      getNodeId: function getNodeId(cell) {
                        return getNumber(cell.attributes["nodeId"]);
                      },
                      getKpiId: function getKpiId(cell) {
                        return;
                      },
                      getInstance: function getInstance(cell) {
                        return;
                      },
                      filter: function filter(cell) {
                        return function (value) {
                          var nodeId = getNumber(cell.attributes.nodeId);
                          return nodeId == value.nodeId && value.kpiCode == 999999;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var nodeId = getNumber(cell.attributes.nodeId),
                            value = valuelist.find(function (v) {
                          return v.nodeId == nodeId;
                        });

                        if (typeof value === "undefined") {
                          return;
                        }

                        breathFlash(cell, "rect", "#ff0000", value.value, false);
                      }
                    },
                    dataItem: {
                      getNodeId: function getNodeId(cell) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            nodeId = getNumber(cell.attributes.nodeId);
                        return currentdevice ? res.id : nodeId;
                      },
                      getKpiId: function getKpiId(cell) {
                        return cell.attributes.dataItem;
                      },
                      getInstance: function getInstance(cell) {
                        return getString(cell.attributes.sensor);
                      },
                      filter: function filter(cell) {
                        var dataItem = cell.attributes.dataItem,
                            sensor = cell.attributes.sensor;
                        return function (value) {
                          var kpiCode = value.kpiCode,
                              instance = value.instance;

                          if (kpiCode == 999997) {
                            instance = instance.split("_");
                            kpiCode = instance[0];
                            instance = instance[1];
                          }

                          return sensor == instance && dataItem.indexOf(kpiCode - 0) != -1;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            dataItem = cell.attributes.dataItem,
                            nodeId = currentdevice ? res.id : getNumber(cell.attributes.nodeId),
                            sensor = getString(cell.attributes.sensor);
                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId];
                            return success(getMeasurePointData(parse(resource.values.MeasurePointLocate))).then(function (sensors) {
                              var sen = sensors.find(function (s) {
                                return s.name === sensor;
                              }),
                                  kpis = allaccessConfigs.filter(function (d) {
                                return d.instance == sensor && currentModelKpiMap[d.dataItemId] && !currentModelKpiMap[d.dataItemId]["needTransform"];
                              }).map(function (kpi) {
                                var obj = valuelist.find(function (val) {
                                  return val.kpiCode == kpi.dataItemId;
                                });
                                obj ? kpi.arisingTime = obj.arisingTime : null;
                                return kpi;
                              }),
                                  kpiFilter = kpis.filter(function (kpi) {
                                return dataItem.indexOf(kpi.dataItemId) != -1;
                              }),
                                  dt;
                              kpis.sort(function (a, b) {
                                return currentModelKpiMap[a.dataItemId].serial - currentModelKpiMap[b.dataItemId].serial;
                              });

                              if (!sen) {
                                return;
                              }

                              if (kpiFilter.length > 0) {
                                cell.$attrDisp = cell.$attrDisp || self.createAttrDisp(kpiFilter[0].kpiName, kpiFilter.map(mapDataItem(nodeId)), self.getPersentageSite(cell.attributes.position)), function () {};
                                dt = remapAttrDist(cell.$attrDisp.getData());
                                valuelist.forEach(function (v) {
                                  var dataItemId = v.kpiCode,
                                      instance = v.instance;

                                  if (dataItemId === 999997) {
                                    instance = instance.split("_");
                                    dataItemId = instance[0];
                                    instance = instance[1];
                                  }

                                  var rs = dt[instance + "/" + dataItemId],
                                      kpiData = kpisMap[resource.modelId][dataItemId],
                                      range = makeValueEval(kpiData.range),
                                      unit = getUnit(units[kpiData.unit]);

                                  if (v.kpiCode == 999997) {
                                    rs.updateStatus(v.value);
                                  } else {
                                    rs ? rs.updateValue(formatVal(range(v.value)) + unit) : null;
                                    rs ? rs.updateTime(v.arisingTime) : null;
                                  }
                                });
                              }
                            });
                          });
                        });
                      }
                    },
                    kpis: {
                      getNodeId: function getNodeId(cell) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            nodeId = getNumber(cell.attributes.nodeId);
                        return currentdevice ? res.id : nodeId;
                      },
                      getKpiId: function getKpiId(cell) {
                        return cell.attributes.dataItem;
                      },
                      getInstance: function getInstance(cell) {
                        return getString(cell.attributes.sensor);
                      },
                      filter: function filter(cell) {
                        var dataItem = cell.attributes.dataItem,
                            sensor = getString(cell.attributes.sensor);
                        return function (value) {
                          var kpiCode = value.kpiCode,
                              instance = value.instance;

                          if (kpiCode == 999997) {
                            instance = instance.split("_");
                            kpiCode = instance[0];
                            instance = instance[1];
                          }

                          return sensor == instance && dataItem.indexOf(kpiCode - 0) != -1;
                        };
                      },
                      handler: function handler(cell, valuelist) {
                        var currentdevice = cell.attributes.currentdevice || 0,
                            dataItem = cell.attributes.dataItem,
                            dataItems,
                            valuelistMap = valuelist.reduce(function (a, b) {
                          a[b.kpiCode] = b;
                          return a;
                        }, {}),
                            nodeId = currentdevice ? res.id : getNumber(cell.attributes.nodeId),
                            sensor = getString(cell.attributes.sensor);

                        if (valuelist && valuelist.length > 0) {}

                        getResourceById(nodeId).then(function (resource) {
                          var allaccessConfigs = resource.$attr("physicalConfig/accessConfigs");
                          getKpisByModelId(resource.modelId).then(function (kpiMap) {
                            var currentModelKpiMap = kpiMap[resource.modelId];
                            return success(getMeasurePointData(parse(resource.values.MeasurePointLocate))).then(function (sensors) {
                              var sen = sensors.find(function (s) {
                                return s.name === sensor;
                              }),
                                  kpis = allaccessConfigs.filter(function (d) {
                                return d.instance == sensor && currentModelKpiMap[d.dataItemId] && !currentModelKpiMap[d.dataItemId]["needTransform"];
                              }),
                                  dt;
                              kpis.sort(function (a, b) {
                                return currentModelKpiMap[a.dataItemId].serial - currentModelKpiMap[b.dataItemId].serial;
                              });

                              if (!sen) {
                                return;
                              }

                              dataItems = kpis.filter(function (kpi) {
                                valuelistMap[kpi.dataItemId] ? kpi.arisingTime = valuelistMap[kpi.dataItemId].arisingTime : null;
                                return dataItem.indexOf(kpi.dataItemId) != -1;
                              }).map(mapKpi); //

                              cell.$attrDisp = cell.$attrDisp || self.createAttrDisp(sen.label, dataItems.map(function (d) {
                                d.nodeId = nodeId;
                                return d;
                              }), self.getPersentageSite(cell.attributes.position), undefined, undefined, cell.get("absheight"));
                              dt = remapAttrDist(cell.$attrDisp.getData());
                              valuelist.forEach(function (v) {
                                if (nodeId != v.nodeId) {
                                  return;
                                }

                                var dataItemId = v.kpiCode,
                                    instance = v.instance;

                                if (dataItemId == 999997) {
                                  instance = instance.split("_");
                                  dataItemId = instance[0];
                                  instance = instance[1];
                                }

                                var rs = dt[instance + "/" + dataItemId],
                                    kpiData = kpisMap[resource.modelId][dataItemId] || {},
                                    range = makeValueEval(kpiData.range),
                                    unit = getUnit(units[kpiData.unit]);

                                if (typeof range(v.value) === "undefined") {}

                                if (typeof (formatVal(range(v.value)) + unit) == "undefined") {}

                                if (v.kpiCode == 999997) {
                                  rs.updateStatus(v.value);
                                } else {
                                  rs ? rs.updateValue(formatVal(range(v.value)) + unit) : null;
                                  rs ? rs.updateTime(v.arisingTime) : null;
                                }
                              });
                            });
                          });
                        });
                      }
                    }
                  };

                  function toFix(n) {
                    var num = n - 0;

                    if (num !== num) {
                      return n;
                    }

                    return num.toFixed(2);
                  }

                  function formatVal(val) {
                    if (typeof val == "undefined" || val === null) {
                      return "-";
                    }

                    if (_typeof(val) === "object") {
                      return toFix(val[0]);
                    }

                    return toFix(val);
                  }

                  function remapAttrDist(arr) {
                    var obj = {};

                    for (var i = 0; i < arr.length; i++) {
                      obj[arr[i].instance + "/" + arr[i].id] = arr[i];
                      obj[arr[i].instance + "/999998"] = arr[i];
                      obj[arr[i].instance + "/999997"] = arr[i];
                    }

                    return obj;
                  }

                  function isNotUndefined(d) {
                    return typeof d !== "undefined";
                  }

                  function attribute(cell, attr, val) {
                    var attrs = attr.split("/").filter(isNotUndefined),
                        item;

                    if (typeof val === "undefined") {
                      rs = cell;

                      while ((item = attrs.shift()) && rs) {
                        rs = rs[item];
                      }

                      return rs;
                    }

                    var last = attrs.pop(),
                        rs = cell;

                    while ((item = attrs.shift()) && rs) {
                      rs = rs[item];
                    }

                    if (_typeof(rs) === "object") {
                      rs[last] = val;
                    }
                  }

                  function getNodeId(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getNodeId"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function getKpiId(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getKpiId"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function getInstance(cell) {
                    var ext = cell.attributes.extend || " ",
                        fn = attribute(explainer, [ext, "getInstance"].join("/"));
                    return typeof fn === "function" ? fn(cell) : null;
                  }

                  function eachProp(obj, callback) {
                    for (var i in obj) {
                      callback(obj[i], i, obj);
                    }
                  }

                  return success(graph).then(function (graph) {
                    completeEvent && completeEvent({
                      target: self,
                      self: self,
                      global: global,
                      tools: elemData
                    });
                    var cells = graph.getCells(),
                        nodeIds = cells.map(function (cell) {
                      return getNodeId(cell);
                    }).filter(noEmpty).reduce(removeSame, []),
                        kpiIds = cells.map(function (cell) {
                      return getKpiId(cell);
                    }).filter(noEmpty).concat([999997, 999998, 999999]).reduce(collapse, []).reduce(removeSame, []),
                        instances = cells.map(function (cell) {
                      return getInstance(cell);
                    }).filter(noEmpty).reduce(removeSame, []);

                    function startSocket(callback) {
                      var paramSocket = {
                        ciid: nodeIds.toString(),
                        kpi: kpiIds.toString()
                      },
                          operation = "register";
                      uuid = Math.uuid();

                      function toArr(obj) {
                        var rs = [];

                        for (var i in obj) {
                          for (var j in obj[i]) {
                            for (var k in obj[i][j]) {
                              rs.push(obj[i][j][k]);
                            }
                          }
                        }

                        return rs;
                      }

                      function throttle(fn, time) {
                        var timer,
                            obj = {};
                        return function (event) {
                          var _this5 = this;

                          var nodeId = event.data.nodeId,
                              kpiCode = event.data.nodeId,
                              instance = event.data.instance || "_";

                          if (timer == null) {
                            timer = setTimeout(function () {
                              fn.call(_this5, toArr(obj));
                              timer = null;
                              obj = {};
                            }, time);
                          } else {
                            obj[nodeId] = obj[nodeId] || {};
                            obj[nodeId][kpiCode] = obj[nodeId][kpiCode] || {};
                            obj[nodeId][kpiCode][instance] = event.data;
                          }
                        };
                      }

                      ws.send(nodeIds, kpiIds);
                      ws.on(throttle(function (events) {
                        var dis = $(topo[0].parentNode).css("display");

                        if (dis != "none") {
                          callback(events);
                        }
                      }, 3000));
                    }

                    function inputValue(condition) {
                      return function (valueList) {
                        cells.forEach(function (cell) {
                          var ext = cell.attributes.extend,
                              config = explainer[ext || " "];

                          if (typeof config == "undefined") {
                            return;
                          }

                          var fitered = config.filter,
                              handler = config["handler"],
                              data = valueList.filter(fitered(cell));

                          if (condition(data)) {
                            handler(cell, data);
                          }
                        });
                      };
                    }

                    cells.forEach(function (cell) {
                      var ext = cell.attributes.extend,
                          config = explainer[ext || " "];

                      if (typeof config == "undefined") {
                        return;
                      }

                      config.before ? config.before(cell) : null;
                    });

                    function getData() {
                      timer = null;

                      timerCallback = function timerCallback(valuelist) {
                        inputValue(function (data) {
                          return true;
                        })(valuelist);
                        timer = setTimeout(getData, 6000);
                        /* startSocket(function(valuelist) {
                            inputValue(function(data) {
                              return data.length > 0;
                            })(valuelist);
                          }); */
                      };

                      if (nodeIds && nodeIds.length > 0 && kpiIds && kpiIds.length > 0) {
                        getKpiValueList(nodeIds, kpiIds, instances, false).then(function (d) {
                          /* let last = d[d.length - 1];
                          last.instance = last.kpiCode + "_" + last.instance;
                          last.kpiCode = 999997;
                          last.value = 4; */
                          timerCallback && timerCallback(d);
                        });
                      } else {
                        inputValue(function (data) {
                          return true;
                        })([]);
                      }
                    }

                    getResourceByIds(nodeIds).then(function (resources) {
                      var rs = {},
                          modelIds = resources.reduce(function (a, b) {
                        if (a.indexOf(b.modelId) == -1) {
                          a.push(b.modelId);
                        }

                        return a;
                      }, []);
                      return getKpisByModelIds(modelIds);
                    }).then(function (d) {
                      extend(kpisMap, d);
                      getData();
                    });
                  });
                });
              });
            });
          });
        });
      };

      if (typeof initEvent == "function") {
        try {
          initEvent({
            target: self,
            self: self,
            global: global,
            tools: elemData
          });
        } catch (e) {
          console.error(e);
        }
      } else {
        self.render();
      }
    });
    topo.css(style);
    topo.css("position", "relative");
    topo.append(wrap);
    self.on("$destroy", function () {
      clearTimeout(timer);
      timer = undefined;
      timerCallback = undefined;
      SwSocket.unregister(uuid);
    });
    return topo;
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-track-data.service?angular=service&type=script":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-track-data.service?angular=service&type=script ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = (function (q, timeout) {
  function dealAttributeDefinitions(item, index) {
    var ret = {},
        obj = {};
    var key = Object.keys(item)[0];
    ret.__key = key;

    if (key === 'detailDialog' || key === 'directive') {
      obj = item;
    } else {
      obj = item[key];
    }

    return Object.assign({}, ret, obj);
  }

  function generateTaskJobProcess(task) {
    if (_typeof(task) !== 'object' || JSON.stringify(task) === '{}' || task === null) {
      return {};
    }

    if (!task["ticketTask"] || !task["ticketTask"]["attributeDefinitions"]) {
      return {};
    }

    var taskValues = task["ticketTask"]['values'];
    return task["ticketTask"]["attributeDefinitions"].map(dealAttributeDefinitions).reduce(function (prev, curr) {
      if (curr.__key == 'detailDialog') {
        prev["detailDialog"] = curr["detailDialog"];
      }

      if (curr.__key == 'directive') {
        prev["directive"] = curr["directive"];
      }

      if (!curr.showInTracker) {
        return prev;
      }

      prev[curr.__key] = {
        key: curr.label,
        value: taskValues[curr.__key]
      };
      return prev;
    }, {});
  }

  return {
    generateTaskJobProcess: generateTaskJobProcess
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-chart.service?angular=service&type=script":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker-chart.service?angular=service&type=script ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** mock **/

/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, $state, ajax, growl, psStore, cms, cms2, psRouter, psBtnClick) {
  var DicMap = {};

  function _findValue(data, attr, debug) {
    var obj = cms2.findValue(data, attr) || {},
        value = obj.value,
        path = obj.path;
    var val = changeValue(attr, value);

    if (path && debug == true) {
      console.warn("Debug find value from path = \"".concat(path, "\""));
    }

    return val;
  }

  function attr(data, atrs) {
    var arr = atrs.split(/\/|\./g),
        item;

    while (item = arr.shift()) {
      if (data) {
        data = data[item];
      } else {
        return;
      }
    }

    return data;
  }

  function _createText(name) {
    if (!Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
      throw new Error("name has to be a array");
    }

    return {
      key: name[0],
      value: name[1]
    };
  }

  function _createDicAttr(name) {
    if (!Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
      throw new Error("name has to be a array");
    }

    name[2] = _findValue(this, name[2]);
    return _createDic(name);
  }

  function _createDic(name) {
    if (!Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
      throw new Error("name has to be a array");
    }

    var obj = attr(DicMap, name[1]);

    if (obj == null) {
      return {
        key: name[0],
        value: "-"
      };
    }

    var map = obj.reduce(function (a, b) {
      a[b.valueCode] = b;
      return a;
    }, {});
    return {
      key: name[0],
      value: map[name[2]] ? map[name[2]].label : "-"
    };
  }

  function _createAttr(name) {
    if (!Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
      throw new Error("name has to be a array");
    }

    return {
      key: name[0],
      value: attr(this, name[1]) || "-"
    };
  }

  function _findAttr(name, debug) {
    if (!Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
      throw new Error("name has to be a array");
    }

    var value = _findValue(this, name[1], debug);

    return {
      key: name[0],
      value: value == null ? "-" : changeValue(name[0], value)
    };
  }

  function isTimeLike(str) {
    return new RegExp("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{3}\\+\\d{4}", "g").test(str);
  }

  function changeValue(name, val) {
    if (isTimeLike(val)) {
      return Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["dateparser"])(val).getDateString("yyyy-MM-dd,hh:mm:ss");
    }

    return cms2.getExplainerFromDiction(name)(val);
  }

  function _createTitle(title) {
    return {
      type: "title",
      value: title,
      style: {
        color: "#2997bb"
      }
    };
  }

  function _createButton(arr, target) {
    var _this = this;

    var name = arr[0],
        handler = arr[1],
        title = arr[2],
        fn = psBtnClick[handler];
    return {
      type: "button",
      cls: "btn btn-primary btn-sm",
      label: name,
      click: function click() {
        if (fn) {
          fn.call(target || _this, name, title);
        } else {}
      }
    };
  }

  var TrackerNode =
  /*#__PURE__*/
  function () {
    function TrackerNode(d, p, n) {
      _classCallCheck(this, TrackerNode);

      Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, d);
      this._data = d;
      this.prev = p;
      this.next = n;
    }

    _createClass(TrackerNode, [{
      key: "createAttr",
      value: function createAttr() {
        return _createAttr.apply(this, arguments);
      }
    }, {
      key: "getAlertSeverity",
      value: function getAlertSeverity(n) {
        return ["正常", "正常", "注意", "警告", "告警"][n] || "空";
      }
    }, {
      key: "findAttr",
      value: function findAttr() {
        return _findAttr.apply(this, arguments);
      }
    }, {
      key: "createTitle",
      value: function createTitle() {
        return _createTitle.apply(this, arguments);
      }
    }, {
      key: "createGroup",
      value: function createGroup(title, attr, callback) {
        var arr = this.findValue(attr) || [];
        return arr.map(function (d, i) {
          var n = arr[i + 1] || null,
              p = arr[i - 1] || null,
              nd = new TrackerNode(d, p, n);
          return {
            title: i == 0 ? title : "",
            icon: i == 0 ? true : false,
            time: nd.findValue("arisingTime"),
            data: callback && callback.call(nd, nd) || []
          };
        });
      }
    }, {
      key: "createButton",
      value: function createButton() {
        return _createButton.apply(this, arguments);
      }
    }, {
      key: "findValue",
      value: function findValue() {
        return _findValue.apply(this, [this].concat(Array.prototype.slice.call(arguments)));
      }
    }, {
      key: "createText",
      value: function createText() {
        return _createText.apply(this, arguments);
      }
    }, {
      key: "createDic",
      value: function createDic() {
        return _createDic.apply(this, arguments);
      }
    }, {
      key: "createDicAttr",
      value: function createDicAttr() {
        return _createDicAttr.apply(this, arguments);
      }
    }, {
      key: "hasAttr",
      value: function hasAttr(attr) {
        return typeof this.findValue(attr) != "undefined";
      }
    }, {
      key: "isFirstTimeGenerated",
      value: function isFirstTimeGenerated() {
        return !this.hasRepeat;
      }
    }, {
      key: "getEvaluate",
      value: function getEvaluate() {
        var alertEvaluateInfoList = this.findValue("alertEvaluateInfoList") || [];
        alertEvaluateInfoList = alertEvaluateInfoList[0] || {};
        var evaluateCheckboxlist = alertEvaluateInfoList.evaluateCheckboxlist;
        return ["空", "正确", "不正确"][evaluateCheckboxlist] || "空";
      }
    }, {
      key: "getDealReason",
      value: function getDealReason() {
        var complexDealType = _findValue(this, "dealType"),
            tallyCheckboxlist = _findValue(this, "tallyCheckboxlist"),
            fd = tallyCheckboxlist.find(function (d) {
          return d.id == complexDealType;
        });

        return fd ? fd.label : "-";
      }
    }, {
      key: "getHandlerType",
      value: function getHandlerType() {
        var dealType = _findValue(this, "dealType");

        return ["暂不处理", "自行处理", "发起委托"][dealType - 1];
      }
    }, {
      key: "getAlertState",
      value: function getAlertState() {}
    }, {
      key: "getTaskJob",
      value: function getTaskJob() {
        /*  任务分类; */
        return cms2.getTaskJob(this.getAppSource());
      }
    }, {
      key: "getAppSource",
      value: function getAppSource() {
        /*  任务来源; */
        var variables = this.ticketTask.variables || {};
        return cms2.getAppSource(variables);
      }
    }, {
      key: "createArtificalAlertHead",
      value: function createArtificalAlertHead(planName) {
        var alertItemList = this.findValue("alertItemList"),
            onlineRuleId = this.findValue("onlineRuleId");

        if (alertItemList == null || !alertItemList.length > 0) {
          return [];
        }

        var rs = [];
        [].push.apply(rs, this.createGroup("告警信息", "alertItemList", function (n) {
          return [//n.createAttr(["告警类型", "alertTitle"]),
          n.createDic(["报警级别", "alertSeverity", n.severity]), n.createDic(["报警来源", "appName", n.appName]), n.createAttr(["告警描述", "alertTitle"])];
        }));
        [].push.call(rs, {
          title: "智能决策",
          icon: "fa fa-user fa-fw fa-circle-o bg-green",
          time: this.findValue("executeTime"),
          data: [this.findAttr(["异常名称", "taskMessage"])]
        }, {
          title: "智能方案",
          icon: "fa fa-user fa-fw fa-circle-o bg-green",
          time: this.findValue("executeTime"),
          data: [this.createText(["解决方案", planName || "状态维护"]), this.findAttr(["标准项目编号", "standardProjectId"]), this.findAttr(["标准项目名称", "standardProjectName"]), this.createButton(["查看规则", onlineRuleId ? "checkOnlineRule" : "checkOnlineRule", "查看规则"])]
        });
        return rs;
      }
    }, {
      key: "createAlertAhead",
      value: function createAlertAhead() {
        var _this2 = this;

        var rs = [],
            alertItemList = this.findValue("alertItemList"),
            onlineRuleId = this.findValue("onlineRuleId");

        if (alertItemList) {
          rs.push({
            title: "报警产生",
            icon: "fa fa-user fa-fw fa-circle-o bg-green",
            time: this.findValue("alertArisingTime"),
            data: alertItemList.map(function (d) {
              return [_this2.createDic(["报警级别", "alertSeverity", d.severity]), _this2.createDic(["报警来源", "appName", d.appName]), _this2.createText(["报警描述", d.alertTitle])];
            }).reduce(function (a, b) {
              return a.concat(b);
            }, [])
          });
        } else if (onlineRuleId) {
          var onlineRule = this.onlineRule;
          var itemList = onlineRule ? onlineRule["itemList"] : [];
          itemList = itemList.map(function (_ref) {
            var kpiThreshold = _ref.kpiThreshold;
            return kpiThreshold;
          });

          if (itemList.length > 0) {
            rs.push({
              title: "报警产生",
              icon: "fa fa-user fa-fw fa-circle-o bg-green",
              time: this.findValue("alertArisingTime"),
              data: itemList.map(function (d) {
                return [_this2.createText(["报警类型", d.title]), _this2.createDic(["报警级别", "alertSeverity", d.severity]), _this2.createText(["报警来源", d.instanceName]), _this2.createText(["报警描述", d.desc])];
              }).reduce(function (a, b) {
                return a.concat(b);
              }, [])
            });
          }
        }

        return rs;
      }
    }]);

    return TrackerNode;
  }();

  function psTrackerChart(trackerList) {
    var PsTrackerChart = function PsTrackerChart(trackerList) {
      var _this3 = this;

      _classCallCheck(this, PsTrackerChart);

      this._loaded = psStore.get("getAllDicts").then(function (d) {
        var len = trackerList.length;
        DicMap = d.reduce(function (a, b) {
          a[b.dictCode] = a[b.dictCode] || [];
          a[b.dictCode].push(b);
          return a;
        }, {}), trackerList = trackerList.filter(function (_ref2) {
          var render = _ref2.render;
          return render;
        }).map(function (_ref3, i) {
          var render = _ref3.render,
              data = _ref3.data,
              prev = _ref3.prev,
              next = _ref3.next;
          var dt = new TrackerNode(data, prev, next);
          dt.hasRepeat = trackerList.slice(0, i).some(function (tracker) {
            return tracker.data.ticketTask.taskConfigName == data.ticketTask.taskConfigName;
          });
          return {
            render: render,
            node: dt
          };
        });
        _this3.list = trackerList.map(function (_ref4, i) {
          var node = _ref4.node,
              render = _ref4.render;
          node.first = trackerList[0];
          node.next = trackerList[i + 1] || null;
          node.prev = trackerList[i - 1] || null;
          node.last = trackerList[trackerList.length - 1];
          node.$data = render.apply(node, [function createAttr() {
            return _createAttr.apply(node, arguments);
          }, function findAttr() {
            return _findAttr.apply(node, arguments);
          }, function createTitle() {
            return _createTitle.apply(node, arguments);
          }, function createButton() {
            return _createButton.apply(node, arguments);
          }, function findValue() {
            return _findValue.apply(node, [node].concat(Array.prototype.slice.call(arguments)));
          }, function createText() {
            return _createText.apply(node, arguments);
          }, function createDic() {
            return _createDic.apply(node, arguments);
          }, function createDicAttr() {
            return _createDicAttr.apply(node, arguments);
          }]).map(function (d) {
            d._data = node;
            return d;
          });
          return node.$data;
        }).reduce(function (a, b) {
          b = !Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(b) ? [b] : b;
          return a.concat(b);
        }, []);
      });
    };

    return new PsTrackerChart(trackerList);
  }

  return psTrackerChart;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-creator.service?angular=service&type=script":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker-creator.service?angular=service&type=script ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** mock **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q) {
  function psTrackerCreator(factory) {
    var PsTrackerCreator =
    /*#__PURE__*/
    function () {
      function PsTrackerCreator() {
        _classCallCheck(this, PsTrackerCreator);
      }

      _createClass(PsTrackerCreator, [{
        key: "intelligenceFixing",
        value: function intelligenceFixing() {
          function expression(createAttr, findAttr, createTitle, createButton, findValue) {
            /** 智能检修 **/
            return [{
              title: "智能检修",
              icon: "fa fa-user fa-fw fa-circle-o bg-green",
              time: findValue("executeTime"),
              data: [findAttr(["工单号", "ticketNo"]), findAttr(["任务分类", "taskCategory"]), findAttr(["任务来源", "appName"]), findAttr(["处理人", "handlerName"]), createButton(["检修方案", "fixingPlan"]), createButton(["检修实绩", "fixingResult"])]
            }];
          }
        }
      }, {
        key: "statusKeeping",
        value: function statusKeeping() {
          function expression(createAttr, findAttr, createTitle, createButton, findValue) {
            /** 节点模版 **/
            return [{
              title: "状态维护",
              icon: "fa fa-user bg-aqua",
              time: findValue("executeTime"),
              data: [findAttr(["工单号", "ticketNo"]), findAttr(["任务分类", "message"]), findAttr(["任务来源", "appName"]), findAttr(["维护项目编号", "standardNo"]), findAttr(["维护项目名称", "standardName"]), findAttr(["实施依据", "maintainBasis"]), findAttr(["处理人", "ticket.handlerName"]), createButton(["维护实绩", "keepResult"])]
            }, {
              title: "智能决策",
              icon: "fa fa-user bg-aqua",
              time: findValue("executeTime"),
              data: [findAttr(["异常名称", "maintainBasis"])]
            }, {
              title: "智能方案",
              icon: "fa fa-user bg-aqua",
              time: findValue("executeTime"),
              data: [findAttr(["解决方案", "maintainBasis"]), findAttr(["维护项目编号", "standardNo"]), findAttr(["维护项目名称", "standardName"]), createButton(["规则详情", "keepResult"])]
            }];
          }
        }
      }]);

      return PsTrackerCreator;
    }();
  }

  return psTrackerCreator;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker.service?angular=service&type=script":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker.service?angular=service&type=script ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** mock **/

/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, $state, ajax, growl, psStore, cms, psRouter, psBtnClick) {
  function isNotEmpty(d) {
    if (typeof d == "number") {
      return true;
    }

    return !!d;
  }

  function isEmpty(d) {
    return typeof d == "undefined" || d === null || d === "";
  }

  function resolve(d) {
    var defer = q.defer();
    defer.resolve(d);
    return defer.promise;
  }

  function attr(cell, attr, val) {
    var attrs = attr.split("/").filter(isNotEmpty),
        item;

    if (typeof val === "undefined") {
      rs = cell;

      while ((item = attrs.shift()) && rs) {
        rs = rs[item];
      }

      return rs;
    }

    var last = attrs.pop(),
        rs = cell;

    while ((item = attrs.shift()) && rs) {
      rs = rs[item];
    }

    if (_typeof(rs) === "object") {
      rs[last] = val;
    }
  }

  function findValue(data, attr) {
    var LoopItem =
    /*#__PURE__*/
    function () {
      function LoopItem(data, parents, path) {
        _classCallCheck(this, LoopItem);

        this.data = data;
        this.parents = parents || [];
        this.path = path || [];
      }

      _createClass(LoopItem, [{
        key: "hasParent",
        value: function hasParent(parent) {
          return this.parents.some(function (p) {
            return p == parent;
          });
        }
      }]);

      return LoopItem;
    }();

    var queue = [new LoopItem(data)],
        item;

    while (item = queue.shift()) {
      var _item = item,
          _data = _item.data,
          parents = _item.parents,
          path = _item.path;

      if (_data.hasOwnProperty(attr)) {
        return {
          value: _data[attr],
          path: path.concat([attr]).join("/")
        };
      }

      for (var i in _data) {
        if (_data.hasOwnProperty(i) && Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isObject"])(_data[i]) && !item.hasParent(_data[i])) {
          queue.push(new LoopItem(_data[i], parents.concat([_data]), path.concat([i])));
        }
      }
    }
  }

  function tracker(trackersListData) {
    var _attrsMap = new Map(),
        target = cms(undefined, rootScope);

    var TrackersList = function TrackersList(trackersList, createTrust) {
      var _this = this;

      _classCallCheck(this, TrackersList);

      trackersList[1].createTrust = createTrust;
      this._normalTrackersMap = new Map();
      this._firstTracker = new AlertTracker(trackersList[1]);

      var checkName = function checkName(name) {
        var i = "";

        while (_this._normalTrackersMap.has(name + "" + i)) {
          i = i - 0 + 1;
        }

        return name + "" + i;
      };

      this._normalTrackers = trackersList.filter(function (_ref) {
        var logType = _ref.logType;
        return logType === "userTask";
      }).map(function (tracker, i) {
        tracker.createTrust = createTrust;
        var d = new NormalTracker(tracker, i);

        _this._normalTrackersMap.set(checkName(d.__taskConfigName), d);

        return d;
      });
    };

    var NormalTracker =
    /*#__PURE__*/
    function () {
      function NormalTracker(data, i) {
        var _this2 = this;

        _classCallCheck(this, NormalTracker);

        this._data = data;
        this._index = i;
        this.createTrust = data.createTrust;
        this._directive = this.getDirective();
        this._attrsMap = _attrsMap;
        this.setTicketTask();
        this.setTicketTaskVariables();
        this.setTicketTaskValues();
        this.setTicketValues();
        /** 拼接组合一些基本属性 **/

        this.setTaskConfigName();
        this.setTicketNo();
        this.setTime();
        this.setSpecailName();
        this.setAlertTitle();
        this.setTaskCategory();
        this.setHandlerName();
        this.setMultipleConclusion();
        this.setCessingScheme();
        this.setStandardProjectId();
        this.setStandardProjectName();
        this.setRecallExplain();
        this.setTheCreateUserName();
        this.setTicketTitle();
        this.setDealType();
        this.setTallyCheck();
        this.setKeyAttrs();
        this.__dicsloaded__ = psStore.get("getAllDicts").then(function (dics) {
          _this2.setAppName(dics);

          _this2.setStatusGrades(dics);

          _this2.setSeverity(dics);

          return resolve(dics);
        })["catch"](function (e) {
          var dics = {};
          console.warn(e);

          _this2.setAppName(dics);

          _this2.setStatusGrades(dics);

          _this2.setSeverity(dics);

          return resolve(dics);
        });
      }

      _createClass(NormalTracker, [{
        key: "getDirective",
        value: function getDirective() {
          var data = this._data;
          var category = attr(data, "/ticketTask/variables/ticket/category");
          var tickeTaskStatus = attr(data, "/ticketTask/variables/ticket/values/tickeTaskStatus");

          if (category == 200) {
            this.setIcon("fa fa-user bg-aqua");
          } else {
            this.setIcon("fa fa-user bg-aqua bg-orange");
          }

          this.__category = category;
          this.__tickeTaskStatus = tickeTaskStatus;
          return "process-".concat(tickeTaskStatus);
        }
      }, {
        key: "setTaskConfigName",
        value: function setTaskConfigName() {
          var taskConfigName = attr(this._data, "ticketTask/taskConfigName");
          this.__taskConfigName = taskConfigName;
        }
      }, {
        key: "setTicketTask",
        value: function setTicketTask() {
          var ticketTask = attr(this._data, "ticketTask");
          this._ticketTask = ticketTask;
        }
      }, {
        key: "setTicketTaskValues",
        value: function setTicketTaskValues() {
          var ticketTaskValues = attr(this._data, "ticketTask/values");
          this._ticketTaskValues = ticketTaskValues || {};
        }
      }, {
        key: "setTicketTaskVariables",
        value: function setTicketTaskVariables() {
          var ticketTaskVariables = attr(this._data, "ticketTask/variables");
          this._ticketTaskVariables = ticketTaskVariables || {};
        }
      }, {
        key: "setTicketValues",
        value: function setTicketValues() {
          var ticketValues = attr(this._data, "ticketTask/variables/ticket/values");
          this._ticketValues = ticketValues;
        }
      }, {
        key: "setKeyAttrs",
        value: function setKeyAttrs() {
          var creatorName = attr(this._data, "ticketTask/variables/ticket/creatorName");
          var category = attr(this._data, "ticketTask/variables/ticket/category");
          this._creatorName = creatorName;
          this._category = category;
        }
      }, {
        key: "setAlertTitle",
        value: function setAlertTitle() {
          /** 报警描述 [ ticketTitle ] **/
          var alertTitle = attr(this._data, "ticketTask/variables/ticket/values/alertTitle");

          this._attrsMap.set("报警描述", alertTitle);

          this._alertTitle = alertTitle;
        }
      }, {
        key: "setTallyEvaluateCheckboxlist",
        value: function setTallyEvaluateCheckboxlist() {
          /** 评价等级 [ tallyEvaluateCheckboxlist ] **/
          var tallyEvaluateCheckboxlist = attr(this._data, "ticketTask/values/tallyEvaluateCheckboxlist");
          tallyEvaluateCheckboxlist = tallyEvaluateCheckboxlist == 0 ? "通过" : tallyEvaluateCheckboxlist == 0 ? "基本通过" : "不通过";

          this._attrsMap.set("评价等级", tallyEvaluateCheckboxlist);

          this._tallyEvaluateCheckboxlist = tallyEvaluateCheckboxlist;
        }
      }, {
        key: "setTallyCheck",
        value: function setTallyCheck() {
          /** 验收结果 [ _tallyCheck ] **/
          var tallyCheck = attr(this._data, "ticketTask/variables/tallyCheck") == "0" ? "通过" : "不通过";
          var isAccord = attr(this._data, "ticketTask/variables/isAccord") == "1" ? "按时完工" : "没按时完工";
          var isQuality = attr(this._data, "ticketTask/variables/isQuality") == "1" ? "符合质量标准" : "不符合质量标准";

          this._attrsMap.set("验收结果", "".concat(tallyCheck, "(").concat(isAccord, ",").concat(isQuality, ")"));

          this._tallyCheck = "".concat(tallyCheck, "(").concat(isAccord, ",").concat(isQuality, ")");
        }
      }, {
        key: "setTicketTitle",
        value: function setTicketTitle() {
          /** 异常描述 [ _ticketTitle ] **/
          var ticketTitle = attr(this._data, "ticketTask/ticketTitle");

          this._attrsMap.set("异常描述", ticketTitle);

          this._ticketTitle = ticketTitle;
        }
      }, {
        key: "setTaskCategory",
        value: function setTaskCategory() {
          /** 任务分类 [ _taskCategory ] **/
          var taskCategory = "综合处理";

          this._attrsMap.set("任务分类", taskCategory);

          this._taskCategory = taskCategory;
        }
      }, {
        key: "setTheCreateUserName",
        value: function setTheCreateUserName() {
          /** 任务来源 [ _theCreateUserName ] **/
          var theCreateUserName = attr(this._data, "ticketTask/variables/theCreateUserName");

          this._attrsMap.set("任务来源", theCreateUserName);

          this._theCreateUserName = theCreateUserName;
        }
      }, {
        key: "setRecallExplain",
        value: function setRecallExplain() {
          /** 退回说明 [ recallExplain ] **/
          var recallExplain = attr(this._data, "ticketTask/values/recallExplain");

          this._attrsMap.set("退回说明", recallExplain);

          this._recallExplain = recallExplain;
        }
      }, {
        key: "setTicketNo",
        value: function setTicketNo() {
          /** 工单号 [ ticketNo ] **/
          var ticketNo = attr(this._data, "ticketNo");

          this._attrsMap.set("工单号", ticketNo);

          this._ticketNo = ticketNo;
        }
      }, {
        key: "setRecallExplain",
        value: function setRecallExplain() {
          /** 退回说明 [_recallExplain] **/
          var recallExplain = attr(this._data, "ticketTask/values/recallExplain");

          this._attrsMap.set("退回说明", recallExplain);

          this._recallExplain = recallExplain;
        }
      }, {
        key: "setHandlerName",
        value: function setHandlerName() {
          /** 委托人 [ _handlerName ] **/
          var senderName = attr(this._data, "ticketTask/senderName");

          this._attrsMap.set("委托人", senderName);

          this._senderName = senderName;
        }
      }, {
        key: "setHandlerName",
        value: function setHandlerName() {
          /** 处理人 [ _handlerName ] **/
          var handlerName = attr(this._data, "ticketTask/handlerName");

          this._attrsMap.set("处理人", handlerName);

          this._attrsMap.set("检修人", handlerName);

          this._attrsMap.set("诊断人", handlerName);

          this._handlerName = handlerName;
        }
      }, {
        key: "setMultipleConclusion",
        value: function setMultipleConclusion() {
          /** 综合判断结论 [ _multipleConclusion ] **/
          var multipleConclusion = attr(this._data, "ticketTask/variables/multipleConclusion");

          this._attrsMap.set("综合判断结论", multipleConclusion);

          this._multipleConclusion = multipleConclusion;
        }
      }, {
        key: "setCessingScheme",
        value: function setCessingScheme() {
          /** 处理方案建议 [ _cessingScheme ] **/
          var cessingScheme = attr(this._data, "ticketTask/variables/cessingScheme");

          this._attrsMap.set("处理方案建议", cessingScheme);

          this._cessingScheme = cessingScheme;
        }
      }, {
        key: "setStandardProjectId",
        value: function setStandardProjectId() {
          /** 标准项目编号 [ _standardProjectId ] **/
          var standardProjectId = attr(this._data, "ticketTask/variables/ticket/values/standardProjectId");

          this._attrsMap.set("标准项目编号", standardProjectId);

          this._standardProjectId = standardProjectId;
        }
      }, {
        key: "setStandardProjectName",
        value: function setStandardProjectName() {
          /** 工程项目名称 [ _standardProjectName ] **/
          var standardProjectName = attr(this._data, "ticketTask/variables/ticket/values/standardProjectName");

          this._attrsMap.set("工程项目名称", standardProjectName);

          this._standardProjectName = standardProjectName;
        }
      }, {
        key: "setDealType",
        value: function setDealType() {
          /** 处理方式 [ _dealType ] **/
          function getDealType(dealType) {
            var obj = {
              "1": "暂不处理",
              "2": "自行处理",
              "3": "发起委托"
            };
            return obj[dealType];
          }

          var dealType = attr(this._data, "ticketTask/variables/dealType");

          this._attrsMap.set("工程项目名称", getDealType(dealType));

          this.__dealType = this._dealType = dealType;
        }
      }, {
        key: "setStatusGrades",
        value: function setStatusGrades(dics) {
          /** 综合状态等级 [ _statusGrade ] **/
          var statusGradesList = dics["statusGrade"] || [];
          var statusGradesMap = statusGradesList.reduce(function (a, b) {
            a.set(b.valueCode, b.label);
            return a;
          }, new Map());
          var statusGrade = attr(this._data, "ticketTask/variables/statusGrade");
          this.statusGrade = statusGrade;

          this._attrsMap.set("综合状态等级", statusGrade);

          this._statusGrade = statusGradesMap.get(statusGrade + "");
        }
      }, {
        key: "setSeverity",
        value: function setSeverity(dics) {
          var alertSeverityList = dics["alertSeverity"] || [];
          var alertSeverity = alertSeverityList.reduce(function (a, b) {
            a.set(b.valueCode, b.label);
            return a;
          }, new Map());
          var severity = attr(this._data, "ticketTask/variables/ticket/values/severity");
          this.severity = severity;
          this._severity = alertSeverity.get(severity + "");
        }
      }, {
        key: "setTime",
        value: function setTime() {
          var alertArisingTime = attr(this._data, "ticketTask/variables/ticket/values/alertArisingTime");
          var sendTime = attr(this._data, "ticketTask/sendTime");
          alertArisingTime = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["dateparser"])(alertArisingTime);
          sendTime = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["dateparser"])(sendTime);
          this._alertArisingTime = alertArisingTime.getDateString("yyyy-MM-dd,hh:mm:ss");
          this._sendTime = sendTime.getDateString("yyyy-MM-dd,hh:mm:ss");
        }
      }, {
        key: "setSpecailName",
        value: function setSpecailName() {
          /** 报警类型 [ _specialtyName ] **/
          var specialtyName = attr(this._data, "ticketTask/variables/alertItemList/0/specialtyName");

          this._attrsMap.set("报警类型", specialtyName);

          this._specialtyName = specialtyName || "无";
        }
      }, {
        key: "setAppName",
        value: function setAppName(dics) {
          /** 告警来源/任务来源 [ _appName ] **/
          var appNameList = dics["appName"] || [];
          var appName = attr(this._data, "ticketTask/variables/ticket/values/appName");
          var appNameMap = appNameList.reduce(function (a, b) {
            a.set(b.valueCode, b.label);
            return a;
          }, new Map());

          this._attrsMap.set("告警来源", appNameMap.get(appName + ""));

          this._attrsMap.set("任务来源", appNameMap.get(appName + ""));

          this._appName = appNameMap.get(appName + "");
        }
      }, {
        key: "setIcon",
        value: function setIcon(icon) {
          this._icon = icon;
        }
      }, {
        key: "mergetValues",
        value: function mergetValues() {
          var _this$_ticketTaskVari = this._ticketTaskVariables,
              devName = _this$_ticketTaskVari.devName,
              deviceCode = _this$_ticketTaskVari.deviceCode;
          var _this$_data = this._data,
              id = _this$_data.id,
              ticketNo = _this$_data.ticketNo;
          var values = [devName, deviceCode, id, ticketNo].join(",");
          return values;
        }
      }, {
        key: "createButton",
        value: function createButton(text, handler) {
          var _this3 = this;

          var fn = psBtnClick[handler];
          return {
            type: "button",
            cls: "btn btn-primary btn-sm",
            label: text,
            click: function click() {
              if (fn) {
                fn.call(_this3, text);
              } else {}
            }
          };
        }
      }, {
        key: "createTitle",
        value: function createTitle(title) {
          return {
            type: "title",
            value: title,
            style: {
              color: "#2997bb"
            }
          };
        }
      }, {
        key: "createAttr",
        value: function createAttr(name) {
          if (typeof name == "string") {
            return {
              key: name,
              value: _attrsMap.get(name)
            };
          }

          if (Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["isArray"])(name)) {
            return {
              key: name[0],
              value: name[1]
            };
          }
        }
      }]);

      return NormalTracker;
    }();

    var AlertTracker =
    /*#__PURE__*/
    function (_NormalTracker) {
      _inherits(AlertTracker, _NormalTracker);

      function AlertTracker(data) {
        _classCallCheck(this, AlertTracker);

        return _possibleConstructorReturn(this, _getPrototypeOf(AlertTracker).call(this, data, 1));
      }

      _createClass(AlertTracker, [{
        key: "getDirective",
        value: function getDirective() {
          var data = this._data;
          var category = attr(data, "/ticketTask/variables/ticket/category");

          if (isEmpty(category)) {
            console.warn("category[ ".concat(category, " ] this is not a valid process."));
          }

          return "process-category-dir";
        }
      }]);

      return AlertTracker;
    }(NormalTracker);

    return new TrackersList(trackersListData);
  }

  Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(tracker, {
    getDealType: function getDealType(dealType) {
      var dealTypeObj = {
        "1": "暂不处理",
        "2": "自行处理",
        "3": "发起委托"
      };
      return dealTypeObj[dealType];
    },
    noNodeFound: function noNodeFound(tracker) {
      var _ticketNo = tracker._ticketNo;
      var data = tracker._data;
      var category = attr(data, "/ticketTask/variables/ticket/category");
      var tickeTaskStatus = attr(data, "/ticketTask/variables/ticket/values/tickeTaskStatus");
      return [{
        time: "-",
        icon: "glyphicon glyphicon-remove bg-red",
        title: "Error : \u4EFB\u52A1\u8282\u70B9 [ ".concat(_ticketNo, " ] \u6CA1\u627E\u5230\u5BF9\u5E94\u7684\u5904\u7406\u4FE1\u606F"),
        data: [{
          key: "ticketNo",
          value: _ticketNo
        }, {
          key: "category",
          value: category
        }, {
          key: "tickeTaskStatus",
          value: tickeTaskStatus
        }, {
          key: "解决方法",
          value: "\u6253\u5F00ps-baogang/directives/tracker/process-".concat(tickeTaskStatus, ".directive\u8C03\u8BD5\u5BF9\u5E94\u4FE1\u606F\u3002")
        }]
      }];
    },
    renderGenerateAlert: function renderGenerateAlert(tracker) {
      var _specialtyName = tracker._specialtyName,
          _appName = tracker._appName,
          _alertArisingTime = tracker._alertArisingTime,
          _severity = tracker._severity,
          _alertTitle = tracker._alertTitle;
      return {
        time: _alertArisingTime,
        icon: "fa fa-user fa-fw fa-circle-o bg-green",
        title: "报警产生",
        data: [{
          key: "报警类型",
          value: _specialtyName ? _specialtyName : "无"
        }, {
          key: "报警级别",
          value: _severity
        }, {
          key: "报警描述",
          value: _alertTitle
        }, {
          key: "报警来源",
          value: _appName,
          style: {
            color: "red"
          }
        }]
      };
    }
  });
  return tracker;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tree-data.service?angular=service&type=script":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tree-data.service?angular=service&type=script ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** mainCtrlRm" **/
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, $state, ajax, resourceUIService, kpiDataService, psWebsocket, psConfig) {
  var _this = this;

  var map,
      deviceMap,
      root,
      timer,
      observer,
      time = new Date(),
      isArray = isType("Array"),
      userdefer = q.defer(),
      getId = function getId(d) {
    return d.id;
  },
      webSocket,
      alertStatusPromise,
      inclosedMap,
      measureLocationCached = createCached(),
      alertsMap = createCached(),
      structrureDone = resourceUIService.deviceLoader().then(function (devices) {
    return incloseDeviceLoader().then(function (inclosed) {
      inclosedMap = inclosed.reduce(function (a, b) {
        a[b.id] = true;
        return a;
      }, {}); //

      return getResByModelIds([300, 301, 302]).then(function (d) {
        var remapedDevice = remap(devices),
            resources = d.reduce(collapse, remapedDevice);
        map = getMap(resources);
        deviceMap = getDeviceMap(remapedDevice);
        root = resources.filter(function (r) {
          if (r.modelId < 1000 || inclosedMap[r.id]) {
            return true;
          }
        }).reduce(function (a, b) {
          var fd = findParentDevice(b);
          fd ? insertNode(fd.children = fd.children || [], b, insertMethod) : a.push(b);
          return a;
        }, []);
        return success(root);
      });
    });
  }),
      _loopGetState,
      startLoop = function startLoop() {
    var recursive = function recursive(callback) {
      _loopGetState = function loopGetState() {
        getAlerts(keys(map)).then(function (alerts) {
          alerts.forEach(function (alert) {
            callback && callback.call(_this, alert);
          });
          timer = setTimeout(function () {
            _loopGetState && _loopGetState.call(_this);
          }, 6000);
        });
      };

      _loopGetState && _loopGetState.call(_this);
    };

    recursive(function (_ref) {
      var nodeId = _ref.nodeId,
          value = _ref.value;
      observer.emit(nodeId, value);
    });
  },
      endLoop = function endLoop() {
    _loopGetState = null;
    clearTimeout(timer);
    timer = null;
  },
      webSocketStarted = structrureDone.then(function (root) {
    var nodeIds = keys(map);
    webSocket = psWebsocket("treenavigate");
    webSocket.send(nodeIds, [999999]);
    return success(webSocket);
  });

  function incloseDeviceLoader() {
    return userdefer.promise.then(function (user) {
      var params = {},
          currentRoleID = user.currentRoleID || 0,
          roleFunctionCodeMap = user.roleFunctionCodeMap || {},
          menuitems = roleFunctionCodeMap[currentRoleID] || [],
          vals = function (menuitems) {
        if (menuitems.indexOf("F08_01") !== -1) return {};
        if (menuitems.indexOf("F08_03") !== -1) return {
          diagnosticType: "90"
        };
        if (menuitems.indexOf("F08_06") !== -1) return {
          diagnosticType: "280"
        };
        if (menuitems.indexOf("F08_02") !== -1) return {
          diagnosticType: {
            NOT_IN: ["90", "280"]
          }
        };
      }(menuitems);

      params.values = vals;
      return ajax.post("resourceUIService.getDevicesByCondition?includeFields=id", params);
    });
  }

  function isType(type) {
    return function (target) {
      return {}.toString.call(target) === "[object ".concat(type, "]");
    };
  }

  function str2json(str) {
    var rs = null;

    try {
      rs = JSON.parse(str);
    } catch (e) {
      console.warn(e);
      return rs;
    }

    return rs;
  }

  function success(d) {
    var defer = q.defer();
    defer.resolve(d);
    return defer.promise;
  }

  function failure(d) {
    var defer = q.defer();
    defer.reject(d);
    return defer.promise;
  }

  function eachProp(d, callback) {
    for (var i in d) {
      callback(d[i], i);
    }
  }

  function getAlerts(nids) {
    var defer = q.defer(),
        time = new Date(),
        param = {
      nodeIds: nids.map(function (d) {
        return d - 0;
      }),
      kpiCodes: [999999]
    };
    kpiDataService.getKpiValList(param, function (d) {
      if (d.code + "" === "0") {
        d.data.forEach(function (_ref2) {
          var nodeId = _ref2.nodeId,
              value = _ref2.value;
          alertsMap(nodeId, value);
        });
        defer.resolve(d.data);
      } else {
        defer.reject(d);
      }
    }, "includeFields=nodeId,value");
    return defer.promise;
  }

  function createCached() {
    var keys = [];

    var cached = function cached(key, value) {
      if (typeof value === "undefined") {
        return cached["_" + key];
      } else {
        keys.push(key);
        cached["_" + key] = value;
      }
    };

    cached.keys = function (d) {
      return keys;
    };

    return cached;
  }

  function findParentDevice(resource) {
    if (typeof resource == "undefined" || resource === null) {
      console.warn("cannot find parent node for null or undefined");
      return;
    }

    var item,
        extId = resource.extId,
        parentID = resource.parentID;
    extId = extId ? extId.split("/") : [];

    while (extId.pop()) {
      item = deviceMap["/" + extId.join("/")];

      if (item && item.parentID == parentID) {
        return item;
      }
    }

    return map[resource.parentID];
  }

  function getResourceByModelId(modelId) {
    var defer = q.defer(),
        time = new Date(),
        query = "includeFields=" + ["parentID", "label", "id", "values.number", "domainPath"].join(","); //

    resourceUIService.getResourceByModelId(modelId, function (d) {
      if (d.code + "" === "0") {
        //
        defer.resolve(d.data.map(function (d) {
          d.modelId = modelId;
          return d;
        }) || []);
      } else {
        defer.reject(d);
      }
    }, query);
    return defer.promise;
  }

  function getAttrsByModelId(modelId, callback) {
    var defer = q.defer();
    rootScope.cacheAllData.on("getAllAttrs", function () {
      resourceUIService.modelLoader().then(function (models) {
        var attrs = models[modelId].attrs;
        defer.resolve(attrs);
      });
    });
    return defer.promise;
  }

  function getResourceByIds(ids) {
    return structrureDone.then(function (root) {
      var getMapData = function getMapData(id) {
        return map[id] && map[id].getPromise();
      },
          cached = ids.filter(getMapData).map(getMapData),
          restIds = ids.filter(function (id) {
        return !(map[id] && map[id].getPromise());
      }),
          prms = createPromise(restIds);

      return Promise.all(cached.concat(restIds.map(function (id) {
        map[id] ? map[id].setPromise(prms.then(function (ids) {
          return success(map[id].getData());
        })) : null;
        return map[id] && map[id].getPromise();
      })));

      function createPromise(ids) {
        var defer = q.defer();
        resourceUIService.getResourceByIds(ids, function (d) {
          var rs = [];
          eachProp(d, function (elem, attr) {
            if (map[attr] == null) {
              console.warn("".concat(attr, " is not set!!"));
            } else {
              map[attr].setData(elem);
            }

            rs.push(elem);
          });
          defer.resolve(rs);
        });
        return defer.promise;
      }
    });
  }

  function createCacheData(obj) {
    var data, promise;

    var cacheData =
    /*#__PURE__*/
    function () {
      function cacheData(obj) {
        _classCallCheck(this, cacheData);

        extend(this, obj);
      }

      _createClass(cacheData, [{
        key: "getData",
        value: function getData() {
          return data;
        }
      }, {
        key: "setPromise",
        value: function setPromise(p) {
          promise = p;
        }
      }, {
        key: "getPromise",
        value: function getPromise() {
          return promise;
        }
      }, {
        key: "setData",
        value: function setData(d) {
          data = d;
        }
      }]);

      return cacheData;
    }();

    return new cacheData(obj);
  }

  function getMap(arr) {
    var obj = {};
    arr.forEach(function (n) {
      obj[n.id] = n;
    });
    return obj;
  }

  function getDeviceMap(arr) {
    var obj = {};
    arr.forEach(function (n) {
      var extId = n.extId;
      extId ? obj["/" + extId] = n : null;
    });
    return obj;
  }

  function remap(arr) {
    function toPath(str) {
      var arr = [str.substring(0, 6)],
          item;
      str = str.substring(6);

      while (item = str.substring(0, 3)) {
        arr.push(item);
        str = str.substring(3);
      }

      return arr;
    }

    return arr.map(function (d) {
      var match = /\/(\d+)\/$/.exec(d.domains),
          extId = toPath(d.externalDevId),
          pid = match[1];
      d.extId = extId.join("/");
      d.parentID = pid;
      return createCacheData(d);
    });
  }

  function insertNode(arr, elem, rule) {
    var item,
        stacks = [],
        len = arr.length;

    while (item = arr.pop()) {
      var order = rule(item, elem);

      if (order > 0) {
        stacks.unshift(item);
      } else {
        arr.push(item);
        break;
      }
    }

    [].push.apply(arr, [elem].concat(stacks));

    if (len !== arr.length - 1) {
      throw new Error("wrong" + len + "," + arr.length);
    }
  }

  function insertMethod(a, b) {
    var externalDevId1 = a.externalDevId,
        externalDevId2 = b.externalDevId,
        num1 = (a.values && a.values.number) + "" - 0,
        num2 = (b.values && b.values.number) + "" - 0,
        title1 = format(a.label),
        title2 = format(b.label);

    function addZero(num) {
      var rs = "";

      for (var i = 0; i < 9 - num.length; i++) {
        rs += "0";
      }

      return rs + num;
    }

    function format(str) {
      var rs = "",
          match;

      while (match = /\d+/.exec(str)) {
        rs += str.slice(0, match.index) + addZero(match[0]);
        str = str.slice(match.index + match[0].length);
      }

      return rs + str;
    }

    if (externalDevId1 && externalDevId2) {
      return externalDevId1 < externalDevId2 ? -1 : 1;
    }

    if (num1 === num1 || num2 === num2) {
      num1 = num1 === num1 ? num1 : 1 / 0;
      num2 = num2 === num2 ? num2 : 1 / 0;
      return num1 < num2 ? -1 : 1;
    }

    return title1 < title2 ? -1 : 1;
  }

  function loadQueue(queue, callback, rs) {
    var item;
    rs = rs || [];

    if (item = queue.shift()) {
      return callback(item).then(function (d) {
        rs.push(d);
        return loadQueue(queue, callback, rs);
      });
    } else {
      return success(rs);
    }
  }

  function recursive(arr, callback) {
    var createItem = function createItem(node, index, level, parent, parentlist) {
      return {
        node: node,
        index: index,
        level: level,
        parent: parent,
        parentlist: parentlist
      };
    },
        queue = arr.map(function (d, i) {
      return createItem(d, i, 0, null, arr);
    }),
        item;

    stop = stop || function (d) {
      return true;
    };

    var _loop = function _loop() {
      var _item = item,
          node = _item.node,
          index = _item.index,
          level = _item.level,
          parent = _item.parent,
          parentlist = _item.parentlist,
          children = node.children || [],
          stop = callback(node, index, level, parent, parentlist);

      if (stop === true) {
        return {
          v: void 0
        };
      }

      [].push.apply(queue, children.map(function (d, i) {
        return createItem(d, i, item.level + 1, node, children);
      }));
    };

    while (item = queue.shift()) {
      var _ret = _loop();

      if (_typeof(_ret) === "object") return _ret.v;
    }
  }

  function collapse(a, b) {
    var item,
        queue = isArray(b) ? b : [];

    while (item = queue.shift()) {
      if (isArray(item)) {
        [].push.apply(queue, item);
      } else {
        a.push(createCacheData(item));
      }
    }

    return a;
  }

  function extend(a, b) {
    for (var i in b) {
      a[i] = b[i];
    }

    return a;
  }

  function keys(obj) {
    var rs = [];

    for (var i in obj) {
      obj.hasOwnProperty(i) ? rs.push(i) : null;
    }

    return rs;
  }

  function getResByModelIds(modeIds) {
    return loadQueue(modeIds, function (modelId) {
      return getResourceByModelId(modelId);
    });
  }

  function getValidId(id, type) {
    id = id || 0;
    return structrureDone.then(function (d) {
      if (type === "device") {
        if (map[id].modelId < 1000) {
          return getFirstDevice(id);
        }
      }

      return getResourceByIds([id]).then(function (res) {
        return success(new treeData(res[0]));
      });
    });
  }

  function getFirstDevice() {
    return structrureDone.then(function (d) {
      var rs = root[0];

      while (rs.children && rs.children[0]) {
        rs = rs.children[0];
      }

      return getResourceByIds([rs.id]).then(function (res) {
        return success(new treeData(res[0]));
      });
    });
  }

  function getAlertState() {
    return alertStatusPromise || (alertStatusPromise = structrureDone.then(function (d) {
      return getAlerts(keys(map));
    }).then(function (alerts) {
      alerts.forEach(function (_ref3) {
        var nodeId = _ref3.nodeId,
            value = _ref3.value;
        var item = map[nodeId],
            state;
        item.status = item.state = value;

        while (item = findParentDevice(item)) {
          if (item.modelId < 1000) {
            return;
          }

          state = item.state || item.status || 0;
          item.status = item.state = state < value ? value : state;
        }
      });
      return success(root.map(function (n) {
        return new treeData(n);
      }));
    }));
  }

  function treeDataService(id) {
    return new treeData(map && map[id] || id);
  }

  function getCurrentRes() {
    var id = $state.params.id;
    return structrureDone.then(function (d) {
      return new treeData(id).getState();
    });
  }

  function getMeasurePointData(queue) {
    var item,
        rs = [];
    queue = isArray(queue) ? queue : [queue];

    function allObj(obj) {
      var arr = [],
          i;

      for (i in obj) {
        if (_typeof(obj[i]) !== "object") {
          return false;
        }

        arr.push(obj[i]);
      }

      return arr;
    }

    while (item = queue.shift()) {
      if (isArray(item)) {
        [].push.apply(queue, item);
      } else {
        var arr = allObj(item);

        if (arr) {
          [].push.apply(queue, arr);
        } else {
          rs.push(item);
        }
      }
    }

    return rs;
  }

  function _getMeasureLocate(res) {
    var kpis = res.physicalConfig && res.physicalConfig.accessConfigs,
        MeasurePointLocate = str2json(res.values && res.values.MeasurePointLocate) || [];
    MeasurePointLocate = getMeasurePointData(MeasurePointLocate).map(function (point) {
      point.kpis = kpis.filter(function (_ref4) {
        var instance = _ref4.instance;
        return instance == point.name;
      });
      return point;
    });
    measureLocationCached(res.id, MeasurePointLocate);
    return success(MeasurePointLocate);
  }

  function getMeasurePointLocate() {
    return getCurrentRes().then(function (res) {
      if (measureLocationCached(res.id)) {
        return success(measureLocationCached(res.id));
      }

      var kpis = res.physicalConfig && res.physicalConfig.accessConfigs,
          MeasurePointLocate = str2json(res.values && res.values.MeasurePointLocate) || [];
      MeasurePointLocate = getMeasurePointData(MeasurePointLocate).map(function (point) {
        point.kpis = kpis.filter(function (_ref5) {
          var instance = _ref5.instance,
              dataItemId = _ref5.dataItemId;
          return instance == point.name && dataItemId != 212000 && dataItemId != 213000 && dataItemId != 214000 && dataItemId != 211000;
        });
        return point;
      });
      measureLocationCached(res.id, MeasurePointLocate);
      return success(MeasurePointLocate);
    });
  }

  function getGeneral() {
    return getMeasurePointLocate().then(function (MeasurePointLocate) {
      return success(MeasurePointLocate.find(function (_ref6) {
        var name = _ref6.name;
        return name === "00";
      }));
    });
  }

  function getSensors() {
    return getMeasurePointLocate().then(function (MeasurePointLocate) {
      return success(MeasurePointLocate.filter(function (_ref7) {
        var name = _ref7.name;

        if (name == "00") {
          return false;
        }

        if (name - 0 !== name - 0) {
          return true;
        }

        return name < 1000;
      }));
    });
  }

  function getResourceById(id) {
    return structrureDone.then(function () {
      var promise = map[id] && map[id].getPromise();

      if (!promise) {
        map[id].setPromise(function () {
          var defer = q.defer();
          resourceUIService.getResourceById(id, function (e) {
            e.code == 0 ? defer.resolve(e.data) : defer.reject(e);
          });
          return defer.promise;
        }());
      }

      return map[id].getPromise();
    });
  }

  function getPath(domainPath) {
    var length = domainPath.split("/").length - 4,
        dics = ["index", "navigate", "factory", "production", "devicegroup"];
    return dics[length] || "devicegroup";
  }

  function showTree(modelId, domainPath) {
    if (modelId > 1000) {
      return 1;
    }

    var length = domainPath.split("/").length - 4;
    return (length > 3) - 0;
  }

  var Observer =
  /*#__PURE__*/
  function () {
    function Observer() {
      _classCallCheck(this, Observer);

      this.events = {};
    }

    _createClass(Observer, [{
      key: "on",
      value: function on(name, callback) {
        var _this2 = this;

        var arr = this.events[name] = this.events[name] || [];
        arr.push(callback);
        return function () {
          _this2.events[name] = arr.filter(function (d) {
            return d !== callback;
          });
        };
      }
    }, {
      key: "emit",
      value: function emit(name, data) {
        var _this3 = this;

        var fns = this.events[name] || [];
        fns.forEach(function (fn) {
          fn && fn.call(_this3, data);
        });
      }
    }]);

    return Observer;
  }();

  observer = new Observer();

  var treeData =
  /*#__PURE__*/
  function () {
    function treeData(id) {
      _classCallCheck(this, treeData);

      if (_typeof(id) === "object") {
        extend(this, id);
      } else {
        this.id = id;
      }
    }

    _createClass(treeData, [{
      key: "showTree",
      value: function showTree() {
        if (this.modelId > 1000) {
          return 1;
        }

        var length = this.domainPath.split("/").length - 4;
        return (length > 3) - 0;
      }
    }, {
      key: "find",
      value: function find(callback) {
        var node;
        recursive([map[this.id]], function (n, i, l, p, pl) {
          if (callback(n, i, l, p, pl)) {
            node = n;
            return true;
          }
        });
        return node ? new treeData(node).getState() : success(null);
      }
    }, {
      key: "getPathLocation",
      value: function getPathLocation() {
        return this.getPathAndShowTreeLocation().then(function (_ref8) {
          var showTree = _ref8.showTree,
              location = _ref8.location;
          return success(location);
        });
      }
    }, {
      key: "getMeasureLocate",
      value: function getMeasureLocate() {
        return this.getState().then(function (res) {
          return _getMeasureLocate(res);
        });
      }
    }, {
      key: "getPathAndShowTreeLocation",
      value: function getPathAndShowTreeLocation(mainTab) {
        var _this4 = this;

        var nameDic = {
          motor: "motor",
          electric: "electri"
        },
            ctrlNameDic = {
          mainCtrlRm: "mainCtrlRm",
          convoyer: "convoyer",
          wind1: "battery",
          reality: "reality",
          screen: "electrical_cabinet",
          rollerGroup: "rollerGroup",
          steel_dedust: "steel_dedust",
          wind: "wind",
          steel_machine: "steel_machine",
          robot: "robot",
          UPS: "ups",
          ups: "ups",
          zhiliuping: "ups"
        };
        return psConfig.getRoleValues().then(function (configValues) {
          var tabs = configValues.children,
              tab = mainTab || tabs[rootScope.main_active_index || 0] || {};
          return getResourceById(_this4.id).then(function (_ref9) {
            var modelId = _ref9.modelId,
                domainPath = _ref9.domainPath,
                values = _ref9.values;
            return (modelId > 1000 ? getAttrsByModelId([modelId]).then(function (attrs) {
              var viewType = attrs.find(function (_ref10) {
                var name = _ref10.name;
                return name == "viewType";
              });
              return success(viewType || {});
            }) : success({})).then(function (viewType) {
              var vt = values["viewType"] || viewType && viewType.sourceValue;

              if (tab.viewId == "177280852260000") {
                var path = ctrlNameDic[vt];

                if (path) {
                  return success({
                    showTree: 1,
                    controller: path,
                    defaultNav: false
                  });
                }

                path = nameDic[vt];

                if (modelId > 1000) {
                  if (path == null) {
                    return success({
                      showTree: 1,
                      controller: "device",
                      defaultNav: false
                    });
                  } else {
                    return success({
                      showTree: 1,
                      location: path,
                      defaultNav: false
                    });
                  }
                } else {
                  if (getPath(domainPath) == "devicegroup") {
                    return success({
                      showTree: 1,
                      controller: "devicegroup",
                      defaultNav: false
                    });
                  }

                  return success({
                    showTree: showTree(modelId, domainPath),
                    location: getPath(domainPath),
                    defaultNav: false
                  });
                }
                /*  */

              } else {
                return success({
                  showTree: showTree(modelId, domainPath),
                  location: "index",
                  defaultNav: tab.name == "专业分析" && values.analiticalType
                });
              }
            });
          });
        });
      }
    }, {
      key: "getPath",
      value: function getPath() {
        var length = this.domainPath.split("/").length - 4,
            dics = ["index", "navigate", "factory", "production", "devicegroup", "virtual"];
        return dics[length] || "devicegroup";
      }
    }, {
      key: "getChildren",
      value: function getChildren(callback, showDetail) {
        var _this5 = this;

        return structrureDone.then(function (d) {
          var rs = [];
          recursive([map[_this5.id]], function (n, i, l, p, pl) {
            if (callback(n, i, l, p, pl)) {
              if (_this5.id !== n.id) {
                rs.push(new treeData(n));
              }
            }
          });
          return showDetail ? getResourceByIds(rs.map(getId)).then(function (d) {
            return success(d.map(function (n) {
              return new treeData(n);
            }));
          }) : success(rs);
        });
      }
    }, {
      key: "getParent",
      value: function getParent() {
        var parent = findParentDevice(map[this.id]);
        return parent ? new treeData(parent) : undefined;
      }
    }, {
      key: "getBrothers",
      value: function getBrothers() {
        var _this6 = this;

        return this.getParent() ? this.getParent().getChildren(function (n, i, l) {
          return n !== map[_this6.id] && l < 2;
        }, true) : success(root.filter(function (d) {
          return d !== map[_this6.id];
        }));
      }
    }, {
      key: "getParents",
      value: function getParents(showDetail) {
        var _this7 = this;

        return structrureDone.then(function (d) {
          var rs = [],
              item = _this7,
              checks = [];

          while (item = item.getParent()) {
            if (checks.indexOf(item) !== -1) {
              throw new Error("circular function");
            } else {
              checks.push(item);
              rs.push(new treeData(item));
            }
          }

          rs.reverse();
          return showDetail ? getResourceByIds(rs.map(getId)).then(function (d) {
            return success(d.map(function (n) {
              return new treeData(n);
            }));
          }) : success(rs);
        });
      }
    }, {
      key: "getAlertState",
      value: function getAlertState() {
        return alertsMap(this.id);
      }
    }, {
      key: "getState",
      value: function getState() {
        var _this8 = this;

        return structrureDone.then(function (root) {
          return getResourceByIds([_this8.id]).then(function (res) {
            return success(new treeData(res[0]));
          });
        });
      }
      /** keep consequency with old framework **/

    }, {
      key: "getRoot",
      value: function getRoot() {
        return structrureDone.then(function (root) {
          recursive(root, function (node, i, l, p) {
            node.parent = p;
          });
          return success(root);
        });
      }
    }, {
      key: "$on",
      value: function $on(name, callback) {
        var _this9 = this;

        //return observer.on(this.id, callback);
        var clear;
        webSocketStarted.then(function (websocket) {
          clear = websocket.on(_this9.id, 999999, function (v, d) {
            var nodeId = d.nodeId,
                value = d.value;
            alertsMap(nodeId, value);
            callback(v, d);
          });
        });
        return function () {
          clear && clear();
        };
      }
    }, {
      key: "$emit",
      value: function $emit(name, data) {
        this.events[name].forEach(function (fn) {
          fn(data);
        });
      }
      /** keep consequency with old framework **/

    }]);

    return treeData;
  }();

  extend(treeDataService, {
    getValidId: getValidId,
    getFirstDevice: getFirstDevice,
    getAlertState: getAlertState,
    getSensors: getSensors,
    getGeneral: getGeneral,
    startLoop: startLoop,
    endLoop: endLoop,
    getCurrentUser: function getCurrentUser(d) {
      return userdefer.resolve(d);
    },
    getRoot: function getRoot() {
      return structrureDone;
    }
  });
  return treeDataService;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-ui-router-handler.service?angular=service&type=script":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-ui-router-handler.service?angular=service&type=script ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ __webpack_exports__["default"] = (function (rootScope, q, ajax, $state, psTreeData, registerService, psConfig) {
  var getResourceById = "resourceUIService.getResourceById",
      getAttrsByModelId = "resourceUIService.getAttrsByModelId";
  var analiticalType = createAnaliticalType();

  function factory(params) {
    var paramsArr;
    return psConfig.getRoleValues().then(function (values) {
      var parents,
          node = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["tree"])().find(values, function (n, i, p) {
        if (n.id === params.id) {
          parents = p.slice(1);
          return true;
        }
      }),
          children = getEachFirstChild(node);

      if (node.viewPriority) {
        paramsArr = [].concat(_toConsumableArray(parents), [node]);
      } else {
        paramsArr = [].concat(_toConsumableArray(parents), [node], _toConsumableArray(children));
      }

      return createParams(paramsArr);
    });
  }

  function createParams(paramsArr, url) {
    var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    url = url || "index";
    var complete = createPromise(),
        obj,
        dics = {
      1: {
        name: "prod_dashboard",
        handler: function handler(arr) {
          var main = arr.pop(),
              name = this.name,
              id = ext.id || $state.params.id,
              viewId = main.viewId;

          (function (viewId, callback) {
            (id ? success(id) : psTreeData.getRoot().then(function (root) {
              return success(root[0].id);
            })).then(function (id) {
              viewId == "177280852260000" ? psTreeData(id).getPathAndShowTreeLocation(main).then(function (_ref) {
                var location = _ref.location,
                    showTree = _ref.showTree,
                    controller = _ref.controller;
                callback(location, showTree, controller);
              }) : callback(url, main.showTree);
            });
          })(viewId, function (location, showTree, controller) {
            var routers = registerService.getRouters(),
                extra = {},
                router = routers.find(function (router) {
              return router.ctrlname === viewId;
            }),
                ctrlname = controller ? "prod_".concat(controller) : router && router.ctrlname,
                baseParam = {
              count: ($state.params.count || 0) - 0 + 1,
              id: $state.params.id || 0,
              deviceOnly: !!main.deviceOnly - 0,
              showTree: !!showTree - 0,
              main_active_index: main.index
            },
                extParams = router ? createParamByRouter(router) : {
              viewId: main.viewId,
              index: location
            },
                cname = ctrlname ? "prod_controller.".concat(ctrlname) : name;
            delete $state.params.sub_active_index;
            delete $state.params.minor_active_index;
            ext = ext || {};
            extra.main_active_hide = main.hideNavi;
            ext["#"] = JSON.stringify(extra);

            if (main.deviceOnly) {
              psTreeData.getValidId($state.params.id, "device").then(function (res) {
                baseParam.id = res.id;
                complete([cname, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
              });
            } else {
              complete([cname, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
            }
          });
        }
      },
      2: {
        name: "prod_sub_dashboard",
        handler: function handler(arr) {
          var sub = arr.pop(),
              basename = this.name,
              main = arr.pop(),
              viewId = sub.viewId,
              extra = {},
              routers = registerService.getRouters(),
              router = routers.find(function (router) {
            return router.ctrlname === viewId;
          }),
              baseParam = {
            count: ($state.params.count || 0) - 0 + 1,
            id: $state.params.id,
            deviceOnly: !!main.deviceOnly - 0,
            showTree: sub.showTree,
            main_active_index: main.index,
            sub_active_index: sub.index,
            dataItems: ext ? ext.dataItems : null
          },
              extName = router ? ".sub_" + router.ctrlname : ".subview",
              name = this.name + extName,
              extParams = router ? createParamByRouter(router) : {
            viewId: sub.viewId,
            index: url
          };
          delete $state.params.minor_active_index;
          ext = ext || {};
          extra.main_active_hide = main.hideNavi;
          extra.sub_active_hide = sub.hideNavi;
          ext["#"] = JSON.stringify(extra);

          if (main.deviceOnly) {
            psTreeData.getValidId($state.params.id, "device").then(function (res) {
              baseParam.id = res.id;
              complete([name, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
            });
          } else {
            complete([name, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
          }
        }
      },
      3: {
        name: "prod_sub_dashboard.minor_dashboard",
        handler: function handler(arr) {
          var minor = arr.pop(),
              sub = arr.pop(),
              main = arr.pop(),
              extra = {},
              basename = this.name,
              viewId = minor.viewId,
              routers = registerService.getRouters(),
              router = routers.find(function (router) {
            return router.ctrlname === viewId;
          }),
              baseParam = {
            count: ($state.params.count || 0) - 0 + 1,
            id: $state.params.id,
            showTree: main.showTree,
            deviceOnly: !!main.deviceOnly - 0,
            main_active_index: main.index,
            sub_active_index: sub.index,
            minor_active_index: minor.index
          },
              extName = router ? ".minor_" + router.ctrlname : ".minor_view",
              name = basename + extName,
              extParams = router ? createParamByRouter(router) : {
            viewId: minor.viewId,
            index: url
          };
          ext = ext || {};
          ext["#"] = {};
          extra.main_active_hide = main.hideNavi;
          extra.sub_active_hide = sub.hideNavi;
          extra.minor_active_hide = minor.hideNavi;
          ext["#"] = JSON.stringify(extra);

          if (main.deviceOnly) {
            psTreeData.getValidId($state.params.id, "device").then(function (res) {
              baseParam.id = res.id;
              complete([name, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
            });
          } else {
            complete([name, Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(baseParam, extParams, ext)]);
          }
        }
      }
    };
    obj = dics[paramsArr.length];
    obj["handler"].call(obj, paramsArr);
    return complete();
  }

  function createAnaliticalType() {
    var keys = [],
        rs = [],
        analiticalTypeFn = function analiticalTypeFn(key, value) {
      if (typeof value === "undefined") {
        if (typeof key === "string") {
          var inx = keys.indexOf(key);
          return rs[inx];
        } else {
          return undefined;
        }
      } else {
        keys.push(key);
        rs.push(value);
      }
    };

    return analiticalTypeFn;
  }

  function createPromise() {
    var defer = q.defer();
    return function (obj) {
      if (typeof obj === "undefined") {
        return defer.promise;
      } else {
        defer.resolve(obj);
      }
    };
  }

  function success(d) {
    var defer = q.defer();
    defer.resolve(d);
    return defer.promise;
  }

  function createParamByRouter(d) {
    var obj = {},
        match,
        str = d.router;

    while (match = /\/\:([^:?/]+)\??/.exec(str)) {
      obj[match[1]] = "null";
      str = str.slice(match.index + match[0].length);
    }

    return obj;
  }

  function getEachFirstChild(item) {
    var rs = [];

    while (item = item.children && item.children[0]) {
      rs.push(item);
    }

    return rs;
  }

  function getChildrenByIndex(target, queue) {
    function mapId(a, b) {
      a[b.index] = b;
      return a;
    }

    var inx,
        targeMap = target.reduce(mapId, {});

    while (typeof (inx = queue.shift()) !== "undefined") {
      targeMap = targeMap && targeMap[inx] && targeMap[inx].children && targeMap[inx].children.reduce(mapId, {});
    }

    if (!targeMap) {
      console.error("targeMap is not defined");
    }

    return Object.values(targeMap) || [];
  }

  analiticalType("电气分析", function (analiticalType) {
    if (typeof analiticalType != "string") {
      return false;
    }

    return analiticalType.split(",").indexOf("ELEC") != -1;
  });
  analiticalType("振动分析", function (analiticalType) {
    if (typeof analiticalType != "string") {
      return false;
    }

    return analiticalType.split(",").indexOf("VIBE") != -1;
  });
  analiticalType("模型分析", function (analiticalType) {
    if (typeof analiticalType != "string") {
      return false;
    }

    return analiticalType.split(",").indexOf("VIBE") != -1;
  });
  Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["extend"])(factory, {
    getDefaultParamByName: function getDefaultParamByName(routername) {
      var routers = registerService.getRouters(),
          router = routers.find(function (router) {
        return router.ctrlname === routername;
      });

      if (typeof routers === "undefined") {
        console.error("router named ".concat(routename, " cannot be found"));
        throw new Error("router named ".concat(routename, " cannot be found"));
      }

      return createParamByRouter(router);
    },
    getCurrentRouterType: function getCurrentRouterType() {
      var routers = registerService.getRouters();
      return factory.getCurrentTab().then(function (tab) {
        var fd = routers.find(function (router) {
          return router.ctrlname == tab.viewId;
        });
        return success(fd ? fd.ctrlname : "dashboard");
      });
    },
    getCurrentTab: function getCurrentTab() {
      return psConfig.getRoleValues().then(function (values) {
        var main = $state.params.main_active_index,
            rs,
            fd,
            sub = $state.params.sub_active_index,
            minor = $state.params.minor_active_index;

        if (main != null) {
          rs = values.children.find(function (c) {
            return c.index == main;
          });
        }

        if (sub != null) {
          fd = rs.children.find(function (c) {
            return c.index == sub;
          });

          if (fd == null) {
            return success(rs);
          }

          rs = fd;
        }

        if (minor != null) {
          fd = rs.children.find(function (c) {
            return c.index == minor;
          });

          if (fd == null) {
            return success(rs);
          }
        }

        return success(rs);
      });
    },
    getCurrentMainTab: function getCurrentMainTab() {
      return psConfig.getRoleValues().then(function (values) {
        var inx = $state.params.main_active_index;
        return success(values.children.find(function (_ref2) {
          var index = _ref2.index;
          return index == inx;
        }));
      });
    },
    getSubTabs: function getSubTabs() {
      return ajax.post(getResourceById, $state.params.id).then(function (_ref3) {
        var modelId = _ref3.modelId,
            values = _ref3.values;
        return ajax.post(getAttrsByModelId, modelId).then(function (attrs) {
          var at = attrs.find(function (d) {
            return d.name == "analiticalType";
          }) || {};
          return psConfig.getRoleValues().then(function (vals) {
            var mainInx = $state.params.main_active_index,
                specialDeviceType = function specialDeviceType(_ref4) {
              var label = _ref4.label;
              var checker = analiticalType(label);

              if (typeof checker !== "function") {
                return true;
              }

              return checker((values ? values.analiticalType : null) || at.sourceValue);
            },
                children = getChildrenByIndex(vals.children, [mainInx]);

            return success(children.filter(specialDeviceType));
          });
        });
      });
    },
    getMinorTabs: function getMinorTabs() {
      return ajax.post(getResourceById, $state.params.id).then(function (_ref5) {
        var modelId = _ref5.modelId;
        return ajax.post(getAttrsByModelId, modelId).then(function (attrs) {
          var at = attrs.find(function (d) {
            return d.name == "analiticalType";
          }) || {};
          return psConfig.getRoleValues().then(function (values) {
            var mainInx = $state.params.main_active_index,
                subInx = $state.params.sub_active_index,
                specialDeviceType = function specialDeviceType(_ref6) {
              var label = _ref6.label;
              var checker = analiticalType(label);

              if (typeof checker === "undefined") {
                return true;
              }

              checker = analiticalType(at.sourceValue);
              return checker && checker(label);
            },
                children = getChildrenByIndex(values.children, [mainInx, subInx]);

            return success(children.filter(specialDeviceType));
          });
        });
      });
    },
    moveToNodeByCondition: function moveToNodeByCondition(fn, ext) {
      return psConfig.getRoleValues().then(function (values) {
        var parents,
            paramsArr,
            node = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["tree"])().find(values, function (n, i, p) {
          if (fn(n, i, p)) {
            parents = p.slice(1);
            return true;
          }
        }),
            children;

        if (typeof node === "undefined") {
          throw new Error("error : 没找到符合条件的跳转路径");
          return;
        }

        children = getEachFirstChild(node);
        paramsArr = [].concat(_toConsumableArray(parents), [node], _toConsumableArray(children));
        return createParams(paramsArr, undefined, ext);
      }).then(function (n) {
        $state.go.apply($state, n);
      });
    },
    moveToNodeByIndex: function moveToNodeByIndex(url, arr, ext) {
      return psConfig.getRoleValues().then(function (values) {
        var paramsArr = [],
            inx = 0,
            item,
            target = values.children;

        while (inx < 3) {
          var num = arr[inx],
              _item = target[num || 0];

          if (_item == null) {
            break;
          }

          var hideNavi = _item.hideNavi;

          if (num == null && hideNavi == 1) {
            break;
          }

          paramsArr.push(_item);
          target = _item.children;
          inx++;
        }

        return createParams(paramsArr, url, ext);
      }).then(function (n) {
        $state.go.apply($state, n);
      });
    },
    getRoleValues: function getRoleValues() {
      return psConfig.getRoleValues();
    }
  });
  return factory;
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.bak.service?angular=service&type=script":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-websocket.bak.service?angular=service&type=script ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../js/services/service_factory.js */ "./js/services/service_factory.js");
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = (function (q, rootScope) {
  var DEBUG = false,
      protocol = _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default.a.protocol || "ws",
      host = _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default.a.host,
      websockets = {},
      websocketOpened = q.defer(),
      url = location.hostname == "localhost" ? "".concat(protocol, "//").concat(host, "/websocket/message") : "".concat(protocol, "//").concat(location.host, "/websocket/message"),
      getId = function getId(d) {
    return _typeof(d) === "object" ? d.id : d;
  };

  console.log(url);

  function stringify(obj) {
    return JSON.stringify(obj);
  }

  function parse(str) {
    var a;

    try {
      a = JSON.parse(str);
    } catch (e) {
      console.error(e);
      return;
    }

    return a;
  }

  function createWs(name) {
    var ws = new WebSocket(url),
        listeners = {},
        onDataEvent = [];

    var WebsocketCls =
    /*#__PURE__*/
    function () {
      function WebsocketCls() {
        _classCallCheck(this, WebsocketCls);

        this.name = name;
        this.uuid = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_1__["random"])();
      }

      _createClass(WebsocketCls, [{
        key: "send",
        value: function send(ci, kpi) {
          var _this = this;

          websocketOpened.promise.then(function (d) {
            d.send(stringify({
              uuid: _this.uuid,
              operation: "register",
              type: "kpi",
              param: {
                ciid: ci.map(getId).join(","),
                kpi: kpi.map(getId).join(",")
              }
            }));
          })["catch"](function (e) {
            console.error(e);
          });
        }
      }, {
        key: "data",
        value: function data(handler) {
          onDataEvent.push(handler);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _this2 = this;

          onDataEvent.forEach(function (d, i) {
            onDataEvent[i] = null;
          });
          onDataEvent = [];
          websocketOpened.promise.then(function (d) {
            d.send(stringify({
              uuid: _this2.uuid,
              operation: "unregister"
            }));
          })["catch"](function (e) {
            console.error(e);
          });
        }
      }, {
        key: "on",
        value: function on(ci, kpi, callback) {
          listeners["".concat(ci, "_").concat(kpi)] = listeners["".concat(ci, "_").concat(kpi)] || [];
          listeners["".concat(ci, "_").concat(kpi)].push(callback);
          return function () {
            listeners["".concat(ci, "_").concat(kpi)] = listeners["".concat(ci, "_").concat(kpi)].filter(function (d) {
              return d !== callback;
            });
          };
        }
      }]);

      return WebsocketCls;
    }();

    ws.onopen = function () {
      websocketOpened.resolve(ws);
    };

    ws.onerror = function (e) {
      websocketOpened.reject("websocket was on error, please try to re-link");
    };

    ws.onclose = function (e) {
      websocketOpened.reject("websocket was closed, please try to re-link");
    };

    ws.onmessage = function (e) {
      var _parse = parse(e.data),
          nodeId = _parse.nodeId,
          kpiCode = _parse.kpiCode,
          value = _parse.value,
          fn = listeners["".concat(nodeId, "_").concat(kpiCode)];

      onDataEvent.forEach(function (handler) {
        handler(e.data);
      });
      fn ? fn.forEach(function (f) {
        f(value);
      }) : null;
    };
    /** local test utils only **/


    if (DEBUG) {
      setInterval(function () {
        var ks = keys(listeners);
        ks.forEach(function (d) {
          var state = Math.round(Math.random() * 4),
              fns = listeners["".concat(d)];
          fns && fns.forEach(function (fn) {
            return fn(state);
          });
        });
        /* let state = Math.round( Math.random() * 4 ),
            fn = listeners["557055315256066_999999"];
          for(var i in fn){
            fn[i](state)
          } */
      }, 500);
    }
    /** local test utils only **/


    return new WebsocketCls();
  }

  function keys(obj) {
    var rs = [],
        i;

    for (i in obj) {
      rs.push(i);
    }

    return rs;
  }

  return function (name) {
    websockets[name] = websockets[name] || createWs(name);
    return websockets[name];
  };
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.service?angular=service&type=script":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-websocket.service?angular=service&type=script ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../js/services/service_factory.js */ "./js/services/service_factory.js");
/* harmony import */ var _js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/* harmony default export */ __webpack_exports__["default"] = (function (q, rootScope) {
  var getId = function getId(obj) {
    return _typeof(obj) == "object" ? obj.id : obj;
  };

  function toArr(obj) {
    var rs = [];

    for (var i in obj) {
      for (var j in obj[i]) {
        for (var k in obj[i][j]) {
          rs.push(obj[i][j][k]);
        }
      }
    }

    return rs;
  }

  function stringify(str) {
    var a;

    try {
      a = JSON.stringify(str);
    } catch (e) {
      throw new Error(e);
      return;
    }

    return a;
  }

  function parse(str) {
    var rs;

    try {
      rs = JSON.parse(str);
    } catch (e) {
      return;
    }

    return rs;
  }

  var Service =
  /*#__PURE__*/
  function () {
    function Service(obj) {
      _classCallCheck(this, Service);

      this.protocol = obj.protocol;
      this.host = obj.host;
      this.origin = this.origin;
    }

    _createClass(Service, [{
      key: "getURL",
      value: function getURL() {
        if (location == null) {
          return "".concat(this.protocol, "//").concat(this.host, "/websocket/message");
        }

        return location.hostname == "localhost" || location.hostname == "127.0.0.1" ? "".concat(this.protocol, "//").concat(this.host, "/websocket/message") : "".concat(this.protocol, "//").concat(location.host, "/websocket/message");
      }
    }]);

    return Service;
  }();

  var Observer =
  /*#__PURE__*/
  function () {
    function Observer() {
      _classCallCheck(this, Observer);

      this.events = {};
    }

    _createClass(Observer, [{
      key: "on",
      value: function on(name, callback) {
        this.events[name] = this.events[name] || [];
        this.events[name].push(callback);
      }
    }, {
      key: "emit",
      value: function emit(name, data) {
        var _this = this;

        var functionLIst = this.events[name] || [];
        functionLIst.forEach(function (fn) {
          fn && fn.call(_this, data);
        });
      }
    }]);

    return Observer;
  }();

  var Params =
  /*#__PURE__*/
  function () {
    function Params(str) {
      _classCallCheck(this, Params);

      var d = parse(str);

      if (d == null) {
        return;
      }

      for (var i in d) {
        this[i] = d[i];
      }
    }

    _createClass(Params, [{
      key: "getData",
      value: function getData() {
        return this.data;
      }
    }]);

    return Params;
  }();

  var WebSocketCls =
  /*#__PURE__*/
  function () {
    function WebSocketCls(url, time) {
      _classCallCheck(this, WebSocketCls);

      this.ws = null;
      this.time = time;
      /** time为截流时间，单位ms,默认值为undefined,表示不进行截流，收到推送立即发送，当ms设置为数字时，会对收集的数据进行截流处理，以一个数组形式返回给回掉函数 */

      this._state = null;
      this.url = url;
      this.uuid = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_1__["random"])();
      this.observer = new Observer();
      this.connect();
    }

    _createClass(WebSocketCls, [{
      key: "throttle",
      value: function throttle(callback, time) {
        var timer,
            obj = {};
        return function (val, data) {
          var _this2 = this;

          var nodeId = data.nodeId,
              kpiCode = data.kpiCode,
              instance = data.instance;
          instance = instance || "_";

          if (timer == null) {
            console.log(time);
            timer = setTimeout(function () {
              callback.call(_this2, toArr(obj));
              timer = null;
              obj = {};
            }, time);
          } else {
            obj[nodeId] = obj[nodeId] || {};
            obj[nodeId][kpiCode] = obj[nodeId][kpiCode] || {};
            obj[nodeId][kpiCode][instance] = data;
          }
        };
      }
    }, {
      key: "connect",
      value: function connect() {
        var _this3 = this;

        this._state = null;
        this.ws = new WebSocket(this.url);

        this.ws.onopen = function () {
          _this3._state = "onopen";

          _this3.observer.emit("onopen");
        };

        this.ws.onmessage = function (_ref) {
          var data = _ref.data;
          var param = new Params(data);

          _this3.observer.emit("onmessage", param.getData());
        };

        this.ws.onclose = function (e) {
          _this3._state = "onclose";

          _this3.observer.emit("onclose");

          _this3.reconnect();
        };

        this.ws.onerror = function (e) {
          _this3._state = "onerror";

          _this3.observer.emit("onerror"); //this.reconnect();

        };
      }
    }, {
      key: "reconnect",
      value: function reconnect() {
        var _this4 = this;

        setTimeout(function () {
          console.warn("\u94FE\u63A5 [ ".concat(_this4.url, " ] \u4E0D\u6210\u529F\u91CD\u8BD5\u94FE\u63A5"));

          _this4.connect();
        }, 5000);
      }
    }, {
      key: "on",
      value: function on(ci, kpi, instance, callback) {
        var _this5 = this;

        if (ci == null) {
          throw new Error("nodeId is a must");
        }

        if (typeof ci == "function" && kpi == null && instance == null && callback == null) {
          callback = ci;
          ci = null;
        }

        if (typeof instance == "function" && callback == null) {
          callback = instance;
          instance = null;
        }

        if (typeof kpi == "function" && instance == null && callback == null) {
          callback = kpi;
          kpi = null;
        }

        callback = this.time ? this.throttle(callback, this.time) : callback;
        this.onmessage(function (d) {
          if (instance != null && instance != d.instance) {
            return;
          }

          if (kpi != null && kpi != d.kpiCode) {
            return;
          }

          if (ci != null && ci != d.nodeId) {
            return;
          }

          callback && callback.call(_this5, d.value, d);
        });
        return function () {
          return _this5.destroy();
        };
      }
    }, {
      key: "doSthWhileOpen",
      value: function doSthWhileOpen(callback) {
        this._state == "onopen" ? callback() : this.addEventListener("onopen", callback);
      }
    }, {
      key: "send",
      value: function send(ci, kpi, instances) {
        var _this6 = this;

        this.doSthWhileOpen(function () {
          var param = {
            ciid: ci.map(getId).join(","),
            kpi: kpi.map(getId).join(",")
          };

          if (instances != null) {
            param["instances"] = instances.join(",");
          }

          _this6.sendData({
            uuid: _this6.uuid,
            operation: "register",
            type: "kpi",
            param: param
          });
        });
      }
    }, {
      key: "unregister",
      value: function unregister() {
        var _this7 = this;

        this.doSthWhileOpen(function () {
          _this7.sendData({
            uuid: _this7.uuid,
            operation: "unregister"
          });
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.unregister();
        this.ws.close();
      }
    }, {
      key: "sendData",
      value: function sendData(obj) {
        this.ws.send(stringify(obj));
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(name, callback) {
        this.observer.on(name, callback);
      }
    }, {
      key: "onmessage",
      value: function onmessage(callback) {
        this.addEventListener("onmessage", callback);
      }
    }]);

    return WebSocketCls;
  }();

  function createInstance(service) {
    var wsMap = new Map(),
        ser = new Service(service);
    return function (name, time) {
      var isDebug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (wsMap.get(name)) {
        return wsMap.get(name);
      } else {
        var url = isDebug ? "ws://localhost:8081/websocket/message" : ser.getURL();
        wsMap.set(name, new WebSocketCls(url, time));
        return wsMap.get(name);
      }
    };
  }

  return createInstance(_js_services_service_factory_js__WEBPACK_IMPORTED_MODULE_0___default.a);
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/test.service?angular=service&type=script":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/services/test.service?angular=service&type=script ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (rootScope) {
  return {
    a: 10
  };
});

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/angular-explainer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib/angular-explainer.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var explainer =
/*#__PURE__*/
function () {
  function explainer() {
    _classCallCheck(this, explainer);
  }

  _createClass(explainer, [{
    key: "add",
    value: function add(name, handler) {
      this.handlers = this.handlers || {};
      this.handlers[name] = handler;
    }
  }, {
    key: "get",
    value: function get(name, data) {
      return _typeof(this.handlers) === "object" && typeof this.handlers[name] === "function" && this.handlers[name](data);
    }
  }, {
    key: "each",
    value: function each(callback) {
      for (var i in this.handlers) {
        typeof callback === "function" && callback(this.handlers[i], i);
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      var keys = [];
      this.each(function (elem, key) {
        keys.push(key);
      });
      return keys;
    }
  }]);

  return explainer;
}();

;

var newExplainer = new explainer(),
    removespace = function removespace(str) {
  var match = /^\s*([^\s].*[^\s])\s*$/.exec(str);
  return match ? match[1] : str;
},
    toArray = function toArray(str) {
  return typeof str === "string" ? str.split(",").map(removespace) : [];
};

function each(arr, callback) {
  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  ;
}

function hasRegistered(service, name) {
  return function (angularModule) {
    return angularModule._invokeQueue.some(function (item) {
      return item[1] === service && item[2][0] === name;
    });
  };
}

function camelhill(str) {
  var rs = "",
      arr = [].slice.call(str),
      _char;

  while (_char = arr.shift()) {
    if (_char === "-") {
      _char = arr.shift();
      _char = typeof _char === "undefined" ? "" : _char.toUpperCase();
    }

    rs += _char;
  }

  return rs;
}

function map(arr, callback) {
  var rs = [];

  if (arr) {
    for (var i = 0; i < arr.length; i++) {
      rs.push(callback(arr[i], i, arr));
    }
  }

  ;
  return rs;
}

newExplainer.add("controller", function (module) {
  var template = module.template,
      script = module.script,
      config = module.config,
      name = module.name,
      router = config.router,
      params = config.params,
      injector = config.injector,
      args = [].concat(_toConsumableArray(toArray(injector)), [script]);
  return function (angularModule) {
    var _name = camelhill(name);

    if (!hasRegistered("controller", _name)(angularModule)) {
      typeof angularModule.controller === "function" ? angularModule.controller(_name, args) : angularModule.register(_name, args);
      return {
        type: "router",
        router: "/".concat(name).concat(params || ""),
        ctrlname: _name,
        template: template.template
      };
    } else {
      return {
        template: template.template
      };
      console.warn("controller, named ".concat(_name, " is already exist, so will not be registered"));
    }
  };
});
newExplainer.add("service", function (module) {
  var script = module.script,
      config = module.config,
      name = module.name,
      injector = config.injector,
      type = config.type,
      params = [].concat(_toConsumableArray(toArray(injector)), [script]);
  return function (angularModule) {
    var _name = camelhill(name);

    if (!hasRegistered(type || "factory", _name)(angularModule)) {
      angularModule[type || "factory"](_name, params);
    } else {
      console.warn("".concat(type || "factory", ", named ").concat(_name, " is already exist, so will not be registered"));
    }
  };
});
newExplainer.add("directive", function (module) {
  var script = module.script,
      config = module.config,
      template = module.template,
      name = module.name,
      injector = config.injector,
      fn = function fn() {
    var args = [].slice.apply(arguments),
        obj = script.apply(this, args);
    obj.template = (template ? template.template : null) || obj.template;
    obj.restrict = obj.restrict || "E";
    obj.replace = typeof obj.replace == "undefined" ? true : obj.replace;

    obj.compile = function (elem, attr) {
      return {
        pre: function pre(scope, elem, attr) {
          /** remove the rest data-a-id before use **/
          var arr = map(elem[0].attributes, function (attr) {
            return attr.name;
          }).filter(function (d) {
            return /data-a-[\w\d]+/.test(d);
          });
          arr.shift();
          arr.forEach(function (d) {
            elem[0].removeAttribute(d);
          });
          obj.before && obj.before.call(this, scope, elem, attr);
        },
        post: obj.link
      };
    };

    return obj;
  },
      params = [].concat(_toConsumableArray(toArray(injector)), [fn]);

  return function (angularModule) {
    var _name = camelhill(name);

    if (!hasRegistered("directive", _name)(angularModule)) {
      typeof angularModule.directive === "function" ? angularModule.directive(_name, params) : angularModule.register(_name, params);
    } else {
      console.warn("directive, named ".concat(_name, " is already exist, so will not be registered"));
    }
  };
});
module.exports = newExplainer;

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/common-method-service2.service":
/*!*************************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/common-method-service2.service ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_method_service2_service_angular_service_id_72366e3e_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-method-service2.service?angular=service&id=72366e3e&type=config&lang=config&scoped=false */ "./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=config&lang=config&scoped=false");
/* harmony import */ var _common_method_service2_service_angular_service_id_72366e3e_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-method-service2.service?angular=service&id=72366e3e&type=script&lang=js&scoped=false */ "./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/common-method-service2.service",type="service",name="commonMethodService2";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_common_method_service2_service_angular_service_id_72366e3e_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_common_method_service2_service_angular_service_id_72366e3e_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-area-state.service":
/*!****************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-area-state.service ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_area_state_service_angular_service_id_511a424f_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-area-state.service?angular=service&id=511a424f&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_area_state_service_angular_service_id_511a424f_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-area-state.service?angular=service&id=511a424f&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-area-state.service",type="service",name="psAreaState";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_area_state_service_angular_service_id_511a424f_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_area_state_service_angular_service_id_511a424f_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-btn-click.service":
/*!***************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-btn-click.service ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_btn_click_service_angular_service_id_2a19ae87_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-btn-click.service?angular=service&id=2a19ae87&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_btn_click_service_angular_service_id_2a19ae87_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-btn-click.service?angular=service&id=2a19ae87&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-btn-click.service",type="service",name="psBtnClick";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_btn_click_service_angular_service_id_2a19ae87_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_btn_click_service_angular_service_id_2a19ae87_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-config.service":
/*!************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-config.service ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_config_service_angular_service_id_0a112cc0_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-config.service?angular=service&id=0a112cc0&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_config_service_angular_service_id_0a112cc0_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-config.service?angular=service&id=0a112cc0&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-config.service",type="service",name="psConfig";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_config_service_angular_service_id_0a112cc0_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_config_service_angular_service_id_0a112cc0_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-mock.service":
/*!**********************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-mock.service ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_mock_service_angular_service_id_3cd1dcc8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-mock.service?angular=service&id=3cd1dcc8&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_mock_service_angular_service_id_3cd1dcc8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-mock.service?angular=service&id=3cd1dcc8&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-mock.service",type="service",name="psMock";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_mock_service_angular_service_id_3cd1dcc8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_mock_service_angular_service_id_3cd1dcc8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-new-websocket.service":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-new-websocket.service ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_new_websocket_service_angular_service_id_65e847ec_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-new-websocket.service?angular=service&id=65e847ec&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_new_websocket_service_angular_service_id_65e847ec_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-new-websocket.service?angular=service&id=65e847ec&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-new-websocket.service",type="service",name="psNewWebsocket";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_new_websocket_service_angular_service_id_65e847ec_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_new_websocket_service_angular_service_id_65e847ec_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-polling.service":
/*!*************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-polling.service ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_polling_service_angular_service_id_cdbf8c9a_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-polling.service?angular=service&id=cdbf8c9a&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_polling_service_angular_service_id_cdbf8c9a_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-polling.service?angular=service&id=cdbf8c9a&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-polling.service",type="service",name="psPolling";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_polling_service_angular_service_id_cdbf8c9a_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_polling_service_angular_service_id_cdbf8c9a_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo.service":
/*!**********************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-topo.service ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_topo_service_angular_service_id_2b79dcf8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-topo.service?angular=service&id=2b79dcf8&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_topo_service_angular_service_id_2b79dcf8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-topo.service?angular=service&id=2b79dcf8&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-topo.service",type="service",name="psTopo";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_topo_service_angular_service_id_2b79dcf8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_topo_service_angular_service_id_2b79dcf8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo2.service":
/*!***********************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-topo2.service ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_topo2_service_angular_service_id_635844e8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-topo2.service?angular=service&id=635844e8&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_topo2_service_angular_service_id_635844e8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-topo2.service?angular=service&id=635844e8&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-topo2.service",type="service",name="psTopo2";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_topo2_service_angular_service_id_635844e8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_topo2_service_angular_service_id_635844e8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-track-data.service":
/*!****************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-track-data.service ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_track_data_service_angular_service_id_75d73a2c_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-track-data.service?angular=service&id=75d73a2c&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_track_data_service_angular_service_id_75d73a2c_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-track-data.service?angular=service&id=75d73a2c&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-track-data.service",type="service",name="psTrackData";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_track_data_service_angular_service_id_75d73a2c_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_track_data_service_angular_service_id_75d73a2c_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-chart.service":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker-chart.service ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_tracker_chart_service_angular_service_id_48359639_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-tracker-chart.service?angular=service&id=48359639&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_tracker_chart_service_angular_service_id_48359639_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-tracker-chart.service?angular=service&id=48359639&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-tracker-chart.service",type="service",name="psTrackerChart";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_tracker_chart_service_angular_service_id_48359639_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_tracker_chart_service_angular_service_id_48359639_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-creator.service":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker-creator.service ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_tracker_creator_service_angular_service_id_547efb87_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-tracker-creator.service?angular=service&id=547efb87&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_tracker_creator_service_angular_service_id_547efb87_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-tracker-creator.service?angular=service&id=547efb87&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-tracker-creator.service",type="service",name="psTrackerCreator";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_tracker_creator_service_angular_service_id_547efb87_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_tracker_creator_service_angular_service_id_547efb87_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker.service":
/*!*************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tracker.service ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_tracker_service_angular_service_id_136c5828_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-tracker.service?angular=service&id=136c5828&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_tracker_service_angular_service_id_136c5828_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-tracker.service?angular=service&id=136c5828&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-tracker.service",type="service",name="psTracker";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_tracker_service_angular_service_id_136c5828_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_tracker_service_angular_service_id_136c5828_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tree-data.service":
/*!***************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-tree-data.service ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_tree_data_service_angular_service_id_e6da0bae_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-tree-data.service?angular=service&id=e6da0bae&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_tree_data_service_angular_service_id_e6da0bae_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-tree-data.service?angular=service&id=e6da0bae&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-tree-data.service",type="service",name="psTreeData";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_tree_data_service_angular_service_id_e6da0bae_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_tree_data_service_angular_service_id_e6da0bae_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-ui-router-handler.service":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-ui-router-handler.service ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_ui_router_handler_service_angular_service_id_310567cf_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-ui-router-handler.service?angular=service&id=310567cf&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_ui_router_handler_service_angular_service_id_310567cf_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-ui-router-handler.service?angular=service&id=310567cf&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-ui-router-handler.service",type="service",name="psUiRouterHandler";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_ui_router_handler_service_angular_service_id_310567cf_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_ui_router_handler_service_angular_service_id_310567cf_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.bak.service":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-websocket.bak.service ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_websocket_bak_service_angular_service_id_72a94695_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-websocket.bak.service?angular=service&id=72a94695&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_websocket_bak_service_angular_service_id_72a94695_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-websocket.bak.service?angular=service&id=72a94695&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-websocket.bak.service",type="service",name="bak";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_websocket_bak_service_angular_service_id_72a94695_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_websocket_bak_service_angular_service_id_72a94695_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.service":
/*!***************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/ps-websocket.service ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ps_websocket_service_angular_service_id_4e82b777_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ps-websocket.service?angular=service&id=4e82b777&type=config&lang=config&scoped=false */ "./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=config&lang=config&scoped=false");
/* harmony import */ var _ps_websocket_service_angular_service_id_4e82b777_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ps-websocket.service?angular=service&id=4e82b777&type=script&lang=js&scoped=false */ "./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/ps-websocket.service",type="service",name="psWebsocket";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_ps_websocket_service_angular_service_id_4e82b777_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_ps_websocket_service_angular_service_id_4e82b777_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/test.service":
/*!*******************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/services/test.service ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_service_angular_service_id_1fdd54e8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.service?angular=service&id=1fdd54e8&type=config&lang=config&scoped=false */ "./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=config&lang=config&scoped=false");
/* harmony import */ var _test_service_angular_service_id_1fdd54e8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.service?angular=service&id=1fdd54e8&type=script&lang=js&scoped=false */ "./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=script&lang=js&scoped=false");


var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/services/test.service",type="service",name="test";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_test_service_angular_service_id_1fdd54e8_type_config_lang_config_scoped_false__WEBPACK_IMPORTED_MODULE_0__["default"],script:_test_service_angular_service_id_1fdd54e8_type_script_lang_js_scoped_false__WEBPACK_IMPORTED_MODULE_1__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-ultility/ps-ultility.js":
/*!*************************************************!*\
  !*** ./node_modules/ps-ultility/ps-ultility.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  if (typeof window === "undefined") {
    if (true) {
      module.exports = factory();
    }
  } else {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  }
})(this, function () {
  var tostring = Object.prototype.toString,
      pop = Array.prototype.pop,
      push = Array.prototype.push,
      slice = Array.prototype.slice,
      shift = Array.prototype.shift,
      unshift = Array.prototype.unshift,
      isUndefined = isType("Undefined"),
      isNull = isType("Null"),
      isFunction = isType("Function"),
      isArray = isType("Array"),
      isString = isType("String"),
      isNumber = isType("Number"),
      isObject = isType("Object"),
      requireCached = createCache(),
      cssCached = createCache();

  function createCache() {
    var keys = [];

    var cached = function cached(key, value) {
      if (typeof value !== "undefined") {
        keys.push(key);
        cached["__" + key] = value;
      } else {
        return cached["__" + key];
      }
    };

    cached.keys = function () {
      return keys;
    };

    return cached;
  }

  function urlparser(input) {
    function splitByChar(str, _char) {
      var regex = "^([^" + _char + "]+)\\" + _char + "(.*)",
          match = new RegExp(regex).exec(str);
      return match ? match.slice(1) : [str];
    }

    function slice(queue, target) {
      var obj = {},
          item = queue.shift(),
          match;

      if (item) {
        match = new RegExp(item[1]).exec(target);

        if (match) {
          if (match[1]) {
            obj[item[0]] = match[1];
            extend(obj, slice(queue, match[2]));
          } else {
            obj[item[0]] = match[0];
          }
        } else {
          extend(obj, slice(queue, target));
        }
      }

      return obj;
    }

    function makeHost(url) {
      var protocol = "^(?:([^:\\/]+)\\:\/\/)?",
          address = "([^:/?\\#]+)",
          port = "(?::(\\d+))?",
          urlExp = protocol + address + port + "(.*)",
          match = new RegExp(urlExp).exec(url),
          u = match.shift(),
          protocal = match.shift() || "http",
          address = match.shift(),
          port = (match.shift() || 80) - 0,
          path = match.shift() || "/";
      return {
        host: protocal + "://" + address + ":" + port + path,
        protocol: protocal,
        address: address,
        port: port,
        path: path
      };
    }

    function makeQUery(query) {
      var queue = query.split("&"),
          item,
          rs = {};

      while (item = queue.shift()) {
        var dt = item.split("=");
        rs[dt[0]] = dt[1];
      }

      return rs;
    }

    var match1 = splitByChar(input, "?"),
        host = match1[0],
        hostObj = makeHost(host),
        rest = match1[1],
        match2 = rest ? splitByChar(rest, "#") : [],
        query = match2[0],
        queryObj = query ? makeQUery(query) : {},
        hash = match2[1] || undefined,
        rs = {
      hash: hash
    };
    return extend(rs, hostObj, {
      query: queryObj
    });
  }

  function remove$$hashKey(str) {
    var regex = /(?:,\s*\"\${2}hashKey\"\s*:\s*\"[^"]*\"\s*)|(?:\"\${2}hashKey\"\s*:\s*\"[^"]*\"\s*,)/g;

    while (regex.test(str)) {
      str = str.replace(regex, "");
    }

    ;
    return str;
  }

  ;

  function jsonparser(str) {
    var json;

    try {
      json = JSON.parse(str);
    } catch (e) {
      console.error(e);
      json = null;
    } finally {
      return json;
    }
  }

  function requirejs(require, deps, callback) {
    var rs = [];

    function load(deps) {
      var url = deps.shift(),
          cache = requireCached(url);

      if (!url) {
        callback.apply(window, rs);
        return;
      }

      if (cache) {
        rs.push(cache);
        load(deps);
      } else {
        require([url], function (n) {
          rs.push(n);
          load(deps);
        });
      }
    }

    load(deps);
  }

  function requireCss(css, callback) {
    function loadCss(url, callback) {
      if (typeof cssCached(url) !== "undefined") {
        cssCached(url).remove();
      }

      var link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", url);
      document.head.appendChild(link);

      link.onload = function (e) {
        cssCached(url, link);
        typeof callback === "function" ? callback(e) : null;
      };
    }

    function load(css) {
      var url = css.shift();
      url ? loadCss(url, function (e) {
        load(css);
      }) : typeof callback == "function" ? callback() : null;
    }

    load(css);
  }

  function camelhill(str) {
    var rs = "",
        arr = [].slice.call(str),
        _char2;

    while (_char2 = arr.shift()) {
      if (_char2 === "-") {
        _char2 = arr.shift();
        _char2 = typeof _char2 === "undefined" ? "" : _char2.toUpperCase();
      }

      rs += _char2;
    }

    return rs;
  }

  function unCamelhill(str) {
    var rs = "",
        arr = [].slice.call(str),
        _char3;

    while (_char3 = arr.shift()) {
      if (/[A-Z]/.test(_char3)) {
        _char3 = _char3.toLowerCase();
        rs += "-";
      }

      rs += _char3;
    }

    return rs;
  }

  function random(length) {
    length = length || 16;
    var chars = "abcdedfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
        rs = "",
        rnd,
        len = chars.length;

    for (var i = 0; i < length; i++) {
      rnd = parseInt(Math.random() * len);
      rs += chars[rnd];
    }

    return rs;
  }

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function list2Tree(list, fn, key) {
    var tree = null;
    key = key || 'children';
    each(list, function (n) {
      var findParent = list.find(function (m, i) {
        return fn(n, m);
      });

      if (!findParent) {
        tree = n;
      } else {
        findParent[key] = findParent[key] || [];
        findParent[key].push(n);
      }
    });
    return [tree];
  }

  function attribute(obj, attr, val) {
    if (!isObject(obj)) {
      return undefined;
    }

    if (attr[0] !== "[" && attr[0] !== ".") {
      attr = "." + attr;
    }

    ;
    var attrRegex = "(?:[\\w$@])",
        numRegex = "(?:[\\d])",
        regex = "\\[\\\'(" + attrRegex + "+)\\\'\\]|\\[\\\"(" + attrRegex + "+)\\\"\\]|\\[(" + numRegex + "+)\\]|\\.(" + attrRegex + "+)";
    var sofar = attr,
        match,
        key;

    while (match = new RegExp(regex).exec(sofar)) {
      key = match[1] || match[2] || match[3] || match[4];
      sofar = sofar.slice(match[0].length);

      if (typeof val === "undefined") {
        if (isObject(obj) && typeof obj[key] !== "undefined") {
          obj = obj[key];
        } else {
          return undefined;
        }
      } else {
        obj = obj[key] = new RegExp(regex).test(sofar) ? obj[key] || {} : val;
      }
    }

    return obj;
  }

  function deepClone(obj) {
    var rs = recursive(obj);

    function recursive(node) {
      var rs = node instanceof Array ? [] : {};

      for (var i in node) {
        if (_typeof(node[i]) === "object") {
          rs[i] = recursive(node[i]);
        } else {
          rs[i] = node[i];
        }
      }

      return rs;
    }

    return rs;
  }

  function extend() {
    var args = [].slice.call(arguments),
        cur = args.shift(),
        target;

    while (target = args.shift()) {
      for (var i in target) {
        cur[i] = target[i];
      }
    }

    return cur;
  }

  ;

  function isType(type) {
    return function (obj) {
      return tostring.call(obj) == "[object " + type + "]" && obj === obj;
    };
  }

  function find(arr, callback) {
    var i;
    arr = arr || [];

    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        return arr[i];
      }
    }
  }

  function filter(arr, callback) {
    var i,
        rs = [];
    arr = arr || [];

    for (var i = 0; i < arr.length; i++) {
      if (callback(arr[i], i)) {
        rs.push(arr[i]);
      }
    }

    return rs;
  }

  function each(arr, callback) {
    var i;
    arr = arr || [];

    for (i = 0; i < arr.length; i++) {
      callback && callback(arr[i], i);
    }
  }

  function eachProp(obj, callback) {
    var i;
    obj = obj || {};

    for (var i in obj) {
      callback && callback(obj[i], i);
    }
  }

  function isEmpty(obj) {
    return isUndefined(obj) || isNull(obj);
  }

  function pushDiff(a, b) {
    a = a || [];
    b = isEmpty(b) ? [] : isArray(b) ? b : [b];
    each(b, function (n) {
      a.indexOf(n) === -1 ? a.push(n) : null;
    });
    return a.length;
  }

  function addStyle(elem, style) {
    eachProp(style, function (n, i) {
      elem.style[i] = n;
    });
  }

  function setStyle(dom, style) {
    style && eachProp(style, function (elem, attr) {
      dom.style[attr] = elem;
    });
  }

  function tree(key) {
    key = key || "children";

    function creatRecursive(config) {
      config = config || {};

      var onMatch = config.match || function () {},
          onEnd = config.end || function () {};

      return function (node, callback) {
        var queue, item, node, list, condi, stop;

        if (_typeof(node) === "object" || node !== null) {
          queue = isArray(node) ? node.map(function (n, i) {
            return createItem(n, i, [], node);
          }) : [createItem(node, 0, [], [node])];
        } else {
          queue = [];
        }

        function createItem(node, index, parentNodes, parentlist) {
          return {
            node: node,
            index: index,
            parentNodes: parentNodes,
            parentlist: parentlist
          };
        }

        function values(obj) {
          var rs = [];

          for (var i in obj) {
            rs.push(obj[i]);
          }

          return rs;
        }

        while (item = queue.shift()) {
          node = item.node;
          list = isArray(node[key]) ? node[key] : [];
          condi = typeof callback === "function" ? callback.apply(null, values(item)) : null;

          if (condi === true) {
            stop = onMatch(node);

            if (typeof stop !== "undefined") {
              return stop;
            }

            ;
          }

          [].push.apply(queue, list.map(function (n, i) {
            return createItem(n, i, item.parentNodes.concat(node), list);
          }));
        }

        stop = onEnd(node);

        if (typeof stop !== "undefined") {
          return stop;
        }

        ;
      };
    }

    function reverseCondition(callback) {
      return function () {
        return !callback.apply(null, arguments);
      };
    }

    function forEach(node, callback) {
      creatRecursive()(node, callback);
    }

    function find(node, callback) {
      return creatRecursive({
        match: function match(n) {
          return n;
        }
      })(node, callback);
    }

    function filter(node, callback) {
      var rs = [];
      creatRecursive()(node, function () {
        if (callback.apply(null, arguments)) {
          rs.push(arguments[0]);
        }

        ;
      });
      return rs;
    }

    function every(node, callback) {
      return creatRecursive({
        match: function match(n) {
          return false;
        },
        end: function end() {
          return true;
        }
      })(node, reverseCondition(callback));
    }

    function some(node, callback) {
      return creatRecursive({
        match: function match(n) {
          return true;
        },
        end: function end() {
          return false;
        }
      })(node, callback);
    }

    return {
      forEach: forEach,
      find: find,
      filter: filter,
      every: every,
      some: some
    };
  }

  function addClass(elem, cls) {
    var oldcls = elem.getAttribute("class"),
        oldClsList = isString(oldcls) ? oldcls.split(" ") : [],
        clsList = cls.split(" ");
    pushDiff(oldClsList, clsList);
    elem.setAttribute("class", oldClsList.join(" "));
  }

  function setClass(elem, cs) {
    elem.setAttribute("class", cs);
  }

  function hasClass(elem, cls) {
    if (elem && typeof elem.getAttribute === "function") {
      var oldcls = elem.getAttribute("class"),
          oldClsList = isString(oldcls) ? oldcls.split(" ") : [];
      return oldClsList.indexOf(cls) != -1;
    } else {
      return false;
    }
  }

  function removeClass(elem, cls) {
    if (!(elem && typeof elem.getAttribute === "function")) {
      return;
    }

    var oldcls = elem.getAttribute("class"),
        oldClsList = isString(oldcls) ? oldcls.split(" ") : [],
        i = oldClsList.indexOf(cls);
    i != -1 && oldClsList.splice(i, 1);
    elem.setAttribute("class", oldClsList.join(" "));
  }

  function hasParent(elem, target) {
    var parent = elem;

    while (parent) {
      if (parent === target) {
        return true;
      }

      parent = parent.parentElement;
    }

    return false;
  }

  function appendChildren() {
    var self = this;
    var arr = slice.call(arguments, 0);
    each(arr, function (el) {
      self.append(el);
    });
  }

  function getFilePath(path) {
    var unit = "[^.\\\\\\/]",
        regex = "^(.*)(?:\\\\|\\/)" + unit + "+\\." + unit + "+$",
        match = new RegExp(regex, "g").exec(path);
    return match ? match[1] : null;
  }

  function getFileName(path) {
    var unit = "[^.\\\\\\/]",
        regex = "^.*(?:\\\\|\\/)(" + unit + "+)\\." + unit + "+$",
        match = new RegExp(regex, "g").exec(path);
    return match ? match[1] : null;
  }

  function getFileExt(path) {
    var unit = "[^.\\\\\\/]",
        regex = "\\.(" + unit + "+)$",
        match = new RegExp(regex, "g").exec(path);
    return match ? match[1] : null;
  }

  function screenOffset(context) {
    var target = context,
        x = target.offsetLeft,
        y = target.offsetTop;

    while (target = target.offsetParent) {
      x += target.offsetLeft + target.clientLeft;
      y += target.offsetTop + target.clientTop;
    }

    target = context;

    while (target = target.parentElement) {
      x -= target.scrollLeft;
      y -= target.scrollTop;
    }

    return {
      left: x,
      top: y
    };
  }

  function createElement(tag) {
    return document.createElement(tag);
  }

  function createDocumentFragment() {
    return document.createDocumentFragment();
  }

  function topArray(obj) {
    return slice.call(obj);
  }

  function findElement(context, callback) {
    var stack = topArray(context.children),
        len,
        item;

    while (item = stack.pop()) {
      if (callback(item)) {
        return item;
      }

      item.children ? push.apply(stack, topArray(item.children)) : null;
    }
  }

  function filterElement(context, callback) {
    var stack = topArray(context.children),
        len,
        item,
        rs = [];

    while (item = stack.pop()) {
      callback(item) ? rs.push(item) : null;
      item.children ? push.apply(stack, topArray(item.children)) : null;
    }

    return rs;
  }

  var pathResolver = {
    join: function join() {
      var arr = [],
          minus = [],
          args = [].slice.call(arguments).map(function (d) {
        if (typeof d === "string") {
          return d;
        } else if (typeof d === "number") {
          return d + "";
        }

        return ".";
      }),
          item;

      function join(arr, append) {
        var item;

        while (item = append.shift()) {
          if (item == "..") {
            arr.length ? arr.pop() : minus.push("..");
          } else if (item == ".") {} else {
            arr.push(item);
          }
        }
      }

      function toPathAry(str) {
        return str.split("/").filter(function (d) {
          return d;
        });
      }

      while (item = args.shift()) {
        item = toPathAry(item);
        join(arr, item);
      }

      return minus.length ? minus.join("/") + "/" + arr.join("/") : "./" + arr.join("/");
    }
  };

  var dh = function () {
    /**
     * Date Handler Created by leonlin.
     * e.g.
     * 1) create a Date Object on Today
     * var dh = datehandler();
     * 2) create a Date on certain Date
     * var dh = datehandler('2017/12/31,10:20')
     * 3) Add several years on original Date Object
     * dh.addYear(1); dh.addYear(-2);
     * 3) Add several years on clone Date Object
     * var clone = dh.addYear(1, true)
     * 4)output date string
     * var str = dh.getDateString();
     * var str = dh.getDateString('yy/MM/dd,hh');
     * 5)output utc date string
     * var utcstr = dh.getUTCDateString();
     * var utcstr = dh.getUTCDateString('yy/MM/dd,hh');
     */
    function DateHandler(dateStr) {
      return new DateHandler.fn.init(dateStr);
    }

    ;
    var VERSION = "DateHandler v1.0.0",
        ISDATEHANDLER = "isDateHandler",
        SECONDTIMESTAMP = 1000,
        MINUTETIMESTAMP = 60 * SECONDTIMESTAMP,
        HOURTIMESTAMP = 60 * MINUTETIMESTAMP,
        DAYTIMESTAMP = 24 * HOURTIMESTAMP,
        OFFSET = "0800",
        events = {};

    function extend() {
      var args = [].slice.call(arguments),
          cur = args.shift(),
          target;

      while (target = args.shift()) {
        for (var i in target) {
          cur[i] = target[i];
        }
      }

      return cur;
    }

    ;

    function to2Char(num) {
      if (num < 10) {
        return "0" + num;
      } else {
        return num;
      }
    }

    ;

    function to3Char(num) {
      if (num < 10) {
        return "00" + num;
      } else if (num < 100) {
        return "0" + num;
      } else {
        return num;
      }
    }

    ;

    function dateObject(date) {
      function dObject(d) {
        var cur = this;
        extend(cur, {
          year: d.getFullYear(),
          month: d.getMonth() + 1,
          dat: d.getDate(),
          hour: d.getHours(),
          minute: d.getMinutes(),
          second: d.getSeconds(),
          milisecond: d.getMilliseconds(),
          utcyear: d.getUTCFullYear(),
          utcmonth: d.getUTCMonth() + 1,
          utcdat: d.getUTCDate(),
          utchour: d.getUTCHours(),
          utcminute: d.getUTCMinutes(),
          utcsecond: d.getUTCSeconds(),
          utcmilisecond: d.getUTCMilliseconds()
        });
      }

      ;

      dObject.prototype.toString = function () {
        var cur = this,
            str;
        str = cur.year + "-";
        str += to2Char(cur.month) + "-";
        str += to2Char(cur.dat) + ":";
        str += to2Char(cur.hour) + ":";
        str += to2Char(cur.minute) + ":";
        str += to2Char(cur.second) + ".";
        str += to2Char(cur.utcmilisecond) + "+" + OFFSET;
        return str;
      };

      dObject.prototype.toUTCString = function () {
        var cur = this,
            str;
        str = cur.utcyear + "-";
        str += to2Char(cur.utcmonth) + "-";
        str += to2Char(cur.utcdat) + ":";
        str += to2Char(cur.utchour) + ":";
        str += to2Char(cur.utcminute) + ":";
        str += to2Char(cur.utcsecond) + ".";
        str += to2Char(cur.utcmilisecond) + "+" + OFFSET;
        return str;
      };

      return new dObject(date);
    }

    DateHandler.fn = DateHandler.prototype;

    DateHandler.fn.init = function (dateStr) {
      var cur = this;
      cur.on("dateChange", function (d) {
        cur.setDate(d);
      });

      if (typeof dateStr === "undefined" || dateStr === null) {
        cur.setDate(new Date());
        return;
      }

      if (_typeof(dateStr) === "object" && dateStr.isDateHandler === "isDateHandler") {
        cur.setDate(dateStr.date);
        return;
      }

      cur.setDate(_typeof(dateStr) === "object" ? dateStr : new Date(dateStr));
    };

    DateHandler.fn.init.prototype = DateHandler.fn;
    extend(DateHandler.fn.init.prototype, {
      version: VERSION,
      isDateHandler: ISDATEHANDLER,
      on: function on(eventName, callback) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(callback);
      },
      clone: function clone() {
        var cur = this;
        return new DateHandler.fn.init(cur.getTimeStamp());
      },
      setDate: function setDate(d) {
        var cur = this;
        cur.date = d;
        cur.dateObject = dateObject(d);
        cur.dateString = cur.dateObject.toString();
        cur.utcDateString = cur.dateObject.toUTCString();
      },
      update: function update() {
        var cur = this;
        var str = cur.dateObject.toString();
        cur.setDate(new Date(str));
      },
      addYear: function addYear(num, clone) {
        var target = clone == true ? this.clone() : this;
        target.dateObject.year += parseInt(num);
        target.update();
        return target;
      },
      addMonth: function addMonth(num, clone) {
        var target = clone == true ? this.clone() : this;
        var madd = target.dateObject.month + parseInt(num);
        var yadd = 0;

        while (madd < 1) {
          madd += 12;
          yadd--;
        }

        while (madd > 12) {
          madd -= 12;
          yadd++;
        }

        target.dateObject.year += yadd;
        target.dateObject.month = madd;
        target.update();
        return target;
      },
      addDay: function addDay(num, clone) {
        var target = clone == true ? this.clone() : this;
        var dateMinSecond = DAYTIMESTAMP * num;
        target.addTimeStamp(dateMinSecond);
        return target;
      },
      addHour: function addHour(num, clone) {
        var target = clone == true ? this.clone() : this;
        var dateMinSecond = HOURTIMESTAMP * num;
        target.addTimeStamp(dateMinSecond);
        return target;
      },
      addMinute: function addMinute(num, clone) {
        var target = clone == true ? this.clone() : this;
        var dateMinSecond = MINUTETIMESTAMP * num;
        target.addTimeStamp(dateMinSecond);
        return target;
      },
      addSecond: function addSecond(num, clone) {
        var target = clone == true ? this.clone() : this;
        var dateMinSecond = SECONDTIMESTAMP * num;
        target.addTimeStamp(dateMinSecond);
        return target;
      },
      addTimeStamp: function addTimeStamp(timestamp, clone) {
        var target = clone == true ? this.clone() : this;
        var minSecond = target.date.getTime() + timestamp;
        target.setDate(new Date(minSecond));
        return target;
      },
      trimmToYear: function trimmToYear(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year + "-01-01,00:00:00.000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      trimmToMonth: function trimmToMonth(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year + "-" + to2Char(target.dateObject.month) + "-01,00:00:00.000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      trimmToWeek: function trimmToWeek(clone) {
        var target = clone == true ? this.clone() : this;
        var d = target.date.getDay() || 7;
        return target.addDay(1 - d).trimmToDate();
      },
      trimmToDate: function trimmToDate(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year;
        dt += "-" + to2Char(target.dateObject.month);
        dt += "-" + to2Char(target.dateObject.dat) + ",00:00:00.000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      trimmToHour: function trimmToHour(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year;
        dt += "-" + to2Char(target.dateObject.month);
        dt += "-" + to2Char(target.dateObject.dat);
        dt += "," + to2Char(target.dateObject.hour) + ":00:00.000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      trimmToMinute: function trimmToMinute(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year;
        dt += "-" + to2Char(target.dateObject.month);
        dt += "-" + to2Char(target.dateObject.dat);
        dt += "," + to2Char(target.dateObject.hour);
        dt += ":" + to2Char(target.dateObject.minute) + ":00.000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      trimmToSecond: function trimmToSecond(clone) {
        var target = clone == true ? this.clone() : this;
        var dt = target.dateObject.year;
        dt += "-" + to2Char(target.dateObject.month);
        dt += "-" + to2Char(target.dateObject.dat);
        dt += "," + to2Char(target.dateObject.hour);
        dt += ":" + to2Char(target.dateObject.minute);
        dt += ":" + to2Char(target.dateObject.second) + ".000+" + OFFSET;
        target.setDate(new Date(dt));
        return target;
      },
      getDate: function getDate() {
        return this.date;
      },
      getTimeStamp: function getTimeStamp() {
        return this.date.getTime();
      },
      getYear: function getYear() {
        return this.dateObject.year;
      },
      getMonth: function getMonth() {
        return this.dateObject.month;
      },
      getDateString: function getDateString(str) {
        var year = this.dateObject.year;
        var month = this.dateObject.month;
        var dat = this.dateObject.dat;
        var hour = this.dateObject.hour;
        var minute = this.dateObject.minute;
        var second = this.dateObject.second;
        var milisecond = this.dateObject.milisecond;

        if (str) {
          str = str.replace(/y+/g, year);
          str = str.replace(/M+/g, to2Char(month));
          str = str.replace(/d+/g, to2Char(dat));
          str = str.replace(/h+/g, to2Char(hour));
          str = str.replace(/m+/g, to2Char(minute));
          str = str.replace(/s+/g, to2Char(second));
          return str.replace(/n+/g, to3Char(milisecond));
        } else {
          return year + "-" + to2Char(month) + "-" + to2Char(dat) + "," + to2Char(hour) + ":" + to2Char(minute) + ":" + to2Char(second) + "." + to3Char(milisecond) + "+" + OFFSET;
        }
      },
      getUTCDateString: function getUTCDateString(str) {
        var utcyear = this.dateObject.utcyear;
        var utcmonth = this.dateObject.utcmonth;
        var utcdat = this.dateObject.utcdat;
        var utchour = this.dateObject.utchour;
        var utcminute = this.dateObject.utcminute;
        var utcsecond = this.dateObject.utcsecond;
        var utcmilisecond = this.dateObject.utcmilisecond;

        if (str) {
          str = str.replace(/y+/g, utcyear);
          str = str.replace(/M+/g, to2Char(utcmonth));
          str = str.replace(/d+/g, to2Char(utcdat));
          str = str.replace(/h+/g, to2Char(utchour));
          str = str.replace(/m+/g, to2Char(utcminute));
          str = str.replace(/s+/g, to2Char(utcsecond));
          return str.replace(/n+/g, to3Char(utcsecond));
        } else {
          return utcyear + "-" + to2Char(utcmonth) + "-" + to2Char(utcdat) + "T" + to2Char(utchour) + ":" + to2Char(utcminute) + ":" + to2Char(utcsecond) + "." + to3Char(utcmilisecond) + "Z";
        }
      }
    });
    return DateHandler;
  }();

  return {
    random: random,
    isUndefined: isUndefined,
    isNull: isNull,
    isFunction: isFunction,
    isArray: isArray,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    addStyle: addStyle,
    setStyle: setStyle,
    addClass: addClass,
    setClass: setClass,
    hasClass: hasClass,
    hasParent: hasParent,
    removeClass: removeClass,
    appendChildren: appendChildren,
    createElement: createElement,
    createDocumentFragment: createDocumentFragment,
    findElement: findElement,
    filterElement: filterElement,
    screenOffset: screenOffset,
    each: each,
    tree: tree,
    pathResolver: pathResolver,
    requirejs: requirejs,
    requireCss: requireCss,
    pushDiff: pushDiff,
    eachProp: eachProp,
    list2tree: list2Tree,
    list2Tree: list2Tree,
    find: find,
    getFilePath: getFilePath,
    getFileName: getFileName,
    getFileExt: getFileExt,
    filter: filter,
    isType: isType,
    clone: clone,
    camelhill: camelhill,
    unCamelhill: unCamelhill,
    deepClone: deepClone,
    extend: extend,
    jsonparser: jsonparser,
    urlparser: urlparser,
    dateparser: dh,
    remove$$hashKey: remove$$hashKey,
    attribute: attribute
  };
});

/***/ }),

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=services&smartangular":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=services&smartangular ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_leonlin_Linjingbin_ps_iot_web_replace_node_modules_smart_angular_dist_lib_angular_loader_js_id_934206__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/smart-angular/dist/lib/angular-loader.js?id=934206 */ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=934206");

var handlers = [];
handlers.push(__webpack_require__(/*! ./ps-baogang/services/common-method-service2.service */ "./ps-baogang/services/common-method-service2.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-area-state.service */ "./ps-baogang/services/ps-area-state.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-btn-click.service */ "./ps-baogang/services/ps-btn-click.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-config.service */ "./ps-baogang/services/ps-config.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-mock.service */ "./ps-baogang/services/ps-mock.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-new-websocket.service */ "./ps-baogang/services/ps-new-websocket.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-polling.service */ "./ps-baogang/services/ps-polling.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-topo.service */ "./ps-baogang/services/ps-topo.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-topo2.service */ "./ps-baogang/services/ps-topo2.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-track-data.service */ "./ps-baogang/services/ps-track-data.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-tracker-chart.service */ "./ps-baogang/services/ps-tracker-chart.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-tracker-creator.service */ "./ps-baogang/services/ps-tracker-creator.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-tracker.service */ "./ps-baogang/services/ps-tracker.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-tree-data.service */ "./ps-baogang/services/ps-tree-data.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-ui-router-handler.service */ "./ps-baogang/services/ps-ui-router-handler.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-websocket.bak.service */ "./ps-baogang/services/ps-websocket.bak.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/ps-websocket.service */ "./ps-baogang/services/ps-websocket.service")["default"]);
handlers.push(__webpack_require__(/*! ./ps-baogang/services/test.service */ "./ps-baogang/services/test.service")["default"]);
var renderAll = Object(_Users_leonlin_Linjingbin_ps_iot_web_replace_node_modules_smart_angular_dist_lib_angular_loader_js_id_934206__WEBPACK_IMPORTED_MODULE_0__["render"])(handlers, true);
typeof psdefine === "function" && psdefine(function () {
  return renderAll;
});

/***/ }),

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=934206":
/*!*************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?id=934206 ***!
  \*************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
var render = function render(handlers, inConfig) {
  return function (angularModule, url, callback) {
    if (typeof url === "function") {
      callback = url;
      url = undefined;
    }

    var configs = [],
        baseurl = getloadpath(url);

    function getloadpath(url) {
      if (typeof url === "undefined") {
        return "./";
      } //let match = /^(.*\/ps-(\w+)\/build\/)/.exec(url);


      var match = /^(.*\/build\/)/.exec(url);
      return match ? match[1] : "./";
    }

    handlers.forEach(function (setup) {
      var config = setup(angularModule);
      config && config.type === "router" ? configs.push(config) : null;
    });

    if (configs.length > 0 && inConfig) {
      angularModule.config(['$stateProvider', '$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($stateProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        $locationProvider.hashPrefix('');
        var angularConfig = window.__smartAngular__ = window.__smartAngular__ || {};
        angularConfig.routers = angularConfig.routers || [];
        [].push.apply(angularConfig.routers, configs);
        configs.forEach(function (_ref) {
          var router = _ref.router,
              ctrlname = _ref.ctrlname,
              loaderpath = _ref.loaderpath,
              template = _ref.template;

          function hasRegistered(service, name) {
            return angularModule._invokeQueue.some(function (item) {
              return item[1] === service && item[2][0] === name;
            });
          }

          if (!hasRegistered("factory", "$registerService")) {
            $provide.factory("$registerService", function () {
              return {
                getRouters: function getRouters() {
                  return window.__smartAngular__["routers"];
                },
                controller: function controller() {
                  $controllerProvider.register.apply($controllerProvider, arguments);

                  this._invokeQueue.push(["$controllerProvider", "controller", [arguments[0]]]);
                },
                directive: function directive() {
                  $compileProvider.directive.apply($compileProvider, arguments);

                  this._invokeQueue.push(["$compileProvider", "directive", [arguments[0]]]);
                },
                filter: function filter() {
                  $filterProvider.register.apply($filterProvider, arguments);

                  this._invokeQueue.push(["$filterProvider", "filter", [arguments[0]]]);
                },
                factory: function factory() {
                  $provide.factory.apply($provide, arguments);

                  this._invokeQueue.push(["$provide", "factory", [arguments[0]]]);
                },
                service: function service() {
                  $provide.service.apply($provide, arguments);

                  this._invokeQueue.push(["$provide", "service", [arguments[0]]]);
                },
                _invokeQueue: [].slice.call(angularModule._invokeQueue)
              };
            });
          }

          var names = [[ctrlname, router], ["prod_controller.".concat(ctrlname), "/prod_dashboard/:id/:showTree/:main_active_index".concat(router)], ["prod_sub_dashboard.sub_".concat(ctrlname), "/subview/:sub_active_index".concat(router)], ["prod_sub_dashboard.minor_dashboard.minor_".concat(ctrlname), "/minor_view/:minor_active_index".concat(router)]];
          names.forEach(function (name) {
            var config = {
              url: name[1],
              name: name[0],
              template: template,
              controller: ctrlname,
              resolve: {
                loader: ["$q", "$registerService", function (q, registerService) {
                  var defer = q.defer(),
                      time = new Date();

                  if (loaderpath == null || loaderpath.length == 0) {
                    defer.resolve("success");
                    return defer.promise;
                  }

                  var deps = loaderpath.map(function (d) {
                    return baseurl + d;
                  });
                  psrequire(deps, function () {
                    var args = [].slice.call(arguments),
                        endTime = (new Date() - time) / 1000,
                        first = args.shift();

                    var _first = first(registerService),
                        template = _first.template;

                    console.log(endTime.toFixed(2) + "s is spent on importing new controllers and dependencies.");
                    setTemplate(template);

                    for (var i in args) {
                      args[i](registerService);
                    }

                    defer.resolve("success");
                  });
                  return defer.promise;
                }]
              }
            };

            function setTemplate(str) {
              $stateProvider.stateRegistry.states[name[0]].views.$default.template = str;
            }

            $stateProvider.state(config);
          });
        });
      }]);
    }

    typeof callback === "function" ? callback(angularModule) : null;
  };
};



/***/ }),

/***/ "./ps-baogang/services/common-method-service2.service":
/*!************************************************************!*\
  !*** ./ps-baogang/services/common-method-service2.service ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_common_method_service2_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./common-method-service2.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/common-method-service2.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_common_method_service2_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_common_method_service2_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=config&lang=config&scoped=false":
/*!*****************************************************************************************************************************!*\
  !*** ./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=config&lang=config&scoped=false ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$parse,$timeout,$q,$compile,ajax,$state,psUiRouterHandler,psTreeData,resourceUIService,psLoading"});

/***/ }),

/***/ "./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=script&lang=js&scoped=false":
/*!*************************************************************************************************************************!*\
  !*** ./ps-baogang/services/common-method-service2.service?angular=service&id=72366e3e&type=script&lang=js&scoped=false ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_common_method_service2_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./common-method-service2.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/common-method-service2.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_common_method_service2_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-area-state.service":
/*!***************************************************!*\
  !*** ./ps-baogang/services/ps-area-state.service ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_area_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-area-state.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-area-state.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_area_state_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_area_state_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=config&lang=config&scoped=false":
/*!********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=config&lang=config&scoped=false ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$q"});

/***/ }),

/***/ "./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=script&lang=js&scoped=false":
/*!****************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-area-state.service?angular=service&id=511a424f&type=script&lang=js&scoped=false ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_area_state_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-area-state.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-area-state.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_area_state_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-btn-click.service":
/*!**************************************************!*\
  !*** ./ps-baogang/services/ps-btn-click.service ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_btn_click_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-btn-click.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-btn-click.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_btn_click_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_btn_click_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=config&lang=config&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=config&lang=config&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,psTreeData,$state,$q,commonMethodService,commonMethodService2,ajax,growl,psRouter,psDialog","deps":"troubleshootDialog"});

/***/ }),

/***/ "./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=script&lang=js&scoped=false":
/*!***************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-btn-click.service?angular=service&id=2a19ae87&type=script&lang=js&scoped=false ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_btn_click_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-btn-click.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-btn-click.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_btn_click_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-config.service":
/*!***********************************************!*\
  !*** ./ps-baogang/services/ps-config.service ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-config.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-config.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_config_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_config_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=config&lang=config&scoped=false":
/*!****************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=config&lang=config&scoped=false ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q"});

/***/ }),

/***/ "./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=script&lang=js&scoped=false":
/*!************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-config.service?angular=service&id=0a112cc0&type=script&lang=js&scoped=false ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_config_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-config.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-config.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_config_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-mock.service":
/*!*********************************************!*\
  !*** ./ps-baogang/services/ps-mock.service ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_mock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-mock.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-mock.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_mock_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_mock_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=config&lang=config&scoped=false":
/*!**************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=config&lang=config&scoped=false ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q"});

/***/ }),

/***/ "./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=script&lang=js&scoped=false":
/*!**********************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-mock.service?angular=service&id=3cd1dcc8&type=script&lang=js&scoped=false ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_mock_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-mock.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-mock.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_mock_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-new-websocket.service":
/*!******************************************************!*\
  !*** ./ps-baogang/services/ps-new-websocket.service ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_new_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-new-websocket.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-new-websocket.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_new_websocket_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_new_websocket_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=config&lang=config&scoped=false":
/*!***********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=config&lang=config&scoped=false ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$q,$rootScope"});

/***/ }),

/***/ "./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=script&lang=js&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-new-websocket.service?angular=service&id=65e847ec&type=script&lang=js&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_new_websocket_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-new-websocket.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-new-websocket.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_new_websocket_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-polling.service":
/*!************************************************!*\
  !*** ./ps-baogang/services/ps-polling.service ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_polling_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-polling.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-polling.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_polling_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_polling_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=config&lang=config&scoped=false":
/*!*****************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=config&lang=config&scoped=false ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,ajax,psWebsocket"});

/***/ }),

/***/ "./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=script&lang=js&scoped=false":
/*!*************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-polling.service?angular=service&id=cdbf8c9a&type=script&lang=js&scoped=false ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_polling_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-polling.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-polling.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_polling_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-topo.service":
/*!*********************************************!*\
  !*** ./ps-baogang/services/ps-topo.service ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_topo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-topo.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_topo_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_topo_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=config&lang=config&scoped=false":
/*!**************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=config&lang=config&scoped=false ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,$state,psTreeData,ajax,resourceUIService,kpiDataService,psWebsocket,SwSocket,unitService,commonMethodService2"});

/***/ }),

/***/ "./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=script&lang=js&scoped=false":
/*!**********************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-topo.service?angular=service&id=2b79dcf8&type=script&lang=js&scoped=false ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_topo_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-topo.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_topo_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-topo2.service":
/*!**********************************************!*\
  !*** ./ps-baogang/services/ps-topo2.service ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_topo2_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-topo2.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo2.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_topo2_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_topo2_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=config&lang=config&scoped=false":
/*!***************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=config&lang=config&scoped=false ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,$state,psTreeData,ajax,resourceUIService,kpiDataService,psWebsocket,SwSocket,unitService,commonMethodService2"});

/***/ }),

/***/ "./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=script&lang=js&scoped=false":
/*!***********************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-topo2.service?angular=service&id=635844e8&type=script&lang=js&scoped=false ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_topo2_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-topo2.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-topo2.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_topo2_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-track-data.service":
/*!***************************************************!*\
  !*** ./ps-baogang/services/ps-track-data.service ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_track_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-track-data.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-track-data.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_track_data_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_track_data_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=config&lang=config&scoped=false":
/*!********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=config&lang=config&scoped=false ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$q, $timeout"});

/***/ }),

/***/ "./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=script&lang=js&scoped=false":
/*!****************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-track-data.service?angular=service&id=75d73a2c&type=script&lang=js&scoped=false ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_track_data_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-track-data.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-track-data.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_track_data_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-chart.service":
/*!******************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-chart.service ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_tracker_chart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-tracker-chart.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-chart.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_tracker_chart_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_tracker_chart_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=config&lang=config&scoped=false":
/*!***********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=config&lang=config&scoped=false ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,$state,ajax,growl,psStore,commonMethodService,commonMethodService2,psRouter,psBtnClick"});

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=script&lang=js&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-chart.service?angular=service&id=48359639&type=script&lang=js&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_chart_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-tracker-chart.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-chart.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_chart_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-creator.service":
/*!********************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-creator.service ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_tracker_creator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-tracker-creator.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-creator.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_tracker_creator_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_tracker_creator_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=config&lang=config&scoped=false":
/*!*************************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=config&lang=config&scoped=false ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q"});

/***/ }),

/***/ "./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=script&lang=js&scoped=false":
/*!*********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker-creator.service?angular=service&id=547efb87&type=script&lang=js&scoped=false ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_creator_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-tracker-creator.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker-creator.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_creator_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-tracker.service":
/*!************************************************!*\
  !*** ./ps-baogang/services/ps-tracker.service ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_tracker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-tracker.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_tracker_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_tracker_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=config&lang=config&scoped=false":
/*!*****************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=config&lang=config&scoped=false ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,$state,ajax,growl,psStore,commonMethodService,psRouter,psBtnClick"});

/***/ }),

/***/ "./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=script&lang=js&scoped=false":
/*!*************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tracker.service?angular=service&id=136c5828&type=script&lang=js&scoped=false ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-tracker.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tracker.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tracker_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-tree-data.service":
/*!**************************************************!*\
  !*** ./ps-baogang/services/ps-tree-data.service ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_tree_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-tree-data.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tree-data.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_tree_data_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_tree_data_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=config&lang=config&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=config&lang=config&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,$state,ajax,resourceUIService,kpiDataService,psWebsocket,psConfig"});

/***/ }),

/***/ "./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=script&lang=js&scoped=false":
/*!***************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-tree-data.service?angular=service&id=e6da0bae&type=script&lang=js&scoped=false ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tree_data_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-tree-data.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-tree-data.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_tree_data_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-ui-router-handler.service":
/*!**********************************************************!*\
  !*** ./ps-baogang/services/ps-ui-router-handler.service ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_ui_router_handler_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-ui-router-handler.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-ui-router-handler.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_ui_router_handler_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_ui_router_handler_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=config&lang=config&scoped=false":
/*!***************************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=config&lang=config&scoped=false ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope,$q,ajax,$state,psTreeData,$registerService,psConfig"});

/***/ }),

/***/ "./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=script&lang=js&scoped=false":
/*!***********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-ui-router-handler.service?angular=service&id=310567cf&type=script&lang=js&scoped=false ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_ui_router_handler_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-ui-router-handler.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-ui-router-handler.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_ui_router_handler_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.bak.service":
/*!******************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.bak.service ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_websocket_bak_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-websocket.bak.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.bak.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_websocket_bak_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_websocket_bak_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=config&lang=config&scoped=false":
/*!***********************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=config&lang=config&scoped=false ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$q,$rootScope"});

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=script&lang=js&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.bak.service?angular=service&id=72a94695&type=script&lang=js&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_websocket_bak_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-websocket.bak.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.bak.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_websocket_bak_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.service":
/*!**************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.service ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_ps_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./ps-websocket.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_ps_websocket_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_ps_websocket_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=config&lang=config&scoped=false":
/*!*******************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=config&lang=config&scoped=false ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$q,$rootScope"});

/***/ }),

/***/ "./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=script&lang=js&scoped=false":
/*!***************************************************************************************************************!*\
  !*** ./ps-baogang/services/ps-websocket.service?angular=service&id=4e82b777&type=script&lang=js&scoped=false ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_websocket_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./ps-websocket.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/ps-websocket.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_ps_websocket_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/services/test.service":
/*!******************************************!*\
  !*** ./ps-baogang/services/test.service ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_test_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./test.service */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/test.service");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_test_service__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_test_service__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=config&lang=config&scoped=false":
/*!***********************************************************************************************************!*\
  !*** ./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=config&lang=config&scoped=false ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$rootScope"});

/***/ }),

/***/ "./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=script&lang=js&scoped=false":
/*!*******************************************************************************************************!*\
  !*** ./ps-baogang/services/test.service?angular=service&id=1fdd54e8&type=script&lang=js&scoped=false ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_test_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./test.service?angular=service&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/services/test.service?angular=service&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_test_service_angular_service_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=service.js.map