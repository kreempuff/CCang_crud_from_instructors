app.controller("ProfileController", ['HomeService', function(HomeService){
  var vm = this;
  vm.page = "Profile";
  vm.dog = HomeService.dog;
}]);
