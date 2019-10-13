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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_authorize_domain&smartangular");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=script":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=script ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* harmony default export */ __webpack_exports__["default"] = (function (scope, timeout, $state, registerService, ajax, cms2, growl, psLoading) {
  var queryUserByCondition = "userUIService.queryUserByCondition",
      getResourceByModelId = "resourceUIService.getResourceByModelId",
      domainMap = {},
      userInfo = null,
      userID = $state.params.userID;

  var tableCell =
  /*#__PURE__*/
  function () {
    function tableCell(data) {
      _classCallCheck(this, tableCell);

      for (var i in data) {
        this[i] = data[i];
      }
    }

    _createClass(tableCell, [{
      key: "remove",
      value: function remove() {
        var _this = this;

        scope.domains = scope.domains.filter(function (d) {
          return d !== _this;
        });
      }
    }]);

    return tableCell;
  }();

  function getDomainId(domainPath) {
    var match = /\/(\d+)\/$/.exec(domainPath);
    return match ? match[1] - 0 : null;
  }

  function getParents(d) {
    if (typeof d === "undefined") {
      return;
    }

    var domainPath = d.domainPath,
        id = d.id,
        item,
        rs = [],
        queue = domainPath.split("/").slice(1, -1);

    while (item = queue.shift()) {
      if (item == id) {
        return rs;
      }

      rs.push(item - 0);
    }

    return null;
  }

  scope.current = null;
  ajax.post(queryUserByCondition, {
    userID: userID
  }).then(function (user) {
    userInfo = user[0];
    var domainIds = userInfo.domainIds.split(",").map(function (d) {
      return d - 0;
    }),
        userDomainId = getDomainId(userInfo.domainPath);
    return ajax.post(getResourceByModelId, 300).then(function (domains) {
      return ajax.post(getResourceByModelId, 301).then(function (customer) {
        return ajax.post(getResourceByModelId, 302).then(function (project) {
          return cms2.success(domains.concat(customer).concat(project));
        });
      });
    }).then(function (domains) {
      domainMap = domains.reduce(function (a, b) {
        a[b.id] = b;
        return a;
      }, {});
      var allIds = domainIds.concat(userDomainId);
      domainIds = allIds.reduce(function (a, b) {
        var parents = getParents(domainMap[b]).concat([b]);

        if (allIds.filter(function (d) {
          return d !== b;
        }).every(function (id) {
          return parents.indexOf(id) == -1;
        })) {
          a[b] = domainMap[b];
        }

        return a;
      }, {});
      scope.allDomains = domains;
      scope.domains = domains.filter(function (d) {
        return domainIds[d.id];
      }).map(function (d) {
        return new tableCell(d);
      });
    });
  });
  scope.navigators = [{
    label: "域授权",
    active: true
  }, {
    label: "数据授权",
    click: function click() {
      $state.go("prod_authorize_device", {
        userID: userID
      });
    }
  }];

  scope.save = function () {
    var domainIds = scope.domains.map(function (d) {
      return d.id;
    }).join(",");
    userInfo.domainIds = domainIds; //return;

    ajax.post("userUIService.modifyUser", userInfo).then(function (d) {
      growl.success("领授权完成");
    })["catch"](function (e) {
      growl.error(e);
    });
  };

  scope.back = function () {
    window.location.href = "/app-oc/index.html#/usermanager";
  };

  scope.treeSelect = function (domain) {
    domain = domain - 0;
    var selDomainsParents = scope.domains.reduce(function (a, b) {
      var arr = getParents(domainMap[b.id]);
      return a.concat(arr.filter(function (c) {
        return a.indexOf(c) == -1;
      }));
    }, []),
        domainParents = getParents(domainMap[domain]);

    if (selDomainsParents.indexOf(domain) !== -1) {
      growl.warning("所选域不可为当前所选域的父域");
      return;
    }

    if (domainParents.some(function (d) {
      return scope.domains.some(function (_ref) {
        var id = _ref.id;
        return id == d;
      });
    })) {
      growl.warning("所选域不可为所选域的子集");
      return;
    }

    scope.domains = scope.domains.concat([new tableCell(domainMap[domain])]);
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

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller":
/*!******************************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/prod_authorize_domain.controller ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_config_lang_config_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=config&lang=config&scoped=true */ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=config&lang=config&scoped=true");
/* harmony import */ var _prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_template_lang_template_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=template&lang=template&scoped=true */ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=template&lang=template&scoped=true");
/* harmony import */ var _prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_script_lang_js_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=script&lang=js&scoped=true */ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=script&lang=js&scoped=true");
/* harmony import */ var _prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_style_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=style&lang=less&scoped=true */ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=style&lang=less&scoped=true");




var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/controllers/prod_authorize_domain.controller",type="controller",name="prod_authorize_domain";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_config_lang_config_scoped_true__WEBPACK_IMPORTED_MODULE_0__["default"],template:_prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_template_lang_template_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"],script:_prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_script_lang_js_scoped_true__WEBPACK_IMPORTED_MODULE_2__["default"],style:_prod_authorize_domain_controller_angular_controller_id_16b48d9e_type_style_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_3__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=template&id=16b48d9e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=template&id=16b48d9e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { scoped : true, id : "16b48d9e", template : "\n  <section class=\"content\" id=\"alerts\" data-a-16b48d9e>\n    <div class=\"row\" data-a-16b48d9e>\n      <div class=\"col-md-12\" data-a-16b48d9e>\n        <div class=\"box\" data-a-16b48d9e>\n          <div class=\"box-header\" data-a-16b48d9e>\n            <div class=\"box-tools pull-left nav-tabs-header\" data-a-16b48d9e>\n              <ul class=\"nav nav-tabs\" data-a-16b48d9e>\n                <li ng-class=\"{true : \'active\'}[nav.active]\" ng-click=\"nav.click()\" ng-repeat=\"nav in navigators\" data-a-16b48d9e>\n                  <a ng-bind=\"nav.label\" data-a-16b48d9e></a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"box-tools pull-right\" data-a-16b48d9e>\n              <span class=\"history-btn\" role=\"button\" ng-click=\"back();\" data-a-16b48d9e><i class=\"proudsmart ps-back-01\" data-a-16b48d9e></i></span>\n            </div>\n          </div>\n          <div class=\"box-body\" data-a-16b48d9e>\n            <div class=\"row\" data-a-16b48d9e>\n              <div class=\"col-md-3\" data-a-16b48d9e>\n                <table style=\"width:100%;\" data-a-16b48d9e>\n                  <td style=\"width:100px;\" data-a-16b48d9e>\n                    <label class=\"form-label\" data-a-16b48d9e>选择管理域：</label>\n                  </td>\n                  <td data-a-16b48d9e>\n                    <ps-tree ng-model=\"domain\" data-change=\"treeSelect(domain)\" data-options=\"item.id as item.label for item in allDomains\" data-a-16b48d9e></ps-tree>\n                  </td>\n                </table>\n              </div>\n              <div class=\"col-md-3\" data-a-16b48d9e>\n                <button class=\"btn btn-primary\" ng-click=\"save()\" data-a-16b48d9e>\n                  保存\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-footer\" data-a-16b48d9e>\n            <div class=\"wrap\" data-a-16b48d9e>\n              <div class=\"row\" data-a-16b48d9e>\n                <div class=\"col-md-12\" data-a-16b48d9e>\n                  <div class=\"wrap\" data-a-16b48d9e>\n                    <table ps-table-sync=\"\" data-current=\"current\" data-source=\"domains\" data-filter=\"filter\" data-sort=\"sort\" data-page=\"page\" data-a-16b48d9e>\n                      <thead data-a-16b48d9e>\n                      <tr data-a-16b48d9e>\n                        <th data-a-16b48d9e>域名称</th>\n                        <th data-a-16b48d9e>域描述</th>\n                        <th class=\"option\" data-a-16b48d9e>操作</th>\n                      </tr>\n                      </thead>\n                      <tbody data-a-16b48d9e>\n                      <tr ng-repeat=\"item in items\" data-a-16b48d9e>\n                        <td data-a-16b48d9e>\n                          <span ng-bind=\"item.label\" data-a-16b48d9e></span>\n                        </td>\n                        <td data-a-16b48d9e>\n                          <span ng-bind=\"item.description\" data-a-16b48d9e></span>\n                        </td>\n                        <td data-a-16b48d9e>\n                          <div ps-option-group=\"\" data-a-16b48d9e>\n                            <button class=\"btn btn-primary\" ng-click=\"item.remove()\" data-a-16b48d9e>\n                              <i class=\"fa fa-trash  hidden-lg hidden-md hidden-sm\" data-a-16b48d9e></i>\n                              删除\n                            </button>\n                          </div>\n                        </td>\n                      </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n" };

/***/ }),

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_authorize_domain&smartangular":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_authorize_domain&smartangular ***!
  \*******************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_leonlin_Linjingbin_ps_iot_web_replace_node_modules_smart_angular_dist_lib_angular_loader_js_id_1413195__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/smart-angular/dist/lib/angular-loader.js?id=1413195 */ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=1413195");

