/* global app */
'use strict';
app
.controller('moviesTrailersCtrl',[
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
    dataservice.getMoviesTrailers().then(function(d){
      console.log(d.data);
      $scope.data = d.data;
      $rootScope.$broadcast('hideloader');
      if ($scope.data) { $rootScope.$broadcast('hideloader');}     
    });    
  });

}]);