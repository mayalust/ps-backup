define([
  'angular',
  '../../node_modules/ps-ultility/ps-ultility',
  'angular-route',
  'angular-ui-router',
  'angular-file-upload',
  'angular-resource',
  'angular-animate',
  'angular-growl',
  'angular-style',
  'angular-file-upload',
  'controllers/index',
  'directives/index',
  'filters/index',
  'services/index',
  'ng-dialog',
  'values/index'
], function (angular, ultility) {
  'use strict';
  return function (callback) {
    var mod = angular.module('app', [
        'controllers',
        'directives',
        'filters',
        'services',
        'values',
        'angular-growl',
        'ngAnimate',
        'ngDialog',
        'ngAngularStyle',
        'angularFileUpload',
        'ngRoute',
        'ui.router'
      ]),
      deps = [
        '../ps-core/build/output.js|css',
        '../ps-baogang/build/template.config.js',
        '../ps-baogang/build/controller.config.js',
        '../ps-baogang/build/service.js',
        '../ps-baogang/build/style.css'
      ]

    function each(arr, callback) {
      for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
      };
    }
    psrequire(deps, function () {
      each(arguments, function (render, i) {
        render(mod, deps[i]);
      })
      callback(mod);
    })
  };
});