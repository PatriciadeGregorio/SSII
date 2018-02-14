'use strict';

angular.module('practica1SsiiApp')

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('home');
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
