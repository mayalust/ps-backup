/**
 * 定义RequireJS配置
 */
require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  paths: {
    'toolkit' : "../../toolkit",
    'component' : "../../toolkit/component",
    'echartGalleryJs': "../../toolkit/echarts-gl/echarts-gl.min",
    'numberPrecision' : '../../toolkit/number-precision',
    'laydate' : '../../toolkit/laydate/laydate',
    'ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router',
    'ace': '../../node_modules/ace-builds/src-noconflict/ace',
    'ace-language' : '../../node_modules/ace-builds/src-noconflict/ext-language_tools',
    'svgcharts': '../../toolkit/svgcharts/svgcharts',
    'd3': '../../node_modules/d3/dist/d3',
    'spectrum': '../../node_modules/spectrum-colorpicker/spectrum',
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'moment': '../../node_modules/moment/min/moment.min',
    'locales': '../../node_modules/moment/min/locales.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'ng-dialog': '../../node_modules/ng-dialog/js/ngDialog.min',
    'bootstrap-switch': '../../node_modules/bootstrap-switch/dist/js/bootstrap-switch.min',
    'bootstrap-daterangepicker': '../../node_modules/bootstrap-daterangepicker/daterangepicker',
    'bootstrap-datetimepicker': '../../node_modules/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min',
    'bootstrap-treeview': '../../node_modules/bootstrap-treeview/dist/bootstrap-treeview.min',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'jquery-ui': '../../node_modules/components-jqueryui/jquery-ui',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-buttons': '../../node_modules/datatables.net-buttons/js/dataTables.buttons',
    'datatables.net-buttons-bs': '../../node_modules/datatables.net-buttons-bs/js/buttons.bootstrap',
    'datatables.buttons.html5': '../../node_modules/datatables.net-buttons/js/buttons.html5',
    'pdfmake': '../../node_modules/pdfmake/build/pdfmake.min',
    'vfs': '../../node_modules/pdfmake/build/vfs_fonts',
    'datatables.buttons.flash': '../../node_modules/datatables.net-buttons/js/buttons.flash',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'clipboard':'../../node_modules/clipboard/dist/clipboard.min',
    'jwplayer':'../../toolkit/jwplayer',
    'cronGen':'../../toolkit/cronGen',
    'cronGen.min':'../../toolkit/cronGen.min',
    'ckplayer' : '../../toolkit/ckplayer/ckplayer',
    'ezuikit' : '../../toolkit/ezuikit',
    'jwplayer.html5':'../../toolkit/jwplayer.html5',
    'jszip': '../../node_modules/jszip/dist/jszip',
    'iCheck': '../../node_modules/iCheck/icheck.min',
    'fastclick': '../../node_modules/fastclick/lib/fastclick',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'fullcalendar': '../../node_modules/fullcalendar/dist/fullcalendar.min',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
    'dataTool': '../../node_modules/echarts/dist/extension/dataTool',
    'macarons': '../../node_modules/echarts/theme/macarons',
    'dark': '../../node_modules/echarts/theme/dark',
    'slick': '../../node_modules/slick-carousel/slick/slick.min',
    'ckeditor': '../../node_modules/ckeditor/ckeditor',
    'ckeditor-sample': "../../node_modules/ckeditor/samples/js/sample",
    'angular': '../../node_modules/angular/angular.min',
    //'angular' : '../../toolkit/angular_for_debug',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
//  'angular-translate': '../../node_modules/angular-translate/angular-translate.min',
//  "angular-translate-loader-url": '../../node_modules/angular-translate-loader-url/angular-translate-loader-url.min',
    'angular-style':'../../toolkit/angular-custom/angular-style',
    'angular-dialogue':'../../toolkit/angular-custom/angular-dialogue',
    'angular-popup':'../../toolkit/angular-custom/angular-popup',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'angular-file-upload': '../../node_modules/angular-file-upload/dist/angular-file-upload.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'qrcode': '../../node_modules/jquery-qrcode/jquery.qrcode.min',
    'multiselect': '../../node_modules/multiselect/js/jquery.multi-select',
    'underscore': '../../node_modules/underscore/underscore-min',
    'select2': '../../node_modules/select2/dist/js/select2.min',
    'xlsx': '../../node_modules/js-xlsx/dist/xlsx.min',
    'index-app': '../../toolkit/admin-lte/app',
    'table2excel' : '../../node_modules/jquery-tåable2excel/dist/jquery.table2excel',
    'Array': '../../toolkit/commonLib/js/lib/Array',
    'tools': '../../toolkit/tools',
    'configs': '../../toolkit/configs',
    'lodash': '../../node_modules/lodash/index',
    'backbone': '../../node_modules/backbone/backbone-min',
    'rappid-joint': '../../toolkit/rappid/dist/rappid',
    'ztree': '../../node_modules/ztree/js/jquery.ztree.core-3.5',
    'ztree-excheck': '../../node_modules/ztree/js/jquery.ztree.excheck-3.5',
    'sparkline': '../../toolkit/sparkline/dist/jquery.sparkline.min',
    'baiduMap': 'https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services=',
    'BMapLib' : '../../toolkit/component/BMapLib',
    'simulate' : '../../toolkit/component/simulate',
    'simulate_time' : '../../toolkit/component/simulate_time',
    'commonMethod' : '../../toolkit/component/commonMethod',
    'dropdowntree' : '../../toolkit/component/dropdowntree',
    'clock' : '../../toolkit/component/explainer/clock',
    'scrollbar' : '../../toolkit/component/explainer/scrollbar',
    'solution' : '../../solution/module',
    'pstree' : '../../node_modules/proudsmart-tree/dist/ps-tree',
    'jsToBeautify' : '../../node_modules/js-to-beautify/dist/jsToBeautify',
  },
  shim: {
    'ace' : { exports:'ace'},
    'ace-language' : { deps : ['ace']},
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-file-upload': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    },
    'angular-animate': {
      deps: ['angular']
    },
//  'angular-translate': {
//    deps: ['angular']
//  },
//  'angular-translate-loader-url': {
//    deps: ['angular-translate']
//  },
    'angular-growl': {
      deps: ['angular']
    },
    'jwplayer' : {
      deps: ['jquery']
    },
    'bootstrap': {
      deps: ['jquery']
    },
//  'datatables': {
//    deps: ['jquery']
//  },
//  'datatables.net': {
//    deps: ['jquery', 'datatables']
//  },
    'ztree': {
      deps: ['jquery']
    },
    'ztree-excheck': {
      deps: ['jquery','ztree']
    },
    'datatables.net': {
      deps: ['jquery']
    },
    'datatables.net-buttons-bs': {
      deps: ['jszip']
    },
    'datatables.buttons.html5': {
      deps: ['datatables.net-buttons-bs']
    },
    'datatables.buttons.flash': {
      deps: ['datatables.net-buttons-bs', 'pdfmake', 'vfs']
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
      deps: ['jquery']
    },
    'configs': {
      deps: ['jquery']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
    'ng-dialog': {
      deps: ['angular']
    },
    'ckeditor': {
      deps: ['jquery']
    },
    'ckeditor-sample': {
      deps: ['jquery', 'cheditor']
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
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
    },
    'index-app': {
      deps: ['slimscroll', 'bootstrap']
    },
    'angular-style': {
      deps: ['angular']
    },
    'angular-dialogue' : {
      deps: ['angular']
    },
    'angular-popup': {
      deps: ['angular']
    },
    'underscore': {
      exports: 'underscore'
    },
    'select2': {
      deps: ['jquery', 'bootstrap']
    },
    'lodash': {
      exports: '_'
    }
  },
  deps: [
    //kick start application... see bootstrap.js
    'index-app',
    'tools',
    'configs',
    'Array'
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
    'filters/filters',
    'values/values'
  ],
  function(app, config, loader) {
    'use strict';
    app(function(app){
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
        function($routeProvider, $locationProvider,$stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider,
                 $provide, $httpProvider, growlProvider) {
          app.registerController = $controllerProvider.register;
          app.registerDirective = $compileProvider.directive;
          app.registerFilter = $filterProvider.register;
          app.registerFactory = $provide.factory;
          app.registerService = $provide.service;
          if(config.routes != undefined) {
            angular.forEach(config.routes, function(route, path) {
              /**
              $stateProvider
                .state({
                  name : path,
                  url: path,
                  templateUrl: route.templateUrl,
                  controller: route.controller,
                  params: route.params ? route.params : {},
                  resolve: loader(route.dependencies),
                });
               **/
              $routeProvider.when(path, {
                templateUrl: route.templateUrl,
                controller: route.controller,
                reloadOnSearch : route.reloadOnSearch,
                resolve: loader(route.dependencies)
              });
            });
          }
          /**
          if(config.defaultRoutePath != undefined) {
            $routeProvider.otherwise({
              redirectTo: config.defaultRoutePath
            });
          }**/
          growlProvider.globalTimeToLive({
            success: 5000,
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
      require(['domReady!'], function(document) {
        angular.bootstrap(document, [app.name]);
      });
    });
  }
);