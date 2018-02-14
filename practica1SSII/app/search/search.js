'use strict';

function SearchCtrl($scope, $stateParams) {
    var vm = this;
    this.$onInit = function () {

    };
    var items = $stateParams.gameSearch.gamesList;
    console.log(items);
};

angular.module('practica1SsiiApp').component('search', {
  templateUrl: 'search/search.html',
  controller: SearchCtrl,
  controllerAs: 'vm'
});
