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

function SearchCtrl() {
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false
      });
    });

};

angular.module('practica1SsiiApp').component('search', {
  templateUrl: 'search/search.html',
  controller: SearchCtrl
});
