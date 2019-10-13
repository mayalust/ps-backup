/**
 * Created by leonlin on 16/11/3.
 */
define(['./services.js', 'bootstrap-dialog', '../../toolkit/date-handler.js'], function (services, BootstrapDialog, dateHandler) {
  'use strict';
  var WIN = window || {};
  services.factory('commonMethodService', ['$location', '$state', '$stateParams', 'userEnterpriseService', '$timeout', '$rootScope', '$q', '$routeParams', 'Info', 'customMethodService', 'projectUIService', 'serviceCenterService', 'dictionaryService', 'energyConsumeUIService', 'ticketTaskService', 'resourceUIService', 'viewFlexService', 'userLoginUIService', '$route', '$window', 'growl', 'kpiDataService', 'SwSocket', 'alertService', 'userDomainService',
    'thridPartyApiService', 'freeboardBaseService', 'configUIService', 'serviceProxy', 'FileUploader', 'maintenanceTaskUIService', 'sparePartUIService', 'deviceResumeUIService', 'rollerPartUIService', '$registerService', 'psTreeData', 'psUiRouterHandler', 'psLoading', 'unitService', 'commonMethodService2',
    function (location, $state, $stateParams, userEnterpriseService, timeout, rootScope, q, routeParam, Info, customMethodService, projectUIService, serviceCenterService, dictionaryService, energyConsumeUIService, ticketTaskService, resourceUIService, viewFlexService, userLoginUIService, route, window, growl, kpiDataService, SwSocket, alertService, userDomainService, thridPartyApiService,
      freeboardBaseService, configUIService, serviceProxy, FileUploader, maintenanceTaskUIService, sparePartUIService, deviceResumeUIService, rollerPartUIService, registerService, psTreeData, psUiRouterHandler, psLoading, unitService, cms2) {
      var popIns, events = {};
      var viewCache = createCache(),
        resourceMap;
      var appSourceDictionary = new TaskJobClass();

      function TaskJobClass() {

      }
      TaskJobClass.prototype.setVal = function (name, val) {
        this[name] = val
      }
      TaskJobClass.prototype.getVal = function (name) {
        return this[name];
      }

      appSourceDictionary.setVal("智能诊断", "综合处理");
      appSourceDictionary.setVal("在线预警", "综合处理");
      appSourceDictionary.setVal("离线诊断", "综合处理");
      appSourceDictionary.setVal("合并报警", "综合处理");
      appSourceDictionary.setVal("智能决策", "综合处理");
      appSourceDictionary.setVal("故障漏报", "故障分析");
      appSourceDictionary.setVal("智能检修标准", "计划实施");
      appSourceDictionary.setVal("状态维护标准", "计划实施");
      appSourceDictionary.setVal("临时检修委托", "计划实施");
      appSourceDictionary.setVal("临时维护委托", "计划实施");

      function bind(target, fn) {
        return function () {
          return fn.apply(target, arguments);
        }
      }

      function createCache() {
        var keys = [];
        var cache = function (key, val) {
          if (typeof val === "undefined") {
            return cache["_" + key];
          }
          cache["_" + key] = val;
          keys.push(key);
        }
        cache.keys = function () {
          return keys;
        }
        return cache;
      }

      function cms(mydata, scope) {
        var clickFnDic = {}; //按钮的返回集合
        var alertMode = false;
        var rootTarget;
        var events = {};
        var oldURL = "";
        var setValue;
        var localStore = new LocalStore;
        var timeIntervals = [];
        var $getCurrentResource, $getResourceById, setValue;

        //window.addEventListener( "hashchange", hashkeyChangeListener );

        function convertMeasureLoc(a) {
          var json = JSONparse(a);

          function traverse(a) {
            if (Object.prototype.toString.call(a) == "[object Array]") {
              for (var i = 0; i < a.length; i++) {
                if (!a[i]['label'] && !a[i]['name']) {
                  traverse(a[i]);
                } else {
                  var n = a[i]['name'];
                  if (parseInt(n) > 999) {
                    a.splice(i, 1);
                    i--;
                  }
                }
              }
            } else if (Object.prototype.toString.call(a) == "[object Object]") {
              for (var i in a) {
                traverse(a[i]);
              }
            }
          };
          traverse(json);
          return JSON.stringify(json);
        }

        function extend(a, b) {
          for (var i in b) {
            a[i] = b[i];
          }
        }

        function clone(obj) {
          return JSON.parse(JSON.stringify(obj));
        }

        var routeStack = [];
        var JSONparse = function (str) {
          var json;
          if (typeof str == "object") {
            return str;
          } else {
            try {
              json = JSON.parse(str);
            } catch (e) {
              json = null;
            } finally {
              return json;
            }
          }
        };
        var themeCompare = {
          default: "default",
          Cyborg: "dark",
          Slate: "dark",
          Solar: "macarons"
        }
        var cmethod = function (data) {
          if (data) {
            this.$clone(data);
          }
        };
        var _proto_ = cmethod.prototype;
        _proto_.refresh = cms2.refresh;
        _proto_.getTaskJob = bind(cms2, cms2.getTaskJob);
        _proto_.getAppSource = bind(cms2, cms2.getAppSource);
        cmethod.kpiDic = {};
        cmethod.resourceDic = {};
        /**
         * //  2D视图：柱状图（barOption）、折线图（polylineOption）、饼图（pieOption）
         *     3D视图：散点图（scatter3DOption）、柱状图（bar3DOption）、折线图（line3DOption）
         * @returns {option}
         */

        function hasValue(str) {
          return function (item) {
            return item === str;
          }
        }

        function getViewByLocalId(viewId, path, callback) {
          function getViewId() {
            viewFlexService.getViewById(viewId, function (d) {
              var content = JSON.parse(d.data.content);
              var find;
              if (content.hasOwnProperty("groups")) {
                find = content.groups.find(function (elem) {
                  return elem.path == path;
                }) || {};
              } else if (content.hasOwnProperty("layout")) {
                find = content;
              }
              callback(find);
            });
          }
          if (["localhost", "127.0.0.1"].some(hasValue(window.location.hostname))) {
            psrequire(["../app-views/build/" + viewId + "." + path], function (view) {
              callback(view);
            }, function (e) {
              getViewId();
            })
          } else {
            getViewId();
          }
        }

        var createSystemPopup = function (object, config, data, depth) {
          var cur = this;
          cur.setValue("$POPUPDATA", data);
          config = config || {};
          var renderTo = $("body");
          var showcloseBtn = config.closeBtn;
          var themeObj = rootTarget ? JSONparse(rootTarget.setting) : {
            theme: "default"
          };
          // var theme = themeObj.theme || "default";
          var theme = "steel";
          var submitFn = config.$attr("on/submit");
          var cancelFn = config.$attr("on/cancel");
          var cur = this;
          var modelDia = $('<div id="bootstrap-dialog" class="modal bootstrap-dialog type-primary fade size-normal in" style="display : table-cell;" popup_layer="popup_layer">\
        <div class="modal-dialog">\
          <div class="modal-content">\
          <div class="modal-header bg-f2 padding-bottom-20">\
          <div class="bootstrap-dialog-header">\
          <a role="button" class="close">×</a>\
        <h4 class="modal-title info-box-number"></h4>\
          </div>\
          </div>\
          <div class="modal-body no-pad-top">\
          </div>\
          </div>\
          </div>\
          </div>');
          var contentDom = modelDia.find(".modal-dialog");
          contentDom.addClass(theme);
          // 设置背景的透明度
          var bgOpacity = config.bgOpacity;
          if (bgOpacity) {
            $(".bootstrap-dialog").css('background-color', "rgba(0, 0, 0, 0.8)");
          }
          contentDom.css("height", "auto");
          modelDia.addClass("block");
          contentDom.css("min-height", "0");
          var content = modelDia.find(".modal-dialog");
          var title = modelDia.find("h4");
          title.text(config.title || "标题文字");
          var outter = modelDia.find(".modal-body");
          var bg = $("<div></div>");
          var wrap = $("<div></div>");
          var closeBtn = modelDia.find("a.close");
          var span = $("<div></div>");
          modelDia.css("z-index", (depth + 1) || 10000);
          if (config.width != undefined) {
            content.css("width", config.width);
          }
          var row = $("<div></div>");
          row.addClass("row");
          row.append(wrap);
          outter.append(row);
          outter.attr("id", "pp");
          wrap.css("position", "relative");
          wrap.addClass("col-md-12");
          wrap.attr("id", "popup");
          wrap.css("width", "100%");
          wrap.css("padding-top", "10px");
          var destroy = function () {
            content.animate({
              "margin-top": 0
            }, 300, function () {
              modelDia.remove();
              cur.setValue("$POPUPDATA", null)
            });
            modelDia.animate({
              opacity: 0
            }, 100);
          };
          closeBtn.on("click", function (event) {
            if (cancelFn) {
              cancelFn();
            }
            destroy();
          });
          var instance = freeboardBaseService(wrap);
          instance.setMode(true);
          if (object.groups) {
            object.layout = object.groups[0].layout;
            delete object.groups;
          }
          if (object.layout) {
            object.layout = object.layout.$remapByChild(function (element) {
              var rs = new cmethod(element);
              rs.submit = function (obj) {
                if (obj.statuc == "cancel") {
                  destroy();
                } else {
                  if (submitFn) {
                    submitFn(obj, destroy);
                  }
                }
              };
              rs.cancel = function () {
                if (cancelFn) {
                  cancelFn();
                }
                destroy();
              };
              return rs;
            });
            instance.renderLayout(object);
          }
          modelDia.addClass("block");
          modelDia.attr("id", "free-board");
          modelDia.css("opacity", 0);
          modelDia.css("position", "absolute");
          modelDia.css("overflow-y", "auto");
          modelDia.animate({
            opacity: 1
          }, 100);
          content.css("margin-top", 0);
          content.animate({
            "margin-top": config.top
          }, 300);
          var popupLayer = $("[popup_layer]")
          if (popupLayer.size() > 0) {
            popupLayer.after(modelDia)
          } else {
            renderTo.prepend(modelDia);
          }
          return {
            destroy: destroy
          }
        };
        var createPopup = function (object, config, data, depth) {
          var cur = this;
          cur.setValue("$POPUPDATA", data);
          config = config || {};
          var renderTo = config.renderTo || $("body");
          var showcloseBtn = config.closeBtn;
          var bgOpacity = config.bgOpacity;
          if (bgOpacity == undefined) {
            bgOpacity = .1;
          }
          var submitFn = config.$attr("on/submit");
          var cancelFn = config.$attr("on/cancel");
          var cur = this;
          var outter = $("<div></div>");
          outter.attr("popup_layer", "popup_layer");
          var bg = $("<div></div>");
          var wrap = $("<div></div>");
          var closeBtn = $("<button></button>");
          var span = $("<div></div>");
          bg.attr("id", "popup_background");
          bg.css("position", "fixed");
          bg.css("width", "100vw");
          bg.css("height", "100vh");
          bg.css("background-color", "rgba(0,0,0," + bgOpacity + ")");
          bg.css("top", 0);
          bg.css("left", 0);
          bg.css("z-index", depth || 9999);
          outter.css("z-index", (depth + 1) || 10000);
          if (renderTo == "self") {
            renderTo = cur.getSelfDom();
          }
          if (config.top != undefined) {
            outter.css("top", config.top);
          }
          if (config.left != undefined) {
            outter.css("left", config.left);
          }
          if (config.right != undefined) {
            outter.css("right", config.right);
          }
          if (config.bottom != undefined) {
            outter.css("bottom", config.bottom);
          }
          closeBtn.css("position", "absolute");
          closeBtn.css("right", 5);
          closeBtn.css("top", 5);
          closeBtn.css("z-index", 10);
          closeBtn.addClass("btn-sm btn-default");
          closeBtn.css({
            "border": "1px solid rgb(67, 133, 187)",
            "color": "#ffffff",
            "backgroundColor": "rgb(67, 133, 187)",
          });
          span.addClass("glyphicon glyphicon-remove");
          closeBtn.append(span);
          if (showcloseBtn != false) {
            outter.append(closeBtn);
          }
          outter.append(wrap);
          outter.attr("id", "pp");
          wrap.css("position", "relative");
          wrap.addClass("col-md-12");
          wrap.attr("id", "popup");
          outter.css("position", "absolute");
          outter.css("width", (config.width || "400px"));
          wrap.css("width", "100%");
          wrap.css("background-color", "#fff");
          wrap.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.1)");
          var remove = function () {
            outter.animate({ opacity: 0 }, 200);
            outter.remove();
            bg.remove();
            cur.setValue("$POPUPDATA", null);
          }
          closeBtn.on("click", function (event) {
            outter.remove();
            if (cancelFn) {
              cancelFn();
            }

          });
          bg.on("click", function (event) {
            if (cancelFn) {
              cancelFn();
            }
            outter.remove();
            bg.remove();
          });
          var instance = freeboardBaseService(wrap);
          instance.setMode(true);
          object.layout = object.layout.$remapByChild(function (element) {
            var rs = new cmethod(element);
            rs.submit = function (obj) {
              if (submitFn) {
                submitFn(obj);
              }
              outter.remove();
              bg.remove();
            };
            rs.cancel = function () {
              if (cancelFn) {
                cancelFn();
              }
              outter.remove();
              bg.remove();
            };
            return rs;
          });
          instance.renderLayout(object);
          renderTo.prepend(outter);
          outter.addClass("block");
          outter.css("opacity", 0);
          outter.animate({
            opacity: 1
          }, 100);
          bg.css("opacity", 0);
          bg.animate({
            opacity: 1
          }, 200);
          $("body").append(bg);
        };
        var createOverlay = function (object, config, data, depth) {
          var cur = this;
          cur.setValue("$POPUPDATA", data);
          config = config || {};
          var renderTo = config.renderTo || "self";
          var bgOpacity = config.bgOpacity;
          var submitFn = config.$attr("on/submit");
          var cancelFn = config.$attr("on/cancel");
          var cur = this;
          var outter = $("<div></div>");
          var bg = $("<div></div>");
          var wrap = $("<div></div>");
          var closeBtn = $("<button></button>");
          var span = $("<div></div>");
          outter.css("z-index", (depth + 1) || 50);
          if (renderTo == "self") {
            renderTo = cur.getSelfDom();
          }
          if (config.top != undefined) {
            outter.css("top", config.top);
          }
          if (config.left != undefined) {
            outter.css("left", config.left);
          }
          if (config.right != undefined) {
            outter.css("right", config.right);
          }
          if (config.bottom != undefined) {
            outter.css("bottom", config.bottom);
          }
          outter.append(wrap);
          wrap.css("position", "relative");
          wrap.addClass("col-md-12");
          wrap.attr("id", "popup");
          outter.css("position", "absolute");
          outter.css("width", (config.width || "400px"));
          wrap.css("width", "100%");
          bg.append(outter);
          var instance = freeboardBaseService(wrap);
          instance.setMode(true);
          object.layout = object.layout.$remapByChild(function (element) {
            var rs = new cmethod(element);
            rs.submit = function (obj) {
              if (submitFn) {
                submitFn(obj);
              }
              outter.remove();
              bg.remove();
            };
            rs.cancel = function () {
              if (cancelFn) {
                cancelFn();
              }
              outter.remove();
              bg.remove();
            };
            return rs;
          });
          instance.renderLayout(object);
          outter.addClass("block")
          renderTo.prepend(outter);
        };
        var toString = function (obj) {
          if (typeof obj == "function") {
            return obj.toString();
          } else if (typeof obj == null) {
            return "null";
          } else if (typeof obj == "object") {
            return JSON.stringify(obj, null, 2);
          } else if (typeof obj == "string") {
            return obj;
          } else if (typeof obj == "number") {
            return obj + "";
          } else if (typeof obj == undefined) {
            return "undefined";
          } else {
            return "无效字符"
          }
        };
        cmethod.clearEvents = cmethod.prototype.clearEvents = function () {
          for (var i in events) {
            delete events[i];
          }
        }
        _proto_.getView = function (data, callback) {
          var view = data.item,
            config = getConfig(data.path),
            viewId = (config && config.viewId) || view.viewId,
            viewCtrl = config && config.viewCtrl,
            path = config && config.path,
            match;

          function getConfig(path) {
            var testObj = {
              view: {
                regex: "^\\s*viewId\\s*\\:\\s*(\\d+)\\s*$",
                handler: function (d) {
                  return {
                    viewId: d
                  };
                }
              },
              ctrl: {
                regex: "^\\s*viewCtrl\\s*\\:\\s*([-$\\w\\d]+)\\s*$",
                handler: function (d) {
                  return {
                    viewCtrl: d
                  };
                }
              },
              word: {
                regex: "^\\s*[\\w\\d]+\\s*$",
                handler: function (d) {
                  return {
                    path: d
                  };
                }
              }
            }
            for (var i in testObj) {
              match = new RegExp(testObj[i].regex).exec(path);
              if (match) {
                return testObj[i].handler(match[1]);
              }
            }
            console.warn("无效配置项，采用默认视图ID");
          }

          function parse(str) {
            var json = null;
            try {
              json = JSON.parse(str);
            } catch (e) {
              console.warn(e);
            }
            return json;
          }
          if (viewCtrl) {
            callback && callback(_proto_.createInjectorCtrlView(viewCtrl));
          } else if (viewId) {
            _proto_.getViewById(viewId, function (view) {
              var json = parse(view.content),
                groups = json.groups;
              if (json) {
                json.layout = path && groups ? groups.find(function (elem) {
                  return elem.path == path;
                }) : json.layout;
                callback && callback(json);
              } else {
                _proto_.Info('../../localdb/echartTemplate/baogang/nographe.json', function (nographe) {
                  callback && callback(nographe);
                });
              }
            });
          } else {
            _proto_.Info('../../localdb/echartTemplate/' + view.default+".json", function (json) {
              if (path) {
                var find = json.groups.find(function (elem) {
                  return elem.path == path;
                });
                json.layout = find.layout;
              }
              callback && callback(json);
            })
          }
        }

        _proto_.createInjectorCtrlView = function (name) {
          var json = {
            "layout": {
              "type": "column",
              "children": [
              {
                "label": "视图嵌入",
                "type": "injector",
                "source": "INJECTOR",
                "parameters": {
                  "icon": {
                    "id": 0,
                    "perfix": "ion",
                    "css": "ion-ios-gear-outline"
                  }
                },
                "advance": {
                  "getfunction": "",
                  "expression": "expression = {\n  on : {\n      init : function(event){\n          var target = event.target;\n          target.renderCtrl(\"" + name + "\");\n      }\n  }\n}"
                },
                "style": {},
                "children": []
              }],
              "col": 12
            },
            "setting": "{\n  \"theme\": \"steel\"\n}"
          }
          return json;
        }

        _proto_.createRenderCtrl = function (ctrlname) {
          var defer = q.defer();
          window._newScope ? window._newScope.$destroy() : null;
          var div = document.createElement(ctrlname),
            deps = ["../ps-baogang/build/directive/" + ctrlname + ".js|css"];
          psrequire(deps, function (render) {
            try {
              render(registerService);
            } catch (e) {
              console.error(e);
            }
            defer.resolve(div);
          })
          return defer.promise;
        }

        cmethod.prototype.getRootScope = function (attr) {
          if (attr) {
            return rootScope.$$childHead[attr];
          } else {
            return rootScope.$$childHead;
          }
        };

        //解决跨域
        cmethod.prototype.jsonp = function (url, funcname, callback, error) {
          function random(num) {
            var rs = "",
              str = "0123456789abcdefjhijklmnopqrstuvwxyz";
            for (var i = 0; i < num; i++) {
              rs += str[parseInt(Math.random() * (str.length - 1))]
            };
            return rs;
          };
          var script = document.createElement("script"),
            name = "fn_" + random(16);
          script.setAttribute("src", url + "&" + funcname + "=" + name);
          document.body.append(script);
          window[name] = function (d) {
            callback && callback(d);
            delete window[name];
          };
          script.onerror = function (e) {
            error(e);
            script.remove();
            script = null;
            console.error(e);
          }
          script.onload = function (e) {
            script.remove();
            script = null;
          }
        }

        _proto_.getState = function (id, callback) {
          psTreeData(id).getState()
            .then(function (res) {
              callback(res);
            })
        }

        _proto_.getChildren = function (id, callback) {
          psTreeData(id).getChildren(function (n, i, l) {
            return l < 2
          }).then(function (children) {
            callback(children);
          })
        }

        _proto_.resourceClick = function (paths, id, ext) {
          var self = this;
          psTreeData(id).getPathAndShowTreeLocation()
            .then(function (d) {
              var showTree = d.showTree,
                location = d.location,
                params = {
                  showTree: showTree,
                  id: id,
                  index: location
                }
              if (ext) {
                params = extend(params, ext);
              }
              self.navigateTo(location, paths, params);
            })
        }

        _proto_.$getKpisByModelId = function (modelId, callback) {
          resourceUIService.modelLoader().then(function (models) {
            var kpiDics = models[modelId].kpiDic,
              rs = [];
            for (var i in kpiDics) {
              rs.push(kpiDics[i])
            }
            callback(rs);
          })
        }
        _proto_.getAllUnits = function (callback) {
          unitService.getAllUnits(function (d) {
            if (d.code == "0") {
              callback(d.data);
            }
          })
        }

        cmethod.prototype.nextTick = function (fn) {
          setTimeout(fn, 500);
        }

        cmethod.prototype.topDateString = function (diff, format) {
          var cur = this;
          var regexp = [{
            exp: /d+/g,
            divide: 24 * 3600 * 1000
          }, {
            exp: /h+/g,
            divide: 3600 * 1000
          }, {
            exp: /n+/g,
            divide: 60 * 1000
          }, {
            exp: /s+/g,
            divide: 60
          }];
          var inx = 0
          var repeat = function (inx, rest) {
            if (regexp[inx]) {
              var fd = regexp[inx].exp.exec(format);
              if (fd) {
                var num = Math.floor(rest / regexp[inx].divide);
                rest = rest % regexp[inx].divide;
                format = format.replace(regexp[inx].exp, num + "");
              }
              repeat(inx + 1, rest);
            }
          }
          repeat(inx, diff);
          return format;
        };
        /**
         * 获得模板的属性
         * 注意：首先查看缓存中是否存在
         * @param {Object} modelId
         * @param {Object} callback
         */
        cmethod.prototype.getAttrsByModelId = function (modelId, callback) {
          resourceUIService.getAttrsByModelId(modelId, function (data) {
            if (data.code == 0) {
              var measureLocation = typeof data.data === "object" && data.data.find(function (e) {
                return e.name == "MeasurePointLocate"
              });
              if (typeof measureLocation === "object") {
                measureLocation.sourceValue = convertMeasureLoc(measureLocation.sourceValue);
              }
              callback(data.data);
            }
          })
        }
        /**
         * 获得模板的数据项
         * 注意：首先查看缓存中是否存在
         * @param {Object} modelId
         * @param {Object} callback
         */

        cmethod.prototype.getDataItemsByModelIdFromCache = function (id, callback) {
          var kpisMap = {}
          return resourceUIService.modelLoader().then(function (rootModelsDic) {
            if (rootModelsDic[id]) {
              kpisMap[id] = rootModelsDic[id]['kpiDic'];
            }
            callback(kpisMap);
          });
        };

        cmethod.prototype.getDataItemsByModelId = function (modelId, callback) {
          resourceUIService.getDataItemsByModelId(modelId, function (data) {
            if (data.code == 0) {
              callback(data.data);
            }
          })
        };
        /**
         * 全局配置中保存域、客户、项目和设备同视图之间的关系
         * @param {Object} domaintree
         */
        cmethod.prototype.saveDomainAreaLineTree = function (domaintree) {
          var cur = this;
          var mapFun = function (node) {
            return {
              id: node.id,
              label: node.label,
              view: {
                viewId: node.view.viewId,
                viewTitle: node.view.viewTitle
              }
            }
          };
          var view = domaintree.filterNode(function (node) {
            return node.view;
          })
          var domains = domaintree.filterNode(function (node) {
            return node.resourceType == "domain" && node.view;
          }).map(mapFun);
          var customers = domaintree.filterNode(function (node) {
            return node.resourceType == "customer" && node.view;
          }).map(mapFun);
          var projects = domaintree.filterNode(function (node) {
            return node.resourceType == "project" && node.view;
          }).map(mapFun);
          var devices = domaintree.filterNode(function (node) {
            return node.resourceType == "device" && node.view;
          }).map(mapFun);
          var rs = {};
          if (domains.length > 0) {
            rs['domains'] = domains
          }
          if (customers.length > 0) {
            rs['customers'] = customers
          }
          if (projects.length > 0) {
            rs['projects'] = projects
          }
          if (devices.length > 0) {
            rs['devices'] = devices
          }
          cur.saveEditorStatus("DomainAreaLineTree", rs);
        };
        /**
         * 获得域、客户、项目和设备的告警状态
         * 更重要的是这里缓存了所有的设备
         * @param {Object} callback
         */
        cmethod.prototype.getAttrsByResource = function (resource, callback) {
          var measureLocation = resource.values.MeasurePointLocate;
          resource.values.MeasurePointLocate = convertMeasureLoc(measureLocation);
          callback(resource.values);
        };
        cmethod.prototype.getAttrsByResourceId = function (id, callback) {
          this.getResourceById(id, function (resource) {
            callback(resource.values);
          })
        };
        // 打开请求转圈
        cmethod.prototype.showLoading = function () {
          psLoading.showLoading()
        };
        // 关闭请求转圈
        cmethod.prototype.closeLoading = function () {
          psLoading.closeLoading();
        };

        function toJSON(str) {
          var obj = null;
          try {
            obj = JSON.parse(str);
          } catch (e) {
            console.warn(e);
            return null;
          }
          return obj;
        }
        _proto_.getDomainAreaLineTree_alertStatus = _proto_.getDomainAreaLineTree = function (callback) {
          var param = toJSON($state.params["#"]) || {},
            id = $state.params["id"];
          psTreeData.getAlertState().then(function (root) {
            return id ? psTreeData(id).getState() :
              psTreeData(root[0].id).getState();
          }).then(function (node) {
            callback(node);
          });
        };

        cmethod.prototype.fillEmpty = function (arr) {
          var loop = function (inx, arr) {
            inx = parseInt(inx);
            if (!arr[inx]) {
              var binx = inx;
              var einx = inx;
              var start = {
                value: 0
              };
              var end = {
                value: 0
              };
              binx--;
              while (binx >= 0) {
                if (arr[binx] != null) {
                  start = arr[binx];
                  break;
                } else {
                  binx--;
                }
              }
              einx++;
              while (einx < arr.length) {
                if (arr[einx] != null) {
                  end = arr[einx];
                  break;
                } else {
                  einx++;
                }
              }
              arr[inx] = {
                value: (start.value + end.value) * (inx - binx) / (einx - binx)
              }
            }
          };
          for (var i in arr) {
            loop(i, arr);
          }
        }
        cmethod.prototype.getDateHandler = cmethod.prototype.dateHandler = function (dateString) {
          var dh = dateHandler.init(dateString);
          return dh;
        };
        cmethod.prototype.reStructSeries = function (returnData) {
          var cur = this;
          var removeDuplicate = [];
          for (var i in returnData) {
            var some = removeDuplicate.some(function (elem) {
              return elem.kpiCode == returnData[i].kpiCode &&
                elem.instance == returnData[i].instance &&
                elem.arisingTime == returnData[i].arisingTime
            });
            if (!some) {
              removeDuplicate.push(returnData[i]);
            }
          }
          returnData = removeDuplicate.map(function (elem) {
            elem.time = dateHandler.init(elem.arisingTime);
            return elem;
          });
          var sortByTIme = function (a, b) {
            var t1 = a.time.getTime();
            var t2 = b.time.getTime();
            return t1 - t2;
          };
          returnData.sort(sortByTIme);
          var rs = returnData.reduce(function (a, b) {
            var kpiCode = b.kpiCode;
            var ins = b.instance;
            var attr = kpiCode + "_" + ins;
            a[attr] = a[attr] || [];
            a[attr].push(b);
            return a;
          }, {});
          var getMinGap = function (arr) {
            var min = 100000000000000000000;
            arr.reduce(function (a, b) {
              var m = b.time.minus(a.time);
              if (m == 0) {

              }
              if (m < min) {
                min = m;
              }
              return b;
            });
            return min;
          };
          var step = 10000000000000000000;
          for (var i in rs) {
            var minGap = getMinGap(rs[i]);
            if (minGap < step) {
              step = minGap;
            }
          }
          var startTime = returnData[0].time;
          var endTime = returnData[returnData.length - 1].time;
          var xAxis = [];
          while (startTime.before(endTime)) {
            xAxis.push(startTime.clone());
            startTime.addTimeStamp(step);
          }
          startTime.addTimeStamp(step);
          xAxis.push(startTime.clone());
          for (var i in rs) {
            var dt = [];
            xAxis.reduce(function (a, b) {
              var time1 = a.getTime();
              var time2 = b.getTime();
              var find = rs[i].find(function (elem) {
                var time = elem.time.getTime();
                return time >= time1 && time < time2;
              });
              if (find) {
                dt.push(find);
              } else {
                dt.push(null);
              }
              return b;
            })
            rs[i] = cur.fillEmpty(dt);
          }
          return {
            series: rs,
            xAxis: xAxis
          }
        };
        cmethod.prototype.off = function (eventname, callback) {
          var arr = events[eventname] || [];
          arr.forEach(function (destroy) {
            destroy();
          })
        };
        cmethod.prototype.on = function on(eventname, callback) {
          if (eventname === "tree_resourceChange") {
            var id = $state.params.id;
            id ? this.getResourceById(id, function (res) {
              rootScope.$apply(function () {
                callback({
                  resource: res || {}
                });
              })
            }) : null;
            return;
          } else if (eventname === "changeNavString") {
            cms2.getCurrentParents().then(function (parents) {
              callback(parents.map(function (d) {
                return d.label
              }).join(" > "));
            }).catch(function (e) {
              growl.error(e.message);
            });
          } else if (eventname === "$destroy") {
            scope && scope.$on("$destroy", callback);
          }

          events[eventname] = events[eventname] || [];
          events[eventname].push((scope || rootScope).$on(eventname, function (event, data) {

            callback(data)
          }));
        };
        cmethod.prototype.getEvents = function () {
          return events;
        };
        cmethod.prototype.trigger = function (eventname, data, callback) {
          rootScope.$broadcast(eventname, data)
        };
        cmethod.prototype.uploadFile1 = function (file, config, callback) {
          config = config || {};
          config.params = []; //设置一个队列，存放返回的内容
          var group = config.group;
          var cur = this;
          var start = function () {
            var fileFormat = config.fileFormat || rootScope.fileFormat || "|jpg|png|jpeg|bmp|gif|svg|";
            var queueLimit = 1;
            var fileMaxSize = 1;
            var urlParam = 'api/rest/upload/resourceFileUIService/uploadResourceFile'; //改成可以定义上传路径的接口
            if (config.url) {
              urlParam = config.url;
            }
            var uploader = new FileUploader({
              url: configUIService.origin + '/' + urlParam + '',
              withCredentials: true
            });
            uploader.filters.push({
              name: 'imageFilter',
              fn: function (item /*{File|FileLikeObject}*/ , options) {
                var nameAry = item.name.split(".");
                var type = nameAry[nameAry.length - 1];
                if (fileFormat.indexOf(type) == -1) {
                  growl.warning("文件格式仅支持" + fileFormat + "文件，请重新选择", {});
                  return false;
                }
                if ((item.size / 1024) > fileMaxSize * 10000) {
                  growl.warning("您选择的文件大于" + fileMaxSize + "0M，请重新选择", {});
                  return false;
                }
                return true;
              }
            });
            uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onCompleteItem = function (fileItem, response, status, headers) {
              if (response && response.code == 0) {
                var obj = { value: {} };
                obj.label = fileItem.file.name;
                obj.qualifiedName = response.data.qualifiedName;
                obj.value.qualifiedName = response.data.qualifiedName;
                config.params.push(obj);
              } else {
                growl.error("操作异常了，尝试重新刷新", {});
              }
            };
            uploader.clearQueue();
            uploader.addToQueue(file);
            uploader.queue.forEach(function (que) {
              if (config.formData) {
                que.formData = [config.formData];
              } else {
                que.formData = [{
                  resourceId: 0,
                  value: 'images/dashboardImage'
                }];
              }
            });
            uploader.onCompleteAll = function () {
              uploader.clearQueue();
              callback(config.params);
            };
            uploader.uploadAll();
          };
          if (group) {
            cur.getAllConfigGroups(function (configGroups) {
              var some = configGroups.some(function (elem) {
                return elem.name == group;
              });
              if (some) {
                start();
              } else {
                cur.saveConfigGroup({
                  label: "图片缓存(" + group + ")",
                  name: group
                }, function (event) {
                  start();
                })
              }
            })
          } else {
            start();
          }
        };
        cmethod.prototype.getKpiTypeByFilter = function (param, callback) {
          resourceUIService.getKpiTypeByFilter(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        }
        cmethod.prototype.uploadResourceFile = function () {
          var cur = this;
          var service = ""
          cur.postService("resourceFileUIService", "uploadResourceFile")
        }
        cmethod.prototype.toFix = function (str, num) {
          num = num || 4;
          str = str || "0";
          var cur = this;
          var number = Number(str);
          var le = Math.pow(10, num);
          var res = parseInt(number * le) / le + "";
          var len = res.split(".")[1] || "";
          if (len == "") {
            res += ".";
          }
          for (var i = 0; i < num - len.length; i++) {
            res += "0";
          }
          return res;
        };
        cmethod.prototype.uploadFile = function (file, config, callback) {
          config = config || {};
          var group = config.group;
          var cur = this;
          var start = function () {
            var param = config.config || {
              domainPath: "",
              groupName: group || "dashboardImage",
              id: 0,
              invalid: false,
              key: "",
              keyDesc: "",
              label: "",
              value: ""
            };
            var api = config.api || {
              service: "resourceFileUIService",
              method: "uploadResourceFile",
              fun: "uploadConfig"
            };
            api.fun = "upload"; //宝钢用
            var fileFormat = config.fileFormat || rootScope.fileFormat || "|jpg|png|jpeg|bmp|gif|svg|";
            var queueLimit = 1;
            var fileMaxSize = 10;
            var uploader = new FileUploader({
              url: configUIService.origin + '/api/rest/' + api.fun + '/' + api.service + '/' + api.method,
              withCredentials: true
            });
            uploader.filters.push({
              name: 'imageFilter',
              fn: function (item /*{File|FileLikeObject}*/ , options) {
                var nameAry = item.name.split(".");
                var type = nameAry[nameAry.length - 1];
                if (fileFormat.indexOf(type) == -1) {
                  growl.warning("文件格式仅支持" + fileFormat + "文件，请重新选择", {});
                  return false;
                }
                if ((item.size / 1024) > fileMaxSize * 1000) {
                  growl.warning("您选择的文件大于" + fileMaxSize + "M，请重新选择", {});
                  return false;
                }
                return true;
              }
            });
            uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/ , filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
            };
            uploader.onCompleteItem = function (fileItem, response, status, headers) {
              console.info('onCompleteItem', response);
              if (response) {
                if (response.code == 0) {
                  var url = response.data;
                  param.value = url;
                  growl.success("图片上传成功", {});
                  configUIService.saveConfig(param, function (resultObj) {
                    callback(resultObj);
                  });
                } else {
                  growl.error(response.message, {});
                }
              } else {
                growl.error("操作异常了，尝试重新刷新", {});
              }
            };
            uploader.clearQueue();
            uploader.addToQueue(file);
            if (uploader.queue.length > 0) {
              var que = uploader.queue[0];
              param.label = que.file.name;
              configUIService.saveConfig(param, function (resultObj) {
                if (resultObj.code == 0) {
                  var id = resultObj.data.id;
                  param.id = id;
                  que.formData = [{
                    resourceId: id,
                    value: 'images/dashboardImage',
                    id: id
                  }];
                  que.upload();
                }
              });
            }
          }
          if (group) {
            cur.getAllConfigGroups(function (configGroups) {
              var some = configGroups.some(function (elem) {
                return elem.name == group;
              });
              if (some) {
                start();
              } else {
                cur.saveConfigGroup({
                  label: "图片缓存(" + group + ")",
                  name: group
                }, function (event) {
                  start();
                })
              }
            })
          }
        }
        cmethod.prototype.init = function (dom, global, config) {
          var render = config.render;
          var cur = this;
          if (typeof render !== "function") {
            throw new Error("render function is needed!!");
          }
          var expression, style, parameters, initFn;
          $$.runExpression(cur.$attr("advance/expression"), function (funRes) {
            if (funRes.code == "0") {
              var fnResult = funRes.data;
              expression = fnResult ? fnResult : {};
            } else {
              expression = {};
              //
              //throw new Error(funRes.message);
            }
            initFn = expression.$attr("on/init");
            style = cur.$attr("style");
            parameters = cur.$attr("parameters");
            if (style) {
              $(dom).css(style);
            }
            cur.render = function (data) {
              dom.append(render(data, expression, style, parameters));
            };
            if (initFn) {
              try {
                initFn({
                  target: cur,
                  global: global
                })
              } catch (e) {
                cur.growl(e.message);
              }
            } else {
              dom.append(render({}, expression, style, parameters));
            }
          });
        };
        cmethod.prototype.getAlertValueList = function (callback) {
          var param = ['alert', {
            category: 'ci',
            isRealTimeData: true,
            timePeriod: 0,
            kpiCodes: ["alert_code_count"]
          }];
          this.postService("kpiDataFlexService", "getKpiHierarchyValueList", param, function (returnData) {
            if (returnData.code == 0) {
              callback(returnData);
            }
          })
        };
        cmethod.prototype.setSelfDom = function (dom) {
          this.selfDom = dom;
          Object.defineProperty(this, "selfDom", {
            enumerable: false
          })
        };
        cmethod.prototype.getGroups = function () {
          //
          return rootTarget.groups;
        }
        cmethod.prototype.getTheme = function (themeStr) {
          if (rootTarget) {
            var themeObj = JSONparse(rootTarget.setting) || {
              theme: "default"
            };
            themeStr = themeStr || "default";
            themeStr = themeStr == "auto" ? themeCompare[themeObj.theme || "default"] : themeStr;
            return themeStr;
          } else {
            return "default";
          }
        };
        cmethod.prototype.getPath = function (path) {
          var find = rootTarget.groups.find(function (elem) {
            return path == elem.path;
          }) || {};
          return find;
        };
        cmethod.prototype.addView = function (param, callback) {
          viewFlexService.addView(param, function (event) {
            if (event.code == 0) {
              if (typeof callback == "function") {
                callback({
                  code: 0,
                  msg: param.viewTitle + "添加成功",
                  data: event.data
                });
              }
            } else {
              if (typeof callback == "function") {
                callback({
                  code: event.code,
                  msg: param.viewTitle + "添加失败," + event.message
                });
              }
            }
          })
        };
        cmethod.prototype.updateView = function (param, callback) {
          viewFlexService.updateView(param, function (event) {
            if (event.code == 0) {
              if (typeof callback == "function") {
                callback({
                  code: 0,
                  msg: param.viewTitle + "添加成功",
                  data: event.data
                });
              }
            } else {
              if (typeof callback == "function") {
                callback({
                  code: event.code,
                  msg: param.viewTitle + "添加失败," + event.message
                });
              }
            }
          })
        }
        cmethod.prototype.getSelfDom = function () {
          return this.selfDom;
        };
        cms.$cache = cms.$cache || {};
        cmethod.prototype.getKpiDic = function () {
          return cmethod.kpiDic;
        }
        cmethod.prototype.getResourceDic = function () {
          return cmethod.resourceDic;
        }
        cmethod.prototype.getTimesByDay = function (num) {
          return num * 24 * 3600 * 100;
        };
        /**
         * 获得全局配置
         * @param {Object} str
         * @param {Object} callback
         */
        cmethod.prototype.getEditorStatus = function (str, callback) {
          var cur = this;
          cur.getConfigsByGroupName(str, function (configs) {
            if (configs.length > 0) {
              callback(JSON.parse(configs[0].value));
            } else {
              callback(null);
            }
          })
        };
        cmethod.prototype.getCurrentUser = function () {
          return userLoginUIService.user
        }
        /**
         * 保存并返回全局配置
         * @param {Object} str
         * @param {Object} val
         */
        cmethod.prototype.saveEditorStatus = function (str, val, callback) {
          var cur = this;
          var saveConfig = function (config) {
            var param = {
              label: "设计器缓存",
              value: JSON.stringify(val),
              groupName: str
            };
            if (config) {
              param.id = config.id
            }
            cur.saveConfig(param, function (event) {
              callback && callback(event);
            })
          };
          var start = function () {
            cur.getConfigsByGroupName(str, function (configs) {
              if (configs.length == 0) {
                saveConfig()
              } else {
                saveConfig(configs[0]);
              }
            })
          };
          cur.getAllConfigGroups(function (configGroups) {
            var some = configGroups.some(function (elem) {
              return elem.name == str;
            });
            if (!some) {
              cur.saveConfigGroup({
                label: "设计器缓存",
                name: str
              }, function (event) {
                start();
              })
            } else {
              start();
            }
          })
        };
        cmethod.prototype.splitData = function (valueList) {
          var times = valueList.map(function (elem) {
            return new Date(elem.arisingTime).getTime();
          });
          var timeSplit = times.reduce(function (a, b) {
            if (a.indexOf(b) == -1) {
              a.push(b);
            }
            return a;
          }, []);
          var structure = valueList.reduce(function (a, b) {
            var attr = b.nodeId + ":" + b.kpiCode;
            if (!a[attr]) {
              a[attr] = [];
            } else {
              a[attr].push({
                time: new Date(b.arisingTime).getTime(),
                value: b.value
              })
            }
            return a;
          }, {});
          var inputEmpty = function (arr) {
            var rs = [];
            for (var i in timeSplit) {
              var find = arr.find(function (elem) {
                return elem.time == times[i];
              })
              if (find) {
                rs.push(find);
              } else {
                rs.push({
                  value: '-',
                  time: timeSplit[i]
                })
              }
            }
            return rs;
          };
          for (var i in structure) {
            structure[i] = inputEmpty(structure[i]);
          }
          structure.times = timeSplit;
          return structure;
        };
        cmethod.prototype.createMsgBox = function (config) {
          var cur = this;
          var path = "../localdb/echartTemplate/msgbox.json";
          var run = function (data) {
            createSystemPopup.call(cur, data, {
              width: config.width || "600px",
              title: config.title,
              on: config.on
            }, {
              text: config.message
            }, 100002);
          };
          Info.get(path, function (template) {
            window[path] = template;
            run(window[path]);
          });
        };
        cmethod.prototype.setConsoleText = function (str) {
          var cur = this;
          cur.setValue("$CONSOLELOG", "");
        };
        cmethod.prototype.console = function (obj, commontery) {
          var cur = this;
          var path = "../../localdb/echartTemplate/console.json";
          var oldConsole = cur.getValue("$CONSOLELOG") || "";
          var createUnderscore = function (num) {
            var rs = "";
            for (var i = 0; i < num; i++) {
              rs += "-"
            }
            return rs;
          };
          cur.setValue("$CONSOLELOG", oldConsole + "//" + createUnderscore(40) + (commontery || "") + createUnderscore(40) + "\n" + "console.log = " + toString(obj) + "\n//" + createUnderscore(100) + "\n");
          var run = function (data) {
            if (route.current.$$route.controller == "freeStyleCtrl") {
              createPopup.call(cur, data, {
                width: "100vw",
                bottom: 0
              }, cur.getValue("$CONSOLELOG"), 100002);
            }
          };
          Info.get(path, function (template) {
            window[path] = template;
            run(window[path]);
          });
        };
        cmethod.prototype.close = function () {
          popIns = popIns && popIns.destroy()
        }
        cmethod.prototype.submit = function (d) {
          popIns && this.setValue("$POPUPDATA", d);
          popIns = popIns && popIns.destroy()
        }
        _proto_.createSystemPopupByCtrlView = function (viewCtrl, config, dt) {
          var cur = this;
          this.getView({ path: "viewCtrl:" + viewCtrl, item: {} }, function (json) {
            popIns = createSystemPopup.call(cur, json, {
              width: config.width || "600px",
              title: config.title,
              top: config.top || "40px",
              on: config.on,
              bgOpacity: config.bgOpacity || "1",
            }, dt, 100002);
          })
        }
        cmethod.prototype.createSystemPopupByViewId = function (viewId, config, dt) {
          var cur = this;
          cur.getViewById(viewId, function (view) {
            var json = $$.getViewContent(view);
            if (json) {
              popIns = createSystemPopup.call(cur, json, {
                width: config.width || "600px",
                title: config.title,
                top: config.top || "40px",
                on: config.on,
                bgOpacity: config.bgOpacity || "1",
              }, dt, 100002);
            }
          });
        }

        cmethod.prototype.createPopupByViewIdPath = function (viewId, path, config, dt) {
          var curl = this;
          // 根据viewId查询当前的视图
          viewFlexService.getViewById(viewId, function (d) {
            var content = JSON.parse(d.data.content);
            var find;
            if (content.hasOwnProperty("groups")) {
              find = content.groups.find(function (elem) {
                return elem.path == path;
              }) || {};
            } else if (content.hasOwnProperty("layout")) {
              find = content.layout;
            } else {

            }
            rootTarget = content;
            createSystemPopup.call(curl, find, {
              width: config.width || "600px",
              title: config.title,
              top: config.top || "110px",
              on: config.on
            }, dt, 100002);
          });
        }

        cmethod.prototype.createSystemPopupByLocalPath = function (path, config, dt) {
          var curl = this;
          // 根据viewId查询当前的视图
          var viewId = $stateParams.viewId;
          getViewByLocalId(viewId, path, function (d) {
            createSystemPopup.call(curl, d, {
              width: config.width || "600px",
              title: config.title,
              top: config.top || "110px",
              on: config.on
            }, dt, 100002);
          })
        }
        cmethod.prototype.createSystemPopupByJsonName = function (jsonName, config, dt) {
          var cur = this;
          var path = "../localdb/echartTemplate/" + jsonName + ".json";
          var run = function (data) {
            createSystemPopup.call(cur, data, {
              width: config.width || "600px",
              title: config.title,
              on: config.on
            }, dt, 100002);
          };
          if (!window[path]) {
            Info.get(path, function (template) {
              window[path] = template;
              run(window[path]);
            });
          } else {
            run(window[path]);
          }
        }
        cmethod.prototype.console = function (obj, commontery) {
          var cur = this;
          var path = "../localdb/echartTemplate/console.json";
          var oldConsole = cur.getValue("$CONSOLELOG") || "";
          var createUnderscore = function (num) {
            var rs = "";
            for (var i = 0; i < num; i++) {
              rs += "-"
            }
            return rs;
          };
          cur.setValue("$CONSOLELOG", oldConsole + "//" + createUnderscore(40) + (commontery || "") + createUnderscore(40) + "\n" + "console.log = " + toString(obj) + "\n//" + createUnderscore(100) + "\n");
          var run = function (data) {
            if (route.current.$$route.controller == "freeStyleCtrl") {
              createPopup.call(cur, data, {
                width: "100vw",
                bottom: 0
              }, cur.getValue("$CONSOLELOG"), 100002);
            }
          };
          Info.get(path, function (template) {
            window[path] = template;
            run(window[path]);
          });
        };
        cmethod.prototype.Info = function (path, callback) {
          Info.get(path, function (template) {
            callback(template)
          });
        }
        cmethod.prototype.closePopup = function () {

        }
        cmethod.prototype.getTimesByMonth = function (num) {
          return num * 30 * 24 * 3600 * 100;
        };
        cmethod.prototype.setRootTarget = function (rt) {
          rootTarget = rt;
        };
        cmethod.prototype.getKpiValueList = function (ci, kpi, time, callback, extension) {
          /**
           var nodeIds = removeSameValue(ci);
           var kpiCodes = removeSameValue(kpi);
           var queryInstances = extension.queryInstances;
           var rs = [];
           var cur = this;
           function removeSameValue(arr) {
          var rs = [];
          for (var i in arr) {
            if (rs.indexOf(arr[i]) == -1) {
              rs.push(arr[i]);
            }
          }
          return rs;
        }
           for(var i = 0; i < nodeIds.length; i++){
          for(var j = 0; j < kpiCodes.length; j++){
            var d = new Date().getTime();
            for(var k = 0; k < 1000; k++){
              rs.push({
                nodeId : nodeIds[i],
                kpiCode : kpiCodes[j],
                instance : queryInstances,
                value : parseInt(Math.random() * 100),
                arisingTime : cur.getDateHandler(d).addSecond(k * 10).getDateString()
              })
            }
          }
        }

           setTimeout(function(){
          callback(rs);
        }, 1000 * kpiCodes.length);
           */

          var removeSameValue = function (arr) {
            var rs = [];
            for (var i in arr) {
              if (rs.indexOf(arr[i]) == -1) {
                rs.push(arr[i]);
              }
            }
            return rs;
          }
          var param = {
            nodeIds: removeSameValue(ci),
            kpiCodes: removeSameValue(kpi)
          };
          if (time) {
            param.timePeriod = time
          }
          if (0 == time) {
            param.timePeriod = 0;
          }
          param = param.$extension(extension);
          var extendstr = "includeFields=kpiCode,value,nodeId,arisingTime,instance";
          // var extendstr = "includeFields=kpiCode,values.view,nodeId,arisingTime,instance";
          kpiDataService.getKpiValList(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback([]);
            }
          }, extendstr);
        };
        cmethod.prototype.getKpiValueCi = function (ci, kpi, callback, extension) {
          serviceCenterService.getValues(ci, kpi, extension).then(function (data) {
            callback(data);
          })
        };
        cmethod.prototype.createPopupBypath = function (path, config, data, isLocal) {
          var cur = this;
          // var targetRoot = cur.getRootTarget();
          // var find = targetRoot.groups.find(function (elem) {
          //   return elem.path == path;
          // });
          var root = cur;
          while (root.parent) {
            root = root.parent
          }
          var groups = root.root.groups;
          var find = groups.find(function (elem) {
            return elem.path == path;
          }) || {};

          if (route.current.$$route.controller != "freeBoardCtrl") {
            if (find) {
              var type = config.theme || "default";
              if (type == "default") {
                createPopup.call(cur, find, config, data);
              } else if (type == "system") {
                createSystemPopup.call(cur, find, config, data);
              } else {
                createPopup.call(cur, find, config, data);
              }
            }
          }
        };
        cmethod.prototype.readImageFile = function (file, callback) {
          if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
            var reader = new FileReader();
            reader.onload = function (evt) {
              callback(evt.target.result);
            };
            reader.readAsDataURL(file);
          }
        }
        cmethod.prototype.createOverlayBypath = function (path, config, data, isLocal) {
          var cur = this;
          var targetRoot = cur.getRootTarget();
          var find = targetRoot.groups.find(function (elem) {
            return elem.path == path;
          });
          if (route.current.$$route.controller != "freeBoardCtrl") {
            if (find) {
              createOverlay.call(cur, find, config, data);
            }
          }
        };
        cmethod.prototype.getPopupData = function () {
          return this.getValue("$POPUPDATA");
        };
        cmethod.prototype.createPopupByViewId = function (id, config, data) {
          var cur = this;
          cur.getViewById(id, function (view) {
            var json = $$.getViewContent(view);
            if (json) {
              createPopup.call(cur, json, config, data);
            }
          });
        };
        cmethod.prototype.getDataHandlers = function (ci, kpi, callback, extension) {
          return [{
            id: 0,
            label: "不裁剪数据",
            text: "function init(event){\n    var global = event.global;\n    var resources = event.resourceId;\n    var kpis = event.kpiId;\n    var timePeriod = event.timePeriod;\n    var data = event.data;\n    global.fire(\"renderList\", data);\n}"
          }, {
            id: 1,
            label: "适合线图的数据",
            text: "function init(source){\n  var formatter=function(elem){\n    return elem.value;\n   }\n  return source.ci.getSeries(formatter);\n}"
          }, {
            id: 2,
            label: "适合饼图的数据",
            text: "function init(source){\n  var formatter=function(elem){\n    return elem.value;\n   }\n  return source.ci.getSeries(formatter);\n}"
          }, {
            id: 3,
            label: "适合柱图的数据",
            text: "function init(source){\n  var formatter=function(elem){\n    return elem.value;\n   }\n  return source.ci.getSeries(formatter);\n}"
          }, {
            id: 4,
            label: "适合柱图的数据",
            text: "function init(source){\n  var formatter=function(elem){\n    return elem.value;\n   }\n  return source.ci.getSeries(formatter);\n}"
          }];
        };
        cmethod.prototype.barOption = function () {
          return {
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
              data: ['销量']
            },
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
          };
        };
        cmethod.prototype.polylineOption = function () {
          return {
            title: {
              text: '一天用电量分布',
              subtext: '纯属虚构'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            toolbox: {
              show: true,
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} W'
              },
              axisPointer: {
                snap: true
              }
            },
            visualMap: {
              show: false,
              dimension: 0,
              pieces: [{
                lte: 6,
                color: 'green'
              }, {
                gt: 6,
                lte: 8,
                color: 'red'
              }, {
                gt: 8,
                lte: 14,
                color: 'green'
              }, {
                gt: 14,
                lte: 17,
                color: 'red'
              }, {
                gt: 17,
                color: 'green'
              }]
            },
            series: [
            {
              name: '用电量',
              type: 'line',
              smooth: true,
              data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
              markArea: {
                data: [
                  [{
                    name: '早高峰',
                    xAxis: '07:30'
                  }, {
                    xAxis: '10:00'
                  }],
                  [{
                    name: '晚高峰',
                    xAxis: '17:30'
                  }, {
                    xAxis: '21:15'
                  }]
                ]
              }
            }]
          };
        };
        cmethod.prototype.pieOption = function () {
          return {
            title: {
              text: '某站点用户访问来源',
              subtext: '纯属虚构',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }]
          };
        };
        cmethod.prototype.scatter3DOption = function () {
          var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'
          ];
          var days = ['1', '2', '3', '4', '5', '6', '7'];
          var data = [
            [12, 0, 10],
            [3, 3, 15],
            [4, 3, 20],
            [10, 1, 12],
            [3, 0, 14]
          ]
          var option = {
            tooltip: {},
            visualMap: {
              right: 0,
              max: 20,
              inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              }
            },
            xAxis3D: {
              type: 'category',
              data: hours
            },
            yAxis3D: {
              type: 'category',
              data: days
            },
            zAxis3D: {
              type: 'value'
            },
            grid3D: {
              boxWidth: 160,
              boxHeight: 40,
              boxDepth: 90,
              viewControl: {
                // projection: 'orthographic'
              },
              // environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0, color: '#00aaff' // 天空颜色
              // }, {
              //   offset: 0.7, color: '#998866' // 地面颜色
              // }, {
              //   offset: 1, color: '#998866' // 地面颜色
              // }], false),
              splitLine: {
                show: true
              },
              axisPointer: {
                show: true
              },
              light: {
                main: {
                  intensity: 1.4,
                  //                    shadow: true
                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [{
              name: "散点图",
              type: 'scatter3D',
              symbol: 'arrow',

              //            data: [{
              //                // 数据项的名称
              //                name: '数据1',
              //                // 数据项值
              //                value: [12, 3, 10]
              //            }, {
              //                name: '数据2',
              //                value: [3, 5, 15],
              //                itemStyle:{
              //                    color:[255, 233, 1, 0.5]
              //                }
              //            }],
              data: data.map(function (item) {
                return {
                  value: [item[1], item[0], item[2]],
                }
              }),
              shading: 'lambert',

              label: {
                textStyle: {
                  fontSize: 12,
                  borderWidth: 1
                },
                //                formatter: '{a}: {b}'
              },

              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 20,
                    color: '#900'
                  }
                },
                itemStyle: {
                  color: '#900'
                }
              }
            }]
          };
          return option


        };
        cmethod.prototype.bar3DOption = function () {
          var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'
          ];
          var days = ['1', '2', '3', '4', '5', '6', '7'];
          var data = [
            [12, 0, 10],
            [3, 3, 15],
            [4, 3, 20],
            [10, 1, 12],
            [3, 0, 14]
          ]
          var option = {
            tooltip: {},
            visualMap: {
              max: 20,
              inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              }
            },
            xAxis3D: {
              type: 'category',
              data: hours
            },
            yAxis3D: {
              type: 'category',
              data: days
            },
            zAxis3D: {
              type: 'value'
            },
            grid3D: {
              boxWidth: 200,
              boxHeight: 40,
              boxDepth: 90,
              light: {
                main: {
                  intensity: 1.2
                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [{
              type: 'bar3D',
              data: data.map(function (item) {
                return {
                  value: [item[1], item[0], item[2]]
                }
              }),
              shading: 'color',

              label: {
                show: false,
                textStyle: {
                  fontSize: 16,
                  borderWidth: 1
                }
              },

              itemStyle: {
                opacity: 0.8
              },

              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 20,
                    color: '#900'
                  }
                },
                itemStyle: {
                  color: '#900'
                }
              }
            }]
          };
          return option
        };
        cmethod.prototype.line3DOption = function () {
          var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'
          ];
          var days = ['1', '2', '3', '4', '5', '6', '7'];
          var data = [
            [12, 0, 10],
            [3, 3, 15],
            [4, 3, 20],
            [10, 1, 12],
            [3, 0, 14]
          ]
          var option = {
            tooltip: {},
            visualMap: {
              max: 20,
              inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
              }
            },
            xAxis3D: {
              type: 'category',
              data: hours
            },
            yAxis3D: {
              type: 'category',
              data: days
            },
            zAxis3D: {
              type: 'value'
            },
            grid3D: {
              boxWidth: 180,
              boxHeight: 40,
              boxDepth: 90,
              light: {
                main: {
                  intensity: 1.2
                },
                ambient: {
                  intensity: 0.3
                }
              }
            },
            series: [{
              type: 'line3D',
              data: data.map(function (item) {
                return {
                  value: [item[1], item[0], item[2]]
                }
              }),
              shading: 'color',

              label: {
                show: false,
                textStyle: {
                  fontSize: 16,
                  borderWidth: 1
                }
              },

              itemStyle: {
                opacity: 0.8
              },

              emphasis: {
                label: {
                  textStyle: {
                    fontSize: 20,
                    color: '#900'
                  }
                },
                itemStyle: {
                  color: '#900'
                }
              }
            }]
          };
          return option
        };
        cmethod.prototype.copyToClipBoard = function (dom, str, callback) {
          dom.attr("data-clipboard-text", str);
          setTimeout(function () {
            $$.loadExternalJs(['clipboard'], function (Clipboard) {
              var clipboard = new Clipboard(dom[0]);
              clipboard.on('success', function (e) {
                if (callback) {
                  callback();
                }
                e.clearSelection();
              });
              clipboard.on('error', function (e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
              });
            });
          });
        };
        cmethod.prototype.getIcons = function (callback) {
          var path = "../../localdb/bootstrapIcon.json";
          Info.get(path, function (icons) {
            callback(icons);
          });
        };
        cmethod.prototype.getCtrlGroupDemos = function () {
          return [{
            label: "普通文字",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n       [{\n          type : \"label\",\n          value : \"普通标签\",\n          class : \"col-md-12\"\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}"
          }, {
            label: "基本按钮",
            expression: 'expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n       [{\n          type : "button",\n          value : "按钮",\n          icon : "glyphicon glyphicon-search",\n          btnclass : "btn btn-primary",\n          class : "col-md-12",\n          on : {\n            click : function(elem){\n              target.console(elem);\n            }\n          }\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}'
          }, {
            label: "按钮组",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n        [{\n          type : \"buttonGroup\",\n          class : \"col-md-12\",\n          content : [{\n            type : \"button\",\n            value : \"保存\",\n            icon : \"glyphicon glyphicon-save\",\n            btnclass : \"btn btn-primary\",\n            on : {\n              click : function(elem){\n              }\n            }\n          },{\n            type : \"button\",\n            value : \"取消\",\n            icon : \"glyphicon glyphicon-remove\",\n            btnclass : \"btn btn-default\",\n            on : {\n              click : function(elem){\n              }\n            }\n          }]\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}"
          }, {
            label: "复制粘贴按钮",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n       [{\n          type : \"clipboardButton\",\n          value : \"复制到剪切板\",\n          icon : \"glyphicon glyphicon-save\",\n          btnclass : \"btn btn-primary\",\n          clipboardText : \"123456\",\n          class : \"col-md-12\",\n          on : {\n            save : function(elem){\n              target.growl(\"保存到剪切板\");\n            }\n          }\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}"
          }, {
            label: "单选下拉框",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var options = [{\n        id : 0,\n        label : \"第一条\"\n      },{\n        id : 1,\n        label : \"第二条\"\n      }];\n      var ctrlGroups = [\n        [{\n          type : \"select\",\n          value : 0,\n          class : \"col-md-12\",\n          options : options,\n          format : {\n            id : \"id\",\n            label : \"label\"\n          },\n          on : {\n            change : function(elem){\n"
          }, {
            label: "多选下拉框",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var options = [{\n        id : 0,\n        label : \"第一条\"\n      },{\n        id : 1,\n        label : \"第二条\"\n      }];\n      var ctrlGroups = [\n        [{\n          type : \"multiSelect\",\n          value : 0,\n          class : \"col-md-12\",\n          options : options,\n          format : {\n            id : \"id\",\n            label : \"label\"\n          },\n          on : {\n            change : function(elem){\n"
          }, {
            label: "数结构下拉框",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n       [{\n          type : \"clipboardButton\",\n          value : \"复制到剪切板\",\n          icon : \"glyphicon glyphicon-save\",\n          btnclass : \"btn btn-primary\",\n          clipboardText : \"123456\",\n          class : \"col-md-12\",\n          on : {\n            save : function(elem){\n              target.growl(\"保存到剪切板\");\n            }\n          }\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}"
          }, {
            label: "自动搜索下拉框",
            expression: "expression = {\n  on : {\n    init : function(event){\n      var target = event.target;\n      var global = event.global;\n      var ctrlGroups = [\n       [{\n          type : \"clipboardButton\",\n          value : \"复制到剪切板\",\n          icon : \"glyphicon glyphicon-save\",\n          btnclass : \"btn btn-primary\",\n          clipboardText : \"123456\",\n          class : \"col-md-12\",\n          on : {\n            save : function(elem){\n              target.growl(\"保存到剪切板\");\n            }\n          }\n        }]\n      ];\n      event.target.render(ctrlGroups);\n    }\n  }\n}"
          }]

        };

        function parseJson(str) {
          var objLike = new RegExp("^\\{.*\\}$", "g");
          var arrLike = new RegExp("^\\[.*\\]$", "g");
          if (objLike.test(str) || arrLike.test(str)) {
            return JSON.parse(str);
          } else {
            return null
          }
        }

        cmethod.prototype.getRoleByID = function (roleID, callback) {
          var roleArr = roleID.split(",").map(function (e) {
            return parseInt(e);
          });
          userEnterpriseService.queryEnterpriseRole(function (returnObj) {
            if (returnObj.code == 0) {
              var role = returnObj.data.find(function (item) {
                //
                if (roleArr.indexOf(item.roleID) != -1) {
                  return parseJson(item.values)
                };
                return false;
              });
              callback(role);
            }
          })
        }
        cmethod.prototype.triggerSocket = function (config) {
          SwSocket.simuSend(config);
        };
        cmethod.prototype.getToolsMenu = function () {
          /**
           return [{
          label: "API调用",
          path: "apicall"
        }, {
          label: "绘制自定义视图",
          path: "drawechart"
        }, {
          label: "根据ID查询设备模型信息",
          path: "idSelector"
        }, {
          label: "SCP路径",
          path: "scp"
        },{
          label: "项目模版",
          url: "projectlist"
        },{
          label: "图标样式",
          url: "icon"
        }];*/
          return [{
              label: "API调用",
              url: "apiCall"
            }, {
              label: "绘制自定义视图",
              path: "drawechart"
            },
            /*{
                    label: "根据ID查询设备模型信息",
                    path: "idSelector"
                    }, */
            {
              label: "SCP路径",
              url: "scp"
            }, {
              label: "项目模版",
              url: "projectlist"
            }, {
              label: "图标样式",
              url: "icon"
            }, {
              label: "JS代码转换字符串",
              url: "jstostring"
            }, {
              label: "批量导出导入视图或配置项",
              url: "export"
            }, {
              label: "输入框组",
              url: "ctrlGroupDemo"
            }
          ]
        };
        cmethod.prototype.getHelpMenu = function () {
          return [{
            label: "布局设置",
            pdf: "layout"
          }, {
            label: "组件",
            url: "control",
            children: [{
              label: "常用组件",
              url: "common_ctrl",
              children: [{
                label: "文字",
                pdf: "text"
              }, {
                label: "图片",
                pdf: "image"
              }, {
                label: "控制板1",
                pdf: "control1"
              }, {
                label: "控制板2",
                pdf: "control2"
              }, {
                label: "TAB",
                pdf: "tab"
              }, {
                label: "开关",
                pdf: "switch"
              }]
            }, {
              label: "功能组件",
              url: "functional_ctrl",
              children: [{
                label: "天气信息",
                pdf: "weather"
              }]
            }, {
              label: "视图组件",
              url: "echart_ctrl",
              children: [{
                label: "线图",
                pdf: "line"
              }, {
                label: "饼图",
                pdf: "pie"
              }, {
                label: "柱图",
                pdf: "bar"
              }, {
                label: "仪表盘",
                pdf: "gauge"
              }, {
                label: "散点图",
                pdf: "scatter",
                show: false
              }]
            }, {
              label: "高级组件",
              url: "advance_ctrl",
              children: [{
                label: "地图扩展",
                pdf: "baidumap"
              }, {
                label: "视图嵌入",
                pdf: "injector"
              }, {
                label: "轮播组件",
                pdf: "echart_ctrl"
              }, {
                label: "高级图表",
                pdf: "advance_ctrl"
              }, {
                label: "输入框组",
                pdf: "ctrlgroup"
              }, {
                label: "伪TAB样式",
                pdf: "faketab"
              }, {
                label: "重复单元",
                pdf: "repeat"
              }]
            }]
          }, {
            label: "功能模块",
            url: "tool",
            children: [{
              label: "数据统计标签",
              pdf: "advance_ctrl"
            }, {
              label: "百分比状态条",
              pdf: "advance_ctrl"
            }, {
              label: "环比标签",
              pdf: "advance_ctrl"
            }, {
              label: "项目组态",
              pdf: "advance_ctrl"
            }, {
              label: "设备（列表）",
              pdf: "advance_ctrl"
            }, {
              label: "工单（列表）",
              pdf: "advance_ctrl"
            }, {
              label: "告警（列表）",
              pdf: "advance_ctrl"
            }, {
              label: "线图模板",
              pdf: "advance_ctrl"
            }, {
              label: "告警趋势",
              pdf: "advance_ctrl"
            }, {
              label: "设备分布",
              pdf: "advance_ctrl"
            }, {
              label: "地图分布",
              pdf: "advance_ctrl"
            }, {
              label: "设备地图列表",
              pdf: "advance_ctrl"
            }, {
              label: "最近一周告警",
              pdf: "advance_ctrl"
            }]
          }, {
            label: "导入视图",
            pdf: "import"
          }, {
            label: "实例",
            url: "example",
            show: false
          }, {
            label: "API",
            pdf: "commonMethod"
          }]
        };
        cmethod.prototype.getSignalShipInfo = function (id, callback) {
          thridPartyApiService.getSignalShipInfo(id, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getManyShipInfo = function (ids, callback) {
          thridPartyApiService.getManyShipInfo(ids, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getShipTrack = function (id, start, end, callback) {
          thridPartyApiService.getShipTrack(id, start, end, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getAllConfigs = function (callback) {
          configUIService.getAllConfigs(function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getAllConfigGroups = function (callback) {
          configUIService.getAllConfigGroups(function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getConfigsByGroupName = function (configGroupName, callback) {
          configUIService.getConfigsByGroupName(configGroupName, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.saveConfig = function (config, callback) {
          configUIService.saveConfig(config, function (event) {
            if (event.code == 0) {
              if (typeof callback == "function") {
                callback({
                  code: 0,
                  msg: config.label + "添加成功"
                });
              }
            } else {
              if (typeof callback == "function") {
                callback({
                  code: event.code,
                  msg: config.label + "添加失败,原因" + event.message
                });
              }
            }
          });
        };
        cmethod.prototype.saveConfigGroup = function (configGroup, callback) {
          configUIService.saveConfigGroup(configGroup, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.deleteConfig = function (configId, callback) {
          configUIService.deleteConfig(configId, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.deleteConfigGroup = function (groupId, callback) {
          configUIService.deleteConfigGroup(groupId, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.createInfoHtml = function (obj) {
          var str = "";
          // var str = obj.label + "<br><hr/>";
          window.onclickHandler = function (event) {
            var key = event.target.id + "&" + event.target.name
            if (clickFnDic[key]) {
              clickFnDic[key](event.target.name);
            }
          };
          var createContent = function (cont) {
            return "<label><span>" + cont.label + ":</span><span>" + cont.value + "</span></label><br>";
          };
          var createButton = function (cont) {
            var clickFn = cont.$attr("on/click");
            var key = cont.label + "&" + cont.value;
            clickFnDic[key] = clickFn;
            var dataBtn = "<button id='" + cont.label + "' name='" + cont.value + "' onclick='onclickHandler(event)'>" + cont.label + "</button>";
            //var dataBtn = "<button id='"+cont.label+"' onclick='fnOK("+cont.value+")'>"+cont.label +"</button>";
            return dataBtn;
          };
          for (var i in obj.content) {
            if (!obj.content[i].type || obj.content[i].type == "label") {
              str += createContent(obj.content[i]);
            } else if (obj.content[i].type == "button") {
              str += createButton(obj.content[i]);
            }
          }
          return str;
        }
        cmethod.prototype.createShipShape = function (width, length, trailWidth, trailLength, headWidth, headLength) {
          var RIGHTOFFSET = .1;
          var leftBottomPoint = [(-width / 2) * trailWidth, -length / 2];
          var rightBottomPoint = [(width / 2) * trailWidth, -length / 2];
          var rightBottomPoint_1 = [(1 - RIGHTOFFSET) * width / 2, (trailLength / 2 - 1) * length / 2];
          var rightlowerPoint = [width / 2, (trailLength - 1) * length / 2];
          var rightupperPoint = [width / 2 * 1.4, (1 / 2 - headLength) * length];
          var rightupperPoint_1 = [(headWidth) / 2 * width, (1 / 2 - headLength / 3) * length];
          var topPoint1 = [width * .1, length / 2 * .99];
          var topPoint = [0, length / 2];
          var topPoint2 = [-width * .1, length / 2 * .99];
          var leftupperPoint_1 = [-(headWidth) / 2 * width, (1 / 2 - headLength / 3) * length];
          var leftupperPoint = [-width / 2 * 1.4, (1 / 2 - headLength) * length];
          var leftlowerPoint = [-width / 2, (trailLength - 1) * length / 2];
          var leftBottomPoint_1 = [-(1 - RIGHTOFFSET) * width / 2, (trailLength / 2 - 1) * length / 2];
          return [leftBottomPoint, rightBottomPoint, rightBottomPoint_1, rightlowerPoint,
            rightupperPoint, rightupperPoint_1, topPoint1, topPoint, topPoint2, leftupperPoint_1,
            leftupperPoint, leftlowerPoint, leftBottomPoint_1, leftBottomPoint
          ];
        };

        cmethod.prototype.renderExcel = function (name, filename, json) {
          require(['table2excel'], function () {
            var table = $("<table></table>");
            table.attr("id", "table2excel");
            var thead = $("<thead></thead>");
            var tbody = $("<tbody></tbody>");
            var loopTr = function (dt) {
              var tr = $("<tr></tr>");
              var loopTd = function (elem) {
                var td = $("<td></td>");
                td.text(elem);
                return td;
              };
              for (var i in dt) {
                tr.append(loopTd(dt[i]));
              }
              return tr;
            }
            var tr = $("<tr></tr>");
            var loopTh = function (number) {
              var th = $("<th></th>");
              th.text(number);
              return th;
            };
            /**
             for(var i in json[0]){
            thead.append(loopTh(json[0][i]));
          };*/
            for (var i = 0; i < json.length; i++) {
              tbody.append(loopTr(json[i]));
            }
            table.append(thead);
            table.append(tbody);
            //$("body").append(table);
            table.table2excel({
              exclude: ".excludeThisClass",
              name: name,
              filename: filename
            });
          })
        };
        cmethod.prototype.asyncRepeat = function (repeatCall, finish) {
          var self = this;
          var inx = 0;
          var repeat = function (inx) {
            if (self[inx]) {
              repeatCall(inx, self[inx], function () {
                inx++;
                repeat(inx);
              })
            } else {
              finish();
            }
          };
          repeat(inx)
        };
        /**
         * 获得域结构
         * @param {Object} callback
         * @param {Object} isArryLike
         */
        cmethod.prototype.queryDomainTree = function (callback, isArryLike) {
          /** queryDomainTree方法第一次从后台取得，之后通过缓存取*/
          var fn = cmethod.prototype.queryDomainTree;
          if (fn.cached) {
            callback(clone(fn.cached));
          } else {
            fn.promise = fn.promise || new Promise(function (resolve) {
              userDomainService.queryDomainTree(userLoginUIService.user.userID, function (event) {
                var $TreeObj = function (data) {
                  this.$clone(data);
                };
                var treeObjToArr = function (data) {
                  var result = [];
                  var traverse = function (item, parent, level) {
                    var to = new $TreeObj(item);
                    to.parent = parent;
                    to.level = level;
                    result.push(to);
                    for (var i in item.domainInfos) {
                      var m = level + 1;
                      traverse(item.domainInfos[i], item, m);
                    }
                  };
                  traverse(event.data[0], null, 0);
                  return result;
                };
                if (event.code) {
                  if (isArryLike) {
                    var to = treeObjToArr(event.data[0]);
                    resolve(to);
                  } else {
                    resolve(event.data);
                  }
                }
              })
            });
            fn.promise.then(function (dtree) {
              fn.cached = dtree;
              delete fn.promise;
              callback(clone(fn.cached));
            })
          }
        };
        cmethod.prototype.getAlertWord = function (str) {
          var color = "";
          switch (str) {
          case 4:
            color = "危险";
            break;
          case 3:
            color = "警告";
            break;
          case 2:
            color = "注意";
            break;
          case 1:
            color = "正常";
            break;
          default:
            color = "正常";
            break;
          }
          //
          return color;
        };
        cmethod.prototype.getAlertColorPoint = function (status) {
          var color = ""
          switch (status) {
          case 4:
            color = "e74e53";
            break;
          case 3:
            color = "#ee6b1c";
            break;
          case 2:
            color = "#efd709";
            break;
          default:
            color = "#00bc79";
            break;
          }
          return color;
        };
        cmethod.prototype.getAlertColor = function (status) {
          var color = ""
          switch (status) {
          case 4:
            color = "#e74e53";
            break;
          case 3:
            color = "#ee6b1c";
            break;
          case 2:
            color = "#ece417";
            break;
          case 1:
            color = "#00bc79";
            break;
          default:
            color = "#00bc79";
            break;
          }
          return color;
        };
        /**
         * 查出基地/厂部/产线/设备名称
         * 韩星 2018.01.16
         * @param domainPathList 传入domainPath
         */
        cmethod.prototype.getdomainListName = function (domainPathList) {
          var domainList = [];
          for (var i = 0; i < domainPathList.length; i++) {
            cmethod.prototype.getdomainNameHandler(domainPathList[i].domains, domainList);
          }
          return domainList;
        };
        cmethod.prototype.getdomainNameHandler = function (domainPathListStr, domainList) {
          var domainListDic = rootScope.domainListDic;
          var domainPathListSplit = domainPathListStr.split("/");
          domainPathListSplit.forEach(function (domainId) {
            if (domainListDic[domainId]) {
              domainList.push(domainListDic[domainId].label);
            }
          })
          return domainList;
        }

        cmethod.prototype.getCurrentDomainCi = function (callback) {
          var domainPath = userLoginUIService.user.domains;
          if (!domainPath) {
            callback(null);
            return;
          }
          var domainId;
          var arr = domainPath.split("/");
          if (arr.length > 1) {
            domainId = arr[arr.length - 2];
          }
          $$.cacheAsyncData.call(resourceUIService.getResourceById, [domainId], function (event) {
            if (event.code == 0) {
              callback(event.data)
            }
          });
          /**
           resourceUIService.getResourceById(domainId, function(event){
      if(event.code == 0){
        callback(event.data)
      }
    })*/
        };

        function isEmptyObject(obj) {
          for (var i in obj) {
            return false;
          }
          return true;
        }


        cmethod.prototype.getDevicesByCondition = function (params, callback, extendstr, noCache) {
          var fn = cmethod.prototype.getDevicesByCondition;
          var include = [
            "resourceType",
            "category",
            "customerId",
            "projectId",
            "domainPath",
            "domains",
            "externalDevId",
            "label",
            "id",
            "modelId",
            "values.viewType",
            "values.MeasurePointLocate",
            "value.viewType",
            "values.OfflinePerson",
            "values.JoinPersonList",
            "physicalConfig.accessConfigs.instance",
            "physicalConfig.accessConfigs.dataItemId",
            "physicalConfig.accessConfigs.kpiId",
            "physicalConfig.accessConfigs.kpiName",
            "physicalConfig.accessConfigs.specialtyProp"
          ];
          var currentRoleID = userLoginUIService.user.currentRoleID || 0;
          var roleFunctionCodeMap = userLoginUIService.user.roleFunctionCodeMap || {};
          var includeFields = "includeFields=" + include.toString(),
            menuitems = roleFunctionCodeMap[currentRoleID] || [],
            vals = (function (menuitems) {
              if (menuitems.indexOf("F08_01") !== -1)
                return {};
              if (menuitems.indexOf("F08_03") !== -1)
                return { diagnosticType: "90" }
              if (menuitems.indexOf("F08_06") !== -1)
                return { diagnosticType: "280" }
              if (menuitems.indexOf("F08_02") !== -1)
                return { diagnosticType: { "NOT_IN": ["90", "280"] } }
            })(menuitems);
          /** 当参数为空的时候缓存DEVICES列表,不空的时候不进行缓存*/
          if (!isEmptyObject(params)) {
            params.values = vals
            resourceUIService.getDevicesByCondition(params, function (event) {
              if (event.code == 0) {
                callback(event.data);
              }
            }, extendstr || includeFields);
          } else {
            params.values = vals
            if (!noCache) {
              if (fn.cached) {
                callback(clone(fn.cached))
              } else {
                fn.promise = fn.promise || new Promise(function (resolve) {
                  resourceUIService.getDevicesByCondition(params, function (event) {
                    if (event.code == 0) {
                      resolve(event.data);
                    }
                  }, extendstr || includeFields);
                });
                fn.promise.then(function (devices) {
                  fn.cached = devices;
                  delete fn.promise;
                  callback(clone(fn.cached));
                });
              }
            } else {
              resourceUIService.getDevicesByCondition(params, function (event) {
                if (event.code == 0) {
                  callback(clone(event.data));
                }
              }, extendstr || includeFields);
            }
          }
        };
        cmethod.prototype.getCurrentDevices = function (callback) {
          this.getCurrentProject(function (project) {
            if (project) {
              var domainPath = project.domainPath;
              var params = {
                projectId: project.id
              };
              resourceUIService.getDevicesByCondition(params, function (event) {
                if (event.code == 0) {
                  callback(event.data);
                }
              });
              /*
             $$.cacheAsyncData.call(resourceUIService.getDevicesByCondition, [params], function(event){
             if(event.code == 0){
             callback(event.data)
             }
             });*/
              /**
               resourceUIService.getDevicesByCondition(params, function(event){
          if(event.code == 0){
            callback(event.data);
          }
        });*/
            } else {
              callback([]);
            }
          });
        };
        cmethod.prototype.getCurrentResource = function (callback) {
          var id = this.getParameter("resourceId");
          if (id) {
            resourceUIService.getResourceById(id, function (event) {
              if (event.code == 0) {
                callback(event.data);
              }
            });
          } else {
            if (routeParam.resourceId) {
              id = routeParam.resourceId;
              $$.cacheAsyncData.call(resourceUIService.getResourceById, [id], function (event) {
                if (event.code == 0) {
                  callback(event.data)
                }
              });
            } else {
              callback(null);
            }
          }
        };
        cmethod.prototype.getCurrentProject = function (callback) {
          var id = this.getParameter("projectId");
          if (id) {
            $$.cacheAsyncData.call(resourceUIService.getResourceById, [id], function (event) {
              if (event.code == 0) {
                callback(event.data)
              }
            });
          } else {
            callback(null);
          }
        };
        cmethod.prototype.getCurrentCustomer = function (callback) {
          var id = this.getParameter("customerId");
          if (id) {
            $$.cacheAsyncData.call(resourceUIService.getResourceById, [id], function (event) {
              if (event.code == 0) {
                callback(event.data)
              }
            });
          } else {
            callback(null);
          }

        };
        cmethod.prototype.getCiKpi = function (callback) {
          var model = this.$attr("data/model");
          var resources = this.$attr("data/resource");
          var modelType = this.$attr("data/modelType");
          var resfilltype = this.$attr("data/resfilltype");
          var kpis = this.$attr("data/kpi");
          resources = resources ? resources : [];
          kpis = kpis ? kpis : [];
          var cur = this,
            defers = [],
            res = [],
            ks = [];
          var getKpis = function () {
            var some = kpis.some(function (element) {
              return typeof element != "object";
            });
            if (some) {
              var modelId;
              if (modelType == 0 || modelType == undefined) {
                modelId = model.id;
              } else {
                modelId = modelType;
              }
              if (modelId) {
                $$.cacheAsyncData.call(resourceUIService.getDataItemsByModelId, [modelId], function (event) {
                  if (event.code == 0) {
                    ks = event.data.filter(function (elem) {
                      return kpis.indexOf(elem.id) != -1;
                    });
                    callback(res, ks);
                  }
                });
                /**
                 resourceUIService.getKpisByModelId(modelId, function(event){
            if(event.code == 0){
              ks = event.data.filter(function(elem){
                return kpis.indexOf(elem.id) != -1;
              });
              callback(res, ks);
            }
          })*/
              } else {
                throw new Error("modelId is no avaliable!!!");
              }
            } else {
              ks = kpis;
              callback(res, ks);
            }
          };
          if (resources.length == 1 && resources[0] == "rootCi") {
            this.$attr("data/modelType", 300);
            this.$attr("data/resfilltype", "parameter");
            this.$attr("data/resource", []);
            modelType = 300;
            resfilltype = "parameter";
          }
          if (resfilltype == "parameter") {
            if (modelType == 300) {
              cmethod.prototype.getCurrentDomainCi(function (ci) {
                res = [ci];
                getKpis();
              })
            } else if (modelType == 0) {
              cmethod.prototype.getCurrentResource(function (ci) {
                res = ci ? [ci] : [];
                getKpis();
              })
            } else if (resfilltype == 301) {
              cmethod.prototype.getCurrentCustomer(function (ci) {
                res = ci ? [ci] : [];
                getKpis();
              })
            } else if (modelType == 302) {
              cmethod.prototype.getCurrentProject(function (ci) {
                res = ci ? [ci] : [];
                getKpis();
              })
            } else if (modelType == 303) {
              cmethod.prototype.getCurrentDomainCi(function (ci) {
                res = ci ? [ci] : [];
                getKpis();
              })
            } else {
              cmethod.prototype.getCurrentDomainCi(function (ci) {
                res = ci ? [ci] : [];
                getKpis();
              })
            }
          } else {
            var getResource = function (resource) {
              var defer = q.defer();
              if (typeof resource != "object") {
                cur.getResourceById(resource, function (data) {
                  res.push(data);
                  defer.resolve("success");
                })
              } else {
                res.push(resource);
                defer.resolve("success");
              }
              return defer.promise;
            };
            for (var i in resources) {
              defers.push(getResource(resources[i]));
            }
            q.all(defers).then(function (event) {
              getKpis();
            });
          }
        };
        cmethod.prototype.copyJSONFileToClipBoard = function () {
          var json = JSON.stringify(wholeJSON);
        };
        cmethod.prototype.postService = function (service, method, param, callback) {
          serviceProxy.get(service, method, param, callback);
        };

        cmethod.prototype.getLatestDevices = function (callback) {
          resourceUIService.getLatestDevices(function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.doTaskCloseAlert = function (ticketNo, obj, callback) {
          ticketTaskService.doTaskCloseAlert(ticketNo, obj, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getDeviceInfo = function (callback) {
          resourceUIService.getDeviceInfo(function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getTicketsByStatus = function (callback) {
          ticketTaskService.getTicketsByStatus([100], function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getAlertDeviceList = function (params, callback) {
          ticketTaskService.getAlertDeviceList(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getTicketTasksByCondition = function (params, callback) {
          ticketTaskService.getTicketTasksByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getTicketTasksByConditionAndPage = function (params, pageRequest, callback) {
          ticketTaskService.getTicketTasksByConditionAndPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getDealTicketListByPage = function (params, pageRequest, callback) {
          ticketTaskService.getDealTicketListByPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.claimAlert = function (params, callback) {
          ticketTaskService.claimAlert(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getDeviceDiagnosticResumeOrTicketByPage = function (params, pageRequest, callback) {
          ticketTaskService.getDeviceDiagnosticResumeOrTicketByPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getInfoByPage = function (params, pageRequest, callback) {
          ticketTaskService.getInfoByPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getTicketsByConditionAndPage = function (params, pageRequest, callback) {
          ticketTaskService.getTicketsByConditionAndPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getUsersByDeviceIdAndRoleAndSpecialty = function (deviceId, roleId, specialty, callback) {
          ticketTaskService.getUsersByDeviceIdAndRoleAndSpecialty(deviceId, roleId, specialty, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.complexHandleAgain = function (taskId, complexHandel, callback) {
          ticketTaskService.complexHandleAgain(taskId, complexHandel, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getKnowledgeByConditionWithPage = function (params, pageRequest, callback) {
          ticketTaskService.getKnowledgeByConditionWithPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.alertTaskMergeDeal = function (taskIds, values, callback) {
          ticketTaskService.alertTaskMergeDeal(taskIds, values, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getTicketTasksByCondition = function (params, callback) {
          ticketTaskService.getTicketTasksByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getTicketsByCondition = function (params, callback) {
          ticketTaskService.getTicketsByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getDealTicketList = function (params, callback) {
          ticketTaskService.getDealTicketList(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.doTask = function (params, callback) {
          ticketTaskService.doTask(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.doTask4Baogang = function (ticketNo, values, callback) {
          ticketTaskService.doTask4Baogang(ticketNo, values, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getTopicErrorDataList = function (topicErrorQueryModel, callback) {
          ticketTaskService.getTopicErrorDataList(topicErrorQueryModel, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getComplexHandleListWithCategorys = function (selector, ticketTaskQueryModel, pageRequest, callback) {
          ticketTaskService.getComplexHandleListWithCategorys(selector, ticketTaskQueryModel, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.energyTypeList = function (callback) {
          var data = dictionaryService.dicts['energyType'];
          if (callback) {
            callback(data);
          }
        };
        cmethod.prototype.getDevicesByFilter = function (filter, callback) {
          var params = {
            modelId: filter.modelId,
            domainPath: filter.domainPath,
            label: filter.deviceName,
            sn: filter.sn
          };
          resourceUIService.getDevicesByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          });
        };
        cmethod.prototype.getCurrentAlert = function (callback) {
          var resourceId = this.getParameter("resourceId");
          if (resourceId) {
            alertService.queryFromDb({
              nodeIds: resourceId
            }, function (event) {
              if (event.code == 0) {
                callback(event.data);
              }
            })
          } else {
            callback([]);
          }
        };

        cmethod.prototype.getAlertByPage = function (params, pages, callback) {
          alertService.getAlertByPage(params, pages, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };


        cmethod.prototype.getAllAlerts = function (callback) {
          alertService.queryFromDb({}, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getAlerts = function (callback) {
          var domainPath = userLoginUIService.user.domainPath;
          alertService.queryFromDb({ domain: domainPath }, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.queryFromDb = function (param, callback) {
          alertService.queryFromDb(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.setExpression = function (str) {
          this.$attr("advance/expression", str);
        }
        cmethod.prototype.runExpression = function (str) {
          var expression;
          $$.runExpression(str, function (funRes) {
            if (funRes.code == "0") {
              var fnResult = funRes.data;
              expression = fnResult ? fnResult : {};
            } else {
              expression = {};
              //throw new Error(funRes.message);
            }
          });
          return expression;
        };
        cmethod.prototype.getCustomerFromCurrentUser = function (callback) {
          var cur = this;
          var domains = userLoginUIService.user.domains;
          var customerId;
          var arr = domains.split("/");
          if (arr.length > 2) {
            customerId = arr[arr.length - 2];
            cur.getResourceById(customerId, function (resource) {
              callback(resource);
            })
          } else {
            callback(resource);
          }
        };
        cmethod.prototype.getCurrentAlertByProject = function (callback) {
          var resourceId = this.getParameter("projectId");
          alertService.queryFromDb({
            nodeIds: resourceId
          }, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.currentDirective = function (callback) {
          var resId = this.getParameter("resourceId");
          if (resId) {
            this.getResourceById(resId, function (resource) {
              if (resource) {
                var modelId = resource.modelId;
                if (modelId) {
                  resourceUIService.getDirectivesByModelId(modelId, function (event) {
                    if (event.code == 0) {
                      callback(event.data);
                    }
                  })
                } else {
                  callback([]);
                }
              } else {
                callback([]);
              }
            });
          } else {
            callback([]);
          }
        };
        cmethod.prototype.getProjectByTYpeId = function (projectTypeId, callback) {
          customMethodService.getProjectsType(function (event) {
            if (event.code == 0) {
              var projectType = event.data.find(function (elem) {
                return projectTypeId == elem.id;
              });
              if (projectType == undefined) {
                projectType = event.data[0];
              }
              resourceUIService.getResourceByModelId(302, function (event) {
                if (event.code == 0) {
                  var find = event.data.find(function (el) {
                    return el.values.projectType == projectType.valueCode;
                  });
                  if (typeof callback == "function") {
                    callback(find);
                  } else {

                  }
                }
              });
            }
          })
        };
        _proto_.promise = function (fn) {
          var defer = q.defer();
          fn(defer.resolve, defer.reject);
          return defer.promise;
        }
        _proto_.$getViewById = function (id, callback) {
          var cv = viewCache(id),
            self = this;
          if (!cv) {
            viewCache(id, self.promise(function (res, rej) {
              self.getViewById(id, function (e) {
                if (e) {
                  res(e)
                }
              })
            }))
          }
          viewCache(id).then(function (d) {
            callback(d);
          })
        }
        cmethod.prototype.getViewById = cmethod.prototype.getViewByViewId = function (viewId, callback) {
          if (!viewId) {
            return;
            throw new Error("viewId不存在")
          }
          var views = cmethod.prototype.getViewById.views = cmethod.prototype.getViewById.views || {};
          var view = views[viewId] = views[viewId] || {};
          if (view.cache) {
            callback(clone(view.cache))
          } else {
            view.promise = view.promise || new Promise(function (resolve) {
              viewFlexService.getViewById(viewId, function (event) {
                if (event.code == 0) {
                  resolve(event.data);
                }
              })
            })
            view.promise.then(function (d) {
              view.cache = d;
              callback(clone(view.cache));
            })
          }
        };
        cmethod.prototype.getProjectsType = function (callback, domains) {
          customMethodService.getProjectsType(function (event) {
            if (event.code == 0) {
              if (typeof callback == "function") {
                callback(event.data);
              } else {

              }
            }
          }, domains)
        };
        cmethod.prototype.getCached = function () {
          return cms.$cache;
        };

        function LocalStore() {}

        LocalStore.prototype.setValue = function (attr, value) {
          if (value == null) {
            return;
          }
          var arr = attr.split("/").filter(function (d) { return d }),
            first = arr.shift(),
            last = arr.pop(),
            str = window.sessionStorage.getItem(first),
            obj = JSON.parse(str) || {},
            rs = arr.length > 0 ? arr.reduce(function (a, b) {
              a[b] = a[b] || {};
              return a[b];
            }, obj) : obj;
          if (last != null) {
            rs[last] = value;
            window.sessionStorage.setItem(first, JSON.stringify(obj));
          } else {
            window.sessionStorage.setItem(first, value);
          }
        }

        function parse(str) {
          var rs;
          try {
            rs = JSON.parse(str);
          } catch (e) {
            console.error(e);
          }
          return rs;
        }

        LocalStore.prototype.getValue = function (attr) {
          if (typeof attr !== "string") {
            console.warn("无效的参数")
            return null;
          } else {
            //return cms.$cache.$attr(attr);
            var arr = attr.split("/").filter(function (d) { return d }),
              first = arr.shift(),
              str = window.sessionStorage.getItem(first),
              obj = parse(str),
              value = arr.length > 0 ? arr.reduce(function (a, b) {
                return a && a[b];
              }, obj) : obj;
            return value;
          }
        }

        cmethod.prototype.setValue = setValue = function (attr, value) {
          cms.$cache.$attr(attr, value);
        }
        cmethod.prototype._setValue = setValue = function (attr, value) {
          localStore.setValue(attr, value);
        };
        cmethod.prototype.getValue = function (attr) {
          return cms.$cache.$attr(attr);
        };
        cmethod.prototype._getValue = function (attr) {
          return localStore.getValue(attr);
        };
        cmethod.prototype.deleteValue = function (attr, value) {
          delete cms.$cache[attr];
          // window.sessionStorage.removeItem(attr);
        };
        cmethod.prototype.findProjectsByCondition = function (param, callback) {
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              if (callback) {
                callback(event.data);
              }
            }
          })
        };
        cmethod.prototype.getCurrentProjects = function (callback) {
          var param = {
            domainPath: userLoginUIService.user.domainPath
          };
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              if (callback) {
                callback(event.data);
              }
            }
          })
        };
        cmethod.prototype.getViewsByOnlyRole = function (viewType, resourceType, resourceId, callback) {
          viewFlexService.getViewsByOnlyRole(viewType, function (event) {
            var views = event.data;
            /** 为防止同一模型有相同的视图被授权，在这里取VIEWID */
            var loop = function (view) {
              if (view.template && view.template.resourceType == resourceType && view.template.resourceId == resourceId) {
                viewFlexService.getViewById(view.viewId, function (event) {
                  if (event.code == 0) {
                    callback(event.data);
                  } else {
                    callback(null);
                  }
                });
              }
            };
            for (var i in views) {
              loop(views[i])
            }
            /**
             var find = views.find(function(view){
        return view.template && view.template.resourceType == resourceType && view.template.resourceId == resourceId;
      });
             if(find){
        viewFlexService.getViewById(find.viewId, function(event){
          if(event.code == 0){
            callback(event.data);
          } else {
            callback(null);
          }
        })
      };*/
          });
        };
        /** 这个和下面的getManagedViewsByTypeAndRole的有差别的
         cmethod.prototype.getManagedViewsByTypeAndRole = function (viewType, resourceType, resourceId, callback) {
        viewFlexService.getManagedViewsByTypeAndRole(viewType, function (event) {
          var views = event.data;
          var loop = function (view) {
            if (view.template && view.template.resourceType == resourceType && view.template.resourceId == resourceId) {
              viewFlexService.getViewById(view.viewId, function (event) {
                if (event.code == 0) {
                  callback(event.data);
                } else {
                  callback(null);
                }
              });
            }
          };
          for (var i in views) {
            loop(views[i])
          }
        });
      };
         */
        cmethod.prototype.growl = function (str, fun) {
          fun = fun || "success"
          growl[fun](str);
        };
        cmethod.prototype.sendDirective = function (nodeId, dirId, data, callback) {
          resourceUIService.sendDeviceDirective(nodeId, dirId, data, function (returnObj) {
            if (returnObj.code == 0) {
              if (typeof callback == "function") {
                callback(returnObj);
              } else {

              }
              //growl.success("指令发送成功", {});
            }
          });
        };
        cmethod.prototype.sendItemDir = function (dir, nodeId) {
          var itemDirValues = {};
          if (!dir.value) {
            growl.warning("请输入指令参数");
            return;
          }
          for (var i in dir.params) {
            var obj = dir.params[i];
            itemDirValues[obj.name] = dir.value;
          }
          BootstrapDialog.show({
            title: '提示',
            closable: false,
            message: '您发送的指令将会在设备上执行，状态数据返回会有一段时间，确认要发送指令吗？',
            buttons: [{
              label: '确定',
              cssClass: 'btn-success',
              action: function (dialogRef) {
                resourceUIService.sendDeviceDirective(nodeId ? nodeId : Number(this.getParameter("resourceId")), dir.id, itemDirValues, function (returnObj) {
                  if (returnObj.code == 0) {
                    growl.success("指令发送成功，请勿重复发送，状态数据返回需要一定时间！", {});
                  }
                });
                dialogRef.close();
              }
            }, {
              label: '取消',
              action: function (dialogRef) {
                dialogRef.close();
              }
            }]
          });

        };
        cmethod.prototype.sendItemDirAll = function (dir) {
          var itemDirValues = {};
          for (var i in dir.params) {
            var obj = dir.params[i];
            if (dir.params[i].$value) {
              itemDirValues[obj.name] = dir.params[i].$value;
            }
          }
          resourceUIService.sendDeviceDirective(Number(this.getParameter("resourceId")), dir.id, itemDirValues, function (returnObj) {
            if (returnObj.code == 0) {
              growl.success("指令发送成功", {});
            }
          });
        };
        cmethod.prototype.sendItemDirByValue = function (id, params) {
          resourceUIService.sendDeviceDirective(Number(this.getParameter("resourceId")), id, params, function (returnObj) {
            if (returnObj.code == 0) {
              growl.success("指令发送成功", {});
            }
          });
        };
        cmethod.prototype.getAllDevices = function () {

        };
        cmethod.prototype.getViewByViewTitle = function (viewTitle, callback) {
          viewFlexService.getAllMyViews(function (event) {
            var views = event.data;
            var find = views.find(function (view) {
              return view.viewTitle == viewTitle;
            });
            if (find) {
              viewFlexService.getViewById(find.viewId, function (event) {
                if (event.code == 0) {
                  callback(event.data);
                }
              })
            } else {
              callback(null);
            }
          })
        };
        cmethod.prototype.setTimeInterval = function (fn, num) {
          timeIntervals.push(fn, num || 10000);
        }
        cmethod.prototype.getResources = function (callback, extendstr) {
          var fn = cmethod.prototype.getResources;
          if (fn.cached) {
            callback && callback(clone(fn.cached));
          } else {
            fn.promise = fn.promise || new Promise(function (resolve, reject) {
              resourceUIService.getResources(function (event) {
                if (event.code == 0) {
                  resolve(event.data);
                } else {
                  reject(event);
                }
              }, extendstr);
            });
            fn.promise.then(function (d) {
              fn.cached = d;
              callback && callback(clone(fn.cached));
            }).catch(function (e) {
              console.error(e);
            })
          }

        };
        /**
         * 宝钢针对全局视图的跳转，扩展了一个方法
         * @param str
         */
        function removeNull(obj) {
          for (var i in obj) {
            if (typeof obj[i] === "undefined" || obj[i] === null) {
              delete obj[i];
            }
          }
          return obj;
        }
        cmethod.prototype.navigateToTab = function (p) {
          var target = $state.current.name,
            params = $state.params;
          extend(params, p);
          $state.go(target, removeNull(params));
        }

        cmethod.prototype.analysisDataPrep = function (node, callback) {
          var cur = this,
            sensor, accessConfigs,
            id = node.nodeId;
          cur.setParameter("id", node.nodeId);
          cur.getResourceById(node.nodeId, function (resource) {
            cur.getDomainAreaLineTree(function (domainTree) {
              accessConfigs = resource.physicalConfig.accessConfigs || {};
              cur.setValue("global/alertTime", node.arisingTime);
              cur.setValue("global/resource", resource);
              sensor = accessConfigs.find(function (n) {
                return n.instance === node.instance;
              }) || null;
              cur.setValue("global/sensor", sensor);
              callback(sensor.name);
            });
          })
        }

        cmethod.prototype.getProjectsAndKpiValue = function (callback) {
          var cur = this;
          cur.findProjectsByCondition({}, function (projects) {
            var cis = [];
            var kpis = [999999];
            var pushDiff = function (arr) {
              for (var i in arr) {
                if (this.indexOf(arr[i]) == -1) {
                  this.push(arr[i]);
                }
              }
            }
            var sloop = function (arr, rptback, callback) {
              var inx = 0;
              var repeat = function (inx) {
                var item = arr[inx];
                if (item) {
                  rptback(item, function () {
                    inx++;
                    repeat(inx);
                  });
                } else {
                  callback(arr);
                }
              }
              repeat(inx);
            };
            var traverse = function (callback) {
              var cur = this;
              for (var i in cur) {
                for (var j in cur[i].devices) {
                  callback(cur[i], j, cur[i].devices[j]);
                }
              }
            }
            sloop(projects, function (project, callback1) {
              cur.getDevicesByCondition({
                projectId: project.id
              }, function (devices) {
                project.devices = devices;
                var devis = devices.map(function (elem) {
                  return elem.id
                });
                pushDiff.call(cis, devis);
                sloop(devices, function (device, callback2) {
                  var modelId = device.modelId;
                  cur.getKpisByModelId(modelId, function (kpiDes) {
                    var kpiMaps = kpiDes.map(function (elem) {
                      return elem.id;
                    });
                    pushDiff.call(kpis, kpiMaps);
                    device.kpis = kpiDes;
                    callback2();
                  })
                }, function () {
                  callback1();
                })
              })
            }, function () {
              cur.getKpiValueCi(cis, kpis, function (valuelist) {
                traverse.call(projects, function (project, inx, device) {
                  if (project.detail == undefined) {
                    project.detail = [];
                  }
                  var loop = function (kpi) {
                    var find = valuelist.find(function (el) {
                      return el.nodeId == device.id && el.kpiCode == kpi.id;
                    });
                    var alertFind = valuelist.find(function (el) {
                      return el.nodeId == device.id && el.kpiCode == 999999 && el.instance == kpi.id;
                    });
                    project.detail.push({
                      ci: {
                        label: device.label
                      },
                      kpi: {
                        label: kpi.label,
                        icon: kpi.icon ? kpi.icon : "proudsmart ps-system"
                      },
                      status: alertFind ? alertFind.value : 0,
                      value: find ? find.value : "-"
                    });
                  }
                  for (var i in device.kpis) {
                    loop(device.kpis[i]);
                  }
                });
                callback(projects);
              }, {
                "includeInstance": true
              })
            });
          });
        };
        cmethod.prototype.Synchook = function () {
          function Synchook() {
            this.hooks = {};
          }
          Synchook.prototype.tap = function (name, callback) {
            this.hooks[name] = callback;
          };
          Synchook.prototype.call = function (name, data, callback) {
            var rs, next = function (d) {
              callback(d);
            }
            if (typeof this.hooks[name] !== "function") {
              callback();
            } else {
              rs = this.hooks[name](data, next);
              if (rs) {
                callback(rs);
                next = function () {}
              }
            };
          }
          return new Synchook();
        }
        cmethod.prototype.getProTypeByTypeId = function (id, callback) {
          customMethodService.getProTypeByTypeId(id, function (event) {
            if (event.code == 0) {
              if (typeof callback == "function") {
                callback(event.data);
              } else {

              }
            }
          })
        };

        function parse(str) {
          var obj;
          try {
            obj = JSON.parse(str);
          } catch (e) {
            return undefined;
          }
          return typeof obj == "object" ? obj : undefined;
        }

        function getParamsFromHash(attr) {
          var hash = location.$$path,
            params = hash && hash.split("/"),
            obj = params && params.pop(),
            attrs = parse(obj) || [],
            at = attrs.pop() || {};
          return at[attr];
        }
        cmethod.prototype.getParameter = function (str) {

          if (str === "id") {
            var id = $state.params[str];
            return id;
          } else {
            return $state.params[str] || getParamsFromHash(str);
          }
          /** 同时取得PATH和HASH的信息*/
          /**
          if( str === "id" ){
            return $state.params[ "id" ];
          }
          var hash = (function (h) {
            if (!h) return {};
            var r = decodeURIComponent(h);
            return JSON.parse(r)
          })(location.hash());
          var param = (function (s) {
            if (!s) return {};
            var p = decodeURIComponent(s);
            p = JSON.parse(p);
            return p.length > 0 ? p[p.length - 1] : {}
          })(routeParam.parameter);
          if (typeof param !== "object") {
            param = {};
          }
          extend(param, hash);
          return param.$attr(str);**/
        };
        cmethod.prototype.setParameter = function (attr, val) {
          function switch2Object(obj) {
            if (typeof obj !== "string" ||
              typeof obj !== "object" ||
              obj == null) {
              return {}
            }
            if (typeof obj == "string") {
              return parse(obj) || {};
            }
            if (typeof obj == "object") {}
            return obj
          }
          $state.params["#"] = switch2Object($state.params["#"]);
          $state.params["#"][attr] = val;
        };
        cmethod.prototype.getPages = function (str) {
          var pageArr = (routeParam.page || "index").split("|");
          var parameters = JSON.parse(routeParam.parameter || "[0]");
          var rs = [];
          var rootTarget = this.getRootTarget();
          var groups = rootTarget.groups;
          for (var i in pageArr) {
            rs.push({
              path: pageArr[i],
              tabLabel: parameters[i].tabLabel || groups[i].label,
              parameter: parameters[i]
            });
          }
          return rs;
        };
        _proto_.$getCurrentResource = $getCurrentResource = function (callback) {
          var id = $state.params.id;
          $getResourceById(id, callback);
        }
        _proto_.$getResourceById = $getResourceById = function (id, callback) {
          psTreeData(id).getState().then(callback);
        }
        cmethod.prototype.getResourceById = function (id, callback, fromCache) {
          var fn = cmethod.prototype.getResourceById;
          if (!id) {
            throw new Error("id不可为空");
          }
          fn[id] = fn[id] || {};
          fn[id].cached = fn[id].cached || {};
          if (fn[id].cached && fromCache) {
            callback(clone(fn[id].cached));
          } else {
            fn[id].promise = fn[id].promise || new Promise(function (resolve) {
              resourceUIService.getResourceById(id, function (event) {
                if (event.code == 0) {
                  resolve(event.data);
                }
              })
            });
            fn[id].promise.then(function (resource) {
              fn[id].cached = resource;
              callback(clone(resource));
              delete fn[id].promise
            })
          }
        };
        cmethod.prototype.getOnlineByKpiCodes = function (id, callback) {
          if (id) {
            var kpiQueryModel = {
              includeInstance: true,
              isRealTimeData: true,
              nodeIds: [id],
              kpiCodes: [999998],
              timePeriod: 0
            };
            var param = ["kpi", kpiQueryModel];
            kpiDataService.getValueList(param, function (event) {
              if (event.code == 0) {
                callback(event.data);
              }
            })
          } else {
            callback(null);
          }
        };
        cmethod.prototype.navigateBackTo = function () {
          window.location.href = oldURL;
        };
        cmethod.prototype.navigateBack = function () {
          var para, page = routeParam.page ? routeParam.page : "index";
          var oldParam = routeParam.parameter;
          if (oldParam == undefined) {
            oldParam = ['0']
          } else {
            oldParam = JSON.parse(oldParam);
          }
          var pageArr = page.split("|");
          pageArr.pop();
          page = pageArr.toString();
          page = page.replace(",", "|");
          var last = oldParam[oldParam.length - 1];
          var tabLabel = last.tabLabel;
          oldParam.pop();
          para = encodeURIComponent(JSON.stringify(oldParam));
          if (route.current.$$route.controller == "viewFreeboardCtrl") {
            if (page != "") {
              window.location.href = "../app-sc/index_freeboard.html#/freeboard/" + page + "/" + para;
            }
          } else if (route.current.$$route.controller == "freeStyleCtrl") {
            var viewId = routeParam.viewId;
            if (page != "") {
              window.location.href = "../app-free-style/index.html#/" + viewId + "/" + page + "/" + para;
            }
          } else {
            if (page != "") {
              window.location.href = "../app-oc/index.html#/dashboard/" + page + "/" + para;
            }
          }
        };
        cmethod.prototype.moveTo = function (url) {
          var para, page, pageStr = routeParam.page ? routeParam.page : "index";
          var oldParam = routeParam.parameter;
          if (oldParam == undefined) {
            oldParam = ['0']
          } else {
            oldParam = JSON.parse(oldParam);
          }
          var page = pageStr.split("|");
          var inx = page.indexOf(url);
          if (inx != -1) {
            var pageArr = page.slice(0, inx + 1);
            oldParam = oldParam.slice(0, inx + 1);
            page = pageArr.toString();
            page = page.replace(/\,/g, "|");
            para = encodeURIComponent(JSON.stringify(oldParam));
            if (route.current.$$route.controller == "viewFreeboardCtrl") {
              window.location.href = "../app-sc/index_freeboard.html#/freeboard/" + page + "/" + para;
            } else if (route.current.$$route.controller == "freeStyleCtrl") {
              var viewId = routeParam.viewId;
              window.location.href = "../app-free-style/index.html#/" + viewId + "/" + page + "/" + para;
            } else {
              window.location.href = "../app-oc/index.html#/dashboard/" + page + "/" + para;
            }
          }
        };

        function getRootDir() {
          var controller = route.current.$$route.controller;
          var Dic = {
            viewFreeboardCtrl: "freeboard",
            freeStyleCtrl: routeParam.viewId,
            others: "dashboard"
          }
          return Dic[controller] || "dashboard";
        }
        _proto_.destroy = function (fn) {
          //window.removeEventListener( "hashchange", hashkeyChangeListener );
          scope && scope.$on("$destroy", fn);
        }
        cmethod.prototype.navigateToJson = function (url, parameter, type) {
          var para, page = routeParam.page ? routeParam.page : "index";
          if (parameter == undefined) {
            parameter = '0';
          }
          var oldParam = routeParam.parameter;
          if (oldParam == undefined) {
            oldParam = ['0']
          } else {
            oldParam = JSON.parse(oldParam);
          }
          if (type == "self") {
            var pageArr = page.split("|");
            pageArr.pop();
            page = pageArr.toString();
            page.replace(",", "|");
            var last = oldParam[oldParam.length - 1];
            var tabLabel = last.tabLabel;
            oldParam.pop();
            if (tabLabel) {
              parameter.tabLabel = tabLabel;
            }
            parameter.$target == "self";
            oldParam.push(parameter);
          } else {
            parameter.$target == "blank";
            oldParam.push(parameter);
          }
          para = encodeURIComponent(JSON.stringify(oldParam));
          if (route.current.$$route.controller == "viewFreeboardCtrl") {
            if (page != "") {
              window.location.href = "../app-sc/index_freeboard.html#/freeboard/" + page + "|json:" + url + "/" + para;
            } else {
              window.location.href = "../app-sc/index_freeboard.html#/freeboard/" + url + "/" + para;
            }
          } else if (route.current.$$route.controller == "freeStyleCtrl") {
            var viewId = routeParam.viewId;
            if (page != "") {
              window.location.href = "../app-free-style/index.html#/" + viewId + "/" + page + "|json:" + url + "/" + para;
            } else {
              window.location.href = "../app-free-style/index.html#/" + viewId + "/" + url + "/" + para;
            }
          } else {
            if (page != "") {
              window.location.href = "../app-oc/index.html#/dashboard/" + page + "|json:" + url + "/" + para;
            } else {
              window.location.href = "../app-oc/index.html#/dashboard/" + url + "/" + para;
            }
          }
        };
        cmethod.prototype.navigateToFeature = function (callback) {
          var cur = this;
          var ROLE = cur.getValue("global/ROLE");

          if (ROLE == 0) {
            cur.navigateTo("index", {
              main: 3
            }, "self");
          } else if (ROLE == 1) {
            cur.navigateTo("index", {
              main: 2,
              backHistory: 1
            }, "self");
          } else if (ROLE == 2) {
            cur.navigateTo("index", {
              main: 2,
              backHistory: 1
            }, "self");
          } else if (ROLE == 3) {
            cur.navigateTo("index", {
              main: 2,
              backHistory: 1
            }, "self");
          }
        }

        /** 跳转方法支持以下写法
        target.navigateTo("综合趋势");
        target.navigateTo("prod_analysis");
        target.navigateTo(1);
        target.navigateTo("index", 1);
        target.navigateTo([1,0]);
        target.navigateTo("index", [1,0]);
        target.navigateTo({
          main : 1,
          sub : [0,""]
        });
        target.navigateTo("index", {
          main : 1,
          sub : 0
        });
         target.navigateTo("index", function(node){
            return node.name == "综合趋势";
         });
         **/
        cmethod.prototype.navigateTo = function (url, parameter, ext) {
          ext = typeof ext != "object" ? {} : ext;
          var ticketNo = this.getValue("ticketNo");
          if (typeof parameter === "undefined") {
            parameter = url;
            url = "index"
          }
          if (typeof parameter === "undefined") {
            throw new Error("invalid parameter found");
          }
          cms2.navigateTo(parameter, ext, url, {
            ticketNo: ticketNo
          });
        };
        cmethod.prototype.$state = $state;
        cmethod.prototype.historyBack = function () {
          window.history.go(-1);
        }
        cmethod.prototype.back = function () {
          window.history.go(-1);
        }
        cmethod.prototype.explainDic = function (attr, elem) {
          var obj;
          if (typeof elem == "object") {
            obj = elem;
          } else {
            obj = {
              type: "label",
              value: attr,
              name: elem
            }
          }
          return obj
        };
        cmethod.prototype.getSimulateApi = function (simulate, num, callback) {
          var rs = [];
          var target = {
            randomText: function (strs) {
              var length = strs.length - 1;
              var inx = Math.round(Math.random() * length);
              return strs[inx];
            },
            random: function (max, digital) {
              var num = parseInt(Math.random() * max * Math.pow(10, digital)) / Math.pow(10, digital);
              return num;
            }
          }
          var repeat = function (inx) {
            var obj = {};
            var loopAttr = function (attr, elem) {
              if (typeof elem == "function") {
                obj[attr] = elem(inx, target, attr)
              } else {
                obj[attr] = elem;
              }
            }
            for (var i in simulate) {
              loopAttr(i, simulate[i])
            }
            return obj;
          }
          for (var i = 0; i < num; i++) {
            rs.push(repeat(i))
          }
          if (callback) {
            callback(rs);
          }
        };
        cmethod.prototype.getStartDate = function () {
          var alertTime = this.getValue("global/alertTime"),
            currentDate = this.dateHandler();
          alertMode = true;
          alertTime = alertTime ?
            this.dateHandler(alertTime) :
            null;
          return alertTime ?
            alertTime.clone().addHour(-2) :
            currentDate.addHour(-4);
        }
        cmethod.prototype.getEndDate = function () {
          var alertTime = this.getValue("global/alertTime"),
            currentDate = this.dateHandler();
          alertMode = true;
          alertTime = alertTime ?
            this.dateHandler(alertTime) :
            null;
          return alertTime ?
            alertTime.addHour(1) :
            currentDate;
        }
        cmethod.prototype.wait = function (condition, success) {
          var repeat = function () {
            if (condition()) {
              success();
            } else {
              setTimeout(function () {
                repeat();
              }, 10)
            }
          };
          repeat();
        };
        cmethod.prototype.http = function (url, callback) {
          customMethodService.http(url, function (event) {
            callback(event);
          })
        };
        cmethod.prototype.getScope = function () {
          var cur = this;
          var parent = cur;
          while (parent.parent) {
            parent = parent.parent;
          }
          return parent;
        };
        cmethod.prototype.setScopeValue = function (attr, value) {
          var t = this.getScope();
          if (!t['private']) {
            t['private'] = {};
            Object.defineProperty(t, "private", {
              enumerable: false,
              value: {}
            })
          }
          var obj = t['private'];
          obj.$attr(attr, value);
        };
        cmethod.prototype.getScopeValue = function (attr) {
          var t = this.getScope();
          var obj = t['private'] || {};
          return obj.$attr(attr);
        };
        cmethod.prototype.linkTo = function (url, target) {
          window.open(url, target ? target : "_blank");
        };
        cmethod.prototype.findViewHasProjectNameById = function (projectId, callback) {
          this.getResourceById(projectId, function (project) {
            var label = project.label;
            var getRootPath = function (domainPath) {
              var arr = domainPath.split("/");
              return "/" + arr[1] + "/" + arr[2] + "/";
            }
            var rootPath = getRootPath(userLoginUIService.user.domainPath);
            viewFlexService.getViewsOnlyPublishedByTypeAndDomainPath('dashboard', rootPath, function (event) {
              var views = event.data;
              var find = views.find(function (view) {
                return label.indexOf(view.viewTitle) != -1;
              });
              if (find) {
                viewFlexService.getViewById(find.viewId, function (event) {
                  if (event.code == 0) {
                    callback(event.data);
                  }
                })
              } else {
                callback(null);
              }
            })
          });
        };
        cmethod.prototype.getProjectsByCustomerId = function (customerId, callback) {
          var param = {};
          if (customerId) {
            param.customerId = customerId;
          }
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.simulate = function (type, nodesDes, kpisDes, simulateFn, callback) {
          var result = [];
          var date = new Date();
          var timeStamp = date.getTime();
          var timeStampToStr = function (timeStamp) {
            var nDate = new Date(timeStamp - 8 * 3600 * 1000);
            var year = nDate.getFullYear();
            var month = nDate.getMonth() + 1;
            var dat = nDate.getDate();
            var hour = nDate.getHours();
            var min = nDate.getMinutes();
            var sec = nDate.getSeconds();
            if (month < 10) {
              month = "0" + month;
            }
            if (dat < 10) {
              dat = "0" + dat;
            }
            if (hour < 10) {
              hour = "0" + hour;
            }
            if (min < 10) {
              min = "0" + min;
            }
            if (sec < 10) {
              sec = "0" + sec;
            }
            return year + "-" + month + "-" + dat + "T" + hour + ":" + min + ":" + sec + ".000+0000";
          };
          var renderData = function (index) {
            var startTime = simulateFn.startTime.getTime();
            var period = simulateFn.period;
            var frequency = simulateFn.frequency;
            var range = simulateFn.range;
            var getData = function (curTime) {
              if (curTime - startTime < period) {
                var loopNodes = function (node) {
                  var loopKpis = function (inx, kpi) {
                    var calcRandom = function (range) {
                      if (range) {
                        var max = range[1];
                        var min = range[0];
                        var ran = (max - min);
                        return Math.round((min + Math.random() * ran) * 10) / 10;
                      } else {
                        return Math.round(Math.random() * 100);
                      }
                    };
                    var val = calcRandom(range);
                    var sampleData = {
                      "agentId": "0",
                      "aggregatePeriod": null,
                      "aggregateStatus": null,
                      "aggregateType": null,
                      "arisingTime": timeStampToStr(curTime),
                      "compressCount": 0,
                      "computeTaskId": 0,
                      "dataSerialNumber": 0,
                      "dataTime": null,
                      "insertTime": timeStampToStr(curTime),
                      "kpiCode": kpi.id,
                      "nodeId": node.id,
                      "notes": null,
                      "numberValue": val,
                      "quality": 0,
                      "resourceId": 0,
                      "stringValue": null,
                      "value": val,
                      "valueStr": val + ""
                    };
                    result.push(sampleData);
                  };
                  for (var i in kpisDes) {
                    loopKpis(i, kpisDes[i])
                  }
                };
                for (var i in nodesDes) {
                  loopNodes(nodesDes[i])
                }
                getData(curTime + frequency);
              }
            };
            getData(startTime);
            if (typeof callback == "function") {
              callback(result);
            }
          };
          var renderData2D = function () {
            var dictionaryService = services.dictionaryService;
            var loadArray = ["energyType", "industryShortType"];
            var nextStep = function () {
              var loopNodes = function (node) {
                var loopKpis = function (inx, kpi) {
                  var loopInstance = function (ins1) {
                    var loopInstance2 = function (ins2) {
                      var range;
                      if (ranges) {
                        range = ranges[inx];
                      }
                      var calcRandom = function (range) {
                        if (range) {
                          var max = range[1];
                          var min = range[0];
                          var ran = (max - min);
                          return Math.round((min + Math.random() * ran) * 10) / 10;
                        } else {
                          return Math.round(Math.random() * 100);
                        }
                      };
                      var val = calcRandom(range);
                      var newTime = timeStamp;
                      var sampleData = {
                        "agentId": "0",
                        "aggregatePeriod": null,
                        "aggregateStatus": null,
                        "aggregateType": null,
                        "arisingTime": timeStampToStr(newTime),
                        "compressCount": 0,
                        "computeTaskId": 0,
                        "dataSerialNumber": 0,
                        "dataTime": null,
                        "insertTime": timeStampToStr(newTime),
                        "kpiCode": kpi.id,
                        "nodeId": node.id,
                        "notes": null,
                        "numberValue": val,
                        "instance": ins1.label + "," + ins2.label,
                        "quality": 0,
                        "resourceId": 0,
                        "stringValue": null,
                        "value": val,
                        "valueStr": val + ""
                      };
                      result.push(sampleData);
                    };
                    for (var i in loadArray[1].data) {
                      loopInstance2(loadArray[1].data[i]);
                    }
                  };
                  for (var i in loadArray[0].data) {
                    loopInstance(loadArray[0].data[i]);
                  }
                };
                for (var i in kpisDes) {
                  loopKpis(i, kpisDes[i])
                }
              };
              for (var i in nodesDes) {
                loopNodes(nodesDes[i])
              }
              if (typeof callback == "function") {
                callback(result);
              }
            };
            var loop = function (inx, loadType) {
              var getEnergyType = function (event) {
                var checkFinished = function () {
                  var every = loadArray.every(function (elem) {
                    return typeof elem == "object"
                  });
                  if (every) {
                    nextStep();
                  }
                };
                if (event.code == 0) {
                  var rs = [];
                  var loop = function (el) {
                    var some = rs.some(function (itm) {
                      return itm.label == el.label;
                    });
                    if (!some) {
                      rs.push(el)
                    }
                  }
                  for (var i in event.data) {
                    loop(event.data[i]);
                  }
                  loadArray[inx] = {
                    path: loadType,
                    status: "finished",
                    data: rs
                  };
                  checkFinished();
                }
              };
              dictionaryService.getDictValues(loadType, getEnergyType);
            };
            for (var i in loadArray) {
              loop(i, loadArray[i])
            }
          };
          var renderData3D = function () {
            var aggr_type;
            var dictionaryService = services.dictionaryService;
            var loadArray = ["energyType", "industryShortType"];
            var nextStep = function () {
              var loopNodes = function (node) {
                var loopKpis = function (inx, kpi) {
                  var loopAggrType = function (atype) {
                    var loopInstance = function (ins1) {
                      var loopInstance2 = function (ins2) {
                        var range;
                        if (ranges) {
                          range = ranges[inx];
                        }
                        var calcRandom = function (range) {
                          if (range) {
                            var max = range[1];
                            var min = range[0];
                            var ran = (max - min);
                            return Math.round((min + Math.random() * ran) * 10) / 10;
                          } else {
                            return Math.round(Math.random() * 100);
                          }
                        };
                        var val = calcRandom(range);
                        var newTime = timeStamp;
                        var sampleData = {
                          "agentId": "0",
                          "aggregatePeriod": null,
                          "aggregateStatus": null,
                          "aggregateType": atype.valueCode,
                          "arisingTime": timeStampToStr(newTime),
                          "compressCount": 0,
                          "computeTaskId": 0,
                          "dataSerialNumber": 0,
                          "dataTime": null,
                          "insertTime": timeStampToStr(newTime),
                          "kpiCode": kpi.id,
                          "nodeId": node.id,
                          "notes": null,
                          "numberValue": val,
                          "instance": ins2.label + "," + ins1.label,
                          "quality": 0,
                          "resourceId": 0,
                          "stringValue": null,
                          "value": val,
                          "valueStr": val + ""
                        };
                        result.push(sampleData);
                      };
                      for (var i in loadArray[1].data) {
                        loopInstance2(loadArray[1].data[i]);
                      }
                    };
                    for (var i in loadArray[0].data) {
                      loopInstance(loadArray[0].data[i]);
                    }
                  };
                  for (var i in aggr_type) {
                    loopAggrType(aggr_type[i])
                  }
                };
                for (var i in kpisDes) {
                  loopKpis(i, kpisDes[i])
                }
              };
              for (var i in nodesDes) {
                loopNodes(nodesDes[i])
              }
              if (typeof callback == "function") {
                callback(result);
              }
            };
            var loop = function (inx, loadType) {
              var getEnergyType = function (event) {
                var checkFinished = function () {
                  var every = loadArray.every(function (elem) {
                    return typeof elem == "object"
                  });
                  if (every) {
                    nextStep();
                  }
                };
                if (event.code == 0) {
                  var rs = [];
                  var loop = function (el) {
                    var some = rs.some(function (itm) {
                      return itm.label == el.label;
                    });
                    if (!some) {
                      rs.push(el)
                    }
                  }
                  for (var i in event.data) {
                    loop(event.data[i]);
                  }
                  loadArray[inx] = {
                    path: loadType,
                    status: "finished",
                    data: rs
                  };
                  checkFinished();
                }
              };
              dictionaryService.getDictValues(loadType, getEnergyType);
            };
            for (var i in loadArray) {
              loop(i, loadArray[i])
            }


            dictionaryService.getDictValues("aggregateType", function (event) {
              if (event.code == 0) {
                aggr_type = event.data.slice(0, 2);
              }
            });
          };
          if (type == "time") {
            renderData();
          } else if (type == "ci") {
            renderData(0);
          } else if (type == "ci_2d") {
            renderData2D();
          } else if (type == "ci_3d") {
            renderData3D();
          }
          return result;
        };
        cmethod.prototype.getModels = function (callback) {
          resourceUIService.getModels(function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getModelByIds = function (ids, callback) {
          resourceUIService.getModelByIds(ids, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getKpisByModelId = function (modelId, callback) {
          if (modelId) {
            resourceUIService.getKpisByModelId(modelId, function (event) {
              if (event.code == 0) {
                for (var i in event.data) {
                  var kpiId = event.data[i].id;
                  if (!cmethod.kpiDic[kpiId]) {
                    cmethod.kpiDic[kpiId] = event.data[i].label;
                  }
                }
                callback(event.data);
              }
            })
          } else {
            callback([]);
          }
        };
        /**
         * 根据不同的modelId获得资源
         * 300域 301客户 302项目
         * @param {Object} modelId
         * @param {Object} callback
         */
        cmethod.prototype.getResourceByModelId = function (modelId, callback, extendstr, noCache) {
          var fn = cmethod.prototype.getResourceByModelId;
          fn.model = fn.model || {};
          fn.model[modelId] = fn.model[modelId] || {};
          var md = fn.model[modelId];
          if (md.cached && !noCache) {
            callback(clone(md.cached));
          } else {
            md.promise = md.promise || new Promise(function (resolve) {
              resourceUIService.getResourceByModelId(modelId, function (event) {
                if (event.code == 0) {
                  resolve(event.data);
                }
              });
            }, extendstr);
            md.promise.then(function (resource) {
              md.cached = resource;
              callback(clone(resource));
            })
          }
        };
        cmethod.prototype.getDomainsByFilter = function (filter, callback) {
          resourceUIService.getDomainsByFilter(filter, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getDomainsByFilters = function (filter, callback) {
          resourceUIService.getDomainsByFilters(filter, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getDeviceDiagnosticResumeAndAlertStatis = function (params, callback) {
          ticketTaskService.getDeviceDiagnosticResumeAndAlertStatis(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.getDeviceDiagnosticResumeAndAlertBypage = function (params, pageRequest, callback) {
          ticketTaskService.getDeviceDiagnosticResumeAndAlertBypage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };

        cmethod.prototype.queryDomainsByEnterpriseId = function (filter, callback) {
          energyConsumeUIService.queryDomainsByEnterpriseId(filter, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getProjectsByDomains = function (domains, callback) {
          var param = {};
          if (domains) {
            param.domainPath = domains;
          }
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getProjectsByDomains = function (domains, callback) {
          var param = {};
          if (domains) {
            param.domainPath = domains;
          }
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.getCurrentProjectsFromDomain = function (callback) {
          var cur = this;
          var domains = userLoginUIService.user.domains;
          resourceUIService.getDomainsByFilter({
            domains: userLoginUIService.user.domains,
            modelId: 302
          }, function (event) {
            if (event.code == 0) {
              callback(event.data);
            }
          })
        };
        cmethod.prototype.findProjectById = function (id, callback) {
          projectUIService.findProjectById(id, function (event) {
            if (event.code == 0) {
              if (callback) {
                callback(event.data);
              }
            }
          })
        };
        cmethod.prototype.getCurrentProjectsByCustom = function (callback) {
          var cur = this;
          //如果没有subDomain的话，那就不是客户用户，没有customerId的
          if (!userLoginUIService.user.subDomain) {
            callback([]);
            return;
          }
          var arr = userLoginUIService.user.subDomain.split("/");
          var customerId = arr[arr.length - 2];
          var param = {
            customerId: customerId
          }
          projectUIService.findProjectsByCondition(param, function (event) {
            if (event.code == 0) {
              if (callback) {
                callback(event.data);
              }
            }
          })
        };
        cmethod.prototype.getViewByProjectId = function (resId, callback) {
          var getRootPath = function (domainPath) {
            var arr = domainPath.split("/");
            return "/" + arr[1] + "/" + arr[2] + "/";
          }
          var rootPath = getRootPath(userLoginUIService.user.domainPath);
          viewFlexService.getViewsOnlyPublishedByTypeAndDomainPath('configure', rootPath, function (event) {
            var views = event.data;
            var find = views.find(function (view) {
              if (view.template) {
                if (view.template.resourceType == "project") {
                  if (view.template.resourceId == resId) {
                    return true;
                  }
                }
              }
              return false;
            });
            if (find) {
              viewFlexService.getViewById(find.viewId, function (event) {
                if (event.code == 0) {
                  callback(event.data);
                }
              })
            } else {
              callback(null);
            }
          })
        };
        cmethod.prototype.getAllMyViews = function (callback) {
          viewFlexService.getAllMyViews(function (event) {
            if (event.code == 0) {
              var views = event.data;
              callback(views);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.deleteView = function (viewId, callback) {
          viewFlexService.deleteView(viewId, function (event) {
            if (event.code == 0) {
              var views = event.data;
              callback(views);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.getDefaultView = function (modelId, callback) {
          viewFlexService.getDefaultView(modelId, function (event) {
            if (event.code == 0) {
              var views = event.data;
              callback(views);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.getManagedViewsByTypeAndRole = function (type, callback) {
          viewFlexService.getManagedViewsByTypeAndRole(type, function (event) {
            if (event.code == 0) {
              var views = event.data;
              callback(views);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.getViewsOnlyPublishedByTypeAndDomainPath = function (type, rootPath, callback) {
          viewFlexService.getViewsOnlyPublishedByTypeAndDomainPath(type, rootPath, function (event) {
            if (event.code == 0) {
              var views = event.data;
              callback(views);
            } else {
              callback(null);
            }
          });
        };
        _proto_.getRoot = function (callback) {
          psTreeData.getRoot().then(callback);
        }
        cmethod.prototype.getViewByModelId = function (resId, callback) {
          var getRootPath = function (domainPath) {
            var arr = domainPath.split("/");
            return "/" + arr[1] + "/" + arr[2] + "/";
          }
          var rootPath = getRootPath(userLoginUIService.user.domainPath);
          viewFlexService.getViewsOnlyPublishedByTypeAndDomainPath('configure', rootPath, function (event) {
            var views = event.data;
            var find = views.find(function (view) {
              if (view.template) {
                if (view.template.resourceType == "device") {
                  if (view.template.resourceId == resId) {
                    return true;
                  }
                }
              }
              return false;
            });
            if (find) {
              viewFlexService.getViewById(find.viewId, function (event) {
                if (event.code == 0) {
                  callback(event.data);
                }
              })
            } else {
              callback(null);
            }
          })
        };
        cmethod.prototype.getSimulateList = function (data, callback) {
          customMethodService.getSimulateList(data, callback);
        };
        var uuid = Math.uuid();
        cmethod.prototype.webSocket = function (nodeIds, kpiCodes, callback, fixedid) {
          if (nodeIds.length == 0 || kpiCodes.length == 0) return;
          if (fixedid) {
            uuid = fixedid;
          } else {
            uuid = Math.uuid();
          }
          SwSocket.unregister(uuid);
          var paramSocket = {
            ciid: nodeIds.toString(),
            kpi: kpiCodes.toString()
          };
          var operation = "register";
          SwSocket.register(uuid, operation, function (event) {
            if (typeof callback == "function") {
              callback(event.data);
            }
          });
          SwSocket.send(uuid, operation, 'kpi', paramSocket);
        };
        cmethod.prototype.getKpiFromViewByTypeAndRole = function (viewType, resourceType, resourceId, callback, socketCallback) {
          var kpiCodes = [];
          var nodeIds = [Number(this.getParameter("resourceId"))];
          var valueDic = {};
          var uuid = Math.uuid();
          this.getViewsByOnlyRole(viewType, resourceType, resourceId, function (view) {
            var json = JSON.parse(view.content);
            json.cells.sort(function (a, b) {
              return parseInt(a.z) - parseInt(b.z);
            });
            json.cells.forEach(function (cell) {
              if (cell.type == "basic.Rect" && cell.kpiId && cell.kpiId.length > 8 && cell.nodeId && cell.nodeId.length > 8) {
                var kpiId;
                if (typeof cell.kpiId == "string" && cell.kpiId.search('number:') > -1) {
                  kpiId = Number(cell.kpiId.split(":")[1]);
                } else {
                  kpiId = Number(cell.kpiId);
                }
                var modelId
                if (typeof cell.modelId == "string" && cell.modelId.search('number:') > -1) {
                  modelId = Number(cell.modelId.split(":")[1]);
                } else {
                  modelId = Number(cell.modelId);
                }
                var kpiDef = {};
                if (resourceUIService.rootModelsDic && resourceUIService.rootModelsDic[modelId]) {
                  if (resourceUIService.rootModelsDic[modelId].kpiDic && resourceUIService.rootModelsDic[modelId].kpiDic[kpiId]) {
                    kpiDef = resourceUIService.rootModelsDic[modelId].kpiDic[kpiId];
                  }
                }
                kpiCodes.push(kpiId);
                valueDic[kpiId] = {
                  kpiName: cell.attrs.text.text ? cell.attrs.text.text : kpiDef.label,
                  kpiUnit: cell.unitType == "number:1" ? (kpiDef.unitLabel ? kpiDef.unitLabel : "") : "",
                  value: "无",
                  kpiCode: kpiDef.id,
                  rangeObj: kpiDef.rangeObj
                }
              }
            });
            var kpiQueryModel = {
              category: 'ci',
              isRealTimeData: true,
              nodeIds: nodeIds,
              kpiCodes: kpiCodes,
              startTime: null,
              endTime: null,
              timeRange: "",
              statisticType: "psiot",
              condList: []
            };
            var param = ["kpi", kpiQueryModel];
            kpiDataService.getValueList(param, function (event) {
              if (event.code == 0) {
                event.data.forEach(function (kpi) {
                  valueDic[kpi.kpiCode].value = kpi.value;
                  if (valueDic[kpi.kpiCode].rangeObj)
                    valueDic[kpi.kpiCode].value = valueDic[kpi.kpiCode].rangeObj[valueDic[kpi.kpiCode].value];
                });
                var returnAry = [];
                for (var key in valueDic) {
                  returnAry.push(valueDic[key])
                }
                callback(returnAry);
              }
            });
            var paramSocket = {
              ciid: nodeIds.toString(),
              kpi: kpiCodes.toString()
            };
            SwSocket.unregister(uuid);
            var operation = "register";
            SwSocket.register(uuid, operation, function (event) {
              if (typeof socketCallback == "function") {
                if (valueDic[event.data.kpiCode].rangeObj)
                  event.data.value = valueDic[event.data.kpiCode].rangeObj[event.data.value];
                socketCallback(event.data);
              }
            });
            SwSocket.send(uuid, operation, 'kpi', paramSocket);
          });
        };
        cmethod.prototype.filterEnterprises = function (callback) {
          var domainPath = userLoginUIService.user.domains;
          energyConsumeUIService.findEnterpriseInfoByDomainPath(domainPath, function (returnObj) {
            if (returnObj.code == 0) {
              returnObj.data.valueCode = returnObj.data.industryType;
              cmethod.prototype.queryEnterpriseListByHis(returnObj.data, function (eventData) {
                callback(eventData);
              });
            }
          });
        };
        cmethod.prototype.queryEnterpriseListByHis = function (shortName, callback) {
          if (!shortName) {
            growl.warning("请选择行业");
            return;
          }
          var industryShortType = shortName.valueCode;
          //获取所有企业
          var queryEnterprises = [];
          (function queryAllEnterprises() {
            energyConsumeUIService.findEnterpriseInfos(function (returnObj) {
              if (returnObj.code == 0) {
                returnObj.data.forEach(function (item) {
                  if (item.industryType == industryShortType) {
                    item.label = item.name;
                    queryEnterprises.push(item);
                  }
                })
                callback(queryEnterprises);
              }
            });
          })();
        };
        cmethod.prototype.queryDomains = function (filter, callback) {
          var nodeIdAry = [];
          var index = 0;
          var queryDomainsByEnterpriseId = function (enterpriseId) {
            energyConsumeUIService.queryDomainsByEnterpriseId(enterpriseId, function (returnObj) {
              if (returnObj.code == 0) {
                index++;
                var ary = returnObj.data.filter(function (item) {
                  return item.modelDefinitionId == filter.modelId;
                });
                ary.forEach(function (item) {
                  nodeIdAry.push(item.id);
                });
                if (index == filter.enterpriseList.length) {
                  callback(nodeIdAry);
                  index = 0;
                }
              }
            })
          };
          filter.enterpriseList.forEach(function (item) {
            queryDomainsByEnterpriseId(item);
          });
        };
        cmethod.prototype.navigateToTracker = function (ticketNo) {
          var cur = this;
          cur.refresh("prod_tracker", {
            ticketNo: ticketNo
          });
        }
        cmethod.prototype.getDirectivesByTypeAndRole = function (viewType, resourceType, resourceId, callback) {
          var ids = {};
          var cur = this;
          cur.getManagedViewsByTypeAndRole(viewType, resourceType, resourceId, function (view) {
            var json = JSON.parse(view.content);
            json.cells.forEach(function (cell) {
              if (cell.directiveIds) {
                cell.directiveIds.forEach(function (dirctiveId) {
                  if (typeof dirctiveId == "string")
                    ids[dirctiveId.split(":")[1]] = true;
                  else
                    ids[dirctiveId] = true;
                })
              }
            });
            cur.getDirectivesByModelId(resourceId, function (event) {
              var resources = [];
              event.forEach(function (dir) {
                if (ids[dir.id]) resources.push(dir);
              })
              resources.sort(doubleCompare(["values", "index"], "desc"));
              callback(resources);
            });
          });
        };
        cmethod.prototype.getDirectivesByTypeAndRoleAndValue = function (viewType, resourceType, modelId, callback) {
          var ids = {};
          var resourceId = this.getParameter("resourceId");
          var cur = this;
          cur.getViewsByOnlyRole(viewType, resourceType, modelId, function (view) {
            var json = JSON.parse(view.content);
            json.cells.forEach(function (cell) {
              if (cell.directiveIds) {
                cell.directiveIds.forEach(function (dirctiveId) {
                  if (typeof dirctiveId == "string")
                    ids[dirctiveId.split(":")[1]] = true;
                  else
                    ids[dirctiveId] = true;
                })
              }
            });
            cur.getDirectivesByModelId(modelId, function (event) {
              var directives = [];
              event.forEach(function (dir) {
                if (ids[dir.id]) directives.push(dir);
              })
              directives.sort(doubleCompare(["values", "index"], "desc"));
              var kpis = directives.map(function (elem) {
                if (elem.params) {
                  if (elem.params[0]) {
                    return elem.params[0].id;
                  } else {
                    return 0;
                  }
                } else {
                  return 0;
                }
              });
              var ci = [parseInt(resourceId)];
              cur.getKpiValueCi(ci, kpis, function (event) {
                var loop = function (item) {
                  var directive = directives.find(function (elem) {
                    if (elem.params[0]) {
                      return elem.params[0].id == item.kpiCode;
                    } else {
                      return false;
                    }
                  });
                  if (directive) {
                    directive.value = item.value;
                  }
                };
                for (var i in event) {
                  loop(event[i]);
                }
                callback(directives);
              });

            });
          });
        };
        cmethod.prototype.getDirectivesByModelId = function (modelId, callback) {
          if (modelId) {
            resourceUIService.getDirectivesByModelId(modelId, function (event) {
              if (event.code == 0) {
                callback(event.data);
              }
            })
          } else {
            callback([]);
          }
        };
        cmethod.prototype.getRootTarget = function () {
          return rootTarget;
        };
        cmethod.prototype.queryBenchmarkByShortName = function (shortName, callback) {
          var industryDic = {};
          var energyDic = {};
          var industryShortType = [];
          var energyType = [];
          dictionaryService.getAllDicts(function (returnObj) {
            if (returnObj.code == 0) {
              returnObj.data.forEach(function (item) {
                if (item.dictCode == 'industryShortType') {
                  industryShortType.push(item);
                } else if (item.dictCode == 'energyType') {
                  energyType.push(item);
                }
              });
              industryShortType.forEach(function (item) {
                industryDic[item.label] = item;
              });
              energyType.forEach(function (item) {
                energyDic[item.label] = item;
              });
              callBack();
            }
          });

          function callBack() {
            var returnAry = [];
            var param = [
              "kpi", {
                "isRealTimeData": true,
                "nodeIds": [userLoginUIService.user.domainID],
                "kpiCodes": [
                  3327
                ],
                "granularityUnit": 'MONTH',
                "aggregateType": ["VALENTWEIGHT"],
                "timeRange": "",
                "statisticType": "psiot",
                "includeInstance": true,
                "condList": [],
                "timePeriod": 1,
                "dataType": 1
              }
            ];
            kpiDataService.getValueList(param, function (returnObj) {
              if (returnObj.code == 0) {
                returnObj.data.forEach(function (item) {
                  var instanceAry = item.instance.split(',');
                  item.instanceName = industryDic[instanceAry[0]].param;
                  item.instanceCode = industryDic[instanceAry[0]].valueCode;
                  item.energyName = instanceAry[1];
                  item.energyCode = energyDic[instanceAry[1]].valueCode;
                  if (shortName.label == instanceAry[0]) {
                    returnAry.push(item);
                  }

                });
                callback(returnAry);
              }
            })
          }
        };

        cmethod.prototype.getTaskBySimpleConditionAndPage = function (params, callback, pages) {
          var pageRequest = { "start": 0, "length": 1000000, "sort": "standardNo", "sortType": "desc" };
          if (pages) {
            pageRequest = pages;
          }
          maintenanceTaskUIService.getTaskBySimpleConditionAndPage(params, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        //新增的1
        cmethod.prototype.getDeviceFaultInfoList = function (params, callback) {
          //var pageRequest = {"start":0,"length":1000000,"asc":"modifyTime","sortType":"desc"};
          //if (pages) {
          //  pageRequest = pages;
          //}
          deviceResumeUIService.getDeviceFaultInfoList(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        cmethod.prototype.Info = Info.get;
        //新增的2
        cmethod.prototype.saveDeviceFaultInfo = function (params, callback) {
          //var pageRequest = {"start":0,"length":1000000,"asc":"modifyTime","sortType":"desc"};
          //if (pages) {
          //  pageRequest = pages;
          //}
          deviceResumeUIService.saveDeviceFaultInfo(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        //新增的3
        cmethod.prototype.deleteDeviceFaultInfoById = function (id, callback) {
          deviceResumeUIService.deleteDeviceFaultInfoById(id, function (event) {
            callback(event);
          });
        };
        //新增的书1
        cmethod.prototype.getDeviceFaultBookList = function (params, callback) {
          //var pageRequest = {"start":0,"length":1000000,"asc":"modifyTime","sortType":"desc"};
          //if (pages) {
          //  pageRequest = pages;
          //}
          deviceResumeUIService.getDeviceFaultBookList(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        //新增的书2
        cmethod.prototype.saveDeviceFaultBook = function (params, callback) {
          //var pageRequest = {"start":0,"length":1000000,"asc":"modifyTime","sortType":"desc"};
          //if (pages) {
          //  pageRequest = pages;
          //}
          deviceResumeUIService.saveDeviceFaultBook(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        //新增的书3
        cmethod.prototype.deleteDeviceFaultBookById = function (id, callback) {
          deviceResumeUIService.deleteDeviceFaultBookById(id, function (event) {
            callback(event);
          });
        };

        //告警统计
        cmethod.prototype.getDeviceDiagnosticResumeListBypage = function (params, pageRequest, callback) {
          deviceResumeUIService.getDeviceDiagnosticResumeListBypage(params, pageRequest, function (event) {
            callback(event);
          });
        };


        // 宝钢的下载表格
        cmethod.prototype.exportBGExcel = function (service, method, format, params, pageRequset, callback) {
          deviceResumeUIService.exportBGExcel(service, method, format, params, pageRequset, function (event) {
            callback(event);
          });
        };
        // 宝钢的下载表格
        cmethod.prototype.exportHBExcel = function (service, method, format, params, callback) {
          deviceResumeUIService.exportHBExcel(service, method, format, params, function (event) {
            callback(event);
          });
        };

        //新增的备件更换和服役
        cmethod.prototype.getRollerPartActionLogByCondition = function (params, callback) {
          rollerPartUIService.getRollerPartActionLogByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        //新增的查询所有辊道
        cmethod.prototype.getRollerPartByCondition = function (params, callback) {
          rollerPartUIService.getRollerPartByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 发起辊道备修委托
        cmethod.prototype.rollerTrust = function (rollerPartList, paramValues, callback) {
          rollerPartUIService.rollerTrust(rollerPartList, paramValues, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 卷筒备修委托-备件更换
        cmethod.prototype.rollerReelTrustReplace = function (ticketNo, actionLog, taskValues, callback) {
          rollerPartUIService.rollerReelTrustReplace(ticketNo, actionLog, taskValues, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 沉降系统
        cmethod.prototype.getFactorySettlementByConditonAndPage = function (condtion, pageRequest, callback) {
          rollerPartUIService.getFactorySettlementByConditonAndPage(condtion, pageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 卷筒备修委托
        cmethod.prototype.rollerReelTrust = function (rollerPartList, message, paramValues, callback) {
          rollerPartUIService.rollerReelTrust(rollerPartList, message, paramValues, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 发起 点检计划任务更改-批量点检
        cmethod.prototype.pointCheckBatchDeal = function (ticketTaskList, callback) {
          rollerPartUIService.pointCheckBatchDeal(ticketTaskList, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 生成额外计划
        cmethod.prototype.createTempPointCheckTask = function (srcTaskList, changeDate, changeReason, callback) {
          rollerPartUIService.createTempPointCheckTask(srcTaskList, changeDate, changeReason, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 计划日期调整
        cmethod.prototype.changeTaskPlanTime = function (srcTaskList, changeDate, changeReason, callback) {
          rollerPartUIService.changeTaskPlanTime(srcTaskList, changeDate, changeReason, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 点检任务统计
        cmethod.prototype.getPointCheckStatis = function (ticketTaskQueryModel, callback) {
          rollerPartUIService.getPointCheckStatis(ticketTaskQueryModel, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 更换辊道备修委托
        cmethod.prototype.getRollerPartByCondition = function (params, callback) {
          rollerPartUIService.getRollerPartByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 更换辊道
        cmethod.prototype.rollerOnBoard = function (params, callback) {
          rollerPartUIService.rollerOnBoard(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 总包诊断工程师提交报告:
        cmethod.prototype.createCycleReport = function (params, callback) {
          rollerPartUIService.createCycleReport(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 总包诊断工程师查询kpi:
        cmethod.prototype.getCycleKpiList = function (params, callback) {
          rollerPartUIService.getCycleKpiList(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 诊断分析工程师发起报告流程:
        cmethod.prototype.sendCycleReportByTicket = function (params, callback) {
          rollerPartUIService.sendCycleReportByTicket(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 周期报告查询（真分页接口）
        cmethod.prototype.getDeviceCycleReportReumeListByPage = function (params, pageRequest, callback) {
          deviceResumeUIService.getDeviceCycleReportReumeListByPage(params, pageRequest, function (event) {
            callback(event);
          });
        };


        // 查询日期调整
        cmethod.prototype.getDatePickerListByCondition = function (params, pageSize, callback) {
          rollerPartUIService.getDatePickerListByCondition(params, pageSize, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        //  计划预设定时期查询
        cmethod.prototype.getPlanTaskTime = function (params, callback) {
          rollerPartUIService.getPlanTaskTime(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 计划预设定时期设置
        cmethod.prototype.setPlanTaskTime = function (params, callback) {
          rollerPartUIService.setPlanTaskTime(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 工作日调整
        cmethod.prototype.changeDatePickerBatch = function (srcDatePickerList, targetDate, changeReason, callback) {
          rollerPartUIService.changeDatePickerBatch(srcDatePickerList, targetDate, changeReason, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 模型分析保存接口
        cmethod.prototype.saveDeviceWorkInfoList = function (deviceId, deviceWorkInfoList, callback) {
          deviceResumeUIService.saveDeviceWorkInfoList(deviceId, deviceWorkInfoList, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 模型分析查询接口
        cmethod.prototype.getWorkInfoByDeviceId = function (deviceId, callback) {
          deviceResumeUIService.getWorkInfoByDeviceId(deviceId, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 查询设备最新工况
        cmethod.prototype.getDeviceConditionStatus = function (deviceId, callback) {
          deviceResumeUIService.getDeviceConditionStatus(deviceId, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 查询最新模型分析结果
        cmethod.prototype.getModelAnalysisResultByConditionAndPage = function (params, PageRequest, callback) {
          deviceResumeUIService.getModelAnalysisResultByConditionAndPage(params, PageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        // 日报下载
        cmethod.prototype.getDailyReportByCondtionAndPage = function (params, PageRequest, callback) {
          rollerPartUIService.getDailyReportByCondtionAndPage(params, PageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 故障模型-查询
        cmethod.prototype.getFaultDiagnosisModelByConditionAndPage = function (params, PageRequest, callback) {
          rollerPartUIService.getFaultDiagnosisModelByConditionAndPage(params, PageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 故障模型-新增/编辑
        cmethod.prototype.addFaultDiagnosisModel = function (params, callback) {
          rollerPartUIService.addFaultDiagnosisModel(params, function (event) {
            if (event.code == 0) {
              callback(event);
            } else {
              callback(event);
            }
          });
        };
        // 故障模型-删除
        cmethod.prototype.deleteFaultDiagnosisModel = function (params, callback) {
          rollerPartUIService.deleteFaultDiagnosisModel(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 裂化模型-速率-查询
        cmethod.prototype.getCrackRateModelByConditionAndPage = function (params, PageRequest, callback) {
          rollerPartUIService.getCrackRateModelByConditionAndPage(params, PageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 裂化模型-速率-新增/编辑
        cmethod.prototype.addCrackRateModel = function (params, callback) {
          rollerPartUIService.addCrackRateModel(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 裂化模型-速率-删除
        cmethod.prototype.deleteFaultCrackRateModel = function (params, callback) {
          rollerPartUIService.deleteFaultCrackRateModel(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 裂化模型-温差-查询
        cmethod.prototype.getCrackDiffModelByConditionAndPage = function (params, PageRequest, callback) {
          rollerPartUIService.getCrackDiffModelByConditionAndPage(params, PageRequest, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 裂化模型-温差-新增/编辑
        cmethod.prototype.addCrackDiffModel = function (params, callback) {
          rollerPartUIService.addCrackDiffModel(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 裂化模型-温差-删除
        cmethod.prototype.deleteCrackDiffModel = function (params, callback) {
          rollerPartUIService.deleteCrackDiffModel(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        // 查找模型分析对应的字段
        cmethod.prototype.getDiagnosisModel = function (modelId, callback) {
          rollerPartUIService.getDiagnosisModel(modelId, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };



        // 发起模型分析
        cmethod.prototype.sendModelAnalysis = function (deviceId, analysisTime, callback) {
          deviceResumeUIService.sendModelAnalysis(deviceId, analysisTime, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };

        // 训练数据同步
        cmethod.prototype.sendModelAnalysisTrain = function (deviceId, trainType, startTime, endTim, callback) {
          deviceResumeUIService.sendModelAnalysisTrain(deviceId, trainType, startTime, endTim, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        cmethod.prototype.getTaskByCondition = function (params, callback) {
          maintenanceTaskUIService.getTaskByCondition(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.addPointCheckStanard = function (params, callback) {
          maintenanceTaskUIService.addPointCheckStanard(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.addMaintainStandardTask = function (params, callback) {
          maintenanceTaskUIService.addMaintainStandardTask(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.addOfflineStandard = function (params, callback) {
          maintenanceTaskUIService.addOfflineStandard(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.deleteTask = function (id, callback) {
          maintenanceTaskUIService.deleteTask(id, function (event) {
            callback(event);
          });
        };
        cmethod.prototype.deleteMaintainStandardTask = function (id, callback) {
          maintenanceTaskUIService.deleteMaintainStandardTask(id, function (event) {
            callback(event);
          });
        };

        cmethod.prototype.addPreparedMaintainTrust = function (id, callback) {
          maintenanceTaskUIService.addPreparedMaintainTrust(id, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };


        cmethod.prototype.deleteSparePart = function (id, callback) {
          sparePartUIService.deleteSparePart(id, function (event) {
            callback(event);
          });
        };
        cmethod.prototype.saveSparePart = function (params, callback) {
          sparePartUIService.saveSparePart(params, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        cmethod.prototype.getSparePartByDeviceId = function (id, callback) {
          sparePartUIService.getSparePartByDeviceId(id, function (event) {
            if (event.code == 0) {
              callback(event.data);
            } else {
              callback(null);
            }
          });
        };
        $getCurrentResource(function (res) {
          setValue("global/resource", res);
        });
        return new cmethod(mydata);
      }
      return cms;
    }
  ]);
  return services;
});