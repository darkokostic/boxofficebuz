/* global app */
'use strict';
app
.controller('newslistCtrl',[
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
    dataservice.getNewsListByID($stateParams.id).then(function(d){
      $scope.newslist = d.data.data;
      $rootScope.$broadcast('hideloader');
      if ($scope.data) { $rootScope.$broadcast('hideloader');}     
    });    
  });

  $scope.imageURL = appConfig.imgURL+'images/news/';
}]);