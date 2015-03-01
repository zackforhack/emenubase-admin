'use strict';

angular.module('appApp')
  .controller('ReservationCtrl', function ($scope, $firebase) {
    var reservation = new Firebase('https//gforgelato.firebaseio.com/Reservations');
  	$scope.reservation = $firebase(reservation);
  	$scope.deleteReservation = function(key, order){
  		$scope.reservation.$remove(key);
  	};
  });
