function SearchService($http, $q) {
  service = {};
  service.getSearchGames = function(nameGame){
    var deferred = $q.defer(),
        games = null;
    return $http.get('../mocks/mock_games.json').then(function(resp) {
        games = deferred.resolve(resp);
        return deferred.promise;
    });
  }
  return service;
};

angular.module('practica1SsiiApp').service('SearchService', SearchService);
