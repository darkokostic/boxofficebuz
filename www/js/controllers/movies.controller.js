/* global app */
'use strict';
app
.controller('moviesCtrl',[
  '$scope', 
  '$stateParams', 
  '$rootScope',
  'dataservice', 
  'appConfig',
  function(
	$scope, 
	$stateParams, 
  $rootScope,
	dataservice,  
	appConfig
) {
  $scope.$on('$ionicView.enter',function(){
    dataservice.getLatestMovies().then(function(d){
      console.log(d.data);
      $scope.data = d.data;
      $rootScope.$broadcast('hideloader');
      if ($scope.data) { $rootScope.$broadcast('hideloader');}     
    });
  });

}]);