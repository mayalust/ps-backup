/**
 * 定义RequireJS配置
 */
require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  paths: {
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'bootstrap-treeview': '../../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'ng-dialog': '../../node_modules/ng-dialog/js/ngDialog.min',
    'angular': '../../node_modules/angular/angular.min',
    'iCheck': '../../node_modules/iCheck/icheck.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'slick': '../../node_modules/slick-carousel/slick/slick.min',
		'macarons': '../../node_modules/echarts/theme/macarons',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'index-app': '../../toolkit/admin-lte/app',
    'tools': '../../toolkit/tools',
    'configs': '../../toolkit/configs',
		'echarts': '../../node_modules/echarts/dist/echarts.min',
		'jquery-ui': '../../node_modules/components-jqueryui/jquery-ui',
		'Array': '../../toolkit/commonLib/js/lib/Array',
		'sparkline': '../../toolkit/sparkline/dist/jquery.sparkline.min',
		'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
		'select2': '../../node_modules/select2/dist/js/select2.min',
		'baiduMap': 'https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services='
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
    'tools': {
      deps: ['jquery']
    },
    'configs': {
      deps: ['jquery']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'ng-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'iCheck': {
      deps: ['jquery']
    },
    'slick': {
      deps: ['jquery', 'angular']
    },
    'bootstrap-treeview': {
      deps: ['jquery', 'bootstrap']
    },
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
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
    'index-app': {
      deps: ['slimscroll', 'bootstrap']
    },
    'select2': {
      deps: ['jquery', 'bootstrap']
    }
  },
  deps: [
    // kick start application... see bootstrap.js
//  'angular',
//  'slick',
//  'iCheck',
    'index-app',
//  'bootstrap-dialog',
//  'bootstrap-treeview',
//  'ng-dialog',
//  'slimscroll',
    'tools',
    'configs'
//  'select2',
//		'sparkline',
//  'datatables',
//  'datatables.net',
//  './angular-bootstrap',
//		'baiduMap',
//		'Array'
  ]
});
require([
    'app',
    'routes',
    '../js/loader.js',
    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
    'angular-bootstrap',
    //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
    'controllers/controllers',
    '../js/services/services.js',
    'directives/directives',
    'filters/filters',
    'values/values'
  ],

  function(app, config, loader) {
    'use strict';
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
    return app;
  }
);