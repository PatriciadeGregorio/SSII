'use strict';

function MainPageCtrl(HomeService, $scope) {
    var vm = this;
    this.$onInit = function () {
        HomeService.getHomeGames().then(function(resp) {
          vm.gameList = resp.data.gamesList;
          console.log(vm.gameList);
        });
    };
};

angular.module('practica1SsiiApp').component('home', {
  templateUrl: 'main_page/main_page.html',
  controller: MainPageCtrl
});


    // function generateCarousel() {
    //   console.log($scope.gameList);
    //   $scope.items = $scope.gameList;

    //       $scope.properties = {
    //           items: 2,
    //           onChange: function () {
    //               console.dir(arguments);
    //           }
    //       };

    //       $scope.ready = function ($api) {
    //           owlAPi = $api;
    //       };

    //       $timeout(function () {
    //           console.dir(owlAPi);
    //           owlAPi.trigger('next.owl.carousel',[2000]);
    //       }, 2000)
    //   }
