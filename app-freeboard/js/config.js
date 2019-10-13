define(
	[
		"app",
  ],
	function(app){
	  app(function(app){
      psrequire(['../ps-baogang/build/service.js'], function( render ){
        render( app, '../ps-baogang/build/service.js' );
        require(["./values/free-graph-value"], function(){
          app.config([
            '$routeProvider',
            '$locationProvider',
            '$stateProvider',
            '$urlRouterProvider',
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            "$httpProvider",
            'growlProvider',
            function($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider, growlProvider){
              app.registerController = $controllerProvider.register;
              app.registerDirective = $compileProvider.directive;
              app.registerFilter = $filterProvider.register;
              app.registerFactory = $provide.factory;
              app.registerService = $provide.service;
              $routeProvider
                .when('/service/view/:flag/:viewId?', {
                  templateUrl : "partials/freeboard.html",
                  controller : "freeBoardCtrl"
                })
                .when('/freeboard/solution/:flag/:solutionId/:serviceViewId', {
                  templateUrl : "partials/freeboard.html",
                  reloadOnSearch : false, /** hash改变后页面路由不刷新 */
                  controller : "freeBoardCtrl"
                })
                .when('/freeboard/view/:flag/:viewId?/:saveToManagement?', {
                  templateUrl : "partials/freeboard.html",
                  reloadOnSearch : false, /** hash改变后页面路由不刷新 */
                  controller : "freeBoardCtrl"
                })
                .when('/template/:type/:flag/:params', {
                  templateUrl : "partials/freeboard.html",
                  controller : "freeBoardCtrl"
                })
                .when('/specialist/:flag/:kqiModelId', {
                  templateUrl : "partials/freeboard.html",
                  controller : "freeBoardCtrl"
                })
                .when('/editor/solution/:flag/:solutionId/:groupId/:modelId', {
                  templateUrl : "partials/freeboard.html",
                  controller : "freeBoardCtrl"
                })
                .when('/editor/view/:flag/:viewId?/:saveToManagement?', {
                  templateUrl : "partials/freeboard.html",
                  controller : "freeBoardCtrl"
                });
              growlProvider.globalTimeToLive({
                success: 3000,
                error: 5000,
                warning: 5000,
                info: 5000
              });
              $httpProvider.defaults.withCredentials = true;
            }]);
          require(['domReady'],function(docment){
            angular.bootstrap(document,[app.name]);
          });
        })
      }, function(e){
         
      })
    })
	}
)