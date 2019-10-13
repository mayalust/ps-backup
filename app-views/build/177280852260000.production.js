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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/177280852260000/production/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/177280852260000/production/content/advanceEchart_15.js":
/*!********************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/advanceEchart_15.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var workObj = target.getParameter("id");
      var params = ["kpi", {
        "isRealTimeData": true,
        "includeInstance": true,
        "nodeIds": [workObj],
        "kpiCodes": [6301]
      }];
      target.postService("kpiDataFlexService", "getKpiValueList", params, function (rs) {
        var obj = {
          "0": "智能决策项目数",
          "1": "人工决策项目数",
          "2": "已完成智能决策项目数",
          "3": "待完成智能决策项目数"
        };
        var data = [];
        var data1 = [];
        var a = 0,
            b = 0,
            c = 0,
            d = 0;
        rs.data.forEach(function (ele) {
          if (ele.instance == "0") {
            c = ele.value;
          }

          if (ele.instance == "2") {
            a = ele.value;
          }

          if (ele.instance == "2" || ele.instance == "3") {
            b += ele.value * 1;
            var item = {
              value: ele.value,
              name: obj[ele.instance]
            };
            data.push(item);
          }

          if (ele.instance == "0" || ele.instance == "1") {
            d += ele.value * 1;
            var item = {
              value: ele.value,
              name: obj[ele.instance]
            };
            data1.push(item);
          }
        });
        var echart2 = {
          percent: Math.ceil(c / d * 100) + "%" || false,
          data1: data1
        };
        target.trigger("echart2", echart2);
        var option = {
          // 下面的标题
          // title: {
          //   text: "标题",
          //   textStyle: {
          //     color: "#ffffff",
          //     fontSize: 12
          //   },
          //   left: "center",
          //   //   bottom: "75"
          // },
          legend: {
            orient: "vertical",
            textStyle: {
              color: "#fff"
            },
            data: ['已完成智能决策项目数', '待完成智能决策项目数']
          },
          //鼠标hover的提示
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          //圆环的颜色：蓝色，黄色，, 橙色红色,
          color: ['#c3bfc5', '#a12ecc'],
          grid: {//   top: 'top'
          },
          series: [{
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
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
            data: data
          }, {
            name: '',
            type: 'pie',
            clockWise: false,
            hoverAnimation: true,
            radius: ['50%', '50%'],
            center: ['50%', '55%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{c}: {b} "
            },
            data: [{
              label: {
                normal: {
                  formatter: 11,
                  textStyle: {
                    color: '#ffffff',
                    fontSize: 18
                  }
                }
              },
              value: "占有率",
              name: Math.ceil(a / b * 100) + "%" || false
            }]
          }]
        };
        target.render(option);
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/advanceEchart_16.js":
/*!********************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/advanceEchart_16.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      target.off("echart2");
      target.on("echart2", function (data) {
        var option = {
          // 下面的标题
          // title: {
          //   text: "标题",
          //   textStyle: {
          //     color: "#ffffff",
          //     fontSize: 12
          //   },
          //   left: "center",
          //   //   bottom: "75"
          // },
          legend: {
            textStyle: {
              color: "#fff"
            },
            orient: "vertical",
            data: ['智能决策项目数', '人工决策项目数']
          },
          //鼠标hover的提示
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color: ["#4f90e0", '#b4b9be'],
          grid: {//   top: 'top'
          },
          series: [{
            name: '',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '55%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
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
            data: data.data1
          }, {
            name: '',
            type: 'pie',
            clockWise: false,
            hoverAnimation: true,
            radius: ['50%', '50%'],
            center: ['50%', '55%'],
            label: {
              normal: {
                position: 'center'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{c}: {b} "
            },
            data: [{
              label: {
                normal: {
                  // formatter: 11,
                  textStyle: {
                    color: '#ffffff',
                    fontSize: 18
                  }
                }
              },
              value: "占有率",
              name: data.percent
            }]
          }]
        };
        target.render(option);
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/advanceEchart_17.js":
/*!********************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/advanceEchart_17.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var repeatData = target.$repeatData;
      var workObj = target.getParameter("id");
      option = {
        // 下面的标题
        // title: {
        //     text: repeatData.province,
        //     textStyle: {
        //         color: "#ffffff",
        //         fontSize:12
        //     },
        //     left: "center",
        //     bottom: "75"
        // },
        //鼠标hover的提示
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        //圆环的颜色：蓝色，黄色，, 橙色红色,
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
          data: [// {value: repeatData.data[0].value, name: repeatData.data[0].name},
          {
            value: 9,
            name: "状态维护异常"
          }, {
            value: 12,
            name: "在线注意"
          }, {
            value: 10,
            name: "在线警告"
          }]
        }, {
          name: '',
          type: 'pie',
          clockWise: false,
          hoverAnimation: true,
          radius: ['50%', '50%'],
          center: ['50%', '36%'],
          label: {
            normal: {
              position: 'center'
            }
          },
          tooltip: {
            // show: false
            // show:true
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} "
          },
          data: [// {
          //     label: {
          //         normal: {
          //             formatter: repeatData.data[4].value,
          //             textStyle: {
          //                 color: '#ffffff',
          //                 fontSize: 18,
          //                 // fontWeight: 'bold'
          //             }
          //         }
          //     }
          // },
          {
            label: {
              normal: {
                formatter: "100%",
                textStyle: {
                  color: '#ffffff',
                  fontSize: 18 // fontWeight: 'bold'

                }
              }
            },
            value: "异常处理有效率",
            name: "100%"
          }]
        }]
      };
      target.render(option);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/advanceEchart_8.js":
/*!*******************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/advanceEchart_8.js ***!
  \*******************************************************************************/
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
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/block_0.js":
/*!***********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/block_0.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target; // 判断当前的角色id是智能产线决策者 则显示这部分内容

      var getCurrentUser = target.getCurrentUser(); //   if (getCurrentUser.usercurrentRoleID == 496878991490168) {
      //     target.setInvisible(false);
      //   } else {
      //     target.setInvisible(true);
      //   }
      //当前角色为2050集中监控者的时候显示

      if (getCurrentUser.usercurrentRoleID == 251465483498833) {
        target.setInvisible(true); //true 为显示
      } else {
        target.setInvisible(false);
      } //调试开启
      // target.setInvisible(true);//true 为显示
      //   target.on("queryTabelList11", function(args) {
      //     if (args.val == 1) {
      //       target.setInvisible(false);
      //     } else if (args.val == 2 && getCurrentUser.usercurrentRoleID != 496878991490168) {
      //       target.setInvisible(true);
      //     }
      //   })

    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/block_2.js":
/*!***********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/block_2.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target; // 判断当前的角色id是智能产线决策者 则显示这部分内容

      var getCurrentUser = target.getCurrentUser();

      if (getCurrentUser.usercurrentRoleID == 496878991490168) {
        target.setInvisible(false);
      } else {
        target.setInvisible(true);
      } //当前角色为2050集中监控者的时候隐藏


      if (getCurrentUser.usercurrentRoleID == 251465483498833) {
        target.setInvisible(false);
      } else {
        target.setInvisible(true);
      }

      target.on("queryTabelList11", function (args) {
        if (args.val == 1) {
          target.setInvisible(false);
        } else if (args.val == 2 && getCurrentUser.usercurrentRoleID != 496878991490168) {
          target.setInvisible(true);
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/block_3.js":
/*!***********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/block_3.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target; // 判断当前的角色id是智能产线决策者 则显示这部分内容

      var getCurrentUser = target.getCurrentUser();

      if (getCurrentUser.usercurrentRoleID == 496878991490168) {
        target.setInvisible(true);
      } else {
        target.setInvisible(false);
      }

      target.on("queryTabelList11", function (args) {
        if (args.val == 1) {
          target.setInvisible(false);
        } else if (args.val == 2 && getCurrentUser.usercurrentRoleID == 496878991490168) {
          target.setInvisible(true);
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/block_4.js":
/*!***********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/block_4.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      setTimeout(function () {
        target.setInvisible(false);
      }, 2000);
      target.on("queryTabelList11", function (args) {
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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_1.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_1.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var task1 = {
        val: 1
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
                task1.val = 2;
              } else if (currStatus == "") {
                currStatus = "today";
                target.trigger("queryTabelList11", task1);
                task1.val = 1;
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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_10.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_10.js ***!
  \****************************************************************************/
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

          wrap1.css("width", "80%");
          wrap1.css("justify-content", "center");
          wrap1.css("align-items", "center");
          wrap1.css("display", "-webkit-flex");
          wrap1.css("margin", "0 auto");
          var sub1 = $("<div></div>");
          sub1.css("height", "16px");
          sub1.css("width", "33px");
          sub1.css("background-color", "#d20006"); //   sub1.css("border", "1px solid rgba(250,250,250,.3)");

          sub1.css("margin-right", "8px");
          var sub2 = $("<div></div>");
          sub2.text("");
          var sub3 = $("<div></div>"); //   sub1.text("危险告警数");

          sub3.css("height", "16px");
          sub3.css("width", "33px");
          sub3.css("background-color", "#ee6b1c"); //   sub3.css("border", "1px solid rgba(250,250,250,.3)");

          sub3.css("margin-left", "15px");
          sub3.css("margin-right", "8px"); //   sub3.css("margin","0 auto");

          var sub4 = $("<div></div>");
          sub4.text("在线警告");
          var sub5 = $("<div></div>"); //   sub1.text("危险告警数");

          sub5.css("height", "16px");
          sub5.css("width", "33px");
          sub5.css("background-color", "#efd80b"); //   sub5.css("border", "1px solid rgba(250,250,250,.3)");

          sub5.css("margin-left", "15px");
          sub5.css("margin-right", "8px"); //   sub5.css("margin","0 auto");

          var sub6 = $("<div></div>");
          sub6.text("在线注意");
          var sub7 = $("<div></div>"); //   sub1.text("危险告警数");

          sub7.css("height", "16px");
          sub7.css("width", "33px");
          sub7.css("background-color", "#A355F9"); //   sub7.css("border", "1px solid rgba(250,250,250,.3)");

          sub7.css("margin-left", "15px");
          sub7.css("margin-right", "8px"); //   sub7.css("margin","0 auto");

          var sub8 = $("<div></div>");
          sub8.text("状态维护异常"); //   sub1.css("position", "absolute");
          //   sub.css("top", "30px");
          //   sub1.css("left", "40px");
          //   sub.css("color", "#aaa");
          //   sub.css("font-size", "10px");
          //   wrap1.append(sub1);

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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_12.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_12.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  bootstrap: true,
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var workObj = target.getParameter("id"); //

      var filter = {
        "layer": 1,
        "modelId": 302,
        "domains": workObj
      };
      target.getDomainsByFilter(filter, function (returnData) {
        var baseName = [];
        var mountain = [];
        returnData = returnData.reduce(function (a, b) {
          if (b.values.hide) {
            return a;
          }

          var find = returnData.find(function (e) {
            return e.id == b.parentID;
          });

          if (!find) {
            a.push(b);
          }

          ;
          return a;
        }, []);

        for (var i = 0; i < returnData.length; i++) {
          baseName.push(returnData[i].name);
          mountain.push(returnData[i].id);
        }

        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": mountain,
          "kpiCodes": [6106]
        }];
        target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
          var data = returnData.data;
          var synthesize = [];
          var capacity = [];
          var big = [];

          for (var j = 0; j < mountain.length; j++) {
            for (var i = 0; i < data.length; i++) {
              //
              if (data[i].nodeId == mountain[j]) {
                if (data[i].instance == '1,all,values' && data[i].nodeId == 554925002946086) {
                  synthesize.push(100);
                } else if (data[i].instance == '1,all,values') {
                  synthesize.push(data[i].value.toFixed(0));
                } else if (data[i].instance == '2,all,values' && data[i].nodeId == 554925002946086) {
                  capacity.push(100);
                } else if (data[i].instance == '2,all,values') {
                  capacity.push(data[i].value.toFixed(0));
                } else if (data[i].instance == '3,all,values') {
                  big.push(data[i].value.toFixed(0));
                }
              }
            }

            var jlength = j + 1;

            if (synthesize.length != jlength) {
              var add = jlength - synthesize.length;

              for (var z = 0; z < add; z++) {
                synthesize.push('0');
              }
            }

            if (capacity.length != jlength) {
              var add = jlength - capacity.length;

              for (var x = 0; x < add; x++) {
                capacity.push('0');
              }
            }

            if (big.length != jlength) {
              var add = jlength - big.length;

              for (var y = 0; y < add; y++) {
                big.push('0');
              }
            }
          }

          var column = ['区域', '综合诊断准确率', '智能诊断准确率', '大数据预警准确率'];
          var inx = 0;
          var ctrlGroups = [column.map(function (elem) {
            var a = {
              type: "label",
              value: elem,
              // class : inx ? (inx == 3 ?"col-md-4" : "col-md-3") : "col-md-2",
              "class": "col-md-3",
              style: {
                "text-align": "center"
              }
            };
            inx++;
            return a;
          })]; //var row = ['宝山','东山','天山','湛江'];

          var row = baseName;

          for (var i in row) {
            var arr = [{
              type: "label",
              value: row[i],
              "class": "col-md-3",
              //   class : "col-md-2",
              style: {
                // "text-align" : "left"
                "text-align": "center"
              }
            }];
            var index = i;

            for (var i in column.slice(1, 4)) {
              if (i == '0') {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  //value : rnd,
                  value: synthesize[index],
                  "class": i == 2 ? "col-md-3" : "col-md-3"
                }]);
              } else if (i == 1) {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  value: capacity[index],
                  "class": i == 2 ? "col-md-3" : "col-md-3"
                }]);
              } else if (i == 2) {
                Array.prototype.push.apply(arr, [{
                  shownumber: true,
                  type: "progressbar",
                  value: big[index],
                  "class": i == 2 ? "col-md-3" : "col-md-3" //   class : i == 2 ? "col-md-4" : "col-md-4"

                }]);
              }
            }

            ctrlGroups.push(arr);
          }

          ;
          target.render(ctrlGroups);
        });
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_18.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_18.js ***!
  \****************************************************************************/
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
      }]]; //   target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_20.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_20.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var global = event.global;
      var label = target.$repeatData.province; //   

      var description = target.$repeatData.description || 0;
      var ctrlGroups = [[{
        type: "jquery",
        render: function render() {
          var wrap = $("<div></div>");
          wrap.css("height", "20px"); //   wrap.css("border", "1px solid rgba(250,250,250,.3)");
          //   wrap.css("background-color", "rgba(0,100,250,.1)");

          var title = $("<div></div>");
          title.text(label);
          title.css("font-size", "12px");
          title.css("color", "#fff");
          title.css("position", "static");
          title.css("top", "12px");
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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_22.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_22.js ***!
  \****************************************************************************/
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
            wrap.css("height", "40px"); //wrap.css("height", "35px");

            wrap.css("width", "40px");
            wrap.css("margin", "auto");
            bar.css("width", "10px"); //bar.css("height", "25px");

            bar.css("height", "40px");
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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_24.js":
/*!****************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_24.js ***!
  \****************************************************************************/
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
            wrap.css("height", "40px");
            wrap.css("width", "40px");
            wrap.css("margin", "auto");
            bar.css("width", "10px");
            bar.css("height", "40px");
            bar.css("background-color", colors[index]);
            bar.css("position", "absolute");
            wrap.css("position", "relative");
            bar.css("left", "50px");
            wrap.append(bar);
            title.css("text-align", "right");
            title.css("color", "#a0a0a0");
            title.css("margin-right", "-50px");
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
      }; //  


      for (var i = target.$repeatData.data.length - 1; i >= 0; i--) {
        ctrlGroups.push(createTr(i, target.$repeatData.data[i]));
      }

      event.target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_5.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_5.js ***!
  \***************************************************************************/
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

/***/ "./app-views/views/177280852260000/production/content/ctrlgroup_9.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/ctrlgroup_9.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  bootstrap: true,
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var workObj = target.getParameter("id"); //

      var filter = {
        "layer": 1,
        "modelId": 302,
        "domains": workObj
      };

      function getFakeData(rowName, columnName) {
        var rows = ['加热炉', '粗轧E1/R1', '卷取', '精轧机组', '层流冷却系统'];

        if (columnName == '综合诊断准确率') {
          if (rowName == '加热炉') {
            return 83;
          } else if (rowName == '粗轧E1/R1') {
            return 81;
          } else if (rowName == '卷取') {
            return 83;
          } else if (rowName == '精轧机组') {
            return 85;
          } else if (rowName == '层流冷却系统') {
            return 82;
          } else if (rowName == 'Z301皮带') {
            return 81;
          } else if (rowName == 'Y302皮带') {
            return 80;
          } else if (rowName == 'TRT发电机组') {
            return 85;
          } else if (rowName == 'X303皮带') {
            return 83;
          } else if (rowName == 'X302皮带') {
            return 84;
          } else if (rowName == 'Y301皮带') {
            return 82;
          } else if (rowName == '原料系统') {
            return 83;
          } else if (rowName == '中控电气室') {
            return 80;
          } else if (rowName == '主排电气室') {
            return 85;
          } else if (rowName == '主排系统') {
            return 83;
          }
        } else if (columnName == '智能诊断准确率') {
          if (rowName == '加热炉') {
            return 75 * 1.05;
          } else if (rowName == '粗轧E1/R1') {
            return 73 * 1.05;
          } else if (rowName == '卷取') {
            return 72 * 1.05;
          } else if (rowName == '精轧机组') {
            return 71 * 1.05;
          } else if (rowName == '层流冷却系统') {
            return 74 * 1.05;
          } else if (rowName == 'Z301皮带') {
            return 69 * 1.05;
          } else if (rowName == 'Y302皮带') {
            return 75 * 1.05;
          } else if (rowName == 'TRT发电机组') {
            return 79 * 1.05;
          } else if (rowName == 'X303皮带') {
            return 70 * 1.05;
          } else if (rowName == 'X302皮带') {
            return 76 * 1.05;
          } else if (rowName == 'Y301皮带') {
            return 65 * 1.05;
          } else if (rowName == '原料系统') {
            return 70 * 1.05;
          } else if (rowName == '中控电气室') {
            return 72 * 1.05;
          } else if (rowName == '主排电气室') {
            return 75 * 1.05;
          } else if (rowName == '主排系统') {
            return 70 * 1.05;
          }
        } else if (columnName == '大数据预警准确率') {
          if (rowName == '加热炉') {
            return 90;
          }
        }

        return 0;
      }

      target.getDomainsByFilter(filter, function (returnData) {
        var baseName = [];
        var mountain = [];
        returnData = returnData.reduce(function (a, b) {
          if (b.values.hide) {
            return a;
          }

          var find = returnData.find(function (e) {
            return e.id == b.parentID;
          });

          if (!find) {
            a.push(b);
          }

          return a;
        }, []);

        for (var i = 0; i < returnData.length; i++) {
          baseName.push(returnData[i].name);
          mountain.push(returnData[i].id);
        }

        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": mountain,
          "kpiCodes": [6106]
        }];
        target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
          var data = returnData.data;
          var synthesize = [];
          var capacity = [];
          var big = [];

          for (var j = 0; j < mountain.length; j++) {
            for (var i = 0; i < data.length; i++) {
              //
              if (data[i].nodeId == mountain[j]) {
                if (data[i].instance == '1,all,values') {
                  synthesize.push(data[i].value.toFixed(0));
                } else if (data[i].instance == '2,all,values') {
                  capacity.push(data[i].value.toFixed(0));
                } else if (data[i].instance == '3,all,values') {
                  big.push(data[i].value.toFixed(0));
                }
              }
            }

            var jlength = j + 1;

            if (synthesize.length != jlength) {
              var add = jlength - synthesize.length;

              for (var z = 0; z < add; z++) {
                synthesize.push('0');
              }
            }

            if (capacity.length != jlength) {
              var add = jlength - capacity.length;

              for (var x = 0; x < add; x++) {
                capacity.push('0');
              }
            }

            if (big.length != jlength) {
              var add = jlength - big.length;

              for (var y = 0; y < add; y++) {
                big.push('0');
              }
            }
          }

          var column = ['区域', '综合诊断准确率', '智能诊断准确率', '大数据预警准确率'];
          var inx = 0;
          var ctrlGroups = [column.map(function (elem) {
            var a = {
              type: "label",
              value: elem,
              "class": inx ? inx == 3 ? "col-md-4" : "col-md-3" : "col-md-2",
              style: {
                "text-align": "center"
              }
            };
            inx++;
            return a;
          })]; //var row = ['宝山','东山','天山','湛江'];

          var row = baseName;

          for (var i in row) {
            var arr = [{
              type: "label",
              value: row[i],
              //class : "col-md-3",
              "class": "col-md-2",
              style: {
                "text-align": "left"
              }
            }];
            var rowName = row[i];
            column.slice(1, 4).forEach(function (item, index) {
              var val = getFakeData(rowName, item).toFixed(0);
              arr.push({
                type: "progressbar",
                shownumber: true,
                value: val,
                "class": index == 2 ? "col-md-4" : "col-md-3"
              });
            });
            /*var index = i;
            for (var i in column.slice(1, 4)) {
              if (i == '0') {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  value: synthesize[index],
                  class: i == 2 ? "col-md-3" : "col-md-3"
                }])
              } else if (i == 1) {
                Array.prototype.push.apply(arr, [{
                  type: "progressbar",
                  shownumber: true,
                  value: capacity[index],
                  class: i == 2 ? "col-md-3" : "col-md-3"
                }])
              } else if (i == 2) {
                Array.prototype.push.apply(arr, [{
                  shownumber: true,
                  type: "progressbar",
                  value: big[index],
                  class: i == 2 ? "col-md-4" : "col-md-4"
                }])
              }
             }*/

            ctrlGroups.push(arr);
          }

          ;
          target.render(ctrlGroups);
        });
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/dataTableAdvance_7.js":
/*!**********************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/dataTableAdvance_7.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; //   var resDic = target.getResourceDic;

      var DIC = target.getRootScope()['myDicts']; //--------------------------自定义输入-----------------------------

      function getTableData1(params, pageRequest, cb) {
        target.postService("alertQueryFlexService", "getAlertByPage", [params, pageRequest], function (tc) {
          var alerts = tc.data.data;
          cb(tc.data.data, tc.data.total);
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas, e) {
        var param = {
          "domain": "/0/515445641576227/515445641576264/515445641576272/554925002946064/",
          "severities": "1,2,3,4",
          "states": "0,5,-100"
        };
        target.render({
          data: datas,
          params: param,
          paging: getTableData1,
          format: [{
            "name": "报警来源",
            "value": "appName",
            "type": "text",
            //"width" : 300
            "format": function format(elem) {
              if (elem == 1) {
                return "在线预警";
              } else if (elem == 2) {
                return "智能诊断";
              } else if (elem == 3) {
                return "大数据分析";
              } else {
                return "离线诊断";
              }
            }
          }, {
            "name": "报警消息",
            "value": "message",
            "type": "text"
          }, {
            "name": "设备名称",
            "value": "devName",
            "type": "text"
          }, {
            "name": "报警状态",
            "type": "text",
            "value": "state",
            "format": function format(elem) {
              if (elem == -100) {
                return "新产生";
              } else if (elem == 0) {
                return "新产生";
              } else if (elem == 5) {
                return "已确认";
              } else {
                return "";
              }
            }
          }, {
            "name": "报警级别",
            "type": "priority",
            "value": "severity",
            "format": function format(elem) {
              if (elem == 2) {
                return "注意";
              } else if (elem == 3) {
                return "异常";
              } else if (elem == 4) {
                return "警告";
              } else {
                return "正常";
              }
            }
          }, {
            "name": "首次报警时间",
            "value": "firstArisingTime",
            "type": "date"
          }, {
            "name": "报警次数",
            "value": "count"
          }, {
            "name": "最近报警时间",
            "value": "arisingTime",
            "type": "date"
          }, {
            "name": "操作",
            "type": "buttonGroup",
            "content": [{
              type: "button",
              label: "过程跟踪",
              icon: "glyphicon glyphicon-cog",
              btnclass: "btn btn-primary",
              on: {
                click: function click(elem) {
                  event.target.postService("ticketTaskService", "getDealTicketListByPage", [{
                    "attrs": {
                      "origId": [elem.row.alertId]
                    },
                    "categorys": "290,280"
                  }, {
                    "start": 0,
                    "length": 10
                  }], function (dt) {
                    if (dt.data.data.length > 0) {
                      target.navigateToTracker(dt.data.data[0].ticketNo);
                    } else {
                      target.growl("告警未转工单", "warning");
                    }
                  });
                }
              }
            }]
          }]
        });
      };

      render([]);
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/repeater_11.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/repeater_11.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target; //   target.getDomainAreaLineTree(function(domaintree){

      var workObj = target.getParameter("id");
      var filter = {
        "layer": 1,
        "modelId": 301,
        "domains": workObj
      };
      target.getDomainsByFilter(filter, function (domaintree) {
        // 
        // domaintree = domaintree[0];
        // domaintree.children = domaintree.domainInfos;
        // domaintree.children.sort(function(a,b){
        //   var y1 = a.$attr("values/latitude");
        //   var y2 = b.$attr("values/latitude");
        //   return y2 - y1;
        // });
        // var length = domaintree.children.length
        // 六座山
        // var domains = domaintree.children;
        // var domains = domaintree.children;
        var domains = domaintree;
        var description = [];
        var nodeIds = domaintree.map(function (elem) {
          description.push(elem.description);
          return elem.id;
        });
        var params = ["kpi", {
          "isRealTimeData": true,
          "includeInstance": true,
          "nodeIds": nodeIds,
          "kpiCodes": [6007]
        }]; // 

        target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
          var kpiNames = ['点检异常数', '注意告警数', '警告告警数', '危险告警数', "异常处理有效率"]; // var kpiNames = ['正常','注意','警告'];
          //var kpiIds = ['severity,4', 'severity,3', 'severity,2','description']

          var newdata = returnData.data;
          var data = [];

          for (var i = 0; i < domains.length; i++) {
            for (var j = 0; j < newdata.length; j++) {
              if (domains[i].id == newdata[j].nodeId) {
                data.push(newdata[j]);
              }
            }
          }

          ; // 
          // 

          var denominator = [];
          var numerator = [];

          for (var i = 0; i < data.length; i++) {
            if (data[i].instance == "denominator") {
              denominator.push(data[i]);
            } else if (data[i].instance == "numerator") {
              numerator.push(data[i]);
            }
          } // 
          // 


          var test1 = [];
          var test2 = [];
          var test3 = [];

          for (var i = 0; i < denominator.length; i++) {
            for (var j = 0; j < numerator.length; j++) {
              if (denominator[i].nodeId == numerator[j].nodeId) {
                test1.push(denominator[i].value);
                test2.push(numerator[j].value);
                var num = Math.round(numerator[j].value / denominator[i].value * 10000 / 100.00, 0) + "%";

                if (num == "NaN%") {
                  num = "0%";
                }

                test3.push(num);
              }
            }
          }

          var all = [];
          var notice = [];
          var warning = [];
          var risk = [];
          var percent = test3; //对数据的处理   

          for (var i = 0; i < data.length; i++) {
            if (data[i].instance == "1") {
              all.push(data[i].value);
            } else if (data[i].instance == "2") {
              notice.push(data[i].value);
            } else if (data[i].instance == "3") {
              warning.push(data[i].value);
            } else if (data[i].instance == "4") {
              risk.push(data[i].value);
            }
          } //     


          var list = domains.map(function (domain, index) {
            // 
            // 
            var num = index;
            var rs = {};
            rs.province = domain.label;
            rs.data = kpiNames.map(function (kp, index) {
              var r = {};
              r.name = kpiNames[index];

              if (index == 0) {
                //点检数据
                r.value = all[num];
              } else if (index == 1) {
                //注意台数
                r.value = notice[num];
              } else if (index == 2) {
                //告警台数
                r.value = warning[num];
              } else if (index == 3) {
                //危险数据
                r.value = risk[num];
              } else if (index == 4) {
                //异常处理有效率
                r.value = percent[num];
              }

              return r;
            });
            return rs;
          });
          target.render(list);
        });
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/repeater_13.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/repeater_13.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var id = target.getParameter("id");
      target.getDomainAreaLineTree(function (find) {
        if (find) {
          var label = find.label;
          var description = find.description;
          var domains = [];
          domains.push(label);
          var params = ["kpi", {
            "isRealTimeData": true,
            "includeInstance": true,
            "nodeIds": [id],
            "kpiCodes": [6100]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
            var kpiNames = ['正常', '注意', '警告', '监测台数', '重要台数', '数据采集点'];
            var data = returnData.data;
            var all = [];
            var normal = [];
            var notice = [];
            var warning = [];
            var risk = [];
            var data = returnData.data; //对数据的处理

            for (var i = 0; i < data.length; i++) {
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

            if (all.length != 1) {
              all.push('0');
            }

            if (notice.length != 1) {
              notice.push('0');
            }

            if (normal.length != 1) {
              normal.push('0');
            }

            if (warning.length != 1) {
              warning.push('0');
            }

            if (risk.length != 1) {
              risk.push('0');
            }

            var params = ["kpi", {
              "isRealTimeData": true,
              "includeInstance": true,
              "nodeIds": [id],
              "kpiCodes": [6104]
            }];
            target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
              gather = returnData.data[0].value;
              var list = domains.map(function (domain, index) {
                var num = index;
                var rs = {};
                rs.province = label;
                rs.data = kpiNames.map(function (kp, index) {
                  var r = {};
                  r.name = kpiNames[index];

                  if (index == 0) {
                    r.value = normal[num];
                  } else if (index == 1) {
                    r.value = notice[num];
                  } else if (index == 2) {
                    r.value = warning[num];
                  } else if (index == 3) {
                    r.value = all[num];
                  } else if (index == 4) {
                    r.value = description;
                  } else if (index == 5) {
                    r.value = gather;
                  }

                  return r;
                });
                return rs;
              });
              target.render(list);
            });
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/repeater_14.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/repeater_14.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var id = target.getParameter("id");
      target.getDomainAreaLineTree(function (find) {
        if (find) {
          var label = find.label;
          var description = find.description;
          var domains = [];
          domains.push(label);
          var params = ["kpi", {
            "isRealTimeData": true,
            "includeInstance": true,
            "nodeIds": [id],
            "kpiCodes": [6006]
          }];
          target.postService("kpiDataFlexService", "getKpiValueList", params, function (returnData) {
            var kpiNames = ['正常', '注意', '警告'];
            var normal = [];
            var notice = [];
            var warning = [];
            var data = returnData.data.sort();
            var newdata = [];

            for (var i = 0; i < data.length; i++) {
              if (data[i].instance.split(",")[1] == "1") {
                for (var j = 0; j < data.length; j++) {
                  if (data[i].instance.split(",")[0] == data[j].instance.split(",")[0]) {
                    newdata.push(data[j]);
                  }
                }
              }
            }

            ;

            for (var i = 0; i < newdata.length; i++) {
              if (newdata[i].instance.split(",")[1] == "1") {
                normal.push(newdata[i].value);
              } else if (newdata[i].instance.split(",")[1] == "2") {
                notice.push(newdata[i].value);
              } else if (newdata[i].instance.split(",")[1] == "3") {
                warning.push(newdata[i].value);
              }
            }

            var datas = [];

            for (var i = 0; i < newdata.length; i++) {
              var datas22 = [];

              if (newdata[i].instance.split(",")[1] == "1") {
                datas22.push(newdata[i].instance.split(",")[0]);
              } //


              if (datas22[0]) {
                datas.push(datas22[0]);
              } // datas.push(datas22[0]);

            }

            var list11 = [];

            for (var i = 0; i < datas.length; i++) {
              var label = {
                label: datas[i]
              };
              list11.push(label);
            }

            var list = list11.map(function (domain, index) {
              var num = index;
              var rs = {};
              rs.province = list11[index].label;
              rs.data = kpiNames.map(function (kp, index) {
                var r = {};
                r.name = kpiNames[index];

                if (index == 0) {
                  r.value = normal[num];
                } else if (index == 1) {
                  r.value = notice[num];
                } else if (index == 2) {
                  r.value = warning[num];
                }

                return r;
              });
              return rs;
            });
            target.render(list);
          });
        }
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/row_19.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/row_19.js ***!
  \**********************************************************************/
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

/***/ "./app-views/views/177280852260000/production/content/row_21.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/row_21.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "click": function click(event) {
      var ticketNo = event.data.values.ticketNo;
      event.tools.location.href = '../../app-oc/index.html#/workOrderTimeLine/' + ticketNo;
    }
  } //   "format" : [
  //     {
  //       "name": "工单号",
  //       "value": "{item:ticketNo}",
  //       "type": "text"
  //     },
  //     {
  //       "name": "内容",
  //       "value": "{item:message}",
  //       "type": "text"
  //     },
  //     {
  //       "name": "紧急度",
  //       "value": "{item:priorityCode}",
  //       "type": "priority"
  //     }
  //   ]

};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/svgchart_23.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/svgchart_23.js ***!
  \***************************************************************************/
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
          height: "90%"
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

