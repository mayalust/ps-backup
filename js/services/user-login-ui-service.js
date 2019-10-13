define(['../services/services.js'], function (services) {
  'use strict';
  services.factory('userLoginUIService', ['$http', '$state', '$rootScope', 'serviceProxy', '$q', '$route', '$location', '$window', '$timeout', 'growl', 'userEnterpriseService', 'psTreeData', 'psUiRouterHandler', 'commonMethodService2', 'psConfig',
    function ($http, $state, $rootScope, serviceProxy, $q, route, location, window, timeout, growl, userEnterpriseService, psTreeData, psUiRouterHandler, cms2, psConfig) {
      var _INCLUDES = ['prod_', 'rview'];
      /** 暂时写死APP-FREE-STYLE不受权限控制，之后通过权限进行重新配置 */
      var isFromFreeStyle = (function (absUrl) {
        return absUrl.indexOf("app-free-style") != -1;
      })(location.$$absUrl);
      /** 暂时写死APP-FREE-STYLE不受权限控制，之后通过权限进行重新配置 */
      var factory, loginService = 'userLoginUIService';
      var defer, roleId = localStorage.getItem("roleId");
      factory = {
        loginPath: '',
        user: {
          wait: function (callback) {
            defer = callback;
          },
          isAuthenticated: false,
          roles: null,
          viewType: null,
          firstCode: null
        },
        result: {}
      };

      function extend(a, b) {
        for (var i in b) {
          a[i] = b[i];
        }
        return a;
      }

      function toJSON(str) {
        var obj = null;
        try {
          obj = JSON.parse(str);
        } catch (e) {
          console.error(e);
          return null;
        }
        return obj;
      }

      function addMenu(target, path, val) {
        var patharr = path.split("/"),
          cpath = patharr.shift(),
          currentTarget = target[cpath];
        if (!currentTarget) {
          return;
        }
        while (cpath = patharr.shift()) {
          currentTarget.function = currentTarget.function || [];
          var find = currentTarget.function.find(function (e) {
              return e.functionCode == cpath;
            }),
            item;
          if (!find) {
            item = {
              "functionCode": cpath,
              "parentCode": currentTarget.functionCode
            }
            currentTarget.function.push(item);
          } else {
            item = find;
          }
          if (patharr.length == 0) {
            extend(item, val || {})
          }
          currentTarget = item;
        }
      }
      window.document.title = '';

      function includePath(path) {
        return _INCLUDES.some(function (e) {
          return path.indexOf(e) != -1;
        })
      }
      factory.getCurrentUser = function (callback) {
        var deferred = $q.defer();

        function getFirstRoleID(str) {
          var rs;
          if (typeof str === "string") {
            rs = parseInt(str.split(",")[0]);
            console.assert(rs === rs, "角色ROLEID为空");
            return rs === rs ? rs : null
          } else {
            console.warn("角色ROLEID不为字符串");
            return null;
          }
        }

        function getCurrentRoleId(roleId, currentUserRoleId) {
          if (currentUserRoleId.indexOf(roleId) != -1) {
            return roleId;
          }
          return getFirstRoleID(currentUserRoleId)
        }
        serviceProxy.get(loginService, 'getCurrentUser', null, function (result) {
          console.log("getCurrentUser", ((new Date - window.__loadedTime__) / 1000).toFixed(3) + "s");
          if (result != null && result != "" && result.code == 0 && result.data) {
            factory.user = result.data;
            factory.user.usercurrentRoleID = factory.user.currentRoleID = getCurrentRoleId(roleId, factory.user.roleID);
            factory.user.usercurrentRoleID += "";
            factory.user.currentRoleID += "";
            factory.user.isAuthenticated = true;
            deferred.resolve(result.data);
            changeAuth(true);
            var currentUrl = document.location.href;
            if (typeof callback == "function") {
              callback(factory.user);
            }
            psTreeData.getCurrentUser(factory.user);
            if (result.data.loginTimes == 0 && currentUrl.indexOf('password.html') < 0) {
              window.location.href = "../app-uc/password.html";
            }
          } else {
            deferred.reject("error");
            changeAuth(false);
          }
        });
        return deferred.promise;
      };
      factory.login = function (account, password, callback) {
        serviceProxy.get(loginService, 'login', [account, password], function (result) {
          if (result != null && result != "" && result.code == 0 && result.data) {
            factory.user = result.data;
            factory.user.isAuthenticated = true;
            changeAuth(true);
          } else {
            factory.result = result;
            changeAuth(false);
          }
        });
      };
      factory.loginCallback = function (account, password, callback) {
        serviceProxy.get(loginService, 'login', [account, password], callback);
      };
      factory.logout = function () {
        serviceProxy.get(loginService, 'logout', null, function (result) {
          if (result != null && result != "" && result.code == 0) {
            var dt = result.data;
            dt = (dt[0] == "/") && dt.slice(1) || dt;
            window.location.href = "../" + dt;
            factory.user = {};
            factory.user.isAuthenticated = false;
            changeAuth(false);
          }
        });
      };
      /**
       * 修改密码
       */
      factory.modifyPassword = function (email, password, newPassword, callBack) {
        serviceProxy.get(loginService, "modifyPassword", [email, password, newPassword], callBack);
      };

      /**
       * 超级管理员切换用户
       * loginName  登录名称
       */
      factory.loginin = function (loginName, callBack) {
        serviceProxy.get(loginService, "loginin", loginName, callBack);
      };

      factory.redirectToLogin = function () {
        $rootScope.$broadcast('redirectToLogin', null);
      };

      /**
       * 跳转路径的切换，解决方案优先行业
       */
      factory.changePos = function () {
        var loginChangedefer = $q.defer();
        var defer = $q.defer();
        if (factory.user ? factory.user.appData == null : true) {
          $rootScope.$on('loginStatusChanged', function (event) {
            loginChangedefer.resolve({
              appData: factory.user.appData,
              industry: factory.user.industry
            });
          });
        } else {
          loginChangedefer.resolve({
            appData: factory.user.appData,
            industry: factory.user.industry,
          });
        }
        loginChangedefer.promise.then(function (data) {
          // 根据角色ID查找当前配置的tab页签
          var domainPath = factory && factory.user && factory.user.domainPath;
          if (!domainPath) {
            throw new Error("invalid user data");
            return;
          }
          var match = /\/(\d+)\/$/.exec(domainPath),
            rootId = match ? match[1] : null;
          if (!rootId) {
            throw new Error("invalid user domainPath");
            return;
          }
          $state.params.id = rootId;
          var currentRole = factory.user.currentRoleID;
          console.log(currentRole);

          function getPath(domainPath) {
            let length = domainPath.split("/").length - 4,
              dics = ["index", "navigate", "factory", "production", "devicegroup"];
            return dics[length] || "devicegroup";
          }
          userEnterpriseService.queryEnterpriseRole(function (returnObj) {
            if (returnObj.code == 0) {
              var find = returnObj.data.find(function (ele) {
                if (ele.roleID == 127260997560018) { return false; };
                if (currentRole) {
                  return currentRole == ele.roleID;
                } else {
                  return factory.user.roleID.indexOf(ele.roleID) !== -1
                }
              });
              psConfig.setRoleValues(find.values);
              var promise = psConfig.getRoleValues().then(function (values) {
                var tab = values.children[0],
                  index = getPath(domainPath),
                  viewId = tab.viewId;

                if (viewId == "177280852260000" && index) {
                  window.location.href = "./index_freeboard.html#/prod_dashboard/0/" + rootId + "/0/0/0/" + viewId + "/" + index;
                  return;
                }
                if (viewId != "177280852260000" && /\d+/.test(viewId + "")) {
                  window.location.href = "./index_freeboard.html#/prod_dashboard/0/" + rootId + "/0/0/0/" + viewId + "/index";
                  return;
                }
                return psUiRouterHandler(tab);
              })
              promise && promise.then(function (d) {
                var name = d[0],
                  args = d[1],
                  hashChange = function (e) {
                    var href = window.location.href.replace("index.html", "index_freeboard.html");
                    window.location.href = href;
                    window.removeEventListener("hashchange", hashChange);
                  };
                args.id = rootId;
                $state.go.apply($state, d);
                window.addEventListener("hashchange", hashChange);
              });

              /* psConfig.getRoleValues().then(function (values) {
                var FIRST_TAB_PATH = values.children[0];
                return psUiRouterHandler(FIRST_TAB_PATH);
              }).then(function (d) {
                var name = d[0],
                  args = d[1],
                  hashChange = function (e) {
                    var href = window.location.href.replace("index.html", "index_freeboard.html");
                    window.location.href = href;
                    window.removeEventListener("hashchange", hashChange);
                  };
                args.id = rootId;
                $state.go.apply($state, d);
                window.addEventListener("hashchange", hashChange);
              }); */
            }
          })
        });
        return defer.promise;
      };

      function changeAuth(loggedIn) {
        if (loggedIn) {
          factory.user.userId = factory.user.userID;
          // 设置企业ICON
          if (factory.user.enterprise != null) {
            if (factory.user.enterprise.enterpriseLogo != null && factory.user.enterprise.enterpriseLogo != "") {
              var url = serviceProxy.origin + "/" + factory.user.enterprise.enterpriseLogo;
              factory.user.enterprise.enterpriseLogo = url;
              factory.user.enterprise["logoStatus"] = "0";
            } else {
              factory.user.enterprise.enterpriseLogo = "../images/enterprise/logo.svg";
            }
          } else {
            var logo = {
              "enterpriseLogo": "../images/enterprise/logo.svg"
            };
            factory.user.enterprise = logo;
          }
          factory.user.isAuthenticated = loggedIn;
          $rootScope.$broadcast('loginStatusChanged', loggedIn);
          /**
           serviceProxy.get("resourceUIService", 'getAppData', null, function(result) {
            if(result != null && result != "" && result.code == 0) {
              factory.user.appData = result.data;
              factory.user.isAuthenticated = loggedIn;
              if(defer) {
                defer();
              }
              delete factory.user.wait;
              $rootScope.$broadcast('loginStatusChanged', loggedIn);
            } else {

            }
          });*/
        } else {
          factory.user.isAuthenticated = loggedIn;
          $rootScope.$broadcast('loginStatusChanged', loggedIn);
        }
      };

      factory.rootHandler = function ($scope, $location) {
        var absUrl = $location.absUrl().split("#")[0];
        if (absUrl.search("/app-oc/") > -1) { //运营中心
          $scope.localMenuCode = "F01";
        } else if (absUrl.search("/app-sc/") > -1) { //服务中心
          $scope.localMenuCode = "F02";
        } else if (absUrl.search("/app-ac/") > -1) { //应用中心
          $scope.localMenuCode = "F03";
        } else if (absUrl.search("/app-uc/") > -1) { //用户中心
          $scope.localMenuCode = "F04";
        } else if (absUrl.search("/app-help/") > -1) { //帮助中心
          $scope.localMenuCode = "F05";
        }

        //权限没有加载完成时跳出
        if (!$scope.menuitems["isloaded"]) {
          return;
        }
        /** 暂时写死APP-FREE-STYLE不受权限控制，之后通过权限进行重新配置 */
        if (isFromFreeStyle) {
          return;
        }
        /** 暂时写死APP-FREE-STYLE不受权限控制，之后通过权限进行重新配置 */

        $scope.currentMenuCode = null;
        $scope.treeviewIndex = $location.path();
        var locationAry = $location.path().split("/");
        var locationStr;
        var menuObj;
        if (locationAry.length == 1 || !locationAry[1]) { //没有默认路由时，使用权限第一个M权限，如果M权限没有url则使用其下的一个S权限
          for (var key in $scope.menuitems) {
            //
            if (key.indexOf("M") == 0 && $scope.menuitems[key].parentCode == $scope.localMenuCode && !menuObj) {
              if ($scope.menuitems[key].url) {
                if ($scope.defaultRoute) {
                  window.location.href = $scope.defaultRoute
                } else {
                  var path = $scope.menuitems[key].url.substr(1);
                  $location.path(path);
                  menuObj = $scope.menuitems[key];
                }
                return false;
              } else {
                $scope.menuitems[key].function.forEach(function (subItem) {
                  if (subItem.functionCode.indexOf("S") == 0 && subItem.url && !menuObj) {
                    var path = subItem.url.substr(1);
                    $location.path(path);
                    menuObj = subItem;
                    return false;
                  }
                });
              }
            }
          }
          if (!menuObj) {
            growl.warning("您并没有访问该功能的权限，请联系系统管理人员", {});
          }
          return;
        } else if (locationAry.length > 2) { //两级以上路由时，仅判断到第二级，如有特殊需求可自行扩展
          locationStr = "#/" + locationAry[1] + "/" + locationAry[2];
          //locationStr = "#/"+locationAry[1] + "/";
          menuObj = $scope.menuitems[locationStr];
          if (!menuObj) { //如果指定二级路由没有权限，查看0模式下是否存在（告警查询权限）
            menuObj = $scope.menuitems["#/" + locationAry[1] + "/0"];
          }
        }
        if (!menuObj) { //如果二级路由0模式下也没有权限，上推到一级路由
          /** 当路径当中带了prod_前缀，不进行校验。 */
          if (includePath($location.path())) {
            menuObj = {
              parentCode: "M01"
            };
          } else {
            locationStr = "#/" + locationAry[1];
            var locaStr1 = "#/" + locationAry[1] + "/";
            menuObj = $scope.menuitems[locationStr] || $scope.menuitems[locaStr1];
          }
        }
        if (typeof menuObj === "undefined") { //如果都没有权限，提示权限错误
          growl.warning("您并没有访问该功能的权限，请联系系统管理人员", {});
          $location.path($scope.oldTreeviewIndex);
          return;
        };

        $scope.oldTreeviewIndex = $scope.treeviewIndex;

        if (menuObj) {
          $scope.currentMenuCode = menuObj.functionCode || null;
          $scope.firstMenuCode = menuObj.functionCode || null;
          if (menuObj.parentCode.charAt(0) == "M") {
            $scope.firstMenuCode = $scope.menuitems[menuObj.parentCode] ?
              $scope.menuitems[menuObj.parentCode].functionCode : null;
          } else {
            if ($scope.menuitems[menuObj.parentCode].parentCode.charAt(0) == "M") {
              $scope.firstMenuCode = $scope.menuitems[$scope.menuitems[menuObj.parentCode].parentCode].functionCode;
            }
          }
        }
        if ($scope.oldFirstMenuCode != $scope.firstMenuCode && $scope.firstMenuCode != null && $scope.oldFirstMenuCode != null) {
          $("[name='" + $scope.oldFirstMenuCode + "']").css('display', 'none');
          $("[name='" + $scope.oldFirstMenuCode + "']").removeClass('menu-open');
          $("[name='" + $scope.firstMenuCode + "']").css('display', 'block');
        }
        $scope.oldFirstMenuCode = $scope.firstMenuCode;
        timeout(function () {
          $.AdminLTE.layout.fix(); //调整一下页面
        });
      };
      factory.initMenus = function ($scope, $location) {
        function menuhandle(menuInfo) {
          menuInfo.searchUrl = menuInfo.url ? menuInfo.url.substring(1) + "/" : ""; //菜单选中状态用
          if (menuInfo.function) {
            menuInfo.function.forEach(function (handlemenu) {
              if ($scope.baseConfig && $scope.baseConfig[handlemenu.functionCode]) {
                handlemenu.name = $scope.baseConfig[handlemenu.functionCode].label;
                handlemenu.label = $scope.baseConfig[handlemenu.functionCode].sublabel;
              }
              menuInfo.searchUrl = menuInfo.searchUrl + (handlemenu.url ? handlemenu.url.substring(1) + "/" : "");
              //
              $scope.menuitems[handlemenu.functionCode] = handlemenu;
              if (handlemenu.url) {
                var url = decodeURIComponent(handlemenu.url);
                $scope.menuitems[url] = handlemenu;
              }
              menuhandle(handlemenu);
            });
          }
        }
        $scope.userInfo.functionList.forEach(function (menu) {
          if ($scope.baseConfig && $scope.baseConfig[menu.functionCode]) {
            menu.name = $scope.baseConfig[menu.functionCode].label;
            menu.label = $scope.baseConfig[menu.functionCode].sublabel;
          }
          $scope.menuitems[menu.functionCode] = menu;
          if (menu.url) {
            var url = decodeURIComponent(menu.url);
            $scope.menuitems[url] = menu;
          };
          menuhandle(menu);
        });
        $scope.menuitems["isloaded"] = true; //加载完毕

        /** 增加一个方法ADDMENU能自定义写入菜单*/
        /**
         addMenu($scope.menuitems, "F01/M02/S117", {
          name : "设备视图管理",
          icon : "fa fa-circle",
          url : "#/rview"
        })**/
        factory.rootHandler($scope, $location);
      };
      factory.getAddressPoint = function (address, callBack) {
        if (address) {
          jQuery.ajax({
            type: "GET",
            url: window.location.protocol + "//api.map.baidu.com/geocoder/v2/?address=" + address + "&output=json&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx",
            dataType: "jsonp",
            jsoncallback: 'callBack',
            success: function (d) {
              if (d.status == 0) {
                if (callBack) {
                  callBack(d.result)
                }
              } else {
                if (callBack) {
                  callBack({ location: { lat: "", lng: "" } })
                }
              }
            },
            error: function (e) {

            }
          });
        } else {
          if (callBack) {
            callBack(null)
          }
        }
      }
      if (window.location.hash.indexOf("dailyReport") !== -1) {
        factory.user.isAuthenticated = true;
      } else {
        factory.getCurrentUser();
      }
      return factory;
    }
  ]);
});