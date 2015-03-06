'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope, $firebase, $http, $location) {
    var menu = new Firebase('https://gforgelato.firebaseio.com/MenuItems');
    $scope.menuItems = $firebase(menu);


    var categories = new Firebase('https://gforgelato.firebaseio.com/Category');
    categories.on('value', function(dataSnapshot) {
        $scope.categories = dataSnapshot.val();
      });

    $scope.numofCateg = (function() {
            var num = 0;
            for(var item in $scope.categories) {
                num++;
            }
            return num;
        })();

    $scope.numofItem = (function() {
            var num = 0;
            for(var item in $scope.menuItems) {
                num++;
            }
            return num;
        })();    


    console.log($scope.numofCateg);


    $scope.resetMenuItem = function(){
      $scope.menuItem = {
        'title': undefined,
        'description': undefined,
        'category': undefined,
        'picture': undefined,
        'price': undefined
      };
    };
    $scope.resetMenuItem();

    $scope.addItem = function(){
        $scope.menuItems.$add($scope.menuItem);
        var inCategoryList = false;
        for (var index in $scope.categories) {
          if ($scope.menuItem.category === $scope.categories[index].name) {
            inCategoryList = true;
          }
        }
        if (!inCategoryList) {
          categories.push({'name': $scope.menuItem.category});
        }
        $scope.resetMenuItem();
      };

    $scope.deleteItem = function(key){
        $scope.menuItems.$remove(key);
      };

    $scope.saveItem = function(item){
        $scope.defaultItem = item;
      }; 

    $scope.saveItem2 = function(item){
        $scope.defaultItem = item;
        $scope.defaultItem.image = item.image2;
      };     



    $scope.addCategory = function(){
        categories.push({'name': $scope.categoryName,
                         'image': $scope.image
                          
                         });
        delete $scope.categoryName;
        delete $scope.categoryDesciption;
      };

    $scope.deleteCateg = function(key){
        categories.child(key).remove();
      };

      $scope.canUploadCateg = function(){
            if (!$scope.categoryName || !($scope.image.filesize <= 100000) || !($scope.numofCateg < 4))
                return true;
        };

        $scope.canUploadItem = function(){
            if (!$scope.menuItem.title || !$scope.menuItem.description || !$scope.menuItem.category || !$scope.menuItem.price || !($scope.menuItem.image.filesize <= 100000) || !($scope.numofItem < 20) || !($scope.menuItem.image2.filesize <= 100000))
                return true;
        };


  });

