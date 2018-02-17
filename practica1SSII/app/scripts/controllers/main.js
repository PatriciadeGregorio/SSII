'use strict';

/**
 * @ngdoc function
 * @name practica1SsiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the practica1SsiiApp
 */
angular.module('practica1SsiiApp'[
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
])
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
