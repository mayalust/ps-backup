window.debug = false;
var config = {
  urlArgs: "==version==",
  waitSeconds : 0,
  baseUrl: 'js',
  paths: {
    'jquery': '../../node_modules/jquery/dist/jquery.min',
    'angular': '../../node_modules/angular/angular.min',
    'angular-route': '../../node_modules/angular-route/angular-route.min',
    'angular-resource': '../../node_modules/angular-resource/angular-resource.min',
    'angular-animate': '../../node_modules/angular-animate/angular-animate.min',
    'angular-growl': '../../node_modules/angular-growl-v2/build/angular-growl.min',
    'angular-style':'../../toolkit/angular-custom/angular-style',
    'angular-popup':'../../toolkit/angular-custom/angular-popup',
    'jquery-ui' : "../../node_modules/components-jqueryui/jquery-ui",
    'jquery-cookie' : "../../node_modules/jquery.cookie/jquery.cookie",
    'jquery-session' : "../../toolkit/jquery-session",
    'underscore' : '../../node_modules/underscore/underscore',
    'domReady' : '../../node_modules/requirejs-domready/domReady',
    'zrColor' : '../../../node_modules/zrender/src/tool/color',
    'slimscroll': '../../node_modules/slimScroll/jquery.slimscroll.min',
    'macarons': '../../node_modules/echarts/theme/macarons',
    'spectrum' : '../../node_modules/spectrum-colorpicker/spectrum',
    'echarts': '../../node_modules/echarts/dist/echarts.min',
    'bootstrap': '../../node_modules/bootstrap/dist/js/bootstrap.min',
    'bootstrap-dialog': '../../node_modules/bootstrap3-dialog/dist/js/bootstrap-dialog.min',
    'bootstrap-multiselect': '../../node_modules/bootstrap-multiselect/dist/js/bootstrap-multiselect',
    'bmap': '../../node_modules/echarts/dist/extension/bmap.min',
    'd3' : '../../node_modules/d3/dist/d3',
    'd3-transition' : '../../node_modules/d3-transition/build/d3-transition.min',
    'lodash': '../../node_modules/lodash/index',
    'rappid-joint': '../../toolkit/rappid/dist/rappid',
    'config' : 'config',
    'directive' : 'directives/index',
    'service' : 'services/index',
    'filter' : 'filters/index',
    'value' : 'values/index',
    'index-app': '../../toolkit/admin-lte/app',
    'controller' : 'controllers/index',
    'optionDataHandler' : 'toolkit/optionDataHandler',
    'profile' : 'toolkit/profile',
    'modelPanel' : 'toolkit/modelPanel',
    'setting' : 'toolkit/setting',
    'dom' : 'toolkit/dom',
    'static' : 'toolkit/static',
    'codeMirrorEditor' : 'toolkit/codeMirror',
    'colorPicker' : 'toolkit/colorPicker',
    'grid_controller' : 'toolkit/grid_controller',
    'echart_creator' : 'toolkit/echart_creator',
    'optionEdit' : 'toolkit/optionEdit',
    'commonlib' : '../../toolkit/commonLib/js/lib/commonlib',
    'Array' : '../../toolkit/commonLib/js/lib/Array',
    'sparkline': '../../toolkit/sparkline/dist/jquery.sparkline.min',
    'tools' : '../../toolkit/tools',
    'app' : 'app',
    'backbone': '../../node_modules/backbone/backbone',
    'baiduMap': 'https://api.map.baidu.com/getscript?v=2.0&ak=eMekSXxqG1j2wLM57RFN61l8T6eB1EDx&services=',
    'echartsall' : '../../toolkit/echart-addon/echarts-all',
    'dataTools' : '../../toolkit/echart-addon/dataTool.min',
    'contextmenu' : '../../toolkit/contextmenu/contextmenu',
    'handsontable' : '../../node_modules/handsontable/dist/handsontable.full',
    'loader' : '../../js/loader'
  },
  shim: {
    'echart_v2' : { exports: 'echarts' },
    'index-app' : { deps: ['jquery', 'jquery-ui'] },
    'slimscroll': {
      deps: ['jquery']
    },
    'bootstrap-multiselect': {
      deps: ['jquery', 'bootstrap']
    },
    'jquery' : { exports: 'jquery' },
    'jquery-ui' : { deps: ['jquery'] },
    'jquery-cookie' : { deps: ['jquery'] },
    'jquery-session' : { deps : ['jquery'] },
    'contextmenu' : { deps: ['jquery'] },
    'spectrum' : { deps: ['jquery'] },
    'angular' : { exports: 'angular' },
    'angular-route': { deps: ['angular'] },
    'angular-resource' : { deps: ['angular'] },
    'angular-animate' : { deps: ['angular'] },
    'angular-growl': { deps: ['angular'] },
    'angular-style': { deps: ['angular'] },
    'angular-popup': { deps: ['angular'] },
    'underscore' : {exports : '_'},
    'zrender' : {experts : 'zrender'},
    'bootstrap': {
      deps: ['jquery']
    }
  },
  deps: ['angular-bootstrap', 'tools', 'Array', 'slimscroll', 'jquery-ui','index-app', 'bootstrap-multiselect', 'contextmenu', 'loader']
}
if(window.debug == true)
{
  config.paths.angular = '../../toolkit/angular-for-debug'
}
require.config(config);