/* global app */
'use strict';
app.
service('dataservice', [
	'$http', 
	'$q', 
	'_',
	'appConfig', 
	function(
		$http, 
		$q,
		_,
		appConfig
		){
		function _getAlldata () {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint;
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getFeaturedNews () {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint + '/feature';
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getLatestNews (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/latest';
			}
			var url = enpoint;
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getCategoryList () {
			var dfd = $q.defer();
			var url = appConfig.baseURL + '/categories';
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getDataByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/'+id;
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		function _getNewsListByID (id) {
			var dfd = $q.defer();
			var url = appConfig.baseURL+'/categories/'+id;
			$http.get(url)
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		function _getSearch (query) { 
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/search';
			$http.post(url, query).success(function(response) {
				dfd.resolve(response);
			});
			return dfd.promise;
		}

		function _like(id) {
			var dfd = $q.defer();
			var type = 'dislike';
			if(_isLiked(id)){
			 type = 'like';
			}
			var url = appConfig.apiEndPoint+'/'+type+'/'+id;
			$http.get(url).success(function(response) {
				dfd.resolve(response);
			});
			return dfd.promise;
		}


		var cnewsLikes = (window.localStorage.cnewsLikes) ? JSON.parse(window.localStorage.cnewsLikes) : [];
		function _isLiked(id) {
			return (cnewsLikes.indexOf(id) !== -1);
		}
		function _userLikes(id) {
			if (!_isLiked(id)) { cnewsLikes.push(id); }
			else{
				 cnewsLikes.splice(cnewsLikes.indexOf(id), 1);
			}
			localStorage.cnewsLikes = JSON.stringify(cnewsLikes);
		}

		return {
			getAlldata : _getAlldata,
			getFeaturedNews : _getFeaturedNews,
			getDataByID: _getDataByID,
			getLatestNews: _getLatestNews,
			getCategoryList: _getCategoryList,
			getNewsListByID: _getNewsListByID,
			getSearch: _getSearch,
			like : _like,
			isLiked: _isLiked,
			userLikes : _userLikes
		};

	}]);