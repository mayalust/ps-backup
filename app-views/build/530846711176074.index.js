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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/530846711176074/index/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/530846711176074/index/content/block_1.js":
/*!******************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/block_1.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
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
        $(".row.block").scrollTop(0);
        $(".table.dataTable:last > tbody > tr:first").removeClass("rowSelected");
        $(".table.dataTable:first > tbody > tr:first").addClass("rowSelected");
      } else if (data.index == 1) {
        $(".row.block").scrollTop($('#two').offset().top);
        $(".table.dataTable:last > tbody > tr:first").addClass("rowSelected");
        $(".table.dataTable:first > tbody > tr:first").removeClass("rowSelected");
      }
    }
  }
};

/***/ }),

/***/ "./app-views/views/530846711176074/index/content/ctrlgroup_2.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/ctrlgroup_2.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
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
              target.trigger("search_toDolistList", timeObj);
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
              timeObj.firstTimeFrom = moment(moment().startOf('isoWeek')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('isoWeek')).utc().format();
              target.trigger("search_toDolistList", timeObj);
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
              timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
              target.trigger("search_toDolistList", timeObj);
              currStatus = "month";
              render();
            }
          }
        }, {
          type: "dateRangePicker",
          value: "",
          id: 0,
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
                target.trigger("search_toDolistList", timeObj);
                currStatus = "";
                inpStatus = false; //   render();
              } else {
                target.trigger("search_toDolistList", {
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

/***/ "./app-views/views/530846711176074/index/content/ctrlgroup_4.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/ctrlgroup_4.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
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
            },*/
      {
        id: 3,
        title: "待审批",
        value: "auditing",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 4,
        title: "待委托",
        value: "trusting",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 5,
        title: "待检修",
        value: "maintaining",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 6,
        title: "待验收",
        value: "accepting",
        btnclass: "btn btn-default",
        activeclass: ""
      }, {
        id: 7,
        title: "待评价",
        value: "assessing",
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
          type: "customHtml",
          value: '<span id="two" style="font-size:12px">时 间：</span>',
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
              target.trigger("search_ticket", timeObj);
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
              target.trigger("search_ticket", timeObj);
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
              //当前月的第一天
              timeObj.firstTimeFrom = moment(moment().startOf('month')).utc().format();
              timeObj.firstTimeTo = moment(moment().endOf('month')).utc().format();
              target.trigger("search_ticket", timeObj);
              currStatus = "month";
              render();
            }
          }
        }, {
          type: "dateRangePicker",
          id: 1,
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
                target.trigger("search_ticket", timeObj);
                currStatus = "";
                inpStatus = false; //   render();
              } else {
                for (var i in list) {
                  list[i].btnclass = "btn btn-default";
                }

                list[0].btnclass = "btn btn-primary";
                target.trigger("search_ticket", {
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
                target.trigger("search_ticket", timeObj);

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

/***/ "./app-views/views/530846711176074/index/content/ctrlgroup_6.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/ctrlgroup_6.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
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

/***/ "./app-views/views/530846711176074/index/content/dataTableAdvance_3.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/dataTableAdvance_3.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target;
      var navigateTrigger = false; //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        ticketNo: "任务编号",
        customerName: "产线",
        // devName : "设备信息",
        filePath: {
          type: "link",
          value: "devName",
          name: "设备信息",
          on: {
            click: function click(data) {
              var deviceId = data.row.deviceId;
              target.getResourceById(deviceId, function (resource) {
                //resource.$location = "device";
                if (resource.values.viewType == "motor") {
                  resource.$location = "motor";
                } else {
                  resource.$location = "device";
                }

                target.setValue("global/resource", resource);
                target.setParameter("id", resource.id);
                /**
                 *  通过别名的方法调准啊
                 */

                target.navigateToTab("device");
              });
            }
          }
        },
        appName: {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function click(data) {
              // 判断跳转到那个页面。1.在线 2 智能 3.大数据 4.离线
              if (data.row.appName == 2) {
                target.navigateTo("index", {
                  main: 2,
                  sub: 6
                }, "self");
              } else if (data.row.appName == 3) {
                target.navigateTo("index", {
                  main: 2,
                  sub: 5
                }, "self");
              } else if (data.row.appName == 4) {
                if (data.row.tickeTaskStatus != "待诊断") {
                  window.location.href = "/api/rest/download/deviceResumeUIService/getReportBytes/" + data.row.ticketNo + ".pdf/" + data.row.ticketNo;
                }
              } else if (data.row.appName == 1) {// target.growl("报告还未生成", "warning")
              } else if (data.row.appName == "合并告警") {
                data.row.alertItemList.forEach(function (ele) {
                  ele.deviceName = data.row.devName;
                });

                if (data.appName = "合并告警") {
                  target.createSystemPopupByViewId("357383633040000", {
                    "title": "报警详情",
                    "top": "10%",
                    "width": "50%"
                  }, data.row.alertItemList);
                }
              }
            }
          }
        },
        alertTitle: "报警信息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        sendTime: "报警分配时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };

      function getTableData1(time) {
        var param = {
          //   "variables":{"theTicketType":"normal"},
          "taskStatus": 10,
          "categorys": "50",
          "tickeTaskStatus": "checking,explaining",
          "sendBeginTime": time ? time.firstTimeFrom : "",
          "sendEndTime": time ? time.firstTimeTo : ""
        };
        var params = eval("(" + JSON.stringify(param) + ")");
        target.postService("ticketTaskService", "getTicketTasksByCondition", params, function (tc) {
          if (tc.data) {
            var datas = [];
            tc.data.forEach(function (ele) {
              if (ele.variables.ticket) {
                var data = ele.variables.ticket.values;

                if (ele.variables.alertItemList.length > 1) {
                  data.appName = "合并告警";
                }

                if (ele.variables.isAudit == 0 && ele.variables.ticket.values.tickeTaskStatus == "checking") {
                  data.tickeTaskStatus = "被驳回";
                  data.tickeTaskStatusName = "reject"; // 审核被驳回
                } else if (ele.variables.isClose == 0 && ele.variables.ticket.values.tickeTaskStatus == "explaining") {
                  data.tickeTaskStatus = "被驳回";
                  data.tickeTaskStatusName = "rejectExplaining"; // 说明再次被驳回展示的按钮
                } else if (ele.variables.ticket.values.tickeTaskStatus == "explaining") {
                  data.tickeTaskStatus = "待说明";
                  data.tickeTaskStatusName = "explaining";
                } else {
                  data.tickeTaskStatus = "待诊断";
                  data.tickeTaskStatusName = "checking";
                }

                data.ticket = ele;
                data.handlerName = ele.handlerName;
                data.sendTime = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
                datas.push(data);
              }
            });
            target.trigger("pendingTaskData", datas.length);
            success(datas);
          }
        });
      }

      getTableData1(); //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      function success(datas) {
        var render = function render(advsearch) {
          var format = [];

          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          }

          format.push({
            name: "操作",
            type: "valueBased",
            value: "tickeTaskStatusName",
            options: {
              // 待诊断展示的按钮
              checking: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "分析",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.navigateTo("index", "专业分析", {
                        id: elem.row.deviceId,
                        //specialty: elem.row.specialtyProp,
                        sensor: elem.row.alertInstance,
                        startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                        enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                      });
                    }
                  }
                }, {
                  label: "编制报告",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      // 获取当前的告警信息
                      var alertInfo = elem.row.ticket;
                      target.setValue("alertInfo", alertInfo);
                      var resource = {
                        id: elem.row.deviceId
                      };
                      target.setValue("global/resource", resource);
                      target.navigateTo("index", {
                        main: 3,
                        sub: 3
                      }, {
                        id: elem.row.deviceId
                      });
                    }
                  }
                }],
                render: function render() {
                  return "";
                }
              },
              // 待说明展示的按钮
              explaining: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "分析",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.navigateTo("index", "专业分析", {
                        id: elem.row.deviceId,
                        startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                        enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                      });
                    }
                  }
                }, {
                  label: "关闭说明",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.createSystemPopupByLocalPath("page2", {
                        width: "800px",
                        title: "关闭说明"
                      }, elem.row.ticket);
                    }
                  }
                }],
                render: function render() {
                  return "";
                }
              },
              // 被驳回展示的按钮
              reject: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "分析",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.navigateTo("index", "专业分析", {
                        id: elem.row.deviceId,
                        specialty: elem.row.specialtyProp,
                        sensor: elem.row.alertInstance,
                        startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                        enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                      });
                    }
                  }
                }, {
                  label: "修改报告",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      //   var ticketObj = elem.row.ticket;
                      //   delete(ticketObj.variables);
                      //   target.navigateTo("index", {
                      //     main : [0,"bhbgbz"],
                      //     taskId : elem.row.ticket.id,
                      //     devName : elem.row.devName,
                      //     externalDevId : elem.row.deviceCode,
                      //     ticketNo: elem.row.ticketNo,
                      //     // ticketObj: ticketObj
                      //   }, "self");
                      target.createSystemPopupByLocalPath("bhbgbz", {
                        width: "750px",
                        top: "20px",
                        title: "修改报告"
                      }, elem.row.ticket);
                    }
                  }
                }],
                render: function render() {
                  return "";
                }
              },
              // 说明再次被驳回展示的按钮
              rejectExplaining: {
                name: "操作",
                type: "buttonGroup",
                content: [{
                  label: "分析",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.navigateTo("index", "专业分析", {
                        id: elem.row.deviceId,
                        specialty: elem.row.specialtyProp,
                        sensor: elem.row.alertInstance,
                        startdate: new Date(elem.row.arisingTime).getTime() - 2 * 60 * 60 * 1000,
                        enddate: new Date(elem.row.arisingTime).getTime() + 1 * 60 * 60 * 1000
                      });
                    }
                  }
                }, {
                  label: "关闭说明",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.createSystemPopupByLocalPath("page5", {
                        width: "800px",
                        title: "关闭说明"
                      }, elem.row.ticket);
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
            on: {
              rowClick: function rowClick(event) {}
            },
            format: format
          });
        }; // 点击查询按钮


        target.off("search_toDolistList");
        target.on("search_toDolistList", function (time) {
          getTableData1(time);
          render();
        });
        render();
      }

      ;
    }
  }
};

