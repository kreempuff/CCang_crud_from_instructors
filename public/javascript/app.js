var app = angular.module('app', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("Home", {
      url: "/",
      templateUrl: "javascript/views/home.html",
      controller: "HomeController",
      controllerAs: "vm"
    })
    .state("Profile", {
      url: "/profile",
      templateUrl: "javascript/views/profile.html",
      controller: "ProfileController",
      controllerAs: "vm"
    })
    .state('CreateDog', {
      url: '/Dog/Create',
      templateUrl: 'javascript/views/createDog.html',
      controller: 'CreateDogController',
      controllerAs: 'vm'
    })
})
