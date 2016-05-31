/* global app */
'use strict';
app
.controller('tvTrailerCtrl',[
  '$scope', 
  '$stateParams', 
  '$ionicLoading',
  '$filter',
  '$ionicPlatform',
  '$cordovaSocialSharing',
  '$ionicScrollDelegate',
  '$rootScope',
  '$sce',
  'bookmarkService', 
  'dataservice', 
  'appConfig', 
  function(
  $scope, 
  $stateParams, 
  $ionicLoading,
  $filter,
  $ionicPlatform,
  $cordovaSocialSharing,
  $ionicScrollDelegate,
  $rootScope,
  $sce,
  bookmarkService, 
  dataservice, 
  appConfig
  ) {

  $scope.$on('$ionicView.enter',function(){
    if ($scope.data) { $rootScope.$broadcast('hideloader');}
  });

  $scope.sharePost = function(){  
    $scope.showShare = !$scope.showShare;
  };

  $scope.hideshare = function() {
    if($scope.showShare === true) {
      $scope.showShare = false;
    } 
  };
  dataservice.getTvTrailerByID($stateParams.id).then(function(d){
    console.log(d.data);
    $scope.data = d.data;
    var iframe = [];
    for(var i = 0; i < d.data.length; i++) {
      iframe.push($sce.trustAsHtml(d.data[i].embed_code));
    }
    $scope.trustedContent = iframe;
    console.log($scope.trustedContent);
    $scope.data.date = Date.parse($scope.data.date);
    $rootScope.$broadcast('hideloader');
  });

  $scope.showad = function () {
    var currentTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollPosition().top;
    var maxScrollableDistanceFromTop = $ionicScrollDelegate.$getByHandle('scroller').getScrollView().__maxScrollTop;
    if (currentTop >= maxScrollableDistanceFromTop) {
      if(window.AdMob) {AdMob.showInterstitial();}
    }
  };
  
  $scope.addToBookmark = function(data){
    $ionicLoading.show({ template: 'Bookmark Saved!', noBackdrop: true, duration: 1000 });
    bookmarkService.bookmark(data);
  };

  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();

  $ionicPlatform.ready(function() { 
    if (isIOS) {
      $scope.appUrl = appConfig.appstoreAppId;
    }
    if (isAndroid) {
      $scope.appUrl = appConfig.playstoreAppUrl;
    }
  });

  $scope.share = function(service) {  
    $scope.showShare = true;
    var sharer = '';
    switch (service) {
      case 'fb':
      sharer = 'https://www.facebook.com/sharer/sharer.php?u=' + $scope.appUrl;
      break;
      case 'tw':
      sharer = 'https://twitter.com/home?status=' + $scope.appUrl;
      break;
      case 'gp':
      sharer = 'https://plus.google.com/share?url=' + $scope.appUrl;
      break;
      case 'pt':
      sharer = 'https://pinterest.com/pin/create/button/?url=' + $scope.appUrl + '&media=' + appConfig.appLogoUrl + '&description=' + appConfig.shareMess;
      break;
    }

    window.open(encodeURI(sharer), '_system');
  };
  $scope.shareViaWhatsApp = function() {
    $ionicLoading.show({duration:2000});
    $cordovaSocialSharing.shareViaWhatsApp(appConfig.shareMess, null, $scope.appUrl);
  };
  $scope.shareViaAll = function() {
   $ionicLoading.show({duration:2000});
   $cordovaSocialSharing.share(appConfig.shareMess, $scope.appUrl);
 };
}]);