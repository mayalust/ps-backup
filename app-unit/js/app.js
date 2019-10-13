define([
    "angular",
    'ui-router',
    "angular-route",
    "angular-resource",
    "angular-animate",
    'angular-file-upload',
    "angular-growl",
    "angular-style",
    "angular-popup",
    "angular-dialogue",
    "ng-dialog",
    './controllers/index',
    './services/index',
  ],
  function(angular) {
    'use strict';
    return function(callback){
      var mod = angular.module('myapp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'controllers',
        //'directives',
        'services',
        //'filters',
        //'values',
        'angular-growl',
        'ui.router',
        'angularFileUpload',
        'ngAngularStyle',
        //'ngAngularPopup',
        'ngAngularDialogue',
        'ngDialog'
      ]), deps = [
        '../ps-core/build/output.js|css',
        '../ps-baogang/build/template.config.js',
        '../ps-baogang/build/controller.config.js',
        '../ps-baogang/build/service.js',
        '../ps-baogang/build/style.css'
      ];
      function each(arr, callback){
        for(var i = 0; i < arr.length; i++){
          callback( arr[i], i, arr );
        };
      }
      psrequire(deps, function( ){
        each( arguments, function( render, i ) {
          render( mod, deps[i] );
        });
        callback( mod );
      }, function(e){
         
      });
    }
  })