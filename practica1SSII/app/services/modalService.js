'use strict';
function ModalService($uibModal) {
  var service = {};
  service.items = ['item1', 'item2', 'item3'];

  service.open = function () {
    var modalInstance = null;
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

  service.infoUser = function (canWatch, timeLeft, videoURL) {
    var modalInstance = null;
    return modalInstance = $uibModal.open({
      templateUrl: '../services/modalInfoTemplate.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'vm',
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
  return service;
}
'use strict';
function ModalInstanceCtrl ($scope, $uibModalInstance, locals) {
  var vm = this;

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
