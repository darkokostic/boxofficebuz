/* global app */
'use strict';
app
.controller('searchCtrl',[
  '$scope',
  '$state',
  '$rootScope',
  'appConfig',
  'dataservice',
  function(
    $scope,
    $state,
    $rootScope,
    appConfig,
    dataservice
    ){
    $scope.$on('$ionicView.enter',function(){
       $rootScope.$broadcast('hideloader');
    });
    $scope.searchWord = {
      search : ''
    };
    $scope.searchSubmit = function(form) {
      if(form.$valid) {
        var data = {
          search: $scope.searchWord.search
        };
        $rootScope.$broadcast('showloader');
        dataservice.getSearch(data)
        .then(function(d){
          $scope.searchResults = d.data;
          $rootScope.$broadcast('hideloader');
        });
      }
      else {
        console.log('Oops! Looks like something went wrong.');
      }
    };
    $scope.imageURL = appConfig.imgURL+'images/news/';
  }]);
