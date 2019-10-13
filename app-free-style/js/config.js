define(
	[
		"app",
	],
	function(app){
    app(function(app){
      app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        "$httpProvider",
        'growlProvider',
        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider, growlProvider){
          app.registerController = $controllerProvider.register;
          app.registerDirective = $compileProvider.directive;
          app.registerFilter = $filterProvider.register;
          app.registerFactory = $provide.factory;
          app.registerService = $provide.service;
          $routeProvider
            .when('/:viewId/:page?/:parameter?', {
              templateUrl : "partials/free-style.html",
              reloadOnSearch : false, /** hash改变后页面路由不刷新 */
              controller : "freeStyleCtrl"
            });
          $httpProvider.defaults.withCredentials = true;
          growlProvider.globalTimeToLive({
            success: 3000,
            error: 5000,
            warning: 5000,
            info: 5000
          });
        }]);
      require(['domReady'],function(docment){
        angular.bootstrap(document,[app.name]);
      });
    })
	}
)