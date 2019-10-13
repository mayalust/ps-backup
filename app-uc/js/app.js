define([
	'angular',
	'ui-router',
	'angular-route',
	'angular-resource',
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
		'services',
		'angular-growl',
		'ngAnimate',
		'ui.router',
		'ngRoute'
	]);
});