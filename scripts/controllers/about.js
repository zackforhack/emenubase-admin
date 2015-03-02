'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');
  	$scope.about = $firebase(about);
    
  	$scope.updateProfile = function(about){
        
        $scope.about.$set(about);

  	};
  });
