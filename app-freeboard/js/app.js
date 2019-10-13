define([
  "angular",
  '../../node_modules/ps-ultility/ps-ultility',
  'solution',
  "angular-route",
  'ui-router',
  "angular-resource",
  "angular-animate",
  'angular-file-upload',
  "angular-growl",
  "angular-style",
  "angular-popup",
  "angular-dialogue",
  "ng-dialog"
], function(angular, ultility, solution) {
  'use strict';
  return function(callback){
    solution(function(){
      var mod = angular.module('app', ['ngAnimate', 'ngResource', 'ui.router', 'ngRoute', 'controllers', 'directives', 'services', 'filters', 'values', 'angular-growl', 'angularFileUpload', 'ngAngularStyle', 'ngAngularPopup',
        'ngAngularDialogue', 'ngDialog']),deps = [
        '../ps-core/build/output.js|css',
        '../ps-baogang/build/controller.config.js'
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
      })
    })
  };
});