/***/ }),

/***/ "./app-views/views/530846711176074/index/content/dataTableAdvance_5.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/dataTableAdvance_5.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        ticketNo: "任务编号",
        customerName: "产线",
        devName: "设备信息",
        appName: {
          name: "报警来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function click(data) {
              data.row.alertItemList.forEach(function (ele) {
                ele.deviceName = data.row.devName;
              });

              if (data.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                  "title": "报警详情",
                  "top": "10%",
                  "width": "50%"
                }, data.row.alertItemList);
              }
            }
          }
        },
        alertTitle: "报警信息",
        severity: {
          name: "报警级别",
          type: "priority",
          value: "severity"
        },
        commitTime: "报警处理时间",
        handlerName: "当前处理人",
        tickeTaskStatus: "任务状态"
      };

      function getTableData(time) {
        var params = {
          tickeTaskStatus: time ? time.status : "",
          commitBeginTime: time ? time.firstTimeFrom : "",
          commitEndTime: time ? time.firstTimeTo : "",
          categorys: "50",
          processedTickeTaskStatus: "checking",
          taskDealingStatus: "checking,explaining"
        };
        target.postService("ticketTaskService", "getDealTicketList", params, function (tc) {
          if (tc.data) {
            var datas = [];
            tc.data.forEach(function (ele) {
              var data = ele.values;
              data.tickeTaskStatusFlag = "过程跟踪";

              if (data.tickeTaskStatus == "checking") {
                data.tickeTaskStatus = "待诊断";
              } else if (data.tickeTaskStatus == "auditing") {
                data.tickeTaskStatus = "待审批 ";
              } else if (data.tickeTaskStatus == "trusting") {
                data.tickeTaskStatus = "待委托";
                data.tickeTaskStatusFlag = "待委托";
              } else if (data.tickeTaskStatus == "end") {
                data.tickeTaskStatus = "已完成";
              } else if (data.tickeTaskStatus == "assessing") {
                data.tickeTaskStatus = "待评价";
              } else if (data.tickeTaskStatus == "explaining") {
                data.tickeTaskStatus = "待说明";
              } else if (data.tickeTaskStatus == "closing") {
                data.tickeTaskStatus = "待关闭";
              } else if (data.tickeTaskStatus == "accepting") {
                data.tickeTaskStatus = "待验收";
              } else if (data.tickeTaskStatus == "maintaining") {
                data.tickeTaskStatus = "待检修";
              }

              if (data.alertItemList.length > 1) {
                data.appName = "合并告警";
              }

              data.ticket = ele;
              data.handlerName = ele.handlerName;
              data.commitTime = new Date(ele.commitTime).Format("yyyy-MM-dd hh:mm:ss");
              datas.push(data);
            });
            success(datas);
          }
        });
      }

      getTableData(); //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！

      function success(datas) {
        var render = function render(advsearch) {
          var format = [];

          for (var i in Dictionary) {
            var item = target.explainDic(i, Dictionary[i]);
            format.push(item);
          }

          format.push({
            name: "操作",
            type: "valueBased",
            value: "tickeTaskStatusFlag",
            options: {
              "待委托": {
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
                }, {
                  label: "报警关闭",
                  icon: "null",
                  "class": "btn btn-default btn-sm",
                  on: {
                    click: function click(elem) {
                      target.setValue("closeAlert", elem.row);
                      target.createSystemPopupByLocalPath("closeAlert", {
                        width: "40%",
                        title: "提示"
                      });
                    }
                  }
                }]
              },
              "过程跟踪": {
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
                      }); //   target.navigateTo("index", {
                      //     main: [0, "viewId:9246777620035"],
                      //     ticketNo: elem.row.ticketNo
                      //   }, "self");
                    }
                  }
                }]
              }
            }
          });
          target.render({
            data: datas,
            format: format
          });
        }; // 点击日期按钮


        target.off("search_ticket");
        target.on("search_ticket", function (time) {
          getTableData(time);
          render();
        });
        render();
      }

      ;
    }
  }
};

