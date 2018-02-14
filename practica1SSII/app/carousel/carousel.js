'use strict';

function CarouselCtrl() {
    var vm = this;
    this.$onInit = function () {
    };
    console.log(vm.images);
    vm.gameList = vm.images;
};

angular.module('practica1SsiiApp').component('carousel', {
  templateUrl: 'carousel/carousel.html',
  controller: CarouselCtrl,
  controllerAs: 'vm',
  template: '<carousel></carousel>',
  bindings: {
    images: '='
  }
});
