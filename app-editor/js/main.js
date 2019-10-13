require.config({
  urlArgs: "==version==",
  waitSeconds: 0,
  baseUrl: 'js',
  paths: {
    'angular': '../../node_modules/angular/angular.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'jquery': "../../node_modules/jquery/dist/jquery",
    'jquery-ui': "../../node_modules/components-jqueryui/jquery-ui",
    'underscore': '../../node_modules/underscore/underscore',
    'domReady': '../../node_modules/requirejs-domready/domReady',
    'zrColor': '../../../node_modules/zrender/src/tool/color',
    'spectrum': '../../node_modules/spectrum-colorpicker/spectrum',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'd3': '../../node_modules/d3/dist/d3',
    'config': 'config',
    'controllers': 'controllers/index',
    'directives': 'directives/index',
    'services': 'services/index',
    'filters': 'filters/index',
    'values': 'values/index',
    'controller': 'controllers/index',
    'optionDataHandler': 'toolkit/optionDataHandler',
    'profile': 'toolkit/profile',
    'modelPanel': 'toolkit/modelPanel',
    'setting': 'toolkit/setting',
    'dom': 'toolkit/dom',
    'static': 'toolkit/static',
    'codeMirrorEditor': 'toolkit/codeMirror',
    'colorPicker': 'toolkit/colorPicker',
    'grid_controller': 'toolkit/grid_controller',
    'echart_creator': 'toolkit/echart_creator',
    'optionEdit': 'toolkit/optionEdit',
    'commonlib': '../../toolkit/commonLib/js/lib/commonlib',
    'Array': '../../toolkit/commonLib/js/lib/Array',
    'app': 'app'
  },
  shim: {
    'echart_v2': {
      exports: 'echarts'
    },
    'jquery': {
      exports: 'jquery'
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'spectrum': {
      deps: ['jquery']
    },
    'angular': {
      exports: 'angular'
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
    'underscore': {
      exports: '_'
    },
    'zrender': {
      experts: 'zrender'
    }
  },
  deps: ['angular-bootstrap']
});