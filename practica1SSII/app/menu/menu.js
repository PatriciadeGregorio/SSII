'use strict';

function MenuCtrl(HomeService, $scope) {
    var vm = this;
    this.$onInit = function () {
    };
};

angular.module('practica1SsiiApp').component('menu', {
  template: '<menu></menu>',
  templateUrl: 'menu/menu.html',
  controller: MenuCtrl,
  controllerAs: 'vm'
});
