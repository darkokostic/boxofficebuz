/* global app */
'use strict';
app
.controller('AppCtrl',[
  '$scope', 
  '$ionicModal', 
  '$rootScope',
  '$timeout', 
  'dataservice',
  '$cordovaAppRate',
   function(
  $scope, 
  $ionicModal, 
  $rootScope,
  $timeout, 
  dataservice,
  $cordovaAppRate
  ) {
  $scope.showSubMenu = false;  

  $scope.pullToData = function() {
    $rootScope.$broadcast('pullToData');
  }; 
  
  dataservice.getCategoryList().then(function (d) {
    $scope.categories = d.data;
  });

  $scope.promtRate = function(){
    $cordovaAppRate.promptForRating(true);
  };

}]);