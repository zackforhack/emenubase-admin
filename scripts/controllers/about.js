'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');

    about.on('value', function(dataSnapshot) {
        $scope.about = dataSnapshot.val();
      });

    
  	$scope.updateProfile = function(){
        
        var newAbout = {
                'Name': $scope.Name,
                'Address': $scope.Address,
                'Telephone': $scope.Telephone,
                'Hours': $scope.Hours
            };
        $scope.about.$add(angular.fromJson(angular.toJson(newAbout))).then(function(ref) {

            });


  	};
  });
