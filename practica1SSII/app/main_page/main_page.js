'use strict';

/**
 * @ngdoc component
 * @name TagComponent
 * @param {Object}$state Angular core service
 * @param {Object}$scope Angular core service
 * @param {Object} $timeout - ScopecontextItem
 * @param {Object} TagSourceSelector select service
 * @param {Object} ConfirmStateChange utilitie
 * @param {Object} ValidationsService validation service
 * @param {Object} EndlessListService - Serviced used to retrieve the selected row in the list
 * @param {Object} EndlessListApiService - service used
 * @param {Object} OptionsService - Serviced used to give funcionality to context menu
 * @param {Object} Auth service used to retrieve the user info
 * @param {Object} UtilesService - service used
 **/
function MainPageController() {
  this = vm;
    console.log('hola');
};

angular.module('practica1SsiiApp').component('app.main', {
  templateUrl: './main_page.html',
  controller: MainPageController
}).
  controller('mainCtrl', MainPageController);
