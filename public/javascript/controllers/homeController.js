app.controller("HomeController", ['HomeFactory',function(HomeFactory){
  var vm = this;
  vm.page = "Home";
  vm.dogs = HomeFactory.dogArr;
}]);
