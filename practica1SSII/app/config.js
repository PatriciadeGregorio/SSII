'use strict';

angular.module('practica1SsiiApp')

    .config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>',
            controllerAs: 'vm'
        });
    }]);

    // ,
    //         resolve: {
    //           'gameList': HomeService.getHomeGames()
    //         }

