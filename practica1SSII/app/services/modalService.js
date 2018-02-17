
function ModalService($uibModal) {
  service = {};
  service.items = ['item1', 'item2', 'item3'];

  service.open = function () {
    return modalInstance = $uibModal.open({
      templateUrl: '../services/modalCompraTemplate.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'vm',
      resolve: {
        locals: function () {
          return service.items;
        }
      }
    });
  };

  service.guia = function (videoURL) {
    return modalInstance = $uibModal.open({
      templateUrl: '../services/modalInfoTemplate.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'vm',
      resolve: {
        locals: function () {
          return {
            videoURL: videoURL
          };
        }
      }
    });
  };

  service.solicitarDemo = function (canWatch, timeLeft, videoURL) {
    parseURL(videoURL);
    return modalInstance = $uibModal.open({
      templateUrl: '../services/modalDemoTemplate.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'vm',
      keyboard : false,
      resolve: {
        locals: function () {
          return {
            canWatch: canWatch,
            timeLeft: timeLeft,
            videoURL: videoURL
          };
        }
      }
    });
  };

  function parseURL(url) {
    console.log(url);
    console.log(url + '?autoplay=1&controls=0&disablekb=1&enablejsapi=1&end=3600');
    return url + '?autoplay=1&controls=0&disablekb=1&enablejsapi=1&end=3600';
  }
  return service;
}

function ModalInstanceCtrl ($scope, $uibModalInstance, locals) {

  var vm = this;
  this.$onInit = function () {

  }

  vm.locals = locals;
  vm.ok = function () {
    $uibModalInstance.close(null);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}
  angular.module('practica1SsiiApp').service('ModalService', ModalService);
  angular.module('practica1SsiiApp').controller('ModalInstanceCtrl', ModalInstanceCtrl);
