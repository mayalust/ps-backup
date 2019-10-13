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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/542599013416085/index/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/542599013416085/index/content/block_1.js":
/*!******************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/block_1.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var data = target.$repeatData;
      var css = data.css;
      target.setCss(css);
    },
    click: function click(event) {
      var target = event.target;
      var data = target.$repeatData;

      if (data.index == 0) {
        $(".table.dataTable:last > tbody > tr:first").removeClass("rowSelected");
        $(".table.dataTable:first > tbody > tr:first").addClass("rowSelected");
      } else if (data.index == 1) {// $(".table.dataTable:last > tbody > tr:first").addClass("rowSelected");
        // $(".table.dataTable:first > tbody > tr:first").removeClass("rowSelected");
      }
    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/content/ctrlgroup_2.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/ctrlgroup_2.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width: "auto",
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {
        "firstTimeFrom": "",
        "firstTimeTo": ""
      };
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期 

      var render = function render() {
        var ctrlGroups = [[{
          type: "label",
          value: "时 间：",
          style: {
            width: "100px",
            textAlign: "right"
          }
        }, {
          type: "button",
          value: "当日任务",
          btnclass: currStatus == "today" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              timeObj.firstTimeFrom = moment(moment().startOf('day')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('day')).utc().format();
              target.trigger("search_toDolist", timeObj);
              currStatus = "today";
              render();
            }
          }
        }, {
          type: "button",
          value: "本周任务",
          btnclass: currStatus == "bz" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              //获得本周的开端日期 
              timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
              target.trigger("search_toDolist", timeObj);
              currStatus = "bz";
              render();
            }
          }
        }, {
          type: "button",
          value: "本月任务",
          btnclass: currStatus == "month" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              //当前月的第一天
              timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
              target.trigger("search_toDolist", timeObj);
              currStatus = "month";
              render();
            }
          }
        }, {
          id: 0,
          type: "dateRangePicker",
          value: "",
          "class": "col-md-5",
          style: {
            width: "200px",
            textAlign: "center"
          },
          on: {
            change: function change(elem) {
              timeObj.firstTimeFrom = elem.value.start;
              timeObj.firstTimeTo = elem.value.end;

              if (elem.value.start) {
                inpStatus = true;
              }
            }
          }
        }, {
          type: "button",
          btnclass: "btn btn-primary",
          value: "查 询",
          btnStyle: {
            width: "100px"
          },
          on: {
            click: function click(elem) {
              if (inpStatus) {
                target.trigger("search_toDolist", timeObj);
                currStatus = "";
                inpStatus = false; //   render();
              } else {
                target.trigger("search_toDolist", {
                  "firstTimeFrom": "",
                  "firstTimeTo": ""
                });
                currStatus = "";
                render();
              }
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

/***/ "./app-views/views/542599013416085/index/content/ctrlgroup_4.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/ctrlgroup_4.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    repeat: function repeat(event) {
      var target = event.target;
      var global = event.global;
      var data = target.$repeatData;
      var ctrlGroups = [[{
        type: "label",
        value: data.value,
        style: {
          "font-size": "30px",
          "text-align": "left",
          "padding": "0 0 0 20px"
        },
        "class": "col-md-12"
      }, {
        type: "icon",
        "class": "col-md-12",
        rowSpan: 2,
        style: {
          "font-size": "40px",
          "color": "#ddd"
        },
        tdStyle: {
          "text-align": "right",
          "padding": "0 10px 0 0"
        },
        icon: data.icon
      }], [{
        type: "label",
        value: data.label,
        "class": "col-md-12",
        style: {
          "font-size": "12px",
          "text-align": "left",
          "padding": "0 0 0 20px"
        }
      }]];
      event.target.render(ctrlGroups);
    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/content/ctrlgroup_5.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/ctrlgroup_5.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  width: "auto",
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {
        "firstTimeFrom": "",
        "firstTimeTo": "",
        "status": ""
      };
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期

      var list = [{
        id: 1,
        title: "全部",
        value: "",
        btnclass: "btn btn-primary",
        activeclass: ""
      },
      /*{
        id : 2,
        title : "待分析",
        value : "checking",
        btnclass:"btn btn-default",
        activeclass:""
      },{
      id : 3,
      title : "待审批",
      value : "auditing",
      btnclass:"btn btn-default",
      activeclass:""
      },{
      id : 4,
      title : "待委托",
      value : "trusting",
      btnclass:"btn btn-default",
      activeclass:""
      },{
      id : 5,
      title : "待维修",
      value : "maintaining",
      btnclass:"btn btn-default",
      activeclass:""
      },{
      id : 6,
      title : "待验收",
      value : "accepting",
      btnclass:"btn btn-default",
      activeclass:""
      },{
      id : 7,
      title : "待评价",
      value : "assessing",
      btnclass:"btn btn-default",
      activeclass:""
      },*/
      {
        id: 5,
        title: "待检修",
        value: "maintaining",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 8,
        title: "待说明",
        value: "explaining",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 9,
        title: "待关闭",
        value: "closing",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 10,
        title: "已完成",
        value: "end",
        btnclass: "btn btn-default",
        activeclass: ""
      }];

      var render = function render() {
        var ctrlGroups = [[{
          type: "label",
          value: "时 间：",
          style: {
            width: "100px",
            textAlign: "right"
          }
        }, {
          type: "button",
          value: "当日处理任务",
          btnclass: currStatus == "today" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              timeObj.firstTimeFrom = moment(moment().startOf('day')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('day')).utc().format();
              target.trigger("inspectionLoaded", timeObj);
              currStatus = "today";
              render();
            }
          }
        }, {
          type: "button",
          value: "本周处理任务",
          btnclass: currStatus == "bz" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              //获得本周的开端日期
              timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
              target.trigger("inspectionLoaded", timeObj);
              currStatus = "bz";
              render();
            }
          }
        }, {
          type: "button",
          value: "本月处理任务",
          btnclass: currStatus == "month" ? "btn btn-primary" : "btn btn-default",
          btnStyle: {
            "width": "100px",
            "border": "#10a4fb solid 1px"
          },
          on: {
            click: function click(elem) {
              timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
              target.trigger("inspectionLoaded", timeObj);
              currStatus = "month";
              render();
            }
          }
        }, {
          id: 1,
          type: "dateRangePicker",
          value: "",
          "class": "col-md-5",
          colSpan: 2,
          style: {
            width: "200px",
            textAlign: "center"
          },
          on: {
            change: function change(elem) {
              timeObj.firstTimeFrom = elem.value.start;
              timeObj.firstTimeTo = elem.value.end;

              if (elem.value.start) {
                inpStatus = true;
              }
            }
          }
        }, {
          type: "button",
          btnclass: "btn btn-primary",
          value: "查 询",
          btnStyle: {
            width: "100px"
          },
          on: {
            click: function click(elem) {
              if (inpStatus) {
                target.trigger("inspectionLoaded", timeObj);
                currStatus = "";
                inpStatus = false; //   render();
              } else {
                for (var i in list) {
                  list[i].btnclass = "btn btn-default";
                }

                list[0].btnclass = "btn btn-primary";
                target.trigger("inspectionLoaded", {
                  "firstTimeFrom": "",
                  "firstTimeTo": "",
                  "status": ""
                });
                currStatus = "";
                render();
              }
            }
          }
        }], // 完成任务
        [{
          type: "label",
          value: "任务状态:",
          style: {
            textAlign: "right",
            width: "100px"
          }
        }]];

        for (var i in list) {
          ctrlGroups[1].push({
            id: list[i].id,
            type: "button",
            value: list[i].title,
            btnclass: list[i].btnclass,
            paramvalue: list[i].value,
            // style: {
            //   width: "100px",
            //   textAlign: "left"
            // },
            btnStyle: {
              "width": "100px",
              "border": "#10a4fb solid 1px"
            },
            on: {
              click: function click(elem) {
                elem.current.btnclass = "btn btn-default";
                var id = elem.current.id;
                var value = elem.current.paramvalue;
                timeObj.status = value;
                target.trigger("inspectionLoaded", timeObj);

                for (var i in list) {
                  if (list[i].id == id) {
                    list[i].btnclass = "btn btn-primary";
                  } else {
                    list[i].btnclass = "btn btn-default";
                  }
                }

                render();
              }
            }
          });
        }

        event.target.render(ctrlGroups);
      };

      render();
    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/content/dataTableAdvance_3.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/dataTableAdvance_3.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; // 获取设备id

      var resource = target.getValue("global/resource"); //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        ticketNo: "任务编号",
        "variables.customerName": "产线",
        "variables.devName": "设备信息",
        "variables.ticket.message": "任务信息",
        filePath: {
          type: "link",
          value: "fileName",
          linkage: "filePath",
          name: "来源"
        },
        sendTimeUTC: "任务接收时间",
        tickeTaskStatus: "任务状态"
      };

      function getTableData(params, pageRequest, cb) {
        pageRequest.statCount = true;
        target.getTicketTasksByConditionAndPage(params, pageRequest, function (tc) {
          var datas = [];
          tc.data.forEach(function (ele) {
            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");

            if (ele.variables.ticket.values.tickeTaskStatus == "accepting") {
              ele.tickeTaskStatus = "待验收";
              ele.tickeTaskStatusName = "accepting";
            } else if (ele.variables.ticket.values.tickeTaskStatus == "assessing" && ele.variables.dealType != 3) {
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "assessingSelf";
            } else if (ele.variables.ticket.values.tickeTaskStatus == "assessing") {
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "assessing";
            } else {
              ele.tickeTaskStatus = "待委托";
              ele.tickeTaskStatusName = "trusting";
            } // 判断是任务还是告警


            if (ele.variables.ticket.category == "100") {
              ele.fileName = "当日点检";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "当日点检";
            } else if (ele.variables.ticket.category == "120" && ele.variables.ticket.values.tickeTaskStatus == "backing") {
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "被退回";
              ele.tickeTaskStatusName = "backing";
            } else if (ele.variables.ticket.category == "120" && ele.variables.ticket.values.tickeTaskStatus == "assessing") {
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "待评价";
            } else if (ele.variables.ticket.category == "120") {
              ele.fileName = "检修计划";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "检修计划";
            } else if (ele.variables.ticket.category == "130" && ele.variables.ticket.values.tickeTaskStatus == "accepting") {
              ele.fileName = "点检异常";
              ele.tickeTaskStatus = "待评价";
              ele.tickeTaskStatusName = "待评价";
            } else if (ele.variables.ticket.category == "130") {
              ele.fileName = "点检异常";
              ele.tickeTaskStatus = "待处理";
              ele.tickeTaskStatusName = "点检异常";
            } else {
              ele.filePath = "/api/rest/download/deviceResumeUIService/getReportBytes/" + ele.ticketNo + ".pdf/" + ele.ticketNo;
              ele.fileName = "诊断推送";
            }
          });
          target.trigger("inspectioned", tc.total);
          cb(tc.data, tc.total);
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas, e) {
        var params = {
          //   "variables":{"theTicketType":"normal"},
          "taskStatus": 10,
          "sendBeginTime": e ? e.firstTimeFrom : "",
          "sendEndTime": e ? e.firstTimeTo : "",
          "categorys": "50,100,130,120",
          "processedTaskStatusList": [{
            "category": "50",
            "targetStatus": "trusting,accepting,assessing"
          }, {
            "category": "100",
            "targetStatus": "dealreadying"
          }, {
            "category": "130",
            "targetStatus": "dealing,accepting,assessing"
          }, {
            "category": "120",
            "targetStatus": "dealing,backing,accepting,assessing"
          }]
        };
        var format = [];

        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        } //方法


        format.push({
          name: "操作",
          type: "valueBased",
          value: "tickeTaskStatusName",
          options: {
            "backing": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "退回处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("backing", {
                      width: "800px",
                      title: "退回处理"
                    }, elem.row);
                  }
                }
              }]
            },
            "检修计划": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "发起委托",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page12", {
                      width: "800px",
                      title: "发起委托"
                    }, elem.row);
                  }
                }
              }, {
                label: "自行处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page9", {
                      width: "800px",
                      title: "自行处理"
                    }, elem.row);
                  }
                }
              }, {
                label: "暂不处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page10", {
                      width: "800px",
                      title: "暂不处理"
                    }, elem.row);
                  }
                }
              }]
            },
            "待评价": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "评价验收",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page11", {
                      width: "800px",
                      title: "验收与评价"
                    }, elem.row);
                  }
                }
              }]
            },
            "点检异常": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "发起委托",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page8", {
                      width: "800px",
                      title: "发起委托"
                    }, elem.row);
                  }
                }
              }, {
                label: "自行处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page9", {
                      width: "800px",
                      title: "自行处理"
                    }, elem.row);
                  }
                }
              }, {
                label: "暂不处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page10", {
                      width: "800px",
                      title: "暂不处理"
                    }, elem.row);
                  }
                }
              }]
            },
            "当日点检": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "实施点检",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    debugger;
                    var nodeId = elem.row.deviceId;
                    target.setParameter("id", elem.row.deviceId);
                    target.getDomainAreaLineTree_alertStatus(function (domaintree) {
                      var find = domaintree.find(function (node) {
                        return node.id == nodeId;
                      });
                      target.setValue("global/resource", find);
                      target.navigateTo("index", {
                        main: 1,
                        sub: 0 //   ticket: elem.row.ticket.id

                      }, "self");
                    });
                  }
                }
              }]
            },
            //  待委托出现的情况
            trusting: {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "自行处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    // 点检人员处理任务 2
                    //   elem.row.dealType = 2;
                    target.createSystemPopupByLocalPath("page1", {
                      width: "600px",
                      title: "自行处理说明"
                    }, elem.row); //   target.setValue("global/resource", elem.row.resource);
                  }
                }
              }, {
                label: "发起委托",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page3", {
                      width: "900px",
                      title: "检修委托"
                    }, elem.row);
                  }
                }
              }, {
                label: "暂不处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page2", {
                      width: "600px",
                      title: "暂不处理说明"
                    }, elem.row);
                  }
                }
              }]
            },
            //  待验收出现的情况
            accepting: {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "检修验收",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    // 点检人员处理任务 2
                    //   elem.row.dealType = 2;
                    target.createSystemPopupByLocalPath("page5", {
                      width: "600px",
                      title: "检修验收"
                    }, elem.row);
                  }
                }
              }],
              render: function render() {
                return "";
              }
            },
            //  待评价出现的情况
            assessing: {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "检修实绩",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page7", {
                      width: "600px",
                      title: "检修实绩"
                    }, elem.row);
                  }
                }
              }, {
                label: "诊断评价",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page6", {
                      width: "600px",
                      title: "诊断评价"
                    }, elem.row);
                  }
                }
              }],
              render: function render() {
                return "";
              }
            },
            assessingSelf: {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "诊断评价",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.createSystemPopupByLocalPath("page6", {
                      width: "600px",
                      title: "诊断评价"
                    }, elem.row);
                  }
                }
              }],
              render: function render() {
                return "";
              }
            }
          }
        });
        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      };

      target.off("search_toDolist");
      target.on("search_toDolist", function (e) {
        render([], e);
      });
      render([]);
    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/content/dataTableAdvance_6.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/dataTableAdvance_6.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; // 获取设备id

      var resource = target.getValue("global/resource"); //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        ticketNo: "任务编号",
        "values.customerName": "产线",
        "values.devName": "设备信息",
        "message": "任务信息",
        // appName : {
        //   name:"报警来源",
        //   type:"alarmSource",
        //   value : "appName"
        // },
        filePath: {
          type: "link",
          value: "fileName",
          linkage: "filePath",
          name: "来源"
        },
        "values.severity": {
          name: "报警级别",
          type: "priority",
          value: "values.severity"
        },
        commitTimeUtc: "报警处理时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };
      var tickeTaskStatusObj = {
        "checking": "待诊断",
        "auditing": "待审批",
        "trusting": "待委托",
        "end": "已完成",
        "assessing": "待说明",
        "closing": "待关闭",
        "accepting": "待验收",
        "maintaining": "待检修",
        "explaining": "已完成",
        "backing": "被退回"
      };

      function getTableData(params, pageRequest, cb) {
        target.getDealTicketListByPage(params, pageRequest, function (tc) {
          tc.data.forEach(function (data) {
            // 报警来源
            // 判断是任务还是告警
            if (data.category == "100") {
              data.fileName = "当日点检";
            } else if (data.category == "120") {
              data.fileName = "检修计划";
            } else if (data.category == "130") {
              data.fileName = "点检异常";
            } else {
              data.filePath = "/api/rest/download/deviceResumeUIService/getReportBytes/" + data.ticketNo + ".pdf/" + data.ticketNo;
              data.fileName = "诊断推送";
            }

            data.tickeTaskStatus = tickeTaskStatusObj[data.values.tickeTaskStatus], data.commitTimeUtc = useMomentFormat(data.commitTime, "yyyy-MM-dd hh:mm:ss");
          });
          cb(tc.data, tc.total);
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas, time) {
        var params = {
          categorys: "50,100,130,120",
          validUserFlag: true,
          tickeTaskStatus: time ? time.status : "",
          commitBeginTime: time ? time.firstTimeFrom : "",
          commitEndTime: time ? time.firstTimeTo : "",
          processedTaskStatusList: [{
            "category": "50",
            "targetStatus": "trusting"
          }, {
            "category": "100",
            "targetStatus": "dealreadying"
          }, {
            "category": "130",
            "targetStatus": "dealing"
          }, {
            "category": "120",
            "targetStatus": "dealing"
          }]
        };
        var format = [];

        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        } //方法


        format.push({
          name: "操作",
          type: "buttonGroup",
          content: [{
            label: "过程跟踪",
            icon: "null",
            "class": "btn btn-default btn-sm",
            on: {
              click: function click(elem) {
                target.setValue("ticketNo", elem.row.ticketNo);
                target.navigateTo("index", {
                  main: [0, "viewId:9246777620035"]
                });
              }
            }
          }]
        });
        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      };

      target.off("inspectionLoaded");
      target.on("inspectionLoaded", function (e) {
        render([], e);
      });
      render([]);
    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/content/repeater_0.js":
/*!*********************************************************************!*\
  !*** ./app-views/views/542599013416085/index/content/repeater_0.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var list = [{
        label: "待处理任务数",
        value: "0",
        index: 0,
        icon: "proudsmart ps-bw_05",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }, {
        label: "故障停机时间（本周）",
        value: "0h",
        index: 1,
        icon: "proudsmart ps-bw_06",
        css: {
          "background-color": "#484b2f",
          "border": "1px solid #e7b52b"
        }
      }, {
        label: "故障停机次数（本周）",
        value: "0",
        index: 2,
        icon: "proudsmart ps-bw_07",
        css: {
          "background-color": "#472d3c",
          "border": "1px solid #e55057"
        }
      }]; // 待处理报警数

      target.on("inspectioned", function (e) {
        list[0].value = e;
        target.render(list);
      });

      function randerData() {
        // 已诊断任务数
        target.postService("ticketTaskService", "getDealDoneTaskNumber", [], function (tc) {
          if (tc.data) {
            list[1].value = tc.data + "h";
            target.render(list);
          }
        }); // 诊断审核通过率   综合诊断准确率

        target.postService("ticketTaskService", "getDiagosticRightAndAuditRate", [], function (tc) {
          if (tc.data) {
            list[2].value = tc.data.DiagosticAuditRate + "";
            target.render(list);
          }
        });
      } // randerData();

    }
  }
};

/***/ }),

