define(['controllers/controllers', 'Array'], function (controllers) {
  'use strict';
  controllers.initController('viewFreeboardCtrl', ['$scope', '$state', '$stateParams', 'userEnterpriseService', '$rootScope', '$routeParams', 'resourceUIService', '$timeout', 'growl', '$q', '$window', '$location', 'viewFlexService', 'freeboardservice', 'userLoginUIService', 'roleViewService', 'commonMethodService',
    function (scope, $state, $stateParams, userEnterpriseService, rootScope, routeParams, resourceUIService, timeout, growl, q, window, location, viewFlexService, freeboardservice, userLoginUIService, roleViewService, commonMethodService) {


      var allViews, currentView, roleValue,
        // viewTitle = routeParams.page,
        // pa = routeParams.parameter;
        viewTitle = $stateParams.page,
        pa = $stateParams.parameter;
      var _ROLEKEY = "values"
      var watch = scope.$watch('baseConfig', function (newValue, oldValue, scope) {
        if (scope.baseConfig) {
          if (!scope.baseConfig.openSidebar) {
            $(".sidebar-toggle").css("display", "none");
            $(".main-sidebar").css("display", "none");
            $(".sidebar-mini.sidebar-collapse .content-wrapper").css("cssText", "margin-left: 0px!important");
          }
          watch();
        }
      });

      function getRoleByID(roleID) {
        var defer = q.defer();
        userEnterpriseService.queryEnterpriseRole(function (returnObj) {
          if (returnObj.code == 0) {
            var role = returnObj.data.find(function (item) {
              return item.roleID == roleID;
            });
            defer.resolve(role);
          } else {
            defer.reject(returnObj);
          }
        })
        return defer.promise;
      }

      function parseJson(str) {
        var objLike = new RegExp("^\\{.*\\}$", "g");
        var arrLike = new RegExp("^\\[.*\\]$", "g");
        if (objLike.test(str) || arrLike.test(str)) {
          return JSON.parse(str);
        } else {
          return null
        }
      }
      scope.signClick = function () {
        window.location.href = "../app-freeboard/index.html#/service/view/scenter" + (currentView ? '/' + currentView.viewId : '');
      };
      // PROMETHEUS-586 导航点击后，发送websocket的清空消息
      scope.naviClick = function (link, param) {
        $('#free-board').trigger('naviClick');
        window.location.href = "../app-sc/index_freeboard.html#/freeboard/" + link + "/" + encodeURIComponent(JSON.stringify(param));
      };


      scope.bgColorFn = function (bgColor) {
        return {
          "background-color": (bgColor ? bgColor : "#eee")
        };
      };
      rootScope.setCurrentTab = function (str) {
        scope.navigation[scope.navigation.length - 1].label = str;
        var json = ['0'];
        if (pa) {
          var json = JSON.parse(pa);
        }
        if (typeof json[json.length - 1] != "object") {
          json[json.length - 1] = {};
        }
        json[json.length - 1].tabLabel = str;
        $stateParams.parameter = JSON.stringify(json);
      };

      function getRoleID(callback) {
        var user = userLoginUIService.user || {};


        if (user.roleID) {
          callback(user.currentRoleID + "")
        } else {
          userLoginUIService.getCurrentUser(function (user) {
            callback(user.currentRoleID + "");
          })
        }
      }

      function getRoleID_success(roleID) {
        console.assert(roleID, "roleID is not Defined!!");
        var roles = roleID.split(",");
        var defers = roles.map(function (e) {
          return getRoleByID(e)
        })
        q.all(defers).then(function (role) {
          var json = (function () {
            var rs = []
            for (var i in role) {
              var r = parseJson(role[i][_ROLEKEY]);
              if (r) {
                Array.prototype.push.apply(rs, r);
              }
            }
            return rs;
          })();
          if (json.length > 0) {
            var view = {
              viewId: 224265044620000
            }
            getViewByFunctionCode_back({
              code: 0,
              data: view
            })
          } else {
            roleViewService.getViewByFunctionCode("M24", getViewByFunctionCode_back);
          }
        })
      }
      getRoleID(getRoleID_success);

      function toObject(content) {
        var dt = JSON.parse(content);
        if (typeof dt.setting == "string") {
          dt.setting = JSON.parse(dt.setting)
        }
        scope.setting = dt.setting;
        return dt;
      }

      function getViewById_back(event) {
        if (event.code == 0 && event.data != null) {
          var input;
          var dt = toObject(event.data.content);

          if (dt.hasOwnProperty("groups")) {
            var vt, vt_arr = viewTitle.split("|"),
              va_arr, vlabel;
            if (pa) {
              va_arr = JSON.parse(pa);
            } else {
              va_arr = [];
            };
            if (va_arr.length > 0) {
              vlabel = va_arr[va_arr.length - 1].tabLabel;
            };
            if (vt_arr.length > 0) {
              vt = vt_arr[vt_arr.length - 1];

            } else {
              vt = viewTitle;
              vt_arr = [viewTitle];
            };
            var base = '',
              rs = [];
            var loop = function (inx, elem) {
              var find = dt["groups"].find(function (element) {
                return elem === element.path;
              });
              if (find) {
                var param = va_arr[inx],
                  tabLabel;
                base = (base == "") ? elem : (base + "|" + elem);
                if (typeof param == "object" && param != null) {
                  tabLabel = param.tabLabel;
                }
                rs.push({
                  label: tabLabel ? tabLabel : find.label,
                  link: base,
                  param: va_arr.slice(0, parseInt(inx) + 1)
                })
              };
            };
            for (var i in vt_arr) {
              loop(i, vt_arr[i])
            };
            scope.navigation = rs;
            if (vt == "panel") {
              scope.navigation = scope.navigation.concat({
                label: vlabel ? vlabel : "设备仪表板",
                link: base + "|panel"
              });
              var getLastElement = function (arr) {
                return arr[arr.length - 1];
              };
              var parameter = getLastElement(JSON.parse($stateParams.parameter));
              var modelId = parameter.modelId;
              var resourceId = parameter.resourceId;
              var allAvaliableViews, defaultViews, template;
              var getManagedViewsByType_back = function (event) {
                if (event.code == 0) {
                  allAvaliableViews = event.data;
                  var getDefaultView_back = function (event) {
                    if (event.code == 0) {
                      var defaultViews = event.data;
                      var templateDefault = defaultViews.find(function (elem) {
                        if (elem.template) {
                          if (elem.template.resourceId == modelId) {
                            return true;
                          } else {
                            return false;
                          }
                        } else {
                          return false;
                        }
                      });
                      var templateExtent = allAvaliableViews.find(function (elem) {
                        var viewId = elem.viewId;
                        if (elem.template) {
                          if (elem.template.resourceId == modelId) {
                            var findRoleRes = function (elem) {
                              return elem.resId == viewId && elem.resType == 21;
                            };
                            var authorized = userLoginUIService.user.roleResList.some(findRoleRes);
                            return authorized;
                          } else {
                            return false;
                          }
                        } else {
                          return false;
                        }
                      });
                      if (templateExtent) {
                        template = templateExtent;
                      } else if (templateDefault) {
                        template = templateDefault;
                      }
                      if (template) {
                        var getViewById_back = function (event) {
                          var model, resource, content;
                          if (event.code == "0") {
                            var content = event.data.content;
                            var getModel_back = function (event) {
                              if (event.code == "0") {
                                model = event.data[0];
                              }
                              var getResource_back = function (event) {
                                if (event.code == "0") {
                                  resource = event.data;
                                  if (content != null) {
                                    var clone = JSON.parse(content);
                                    var input = {
                                      layout: clone.data ? clone.data : clone.layout,
                                      setting: clone.setting
                                    };
                                    delete clone.data;
                                    var editData = new freeboardservice.replaceCiKpi(input, function () {
                                      timeout(function () {
                                        scope.instance.setMode(true);
                                        scope.instance.renderLayout(editData, null, scope);
                                      });
                                    }, {
                                      model: model,
                                      resource: resource
                                    }, null, dt);
                                  }
                                }
                              };
                              if (resourceId) {
                                resourceUIService.getResourceById(resourceId, getResource_back);
                              } else {
                                var getResources_back = function (event) {
                                  if (event.code == 0) {
                                    scope.resources = event.data;
                                    /** console.log(scope.resources); */
                                    scope.resource = scope.resources[0];
                                    scope.itemchange = function (event) {
                                      var id = event.id.split("number:")[1];
                                      var find = scope.resources.find(function (elem) {
                                        return elem.id == id;
                                      });
                                      if (find) {
                                        getResource_back({
                                          code: 0,
                                          data: find
                                        })
                                      }
                                    };
                                    getResource_back({
                                      code: 0,
                                      data: scope.resources[0]
                                    })
                                  };
                                };
                                resourceUIService.getResources(getResources_back);
                              };
                            };
                            resourceUIService.getModelByIds([modelId], getModel_back);
                          }
                        };
                        viewFlexService.getViewById(template.viewId, getViewById_back);
                      } else {
                        scope.error = "没有找到相应的设备仪表板视图，点击<a href='../app-oc/index.html#/views/dashboard' style='cursor:pointer; text-decoration: underline;'>Dashboard管理</a>创建设备仪表板";
                      }
                    } else {
                      scope.error = "视图列表为空，请联系系统管理员";
                    }
                  };
                  viewFlexService.getDefaultView(modelId, getDefaultView_back);
                } else {
                  scope.error = "获取视图列表发生错误，请联系系统管理员";
                }
              };
              viewFlexService.getManagedViewsByTypeAndRole('dashboard', getManagedViewsByType_back);
            } else {
              var find = dt["groups"].find(function (element) {
                return vt == element.path;
              });
              scope.tabIndex = find ? dt['groups'].indexOf(find) : 0;
              scope.tabs = dt.groups;
              input = {
                layout: dt.groups[scope.tabIndex].layout,
                setting: dt.setting
              };
              var editData = new freeboardservice.replaceCiKpi(input, function () {
                timeout(function () {
                  scope.instance.setMode(true);
                  scope.instance.renderLayout(editData, null, scope);
                });
              }, null, dt);
            }

          } else if (dt.hasOwnProperty("data")) {
            scope.navigation = [{
              label: "服务中心"
            }];
            input = {
              layout: dt.data,
              setting: dt.setting
            };
            var editData = new freeboardservice.replaceCiKpi(input, function () {
              timeout(function () {
                scope.instance.setMode(true);
                scope.instance.renderLayout(editData, null, scope);
              });
            }, null, dt);
          } else if (dt.hasOwnProperty("layout")) {
            scope.navigation = [{
              label: "服务中心"
            }];
            input = {
              layout: dt.layout,
              setting: dt.setting
            };
            var editData = new freeboardservice.replaceCiKpi(input, function () {
              timeout(function () {
                scope.instance.setMode(true);
                scope.instance.renderLayout(editData, null, scope);
              });
            }, null, dt);
          };
        } else {
          scope.error = "获取此此用户角色的服务视图发生错误" + (event.message ? "," + event.message : "");
        };
      };
      /**
       scope.$on("roleValueChanges", function(e, roleID){
        commonMethodService.clearEvents();
        getRoleID_success(roleID + "");
      })*/
      scope.$on("CHANGEDASHBOARDVIEWS", function (event, args) {
        getViewByFunctionCode_back({ code: 0, data: args.data });
      })
    }
  ]);
});