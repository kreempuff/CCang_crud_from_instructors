var app = angular.module('app', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("Home", {
      url: "/",
      templateUrl: "javascript/templates/home.html",
      controller: "HomeController",
      controllerAs: "vm"
    })
    .state("Profile", {
      url: "/profile",
      templateUrl: "javascript/templates/profile.html",
      controller: "ProfileController",
      controllerAs: "vm"
    })
    .state('CreateDog', {
      url: '/Dog/Create',
      templateUrl: 'javascript/templates/createDog.html',
      controller: 'CreateDogController',
      controllerAs: 'vm'
    })
})