/***/ "./app-views/views/542599013416085/index/json.js":
/*!*******************************************************!*\
  !*** ./app-views/views/542599013416085/index/json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 我的首页[点检工程师-1级] ] - 542599013416085 **/
psdefine(function () {
  return {
    "label": "导航页",
    "layout": {
      "type": "column",
      "children": [{
        "label": "控制板1",
        "type": "block",
        "source": "BLOCK",
        "style": {
          "padding": "0",
          "margin": "0",
          "border": "0",
          "background-color": "rgba(250,250,250,0)",
          "max-height": "calc( 100vh - 115px)",
          "overflow-y": "scroll"
        },
        "advance": {
          "expression": "{}"
        },
        "children": [{
          "type": "column",
          "col": 12,
          "children": [{
            "label": "重复单元",
            "type": "repeater",
            "source": "REPEATER",
            "parameters": {
              "col": 4
            },
            "advance": {
              "getListTable": "allprojects",
              "expression": __webpack_require__(/*! ./content/repeater_0.js */ "./app-views/views/542599013416085/index/content/repeater_0.js")
            },
            "children": [{
              "type": "column",
              "children": [{
                "label": "控制板1",
                "type": "block",
                "source": "BLOCK",
                "style": {
                  "padding": "10px",
                  "margin": "5px"
                },
                "advance": {
                  "expression": __webpack_require__(/*! ./content/block_1.js */ "./app-views/views/542599013416085/index/content/block_1.js")
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_4.js */ "./app-views/views/542599013416085/index/content/ctrlgroup_4.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "12px"
                    },
                    "help": "../pdf/ctrlgroup.pdf",
                    "parameters": {
                      "cgroupstyle": "table"
                    }
                  }]
                }],
                "url": "images/map/map1.png",
                "parameters": {}
              }],
              "col": [3, 0]
            }],
            "style": {},
            "url": "images/map/map1.png"
          }, {
            "label": "控制板1",
            "type": "block",
            "source": "BLOCK",
            "style": {
              "padding": "10px",
              "margin": "5px"
            },
            "advance": {
              "expression": {}
            },
            "children": [{
              "type": "column",
              "col": 12,
              "children": [{
                "label": "控件组",
                "type": "ctrlgroup",
                "source": "CTRLGROUP",
                "advance": {
                  "expression": __webpack_require__(/*! ./content/ctrlgroup_2.js */ "./app-views/views/542599013416085/index/content/ctrlgroup_2.js")
                },
                "style": {
                  "font-size": "12px",
                  "text-align": "left",
                  "line-height": "30px"
                },
                "help": "../pdf/ctrlgroup.pdf",
                "parameters": {
                  "cgroupstyle": "table"
                },
                "url": "images/map/map1.png"
              }]
            }],
            "url": "images/map/map1.png"
          }, {
            "label": "控制板1",
            "type": "block",
            "source": "BLOCK",
            "style": {
              "padding": "5px",
              "margin": "5px"
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
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待处理任务\")\n        }\n    }\n}"
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_3.js */ "./app-views/views/542599013416085/index/content/dataTableAdvance_3.js")
                },
                "style": {},
                "url": "images/map/map1.png",
                "echart": {}
              }, {
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
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_5.js */ "./app-views/views/542599013416085/index/content/ctrlgroup_5.js")
                    },
                    "style": {
                      "font-size": "12px",
                      "text-align": "left",
                      "line-height": "30px"
                    },
                    "help": "../pdf/ctrlgroup.pdf",
                    "parameters": {
                      "cgroupstyle": "table"
                    },
                    "url": "images/map/map1.png"
                  }, {
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
                      "font-size": "16px",
                      "font-weight": "bold"
                    },
                    "advance": {
                      "getfunction": "kpiDataService.getValueList",
                      "category": "ci",
                      "condition": ["kpi", "{object:kpiQueryModel}"],
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"已处理任务\")\n        }\n    }\n}"
                    },
                    "parameters": {}
                  }, {
                    "label": "高级列表",
                    "type": "dataTableAdvance",
                    "source": "DATATABLEADVANCE",
                    "parameters": {
                      "col": 1,
                      "pageSize": 10,
                      "listbottom": "standard"
                    },
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/dataTableAdvance_6.js */ "./app-views/views/542599013416085/index/content/dataTableAdvance_6.js")
                    },
                    "style": {
                      "margin": "5px",
                      "font-size": "12px"
                    },
                    "url": "images/map/map1.png"
                  }]
                }],
                "url": "images/map/map1.png"
              }]
            }],
            "url": "images/map/map1.png",
            "parameters": {}
          }]
        }],
        "url": "images/map/map1.png",
        "parameters": {}
      }],
      "col": 12
    },
    "setting": __webpack_require__(/*! ../setting.js */ "./app-views/views/542599013416085/setting.js")
  };
});

/***/ }),

/***/ "./app-views/views/542599013416085/setting.js":
/*!****************************************************!*\
  !*** ./app-views/views/542599013416085/setting.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {module["export"] = {
  "theme": "none"
};
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
//# sourceMappingURL=542599013416085.index.js.map