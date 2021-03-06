define(
	[
		"app",
	],
	function(app){
    app(function (app) {
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
          growlProvider.globalTimeToLive({
            success: 3000,
            error: 5000,
            warning: 5000,
            info: 5000
          });
          $httpProvider.defaults.withCredentials = true;
        }])
      require(['domReady!'], function(document) {
        angular.bootstrap(document, [app.name]);
      });
    })
	}
)