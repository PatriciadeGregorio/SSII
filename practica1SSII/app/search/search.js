'use strict';

function SearchCtrl($scope, $stateParams, $state) {
    var vm = this;
    this.$onInit = function () {

    };
    vm.items = $stateParams.gameSearch.gamesList;

    vm.getInfo = function(item) {
      $state.go('info', {game: item});
      // $state.go('info');
    };
}

angular.module('practica1SsiiApp').component('search', {
  templateUrl: 'search/search.html',
  controller: SearchCtrl,
  controllerAs: 'vm'
});
