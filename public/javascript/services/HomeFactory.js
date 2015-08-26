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
  o.getDogs = function() {
    $http.get(firebase + '.json').success(function(res) {
      for (var prop in res) {
        res[prop]._id = prop;
        res[prop].editing = false;
        o.dogArr.push(res[prop]);
      }
    });
  }
  o.guiToDelete = function(gui) {
    $http.delete(firebase + gui + "/.json").success(function(res) {
      o.dogArr.length = 0;
      o.getDogs();
    })
  };
  o.dogToUpdate =  function (dog) {
    $http.put(firebase + dog._id + "/.json", dog).success(function (res) {
      o.dogArr.length = 0;
      o.getDogs();
    })
  }
  o.getDogs();
  return o;
}]);
