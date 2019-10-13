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
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_componentpermiss&smartangular");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=script":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=script ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ps-ultility */ "./node_modules/ps-ultility/ps-ultility.js");
/* harmony import */ var ps_ultility__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ps_ultility__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (scope, ajax, stateParams, psDialog, psRouter, growl, psUltility, psLoading, registerService) {
  var paramObj = {
    roleID: stateParams.roleID
  },
      resultObj,
      arr = [],
      routerArr = [],
      clipboard;

  function parse(str) {
    var obj = null;

    try {
      obj = JSON.parse(str);
    } catch (e) {
      console.error(e);
      return obj;
    }

    return obj;
  }

  ajax.post("userEnterpriseService.queryEnterpriseRole").then(function (data) {
    data.forEach(function (v) {
      if (v.roleID == stateParams.roleID) {
        paramObj.roleName = v.roleName;
        resultObj = JSON.parse(v.values) || {
          "index": 0,
          "id": 0,
          "children": [],
          "label": "视图配置",
          "_isRoot": true
        };
        scope.layout = {
          init: {},
          modals: {
            editModel: {
              label: "设备类型",
              type: "layout",
              children: [{
                type: "form-dialog",
                data: null,
                children: [{
                  type: "input",
                  label: "序号",
                  composory: true,
                  key: "index"
                }, {
                  type: "select",
                  label: "视图名称",
                  composory: true,
                  key: "viewId",
                  options: {
                    url: "viewFlexService.getAllMyViews",
                    params: [],
                    after: function after(d) {
                      scope.arr = [];
                      arr = d.filter(function (f) {
                        return f.viewType == "dashboard";
                      }).map(function (v) {
                        v["id"] = v["viewId"];
                        v["label"] = v["viewTitle"];
                        return v;
                      }); //路由controller的名字加入视图下拉中

                      routerArr = registerService.getRouters().map(function (v) {
                        v["id"] = v["ctrlname"];
                        v["label"] = v["ctrlname"];
                        return v;
                      });
                      arr = arr.concat(routerArr);
                      return scope.arr = arr;
                    }
                  },
                  config: {
                    // disabled: "disabled"
                    on: {
                      select: function select(event) {// psUltility.setData(scope.addObj, {
                        //     name: event.$select.viewTitle,
                        // })
                      }
                    }
                  }
                }, {
                  type: "input",
                  label: "页签名称",
                  composory: true,
                  key: "name"
                }, {
                  type: "input",
                  label: "别名",
                  composory: false,
                  key: "alias"
                }, {
                  type: "checkbox",
                  label: "显示树",
                  composory: false,
                  key: "showTree",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "checkbox",
                  label: "本节点视图优先",
                  composory: false,
                  key: "viewPriority",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "checkbox",
                  label: "隐藏菜单",
                  composory: false,
                  key: "hideNavi",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "checkbox",
                  label: "只包含设备",
                  composory: false,
                  key: "deviceOnly",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "checkbox",
                  label: "子标题显示为下拉菜单",
                  composory: false,
                  key: "subDrop",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "checkbox",
                  label: "特殊链接",
                  composory: false,
                  key: "specialLink",
                  config: {
                    format: {
                      "true": 1,
                      "false": 0
                    }
                  }
                }, {
                  type: "input",
                  label: "链接地址",
                  composory: false,
                  key: "link"
                }, {
                  label: "操作",
                  type: "button",
                  config: {
                    label: "复制到其他角色同名节点",
                    on: {
                      click: function click(e) {
                        var data = e.$scope.getData(),
                            item;
                        ajax.post("userEnterpriseService.queryEnterpriseRole").then(function (roles) {
                          function recursive(roles) {
                            var role = roles.shift(),
                                edit = false,
                                values;

                            if (role) {
                              role = JSON.parse(JSON.stringify(role));
                              values = role.values;

                              if (values) {
                                values = parse(values);
                                Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["tree"])("children").forEach(values, function (node) {
                                  if (node.name == data.name) {
                                    node.viewId = data.viewId;
                                    node.showTree = data.showTree;
                                    node.deviceOnly = data.deviceOnly;
                                    node.children = data.children;
                                    edit = true;
                                    Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["tree"])("children").forEach(node.children, function (child) {
                                      child.parentModelId = node.id;
                                    });
                                  }
                                });

                                if (edit) {
                                  role.values = JSON.stringify(values);
                                  ajax.post("userRoleUIService.modifyRole", role).then(function (d) {
                                    recursive(roles);
                                  })["catch"](function (e) {
                                    console.warn("[" + role.roleName + "]修改发生错误，跳到下一个");
                                    recursive(roles);
                                  });
                                } else {
                                  console.warn("[" + role.roleName + "]角色没有修改节点，跳到下一个");
                                  recursive(roles);
                                }
                              } else {
                                console.warn("[" + role.roleName + "]角色没有values属性，跳到下一个");
                                recursive(roles);
                              }
                            } else {
                              growl.success("已经复制同名节点到其他角色");
                            }
                          }

                          recursive(roles.slice());
                        });
                      }
                    }
                  }
                }]
              }],
              buttons: [{
                label: "保存",
                "class": "btn btn-primary",
                click: function click(e) {
                  this.submit();
                }
              }, {
                label: "取消",
                click: function click() {
                  this.close();
                }
              }]
            }
          },
          label: "组件权限",
          children: [{
            type: "form-inline",
            children: [{
              type: "label",
              value: "标题名称",
              config: {
                "class": '.ver-mid'
              }
            }, {
              type: "input",
              label: "标题名称",
              key: "searchKey",
              config: {
                updateOn: "submitted"
              }
            }, {
              type: "button",
              config: {
                label: "查询",
                "class": "btn btn-sm btn-primary",
                click: function click(e) {
                  e.emit("submitted");
                }
              }
            }, {
              type: "button",
              config: {
                label: "重置",
                "class": "btn btn-sm btn-default",
                click: function click(e) {
                  e.setData({
                    searchKey: ""
                  });
                }
              }
            }]
          }, {
            type: "tree-view2",
            options: [resultObj],
            parentId: "parentModelId",
            config: {
              search: "searchKey",
              format: {
                id: "viewId",
                label: "viewTitle"
              }
            },
            buttons: [{
              label: "",
              "class": "glyphicon glyphicon-trash",
              tit: "刪除",
              icon: "",
              on: {
                click: function click(e) {
                  var obj;
                  e.remove({
                    before: function before(source) {
                      var rs = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["clone"])(resultObj);
                      obj = source;

                      function deleteRecursion(item) {
                        //删除一级
                        if (e.$row.parentModelId == 0) {
                          item.children = item.children.filter(function (v) {
                            if (v.id !== e.$row.id) {
                              return v;
                            }
                          });
                          item.children.sort(function (a, b) {
                            return a.index - 0 - b.index;
                          });
                        } else {
                          for (var i = 0; i < item.children.length; i++) {
                            var isFlag = false;

                            if (item.children[i].id == e.$row.id) {
                              isFlag = true;
                              item.children = item.children.filter(function (v) {
                                if (v.id !== e.$row.id) {
                                  return v;
                                }
                              });
                              item.children.sort(function (a, b) {
                                return a.index - 0 - b.index;
                              });
                            }

                            if (!isFlag) {
                              deleteRecursion(item.children[i]);
                            }
                          }
                        }
                      }

                      deleteRecursion(rs);
                      paramObj["values"] = JSON.stringify(rs);
                      return paramObj;
                    },
                    after: function after(d) {
                      return obj;
                    },
                    url: "userRoleUIService.modifyRole"
                  });
                }
              }
            }, {
              label: "",
              "class": "glyphicon glyphicon-file",
              tit: "粘贴",
              icon: "",
              rootShow: true,
              on: {
                click: function click(e) {
                  if (typeof clipboard === "undefined") {
                    return;
                  }

                  var dt = e.$row;
                  dt.children = dt.children || [];
                  dt.children.push(clipboard);
                  paramObj["values"] = JSON.stringify(resultObj);
                  ajax.post("userRoleUIService.modifyRole", paramObj).then(function () {
                    growl.success("粘贴成功");
                  });
                }
              }
            }, {
              label: "",
              "class": "glyphicon glyphicon-scissors",
              tit: "剪切",
              icon: "",
              rootShow: true,
              on: {
                click: function click(e) {
                  var dt = e.$row;
                  Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["tree"])().forEach(resultObj, function (item, i, p) {
                    var parent = p[p.length - 1];

                    if (dt.id == item.id) {
                      parent.children.splice(i, 1);
                      clipboard = dt;
                    }
                  });
                  paramObj["values"] = JSON.stringify(resultObj);
                  ajax.post("userRoleUIService.modifyRole", paramObj).then(function () {
                    growl.success("剪切成功");
                  });
                }
              }
            }, {
              label: "",
              "class": "proudsmart ps-edit",
              tit: "编辑",
              icon: "",
              on: {
                click: function click(e) {
                  var obj;
                  e.update({
                    template: "editModel",
                    before: function before(source) {
                      psLoading.showLoadingTip();
                      var rs = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["clone"])(resultObj);
                      obj = source;

                      function editRecursion(item) {
                        if (e.$row.parentModelId == 0) {
                          item.children.some(function (ele, index) {
                            if (ele.id == e.$row.id) {
                              source["label"] = source.name;
                              ele = angular.extend(ele, source);
                            }
                          });
                          item.children.sort(function (a, b) {
                            return a.index - 0 - b.index;
                          });
                        } else {
                          for (var i = 0; i < item.children.length; i++) {
                            var isFlag = false;

                            if (item.children[i].id == e.$row.id) {
                              isFlag = true;
                              item.children.some(function (ele, index) {
                                if (ele.id == e.$row.id) {
                                  source["label"] = source.name;
                                  ele = angular.extend(ele, source);
                                }
                              });
                              item.children.sort(function (a, b) {
                                return a.index - 0 - b.index;
                              });
                            }

                            if (!isFlag) {
                              editRecursion(item.children[i]);
                            }
                          }
                        }
                      }

                      editRecursion(rs); // 编辑一级标题

                      paramObj["values"] = JSON.stringify(rs);
                      return paramObj;
                    },
                    after: function after(d) {
                      psLoading.closeLoading();
                      return obj;
                    },
                    url: "userRoleUIService.modifyRole"
                  });
                }
              }
            }, {
              label: "",
              "class": "glyphicon glyphicon-plus",
              tit: "添加",
              icon: "",
              rootShow: true,
              on: {
                click: function click(e) {
                  // 弹框的方法
                  var obj;
                  e.add({
                    template: "editModel",
                    before: function before(s) {
                      psLoading.showLoading();
                      var rs = Object(ps_ultility__WEBPACK_IMPORTED_MODULE_0__["clone"])(resultObj);
                      s["id"] = Math.uuid();
                      s["label"] = s.name;
                      s["children"] = [];
                      s["showTree"] = s.showTree || 0;
                      s["deviceOnly"] = s.deviceOnly || 0;
                      s["specialLink"] = s.specialLink || 0;
                      s["parentModelId"] = e.$row.id;
                      obj = s;

                      function addRecursion(item) {
                        if (e.$row.id == 0) {
                          item.children.push(s);
                          item.children.sort(function (a, b) {
                            return a.index - 0 - b.index;
                          });
                        } else {
                          for (var i = 0; i < item.children.length; i++) {
                            var isFlag = false;

                            if (item.children[i].id == e.$row.id) {
                              isFlag = true;
                              item.children[i].children.push(s);
                              item.children[i].children.sort(function (a, b) {
                                return a.index - 0 - b.index;
                              });
                            }

                            if (!isFlag) {
                              addRecursion(item.children[i]);
                            }
                          }
                        }
                      }

                      addRecursion(rs);
                      paramObj["values"] = JSON.stringify(rs);
                      return paramObj;
                    },
                    after: function after(d) {
                      psLoading.closeLoading();
                      return obj;
                    },
                    url: "userRoleUIService.modifyRole"
                  });
                }
              }
            }]
          }]
        };
      }
    });
  });
});
;

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

