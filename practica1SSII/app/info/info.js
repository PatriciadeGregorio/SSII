'use strict';

function InfoCtrl($scope) {
    var vm = this;
    this.$onInit = function () {

    };
};

angular.module('practica1SsiiApp').component('info', {
  templateUrl: 'info/info.html',
  controller: InfoCtrl,
  controllerAs: 'vm'
});