var handlers = [];
handlers.push(__webpack_require__(/*! ./ps-baogang/controllers/prod_authorize_domain.controller */ "./ps-baogang/controllers/prod_authorize_domain.controller")["default"]);
var renderAll = handlers[0];
typeof psdefine === "function" && psdefine(function () {
  return renderAll;
});

/***/ }),

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=1413195":
/*!**************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?id=1413195 ***!
  \**************************************************************************/
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

/***/ "./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?id=16b48d9e&angular=controller&type=style&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/prod_authorize_domain.controller?id=16b48d9e&angular=controller&type=style&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./ps-baogang/controllers/prod_authorize_domain.controller":
/*!*****************************************************************!*\
  !*** ./ps-baogang/controllers/prod_authorize_domain.controller ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib!./prod_authorize_domain.controller */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=config&lang=config&scoped=true":
/*!************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=config&lang=config&scoped=true ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$scope,$timeout,$state,$registerService,ajax,commonMethodService2,growl,psLoading","params":"/:userID"});

/***/ }),

/***/ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=script&lang=js&scoped=true":
/*!********************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=script&lang=js&scoped=true ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./prod_authorize_domain.controller?angular=controller&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=style&lang=less&scoped=true":
/*!*********************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=style&lang=less&scoped=true ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_id_16b48d9e_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/ps-angular-loader/lib/loaders/style-loader.js!../../node_modules/less-loader/dist/cjs.js!../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../node_modules/ps-angular-loader/lib!./prod_authorize_domain.controller?id=16b48d9e&angular=controller&type=style&scoped=true */ "./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?id=16b48d9e&angular=controller&type=style&scoped=true");
/* harmony import */ var _node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_id_16b48d9e_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_id_16b48d9e_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_id_16b48d9e_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=template&lang=template&scoped=true":
/*!****************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&id=16b48d9e&type=template&lang=template&scoped=true ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_template_id_16b48d9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ps-angular-loader/lib/loaders/template-loader.js!../../node_modules/ps-angular-loader/lib!./prod_authorize_domain.controller?angular=controller&type=template&id=16b48d9e&scoped=true */ "./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/prod_authorize_domain.controller?angular=controller&type=template&id=16b48d9e&scoped=true");
/* harmony import */ var _node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_template_id_16b48d9e_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_template_id_16b48d9e_scoped_true__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_authorize_domain_controller_angular_controller_type_template_id_16b48d9e_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

/******/ });
//# sourceMappingURL=prod_authorize_domain.js.map