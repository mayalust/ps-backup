define(['controllers/controllers', 'Array'], function (controllers) {
  'use strict';
  controllers.initController('minorDashboardCtrl', ['$scope', '$state', '$stateParams', 'userEnterpriseService', '$rootScope', '$routeParams', 'resourceUIService', '$timeout', 'growl', '$q', '$window', '$location', 'viewFlexService', 'freeboardservice', 'userLoginUIService', 'roleViewService', 'commonMethodService','psUiRouterHandler',
    function ($scope, $state, $stateParams, userEnterpriseService, $rootScope, routeParams, resourceUIService, timeout, growl, q, window, location, viewFlexService, freeboardservice, userLoginUIService, roleViewService, commonMethodService, psUiRouterHandler) {

      /**
       * 展示三级标题的tabs
       * 从路由中 $stateParams.main_active_index $stateParams.sub_active_index
       *
       */
      psUiRouterHandler.getMinorTabs().then( function( mintabs ) {
        $scope.mintabs = mintabs;
      })
      //$scope.mintabs = $rootScope.tabs[$stateParams.main_active_index].children[$stateParams.sub_active_index].children;
      $scope.minor_active_index = $stateParams.minor_active_index;
      $scope.minorNavToPage = function (params) {
        $scope.minor_active_index = params.index;
        psUiRouterHandler( params ).then( function( d ) {
          $state.go.apply($state, d);
        })
        /**
         * 判断有没有三级标题，有的话继续分路由
         */
        //window.location.href = "../app-sc/index_freeboard.html#/prod_sub_dashboard/" + params.showTree + "/" + $stateParams.main_active_index + "/minor_dashboard/" + $stateParams.sub_active_index + "/" + "minor_view/" + params.viewId + "/" + params.index;
      }
    }
  ])
})