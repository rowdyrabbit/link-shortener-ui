'use strict';

/**
 * @ngdoc overview
 * @name linkShortenerUiApp
 * @description
 * # linkShortenerUiApp
 *
 * Main module of the application.
 */
angular
  .module('linkShortenerUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/shortened', {
        templateUrl: 'views/confirmation.html',
        controller: 'ConfirmationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
