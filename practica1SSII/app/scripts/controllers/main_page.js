'use strict';

function MainPageCtrl(HomeService) {
    var vm = this;
    this.$onInit = function () {
        HomeService.getHomeGames().then(function(resp) {
          vm.gameList = resp.data.gamesList;
        });
    };
}

angular.module('practica1SsiiApp').component('home', {
  templateUrl: 'main_page/main_page.html',
  controller: MainPageCtrl,
  controllerAs: 'vm'
});


$(document).ready(function(){
  var cur = $(".carousel-next");
  cur.remove();
});