/***/ "./app-views/views/177280852260000/production/content/svgchart_25.js":
/*!***************************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/svgchart_25.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function init(event) {
      var target = event.target;
      var repeatData = target.$repeatData;

      if (repeatData) {
        var barOption = {
          title: {
            text: 'svgChart入门示例'
          },
          //   grid : {
          //       top : "5%",
          //       left : "10%",
          //       height : "90%"
          //   },
          //   legend: {
          //     data: ['销量']
          //   },
          //   xAxis: {
          //     show : false,
          //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          //   },
          //   yAxis: {
          //       show : false
          //   },
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
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/content/topo_6.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/177280852260000/production/content/topo_6.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
module.exports = {
  "on": {
    "init": function init(event) {
      var target = event.target;
      var id = target.getParameter("id");
      var main = target.getParameter("main");
      var initcount = 0;
      target.getDomainAreaLineTree_alertStatus(function (find) {
        find.getChildren(function (node, i, l) {
          return l < 2 && (node.values ? node.values.hide != true : true);
        }, true).then(function (children) {
          var viewId = find.$attr("values/view/viewId");

          if (initcount == 0) {
            initcount++;
            target.trigger("loadDevicesFromProjectIds", children);
            target.getViewById(viewId, function (view) {
              var content = view.content;
              var json = JSON.parse(content);
              target.render(json);
              target.addCam();
              target.on("$loadCiKpiComplete", function (cells) {
                for (var i in cells) {
                  cells[i].attr("circle/opacity", 0);
                  cells[i].attr("text/opacity", 0);
                  cells[i].attr("rect/opacity", 0);
                }

                var createAlarm = function createAlarm(index, node) {
                  var cell = cells.find(function (cell) {
                    var text = cell.attr("text/text") || "",
                        label = node.label;

                    if (!text) {
                      return false;
                    }

                    text = text.toLowerCase();
                    label = label.toLowerCase();
                    return label.indexOf(text) != -1;
                  }) || cells[index];
                  var position;

                  if (cell) {
                    if (cell.position) {
                      position = cell.position();
                    }

                    ;
                  } else {
                    return;
                  }

                  position = position || {
                    x: Math.floor(100 + Math.random() * 300),
                    y: Math.floor(100 + Math.random() * 200)
                  };
                  target.createAlarm(node.label, function (ins) {
                    ins.setPos(position);
                    ins.setAlarmStatus(node.getAlertState());
                    ins.on("mouseover", function (event) {
                      node.getChildren(function (n, i, l) {
                        return l < 2;
                      }).then(function (children) {
                        children.length > 0 ? target.createDeviceDropList(children, position, {
                          click: function click(item) {
                            var params = [];
                            item.getPathAndShowTreeLocation().then(function (d) {
                              var controller = d.controller,
                                  showTree = d.showTree,
                                  location = d.location;

                              if (controller) {
                                target.refresh("prod_" + controller, {
                                  id: item.id,
                                  showTree: showTree,
                                  viewId: null
                                });
                                return;
                              }

                              params.push("dashboard");
                              params.push({
                                id: item.id,
                                showTree: showTree,
                                sensor: "null",
                                index: location,
                                startdate: "null",
                                enddate: "null"
                              });
                              target.refresh.apply(null, params);
                            });
                          },
                          titleClick: function titleClick() {
                            var params = [];
                            node.getPathAndShowTreeLocation().then(function (d) {
                              var controller = d.controller,
                                  showTree = d.showTree,
                                  location = d.location;

                              if (controller) {
                                target.refresh("prod_" + controller, {
                                  id: node.id,
                                  showTree: showTree,
                                  viewId: null
                                });
                                return;
                              }

                              params.push("dashboard");
                              params.push({
                                id: node.id,
                                sensor: "null",
                                showTree: showTree,
                                index: location,
                                startdate: "null",
                                enddate: "null"
                              });
                              target.refresh.apply(null, params);
                            });
                          }
                        }) : null;
                      });
                    });
                  });
                };

                for (var i in children) {
                  createAlarm(i, children[i]);
                }
              });
            });
          }
        });
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/177280852260000/production/json.js":
/*!************************************************************!*\
  !*** ./app-views/views/177280852260000/production/json.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 决策者内页 ] - 177280852260000 **/