/***/ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prod_componentpermiss_controller_angular_controller_id_132e7118_type_config_lang_config_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prod_componentpermiss.controller?angular=controller&id=132e7118&type=config&lang=config&scoped=true */ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=config&lang=config&scoped=true");
/* harmony import */ var _prod_componentpermiss_controller_angular_controller_id_132e7118_type_template_lang_template_scoped_true__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prod_componentpermiss.controller?angular=controller&id=132e7118&type=template&lang=template&scoped=true */ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=template&lang=template&scoped=true");
/* harmony import */ var _prod_componentpermiss_controller_angular_controller_id_132e7118_type_script_lang_js_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prod_componentpermiss.controller?angular=controller&id=132e7118&type=script&lang=js&scoped=true */ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=script&lang=js&scoped=true");
/* harmony import */ var _prod_componentpermiss_controller_angular_controller_id_132e7118_type_style_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prod_componentpermiss.controller?angular=controller&id=132e7118&type=style&lang=less&scoped=true */ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=style&lang=less&scoped=true");




var path="/Users/leonlin/Linjingbin/ps_iot_web_replace/ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller",type="controller",name="prod_componentpermiss";;
/* harmony default export */ __webpack_exports__["default"] = ({ config:_prod_componentpermiss_controller_angular_controller_id_132e7118_type_config_lang_config_scoped_true__WEBPACK_IMPORTED_MODULE_0__["default"],template:_prod_componentpermiss_controller_angular_controller_id_132e7118_type_template_lang_template_scoped_true__WEBPACK_IMPORTED_MODULE_1__["default"],script:_prod_componentpermiss_controller_angular_controller_id_132e7118_type_script_lang_js_scoped_true__WEBPACK_IMPORTED_MODULE_2__["default"],style:_prod_componentpermiss_controller_angular_controller_id_132e7118_type_style_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_3__["default"],path:path,type:type,name:name });

