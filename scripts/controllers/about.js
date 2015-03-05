'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');

    about.on('value', function(dataSnapshot) {
        $scope.about = dataSnapshot.val();
      });

    
  	$scope.updateProfile = function(key,profile){
        

            var newAbout = {
                'Address': profile.Address,
                'Name': profile.Name,
                'Telephone': profile.Telephone,
                'Hours': profile.Hours
            };

        $scope.about.$add(angular.fromJson(angular.toJson(newAbout)));
  		$scope.about.$remove(key);
  


  	};
  });
