'use strict';

function InfoCtrl($scope, $stateParams, $state, $sce, $window, ModalService) {
    var vm = this;
    this.$onInit = function () {

    };
    vm.item = $stateParams.game;

    vm.openModal = function () {
      ModalService.open().result;
    }

    vm.infoUserVideo = function () {
      ModalService.infoUser(vm.item.canWatch, vm.item.timeLeft, vm.item.videoURL).result.then (function(resp) {
        console.log(resp);
      })
    }

    vm.solicitarDemo = function () {

    }
};

angular.module('practica1SsiiApp').component('info', {
  templateUrl: 'info/info.html',
  controller: InfoCtrl,
  controllerAs: 'vm'
});
