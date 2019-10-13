/**
 * 定义RequireJS配置
 */
require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  paths: {
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'angular': '../../node_modules/angular/angular.min',
    'iCheck': '../../node_modules/iCheck/icheck.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'slick': '../../node_modules/slick-carousel/slick/slick.min',
    'index-app': '../../toolkit/admin-lte/app',
    'configs': '../../toolkit/configs',
    'moment': '../../node_modules/moment/min/moment.min',
    'locales': '../../node_modules/moment/min/locales.min',
    'tools': '../../toolkit/tools'
  },
  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    },
    'angular-animate': {
      deps: ['angular']
    },
    'angular-growl': {
      deps: ['angular']
    },
    'slimscroll': {
      deps: ['jquery']
    },
    'configs': {
      deps: ['jquery']
    },
    'tools': {
      deps: ['jquery']
    },
    'datatables.net': {
      deps: ['jquery']
    },
    'datatables.net-bs': {
      deps: ['jquery','datatables.net']
    },
    'datatables.net-select': {
      deps: ['jquery','datatables.net']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'iCheck': {
      deps: ['jquery']
    },
    'slick': {
      deps: ['jquery', 'angular']
    },
    'index-app': {
      deps: ['slimscroll', 'bootstrap']
    }
  },
  deps: [
    'index-app',
    'tools',
    'configs'
  ]
});
require([
    'app',
    'routes',
    '../js/loader.js',
    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
    //'angular-bootstrap',
    //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
    'controllers/controllers',
    '../js/services/services.js',
    'directives/directives',
    'filters/filters'
  ],

  function(app, config, loader) {
    'use strict';
    var deps = [
      '../ps-core/build/output.js|css',
      '../ps-baogang/build/controller.config.js',
      '../ps-baogang/build/service.js'
    ];
    psrequire(deps, function(){
      var args = [].slice.call(arguments);
      args.forEach(function(render){
        render( app );
      });
      app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        "$httpProvider",
        'growlProvider',
        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider, growlProvider) {
          app.registerController = $controllerProvider.register;
          app.registerDirective = $compileProvider.directive;
          app.registerFilter = $filterProvider.register;
          app.registerFactory = $provide.factory;
          app.registerService = $provide.service;

          if(config.routes != undefined) {
            angular.forEach(config.routes, function(route, path) {
              $routeProvider.when(path, {
                templateUrl: route.templateUrl,
                controller: route.controller,
                resolve: loader(route.dependencies)
              });
            });
          }

          if(config.defaultRoutePath != undefined) {
            $routeProvider.otherwise({
              redirectTo: config.defaultRoutePath
            });
          }
          growlProvider.globalTimeToLive({
            success: 3000,
            error: 5000,
            warning: 5000,
            info: 5000
          });
          $httpProvider.defaults.withCredentials = true;
          $httpProvider.defaults.useXDomain = true;
          delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
      ]);
      require(['domReady!'], function(document) {
        angular.bootstrap(document, ['app']);
      });
    });
    //return app;
  }
);