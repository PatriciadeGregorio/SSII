function HomeService($http) {
  service = {};
  service.getHomeGames = function(){
    return $http.get('').then(function(resp) {
      return resp;
    });
  }
  return service;
};

angular.module('practica1SsiiApp').service('HomeService', HomeService);
