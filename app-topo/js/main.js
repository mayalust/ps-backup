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
        'jquery' : "../../node_modules/jquery/dist/jquery",
        'jquery-ui' : "../../node_modules/components-jqueryui/jquery-ui",
        'underscore' : '../../node_modules/underscore/underscore',
        'domReady' : '../../node_modules/requirejs-domready/domReady',
        'zrColor' : '../../node_modules/zrender/src/tool/color',
        'config' : 'config',
        'controllers' : 'controllers/index',
        'services' : 'services/index',
        'filters' : 'filters/index',
        'directives' : 'directives/index',
        'values' : 'values/index',
        'app' : 'app',
        'baiduMap' : 'toolkit/baiduMap',
        'commonlib' : '../../toolkit/commonLib/js/lib/commonlib'
    },
    shim: {
        'jquery' : { exports: 'jquery' },
        'jquery-ui' : { deps: ['jquery'] },
        'angular' : { exports: 'angular' },
        'angular-route': { deps: ['angular'] },
        'angular-resource' : { deps: ['angular'] },
        'angular-animate' : { deps: ['angular'] },
        'angular-growl': { deps: ['angular'] },
        'zrender' : {experts : 'zrender'}
    },
    deps: ['angular-bootstrap']
});