/***/ }),

/***/ "./app-views/views/530846711176074/index/content/repeater_0.js":
/*!*********************************************************************!*\
  !*** ./app-views/views/530846711176074/index/content/repeater_0.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var list = [{
        label: "待处理任务数",
        index: 0,
        value: "-",
        icon: "proudsmart ps-bw_01",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }, {
        label: "已诊断任务数（本月）",
        value: "-",
        index: 1,
        icon: "proudsmart ps-bw_02",
        css: {
          "background-color": "#484b2f",
          "border": "1px solid #e7b52b"
        }
      }, {
        label: "诊断审核通过率",
        value: "-",
        index: 2,
        icon: "proudsmart ps-bw_03",
        css: {
          "background-color": "#472d3c",
          "border": "1px solid #e55057"
        }
      }, {
        label: "诊断准确率",
        value: "-",
        index: 3,
        icon: "proudsmart ps-bw_04",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }]; // 待处理报警数

      target.on("pendingTaskData", function (e) {
        list[0].value = e;
        target.render(list);
      });

      function randerData() {
        // 已诊断任务数
        target.postService("ticketTaskService", "getDealDoneTaskNumber", [], function (tc) {
          if (tc.data) {
            list[1].value = tc.data;
            target.render(list);
          }
        }); // 诊断审核通过率   综合诊断准确率

        target.postService("ticketTaskService", "getDiagosticRightAndAuditRate", [], function (tc) {
          if (tc.data) {
            list[2].value = tc.data.DiagosticAuditRate + "%";
            list[3].value = tc.data.DiagosticRightRate + "%";
            target.render(list);
          }
        });
      }

      randerData();
    }
  }
};

/***/ }),

