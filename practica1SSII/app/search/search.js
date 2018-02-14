'use strict';

function SearchCtrl($scope, $stateParams, $state) {
    var vm = this;
    this.$onInit = function () {

    };
    var items = $stateParams.gameSearch.gamesList;
    console.log(items);

    vm.getInfo = function() {
      $state.go('info');
    }
};

angular.module('practica1SsiiApp').component('search', {
  templateUrl: 'search/search.html',
  controller: SearchCtrl,
  controllerAs: 'vm'
});
