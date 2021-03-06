/**
 * 定义RequireJS配置
 */
require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  paths: {
    'ace': '../../node_modules/ace-builds/src-noconflict/ace',
    'ace-language' : '../../node_modules/ace-builds/src-noconflict/ext-language_tools',
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'angular-ui-router': '../../node_modules/angular-ui-router/release/angular-ui-router.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'angular': '../../node_modules/angular/angular.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'slimscroll': '../../node_modules/jquery-slimscroll/jquery.slimscroll.min',
    'keyboardJS': '../../node_modules/keyboardjs/dist/keyboard',
    'datatables.net': '../../node_modules/datatables.net/js/jquery.dataTables',
    'datatables.net-bs': '../../node_modules/datatables.net-bs/js/dataTables.bootstrap',
    'datatables.net-select': '../../node_modules/datatables.net-select/js/dataTables.select.min',
    'lodash': '../../node_modules/lodash/index',
    'backbone': '../../node_modules/backbone/backbone',
    'underscore': '../../node_modules/underscore/underscore',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
    'macarons': '../../node_modules/echarts/theme/macarons',
    'rappid-joint': '../../toolkit/rappid/dist/rappid',
    'moment' : '../../node_modules/moment/moment',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'index-app': '../../toolkit/admin-lte/app',
    'tools': '../../toolkit/tools',
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
    'tools': {
      deps: ['jquery']
    },
    'bootstrap-dialog': {
      deps: ['jquery', 'bootstrap']
    },
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
    'lodash': {
      exports: '_'
    }
  },
  deps: [
    // kick start application... see bootstrap.js
    'angular',
    'index-app',
    'bootstrap-dialog',
    'tools',
    'slimscroll',
    'lodash',
    'rappid-joint',
    'backbone',
    'keyboardJS',
    'datatables.net',
    'bootstrap-multiselect',
  ]
});

require([
    'app',
    //注意：这不是Twitter Bootstrap，而是AngularJS bootstrap
    //所创建的所有控制器、服务、指令及过滤器文件都必须写到这里，这块内容必须手动维护
    'controllers/controllers',
    '../js/services/services.js',
    'directives/directives',
    'filters/filters'
  ],

  function(app) {
    'use strict';
    var deps = [
      '../ps-core/build/output.js|css',
      '../ps-baogang/build/controller.config.js',
      '../ps-baogang/build/service.js'
    ];
    psrequire( deps, function() {
      var args = [].slice.call(arguments);
      args.forEach(function (render) {
        render(app);
      });
      app.config(['$routeProvider'  , '$stateProvider',
        function($routeProvider,$stateProvider) {
          $routeProvider.
          when('/index', {
            controller: 'flowConfigureCtrl'
          }).
          when('/flow/:viewId', {
            templateUrl: 'partials/flowid.html',
            controller: 'flowCtrl'
          }).
          when('/displayView/:viewId', {
            templateUrl: 'partials/flowid.html',
            controller: 'flowCtrl'
          }).
          when('/historyView/:viewId', {
            templateUrl: 'partials/flowid.html',
            controller: 'flowCtrl'
          }).
          when('/processView/:viewId', {
            templateUrl: 'partials/process.html',
            controller: 'flowProcessCtrl'
          })
        }
      ]);
      app.config(['growlProvider', function(growlProvider) {
        growlProvider.globalTimeToLive({
          success: 3000,
          error: 5000,
          warning: 5000,
          info: 5000
        });
      }]);
      app.config(["$httpProvider", function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }]);
      require(['domReady!'], function(document) {
        angular.bootstrap(document, ['app']);
      });
    });
  }
);