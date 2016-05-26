'use strict';
angular.module('underscore', [])
.factory('_', function() {
  return window._;
});
angular.module('jQuery', [])
.factory('j', function() {
  return window.jQuery;
});
var app;
app = angular.module('newsapp', [
  'ionic',
  'ngCordova',
  'angulartics',
  'angulartics.google.analytics.cordova',
  'underscore',
  'jQuery',
  'ionicLazyLoad'
  ])

.run([
  '$ionicPlatform',
  '$rootScope',
  '$ionicLoading',
  '$log',
  'appConfig',
  '$state','$ionicPopup',
  function(
    $ionicPlatform,
    $rootScope,
    $ionicLoading,
    $log,
    appConfig,
    $state,$ionicPopup
    ) {


    // Disable BACK button on home
    $ionicPlatform.registerBackButtonAction(function(event) {
      console.log('here');
      console.log($state.current.name);
      if($state.current.name == "app.home") { // your check here
        $ionicPopup.confirm({
          title: 'Exit?',
          template: 'Are you sure you want to exit?'
        }).then(function(res) {
          if (res) {
            ionic.Platform.exitApp();
          }
        })
      }
      else {
        navigator.app.backHistory();
      }
    }, 100);




    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
        if (appConfig.simmode) {
          $log.log(event, toState, toParams, fromState, fromParams);
        }
        $rootScope.$broadcast('showloader');
    });
    $rootScope.$on('showloader', function () {
      if (appConfig.simmode) {
        $log.info('show loader');
      }
      $ionicLoading.show({
        template: 'Loading...'
      });
    });
    $rootScope.$on('hideloader', function () {
      if (appConfig.simmode) {
        $log.info('hide loader');
      }
      $ionicLoading.hide();
    });

    var isIOS = ionic.Platform.isIOS();
    var isAndroid = ionic.Platform.isAndroid();
    var isWindowsPhone = ionic.Platform.isWindowsPhone();

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      // Analytics
      if(typeof analytics !== 'undefined') {
        window.analytics.startTrackerWithId(appConfig.uaId);
      } else {
        console.log('Google Analytics Unavailable');
      }
    });

  }
])

.config(function(
  $stateProvider,
  $urlRouterProvider,
  appConfig
  ) {
   // configuration for app rate
   document.addEventListener('deviceready', function () {

     var customLocale = {};
     customLocale.title = 'CnewsApp';
     customLocale.message = 'If you enjoy using CnewsApp, would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!';
     customLocale.cancelButtonLabel = 'No';
     customLocale.laterButtonLabel = 'Remind Me Later';
     customLocale.rateButtonLabel = 'Yes';
     AppRate.preferences.storeAppURL.ios = appConfig.appstoreAppId;
     AppRate.preferences.storeAppURL.android = 'market://details?id='+appConfig.playstoreAppId;
     AppRate.preferences.customLocale = customLocale;

   }, false);

   $stateProvider

   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

   .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

   .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

   .state('app.news', {
    url: '/news/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/news.html',
        controller: 'newsCtrl'
      }
    }
  })

   .state('app.movie', {
    url: '/movie/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/movie.html',
        controller: 'movieCtrl'
      }
    }
  })

   .state('app.tvSingle', {
    url: '/tvSingle/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/tvSingle.html',
        controller: 'tvSingleCtrl'
      }
    }
  })

   .state('app.game', {
    url: '/game/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/game.html',
        controller: 'gameCtrl'
      }
    }
  })

   .state('app.video', {
    url: '/video/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/video.html',
        controller: 'videoCtrl'
      }
    }
  })

   .state('app.movies', {
    url: '/movies',
    views: {
      'menuContent': {
        templateUrl: 'templates/movies.html',
        controller: 'moviesCtrl'
      }
    }
  })

   .state('app.tv', {
    url: '/tv',
    views: {
      'menuContent': {
        templateUrl: 'templates/tv.html',
        controller: 'tvCtrl'
      }
    }
  })

   .state('app.games', {
    url: '/games',
    views: {
      'menuContent': {
        templateUrl: 'templates/games.html',
        controller: 'gamesCtrl'
      }
    }
  })

   .state('app.videos', {
    url: '/videos',
    views: {
      'menuContent': {
        templateUrl: 'templates/videos.html',
        controller: 'videosCtrl'
      }
    }
  })

   .state('app.newslist', {
    url: '/newslist/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/news-list.html',
        controller: 'newslistCtrl'
      }
    }
  })

   .state('app.bookmarklist', {
    url: '/bookmarklist',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookmark-list.html',
        controller: 'bookmarkListCtrl'
      }
    }
  })
  .state('app.walkthrough', {
      url: '/walkthrough',
      views: {
        'menuContent': {
          templateUrl: 'templates/walkthrough.html',
          controller : 'walkthrough'
        }
      }
    })
    .state('app.admob', {
    url: '/admob',
    views: {
      'menuContent': {
        templateUrl: 'templates/admob.html',
        controller : 'AdCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  var appFirstRun = localStorage.getItem('appFirstRun');

  if(appFirstRun === 'true'){
    $urlRouterProvider.otherwise('/app/home');
  }else{
    $urlRouterProvider.otherwise('/app/walkthrough');
  }

});
