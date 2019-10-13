define([
	'angular',
	'angular-route',
	'ui-router',
	'angular-resource',
	'angular-animate',
	'angular-growl',
  'angular-style',
	'ng-dialog',
	'./controllers/index',
	'./directives/index',
	'./filters/index',
	'./services/index'
], function(angular) {
	'use strict';
	return angular.module('app', [
		'controllers',
		'directives',
		'filters',
		'services',
		'angular-growl',
		'ngAnimate',
		'ngRoute',
    'ui.router',
    'ngAngularStyle',
		'ngDialog'
	]);
});