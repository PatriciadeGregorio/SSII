'use strict';

angular.module('practica1SsiiApp')

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('app.main', {
                url: '/',
                template: './main_page/main_page.html'
            });
    }]);
