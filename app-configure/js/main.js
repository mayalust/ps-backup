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
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router',
    'moment': '../../node_modules/moment/min/moment.min',
    'locales': '../../node_modules/moment/min/locales.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-style':'../../toolkit/angular-custom/angular-style',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'keyboardJS': '../../node_modules/keyboardjs/dist/keyboard',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'lodash': '../../node_modules/lodash/index',
    'backbone': '../../node_modules/backbone/backbone',
    'jquery-ui' : "../../node_modules/components-jqueryui/jquery-ui",
    'underscore': '../../node_modules/underscore/underscore',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
    'macarons': '../../node_modules/echarts/theme/macarons',
    'ng-dialog': '../../node_modules/ng-dialog/js/ngDialog.min',
    'select2': '../../node_modules/select2/dist/js/select2.min',
    'rappid-joint': '../../toolkit/rappid/dist/rappid',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'Array': '../../toolkit/commonLib/js/lib/Array',
    'index-app': '../../toolkit/admin-lte/app',
    'tools': '../../toolkit/tools',
    'baiduMap': 'https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services=',
    'commonMethod' : '../../toolkit/component/commonMethod'
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
    // 'tools': {
    //   deps: ['jquery']
    // },
    'tools': {
      deps: ['jquery','moment']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'jquery-ui' : { deps: ['jquery'] },
    'index-app': {
      deps: ['slimscroll', 'bootstrap']
    },
    'slimscroll': {
      deps: ['jquery']
    },
    'select2': {
      deps: ['jquery', 'bootstrap']
    },
    'backbone': {
      deps: ['underscore']
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
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
    },
    'angular-style': { deps: ['angular'] },
    'ng-dialog': {
      deps: ['angular']
    },
    'lodash': {
      exports: '_'
    }
  },
  deps: [
    // kick start application... see bootstrap.js
    'index-app',
    'tools'
  ]
});

require([
    'app',
    'routes',
    '../js/loader.js',
    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
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
    psrequire( deps, function(){
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
      require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
      });
    })
    //return app;
  }
);