psdefine(function () {
  return {
    "label": "产线",
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
          "background-color": "rgba(250,250,250,0)",
          "height": "calc(100vh - 100px)"
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
                    },
                    "style": {}
                  }],
                  "col": 8
                }, {
                  "type": "column",
                  "children": [{
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_5.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_5.js")
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
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "8px",
                  "margin": "5px  5px  10px 5px"
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
                      "margin": "5px",
                      "padding": "0",
                      "font-size": "14px",
                      "font-weight": "bold"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": ["kpi", "{object:kpiQueryModel}"],
                      "expression": "expression = {\n on: {\n  init: function(event) {\n   var target = event.target;\n   var workObj = target.getParameter(\"id\");\n   target.getDomainAreaLineTree(function(find) {\n    if (find) {\n     var label = find.label;\n    }\n    target.setText(label);\n   });\n  }\n }\n}"
                    },
                    "parameters": {}
                  }, {
                    "label": "组态视图",
                    "type": "topo",
                    "source": "TOPO",
                    "advance": {
                      "variable": "",
                      "expression": __webpack_require__(/*! ./content/topo_6.js */ "./app-views/views/177280852260000/production/content/topo_6.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "12px",
                      "background-repeat": "no-repeat"
                    },
                    "viewId": 469973748826064,
                    "parameters": {},
                    "hooks": {
                      "hooks": {}
                    }
                  }]
                }],
                "parameters": {}
              }, {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "5px",
                  "margin": "5px"
                },
                "advance": {
                  "expression": __webpack_require__(/*! ./content/block_0.js */ "./app-views/views/177280852260000/production/content/block_0.js")
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
                      "font-size": "12px",
                      "font-weight": "bold"
                    },
                    "advance": {
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"报警列表\")\n        }\n    }\n}"
                    },
                    "data": {
                      "modelType": 300,
                      "resfilltype": "parameter",
                      "modelDisable": true
                    }
                  }, {
                    "label": "控制板1",
                    "type": "block",
                    "source": "BLOCK",
                    "style": {
                      "margin": "5px",
                      "padding": "10px",
                      "overflow-y": "auto",
                      "overflow-x": "hidden",
                      "border": "0"
                    },
                    "advance": {
                      "expression": {}
                    },
                    "children": [{
                      "type": "column",
                      "col": 12,
                      "children": [{
                        "label": "高级列表",
                        "type": "dataTableAdvance",
                        "source": "DATATABLEADVANCE",
                        "parameters": {
                          "col": 1,
                          "pageSize": 5,
                          "listbottom": "standard"
                        },
                        "advance": {
                          "expression": __webpack_require__(/*! ./content/dataTableAdvance_7.js */ "./app-views/views/177280852260000/production/content/dataTableAdvance_7.js")
                        },
                        "style": {
                          "margin": "5px",
                          "font-size": "12px"
                        },
                        "url": "images/map/map1.png"
                      }]
                    }],
                    "url": "images/map/map1.png",
                    "parameters": {}
                  }]
                }],
                "parameters": {}
              }, {
                "label": "控件组",
                "type": "ctrlgroup",
                "source": "CTRLGROUP",
                "advance": {
                  "expression": __webpack_require__(/*! ./content/ctrlgroup_1.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_1.js")
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
                  "padding": "5px",
                  "margin": "5px"
                },
                "advance": {
                  "expression": __webpack_require__(/*! ./content/block_2.js */ "./app-views/views/177280852260000/production/content/block_2.js")
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "type": "row",
                    "source": "ROW",
                    "advance": {
                      "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                    },
                    "parameters": {
                      "alignment": "bootstrap"
                    },
                    "style": {},
                    "children": [{
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 0px 5px",
                          "min-height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"检修实绩（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "高级视图",
                            "type": "advanceEchart",
                            "source": "ADVANCEECHART",
                            "parameters": {
                              "theme": "default"
                            },
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/advanceEchart_8.js */ "./app-views/views/177280852260000/production/content/advanceEchart_8.js")
                            },
                            "style": {
                              "margin": "auto",
                              "width": "100%",
                              "height": "320px"
                            },
                            "url": "images/map/map1.png"
                          }]
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 3
                    }, {
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 0px 5px",
                          "min-height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件分布（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "高级视图",
                            "type": "advanceEchart",
                            "source": "ADVANCEECHART",
                            "parameters": {
                              "theme": "default"
                            },
                            "advance": {
                              "expression": "require([\"../solution/customview/homepage/abnormalCategory.js\"])"
                            },
                            "style": {
                              "margin": "auto",
                              "width": "100%",
                              "height": "320px"
                            },
                            "url": "images/map/map1.png"
                          }]
                        }],
                        "url": "images/map/map1.png",
                        "parameters": {}
                      }],
                      "col": 5
                    }, {
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 0px 5px",
                          "overflow-y": "scroll",
                          "height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/ctrlgroup_9.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_9.js")
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
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 4
                    }]
                  }]
                }],
                "url": "images/map/map1.png",
                "parameters": {}
              }, {
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "margin": "5px 5px 5px 5px"
                },
                "advance": {
                  "expression": __webpack_require__(/*! ./content/block_3.js */ "./app-views/views/177280852260000/production/content/block_3.js")
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "type": "row",
                    "source": "ROW",
                    "advance": {
                      "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                    },
                    "parameters": {
                      "alignment": "bootstrap"
                    },
                    "style": {},
                    "children": [{
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 5px 5px",
                          "min-height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"智能决策任务实施状况（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "type": "row",
                            "source": "ROW",
                            "advance": {
                              "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                            },
                            "parameters": {
                              "alignment": "bootstrap"
                            },
                            "style": {},
                            "children": [{
                              "type": "column",
                              "children": [{
                                "label": "高级视图",
                                "type": "advanceEchart",
                                "source": "ADVANCEECHART",
                                "parameters": {
                                  "theme": "default"
                                },
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/advanceEchart_15.js */ "./app-views/views/177280852260000/production/content/advanceEchart_15.js")
                                },
                                "style": {
                                  "width": "100%",
                                  "height": "250px"
                                },
                                "url": "images/map/map1.png"
                              }],
                              "col": 6
                            }, {
                              "type": "column",
                              "children": [{
                                "label": "高级视图",
                                "type": "advanceEchart",
                                "source": "ADVANCEECHART",
                                "parameters": {
                                  "theme": "default"
                                },
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/advanceEchart_16.js */ "./app-views/views/177280852260000/production/content/advanceEchart_16.js")
                                },
                                "style": {
                                  "width": "100%",
                                  "height": "250px"
                                },
                                "url": "images/map/map1.png"
                              }],
                              "col": 6
                            }]
                          }]
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 4
                    }, {
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 5px 5px",
                          "min-height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"异常事件统计（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/ctrlgroup_10.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_10.js")
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
                              "col": 3
                            },
                            "advance": {
                              "getListTable": "allprojects",
                              "expression": __webpack_require__(/*! ./content/repeater_11.js */ "./app-views/views/177280852260000/production/content/repeater_11.js")
                            },
                            "children": [{
                              "type": "column",
                              "col": [4, 0],
                              "children": [{
                                "label": "高级视图",
                                "type": "advanceEchart",
                                "source": "ADVANCEECHART",
                                "parameters": {
                                  "theme": "default"
                                },
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/advanceEchart_17.js */ "./app-views/views/177280852260000/production/content/advanceEchart_17.js")
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
                                  "expression": __webpack_require__(/*! ./content/ctrlgroup_18.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_18.js")
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
                      }],
                      "col": 4
                    }, {
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "margin": "5px  5px 0px 5px",
                          "overflow-y": "scroll",
                          "height": "390px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"诊断绩效统计（当月内）\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "控件组",
                            "type": "ctrlgroup",
                            "source": "CTRLGROUP",
                            "advance": {
                              "expression": __webpack_require__(/*! ./content/ctrlgroup_12.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_12.js")
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
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 4
                    }]
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
                  "margin": "5px"
                },
                "advance": {
                  "expression": __webpack_require__(/*! ./content/block_4.js */ "./app-views/views/177280852260000/production/content/block_4.js")
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "type": "row",
                    "source": "ROW",
                    "advance": {
                      "expression": "expression = {\n  \"on\" : {\n    \"init\" : function(event){\n      var target = event.target;\n      //target.setDimension([6,6]);\n    }\n  }\n};"
                    },
                    "parameters": {
                      "alignment": "bootstrap"
                    },
                    "style": {},
                    "children": [{
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "height": "390px",
                          "margin": "5px  5px  0px  5px"
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"设备状态总览\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "重复单元",
                            "type": "repeater",
                            "source": "REPEATER",
                            "parameters": {
                              "col": 1
                            },
                            "advance": {
                              "getListTable": "allprojects",
                              "expression": __webpack_require__(/*! ./content/repeater_13.js */ "./app-views/views/177280852260000/production/content/repeater_13.js")
                            },
                            "children": [{
                              "type": "column",
                              "col": [12, 0],
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
                                    "label": "控件组",
                                    "type": "ctrlgroup",
                                    "source": "CTRLGROUP",
                                    "advance": {
                                      "expression": __webpack_require__(/*! ./content/ctrlgroup_22.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_22.js")
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
                                      "expression": __webpack_require__(/*! ./content/svgchart_23.js */ "./app-views/views/177280852260000/production/content/svgchart_23.js")
                                    },
                                    "style": {
                                      "margin": "0px",
                                      "font-size": "12px",
                                      "height": "334px",
                                      "width": "62px",
                                      "margin-top": "-30px"
                                    },
                                    "parameters": {}
                                  }],
                                  "col": 6
                                }],
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/row_19.js */ "./app-views/views/177280852260000/production/content/row_19.js")
                                }
                              }]
                            }],
                            "style": {},
                            "url": "images/map/map1.png"
                          }]
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 2
                    }, {
                      "type": "column",
                      "children": [{
                        "label": "控制板1",
                        "type": "block",
                        "source": "BLOCK",
                        "style": {
                          "padding": "5px",
                          "height": "390px",
                          "margin": "5px  5px  0px  5px",
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
                              "padding": "5px",
                              "font-size": "14px",
                              "font-weight": "bold",
                              "margin": "5px",
                              "color": "rgb(255, 255, 255)"
                            },
                            "advance": {
                              "getfunction": "kpiDataService.getValueList",
                              "category": "ci",
                              "condition": ["kpi", "{object:kpiQueryModel}"],
                              "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"在线测点状态总览\")\n        }\n    }\n}"
                            },
                            "parameters": {},
                            "url": "images/map/map1.png"
                          }, {
                            "label": "重复单元",
                            "type": "repeater",
                            "source": "REPEATER",
                            "parameters": {
                              "col": 7
                            },
                            "advance": {
                              "getListTable": "allprojects",
                              "expression": __webpack_require__(/*! ./content/repeater_14.js */ "./app-views/views/177280852260000/production/content/repeater_14.js")
                            },
                            "children": [{
                              "type": "column",
                              "col": [1, 5],
                              "children": [{
                                "label": "控件组",
                                "type": "ctrlgroup",
                                "source": "CTRLGROUP",
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/ctrlgroup_20.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_20.js")
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
                                      "expression": __webpack_require__(/*! ./content/ctrlgroup_24.js */ "./app-views/views/177280852260000/production/content/ctrlgroup_24.js")
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
                                      "expression": __webpack_require__(/*! ./content/svgchart_25.js */ "./app-views/views/177280852260000/production/content/svgchart_25.js")
                                    },
                                    "style": {
                                      "margin": "0px",
                                      "font-size": "12px",
                                      "height": "140px",
                                      "width": "63px"
                                    },
                                    "parameters": {}
                                  }],
                                  "col": 6
                                }],
                                "advance": {
                                  "expression": __webpack_require__(/*! ./content/row_21.js */ "./app-views/views/177280852260000/production/content/row_21.js")
                                }
                              }]
                            }],
                            "style": {
                              "margin-left": "10px"
                            },
                            "url": "images/map/map1.png"
                          }]
                        }],
                        "parameters": {},
                        "url": "images/map/map1.png"
                      }],
                      "col": 10
                    }]
                  }]
                }],
                "url": "images/map/map1.png",
                "parameters": {}
              }]
            }],
            "advance": {
              "expression": "{}"
            },
            "parameters": {},
            "url": "images/map/map1.png"
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
//# sourceMappingURL=177280852260000.production.js.map