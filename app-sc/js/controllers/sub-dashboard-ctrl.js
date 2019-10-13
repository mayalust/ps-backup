define(['controllers/controllers', 'Array'], function (controllers) {
  'use strict';
  controllers.initController('subDashboardCtrl', ['$scope', '$state', '$stateParams', 'userEnterpriseService', '$rootScope', '$routeParams', 'resourceUIService', '$timeout', 'growl', '$q', '$window', '$location', 'viewFlexService', 'freeboardservice', 'userLoginUIService', 'roleViewService', 'psTreeData', 'commonMethodService2', 'psUiRouterHandler',
    function ($scope, $state, $stateParams, userEnterpriseService, $rootScope, routeParams, resourceUIService, timeout, growl, q, window, location, viewFlexService, freeboardservice, userLoginUIService, roleViewService, psTreeData, commonMethodService2, psUiRouterHandler) {
      var hash = $stateParams["#"];
      hash = parse(hash) || {};
      $scope.sub_active_hide = !!hash.sub_active_hide;

      function toLowercase(str) {
        if (typeof str == "string") {
          return str.toLowerCase();
        }
      }
      commonMethodService2.getCurrentParents().then(function (parents) {
        var extId = toLowercase(parents[parents.length - 1].category) == "device" && parents[parents.length - 1].externalDevId,
          str = parents.map(function (d) {
            return d.label
          }).join(" > ");
        extId ? str += " ( " + extId + " ) " : null;
        $scope.$root ? $scope.$root.treeStr = str : null;
        $scope.$root ? $scope.$root.viewId = $state.params.viewId : null;
      }).catch(function (e) {
        console.error(e.message);
      });
      psUiRouterHandler.getSubTabs().then(function (subtabs) {
        $scope.subtabs = subtabs;
      }).catch(function (e) {
        console.error(e.message);
      });
      $scope.$emit("main_active_index", $stateParams.main_active_index);
      $scope.sub_active_index = $stateParams.sub_active_index;
      $scope.$root.showTree = $stateParams.showTree == 0 ?
        false : true;
      $scope.subNavToPage = function (params) {
        $scope.sub_active_index = params.index;
        psUiRouterHandler(params).then(function (d) {

          $state.go.apply($state, d);
        });
      }

      function parse(str) {
        var obj;
        try {
          obj = JSON.parse(str)
        } catch (e) {
          return;
        }
        return obj
      }
    }
  ])
})