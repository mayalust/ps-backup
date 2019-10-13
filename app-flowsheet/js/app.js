define([
	'angular',
	'angular-route',
	'angular-resource',
  'angular-ui-router',
	'angular-animate',
	'angular-growl',
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
    'ui.router',
		'services',
		'angular-growl',
		'ngAnimate',
		'ngRoute'
	]);
});