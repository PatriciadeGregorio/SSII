
function ModalService($uibModal) {
  service = {};
  service.items = ['item1', 'item2', 'item3'];

  service.open = function () {

    return modalInstance = $uibModal.open({
      templateUrl: '../services/modalTemplate.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: 'vm',
      resolve: {
        items: function () {
          return service.items;
        }
      }
    });
  };
  return service;
}

function ModalInstanceCtrl ($scope, $uibModalInstance) {
  var vm = this;
  vm.items = ['item1', 'item2', 'item3'];
  vm.selected = {
    item: vm.items[0]
  };

  vm.ok = function () {
    $uibModalInstance.close(vm.selected.item);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}
  angular.module('practica1SsiiApp').service('ModalService', ModalService);
  angular.module('practica1SsiiApp').controller('ModalInstanceCtrl', ModalInstanceCtrl);
