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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app-views/views/494624133620031/index/json.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-views/views/494624133620031/index/content/ctrlgroup_3.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/ctrlgroup_3.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  width: "auto",
  on: {
    init: function init(event) {
      var target = event.target;
      var global = event.global;
      var timeObj = {};
      var inpStatus = false;
      var currStatus = "";
      var now = new Date(); //当前日期 

      var render = function render() {
        var ctrlGroups = [[{
          type: "label",
          value: "处理时间：",
          "class": "col-md-1",
          style: {
            textAlign: "right",
            width: "100px"
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
              currStatus = "today";
              render();
              target.trigger("queryTabel3", timeObj);
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
              currStatus = "bz";
              render();
              target.trigger("queryTabel3", timeObj);
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
              currStatus = "month";
              render();
              target.trigger("queryTabel3", timeObj);
            }
          }
        }, {
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
                inpStatus = false;
              } else {
                timeObj.firstTimeFrom = "";
                timeObj.firstTimeTo = "";
                currStatus = false;
                render();
              }

              target.trigger("queryTabel3", timeObj);
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

/***/ "./app-views/views/494624133620031/index/content/ctrlgroup_5.js":
/*!**********************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/ctrlgroup_5.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
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
          "font-size": "16px",
          "text-align": "left",
          "padding": "0 0 0 20px",
          "height": "41px"
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

/***/ "./app-views/views/494624133620031/index/content/dataTableAdvance_1.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/dataTableAdvance_1.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; //--------------------------自定义输入-----------------------------
      //自定义输入

      var Dictionary = {
        "variables.customerName": "产线",
        "variables.devName": "设备信息",
        "variables.deviceCode": "设备编码",
        "taskType": "任务分类",
        "appName": {
          name: "任务来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function click(elem) {
              elem.row.variables.alertItemList.forEach(function (ele) {
                ele.deviceName = elem.row.variables.devName;
              });

              if (elem.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                  "title": "报警详情",
                  "top": "10%",
                  "width": "50%"
                }, elem.row.variables.alertItemList);
              }
            }
          }
        },
        message: "任务消息",
        sendTimeUTC: "任务接收时间",
        ticketName: "任务名称",
        tickeTaskStatusName: "任务状态",
        planTimeUTC: "计划处理时间"
      };

      function getTableData1(params, pageRequest, cb) {
        target.getTicketTasksByConditionAndPage(params, pageRequest, function (tc) {
          var tableData = tc.data;
          tableData.forEach(function (ele) {
            if (ele.variables && ele.variables.devName == "GF11_10#电机") {}

            ele.taskType = "综合处理";

            if (ele.variables.ticket.category == 330) {
              ele.taskType = "计划实施";
              ele.appName = "临时检修委托";
              /* ele.taskType = "计划实施";
              ele.appName = "临时委托"; */

              ele.message = ele.ticketTitle;
              ele.message = ele.variables.ticket.values.taskMessage;
              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            } else if (ele.variables.ticket.category == 290) {
              ele.taskType = "综合处理";
              ele.ticketName = ele.variables.standardProjectName;
              ele.message = ele.variables.taskMessage;
              ;
              ele.appName = "智能决策";
            } else if (ele.variables.ticket.category == 280) {
              ele.taskType = "综合处理";
              ele.ticketName = ele.variables.standardProjectName;
              ele.message = ele.ticketTitle;

              if (ele.variables.alertItemList.length > 1) {
                ele.appName = "合并告警";
              } else {
                ele.appName = ele.variables.alertItemList[0].appName;
              }
            } else if (ele.variables.ticket.category == 320 && ele.variables.ticket.values.taskJob == 1) {
              ele.taskType = "计划实施";
              ele.appName = "智能检修标准";
              ele.message = "周期性检修";
              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            } else if (ele.variables.ticket.category == 320) {
              ele.taskType = "综合处理";
              ele.appName = "智能决策";
              ele.message = ele.variables.ticket.values.taskMessage;
              ele.ticketName = ele.variables.ticket.values.standardProjectName;
            }

            ele.tickeTaskStatusName = "待检修";
            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
            ele.planTimeUTC = useMomentFormat(ele.variables.planTime, "yyyy-MM-dd hh:mm:ss");
          });
          cb(tc.data, tc.total);
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas, e) {
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
            "待检修": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "计划确认",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("maintainListData", elem.row);
                    /**
                     *  这里按照的是新方法
                     * 
                     */

                    var params = {
                      standardProjectNo: elem.row.variables.standardProjectId //   type:0,

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
                          } else if (createProject[i].type == "1" && createProject[i].ticketNo == elem.row.ticketNo) {
                            // 展示下标准的历史选中纪录
                            standardProject = [createProject[i]]; //判断当前的工单是否提交了历史记录

                            if (createProject[i].ticketNo == elem.row.ticketNo) {
                              createProjectFlag = false; // standardProject = createProject[i];
                              // standardProject.ticketNo = elem.row.ticketNo;
                            }
                          }
                        }

                        target.setValue("createProjectFlag", createProjectFlag);
                        target.setValue("MaintainPlan", standardProject[0]);
                        target.setValue("getMaintainPlanListData", standardProject);
                        target.createSystemPopupByViewId("516704673750000", {
                          "title": "计划确认",
                          // "top":"10%",
                          "width": "80%"
                        });
                      }
                    });
                  }
                }
              }, {
                label: "录入实绩",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("ticketNo", elem.row.ticketNo);
                    var ticketNo = {
                      ticketNo: elem.row.ticketNo
                    };
                    target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", ticketNo, function (tc) {
                      if (tc.data.length > 0) {
                        target.setValue("maintainListDataflag", true);
                        target.setValue("maintainListData", tc.data[0]); // 录入实绩弹框有问题

                        target.createSystemPopupByViewId("521445861880000", {
                          "title": "录入实绩",
                          "width": "90%"
                        });
                      } else {
                        target.growl("请先确认检修计划", "warning");
                      }
                    });
                  }
                }
              }, {
                label: "退回",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("maintainListData", elem.row);
                    var ticketNo = {
                      ticketNo: elem.row.ticketNo
                    }; // 是否制定维修方案

                    target.postService("deviceResumeUIService", "getMaintainPlanListByCondition", ticketNo, function (tc) {
                      if (tc.data.length > 0) {
                        target.growl("计划确认后不能提交", "warning");
                      } else {
                        target.createSystemPopupByLocalPath("page1", {
                          width: "500px",
                          title: "检修退回"
                        });
                      }
                    });
                  }
                }
              }, {
                label: "远程支持",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    var link = "https://rtc.ronghub.com/video.html?convId=2332&isCameraClose=false&resolution=1280*720&" + "userId=cc3c-26e6-1cc3-cb7e-42d9-d2d6-0f95-2a48&appId=x4vkb1qpxfrzk&userType=1";
                    window.open(link, "_blank");
                  }
                }
              }]
            }
          }
        });
        var param = {
          "taskStatus": 10,
          "categorys": "280,290,320,330",
          "tickeTaskStatus": "maintaining"
        };
        target.render({
          data: datas,
          params: param,
          paging: getTableData1,
          format: format
        });
      };

      render([]);
      target.off("queryTable1");
      target.on("queryTable1", function () {
        render([]);
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/494624133620031/index/content/dataTableAdvance_2.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/dataTableAdvance_2.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var target = event.target; // 获取设备id

      var resource = target.getValue("global/resource"); //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉

      var Dictionary = {
        "variables.customerName": "产线",
        "variables.devName": "设备信息",
        "variables.deviceCode": "设备编码",
        "taskJob": "任务分类",
        "appSource": "任务来源",
        message: "任务消息",
        sendTimeUTC: "任务接收时间",
        ticketTitle: "任务名称",
        tickeTaskStatusName: "任务状态",
        planTimeUTC: "计划处理时间"
      };

      function getTableData(params, pageRequest, cb) {
        target.getTicketTasksByConditionAndPage(params, pageRequest, function (tc) {
          tc.data.forEach(function (ele) {
            if (ele.variables.ticket.category == 310 && ele.variables.taskJob == 1) {
              //  
              ele.taskJob = "计划实施";
              ele.appSource = "状态维护标准";
              ele.tickeTaskStatusName = "待维护";
              ele.message = "周期性维护";
            } else if (ele.variables.ticket.category == 310 && ele.variables.taskJob == 2) {
              ele.taskJob = "计划实施";
              ele.appSource = "状态维护标准";
              ele.tickeTaskStatusName = "待维护";
              ele.message = ele.variables.taskMessage;
            } else if (ele.variables.ticket.category == 310) {
              ele.taskJob = "综合处理";
              ele.appSource = "智能决策";
              ele.tickeTaskStatusName = "待维护";
              ele.message = ele.variables.taskMessage;
            } else if (ele.variables.ticket.category == 340) {
              ele.taskJob = "故障处理";
              ele.appSource = "突发停机";
              ele.tickeTaskStatusName = "待处理";
              ele.message = ele.variables.deviceExcavationTask.accidentName;
            }

            ele.sendTimeUTC = useMomentFormat(ele.sendTime, "yyyy-MM-dd hh:mm:ss");
            ele.planTimeUTC = useMomentFormat(ele.variables.planTime, "yyyy-MM-dd hh:mm:ss");
            cb(tc.data, tc.total);
          });
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      var render = function render(datas) {
        var params = {
          "categorys": "340,310",
          "taskStatus": 10
        };
        var format = [];

        for (var i in Dictionary) {
          var item = target.explainDic(i, Dictionary[i]);
          format.push(item);
        }

        format.push({
          name: "操作",
          type: "valueBased",
          value: "taskConfigName",
          options: {
            "": {
              name: "操作",
              type: "buttonGroup",
              content: []
            },
            "待维护": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "录入实绩",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("maintainListData", elem.row.variables.standardInfo);
                    target.setValue("maintainListDataflag", false);
                    target.setValue("ticketNo", elem.row.ticketNo);
                    var faultBool = elem.row.variables && elem.row.variables.ticket && elem.row.variables.ticket.values && elem.row.variables.ticket.category == '310' && elem.row.variables.ticket.values.sourceTicketCategory && elem.row.variables.ticket.values.sourceTicketCategory == '340' ? true : false;

                    if (faultBool) {
                      target.setValue('message', elem.row.message);
                    } else {
                      target.setValue('message', "");
                    } // 录入实绩弹框有问题


                    target.createSystemPopupByViewId("525167783510000", {
                      "title": "录入实绩",
                      "width": "80%"
                    });
                  }
                }
              }, {
                label: "退回",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("maintainListData", elem.row);
                    target.createSystemPopupByLocalPath("page1", {
                      width: "500px",
                      title: "维护退回"
                    });
                  }
                }
              }]
            },
            "待处理": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "排故处理",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.setValue("rowData", elem.row);
                    target.createSystemPopupByLocalPath("page2", {
                      width: "800px",
                      title: "排故处理"
                    });
                  }
                }
              }]
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

      render([]);
      target.off("queryTable2");
      target.on("queryTable2", function () {
        render([]);
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/494624133620031/index/content/dataTableAdvance_4.js":
/*!*****************************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/dataTableAdvance_4.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  "theme": "dark",
  "on": {
    "init": function init(event) {
      var _tickeTaskStatusObj;

      var target = event.target;
      var navigateTrigger = false; //--------------------------自定义输入-----------------------------
      //从结果返回数据中的一组，拷贝过来作为参照，使用完之后删掉
      //自定义输入

      var Dictionary = {
        "values.customerName": "产线",
        "values.devName": "设备信息",
        "values.deviceCode": "设备编码",
        "taskJob": "任务分类",
        appName: {
          name: "任务来源",
          type: "alarmSource",
          value: "appName",
          on: {
            click: function click(elem) {
              elem.row.variables.alertItemList.forEach(function (ele) {
                ele.deviceName = elem.row.variables.devName;
              });

              if (elem.appName = "合并告警") {
                target.createSystemPopupByViewId("357383633040000", {
                  "title": "报警详情",
                  "top": "10%",
                  "width": "50%"
                }, elem.row.variables.alertItemList);
              }
            }
          }
        },
        "message": "任务消息",
        "ticketCreateTime": "任务接收时间",
        "ticketTitle": "任务名称",
        "tickeTaskStatusName": "任务状态",
        "realFinishTime": "实际完工日期"
      };
      var tickeTaskStatusObj = (_tickeTaskStatusObj = {
        "dealing": "待处理",
        "maintaining": "待检修",
        "backing": "被退回",
        "assessing": "待评价",
        "accepting": "待验收",
        "assessingAgain": "待评价",
        "end": "结束"
      }, _defineProperty(_tickeTaskStatusObj, "assessingAgain", "待评价"), _defineProperty(_tickeTaskStatusObj, "summarizing", "待总结"), _tickeTaskStatusObj);

      function getTableData(params, pageRequest, cb) {
        target.getDealTicketListByPage(params, pageRequest, function (tc) {
          if (tc.data) {
            tc.data.forEach(function (ele) {
              ele.realFinishTime = ele.values.realFinishTime ? useMomentFormat(ele.values.realFinishTime, "yyyy-MM-dd hh:mm:ss") : "";
              ele.ticketCreateTime = ele.values.ticketCreateTime ? useMomentFormat(ele.values.ticketCreateTime, "yyyy-MM-dd hh:mm:ss") : "";
              ele.tickeTaskStatusName = tickeTaskStatusObj[ele.values.tickeTaskStatus];

              if (ele.category == 310 && ele.values.taskJob == 1) {
                //  
                ele.taskJob = "计划实施";
                ele.appName = "状态维护标准";
                ele.message = "周期性维护";
                ele.ticketTitle = ele.message;
              } else if (ele.category == 310) {
                ele.taskJob = "综合处理";
                ele.appName = "智能决策";
                ele.ticketTitle = ele.message;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 340) {
                ele.taskJob = "故障处理";
                ele.appName = "突发停机";
                /** 340的情况任务名称和任务消息反了  */

                ele.ticketTitle = ele.message;
                ele.message = ele.values.deviceExcavationTask.accidentName;
              } else if (ele.category == 320 && ele.values.taskJob == 1) {
                ele.taskJob = "计划实施";
                ele.appName = "智能检修标准";
                ele.message = "周期性维护";
                ele.ticketTitle = ele.values.standardProjectName;
              } else if (ele.category == 320) {
                ele.taskJob = "综合处理";
                ele.appName = "智能决策";
                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 290) {
                ele.taskJob = "智能决策";
                ele.appName = "综合处理";
                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 330) {
                ele.taskJob = "计划实施";
                ele.appName = "临时委托";
                ele.ticketTitle = ele.values.standardProjectName;
                ele.message = ele.values.taskMessage;
              } else if (ele.category == 280) {
                ele.taskJob = "综合处理";
                ele.ticketTitle = ele.values.standardProjectName;

                if (ele.values.hasOwnProperty("alertItemList") && ele.values.alertItemList.length > 1) {
                  ele.appName = "合并告警";
                } else {
                  ele.appName = ele.values.alertItemList[0].appName;
                }

                ele.message = ele.message;
              }

              ele.tickeTaskStatusFlag = "";

              if (ele.category != 310 && ele.category != 340) {
                ele.tickeTaskStatusFlag = "过程跟踪";
              }
            });
            cb(tc.data, tc.total);
          }
        });
      } //--------------------------自定义输入-----------------------------
      //注意，下面内容别动！！！


      function render(datas, time) {
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
            //     "待总结": {
            //       name: "操作",
            //       type: "buttonGroup",
            //       content: [{
            //         label: "总结分析",
            //         icon: "null",
            //         class: "btn btn-default btn-sm",
            //         on: {
            //           click: function(elem) {
            //             target.setValue("rowData", elem.row);
            //             target.createSystemPopupByLocalPath("page3", {
            //               width: "1200px",
            //               title: "故障总结",
            //             });
            //           }
            //         }
            //       },{
            //         label: "排故履历",
            //         icon: "null",
            //         class: "btn btn-default btn-sm",
            //         on: {
            //           click: function(elem) {
            //             target.setValue("rowData", elem.row);
            //             target.createSystemPopupByLocalPath("page4", {
            //               width: "1200px",
            //               title: "排故履历",
            //             });
            //           }
            //         }
            //       }],
            // },
            // ,
            "过程跟踪": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "过程跟踪",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.refresh("prod_tracker", {
                      ticketNo: elem.row.ticketNo
                    });
                  }
                }
              }]
            },
            // 待说明展示的按钮
            "": {
              name: "操作",
              type: "buttonGroup",
              content: [{
                label: "过程跟踪",
                icon: "null",
                "class": "btn btn-default btn-sm",
                on: {
                  click: function click(elem) {
                    target.refresh("prod_tracker", {
                      ticketNo: elem.row.ticketNo
                    });
                  }
                }
              }]
            }
          }
        });
        var params = {
          "categorys": "280,290,320,330,340,310",
          validUserFlag: true,
          "ticketStatus": 100,
          "commitBeginTime": time ? time.firstTimeFrom : "",
          "commitEndTime": time ? time.firstTimeTo : ""
        };
        target.render({
          data: datas,
          params: params,
          paging: getTableData,
          format: format
        });
      }

      ;
      render([]); // 点击查询按钮

      target.off("queryTabel3");
      target.on("queryTabel3", function (time) {
        render([], time);
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/494624133620031/index/content/repeater_0.js":
/*!*********************************************************************!*\
  !*** ./app-views/views/494624133620031/index/content/repeater_0.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
module.exports = {
  on: {
    init: function init(event) {
      var target = event.target;
      var list = [{
        label: "待修项目数",
        index: 0,
        value: "-",
        icon: "proudsmart ps-bw_01",
        css: {
          "background-color": "#0c466d",
          "border": "1px solid #21a6fb"
        }
      }, {
        label: "待维护任务数",
        value: "-",
        index: 1,
        icon: "proudsmart ps-bw_02",
        css: {
          "background-color": "#484b2f",
          "border": "1px solid #e7b52b"
        }
      }, {
        label: "检修项目完成数",
        value: "-",
        index: 2,
        icon: "proudsmart ps-bw_09",
        css: {
          "background-color": "#66486d",
          "border": "1px solid #e0a2ef",
          "cursor": "pointer"
        }
      }, {
        label: "维护项目完成数",
        value: "-",
        index: 3,
        icon: "proudsmart ps-bw_03",
        css: {
          "background-color": "#472d3c",
          "border": "1px solid #e55057"
        }
      }]; //   target.render(list);

      var promise = new Promise(function (resolve, reject) {
        // 今日任务
        var params = {
          "taskStatus": 10,
          "categorys": "280,290,320,330",
          "tickeTaskStatus": "maintaining"
        };
        var pageRequest = {
          "start": 0,
          "length": 1
        };
        target.getTicketTasksByConditionAndPage(params, pageRequest, function (data) {
          list[0].value = data.total;
          resolve();
        });
      });
      promise.then(function (e) {
        return new Promise(function (resolve, reject) {
          var params = {
            "categorys": "340,310",
            "taskStatus": 10
          };
          var pageRequest = {
            "start": 0,
            "length": 1
          };
          target.getTicketTasksByConditionAndPage(params, pageRequest, function (data) {
            list[1].value = data.total;
            resolve();
          });
        });
      }).then(function (e) {
        // 异常处理有效率
        target.postService("baogangTicketService", " getMaintainIntelligentCount", [], function (tc) {
          return new Promise(function (resolve, reject) {
            if (tc.data) {
              list[2].value = tc.data.maintainCount;
              list[3].value = tc.data.stateMaintainCount;
              target.render(list);
            }
          });
        });
      });
    }
  }
};

/***/ }),

