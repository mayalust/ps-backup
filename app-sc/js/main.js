/**
 * 定义RequireJS配置
 */
require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  paths: {
    'spectrum': '../../node_modules/spectrum-colorpicker/spectrum',
    'toolkit': "../../toolkit",
    'webVideoCtrl': "../../toolkit/video_play/webVideoCtrl",
    'videoCam': "../../toolkit/video_play/videoCam",
    'echartGalleryJs': "../../toolkit/echarts-gl/echarts-gl.min",
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'moment': '../../node_modules/moment/min/moment.min',
    'laydate': '../../node_modules/layui-laydate/src/laydate',
    'locales': '../../node_modules/moment/min/locales.min',
    'ng-dialog': '../../node_modules/ng-dialog/js/ngDialog.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'bootstrap-switch': '../../node_modules/bootstrap-switch/dist/js/bootstrap-switch.min',
    'bootstrap-daterangepicker': '../../node_modules/bootstrap-daterangepicker/daterangepicker',
    'angular-style': '../../toolkit/angular-custom/angular-style',
    'jquery-ui': '../../node_modules/components-jqueryui/jquery-ui',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'd3': '../../node_modules/d3/dist/d3',
    'svgcharts': '../../toolkit/svgcharts/svgcharts',
    'jwplayer': '../../toolkit/jwplayer',
    'ckplayer': '../../toolkit/ckplayer/ckplayer',
    'ezuikit': '../../toolkit/ezuikit',
    'jwplayer.html5': '../../toolkit/jwplayer.html5',
    'iCheck': '../../node_modules/iCheck/icheck.min',
    'fastclick': '../../node_modules/fastclick/lib/fastclick',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'fullcalendar': '../../node_modules/fullcalendar/dist/fullcalendar.min',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
    'macarons': '../../node_modules/echarts/theme/macarons',
    'slick': '../../node_modules/slick-carousel/slick/slick.min',
    'angular': '../../node_modules/angular/angular.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'angular-file-upload': '../../node_modules/angular-file-upload/dist/angular-file-upload.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'qrcode': '../../node_modules/jquery-qrcode/jquery.qrcode.min',
    'multiselect': '../../node_modules/multiselect/js/jquery.multi-select',
    'underscore': '../../node_modules/underscore/underscore',
    'index-app': '../../toolkit/admin-lte/app',
    'Array': '../../toolkit/commonLib/js/lib/Array',
    'select2': '../../node_modules/select2/dist/js/select2.min',
    'table2excel': '../../node_modules/jquery-table2excel/dist/jquery.table2excel',
    'simulate': '../../toolkit/component/simulate',
    'tools': '../../toolkit/tools',
    'configs': '../../toolkit/configs',
    'lodash': '../../node_modules/lodash/index',
    'backbone': '../../node_modules/backbone/backbone',
    'rappid-joint': '../../toolkit/rappid/dist/rappid',
    'keyboardJS': '../../node_modules/keyboardjs/dist/keyboard',
    'sparkline': '../../toolkit/sparkline/dist/jquery.sparkline.min',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'baiduMap': 'https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services=',
    'BMapLib': '../../toolkit/component/BMapLib',
    'simulate_time': '../../toolkit/component/simulate_time',
    'clock': '../../toolkit/component/explainer/clock',
    'commonMethod': '../../toolkit/component/commonMethod',
    'dropdowntree': '../../toolkit/component/dropdowntree',
    'pstree': '../../node_modules/proudsmart-tree/dist/ps-tree',
    'jsToBeautify': '../../node_modules/js-to-beautify/dist/jsToBeautify',

  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-style': {
      deps: ['angular']
    },
    'ng-dialog': {
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
    'angular-file-upload': {
      deps: ['angular']
    },
    'jwplayer': {
      deps: ['jquery']
    },
    'webVideoCtrl': {
      deps: ['jquery']
    },
    'videoCam': {
      deps: ['webVideoCtrl']
    },
    'bootstrap': {
      deps: ['jquery']
    },
    'datatables.net': {
      deps: ['jquery']
    },
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
    },
    'datatables.net-bs': {
      deps: ['jquery', 'datatables.net']
    },
    'datatables.net-select': {
      deps: ['jquery', 'datatables.net']
    },
    'slimscroll': {
      deps: ['jquery']
    },
    'slick': {
      deps: ['jquery']
    },
    'iCheck': {
      deps: ['jquery']
    },
    'tools': {
      deps: ['jquery', 'moment']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'bootstrap-switch': {
      deps: ['jquery', 'bootstrap']
    },

    'bootstrap-treeview': {
      deps: ['jquery', 'bootstrap']
    },
    'bootstrap-daterangepicker': {
      deps: ['jquery', 'bootstrap']
    },
    'sparkline': {
      deps: ['jquery']
    },
    'qrcode': {
      deps: ['jquery']
    },
    'multiselect': {
      deps: ['jquery']
    },
    'index-app': {
      deps: ['slimscroll', 'bootstrap']
    },
    'underscore': {
      exports: 'underscore'
    }
  },
  deps: [
    // kick start application... see bootstrap.js
    'index-app',
    'Array',
    //		'angular',
    //		'iCheck',
    //		'bootstrap-dialog',
    //		'bootstrap-switch',
    //		'bootstrap-treeview',
    //		'bootstrap-daterangepicker',
    //		'datatables',
    //		'datatables.net',
    //		'echarts',
    //		'baiduMap',
    //		'sparkline',
    //		'slick',
    'tools'
    //		'slimscroll',
    //		'qrcode',
    //		'multiselect',
    //		'Array',
    //		'lodash',
    //		'rappid-joint',
    //		'backbone',
    //		'keyboardJS',
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
  function (app, config, loader) {
    'use strict';
    app(function (app) {
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
        function ($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider, growlProvider) {
          app.registerController = $controllerProvider.register;
          app.registerDirective = $compileProvider.directive;
          app.registerFilter = $filterProvider.register;
          app.registerFactory = $provide.factory;
          app.registerService = $provide.service;


          if (config.routes != undefined) {
            angular.forEach(config.routes, function (route, path) {
              /**
               * 更改成ui-router
               * hx 2019-01-01
               */
              // $routeProvider.when(path, {
              //   templateUrl: route.templateUrl,
              //   controller: route.controller,
              //   reloadOnSearch : route.reloadOnSearch,
              //   resolve: loader(route.dependencies)
              // });
              $stateProvider
                .state({
                  name: route.name ? route.name : path,
                  url: path,
                  templateUrl: route.templateUrl,
                  controller: route.controller,
                  params: route.params ? route.params : {},
                  resolve: loader(route.dependencies),
                })
            });
          }
          // if(config.defaultRoutePath != undefined) {
          //   $routeProvider.otherwise({
          //     redirectTo: config.defaultRoutePath
          //   });
          // }
          $urlRouterProvider.otherwise(config.defaultRoutePath);
          growlProvider.globalTimeToLive({
            success: 3000,
            error: 5000,
            warning: 5000,
            info: 5000
          });
          $httpProvider.defaults.withCredentials = true;
          $httpProvider.defaults.useXDomain = true;
          $httpProvider.defaults.headers.post = {
            'Content-Type': 'text/plain;charset=utf-8'
          }
          delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
      ]);
      require(['domReady!'], function (document) {
        angular.bootstrap(document, ['app']);
      });
    });
  }
);