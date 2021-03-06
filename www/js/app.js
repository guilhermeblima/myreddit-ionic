(function() {
  var app = angular.module('myreddit', ['ionic', 'angularMoment']);

  app.controller('RedditCtrl', function($scope, $http){

    var vm = $scope;
    vm.stories = [];

    $http.get('https://www.reddit.com/r/Android/new/.json')
      .success(function(response){
          angular.forEach(response.data.children, function(child){
            vm.stories.push(child.data);
          });
      });
  });

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());
