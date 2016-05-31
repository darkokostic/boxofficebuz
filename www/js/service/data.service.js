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

		// latest news
		function _getFeaturedNews () {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint + '/v1/news/latest';
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getLatestNews (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/news/latest';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		//reviews
		function _getLatestReviews(endpoint) {
			var dfd = $q.defer();
			if(!endpoint) {
				endpoint = appConfig.apiEndPoint + '/v1/reviews/latest';
			}
			var url = endpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getReviewByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/reviews/'+id;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

     	// movies
		function _getLatestMovies (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/movie/latest';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getMovieByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/movie/'+id;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		function _getMoviesImages () {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint + '/v1/movie/178958/images';;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		//TV

		function _getLatestTv (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/tv/latest';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		function _getTvByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/tv/'+id;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		// Games

		function _getLatestGames (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/game/latest';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		// VIDEOS

		//movies trailers
		function _getMoviesTrailers (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/videos/movie';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		//movie trailer
		function _getMovieTrailerByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/movie/'+id+'/videos';
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		// tv trailers
		function _getTvTrailers (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/videos/tv';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		//tv trailer
		function _getTvTrailerByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/tv/'+id+'/videos';
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		// games trailers
		function _getGamesTrailers (enpoint) {
			var dfd = $q.defer();
			if (!enpoint) {
				enpoint = appConfig.apiEndPoint + '/v1/videos/game';
			}
			var url = enpoint;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;
		}

		//game trailer
		function _getGameTrailerByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/game/'+id+'/videos';
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
			.success(function(data){
				dfd.resolve(data);
			});
			return dfd.promise;   
		}

		function _getDataByID (id) {
			var dfd = $q.defer();
			var url = appConfig.apiEndPoint+'/v1/news/'+id;
			$http.get(url, {
				headers: {'X-Mashape-Key': '072Cp9LkL7mshNbqvpKhGC3cTjOBp1ZVwTJjsnFNr2n5JansQO'}
			})
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
			getLatestReviews: _getLatestReviews,
			getLatestMovies: _getLatestMovies,
			getMoviesImages: _getMoviesImages,
			getMoviesTrailers: _getMoviesTrailers,
			getTvTrailers: _getTvTrailers,
			getGamesTrailers: _getGamesTrailers,
			getMovieByID: _getMovieByID,
			getMovieTrailerByID: _getMovieTrailerByID,
			getTvTrailerByID: _getMovieTrailerByID,
			getGameTrailerByID: _getMovieTrailerByID,
			getReviewByID: _getReviewByID,
			getNewsListByID: _getNewsListByID,
			getSearch: _getSearch,
			getLatestTv: _getLatestTv,
			getLatestGames: _getLatestGames,
			getTvByID: _getTvByID,
			like : _like,
			isLiked: _isLiked,
			userLikes : _userLikes
		};

	}]);