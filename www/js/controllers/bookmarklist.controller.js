/* global app */
'use strict';
app
.controller('bookmarkListCtrl', [
	'$scope',
	'bookmarkService', 
	'appConfig',
	'$ionicLoading',
	function(
		$scope,
		bookmarkService, 
		appConfig,
		$ionicLoading
		){

		$ionicLoading.show({
			template: 'Loading...'
		});

		$scope.$on('$ionicView.enter',function(){
			$scope.bookmarkItems =  bookmarkService.bookmark();
			$ionicLoading.hide();
		});
		$scope.imageURL = appConfig.imgURL+'images/news/';

		// remove bookmark 
		$scope.removeBookmark = function(id) {
				// console.log(id);
			 $scope.bookmarkItems =  bookmarkService.bookmark(id);
		};


	}]);