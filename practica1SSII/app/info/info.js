'use strict';

function InfoCtrl($scope, $stateParams, $state) {
    var vm = this;
    this.$onInit = function () {
      vm.item = $stateParams.game;
      console.log(vm.item);
    };
};

angular.module('practica1SsiiApp').component('info', {
  templateUrl: 'info/info.html',
  controller: InfoCtrl,
  controllerAs: 'vm'
});
