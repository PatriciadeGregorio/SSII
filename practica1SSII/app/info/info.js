'use strict';

function InfoCtrl($scope, $stateParams, $state, $sce, ModalService) {
    var vm = this;
    this.$onInit = function () {

    };

    vm.item = $stateParams.game;
    vm.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }
    vm.openModal = function () {
      ModalService.open().resolve.then(function(resp) {

      });
    }
};

angular.module('practica1SsiiApp').component('info', {
  templateUrl: 'info/info.html',
  controller: InfoCtrl,
  controllerAs: 'vm'
});
