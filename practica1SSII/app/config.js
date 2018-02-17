'use strict';

angular.module('practica1SsiiApp')

    .config(['$urlRouterProvider', '$stateProvider', '$sceDelegateProvider', '$qProvider',
    function($urlRouterProvider, $stateProvider, $sceDelegateProvider, $qProvider) {
        $urlRouterProvider.otherwise('home');
        $qProvider.errorOnUnhandledRejections(false);
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
