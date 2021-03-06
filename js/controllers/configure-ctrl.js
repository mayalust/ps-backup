define(["controllers/controllers", "bootstrap-dialog"], function (
  controllers,
  BootstrapDialog
) {
  "use strict";
  //根据接口调用自定义视图获取
  //用户登录userLoginUIService
  controllers.controller("ConfigureCtrl", [
    "$scope",
    "$q",
    "$rootScope",
    "$location",
    "$timeout",
    "growl",
    "userLoginUIService",
    "resourceUIService",
    "viewFlexService",
    "userDomainService",
    "solutionUIService",
    "unitService",
    "configUIService",
    function (
      $scope,
      q,
      $rootScope,
      $location,
      $timeout,
      growl,
      userLoginUIService,
      resourceUIService,
      viewFlexService,
      userDomainService,
      solutionUIService,
      unitService,
      configUIService
    ) {
      if (location.hash == "" || location.hash.search("#/index") > -1) {
        location.href = "../app-oc/index.html#/configureview";
        return;
      }
      $scope.errorMsg = "";
      $scope.slide = "1";
      //    $scope.powers = {};
      $scope.treeAry = [];
      $scope.configureView = []; //组态视图集合
      $scope.echartView = []; //组态视图集合
      $scope.configViewBg = []; //组态自定义背景集合
      $scope.configCustoms = []; //组态自定义组件集合
      $scope.configCommons = []; //组态自定义组件集合
      $scope.myOptions;
      $scope.treeviewIndex = "";
      $scope.oldTreeviewIndex = "";
      $scope.defaultRoute = "../app-oc/index.html#/configureview";
      $scope.currentMenuCode = null; //当前的菜单编码
      $scope.firstMenuCode = null; //第一层的菜单编码
      $scope.localMenuCode = "F01"; //判断使用哪一个服务中心，用来替代localIndex
      $scope.showMenu = false;
      $scope.menuitems = {};
      // 路由跳转成功后触发
      $scope.$on("$routeChangeSuccess", function () {
        userLoginUIService.rootHandler($scope, $location);
      });

      function initMenus() {
        function menuhandle(menuInfo) {
          menuInfo.searchUrl = menuInfo.url ?
            menuInfo.url.substring(1) + "/" :
            ""; //菜单选中状态用
          if (menuInfo.function) {
            menuInfo.function.forEach(function (handlemenu) {
              menuInfo.searchUrl =
                menuInfo.searchUrl +
                (handlemenu.url ? handlemenu.url.substring(1) + "/" : "");
              $scope.menuitems[handlemenu.functionCode] = handlemenu;
              if (handlemenu.url) $scope.menuitems[handlemenu.url] = handlemenu;
              menuhandle(handlemenu);
            });
          }
        }
        $scope.userInfo.functionList.forEach(function (menu) {
          $scope.menuitems[menu.functionCode] = menu;
          if (menu.url) $scope.menuitems[menu.url] = menu;
          menuhandle(menu);
        });
        $scope.menuitems["isloaded"] = true; //加载完毕
        rootHandler();
      }
      $scope.alertLevels = [
      {
        label: "正常",
        id: 0
      },
      {
        label: "警告",
        id: 1
      },
      {
        label: "次要",
        id: 2
      },
      {
        label: "重要",
        id: 3
      },
      {
        label: "严重",
        id: 4
      }];

      $scope.stateDisplayModel = [
      {
        label: "不显示",
        id: 0,
        type: "basic.Text,basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon,basic.Image"
      },
      {
        label: "仅背景",
        id: 1,
        type: "basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon"
      },
      {
        label: "仅文字",
        id: 2,
        type: "basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon,basic.Image"
      },
      {
        label: "全显示",
        id: 3,
        type: "basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon"
      }];
      $scope.stateTypeModel = [
      {
        label: "默认",
        id: 0,
        type: "basic.Text,basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon,basic.Image"
      },
      {
        label: "呼吸灯",
        id: 1,
        type: "basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon,basic.Image"
      },
      {
        label: "气泡",
        id: 2,
        type: "basic.Circle"
      },
      {
        label: "呼吸灯(忽略透明)",
        id: 3,
        type: "basic.Rect,basic.Circle,basic.Rhombus,basic.Path,basic.Polygon,basic.Image"
      },
      {
        label: "气泡(忽略透明)",
        id: 4,
        type: "basic.Circle"
      }];

      $scope.selectTypes = [
      {
        label: "按域选择",
        id: 0
      },
      {
        label: "按设备类型选择",
        id: 1
      }];
      $scope.unitTypes = [
      {
        label: "不显示",
        id: 0
      },
      {
        label: "显示",
        id: 1
      }];
      //    var setPower = function(pow, len) {
      //      pow = pow.substring(0, len);
      //      $scope.powers[pow] = true;
      //      if(len > 5) {
      //        setPower(pow, len - 2);
      //      }
      //    }
      //    var initPower = function() {
      //      for(var i in userLoginUIService.user.functionCodeSet) {
      //        var funCode = userLoginUIService.user.functionCodeSet[i];
      //        $scope.powers[funCode] = true;
      //        if(funCode.length > 5) {
      //          setPower(funCode, funCode.length - 2);
      //        }
      //      }
      //    }
      $scope.homeClick = function (flg) {
        if (flg == 1) {
          // window.open("http://www.proudsmart.com");
          location.href = "../app-oc/index.html#/dashboard";
        } else {
          if ($rootScope.dirty == true) {
            BootstrapDialog.show({
              title: "提示",
              closable: false,
              message: "视图尚未保存，要在退出前保存吗？",
              buttons: [
              {
                label: "保存退出",
                cssClass: "btn-success",
                action: function (dialogRef) {
                  $rootScope.save4Json(function (status) {
                    dialogRef.close();
                    location.href = "../app-oc/index.html#/views/configure";
                  });
                }
              },
              {
                label: "退出",
                action: function (dialogRef) {
                  location.href = "../app-oc/index.html#/views/configure";
                }
              },
              {
                label: "取消",
                action: function (dialogRef) {
                  dialogRef.close();
                }
              }]
            });
          } else {
            location.href = "../app-oc/index.html#/views/configure";
          }
        }
      };
      $rootScope.indexShow = false;
      $rootScope.personalShow = true;
      $scope.routePathNodes = {};
      var getResources = function (model) {
        var defer = q.defer();
        if (model.type == "Device") {
          resourceUIService.getManagedDevicesByModelId(model.id, function (
            returnObj
          ) {
            if (returnObj.code == 0) {
              model.resources = [
              {
                id: 0,
                label: "无"
              }].concat(returnObj.data);
              defer.resolve("success");
            }
          });
        } else {
          resourceUIService.getResourceByModelId(model.id, function (returnObj) {
            if (returnObj.code == 0) {
              model.resources = [
              {
                id: 0,
                label: "无"
              }].concat(returnObj.data);
              defer.resolve("success");
            }
          });
        }
        return defer.promise;
      };
      var getResourceAttrs = function (model) {
        var defer = q.defer();
        resourceUIService.getAttrsByModelId(model.id, function (returnObj) {
          if (returnObj.code == 0) {
            model.attrs = returnObj.data;
            model.isLoaded = model.isLoaded + 1;
            defer.resolve("success");
          }
        });
        return defer.promise;
      };
      var getResourceKpis = function (model) {
        var defer = q.defer();
        resourceUIService.getDataItemsByModelId(model.id, function (returnObj) {
          if (returnObj.code == 0) {
            model.kpis = [
            {
              id: 0,
              label: "无"
            }].concat(returnObj.data);
          }
          defer.resolve("success");
        });
        return defer.promise;
      };
      /**
       * 获得模型下的指令
       * @param {Object} model
       */
      var getResourceDirectives = function (model) {
        var defer = q.defer();
        resourceUIService.getDirectivesByModelId(model.id, function (returnObj) {
          if (returnObj.code == 0) {
            model["directives"] = returnObj.data;
          }
          defer.resolve("success");
        });
        return defer.promise;
      };
      var initModelAtts = function (arr) {
        var obj = arr[0];

        function getData(obj) {
          obj.count = 0;
          var random = Math.random();
          obj.icon = obj.icon ? obj.icon : "fa fa-building-o";
          obj.alertlv = "bg-green"; //random > 0.75 ? "bg-red" : (random > 0.5 ? "bg-orange" : (random > 0.25 ? "bg-yellow" : "bg-green"));
          obj.isLoaded = 0;
          obj.type = 0;
          obj.text = obj.label;
          obj.name = obj.label;
          return getResources(obj)
            .then(function () {
              return getResourceAttrs(obj);
            })
            .then(function () {
              return getResourceKpis(obj);
            })
            .then(function () {
              return getResourceDirectives(obj);
            });
        }
        return arr.length > 1 ?
          getData(obj).then(function (d) {
            return initModelAtts(arr.slice(1));
          }) :
          getData(obj);
      };
      var urmpTree = function (ciName) {
        var handler = function (returnObj) {
          if (returnObj.code == 0) {
            resourceUIService.rootModelDic = {};
            var tree = returnObj.data;
            for (var i in tree) {
              var obj = tree[i];
              if (!$scope.routePathNodes[obj.parentModelId])
                $scope.routePathNodes[obj.parentModelId] = [];
              $scope.routePathNodes[obj.parentModelId].push(obj);
              if (!$scope.routePathNodes[obj.id])
                $scope.routePathNodes[obj.id] = [];
              resourceUIService.rootModelDic[obj.id] = obj;
            }
            initModelAtts(tree);
            var addNodes = function (parentNode) {
              for (var modeid in $scope.routePathNodes) {
                if (modeid == parentNode.id) {
                  parentNode.nodes = $scope.routePathNodes[modeid];
                  for (var i in parentNode.nodes) {
                    addNodes(parentNode.nodes[i]);
                  }
                  if (parentNode.nodes.length == 0) {
                    parentNode.nodes = null;
                  }
                }
              }
            };

            addNodes(resourceUIService.rootModel);
            for (var key in $scope.routePathNodes) {
              if (
                key != resourceUIService.rootModel.id &&
                !resourceUIService.rootModelDic[key]
              ) {
                for (var i in $scope.routePathNodes[key]) {
                  addNodes($scope.routePathNodes[key][i]);
                  if (!resourceUIService.rootModel.nodes)
                    resourceUIService.rootModel.nodes = [];
                  resourceUIService.rootModel.nodes.push(
                    $scope.routePathNodes[key][i]
                  );
                }
              }
            }
            resourceUIService.rootModelDic[resourceUIService.rootModel.id] =
              resourceUIService.rootModel;
            $scope.rootModelDic = resourceUIService.rootModelDic;
            $scope.rootModel = resourceUIService.rootModel;
            $scope.treeAry = [
            {
              id: 0,
              label: "请选择"
            }].concat(tree);
            $scope.typeAry = [
            {
              id: 0,
              label: "普通"
            },
            {
              id: 1,
              label: "模板"
            },
            {
              id: 2,
              label: "项目"
            }];
          }
        };
        solutionUIService.getGroupModels(function (returnGroup) {
          if (returnGroup.code == 0) {
            resourceUIService.getModels(function (returnObj) {
              returnObj.data = returnObj.data.concat(returnGroup.data);
              handler(returnObj);
            });
          }
        });
      };

      function initViews() {
        $scope.configureView = [
        {
          viewId: 0,
          viewTitle: "不可下钻"
        },
        {
          viewId: 1,
          viewTitle: "可下钻，无子视图"
        }];
        $scope.echartView = [
        {
          viewId: 0,
          viewTitle: "无"
        }];
        $scope.dashboardView = [];
        $scope.selectDashboard = null;
        viewFlexService.getAllMyViews(function (returnObj) {
          if (returnObj.code == 0) {
            var dashboardView = [];
            returnObj.data.forEach(function (item) {
              if (item.viewType == "configure") {
                $scope.configureView.push(item);
              }
              if (item.viewType == "designView") {
                $scope.echartView.push(item);
              }
              if (item.viewType == "dashboard") {
                item.icon = "proudsmart ps-yunyingshouye";
                item.show = true;
                dashboardView.push(item);
              }
            });
            dashboardView = dashboardView.sort(function (a, b) {
              return a.releaseStatus < b.releaseStatus;
            });
            dashboardView[0].show = false;
            if (!$scope.selectDashboard)
              $scope.selectDashboard = dashboardView[0];
            dashboardView.push({
              viewTitle: "添加自定义工作台",
              viewId: 0,
              icon: "fa fa-plus-square"
            });
            $scope.dashboardView = dashboardView;
            $scope.$broadcast("RAPPIDVIEWS", {
              data: $scope.configureView
            });
          }
        });
      }

      $scope.sidebarMenuClick = function (item, flg) {
        if ($scope.selectDashboard == item && item.viewId != 0) return;
        $scope.selectDashboard = item;
        if (item.viewId == 0) {
          window.open(
            "../app-freeboard/index.html#/freeboard/view/dashboard",
            "_blank"
          );
        } else {
          if (flg) {
            window.open(
              "../app-freeboard/index.html#/freeboard/view/dashboard/" +
              item.viewId +
              "/0",
              "_blank"
            );
          } else {
            $scope.$broadcast("CHANGEDASHBOARDVIEWS", {
              data: $scope.selectDashboard
            });
          }
        }
      };

      $scope.logout = function () {
        userLoginUIService.logout();
      };
      $scope.domains = [];
      var getbreak = function (lv) {
        var breaks = "";
        for (var i = 0; i < lv; i++) {
          breaks += "*";
        }
        return breaks;
      };
      var foreachdomains = function (domains, lv, domainsAry) {
        domains.forEach(function (domain) {
          domain.text = getbreak(lv) + domain.text;
          domainsAry.push(domain);
          if (domain.nodes) {
            foreachdomains(domain.nodes, lv + 2, domainsAry);
          }
        });
      };
      var domainTreeQuery = function () {
        userDomainService.queryDomainTree(
          userLoginUIService.user.userID,
          function (data) {
            $scope.domainListTree = data.domainListTree;
            $scope.domainListDic = data.domainListDic;
            var domainsAry = [
            {
              domainPath: "",
              text: "无"
            }];
            foreachdomains($scope.domainListTree, 0, domainsAry);
            $scope.domains = domainsAry;
          }
        );
      };

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
            if (callbackFun) callbackFun();
          }
        });
      }
      var initstate = false;
      var init = function () {
        if (initstate) return;
        initstate = true;
        resourceUIService.getRootModel(function (returnObj) {
          if (returnObj.code == 0) {
            returnObj.data.name = returnObj.data.label;
            returnObj.data.text = returnObj.data.label;
            resourceUIService.rootModel = returnObj.data;
            $scope.selectedParentitem = returnObj.data;
            urmpTree();
          }
        });
      };
      var initConfigManager = function (callbackFun) {
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
        configUIService.getConfigsByGroupName("ConfigurationViewBG", function (
          returnObj
        ) {
          if (returnObj.code == 0) {
            returnObj.data.forEach(function (item) {
              $scope.configViewBg.push({ label: item.label, url: item.value });
            });
          }
        });
        configUIService.getConfigsByGroupName("ConfigurationCustom", function (
          returnObj
        ) {
          if (returnObj.code == 0) {
            returnObj.data.forEach(function (item) {
              try {
                var coustom = JSON.parse(item.value);
                coustom.attrs.text.text = item.label;
                $scope.configCustoms.push(coustom);
              } catch (e) {}
            });
          }
        });
        configUIService.getConfigsByGroupName("ConfigurationCommon", function (
          returnObj
        ) {
          if (returnObj.code == 0) {
            returnObj.data.forEach(function (item) {
              var keyDesc;
              item.keyDesc = item.keyDesc || "";
              var s = item.keyDesc.search("{");
              var e = item.keyDesc.search("}");
              if (s == 0 && e == item.keyDesc.length - 1) {
                keyDesc = JSON.parse(item.keyDesc);
                keyDesc.width = keyDesc.width ? keyDesc.width : 128;
                keyDesc.height = keyDesc.height ? keyDesc.height : 128;
              }
              var base = {
                type: "basic.Image",
                size: {
                  width: 60,
                  height: 60
                },
                attrs: {
                  image: {
                    width: keyDesc ? keyDesc.width : 128,
                    height: keyDesc ? keyDesc.height : 128,
                    "xlink:href": item.value
                  },
                  text: {
                    text: item.label,
                    "font-size": 12,
                    stroke: "#000000",
                    display: "block",
                    "stroke-width": 0,
                    fill: "#000000",
                    "ref-dy": 10,
                    "font-family": "Microsoft YaHei"
                  }
                }
              };
              $scope.configCommons.push(base);
            });
          }
        });
      };

      /**
       * 获得基本的模型定义，包括：
       * 测点定义
       * 指令定义
       * 属性定义
       */
      function callOneByOne(arr) {
        var model = arr[0];

        function getData(model) {
          var defer = q.defer();
          resourceUIService.getDirectivesByModelId(model.id, function (
            subReturnObj
          ) {
            if (subReturnObj.code == 0) {
              if (!$rootScope.rootModelsDic[model.id])
                $rootScope.rootModelsDic[model.id] = {};
              $rootScope.rootModelsDic[model.id].directives = subReturnObj.data;
              resourceUIService.getKpisByModelId(model.id, function (
                subReturnObj
              ) {
                if (subReturnObj.code == 0) {
                  if (!$rootScope.rootModelsDic[model.id])
                    $rootScope.rootModelsDic[model.id] = {};
                  subReturnObj.data.forEach(function (kpiDef) {
                    if (!$rootScope.rootModelsDic[model.id].kpiDic)
                      $rootScope.rootModelsDic[model.id].kpiDic = {};
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
                    $rootScope.rootModelsDic[model.id].kpiDic[
                      kpiDef.id
                    ] = kpiDef;
                    defer.resolve("success");
                  });
                }
              });
            }
          });
          return defer.promise;
        }
        return arr.length > 1 ?
          getData(model).then(function (d) {
            console.log("success");
            return callOneByOne(arr.slice(1));
          }) :
          getData(model);
      }
      var initRootModels = function () {
        $rootScope.rootModelsDic = {};
        resourceUIService.rootModelsDic = $rootScope.rootModelsDic;
        resourceUIService.getModelsByCondition({}, function (returnObj) {
          if (returnObj.code == 0) {
            callOneByOne(returnObj.data).then(d => {
              console.log("abc");
            });
          }
        });
      };
      if (!userLoginUIService.user.isAuthenticated) {
        $scope.$on("loginStatusChanged", function (evt, d) {
          if (userLoginUIService.user.isAuthenticated) {
            $rootScope.staffName = userLoginUIService.user.userName;
            $scope.userInfo = userLoginUIService.user;
            domainTreeQuery();
            initUnit(function () {
              initRootModels();
            });
            init();
            //          initPower();
            initViews();
            initConfigManager(function () {
              userLoginUIService.initMenus($scope, $location);
            });
          } else {
            $scope.errorMsg = userLoginUIService.result.message;
            $scope.errorStatus = 1;
          }
        });
      } else {
        domainTreeQuery();
        initUnit(function () {
          initRootModels();
        });
        init();
        //      initPower();
        initViews();
        initConfigManager(function () {
          userLoginUIService.initMenus($scope, $location);
        });
      }
    }
  ]);
});