/**
 * Created by leonlin on 16/11/3.
 */
define([], function () {
  return function (data) {
    var elemData = data, newDimension = {},
      uuid, cellDiction = {}, graph,
      tostring = Object.prototype.toString,
      extendTools = [], extendTools = {},
      registry = {};
    var self = elemData.element;
    var viewId = self.viewId;
    var all_resources = [];
    var all_kpis = [];
    var viewFlexService = elemData.viewFlexService;
    var serviceProxy = elemData.serviceProxy;
    var userLoginUIService = elemData.userLoginUIService;
    var element = elemData.element;
    var commonMethod = element.constructor;
    var q = elemData.q;
    var global = elemData.global;
    var SwSocket = elemData.SwSocket;
    var parentheight, parentwidth;
    var json = element.JSON;
    var taDom;
    var completeCallback = data.complete;
    var svgId = "svg_" + Math.uuid();
    var defer = elemData.defer;
    var traverseRow = elemData.traverseRow;
    var traverseCol = elemData.traverseCol;
    var timeout = elemData.timeout;
    var route = elemData.route;
    var previewMode = elemData.previewMode;
    var openAngles = {};
    var events = {};
    var expression;
    var mm = defer.id;
    var factory = JSON.parse(JSON.stringify(serviceProxy));
    if (elemData == undefined) {
      throw new Error("undefined");
    }
    factory.origin = factory.origin + "/";
    function isObject(obj){
      return tostring.call(obj) == "[object Object]";
    }
    function isNull(obj){
      return tostring.call(obj) == "[object Null]";
    }
    function isUndefined(obj){
      return tostring.call(obj) == "[object Undefined]";
    }
    function isArray(obj){
      return tostring.call(obj) == "[object Array]";
    }
    function isNumber(obj){
      /** 判断数字为有效数字不能为NAN */
      return tostring.call(obj) == "[object Number]" && obj === obj;
    }
    function isFunction(obj){
      return tostring.call(obj) == "[object Function]";
    }
    function isString(obj){
      return tostring.call(obj) == "[object String]";
    }
    function isNaN(num){
      return num !== num;
    }
    function bind(target, fn){
      return function() {
        fn.apply(target, arguments);
      }
    }
    function find(arr, callback){
      var i;
      arr = arr || [];
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i)){
          return arr[i];
        }
      }
    }
    function filter(arr, callback){
      var i, rs = [];
      arr = arr || [];
      for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i)){
          rs.push(arr[i]);
        }
      }
      return rs;
    }
    function clone(obj){
      return JSON.parse(JSON.stringify(obj));
    }
    function extend(a, b){
      for(var i in b){
        a[i] = b[i]
      }
    }
    function each(arr, callback){
      var i;
      arr = arr || [];
      for(i=0; i<arr.length; i++){
        callback && callback(arr[i], i);
      }
    }
    function eachProp(obj, callback){
      var i;
      obj = obj || {};
      for(var i in obj){
        callback && callback(obj[i], i);
      }
    }
    function addCss(dom, css){
      eachProp(css, function(elem, attr){
        dom.css(attr, elem);
      })
    }
    function getId(elem){
      var id;
      isObject(elem) && (id = elem.id);
      isString(elem) && (id = elem);
      isNumber(elem) && (id = elem);
      return id;
    }
    function getResourceById(id, callback){
      id && element.getResourceById(id, callback) || callback(null);
    }
    function getKpisByModelId(id, callback){
      id && element.getKpisByModelId(id, callback) || callback([]);
    }
    $$.runExpression(element.$attr("advance/expression"), function (funRes) {
      if (funRes.code == "0") {
        var fnResult = funRes.data;
        expression = fnResult;
      } else {
        ;
      }
    });
    var resourceUIService = elemData.resourceUIService;
    var max_height, max_width;
    var topo = $("<div></div>");
    var wrap = $("<div></div>");
    topo.css("position", "relative");
    var resourceUIService = elemData.resourceUIService;
    var serviceCenterService = elemData.serviceCenterService;
    var kpiDataService = elemData.kpiDataService;
    if (typeof element.setSelfDom == "function") {
      element.setSelfDom(topo);
    }
    element.$on = function (eventName, callback) {
      events[eventName] = callback;
    };
    element.off("$loadCiKpiComplete");
    element.off("$renderGraphComplete");
    topo.append(wrap);
    self.error = function (str) {
      wrap.children().remove();
      var warning = $("<p>" + str + "</p>");
      warning.css({
        "font-size": "12px",
        "min-height": "300px",
        "text-align": "center",
        "line-height": "300px"
      });
      wrap.append(warning);
    };
    self.setResources = function (resources) {
      self.composoryRes = resources;
      Object.defineProperty(self, "composoryRes", {
        enumerable: false
      });
    };
    self.createDeviceDropList = function (data, pos, config) {
      var p = newDimension.persentage || 1;
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
      hitArea.css("top", (pos.y / p - (config.y || 30)) + "px");
      hitArea.css("left", (pos.x / p - (config.x || 50)) + "px");
      hitArea.css("background-color", "rgba(0,0,0,0)");
      hitArea.on("mouseleave", function (event) {
        $("#devicelistscroll").remove();
      });
      titleArea.on("click", function (event) {
        titleClickFn();
      });
      var createDom = function (item) {
        var wrap = $("<div></div>");
        var label = $("<span></span>");
        var status = $("<div></div>");
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
        item.$on("statusChanged", function (node) {
          status.css("background-color", self.getAlertColor(item.status));
        });
        return wrap;
      };
      for (var i in data) {
        popup.append(createDom(data[i]));
      }
      hitArea.append(titleArea);
      hitArea.append(popup);
      topo.prepend(hitArea);
    };
    //150 - 235
    self.createAttrDisp = function (t, data, pos, callback, planeMode) {
      var popup, body, title, wrap;
      var orderKey = ['震动','冲击',"速度有效值","速度有效值","冲击平均值","冲击平均值",'速度','温度','电压','电流'];
      function findIndex(arr, callback){
        var i, find;
        for(i = 0; i< arr.length; i++){
          find = callback(arr[i], i);
          if(find){
            return i;
          }
        }
      }
      function attrDisp() {
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
            ka = findIndex(orderKey, function(d){
              return a.label.indexOf(d) != -1;
            }) || a.label;
            kb = findIndex(orderKey, function(d){
              return b.label.indexOf(d) != -1;
            }) || b.label;
            return ka - kb;
          });
          body.css("max-height", "50px");
        }
        body.css("overflow-y", "auto");
        body.css("overflow", "auto");
        title.css("text-align", "center");
        title.css("font-weight", "bold");
        title.css("padding", "3px");
        title.css("color", "#fff");
        title.css("background-color", "#295375");
        title.text(t);
