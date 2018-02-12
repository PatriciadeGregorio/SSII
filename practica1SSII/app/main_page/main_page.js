'use strict';

/**
 * @ngdoc component
 * @name TagComponent
 * @param {Object}$state Angular core service
 * @param {Object}$scope Angular core service
 * @param {Object} $timeout - ScopecontextItem
 * @param {Object} TagSourceSelector select service
 * @param {Object} ConfirmStateChange utilitie
 * @param {Object} ValidationsService validation service
 * @param {Object} EndlessListService - Serviced used to retrieve the selected row in the list
 * @param {Object} EndlessListApiService - service used
 * @param {Object} OptionsService - Serviced used to give funcionality to context menu
 * @param {Object} Auth service used to retrieve the user info
 * @param {Object} UtilesService - service used
 **/

function MainPageCtrl() {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:false
      });
    });

};

angular.module('practica1SsiiApp').component('home', {
  templateUrl: 'main_page/main_page.html',
  controller: MainPageCtrl
});
