'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');

    about.on('value', function(dataSnapshot) {
        $scope.about = dataSnapshot.val();
      });

    
  	$scope.updateProfile = function(key,profile){
        
       $scope.about.$save(key);


  	};
  });
