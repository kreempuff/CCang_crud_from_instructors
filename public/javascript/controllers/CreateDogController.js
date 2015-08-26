app.controller('CreateDogController', ['HomeFactory', '$state', function(HomeFactory, $state) {
  var vm = this;
  vm.dog = {};
  
  vm.createDog = function() {
    HomeFactory.addDog(vm.dog);
    vm.dog = {};
    $state.go('Home');
  }
}]);