/***/ "./app-views/views/530846711176074/index/json.js":
/*!*******************************************************!*\
  !*** ./app-views/views/530846711176074/index/json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 我的首页[诊断分析员-1级] ] - 530846711176074 **/
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
              "expression": __webpack_require__(/*! ./content/repeater_0.js */ "./app-views/views/530846711176074/index/content/repeater_0.js")
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
                  "expression": __webpack_require__(/*! ./content/block_1.js */ "./app-views/views/530846711176074/index/content/block_1.js")
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_6.js */ "./app-views/views/530846711176074/index/content/ctrlgroup_6.js")
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
                "label": "控件组",
                "type": "ctrlgroup",
                "source": "CTRLGROUP",
                "advance": {
                  "expression": __webpack_require__(/*! ./content/ctrlgroup_2.js */ "./app-views/views/530846711176074/index/content/ctrlgroup_2.js")
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_3.js */ "./app-views/views/530846711176074/index/content/dataTableAdvance_3.js")
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
                  "expression": __webpack_require__(/*! ./content/ctrlgroup_4.js */ "./app-views/views/530846711176074/index/content/ctrlgroup_4.js")
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_5.js */ "./app-views/views/530846711176074/index/content/dataTableAdvance_5.js")
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
//# sourceMappingURL=530846711176074.index.js.map