//angular.module('app');
//app
app.factory('HomeFactory', ['$http', function($http) {
  var o = {};
  var firebase = "https://oceancreature.firebaseio.com/";
  o.dogArr = [];

  o.addDog = function(dog) {
    //$http.post('url', {obj}).success(function(res as javascript object){});
    $http.post(firebase + '.json', dog).success(function(res) {
      dog._id = res.name;
      o.dogArr.push(dog);
    });
  }

  //get all dogs from the database on page load
  $http.get(firebase + '.json').success(function(res) {
    for(var prop in res) {
      res[prop]._id = prop;
      o.dogArr.push(res[prop]);
    }
  });

  return o;
}]);
