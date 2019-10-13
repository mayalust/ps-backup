define([
  'angular',
  '../../node_modules/ps-ultility/ps-ultility',
  'solution',
  'angular-route',
  'angular-ui-router',
  'angular-resource',
  'angular-animate',
  'angular-growl',
  'angular-file-upload',
  "angular-style",
  "angular-popup",
  "angular-dialogue",
  'ng-dialog',
  'controllers/index',
  'directives/index',
  'filters/index',
  'services/index',
  'values/index'
], function(angular, ultility, solution) {
  'use strict';
  return function(callback){
    solution(function(){
      var mod = angular.module('app', [
        'controllers',
        'directives',
        'filters',
        'services',
        'values',
        'angular-growl',
        'ngAnimate',
        'ngRoute',
        'angularFileUpload',
        'ngAngularStyle',
        'ngAngularPopup',
        'ngAngularDialogue',
        'ngDialog',
        'ui.router',
        'solution'
      ]),deps = [
        '../ps-core/build/output.js|css',
        '../ps-baogang/build/template.config.js',
        '../ps-baogang/build/controller.config.js',
        '../ps-baogang/build/service.js',
        '../ps-baogang/build/style.css'
      ]
      function each(arr, callback){
        for(var i = 0; i < arr.length; i++){
          callback( arr[i], i, arr );
        };
      }
      psrequire(deps, function( ){
        each( arguments, function( render, i ) {
          render( mod, deps[i] );
        })
        callback( mod );
      }, function(e){
         
      })
    })
  };
});