/**
 * Created by shangri-la on 17-9-7.
 */

angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.configs', 'myApp.services', 'myApp.directive'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      })
      .state('nav', {
        url: '/nav',
        templateUrl: 'partials/nav.html',
        controller: 'navCtrl',
        params: {
          name: ''
        }
      })
      .state('tab', {
        url: '/tab',
        templateUrl: 'partials/tab.html',
        controller: 'tabCtrl',
        params: {
          name: ''
        }
      });
    // 默认
    $urlRouterProvider.otherwise('/nav');
  });