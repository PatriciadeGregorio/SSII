'use strict';
function HomeService($http, $q) {
  var service = {};
  service.getHomeGames = function(){
    var deferred = $q.defer(),
        games = null;
    return $http.get('../mocks/mock_games.json').then(function(resp) {
        games = deferred.resolve(resp);
        return deferred.promise;
    });
  };
  return service;
}

angular.module('practica1SsiiApp').service('HomeService', HomeService);
