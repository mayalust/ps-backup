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
        // kick start application... see bootstrap.js
        'angular',
        'slick',
        'iCheck',
        'index-app',
        'bootstrap-dialog',
        'slimscroll',
        'tools',
//      'datatables',
        'datatables.net',
        './angular-bootstrap'
    ]
});

require([
        'app',
        //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
        'angular-bootstrap',
        //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
        'controllers/controllers',
        '../js/services/services.js',
        'directives/directives',
        'filters/filters'
    ],

  function (app) {
    'use strict';
    app.config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider
          .when('/access', {
            templateUrl: 'partials/access.html'
          });
      }
    ]);
    app.config(['growlProvider', function (growlProvider) {
      growlProvider.globalTimeToLive({
        success: 3000,
        error: 5000,
        warning: 5000,
        info: 5000
      });
    }]);
    app.config(["$httpProvider", function ($httpProvider) {
      $httpProvider.defaults.withCredentials = true;
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);
    return app;
  }
);