'use strict';

function SearchCtrl($scope, $stateParams, $state, HomeService) {
    var vm = this;
    this.$onInit = function () {
      HomeService.getHomeGames().then(function(resp) {
        vm.items = resp.data.gamesList;
      });
    };
    // vm.items = $stateParams.gameSearch.gamesList;

    vm.getInfo = function(item) {
      $state.go('info', {game: item});
      // $state.go('info');
    }
};

angular.module('practica1SsiiApp').component('search', {
  templateUrl: 'search/search.html',
  controller: SearchCtrl,
  controllerAs: 'vm'
});
