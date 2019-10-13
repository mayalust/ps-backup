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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/177280852260000/navigate/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/177280852260000/navigate/content/advanceEchart_10.js":
/*!******************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/advanceEchart_10.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var repeatData = target.$repeatData; //   

      var workObj = target.getParameter("id");
      option = {
        title: {
          text: repeatData.province,
          textStyle: {
            color: "#ffffff",
            fontSize: 12
          },
          left: "center",
          bottom: "75"
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //，蓝色，黄色，, 橙色红色,
        color: ['#A355F9', '#efd80b', '#ee6b1c', '#d20006'],
        grid: {
          top: 'top'
        },
        graphic: [{
          type: 'image',
          id: 'logo',
          right: 11,
          top: 8,
          z: -10,
          bounding: 'raw',
          style: {
            // image: 'image/circlebg.png',
            width: 200 //                    height: 150,
            //                    opacity: 0.4

          }
        }],
        series: [{
          name: '',
          type: 'pie',
          // height:'10',
          radius: ['50%', '70%'],
          center: ['50%', '36%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: function formatter(params) {//                            if (params.name == "335") {
                //                            }
                //                            return "";
                //                        return params.value + '\n' + params.name;
              }
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: repeatData.data[0].value,
            name: repeatData.data[0].name
          }, {
            value: repeatData.data[1].value,
            name: repeatData.data[1].name
          }, {
            value: repeatData.data[2].value,
            name: repeatData.data[2].name
          }, {
            value: repeatData.data[3].value,
            name: repeatData.data[3].name
          }]
        }, {
          name: '',
          type: 'pie',
          clockWise: false,
          hoverAnimation: true,
          radius: ['50', '50'],
          center: ['50%', '36%'],
          label: {
            normal: {
              show: false,
              position: 'center'
            }
          },
          tooltip: {
            // show: false,
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c}"
          },
          data: [{
            label: {
              normal: {
                formatter: repeatData.data[4].value,
                textStyle: {
                  color: '#ffffff',
                  fontSize: 18 // fontWeight: 'bold'

                }
              }
            },
            value: repeatData.data[4].value,
            name: repeatData.data[4].name
          }]
        }]
      };
      target.render(option); // })
      //   })
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/advanceEchart_7.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/advanceEchart_7.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var workObj = target.getParameter("id");
      target.getDomainAreaLineTree(function (find) {
        if (find) {
          var label = find.label;
          var params = ["kpi", {
            "isRealTimeData": true,
            "includeInstance": true,
            "nodeIds": [workObj],
            "kpiCodes": [6101]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
            var data = returnData.data;
            var unfinished;
            var finished;

            for (var i = 0; i < data.length; i++) {
              if (data[i].instance == "state,0") {
                unfinished = data[i].value;
              } else if (data[i].instance == "state,1") {
                finished = data[i].value;
              }
            }

            if (!unfinished) {
              unfinished = 0;
            }

            if (!finished) {
              finished = 0;
            }

            var option = {
              tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                x: '8%',
                y: '2%',
                textStyle: {
                  color: '#84898d'
                },
                orient: 'vertical',
                data: ['已完成状态项目维修数', '待完成状态项目维修数']
              },
              calculable: true,
              series: [{
                name: '',
                type: 'pie',
                radius: '8%',
                tooltip: {
                  show: false
                },
                center: ['25%', '30%'],
                hoverAnimation: false,
                color: ['#dde5e7'],
                labelLine: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                }
              }, {
                name: '',
                type: 'pie',
                radius: ['40%', '60% '],
                center: ['50%', '60%'],
                calculable: true,
                avoidLabelOverlap: true,
                label: {
                  normal: {
                    position: 'inner',
                    show: true,
                    formatter: ' {c} ',
                    textBorderWidth: 0
                  }
                },
                data: [{
                  value: finished,
                  name: '已完成状态项目维修数',
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                          offset: 0,
                          color: '#CACACC' // 0% 处的颜色

                        }, {
                          offset: 1,
                          color: '#CACACC' // 100% 处的颜色

                        }],
                        globalCoord: false // 缺省为 false

                      },
                      borderColor: '#dde5e7',
                      borderWidth: 3,
                      borderType: 'solid'
                    }
                  }
                }, {
                  value: unfinished,
                  name: '待完成状态项目维修数',
                  itemStyle: {
                    normal: {
                      color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                          offset: 0,
                          color: '#0b7cae' // 0% 处的颜色

                        }, {
                          offset: 1,
                          color: '#33ddee' // 100% 处的颜色

                        }],
                        globalCoord: false // 缺省为 false

                      },
                      borderColor: '#dde5e7',
                      borderWidth: 3,
                      borderType: 'solid'
                    }
                  }
                }]
              }]
            };
            event.target.render(option);
            event.target.trigger('queryTabelList11', {
              val: 1
            });
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/block_3.js":
/*!*********************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/block_3.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global; //target.setInvisible(false);

      target.on("queryTabelList11", function (args) {
        // 
        if (args.val == 2) {
          target.setInvisible(false);
        } else if (args.val == 1) {
          target.setInvisible(true);
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/block_4.js":
/*!*********************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/block_4.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global; //   target.setInvisible(false);

      target.on("queryTabelList11", function (args) {
        // 
        if (args.val == 1) {
          target.setInvisible(false);
        } else if (args.val == 2) {
          target.setInvisible(true);
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_1.js":
/*!*************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_1.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var ctrlGroups = [[{
        type: "clock",
        icon: "glyphicon glyphicon-search",
        value: function value(time) {
          return "当前时间 ： " + time;
        },
        btnclass: "btn btn-primary",
        "class": "col-md-12",
        style: {
          "float": "right",
          "font-weight": "bold"
        }
      }]]; //event.target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_11.js":
/*!**************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_11.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var global = event.global;
      var label = target.$repeatData.province;
      var description = target.$repeatData.description || 0;
      var ctrlGroups = [[{
        type: "jquery",
        render: function render() {
          var wrap = $("<div></div>"); //   wrap.css("height", "70px");
          //   wrap.css("border", "1px solid rgba(250,250,250,.3)");
          //   wrap.css("background-color", "rgba(0,100,250,.1)");

          var title = $("<div></div>"); //   title.text(label);

          title.css("font-size", "12px");
          title.css("color", "#fff");
          title.css("position", "absolute");
          title.css("top", "142px");
          title.css("left", "15px");
          title.css("font-weight", "bold");
          wrap.append(title);
          return wrap;
        }
      }]];
      target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_12.js":
/*!**************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_12.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var colors = [target.getAlertColor(1), target.getAlertColor(2), target.getAlertColor(3)];
      var global = event.global;
      var ctrlGroups = [];

      var createTr = function createTr(index, element) {
        return [{
          type: "jquery",
          render: function render() {
            var wrap = $("<div></div>");
            var title = $("<div></div>");
            var bar = $("<div></div>");
            wrap.css("height", "25px");
            wrap.css("width", "40px");
            wrap.css("margin", "auto");
            bar.css("width", "10px");
            bar.css("height", "25px");
            bar.css("background-color", colors[index]);
            bar.css("position", "absolute");
            wrap.css("position", "relative");
            bar.css("left", "25px");
            wrap.append(bar);
            title.css("text-align", "right");
            title.css("color", "#a0a0a0");
            title.css("margin-right", "15px");
            title.css("position", "absolute");
            title.css("font-size", "12px");
            title.text(element.name);
            var value = $("<div></div>");
            value.css("color", "#fff");
            value.css("position", "absolute");
            value.css("font-size", "12px");
            value.css("text-align", "right");
            value.css("font-weight", "bold");
            value.text(element.value);
            value.css("top", "12px");
            wrap.append(title);
            wrap.append(value);
            return wrap;
          }
        }];
      };

      for (var i = target.$repeatData.data.length - 1; i >= 0; i--) {
        ctrlGroups.push(createTr(i, target.$repeatData.data[i]));
      }

      event.target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_2.js":
/*!*************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_2.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var task1 = {
        val: 2
      };
      var currStatus = "today";

      var render = function render() {
        var ctrlGroups = [[{
          type: "button",
          //   value:"切换",
          //   btnclass:currStatus=="today"?"btn btn-primary":"btn btn-default",
          btnclass: "btn-default",
          btnStyle: {
            "width": "35px",
            "height": "35px",
            "text-align": "center",
            "font-size": "20px",
            //   "border":"#10a4fb solid 1px",
            "position": "absolute",
            "right": "1%",
            "z-index": 9999
          },
          icon: "proudsmart ps-transfer",
          on: {
            click: function click(elem) {
              if (currStatus == "today") {
                currStatus = "";
                target.trigger("queryTabelList11", task1);
                task1.val = 1;
              } else if (currStatus == "") {
                currStatus = "today";
                target.trigger("queryTabelList11", task1);
                task1.val = 2;
              }

              render();
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

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_6.js":
/*!*************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_6.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global; //   var state = ["危险告警数","警告告警数","注意告警数","点检异常数"];

      var ctrlGroups = [[{
        type: "jquery",
        render: function render() {
          //   第一个
          var wrap1 = $("<div></div>"); //   wrap1.css("height", "16px");

          wrap1.css("width", "100%");
          wrap1.css("justify-content", "center");
          wrap1.css("align-items", "center");
          wrap1.css("display", "-webkit-flex");
          wrap1.css("margin", "0 auto");
          var sub1 = $("<div></div>");
          sub1.css("height", "16px");
          sub1.css("width", "33px");
          sub1.css("background-color", "#d20006"); //   sub1.css("border", "1px solid rgba(250,250,250,.3)");

          sub1.css("margin-right", "5px");
          var sub2 = $("<div></div>");
          sub2.text("危险告警数");
          var sub3 = $("<div></div>"); //   sub1.text("危险告警数");

          sub3.css("height", "16px");
          sub3.css("width", "33px");
          sub3.css("background-color", "#ee6b1c"); //   sub3.css("border", "1px solid rgba(250,250,250,.3)");

          sub3.css("margin-left", "10px");
          sub3.css("margin-right", "5px"); //   sub3.css("margin","0 auto");

          var sub4 = $("<div></div>");
          sub4.text("警告告警数");
          var sub5 = $("<div></div>"); //   sub1.text("危险告警数");

          sub5.css("height", "16px");
          sub5.css("width", "33px");
          sub5.css("background-color", "#efd80b"); //   sub5.css("border", "1px solid rgba(250,250,250,.3)");

          sub5.css("margin-left", "10px");
          sub5.css("margin-right", "5px"); //   sub5.css("margin","0 auto");

          var sub6 = $("<div></div>");
          sub6.text("注意告警数");
          var sub7 = $("<div></div>"); //   sub1.text("危险告警数");

          sub7.css("height", "16px");
          sub7.css("width", "33px");
          sub7.css("background-color", "#A355F9"); //   sub7.css("border", "1px solid rgba(250,250,250,.3)");

          sub7.css("margin-left", "10px");
          sub7.css("margin-right", "5px"); //   sub7.css("margin","0 auto");

          var sub8 = $("<div></div>");
          sub8.text("点检异常数"); //   sub1.css("position", "absolute");
          //   sub.css("top", "30px");
          //   sub1.css("left", "40px");
          //   sub.css("color", "#aaa");
          //   sub.css("font-size", "10px");

          wrap1.append(sub1);
          wrap1.append(sub2);
          wrap1.append(sub3);
          wrap1.append(sub4);
          wrap1.append(sub5);
          wrap1.append(sub6);
          wrap1.append(sub7);
          wrap1.append(sub8);
          return wrap1;
        }
      }]];
      target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/ctrlgroup_8.js":
/*!*************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/ctrlgroup_8.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var global = event.global;
      var label = target.$repeatData.province;
      var description = target.$repeatData.description || 0;
      var ctrlGroups = [[{
        type: "jquery",
        render: function render() {
          var wrap = $("<div></div>");
          wrap.css("height", "70px");
          wrap.css("border", "1px solid rgba(250,250,250,.3)");
          wrap.css("background-color", "rgba(0,100,250,.1)");
          var title = $("<div></div>");
          title.text(label);
          title.css("font-size", "12px");
          title.css("color", "#fff");
          title.css("position", "absolute");
          title.css("top", "12px");
          title.css("left", "15px");
          title.css("font-weight", "bold");
          var sub = $("<div></div>");
          sub.text("重要台数");
          sub.css("position", "absolute");
          sub.css("top", "30px");
          sub.css("left", "15px");
          sub.css("color", "#aaa");
          sub.css("font-size", "10px");
          var number = $("<div></div>");
          number.text(description);
          number.css("position", "absolute");
          number.css("top", "45px");
          number.css("left", "15px");
          number.css("font-size", "14px");
          number.css("font-weight", "bold");
          wrap.append(title);
          wrap.append(sub);
          wrap.append(number);
          return wrap;
        }
      }]];
      target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/repeater_5.js":
/*!************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/repeater_5.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var id = target.getParameter("id") || target.getValue("device/id");
      var main = target.getParameter("main");
      target.getDomainAreaLineTree(function (find) {
        if (find) {
          find.getChildren(function (n, i, l) {
            return l < 2;
          }, true).then(function (domains) {
            var mountain = domains.map(function (elem) {
              return elem.id;
            });
            var params = ["kpi", {
              "isRealTimeData": true,
              "includeInstance": true,
              "nodeIds": mountain,
              "kpiCodes": [6100]
            }];
            target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
              var kpiNames = ['正常', '注意', '警告', '监测台数'];
              var kpiIds = ['severity,4', 'severity,3', 'severity,2', 'description'];
              var data = returnData.data;
              var all = [];
              var normal = [];
              var notice = [];
              var warning = [];
              var risk = [];
              var data = returnData.data; //对数据的处理

              for (var j = 0; j < domains.length; j++) {
                for (var i = 0; i < data.length; i++) {
                  if (data[i].nodeId == domains[j].id) {
                    if (data[i].instance == "severity,0") {
                      all.push(data[i].value);
                    } else if (data[i].instance == "severity,-1") {
                      normal.push(data[i].value);
                    } else if (data[i].instance == "severity,2") {
                      notice.push(data[i].value);
                    } else if (data[i].instance == "severity,3") {
                      warning.push(data[i].value);
                    } else if (data[i].instance == "severity,4") {
                      risk.push(data[i].value);
                    }
                  }
                }

                var jlength = j + 1;

                if (all.length != jlength) {
                  var add = jlength - all.length;

                  for (var z = 0; z < add; z++) {
                    all.push('0');
                  }
                }

                if (notice.length != jlength) {
                  var add = jlength - notice.length;

                  for (var z = 0; z < add; z++) {
                    notice.push('0');
                  }
                }

                if (normal.length != jlength) {
                  var add = jlength - normal.length;

                  for (var x = 0; x < add; x++) {
                    normal.push('0');
                  }
                }

                if (warning.length != jlength) {
                  var add = jlength - warning.length;

                  for (var y = 0; y < add; y++) {
                    warning.push('0');
                  }
                }

                if (risk.length != jlength) {
                  var add = jlength - risk.length;

                  for (var y = 0; y < add; y++) {
                    risk.push('0');
                  }
                }
              }

              var list = domains.map(function (domain, index) {
                var num = index;
                var rs = {};
                rs.province = domain.label;
                rs.description = domain.description;
                rs.data = kpiNames.map(function (kp, index) {
                  var r = {};
                  r.name = kpiNames[index]; //   r.value = data.reduce(function(a, b){
                  //     if(b.instance == kpiIds[index]){
                  //       //a++;
                  //       return a = (b.value);
                  //     }
                  //   },0);
                  //为0的时候为了测试，用模拟数据
                  // r.value = r.value || parseInt(Math.random() * 10);
                  //为0的时候为了测试，用模拟数据

                  if (index == 0) {
                    r.value = normal[num];
                  } else if (index == 1) {
                    r.value = notice[num];
                  } else if (index == 2) {
                    r.value = warning[num];
                  } else if (index == 3) {
                    r.value = all[num];
                  }

                  return r;
                });
                return rs;
              });

              for (var j = 0; j < list.length; j++) {
                if (list[j].description) {
                  var listNum = list[j];
                  list.splice(j, 1);
                  list.unshift(listNum);
                }
              }

              target.render(list);
            });
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/row_0.js":
/*!*******************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/row_0.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "click": function click(event) {
      var ticketNo = event.data.values.ticketNo;
      event.tools.location.href = '../../app-oc/index.html#/workOrderTimeLine/' + ticketNo;
    }
  },
  "format": [{
    "name": "工单号",
    "value": "{item:ticketNo}",
    "type": "text"
  }, {
    "name": "内容",
    "value": "{item:message}",
    "type": "text"
  }, {
    "name": "紧急度",
    "value": "{item:priorityCode}",
    "type": "priority"
  }]
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/row_9.js":
/*!*******************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/row_9.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "click": function click(event) {
      var ticketNo = event.data.values.ticketNo;
      event.tools.location.href = '../../app-oc/index.html#/workOrderTimeLine/' + ticketNo;
    }
  },
  "format": [{
    "name": "工单号",
    "value": "{item:ticketNo}",
    "type": "text"
  }, {
    "name": "内容",
    "value": "{item:message}",
    "type": "text"
  }, {
    "name": "紧急度",
    "value": "{item:priorityCode}",
    "type": "priority"
  }]
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/content/svgchart_13.js":
/*!*************************************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/content/svgchart_13.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function init(event) {
      var target = event.target;
      var repeatData = target.$repeatData;
      var barOption = {
        title: {
          text: 'svgChart入门示例'
        },
        grid: {
          top: "5%",
          left: "10%",
          height: "86%"
        },
        legend: {
          data: ['销量']
        },
        xAxis: {
          show: false,
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {
          show: false
        },
        series: [{
          stack: "总量",
          name: '销量1',
          type: '3dbar',
          data: [repeatData.data[0].value]
        }, {
          stack: "总量",
          name: '销量2',
          type: '3dbar',
          data: [repeatData.data[1].value]
        }, {
          stack: "总量",
          name: '销量3',
          type: '3dbar',
          data: [repeatData.data[2].value]
        }]
      };
      target.render(barOption);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/navigate/json.js":
/*!**********************************************************!*\
  !*** ./app-views/views/177280852260000/navigate/json.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function () {
  return {
    "label": "厂区",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "0px",
          "margin": "0px",
          "border": "0",
          "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
          "background-color": "rgba(250,250,250,0)"
        },
        "advance": {
          "expression": {}
        },
        "children": [{
          "type": "column",
          "col": 12,
          "children": [{
            "label": "控制板1",
            "type": "block",
            "source": "BLOCK",
            "style": {
              "padding": "10px",
              "margin": "5px",
              "border": "0",
              "box-shadow": "0px 0px 0px 0px rgba(0,0,0,0)",
              "background-color": "rgba(250,250,250,0)"
            },
            "advance": {
              "expression": {}
            },
            "children": [{
              "type": "column",
              "col": 12,
              "children": [{
                "type": "row",
                "source": "ROW",
                "parameters": {
                  "alignment": "bootstrap"
                },
                "style": {},
                "children": [{
                  "type": "column",
                  "children": [{
                    "label": "数结构导航",
                    "type": "navitree",
                    "source": "NAVITREE",
                    "advance": {
                      "expression": ""
                    }
                  }],
                  "col": 8
                }, {
                  "type": "column",
                  "children": [{
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_1.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_1.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "14px",
                      "font-weight": "bold"
                    },
                    "help": "../pdf/ctrlgroup.pdf",
                    "url": "images/map/map1.png",
                    "parameters": {
                      "cgroupstyle": "table"
                    }
                  }],
                  "col": 4
                }],
                "advance": {
                  "expression": "expression = {\n \"on\": {\n  \"init\": function(event) {\n   var target = event.target;\n   var tabs = target.getValue(\"global/tabs\");\n   var main = target.getParameter(\"main\");\n   if (tabs && main) {\n    if (tabs[main].alias != \"home\") {\n     target.setDimension([0, 0]);\n    }\n   }\n  }\n }\n};"
                }
              }, {
                "type": "row",
                "source": "ROW",
                "parameters": {
                  "alignment": "bootstrap"
                },
                "style": {},
                "children": [{
                  "type": "column",
                  "children": [{
                    "label": "组态视图",
                    "type": "topo",
                    "source": "TOPO",
                    "advance": {
                      "variable": "",
                      "expression": "require(['../solution/customview/deviceAreaPreview/arealevel1'])"
                    },
                    "style": {
                      "font-size": "12px",
                      "background-repeat": "no-repeat",
                      "margin-bottom": "20px"
                    },
                    "viewId": 469973748826065,
                    "parameters": {},
                    "url": "images/map/map1.png",
                    "hooks": {
                      "hooks": {}
                    }
                  }],
                  "col": 8
                }, {
                  "type": "column",
                  "children": [{
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "margin": "0 5px 5px 5px",
                      "padding": "10px",
                      "height": "250px",
                      "overflow-y": "scroll"
                    },
                    "advance": {
                      "expression": "{}"
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
                          "margin": "5px",
                          "padding": "0",
                          "font-size": "12px",
                          "font-weight": "bold",
                          "color": "rgb(255, 255, 255)"
                        },
                        "advance": {
                          "getfunction": "kpiDataService.getValueList",
                          "category": "ci",
                          "condition": ["kpi", "{object:kpiQueryModel}"],
                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"状态总览 \");\n        }\n    }\n}"
                        },
                        "parameters": {}
                      }, {
                        "label": "重复单元",
                        "type": "repeater",
                        "source": "REPEATER",
                        "parameters": {
                          "col": 4
                        },
                        "advance": {
                          "getListTable": "allprojects",
                          "expression": __webpack_require__(/*! ./content/repeater_5.js */ "./app-views/views/177280852260000/navigate/content/repeater_5.js")
                        },
                        "children": [{
                          "type": "column",
                          "col": [3, 0],
                          "children": [{
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/ctrlgroup_8.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_8.js")
                            },
                            "style": {
                              "margin": "5px",
                              "font-size": "12px"
                            },
                            "help": "../pdf/ctrlgroup.pdf",
                            "parameters": {
                              "cgroupstyle": "table"
                            }
                          }, {
                            "type": "row",
                            "source": "ROW",
                            "parameters": {
                              "alignment": "bootstrap"
                            },
                            "style": {},
                            "children": [{
                              "type": "column",
                              "children": [{
                                "label": "控件组",
                                "type": "ctrlgroup",
                                "source": "CTRLGROUP",
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/ctrlgroup_12.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_12.js")
                                },
                                "style": {
                                  "margin": "5px",
                                  "font-size": "12px"
                                },
                                "help": "../pdf/ctrlgroup.pdf",
                                "parameters": {
                                  "cgroupstyle": "table"
                                }
                              }],
                              "col": 6
                            }, {
                              "type": "column",
                              "children": [{
                                "label": "SVG视图",
                                "type": "svgchart",
                                "source": "SVGCHART",
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/svgchart_13.js */ "./app-views/views/177280852260000/navigate/content/svgchart_13.js")
                                },
                                "style": {
                                  "margin": "0px",
                                  "font-size": "12px",
                                  "height": "135px"
                                },
                                "parameters": {}
                              }],
                              "col": 6
                            }],
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/row_9.js */ "./app-views/views/177280852260000/navigate/content/row_9.js")
                            }
                          }]
                        }],
                        "style": {},
                        "url": "images/map/map1.png"
                      }]
                    }],
                    "parameters": {},
                    "url": "images/map/map1.png"
                  }, {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "padding": "5px",
                      "margin": "5px",
                      "height": "260px",
                      "overflow-y": "auto"
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
                          "margin": "auto",
                          "padding": "5px",
                          "font-size": "12px",
                          "font-weight": "bold",
                          "text-align": "left",
                          "color": "rgb(255, 255, 255)"
                        },
                        "advance": {
                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                        },
                        "data": {
                          "modelType": 300,
                          "resfilltype": "parameter",
                          "modelDisable": true
                        },
                        "url": "images/map/map1.png"
                      }, {
                        "label": "控件组",
                        "type": "ctrlgroup",
                        "source": "CTRLGROUP",
                        "advance": {
                          "expression": "require([\"../solution/customview/homepage/diagnoseReport.js\"])"
                        },
                        "style": {
                          "font-size": "12px"
                        },
                        "help": "../pdf/ctrlgroup.pdf",
                        "parameters": {
                          "cgroupstyle": "table"
                        },
                        "url": "images/map/map1.png"
                      }]
                    }]
                  }, {
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_2.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_2.js")
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
                  }, {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "margin": "5px",
                      "padding": "5px",
                      "height": "260px",
                      "overflow-y": "scroll"
                    },
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/block_3.js */ "./app-views/views/177280852260000/navigate/content/block_3.js")
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
                          "margin": "auto",
                          "padding": "5px",
                          "font-size": "12px",
                          "font-weight": "bold",
                          "text-align": "left",
                          "color": "rgb(255, 255, 255)"
                        },
                        "advance": {
                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件统计（当月内）\")\n        }\n    }\n}"
                        },
                        "data": {
                          "kpi": [],
                          "modelType": 300,
                          "resfilltype": "parameter",
                          "resource": [],
                          "modelDisable": true
                        },
                        "parameters": {}
                      }, {
                        "label": "控件组",
                        "type": "ctrlgroup",
                        "source": "CTRLGROUP",
                        "advance": {
                          "expression": __webpack_require__(/*! ./content/ctrlgroup_6.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_6.js")
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
                      }, {
                        "label": "重复单元",
                        "type": "repeater",
                        "source": "REPEATER",
                        "parameters": {
                          "col": 4
                        },
                        "advance": {
                          "getListTable": "allprojects",
                          "expression": "require([\"../solution/customview/homepage/abnormalReport.js\"])"
                        },
                        "children": [{
                          "type": "column",
                          "col": [3, 0],
                          "children": [{
                            "label": "高级视图",
                            "type": "advanceEchart",
                            "source": "ADVANCEECHART",
                            "parameters": {
                              "theme": "default"
                            },
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/advanceEchart_10.js */ "./app-views/views/177280852260000/navigate/content/advanceEchart_10.js")
                            },
                            "style": {
                              "margin": "auto",
                              "width": "100%",
                              "height": "250px"
                            },
                            "url": "images/map/map1.png"
                          }, {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/ctrlgroup_11.js */ "./app-views/views/177280852260000/navigate/content/ctrlgroup_11.js")
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
                          }]
                        }],
                        "style": {},
                        "url": "images/map/map1.png"
                      }]
                    }],
                    "url": "images/map/map1.png",
                    "parameters": {}
                  }, {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "padding": "5px",
                      "margin": "5px",
                      "height": "268px",
                      "overflow-y": "scroll"
                    },
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/block_4.js */ "./app-views/views/177280852260000/navigate/content/block_4.js")
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
                          "font-size": "12px",
                          "font-weight": "bold",
                          "text-align": "left",
                          "padding": "5px",
                          "color": "rgb(255, 255, 255)"
                        },
                        "advance": {
                          "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"检修实绩统计（当月内）\")\n        }\n    }\n}"
                        },
                        "data": {
                          "kpi": [],
                          "modelType": 300,
                          "resfilltype": "parameter",
                          "resource": [],
                          "modelDisable": true
                        },
                        "url": "images/map/map1.png",
                        "parameters": {}
                      }, {
                        "label": "高级视图",
                        "type": "advanceEchart",
                        "source": "ADVANCEECHART",
                        "parameters": {
                          "theme": "default"
                        },
                        "advance": {
                          "expression": __webpack_require__(/*! ./content/advanceEchart_7.js */ "./app-views/views/177280852260000/navigate/content/advanceEchart_7.js")
                        },
                        "style": {
                          "margin": "auto",
                          "width": "100%",
                          "height": "320px"
                        },
                        "url": "images/map/map1.png"
                      }]
                    }],
                    "parameters": {}
                  }],
                  "col": 4
                }],
                "advance": {
                  "expression": __webpack_require__(/*! ./content/row_0.js */ "./app-views/views/177280852260000/navigate/content/row_0.js")
                }
              }]
            }]
          }]
        }]
      }],
      "col": 12
    },
    "setting": __webpack_require__(/*! ../setting.js */ "./app-views/views/177280852260000/setting.js")
  };
});

/***/ }),

/***/ "./app-views/views/177280852260000/setting.js":
/*!****************************************************!*\
  !*** ./app-views/views/177280852260000/setting.js ***!
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
//# sourceMappingURL=177280852260000.navigate.js.map