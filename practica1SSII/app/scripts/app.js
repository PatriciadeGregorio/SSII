'use strict';

/**
 * @ngdoc overview
 * @name practica1SsiiApp
 * @description
 * # practica1SsiiApp
 *
 * Main module of the application.
 */
angular
  .module('practica1SsiiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.carousel',
    'ui.bootstrap.modal'
  ]).config(['$urlRouterProvider', '$stateProvider', '$sceDelegateProvider', function($urlRouterProvider, $stateProvider, $sceDelegateProvider) {
    $urlRouterProvider.otherwise('home');
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);
    $stateProvider
        .state('home', {
            name: 'home',
            url: '/home',
            component: 'home'

        })
        .state('search', {
          name: 'search',
          url: '/search',
          component: 'search',
          params: {
            gameSearch: null
          }
        })
        .state('info', {
          name: 'info',
          url: '/info',
          component: 'info',
          params: {
            game: null
          }
        });
}])


.run(['$state', '$timeout',
function ($state, $timeout) {
  $timeout(function() {
    $state.go('home');
});
}]);

