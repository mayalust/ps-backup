define(["controllers/controllers", "bootstrap-dialog"], function (
  controllers,
  BootstrapDialog
) {
  "use strict";
  controllers.controller("AppNavCtrl", [
    "$scope",
    "$state",
    "ngDialog",
    "$location",
    "Info",
    "alertService",
    "userLoginUIService",
    "viewFlexService",
    "unitService",
    "configUIService",
    "resourceUIService",
    "dictionaryService",
    "ticketTaskService",
    "$route",
    "$timeout",
    "$rootScope",
    "growl",
    "userDomainService",
    "userUIService",
    "userEnterpriseService",
    "$q",
    "$registerService",
    "psTreeData",
    "psUiRouterHandler",
    "commonMethodService",
    "commonMethodService2",
    "psConfig",
    "projectUIService",
    "psStore",
    function (
      $scope,
      $state,
      ngDialog,
      $location,
      Info,
      alertService,
      userLoginUIService,
      viewFlexService,
      unitService,
      configUIService,
      resourceUIService,
      dictionaryService,
      ticketTaskService,
      route,
      timeout,
      $rootScope,
      growl,
      userDomainService,
      userUIService,
      userEnterpriseService,
      q,
      registerService,
      psTreeData,
      psUiRouterHandler,
      cms,
      cms2,
      psConfig,
      projectUIService,
      psStore
    ) {

      var dialogInstance; // 弹出框实例
      var localmodel = false; // 本地测试模式
      var menuDisplayAlertCount = false; //菜单是否显示告警数量
      runtime.init();
      var target = new cms();
      $scope.criticalCount = 0; // 菜单栏严重告警个数
      $scope.orderCount = 0; // 待处理工单
      $scope.myOptions; // 单位对象
      $scope.myOptionDic; //单位字典
      $scope.myDicts; // 配置项字典
      $scope.provinces; // 省级区域
      $scope.citys; // 市级区域
      $scope.districts; // 县级区域
      $scope.cityDics; // 市级区域
      $scope.districtDics; // 县级区域
      //    $scope.powers = {}; // 权限列表
      $scope.alertView = []; //告警视图集合
      $scope.designView = []; //性能视图集合
      $scope.enterpriseType = 0; // 企业类型
      $scope.treeviewIndex = "";
      $scope.oldTreeviewIndex = "";
      $scope.loadingShow = false; //true 显示loading false 隐藏
      $scope.currentMenuCode = null; //当前的菜单编码
      $scope.firstMenuCode = null; //第一层的菜单编码
      $scope.localMenuCode = "F01"; //判断使用哪一个服务中心，用来替代localIndex
      $scope.showMenu = false;
      $scope.menuitems = {};
      $scope.getAllUserInfo; //缓存用户信息
      $scope.getAllDeviceInfo; //缓存设备信息

      // 路由跳转成功后触发
      $scope.$on("$routeChangeSuccess", function () {
        userLoginUIService.rootHandler($scope, $location);
        $scope.detailshow =
          route && route.$attr("current/params/mode") == "detail";
      });
      //弹出框的关闭事件
      $scope.closeDialog = function () {
        ngDialog.close();
      };

      psStore.add("getAllDicts");

      /**
       * 判断未登录后如何处理
       * localmodel＝true 本地测试使用
       */
      function extend(a, b) {
        for (var i in b) {
          a[i] = b[i];
        }
        return a;
      }
      var showLogin = function () {
        if (!localmodel) {
          return;
        }
        dialogInstance = BootstrapDialog.show({
          title: "欢迎来到普奥的世界",
          closable: false,
          //size:BootstrapDialog.SIZE_WIDE,
          message: function (dialog) {
            var $message = $("<div></div>");
            var pageToLoad = dialog.getData("pageToLoad");
            $message.load(pageToLoad);

            return $message;
          },
          data: {
            pageToLoad: "partials/login.html"
          },
          buttons: [
          {
            label: "登录",
            cssClass: "btn-success",
            action: function (dialogRef) {
              var userInput = document.getElementById("username");
              var psdInput = document.getElementById("password");
              userLoginUIService.login(userInput.value, psdInput.value);
            }
          },
          {
            label: "退出",
            action: function (dialogRef) {
              dialogRef.close();
              location.href = "../index.html";
            }
          }]
        });
      };

      /**
       * 获得基础配置
       */
      Info.get("../localdb/info.json", function (info) {
        if ($scope.baseConfig) {
          delete info.customerConfig;
          delete info.projectConfig;
          $scope.baseConfig = jQuery.extend(true, $scope.baseConfig, info);
        } else {
          $scope.baseConfig = info;
        }
      });

      /**
       * 获得KPI的图片配置
       */
      Info.get("../localdb/icon.json", function (info) {
        $scope.kpiIconList = info.kpiIcon;
      });

      /**
       * 切换角色的登陆状态
       * 韩星 2018.01.08
       */

      function checkLoginAccont(userInfo) {
        /**
         * 1 该用户有几个角色
         * 2 每个角色切换视图
         */
        function getCurrentLocation() {
          var path = window.location.pathname,
            match = /\/(app\-[\w-]+)\//.exec(path);
          return match ? match[1] : null;
        }

        function getMainActiveIndexFromHash() {
          var hash = window.location.hash,
            arr = hash.split("/");
          return arr[4] - 0;
        }
        var watch = $scope.$watch("baseConfig", function (n, o, s) {
          if (typeof n === "object") {
            var location = getCurrentLocation();
            if (location === "app-sc" && !n.openSidebar) {
              $(".sidebar-toggle").css("display", "none");
              $(".main-sidebar").css("display", "none");
              $(".sidebar-mini.sidebar-collapse .content-wrapper").css(
                "cssText",
                "margin-left: 0px!important"
              );
            }
            watch();
          }
        });
        userEnterpriseService.queryEnterpriseRole(function (returnObj) {
          if (returnObj.code == 0) {
            $scope.index = getMainActiveIndexFromHash();
            $scope.roles = returnObj.data ?
              returnObj.data.filter(function (ele) {
                if (ele.roleID == "100") {
                  return false;
                }
                if (userInfo.roleID.indexOf(ele.roleID) == -1) {
                  return false;
                }
                return ele.values;
              }) : [];
            $scope.roleInfo = $scope.roles.find(function (n) {
              return n.roleID == userLoginUIService.user.currentRoleID;
            });
            if (typeof $scope.roleInfo === "undefinded") {
              throw new Error("role cannot be found on current user");
              return;
            }
            psConfig.setRoleValues($scope.roleInfo.values);
            try {
              console.log("render Tabs", ((new Date - window.__loadedTime__) / 1000).toFixed(3) + "s");
              $rootScope.tabs = JSON.parse($scope.roleInfo.values).children;
            } catch (e) {
              $rootScope.tabs = [];
              console.error(e);
              return;
            }
          }
        });
        $rootScope.$on("main_active_index", function (event, index) {
          $scope.index = index;
          $rootScope.main_active_index = index;
        });
        $scope.navToPage = function (params, index) {
          $rootScope.main_active_index = index;
          $scope.index = params.index;
          psUiRouterHandler(params).then(function (d) {
            $state.go.apply($state, d);
          });
        };
        $scope.$on('PS_MENU_BUTTON_CLICKED', function (e, data) {
          //console.log(e, data);
          $scope.$broadcast('PS_MENU_BUTTON_CLICKED_DONE', data);
        });
        $scope.$on('PS_MENU_LIST_ITEM_CLICKED', function (e, data) {
          psUiRouterHandler(data.parameter).then(function (d) {
            $state.go.apply($state, d);
          });
        });
        //PS_MENU_LIST_ITEM_CLICKED
        $scope.changeRole = function (e) {
          userLoginUIService.user.usercurrentRoleID = e.roleID + "";
          userLoginUIService.user.currentRoleID = e.roleID;
          psConfig.updateRoleValues(e.values).then(function (values) {
            var default_tab = values.children[0];
            $rootScope.tabs = values.children;
            cms2.navigateTo(0);
          });
        };

        $scope.loginNames.forEach(function (ele, index, arr) {
          if (ele.account == userInfo.loginName) {
            $scope.loginName = $scope.loginNames[index];
          }
        });
        // 缓存用户
        if (
          userInfo.loginName == "baowu_admin" ||
          userInfo.loginName == "013346" ||
          userInfo.loginName == "045400" ||
          userInfo.loginName == "171171" ||
          userInfo.loginName == "013346"
        ) {
          sessionStorage.setItem("loginNames", userInfo);
        }
        // 判断该不该显示选择框
        if (sessionStorage.getItem("loginNames")) {
          $scope.isShowSelect = true;
        } else {
          $scope.isShowSelect = false;
        }
      }

      var loginNames = [
        {
          userName: "决策者虚拟工作台",
          account: "baowu_admin",
          password: "abc123"
        },
        {
          userName: "报警管理虚拟工作台  ",
          account: "baowu_bj",
          password: "abc123"
        },
        {
          userName: "诊断管理虚拟工作台   ",
          account: "baowu_fx",
          password: "abc123"
        },
        {
          userName: "协同管理虚拟工作台   ",
          account: "baowu_xt",
          password: "abc123"
        },
        {
          userName: "审核管理虚拟工作台   ",
          account: "baowu_sh",
          password: "abc123"
        },
        {
          userName: "点检管理虚拟工作台   ",
          account: "baowu_dj",
          password: "abc123"
        },
        {
          userName: "产线管理虚拟工作台   ",
          account: "baowu_cx",
          password: "abc123"
        },
        {
          userName: "检修管理虚拟工作台   ",
          account: "baowu_jx",
          password: "abc123"
        },
        {
          userName: "孟坤荫", //  精密检测工程师
          account: "170628",
          password: "abc123"
        },
        {
          userName: "乐海滨", //产线工程师
          account: "041048",
          password: "abc123"
        },
        {
          userName: "沈政", //产线工程师
          account: "171211",
          password: "abc123"
        },
        {
          userName: "宋明中", //总包诊断工程师
          account: "080231",
          password: "abc123"
        },
        {
          userName: "陈黎敏", // 总包产线诊断
          account: "190625",
          password: "abc123"
        },
        {
          userName: "沈嘉麟", //产线工程师
          account: "170373",
          password: "abc123"
        },
        {
          userName: "廖勇", // 2050产线决策
          account: "190712",
          password: "abc123"
        },
        {
          userName: "陈红琳", //'报警管理员',
          account: "170307",
          password: "abc123"
        },
        {
          userName: "张骏骋", // 辊道备修工程师
          account: "174079",
          password: "abc123"
        },
        {
          userName: "腾威", //辊道备修质量工程师
          account: "171352",
          password: "abc123"
        },
        {
          userName: "张君", //访客工作台
          account: "170381",
          password: "abc123"
        },
        {
          userName: "陈弘", //卷筒工作台
          account: "171163",
          password: "abc123"
        },
        {
          userName: "审核专家", //审核专家
          account: "baowu_shzj",
          password: "abc123"
        },
        {
          userName: "宋小佩", //电厂脱硫系统
          account: "190494",
          password: "abc123"
        },
        {
          userName: "沈亮", // 电厂脱硫产线工程师
          account: "190426",
          password: "abc123"
        },
        {
          userName: "炼铁厂(产内)", // 电厂脱硫产线工程师
          account: "baowu_lt",
          password: "abc123"
        },
        {
          userName: "万欣(测试新框架)", // 电厂脱硫产线工程师
          account: "170616",
          password: "abc123"
        },
        {
          userName: "智能诊断工程师", // 电厂脱硫产线工程师
          account: "190747",
          password: "abc123"
        },
        {
          userName: "葛申剑", //产线工程师
          account: "190747",
          password: "abc123"
        },
        {
          userName: "经营服务人员", // 备修流程经营服务人员
          account: "baowu_jyfw",
          password: "abc123"
        },
        {
          userName: "工艺工程师", // 备修流程工艺工程师
          account: "baowu_gygc",
          password: "abc123"
        },
        {
          userName: "作业实施人员", // 备修流程作业实施人员
          account: "baowu_zyss",
          password: "abc123"
        },
        {
          userName: "质量工程师", // 备修流程质量工程师
          account: "baowu_zlgc",
          password: "abc123"
        }],
        // 本地用户显示
        loginNamesLocal = [
        {
          userName: "汤霄炯", // 电厂脱硫产线工程师
          account: "190520",
          password: "abc123"
        },
        {
          userName: "环保管理员", // 电厂脱硫产线工程师
          account: "baowu_huanbao",
          password: "abc123"
        },
        {
          userName: "废水", // 能环部废水
          account: "baowu_fs",
          password: "abc123"
        }],
        isLocal = function () {
          var host = window.location.host;
          return (
            host && host.search("localhost") != -1 && host.search("127.0.0.1")
          );
        };
      $scope.loginNames = isLocal() ?
        loginNames.concat(loginNamesLocal) :
        loginNames;

      $scope.loginFun = function (e) {
        userLoginUIService.loginCallback(e.account, e.password, function (
          userInfo
        ) {
          if (userInfo.code == 0) {
            // 清除所有的设备除了用户的sessionStorage
            for (var i in sessionStorage) {
              if (i != "loginNames") {
                sessionStorage.removeItem(i);
              }
            }
            window.location.href = "index.html";
          }
        });
      };

      $scope.gotoHomePage = function () {
        if (userLoginUIService.user.enterprise.logoStatus != "0") {
          location.href = "http://www.proudsmart.com";
        }
      };

      $scope.gotoAppPage = function () {
        location.href = "index.html";
      };

      $scope.showMenuFun = function () {
        $scope.showMenu = !$scope.showMenu;
      };

      $scope.logout = function () {
        sessionStorage.clear();
        userLoginUIService.logout();
      };

      $scope.onViewLoad = function () {};

      function initUnit(callbackFun) {
        unitService.getAllUnits(function (returnObj) {
          if (returnObj.code == 0) {
            unitService.units = returnObj.data;
            $scope.myOptions = returnObj.data;
            unitService.unitDics = {};
            for (var i in $scope.myOptions) {
              unitService.unitDics[$scope.myOptions[i].unitCode] =
                $scope.myOptions[i].unitName;
              if (
                $scope.myOptions[i].unitCode == "NA" ||
                $scope.myOptions[i].unitCode == "Number"
              )
                unitService.unitDics[$scope.myOptions[i].unitCode] = "";
            }
            $scope.myOptionDic = unitService.unitDics;
            if (callbackFun) {
              callbackFun();
            }
            resourceUIService.unitLoader($scope.myOptionDic);
          }
        });
        dictionaryService.getAllDicts(function (returnObj) {
          if (returnObj.code == 0) {
            dictionaryService.dicts = returnObj.data;
            $scope.myDicts = returnObj.data;
            var dic = {};
            for (var i in returnObj.data) {
              var obj = returnObj.data[i];
              if (dic[obj.dictCode]) {
                dic[obj.dictCode].push(obj);
              } else {
                dic[obj.dictCode] = [];
                dic[obj.dictCode].push(obj);
              }
            }
            for (var items in dic) {
              $scope.myDicts[items] = dic[items];
            }
            psStore.commit("getAllDicts", $scope.myDicts);
          }
        });
        /**
         * 韩星 2018.2.6
         * 缓存所有的用户
         */
        userUIService.queryUserByCondition({}, function (returnObj) {
          if (returnObj.code == 0) {
            var getAllUserInfoList = returnObj.data;
            for (var i in getAllUserInfoList) {
              getAllUserInfoList[getAllUserInfoList[i].loginName] =
                getAllUserInfoList[i].userName;
              getAllUserInfoList[getAllUserInfoList[i].userID] =
                getAllUserInfoList[i].userName;
            }
            $scope.getAllUserInfo = getAllUserInfoList;
          }
        });
        /**
         * 缓存所有的设备的部分字段(includeFields=label,externalDevId,id)
         * HANXING 2018.3.28
         */

        resourceUIService.deviceLoader().then(function (getAllDeviceInfos) {
          var obj = {};
          for (var i in getAllDeviceInfos) {
            obj[getAllDeviceInfos[i].id] = getAllDeviceInfos[i];
            obj[getAllDeviceInfos[i].externalDevId] = getAllDeviceInfos[i];
          }
          $scope.getAllDeviceInfo = obj;
        });

        if (!resourceUIService.hasOwnProperty("provinces")) {
          resourceUIService.getSimpleDistricts(function (returnObj) {
            if (returnObj.code == 0) {
              resourceUIService.provinces = returnObj.data;
              $scope.provinces = returnObj.data;
              $scope.cityDics = {};
              $scope.districtDics = {};
              $scope.provinces.forEach(function (province) {
                $scope.cityDics[province.id] = province.children;
                province.children.forEach(function (city) {
                  $scope.districtDics[city.id] = city.children;
                });
              });
            }
          });
        }
        resourceUIService.getAllDataTypes(function (returnObj) {
          if (returnObj.code == 0) {
            $scope.allDataTypes = returnObj.data;
          }
        });
      }

      function initRootDomain() {
        resourceUIService.getRootDomain(function (returnObj) {
          if (returnObj.code == 0) {
            if (returnObj.data) {
              $scope.rootCi = returnObj.data.id;
            } else {
              growl.error("当前用户不存在rootCi，请联系客服处理。", {});
            }
          }
        });
      }

      /**
       * 获得基本的模型定义，包括：
       * 测点定义
       * 指令定义
       * 属性定义
       */
      function getKpisByModelId(modelId, callback) {
        resourceUIService.getKpisByModelId(modelId, function (e) {
          if (e.code == 0) {
            callback(e.data);
          }
        })
      }

      function makeSequence(condition, success) {
        var rs = [];
        return function recursive(queue) {
          var item = queue.shift(),
            next = function (d) {
              [].push.apply(rs, d);
              recursive(queue);
            }
          item ? condition(item, next) : success(rs);
        }
      }

      function getAllKpis(callback) {
        var sequence = makeSequence(function (d, next) {
          getKpisByModelId(d, function (n) {
            next(n.map(function (a) {
              d != -1 ? a.modelId = d != -1 : null;
              return a;
            }))
          })
        }, callback);
        sequence([300, 301, 302, -1]);
      }

      function initRootModels() {
        $rootScope.rootModelsDic = {
          300: {},
          301: {},
          302: {}
        };
        resourceUIService.rootModelsDic = $rootScope.rootModelsDic;
        resourceUIService.getModelsByCondition({}, function (returnObj) {
          if (returnObj.code == 0) {
            returnObj.data.forEach(function (model) {
              if (!$rootScope.rootModelsDic[model.id])
                $rootScope.rootModelsDic[model.id] = {};
              $rootScope.rootModelsDic[model.id].model = model;
            });
            //-1表示查询所有的模版上的KPI
            getAllKpis(function (subReturnObj) {
              //resourceUIService.getKpisByModelId(-1, function (subReturnObj) {
              subReturnObj.forEach(function (kpiDef) {
                if (!$rootScope.rootModelsDic[kpiDef.modelId]) return;
                $rootScope.rootModelsDic[kpiDef.modelId].kpiDic = $rootScope.rootModelsDic[kpiDef.modelId].kpiDic || {};
                if ($scope.myOptionDic[kpiDef.unit])
                  kpiDef.unitLabel = $scope.myOptionDic[kpiDef.unit];
                var regExp = /\{|\[.*\}|\]/;
                if (kpiDef.range) {
                  var find = regExp.test(kpiDef.range);
                  var rangeObj = [];
                  if (find) {
                    try {
                      rangeObj = find ? JSON.parse(kpiDef.range) : [];
                    } catch (e) {}
                  }
                  kpiDef.rangeAry = rangeObj;
                  if (rangeObj instanceof Array) {
                    kpiDef.rangeAry = rangeObj;
                    if (rangeObj.length == 2) {
                      kpiDef.min = rangeObj[0];
                      kpiDef.max = rangeObj[1];
                    }
                  } else if (rangeObj instanceof Object) {
                    kpiDef.rangeObj = rangeObj;
                  }
                }
                $rootScope.rootModelsDic[kpiDef.modelId].kpiDic[
                  kpiDef.id
                ] = kpiDef;
              });
              resourceUIService.modelLoader($rootScope.rootModelsDic);
            });

            //获得所有模板的属性
            resourceUIService.getAllAttrs(function (subReturnObj) {
              if (subReturnObj.code == 0) {
                subReturnObj.data.forEach(function (attrDef) {
                  if (!$rootScope.rootModelsDic[attrDef.modelId]) return;
                  if (!$rootScope.rootModelsDic[attrDef.modelId].attrs)
                    $rootScope.rootModelsDic[attrDef.modelId].attrs = [];
                  $rootScope.rootModelsDic[attrDef.modelId].attrs.push(attrDef);
                });
              }
            });

            //-1表示获得所有模板的指令
            resourceUIService.getDirectivesByModelId(-1, function (
              subReturnObj
            ) {
              if (subReturnObj.code == 0) {
                subReturnObj.data.forEach(function (dirDef) {
                  if (!$rootScope.rootModelsDic[dirDef.modelId]) return;
                  if (!$rootScope.rootModelsDic[dirDef.modelId].directives)
                    $rootScope.rootModelsDic[dirDef.modelId].directives = [];
                  $rootScope.rootModelsDic[dirDef.modelId].directives.push(
                    dirDef
                  );
                });
              }
            });
          }
        });
      };

      function initCount() {
        if (menuDisplayAlertCount) {
          var params = {};
          params.states = "0";
          alertService.countFromCache(params, function (returnObj) {
            if (returnObj.code == 0) {
              $scope.criticalCount = returnObj.data.criticalCount;
            }
          });
          //获取执行中工单
          var status = 100;
          ticketTaskService.getTicketsByStatus(status, function (m) {
            if (m.code == 0) {
              $scope.orderCount = m.data.length;
            }
          });
        }
      };

      function initViews() {
        $scope.alertView = [];
        $scope.designView = [];
        $scope.dashboardView = [];
        viewFlexService.getAllMyViews(function (returnObj) {
          if (returnObj.code == 0) {
            var v = returnObj.data;
            var viewList = [];
            for (var i = 0; i < v.length; i++) {
              var view = v[i];
              if (view) {
                viewList.push(view);
                var description = {};
                if (typeof view.description == "string") {
                  var objectLike = /^\{(.|\n)*\}$/;
                  var reg = objectLike.test(view.description);
                  if (reg) {
                    description = JSON.parse(view.description);
                  }
                }
                if (view.viewType == "designView") {
                  var viewmenus = {
                    title: view.viewTitle.split("?")[0],
                    url: "#/" + view.viewType + "/" + view.viewId,
                    viewId: view.viewId,
                    view: view,
                    status: description["status"],
                    statusBg: description["status"] == 1 ?
                      "bg-red" : description["status"] == 2 ?
                      "bg-green" : "",
                    statusLab: description["status"] == 1 ?
                      "授权" : description["status"] == 2 ?
                      "购买" : "",
                    icon: "fa fa-area-chart"
                  };
                  $scope.designView.push(viewmenus);
                } else if (view.viewType == "configAlert") {
                  var viewmenus = {
                    title: view.viewTitle.split("?")[0],
                    url: "#/" + view.viewType + "/" + view.viewId,
                    viewId: view.viewId,
                    view: view,
                    status: description["status"],
                    statusBg: description["status"] == 1 ?
                      "bg-red" : description["status"] == 2 ?
                      "bg-green" : "",
                    statusLab: description["status"] == 1 ?
                      "授权" : description["status"] == 2 ?
                      "购买" : "",

                    icon: "fa fa-warning"
                  };
                  if (viewmenus.title == "全部告警") {
                    $scope.alertView.splice(0, 0, viewmenus);
                  } else {
                    $scope.alertView.push(viewmenus);
                  }
                } else if (view.viewType == "dashboard") {
                  view.label = view.viewTitle;
                  view.show = true;
                  $scope.dashboardView.push(view);
                }
              }
            }
            /* for(var i = 0; i < 1; i++){
             var viewmenus = {
             "title": "viewmenus" + i,
             "url": "#",
             "viewId": i,
             "icon": "fa fa-warning",
             "view" : {
             "viewId" : 123
             }
             };
             $scope.alertView.push(viewmenus);
             }*/
            viewFlexService.viewLoadFinished = true;
            viewFlexService.viewList = viewList;
            $scope.viewList = viewList;
            $scope.$broadcast("viewLoadFinished");
          }
        });
      }

      function initDefaultKpis() {
        resourceUIService.getKpiTypeByFilter({}, function (returnObj) {
          if (returnObj.code == 0) {
            var newObj = [];
            returnObj.data.forEach(function (obj) {
              obj.text = obj.label;
              newObj.push(obj);
            });
            $scope.defaultKpiList = newObj;
          }
        });
      };

      function devDicInit() {
        resourceUIService.getResourceByModelId(
          301,
          function (customer) {
            let customerObj = customer.data;
            resourceUIService.getResourceByModelId(
              302,
              function (project) {
                let projectObj = project.data;
                for (let i = 0; i < projectObj.length; i++) {
                  for (let j = 0; j < customerObj.length; j++) {
                    if (projectObj[i].parentID == customerObj[j].id) {
                      projectObj[i]["customerLabel"] = customerObj[j].label;
                    }
                  }
                }
                resourceUIService.getDevicesByCondition({}, device => {
                  let deviceObj = device.data;
                  for (let i = 0; i < deviceObj.length; i++) {
                    for (let j = 0; j < projectObj.length; j++) {
                      if (deviceObj[i].projectId == projectObj[j].id) {
                        deviceObj[i]["customerLabel"] =
                          projectObj[j].customerLabel;
                        deviceObj[i]["projectLabel"] = projectObj[j].label;
                      }
                    }
                  }
                  let deviceObjs = {};
                  deviceObj.forEach(d => {
                    deviceObjs[d.id] = d;
                  });
                  $rootScope.deviceDicArr = deviceObj;
                  $rootScope.deviceDic = deviceObjs;
                  resourceUIService.deviceObjLoader($rootScope.deviceDic);
                });
              },
              "includeFields=label,id,parentID"
            );
          },
          "includeFields=label,id"
        );
      };
      $scope.menusFilter = function (item) {
        return item.functionCode.charAt(0) === "S";
      };

      $scope.publicTableSearch = function (tabelname, value) {
        $scope.$broadcast("table-search-handle", {
          name: tabelname,
          value: value
        });
      };

      function initConfigManager(callbackFun) {
        configUIService.getConfigsByGroupName("EnterpriseConfig", function (
          returnObj
        ) {
          if (returnObj.code == 0) {
            if (returnObj.data && returnObj.data.length > 0) {
              returnObj.data.forEach(function (item) {
                try {
                  if ($scope.baseConfig) {
                    $scope.baseConfig = jQuery.extend(
                      true,
                      $scope.baseConfig,
                      JSON.parse(item.value)
                    );
                  } else {
                    $scope.baseConfig = JSON.parse(item.value);
                  }
                  if ($scope.baseConfig) {
                    //拥有企业设置
                    if ($scope.baseConfig.title)
                      $("title").html($scope.baseConfig.title);
                    else $("title").html("");
                    if ($scope.baseConfig.shortcut)
                      $("link[rel='shortcut icon']").attr(
                        "href",
                        $scope.baseConfig.shortcut + "?" + new Date().getTime()
                      );
                    else
                      $("link[rel='shortcut icon']").attr(
                        "href",
                        "../login/images/shortcut_null.png" +
                        "?" +
                        new Date().getTime()
                      );
                  }
                } catch (e) {}
              });
            } else {
              $("title").html("");
              $("link[rel='shortcut icon']").attr(
                "href",
                "../login/images/shortcut_null.png" + "?" + new Date().getTime()
              );
            }
            callbackFun();
          }
        });
      };

      function domainTreeQuery() {
        // 获取当前用户的domains
        var domainsArr = userLoginUIService.user.domains.split("/");
        var domainListTree = {};
        for (var i = 2; i < domainsArr.length - 1; i++) {
          resourceUIService.getResourceById([domainsArr[i]], function (tc) {
            domainListTree[tc.data.domainPath] = tc.data;
            domainListTree[tc.data.id] = tc.data;
          });
        }
        resourceUIService.getDomainsByFilter({}, function (tc) {
          for (var i in tc.data) {
            domainListTree[tc.data[i].domainPath] = tc.data[i];
            domainListTree[tc.data[i].id] = tc.data[i];
          }
          $rootScope.domainListDic = domainListTree;
          resourceUIService.domainsLoader(domainListTree);
        });
      };

      function initUserObjects() {
        initConfigManager(function () {
          userLoginUIService.initMenus($scope, $location);
        });
        initUnit(function () {
          initRootModels();
        });
        initViews();
        initRootDomain();
        initCount();
        initDefaultKpis();
        domainTreeQuery();
        devDicInit();
      }

      // 监听用户登录状态
      $scope.$on("loginStatusChanged", function (evt, d) {
        if (userLoginUIService.user.isAuthenticated) {
          if (dialogInstance) {
            dialogInstance.close();
          }
          $scope.userInfo = userLoginUIService.user;
          $scope.lastLoginTime = newDateJson(
            userLoginUIService.user.lastLoginTime
          ).Format(GetDateCategoryStrByLabel());
          if (userLoginUIService.user.enterprise)
            $scope.enterpriseType =
            userLoginUIService.user.enterprise.enterpriseType;
          initUserObjects();
          checkLoginAccont($scope.userInfo);
        } else {
          $scope.userInfo = {};
          $scope.lastLoginTime = "";
          showLogin();
        }
      });
    }
  ]);

  controllers.controller("AppUploadCtrl", [
    "$scope",
    "growl",
    "FileUploader",
    function ($scope, growl, FileUploader) {
      $scope.fileMaxSize = $scope.fileMaxSize ? $scope.fileMaxSize : 1;
      $scope.fileFormat = $scope.fileFormat ?
        $scope.fileFormat :
        "jpg、png、jpeg、bmp、gif、svg";
      $scope.queueLimit = $scope.queueLimit ? $scope.queueLimit : 1;
      var uploader = ($scope.uploader = new FileUploader({
        url: $scope.serviceOrigin,
        withCredentials: true,
        //      queueLimit: 1, //文件个数
        removeAfterUpload: true //上传后删除文件
      }));

      uploader.fileBelongDic = {};

      // FILTERS
      uploader.filters.push({
        name: "fileFilter",
        fn: function (item, options) {
          var nameAry = item.name.split(".");
          var type = nameAry[nameAry.length - 1];
          if ($scope.fileFormat.indexOf(type) == -1) {
            growl.warning(
              "文件格式仅支持" + $scope.fileFormat + "文件，请重新选择", {}
            );
            return false;
          }
          if (item.size / 1024 > $scope.fileMaxSize * 1000) {
            growl.warning(
              "您选择的文件大于" + $scope.fileMaxSize + "M，请重新选择", {}
            );
            return false;
          }
          return true;
        }
      });

      // CALLBACKS
      uploader.onWhenAddingFileFailed = function (item, filter, options) {
        //      uploader.clearQueue();
        //      uploader.destroy();
        console.info("onWhenAddingFileFailed", item, filter, options);
      };
      uploader.onAfterAddingFile = function (fileItem) {
        if (uploader.queue.length > $scope.queueLimit)
          uploader.removeFromQueue(uploader.queue.length.length - 1);
        console.info("onAfterAddingFile", fileItem);
      };
      uploader.onAfterAddingAll = function (addedFileItems) {
        if (uploader.fileBelongId) {
          uploader.fileBelongDic[uploader.fileBelongId] = addedFileItems;
        }
        $scope.$broadcast("onAfterAddingAll", {
          addedFileItems: addedFileItems
        });
        console.info("onAfterAddingAll", addedFileItems);
      };
      uploader.onBeforeUploadItem = function (item) {
        Array.prototype.push.apply(item.formData, uploader.formData);
        console.info("onBeforeUploadItem", item);
      };
      uploader.onProgressItem = function (fileItem, progress) {
        console.info("onProgressItem", fileItem, progress);
      };
      uploader.onProgressAll = function (progress) {
        console.info("onProgressAll", progress);
      };
      uploader.onSuccessItem = function (fileItem, response, status, headers) {
        console.info("onSuccessItem", fileItem, response, status, headers);
      };
      uploader.onErrorItem = function (fileItem, response, status, headers) {
        growl.warning("上传文件失败", {});
        $scope.loadingShow = false;
        console.info("onErrorItem", fileItem, response, status, headers);
      };
      uploader.onCancelItem = function (fileItem, response, status, headers) {
        console.info("onCancelItem", fileItem, response, status, headers);
      };
      uploader.onCompleteItem = function (fileItem, response, status, headers) {
        console.info("onCompleteItem", fileItem, response, status, headers);
        uploader.formData = []; //清空参数
        if (response) {
          if (response.code == 0)
            $scope.$broadcast("uploadTemplate", {
              state: true,
              response: response
            });
          else growl.error(response.message, {});
          $scope.loadingShow = false;
        } else {
          growl.error("操作异常了，尝试重新刷新", {});
        }
      };
      uploader.onCompleteAll = function () {
        console.info("onCompleteAll");
      };
      uploader.uplaodHandler = function () {
        uploader.uploadAll();
        scope.loadingShow = true;
        uploader.fileBelongDic = {};
        uploader.fileBelongId = "";
      };
      uploader.clearHandler = function () {
        uploader.clearQueue();
        uploader.fileBelongDic = {};
        uploader.fileBelongId = "";
      };
      uploader.growl = function (msg) {
        growl.info(msg, {});
      };
    }
  ]);
});