'use strict';

function InfoCtrl($scope, $stateParams, $state, $sce, $window, ModalService) {
    var vm = this;
    this.$onInit = function () {

    };
    vm.item = $stateParams.game;

    vm.openModal = function () {
      ModalService.open().result;
    };

    vm.guia = function () {
      ModalService.guia(vm.item.videoURL).result.then (function(resp) {
        // console.log(resp);
      });
    };

    vm.solicitarDemo = function () {
      ModalService.solicitarDemo(vm.item.canWatch,vm.item.timeLeft,vm.item.videoURL).result.then (function(resp) {
        console.log(resp);
      }, function error(error) {
        // console.log('error');
      });
    };

    // vm.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    // vm.data = [300, 500, 100];
};

angular.module('practica1SsiiApp').component('info', {
  templateUrl: 'info/info.html',
  controller: InfoCtrl,
  controllerAs: 'vm'
});
