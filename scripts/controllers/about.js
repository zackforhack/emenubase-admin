'use strict';

angular.module('appApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    var about = new Firebase('https//gforgelato.firebaseio.com/About');
  	$scope.about = $firebase(about);
    
  	$scope.updateProfile = function(about){
        
        var newAbout = {
                'Name': $scope.Name,
                'Address': $scope.Address,
                'Telephone': $scope.Telephone
            };
        $scope.about.$add(angular.fromJson(angular.toJson(newAbout))).then(function(ref) {

            });


  	};
  });
