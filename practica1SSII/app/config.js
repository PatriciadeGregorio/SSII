'use strict';

angular.module('practica1SsiiApp')

    .config(['$urlRouterProvider', '$stateProvider', HomeService,
    function($urlRouterProvider, $stateProvider, HomeService) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>',
            resolve: {
              'gameList': HomeService.getHomeGames()
            }
        });
    }]);