/***/ "./app-views/views/494624133620031/index/json.js":
/*!*******************************************************!*\
  !*** ./app-views/views/494624133620031/index/json.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** 仪表板 : [ 我的首页[智能检修工程师-1级] ] - 494624133620031 **/
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
              "expression": __webpack_require__(/*! ./content/repeater_0.js */ "./app-views/views/494624133620031/index/content/repeater_0.js")
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
                  "expression": "expression = {\n  on: {\n    repeat: function(event) {\n      var target = event.target;\n\n      var data = target.$repeatData;\n      var css = data.css;\n\n      target.setCss(css);\n    },\n    click: function(event) {\n      var target = event.target;\n      var data = target.$repeatData;\n\n    }\n  }\n}"
                },
                "children": [{
                  "type": "column",
                  "col": 12,
                  "children": [{
                    "label": "控件组",
                    "type": "ctrlgroup",
                    "source": "CTRLGROUP",
                    "advance": {
                      "expression": __webpack_require__(/*! ./content/ctrlgroup_5.js */ "./app-views/views/494624133620031/index/content/ctrlgroup_5.js")
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待检修任务\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }],
                  "col": 10
                }, {
                  "type": "column",
                  "children": [],
                  "col": 2
                }]
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_1.js */ "./app-views/views/494624133620031/index/content/dataTableAdvance_1.js")
                },
                "style": {},
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
              "margin": "5px"
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
                      "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"待维护任务\")\n        }\n    }\n}"
                    },
                    "parameters": {},
                    "echart": {},
                    "url": "images/map/map1.png"
                  }],
                  "col": 10
                }, {
                  "type": "column",
                  "children": [],
                  "col": 2
                }]
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_2.js */ "./app-views/views/494624133620031/index/content/dataTableAdvance_2.js")
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
                  "expression": __webpack_require__(/*! ./content/ctrlgroup_3.js */ "./app-views/views/494624133620031/index/content/ctrlgroup_3.js")
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
                  "expression": "expression = {\n    on : {\n        init : function(event){\n            var target = event.target;\n            target.setText(\"未结束任务\")\n        }\n    }\n}"
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
                  "expression": __webpack_require__(/*! ./content/dataTableAdvance_4.js */ "./app-views/views/494624133620031/index/content/dataTableAdvance_4.js")
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
          }]
        }],
        "url": "images/map/map1.png",
        "parameters": {}
      }],
      "col": 12
    },
    "setting": __webpack_require__(/*! ../setting.js */ "./app-views/views/494624133620031/setting.js")
  };
});

/***/ }),

/***/ "./app-views/views/494624133620031/setting.js":
/*!****************************************************!*\
  !*** ./app-views/views/494624133620031/setting.js ***!
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
//# sourceMappingURL=494624133620031.index.js.map