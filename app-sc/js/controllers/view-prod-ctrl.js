define(['controllers/controllers', '../../../../node_modules/ps-ultility/ps-ultility'], function (controllers, psUltility) {
  'use strict';
  controllers.initController('viewProdCtrl', ['$scope', '$state', '$stateParams', 'userEnterpriseService', '$rootScope', '$routeParams', 'resourceUIService', '$timeout', 'growl', '$q', '$window', '$location', 'viewFlexService', 'freeboardservice', 'userLoginUIService', 'roleViewService', 'commonMethodService', 'serviceProxy', 'commonMethodService2',
    function (scope, $state, $stateParams, userEnterpriseService, rootScope, routeParams, resourceUIService, timeout, growl, q, window, location, viewFlexService, freeboardservice, userLoginUIService, roleViewService, commonMethodService, serviceProxy, commonMethodService2) {
      scope.$root.showTree = $stateParams.showTree == 0 ? false : true;
      scope.$root.viewId = $stateParams.viewId;

      function toLowercase(str) {
        if (typeof str == "string") {
          return str.toLowerCase();
        }
      }
      commonMethodService2.getCurrentParents().then(function (parents) {
        if (scope.$root) {
          var extId = toLowercase(parents[parents.length - 1].category) == "device" && parents[parents.length - 1].externalDevId,
            str = parents.map(function (d) {
              return d.label
            }).join(" > ");
          extId ? str += " ( " + extId + " ) " : null;
          scope.$root ? scope.$root.treeStr = str : null;
        }
      }).catch(function (e) {
        growl.error(e.message);
      });
      scope.$emit("main_active_index", $stateParams.main_active_index);
    }
  ])
})