'use strict';

function MenuCtrl($scope, $state, SearchService) {
    var vm = this;
    this.$onInit = function () {

    };
    vm.search = function () {
      SearchService.getSearchGames(vm.searchName).then(function(resp) {
        $state.go('search', {gameSearch: resp.data});
      })
    }

    vm.goHome = function () {
      $state.go('home');
    }
};

angular.module('practica1SsiiApp').component('menu', {
  templateUrl: 'menu/menu.html',
  controller: MenuCtrl,
  controllerAs: 'vm'
});
