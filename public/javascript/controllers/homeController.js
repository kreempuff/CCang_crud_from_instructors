app.controller("HomeController", ['HomeFactory', "$state", function(HomeFactory, $state) {
  var vm = this;
  vm.page = "Home";
  vm.dogs = HomeFactory.dogArr;
  // vm.reloadRoute = function() {
  //   $state.reload();
  // }
  vm.deleteDog = function(gui) {
    HomeFactory.guiToDelete(gui);
    // vm.reloadRoute();
  };

  vm.startUpdateDog = function (dog) {
    dog.editing = true;
  }
  vm.cancelEditingDog = function (dog) {
    dog.editing = false;
  }
  vm.updateDog = function (dog) {
    HomeFactory.dogToUpdate(dog);

  }
}]);
