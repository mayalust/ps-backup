define(['controllers/controllers', '../../../../node_modules/ps-ultility/ps-ultility'], function (controllers, psUltility) {
  'use strict';
  controllers.initController('subViewCtrl', ['$scope', '$state', '$stateParams', 'userEnterpriseService', '$rootScope', '$routeParams', 'resourceUIService', '$timeout', 'growl', '$q', '$window', '$location', 'viewFlexService', 'freeboardservice', 'userLoginUIService', 'roleViewService', 'commonMethodService', 'serviceProxy',
    function (scope, $state, $stateParams, userEnterpriseService, rootScope, routeParams, resourceUIService, timeout, growl, q, window, location, viewFlexService, freeboardservice, userLoginUIService, roleViewService, commonMethodService, serviceProxy) {
      scope.instance = {};
      var cmd = commonMethodService();
      var viewId = scope.$root.viewId = $stateParams.viewId,
        path = $stateParams.index,
        url = psUltility.urlparser(window.location.href);

      /**  本地8080端口执行调用本地js视图文件 **/

      function callApi(service, method, param) {
        var defer = q.defer(),
          callBack = function (d) {
            if (d.code == 0) {
              defer.resolve(d.data || []);
            } else {
              defer.reject(d);
            }
          },
          error = function (e) {
            defer.reject(e);
          }
        serviceProxy.get(service, method, param, callBack, error);
        return defer.promise;
      }

      function startInspection(viewId) {
        return callApi("inspectionService", "start", viewId)
      }

      function stopInspection(viewId) {
        return callApi("inspectionService", "end", viewId)
      }

      function saveView(viewId) {
        return callApi("inspectionService", "save", viewId)
      }

      function getListeners(viewId) {
        return callApi("inspectionService", "getlisteners", viewId)
      }

      function checkLoadLocalView(viewId) {
        var defer = q.defer(),
          url = psUltility.urlparser(window.location.href);

        function hasValue(str) {
          return function (item) {
            return item === str;
          }
        }
        if (!/\d+/.test(viewId + "")) {
          defer.reject("not a number");
          return defer.promise;
        }
        if (["localhost", "127.0.0.1"].some(hasValue(url.address)) && /808\d/.test(url.port + "")) {
          getListeners(viewId).then(function (d) {
            if (d.indexOf(viewId) !== -1) {
              rootScope.stopInspection = function () {
                stopInspection(viewId).then(function (d) {
                  growl.success("结束本地监听视图 : " + viewId);
                  window.location.reload();
                }).catch(function (e) {
                  growl.error("移除监听故障 : " + viewId);
                })
              }
              rootScope.saveView = function () {
                saveView(viewId).then(function (d) {
                  growl.success("成功保存视图 : " + viewId);
                }).catch(function (e) {
                  growl.error("不能保存视图 : " + viewId);
                })
              }
              delete rootScope.startInspection
            } else {
              rootScope.startInspection = function () {
                startInspection(viewId).then(function (d) {
                  growl.success("开始本地监听视图 : " + viewId);
                  window.location.reload();
                }).catch(function (e) {
                  growl.error("监听故障 : " + viewId);
                })
              }
              delete rootScope.stopInspection;
              delete rootScope.saveView;
            }
            if (typeof viewId !== "undefined") {
              psrequire(["../app-views/build/" + viewId + "." + path], function (view) {
                var editData = new freeboardservice.replaceCiKpi(view, function () {
                  timeout(function () {
                    scope.instance.setMode(true);
                    scope.instance.renderLayout(editData, null, scope);
                  });
                }, null, null, scope);
                defer.resolve("user local");
              }, function (e) {

                defer.reject("user server");
              })
            }
          })
        } else {
          defer.reject("user server");
        }
        return defer.promise;
      }

      /**  本地8080端口执行调用本地js视图文件 **/


      function toObject(content) {
        var dt = JSON.parse(content);
        if (typeof dt.setting == "string") {
          dt.setting = JSON.parse(dt.setting)
        }
        scope.setting = dt.setting;
        if (dt.setting) {
          scope.bgColor = dt.setting.color;
        }
        return dt;
      }

      function getViewById_back(event) {
        if (event.code == 0 && event.data != null) {
          var input;

          var dt = toObject(event.data.content);

          if (dt.hasOwnProperty("groups")) {

            var find = dt["groups"].find(function (element) {
              return $stateParams.index == element.path;
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
            }, null, dt, scope);
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
            }, null, dt, scope);
          };
        } else {
          scope.error = "获取此此用户角色的服务视图发生错误" + (event.message ? "," + event.message : "");
        };
      };
      checkLoadLocalView(viewId)
        .then(function (e) {

        }).catch(function (d) {
          if (!isNaN(viewId)) {
            cmd.getResourceById($state.params.id, function (res) {
              cmd.setValue("global/resource", res);
              viewFlexService.getViewById(viewId, getViewById_back);
            });
          } else {
            // 针对directive的名称解析对应的视图
            cmd.getView({ path: "viewCtrl:" + viewId, item: {} }, function (json) {
              var editData = new freeboardservice.replaceCiKpi(json, function () {
                timeout(function () {
                  scope.instance.setMode(true);
                  scope.instance.renderLayout(editData, null, scope);
                });
              }, null, null, scope);
            });
          }
        })
    }
  ])
})