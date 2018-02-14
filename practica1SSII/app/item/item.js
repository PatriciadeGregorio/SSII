'use strict';

function ItemCtrl(HomeService, $scope) {
    var vm = this;
    this.$onInit = function () {
      alert('estoy en items');
    };
};

angular.module('practica1SsiiApp').component('item', {
  templateUrl: 'item/item.html',
  controller: ItemCtrl,
  controllerAs: 'vm'
});
