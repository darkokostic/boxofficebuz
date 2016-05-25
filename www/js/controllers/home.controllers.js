/* global app */
'use strict';
app
.controller('homeCtrl',[
  '$scope',
  '$log',
  '$rootScope',
  'dataservice',
  'appConfig',
  '$ionicSlideBoxDelegate',
  function(
    $scope,
    $log,
    $rootScope,
    dataservice,
    appConfig,
    $ionicSlideBoxDelegate
    ) {
   
    // top slider
    function featureNews(dorefresh) {
      dataservice.getFeaturedNews().then(function (response) {

        $scope.featureNews = response.data;
        $scope.isLoaded = true;
        if (dorefresh) {
          $scope.$broadcast('scroll.refreshComplete');
          $ionicSlideBoxDelegate.update();
        }
      });
    }
   featureNews();

    $scope.isLoaded = false;
    $scope.newslist = [];
    // hide loader if data present
    $scope.$on('$ionicView.enter',function(){
      if ($scope.newslist.length>1) { $rootScope.$broadcast('hideloader');}
    });
    

    // image path base
    $scope.imageURL = appConfig.imgURL+'images/news/';

    $rootScope.$on('pullToData', function(){
      // latest post
      dataservice.getLatestNews().then(function(response){
        //$scope.nextPageURL = response.data.next_page_url;
        $scope.$broadcast('scroll.refreshComplete');
        console.log(response.data);
        $scope.newslist = response.data;
        $scope.loadMore = true;
      });

    });

    // infiniteLoad
    $scope.loadMore = true;
    $scope.infinteLoad = function () {
      if (!$scope.nextPageURL) {
        $scope.nextPageURL = false;
      }else {
        $scope.loadMore = false;
      }
      dataservice.getLatestNews($scope.nextPageURL).then(function(response){
        //$scope.nextPageURL = response.data.next_page_url;
        Array.prototype.push.apply($scope.newslist, response.data);
       
        $rootScope.$broadcast('hideloader');
      }).finally(function(){
        $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

  }]);
