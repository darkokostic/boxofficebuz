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
      dataservice.getMoviesImages().then(function(d){
        console.log(d.data[0]);
        $scope.dataImg = d.data[0];     
      });
      $rootScope.$broadcast('hideloader');
      if ($scope.data) { $rootScope.$broadcast('hideloader');}     
    });
  });

}]);