/***/ }),

/***/ "./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=template&id=132e7118&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=template&id=132e7118&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = { scoped : true, id : "132e7118", template : "\n  \n  <section class=\"content\" id=\"alerts\" data-a-132e7118>\n    <div class=\"row\" data-a-132e7118>\n      <div class=\"col-md-12\" data-a-132e7118>\n        <div class=\"box\" data-a-132e7118>\n          <div class=\"box-header\" data-a-132e7118>\n            <div class=\"box-tools pull-left nav-tabs-header\" data-a-132e7118>\n              <navi-tabs data-navigators=\"navigators\" data-a-132e7118></navi-tabs>\n            </div>\n            <div class=\"box-tools pull-right\" data-a-132e7118>\n              <span class=\"history-btn\" role=\"button\" ng-show=\"showbackhistory\" data-toggle=\"返回\" onclick=\"window.history.back();\" data-a-132e7118><i class=\"proudsmart ps-back-01\" data-a-132e7118></i></span>\n            </div>\n          </div>\n          <div class=\"box-body\" data-a-132e7118>\n            \n    <ps-layout data-option=\"layout\" data-a-132e7118></ps-layout>\n  \n          </div>\n          <div class=\"box-footer\" data-a-132e7118>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n" };

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

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_componentpermiss&smartangular":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?factory=ps-baogang&path=controllers&file=prod_componentpermiss&smartangular ***!
  \*******************************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_leonlin_Linjingbin_ps_iot_web_replace_node_modules_smart_angular_dist_lib_angular_loader_js_id_2986484__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/smart-angular/dist/lib/angular-loader.js?id=2986484 */ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=2986484");

