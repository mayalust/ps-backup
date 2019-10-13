define(
  [
    "angular",
    '../../node_modules/ps-ultility/ps-ultility',
    "ui-router",
    "angular-route",
    "angular-resource",
    "angular-animate",
    'angular-file-upload',
    "angular-growl",
    "angular-style",
    "angular-popup",
    "angular-dialogue",
    "ng-dialog"
  ],
  function(angular, ultility) {
    'use strict';
    return function app(callback){
      var app = angular.module("myapp", ['ngAnimate',
          'ngResource',
          'ngRoute',
          'controllers',
          'directives',
          'services',
          'filters',
          'values',
          'angular-growl',
          'angularFileUpload',
          'ngAngularStyle',
          'ngAngularPopup',
          'ngAngularDialogue',
          'ui.router',
          'ngDialog'
        ]),
        deps = [
          '../ps-core/build/output.js|css',
          '../ps-baogang/build/controller.config.js',
          '../ps-baogang/build/service.js'
        ];
      psrequire( deps, function() {
        var args = [].slice.call(arguments);
        args.forEach(function (render) {
          render(app);
        });
        callback( app );
      })
    }
  }
)