//      popup.css("top", pos.y / persentage + "px");
//      popup.css("left", pos.x / persentage + "px");
        popup.css("top", pos.y + "px");
        popup.css("left", pos.x + "px");
        popup.append(title);
        var createDom = function (item) {
          var tr = $("<tr></tr>");
          var td1 = $("<td></td>");
          var td2 = $("<td></td>");
          var td3 = $("<td></td>");
          var td4 = $("<td></td>");
          var time = useMomentFormat(item.arisingTime, "yyyy-MM-dd hh:mm:ss");
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
          if(!planeMode){
            button.popover({
              placement: "right",
              trigger: "manual",
              title: "上报时间",
              container: "body",
              content: function () {
                return time;
              },
            }).on("mouseenter", mouseenter)
              .on("mouseleave", mouseleave);
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

          //button.popover("hide");

          label.css("color", "#aaa");
          label.css("padding-right", "10px");

          item.updateValue = function (value, unit) {
            //;
            var val = value != "-" ? self.toFix(value, 2) : "-";
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
              //button.popover("show");
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
            if (callback) {
              callback(item);
            }
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

      attrDisp.prototype.destroy = function () {
        popup.remove();
      };
      attrDisp.prototype.getData = function () {
        return data;
      };
      return new attrDisp();
    };
    var itemins;
    self.createCurrentStatus = function (txt, pos, status) {

      var wrap = topo.find("div#cStatus");
      var title = $("<div></div>");
      var addOn = $("<div></div>");
      var circle = $("<div></div>");
      var ins;

      wrap = wrap.size() ? wrap : $("<div id=\"cStatus\"></div>");
      wrap.children().remove();

      function wholeClick() {
        $("body").off("click");
        ins.destroy();
        if (itemins) {
          itemins.destroy();
        }
      }

      function clickFn(event) {
        var p = newDimension.persentage || 1;
        var data = self.getValue("device/alerts");
        if (ins) {
          ins.destroy();
        }
        $("body").off("click");
        if(data){
          if (data.length > 0) {
            ins = self.createAttrDisp("告警信息", data, {
              x: pos.x /p - 200, y: pos.y / p + 15
            }, function (item) {
              var nodeId = item.nodeId;
              var resource;
              var ROLE = self.getValue("global/ROLE");
              self.getDomainAreaLineTree_alertStatus(function (domaintree) {
                domaintree.traverse(function (node) {
                  if (node.id == nodeId) {
                    self.setParameter("id", node.id);
                    self.setValue("global/resource", node);
                    self.setValue("global/instance", item.instance);
                    self.setParameter("sensorId", item.id);
                    self.setValue("global/alertTime", item.arisingTime);
                    self.navigateToTab("analysis", 0, 1);
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
        var p = newDimension.persentage || 1;
        wrap.css("cursor", "pointer");
        wrap.css("top", pos.y / p + "px");
        wrap.css("left", pos.x / p + "px");
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
        if (itemins)
          itemins.destroy();
      }

      function clickFn(event) {
        var p = newDimension.persentage || 1;
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
            x: pos.x / p, y: pos.y / p
          }, function (item) {

            var nodeId = item.nodeId;
            var resource;
            var ROLE = self.getValue("global/ROLE");
            self.getDomainAreaLineTree_alertStatus(function (domaintree) {
              domaintree.traverse(function (node) {
                if (node.id == nodeId) {
                  self.setValue("global/resource", node);
                  self.setValue("global/instance", item.instance);
                  self.setValue("global/alertTime", item.arisingTime);
                  if (ROLE == 1) {
                    self.navigateTo("index", {
                      main: 2,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 2) {
                    self.navigateTo("index", {
                      main: 2,
                      backHistory: 1
                    }, "self");
                  } else if (ROLE == 3) {
                    self.navigateTo("index", {
                      main: 2,
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
    self.createAlarmSmall = function(title, callback){
      $$.loadExternalJs(['toolkit/configure/alarm'], function(threeDbar){
        var ins = threeDbar.init(svgId, {
          title : title,
          smallMode : true
        });
        callback(ins);
      })
    };
    self.create3Dbar = function(title, callback){
      $$.loadExternalJs(['toolkit/configure/3dbarchart'], function(threeDbar){
        var ins = threeDbar.init(svgId, {
          title: title
        });
        //ins.setPos(cell.position());
        //ins.setValue(0);
        callback(ins);
      });
    };

    //获得缩放的点位
    self.getPersentageSite = function(position) {
      var p = newDimension.persentage || 1;
      var tempPosition = {x:0,y:0};
      tempPosition.x =  position.x / p;
      tempPosition.y =  position.y / p;
      return tempPosition;
    }
    function render(inputJson, cb_fun){
      var context;
      function getView(inputJson, cb_fun){
        if (inputJson) {
          getViewSuccess(json = inputJson);
        } else {
          self.getViewById(viewId, function (view) {
            json = JSON.parse(view.content);
            getViewSuccess(json);
          });
        }
      }
      function waitload(fn){
        setTimeout(fn, 4);
      }
      function loadJointJs(){
        $$.loadExternalJs(["rappid-joint", "lodash", "backbone"], loadJointJsSuccess);
      }
      function reDrawImageAddress(){
        each(json.cells, function(cell){
          if (cell.type == "basic.Image"){
            cell.attrs.image['xlink:href'] = factory.origin + cell.attrs.image['xlink:href'].substring(1);
          }
        })
      }
      extendTools = (function(){
        function extendTools(type, name){
          return registry[type + ":" + name]
        };
        extendTools.register = function(name, controller){
          registry[name] = controller;
        }
        return extendTools;
      })();

      /** 添加组态注册的新组件 */

      extendTools.register("extend:angle", function(cell){
        elDom.attr("text/style/display", "none");
        elDom.attr("rect/style/display", "none");
        $$.loadExternalJs(["toolkit/configure/openAngle"], function (openAngle) {
          var ins = openAngle.init(svgId);
          openAngles[cell.id] = ins;
          ins.setPos(cell.position);
          ins.setValue(0);
        });
      });

      extendTools.register("type:link", function(cell){
        var displayModeLink = {
          "arrowheadMarkup": "<g></g>",
          "toolMarkup": "<g></g>",
          "vertexMarkup": "<g></g>"
        };
        jQuery.extend(cell, displayModeLink);
        cell.attrs[".connection-wrap"] = {
          display: "none"
        };
      });

      extendTools.register("type:chart.Plot", function(cell){
        var position = cell.position;
        var size = cell.size;
        var viewId = getNumber(cell.echartViewId);
        self.getViewById(viewId, function (view) {
          if (view) {
            var chartWrap = $("<div></div>");
            chartWrap.css("width", size.width * scale + "px");
            chartWrap.css("height", "auto");
            chartWrap.css("top", position.y * scale + "px");
            chartWrap.css("left", (position.x * scale + ys + 5) + "px");
            chartWrap.css("position", "absolute");
            chartWrap.css("background-color", "#eee");
            chartWrap.css("box-shadow", "1px 1px 10px 1px rgba(0,0,0,.2)");
            chartWrap.css("border-radius", "2px");
            wrap.prepend(chartWrap);
            var json = JSON.parse(view.content);
            json.layout = json.layout.$remapByChild(function (element) {
              var rs = new commonMethod(element);
              return rs;
            });
            var layout = json.layout;
            element.children = layout.children;
            element.traverse(function (elem) {
            });
            if (cell.nodeIds) {
              cell.nodeIds.$remove(function (index, element) {
                return element == 0;
              });
              if (cell.nodeIds.length > 0) {
                var callback = function (event) {
                  if (event) {
                    var resource = event[cell.nodeIds[0]];
                    if (resource) {
                      var success = function (data) {
                        layout.traveseByChild(function (elem) {
                          if (elem.type == "echart") {
                            elem.data.resource = [resource];
                            var kpis = elem.data.kpi;
                            elem.data.kpi = data.filter(function (elm) {
                              return kpis.indexOf(elm.id) != -1;
                            });
                          }
                        });
                        traverseRow(chartWrap, layout.children, true);
                      };
                      serviceCenterService.kpis.getBymodelId(resource.modelId).then(success);
                    }
                  }
                };
                var strToNumer = function (arr) {
                  for (var i in arr) {
                    if (typeof arr[i] == "string") {
                      if (arr[i].indexOf("number:") != -1) {
                        var numStr = arr[i].split("number:")[1];
                        arr[i] = parseInt(numStr);
                      }
                    }
                  }
                  return arr;
                };
                resourceUIService.getResourceByIds(strToNumer(cell.nodeIds), callback);
              } else {
                traverseRow(chartWrap, layout.children, true);
              }
            } else {
              traverseRow(chartWrap, layout.children, true);
            }
          }
        });
      });

      /** 添加组态注册的新组件 */

      function getExtendTools(){
        var rs = [];
        each(json.cells, function(cell){
          var extend = cell.extend;
          var type = cell.type;
          var tool = extendTools("extend", extend) || extendTools("type", type);
          if(tool){
            tool(cell);
            rs.push(cell);
          }
        });
        return rs;
      }
      function getViewSuccess(){
        reDrawImageAddress();
        extendTools = getExtendTools();
        loadJointJs();
      }
      function drawCell(cell, find, findState){
        var setLevel = function (cell, value) {
          var range = cell.attributes.range;
          if (range) {
            range = eval(range);
          }
          var persent = (value - range[0]) / (range[1] - range[0]);
          cell.prop("attrs/text/text", "");
          cell.transition("attrs/rect", {
            "transform": "translate(0,0)",
            "height": 60 * persent
          }, {
            delay: 0,
            duration: 1000,
            valueFunction: function (start, end) {
              return function (time) {
                var height = start["height"] + (end["height"] - start["height"]) * time;
                var all = 0;
                return {
                  "transform": "translate(0," + (60 - height) + ")",
                  "height": height,
                };
              };
            }
          });
        };
        var setOpenAngle = function (cell, value, element) {
          var range = cell.attributes.range;
          var id = cell.id;
          openAngles[id].setValue(value);
        };
        var fillColor = function (cell, type, color, state, color2) {
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
        };
        var breathFlash = function (cell, type, color, state, opacityState) {
          var stateId = cell.get("stateId");
          var flash = function (el) {
            var defaultOpacity = opacityState ? 1 : el.opacity;
            el.transition("attrs/" + type + "/opacity", defaultOpacity, {
              delay: 0,
              duration: 3000,
              timingFunction: joint.util.timing.inout,
              valueFunction: function (a, b) {
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
        };
        var bubbleFlash = function (cell, type, color, state, opacityState) {
          var stateId = cell.get("stateId");
          var flash = function () {
            cell.prop("attrs/" + type + "/r", 0);
            cell.prop("attrs/" + type + "/opacity", opacityState ? 1 : cell.opacity);
            cell.transition("attrs/" + type, {
              "r": cell.r,
              "opacity": 0
            }, {
              delay: 0,
              duration: 1500,
              valueFunction: function (start, end) {
                return function (time) {
                  return {
                    "r": start["r"] + (end["r"] - start["r"]) * time,
                    "opacity": start["opacity"] - (start["opacity"]) * time
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
        };
        var changeIconAndText = function (cell, state, type) {
          if (!type) type = "alertConfig";
          if (type == "alertConfig") {
            var alertIcon = cell.get("alertIcon");
            if (alertIcon) {
              if (state < 1) state = 0;
              var alertConfig = cell.get(type);
              alertConfig.forEach(function (item) {
                if (item.id == state) {
                  if (item.alertText)
                    cell.prop("attrs/text/text", item.alertText);
                  if (item.alertIcon)
                    cell.prop("attrs/image/xlink:href", factory.origin + item.alertIcon);
                }
              });
            }
          } else if (type == "valueConfig") {
            var valueConfig = cell.get(type);
            valueConfig.forEach(function (item) {
              item.stateDisplay = false;
              if (item.valueText == state) {
                item.stateDisplay = true;
                if (item.valueText)
                  cell.prop("attrs/text/text", item.valueText);
                if (item.valueIcon)
                  cell.prop("attrs/image/xlink:href", factory.origin + item.valueIcon);
              }
            });
          }
        };
        var getFill = function (obj) {
          var rs = {};
          for (var i in obj) {
            rs = obj[i];
            break;
          }
          return rs.fill;
        };
        var getType = function (type) {
          if (type == "basic.Rect") {
            return "rect";
          } else if (type == "basic.Circle") {
            return "circle";
          }
        };
        var getTextFill = function (obj) {
          return obj["text"]["fill"];
        };
        function getAllUnit_success(units){
          var elDom = getCell(cell);
          var extend = elDom.get("extend");
          if (extend == "alert" && findState) {
            changeIconAndText(elDom, findState.value);
          } else if (extend == "value" && find) {
            changeIconAndText(elDom, find.value, "valueConfig");
          } else if (extend == "level" && find) {
            setLevel(elDom, find.value);
          } else if (extend == "angle" && find) {
            setOpenAngle(elDom, find.value, cell);
          } else {
            if (findState) {
              var stateType = cell["stateType"];
              if (stateType == "number:1") {
                breathFlash(elDom, getType(cell["type"]), getFill(cell["attrs"]), findState.value, false);
              } else if (stateType == "number:2") {
                bubbleFlash(elDom, getType(cell["type"]), getFill(cell["attrs"]), findState.value, false);
              } else if (stateType == "number:3") {
                breathFlash(elDom, getType(cell["type"]), getFill(cell["attrs"]), findState.value, true);
              } else if (stateType == "number:4") {
                bubbleFlash(elDom, getType(cell["type"]), getFill(cell["attrs"]), findState.value, true);
              } else {
                fillColor(elDom, getType(cell["type"]), getFill(cell["attrs"]), findState.value, getTextFill(cell["attrs"]));
              }
            }
            if (find) {
              var allUnits = data;
              var unit = allUnits.find(function (elem) {
                if (cell.kpiObj)
                  return elem.unitCode == cell.kpiObj.unit;
                else
                  return "";
              });
              var unitType = false;
              if (elDom.get("unitType")) {
                unitType = elDom.get("unitType").split("number:")[1] == 1;
              }
              var rangeObj;
              if (cell.resourceObj.modelId) {
                rangeObj = resourceUIService.$attr("rootModelsDic/" + cell.resourceObj.modelId + "/kpiDic/" + find.kpiCode + "/rangeObj");
                find.value = rangeObj ? rangeObj[find.value] : find.value;
              }
              var y = elDom.attributes.position.y;
              if (unit && unitType) {
                elDom.prop("attrs/text/text", find.value + "" + unit.unitName);
              } else {
                elDom.prop("attrs/text/text", find.value);
              }
              elDom.prop("position/y", y);
            }
          }
        }
        serviceCenterService.units.getAll().then(getAllUnit_success);
      }
      function getData_success(data){
        each(data, function(d){
          if(d.kpiCode == 999999){
            drawCell(cellDiction[d.nodeId + "_" + d.kpiCode], null, data);
          } else {
            drawCell(cellDiction[d.nodeId + "_" + d.kpiCode], data, null);
          }
        })
      }
      function ciKpiDefindSuccess(n, k){
        nodes = n.map(getId);
        kpis = k.map(getId);

        getRealTimeKpiData(nodes, [999999], getData_success, true);
        getRealTimeKpiData(nodes, kpis, getData_success);
        kpis.push(999999);
        getWebSocket(nodes, kpis, getData_success)
        if (events["$loadCiKpiComplete"]) {
          events["$loadCiKpiComplete"](graph.getCells());
        }
        element.trigger("$loadCiKpiComplete", graph.getCells());
      }
      function loadJointJsSuccess(joint){
        waitload(function(){
          context.init(joint);
          context.ciKpiDefination(ciKpiDefindSuccess);
        })
      }
      function getCell(cell){
        return isObject(cell) ? graph.getCell(cell.id) : graph.getCell(cell);
      }
      function getNumber(str){
        if(isString(str)){
          var n = parseInt(str.replace(new RegExp("number\\:", "g"), ""));
          return n !== n ? null : n;
        } else if(isNumber(str)){
          return str
        }
        return null;
      }
      function getRealTimeKpiData(ci, kpi, callback, bool){
        kpiDataService.getRealTimeKpiData(ci, kpi, function (returnObj) {
          if (returnObj.code == 0) {
            callback && callback(returnObj.data);
          }
        }, bool);
      }
      function getWebSocket(ci, kpi, callback){
        var paramSocket = {
          ciid: ci.toString(),
          kpi: kpi.toString()
        }, operation = "register";
        uuid = uuid || Math.uuid();
        SwSocket.register(uuid, operation, function (event) {
          callback && callback([event.data]);
        });
        SwSocket.send(uuid, operation, "kpi", paramSocket);
      }
      function ciKpiDefination(callback){
        var nodes = [];
        var kpis = [];
        var promises = [];
        function defineCell(cell){
          var defer = q.defer(),
            elDom = getCell(cell),
            nodeId = getNumber(elDom.get("nodeId")),
            kpiId = getNumber(elDom.get("kpiId"));
          getResourceById(nodeId, getResourceByIdSuccess);
          function getResourceByIdSuccess(resource){
            cell.resourceObj = resource;
            getKpisByModelId(resource && resource.modelId, getKpisSuccess);
          }
          function getKpisSuccess(kpis){
            cell.kpiObj = kpis.find(function(e){
              return e.id == kpiId;
            }) || null;
            if(cell.resourceObj && cell.kpiObj){
              cellDiction[cell.resourceObj.id + "_" + cell.kpiObj.id] = cell;
            }
            defer.resolve(cell);
          }
          nodeId && nodes.push(nodeId);
          kpiId && kpis.push(kpiId);
          return defer.promise;
        }
        each(json.cells, function(cell){
          promises.push(defineCell(cell));
        });
        q.all(promises).then(function(d){
          callback && callback(nodes, kpis);
        })
      }
      function clearWrap(){
        wrap.children().remove();
      }
      function resetDimension(ch, cw, ph, pw){
        var portion = cw / ch, d = {};
        ph = ph || 1/0;
        if (cw / ch < pw / ph) {
          d.scale = ph / ch;
          d.width = ph * portion;
          d.height = ph;
          d.persentage = ch / ph;
        } else {
          d.scale = pw / cw;
          d.width = pw;
          d.height = pw / portion;
          d.persentage = cw / pw;
        }
        return d
      }
      function init(joint){
        var paper, svg,
          PatternLinkView = joint.dia.LinkView.extend({
            patternMarkup: [
              '<pattern id="pattern-<%= id %>" patternUnits="userSpaceOnUse">',
              '<image xlink:href=""/>',
              '</pattern>'
            ].join(''),
            render: function () {
              joint.dia.LinkView.prototype.render.apply(this, arguments);
              if (this.model && !this.model.get("pattern")) {
                return;
              }
              this.listenTo(this.model, "change:pattern change:patternColor", this.update);
              return this;
            },
            remove: function () {
              joint.util.cancelFrame(this.frameId);
              joint.dia.LinkView.prototype.remove.apply(this, arguments);
              if (this.pattern) {
                this.pattern.remove();
                this.pattern = null;
              }
            },
            update: function () {
              joint.dia.LinkView.prototype.update.apply(this, arguments);
              if (this.model && !this.model.get("pattern")) {
                return;
              }
              if (!this.pattern) {
                this.pattern = joint.V(_.template(this.patternMarkup)({
                  id: this.id
                }));
                this.patternImage = factory.origin + this.pattern.findOne("image");
                joint.V(this.paper.svg).defs().append(this.pattern);
              }
              this._V.connection.attr({
                "stroke": "url(#pattern-" + this.id + ")"
              });
              this.strokeWidth = this._V.connection.attr("stroke-width") || 1;
              joint.util.cancelFrame(this.frameId);
              this.frameId = joint.util.nextFrame(_.bind(this.fillWithPattern, this));
              return this;
            },
            fillWithPattern: function () {
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
              ctx.lineJoin = "round";
              ctx.lineCap = "round";
              for (var i = 0, pointsCount = points.length - 1; i < pointsCount; i++) {
                ctx.save();
                var gradientPoints = this.gradientPoints(points[i], points[i + 1], strokeWidth);
                var gradient = ctx.createLinearGradient.apply(ctx, gradientPoints);
                this.drawPattern.call(this, ctx, points[i], points[i + 1], strokeWidth, gradient, points, i);
                ctx.restore();
              }
              var dataUri = factory.origin + canvas.toDataURL("image/png");
              this.pattern.attr(bbox);
              this.patternImage.attr({
                width: bbox.width,
                height: bbox.height,
                "xlink:href": dataUri
              });
            },
            gradientPoints: function (from, to, width) {
              var angle = joint.g.toRad(from.theta(to) - 90);
              var center = joint.g.line(from, to).midpoint();
              var start = joint.g.point.fromPolar(width / 2, angle, center);
              var end = joint.g.point.fromPolar(width / 2, Math.PI + angle, center);
              return [start.x, start.y, end.x, end.y];
            },
            drawPattern: function (ctx, from, to, width, gradient) {
              ctx.beginPath();
              ctx.moveTo(from.x, from.y);
              ctx.lineTo(to.x, to.y);
              ctx.stroke();
              ctx.closePath();
              ctx.beginPath();
              ctx.strokeStyle = "white";
              ctx.lineWidth = width - 2;
              ctx.moveTo(from.x, from.y);
              ctx.lineTo(to.x, to.y);
              ctx.stroke();
              ctx.closePath();
            }
          }),
          linkView = PatternLinkView.extend({
            drawPattern: function (ctx, from, to, width, gradient) {
              var innerWidth = width - 4;
              var outerWidth = width;
              var buttFrom = joint.g.point(from).move(to, -outerWidth / 2);
              var buttTo = joint.g.point(to).move(from, -outerWidth / 2);
              var lineColor = "blue";
              if (this.model.get("attrs") && this.model.get("attrs")[".connection"]) {
                lineColor = this.model.get("attrs")[".connection"]["stroke"] ? this.model.get("attrs")[".connection"]["stroke"] : lineColor;
              }
              gradient.addColorStop(0.300, lineColor);
              var patternColor = "#ffffff";
              if (this.model.get("patternColor")) {
                patternColor = this.model.get("patternColor");
              }
              gradient.addColorStop(0.500, patternColor);
              gradient.addColorStop(0.700, lineColor);
              ctx.beginPath();
              ctx.lineWidth = innerWidth;
              ctx.strokeStyle = gradient;
              ctx.moveTo(from.x, from.y);
              ctx.lineTo(to.x, to.y);
              ctx.stroke();
              ctx.closePath();
            }
          }),
          config = clone(json),
          defaultLink = new joint.dia.Link({
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
          });
        graph = new joint.dia.Graph;
        extend(config, {
          el: wrap[0],
          model: graph,
          interactive : false,
          perpendicularLinks : true,
          gridSize : 10,
          markAvailable : true,
          linkConnectionPoint : joint.util.shapePerimeterConnectionPoint,
          defaultLink : defaultLink,
          linkView : linkView
        });
        delete config.cells;
        clearWrap();
        newDimension = resetDimension(config.height, config.width, topo.height(), topo.width());
        config.width = newDimension.width;
        config.height = newDimension.height;
        paper = new joint.dia.Paper(config);
        graph.fromJSON(json);
        svg = wrap.find("svg");
        svg.attr("id", svgId);
        waitload(function(){
          isString(json.bgimage) && addCss(svg, {
            "background-image" : "url(" + factory.origin + json.bgimage.slice(1) + ")",
            "background-size" : "contain",
            "background-position" : "center center",
            "background-repeat" : "no-repeat"
          });
          wrap.find(".viewport").attr("transform", "scale(" + newDimension.scale + ")");
          wrap.find(".chart.Plot").css("display", "none");
        });
        if (events["$renderGraphComplete"]) {
          events["$renderGraphComplete"](graph.getCells());
        }
        element.trigger("$renderGraphComplete", graph.getCells());
      }
      context = {
        init : init,
        ciKpiDefination : ciKpiDefination
      }
      getView(inputJson, cb_fun);
    }
    self.render = render;
    delete element.self;
    topo.css("width", "100%");
    topo.css("background-position", "top");
    topo.css("background-size", "contain");
    expression = expression ? expression : {};
    var initEvent = expression.$attr("on/init");
    var clickEvent = expression.$attr("on/click");
    var wholeClickEvent = expression.$attr("on/wholeClick");
    if (element.style) {
      topo.css(element.style);
    }
    if (isFunction(initEvent)) {
      try {
        topo.underWatch = initEvent({
          target: self,
          self: self,
          global: global,
          tools: elemData
        }, function complete(){
          defer.resolve("underwatch");
        }, defer.id);
      } catch (e) {
        console.error(e);
      }
    } else {
      self.render(json);
    }
    topo.on("click", function (event) {
      if (typeof wholeClickEvent == "function") {
        try {
          wholeClickEvent({
            target: self,
            global: global
          });
        } catch (e) {
          ;
        }
      }
    });
    console.assert(topo.underWatch != undefined, "underWatch没设置");
    return topo;
  };
});