var handlers = [];
handlers.push(__webpack_require__(/*! ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller */ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller")["default"]);
var renderAll = handlers[0];
typeof psdefine === "function" && psdefine(function () {
  return renderAll;
});

/***/ }),

/***/ "./node_modules/smart-angular/dist/lib/angular-loader.js?id=2986484":
/*!**************************************************************************!*\
  !*** ./node_modules/smart-angular/dist/lib/angular-loader.js?id=2986484 ***!
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

/***/ "./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?id=132e7118&angular=controller&type=style&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?id=132e7118&angular=controller&type=style&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller":
/*!**************************************************************************************!*\
  !*** ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ps-angular-loader/lib!./prod_componentpermiss.controller */ "./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/ps-angular-loader/lib/angular-explainer.js */ "./node_modules/ps-angular-loader/lib/angular-explainer.js");
/* harmony import */ var _node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_angular_explainer_js__WEBPACK_IMPORTED_MODULE_1___default.a.get(_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller__WEBPACK_IMPORTED_MODULE_0__["default"].type, _node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=config&lang=config&scoped=true":
/*!*********************************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=config&lang=config&scoped=true ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"injector":"$scope,ajax,$stateParams,psDialog,psRouter,growl,psUltility,psLoading,$registerService","params":"/:roleID?"});

/***/ }),

/***/ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=script&lang=js&scoped=true":
/*!*****************************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=script&lang=js&scoped=true ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../../node_modules/ps-angular-loader/lib!./prod_componentpermiss.controller?angular=controller&type=script */ "./node_modules/babel-loader/lib/index.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=script");

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_script__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=style&lang=less&scoped=true":
/*!******************************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=style&lang=less&scoped=true ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_id_132e7118_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/ps-angular-loader/lib/loaders/style-loader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!../../../node_modules/ps-angular-loader/lib!./prod_componentpermiss.controller?id=132e7118&angular=controller&type=style&scoped=true */ "./node_modules/smart-angular/node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/style-loader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/ps-angular-loader/lib/loaders/angular-dispatcher.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?id=132e7118&angular=controller&type=style&scoped=true");
/* harmony import */ var _node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_id_132e7118_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_id_132e7118_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_smart_angular_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_style_loader_js_node_modules_less_loader_dist_cjs_js_node_modules_ps_angular_loader_lib_loaders_angular_dispatcher_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_id_132e7118_angular_controller_type_style_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=template&lang=template&scoped=true":
/*!*************************************************************************************************************************************************************!*\
  !*** ./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&id=132e7118&type=template&lang=template&scoped=true ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_template_id_132e7118_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ps-angular-loader/lib/loaders/template-loader.js!../../../node_modules/ps-angular-loader/lib!./prod_componentpermiss.controller?angular=controller&type=template&id=132e7118&scoped=true */ "./node_modules/ps-angular-loader/lib/loaders/template-loader.js!./node_modules/ps-angular-loader/lib/index.js!./ps-baogang/controllers/componentPermissions/prod_componentpermiss.controller?angular=controller&type=template&id=132e7118&scoped=true");
/* harmony import */ var _node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_template_id_132e7118_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_template_id_132e7118_scoped_true__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_node_modules_ps_angular_loader_lib_loaders_template_loader_js_node_modules_ps_angular_loader_lib_index_js_prod_componentpermiss_controller_angular_controller_type_template_id_132e7118_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

/******/ });
//# sourceMappingURL=prod_componentpermiss.js.map