'use strict';
app
.constant('appConfig', {
  simmode: true,
  apiEndPoint: 'http://ec2-52-21-107-249.compute-1.amazonaws.com/cnews/public/api/v1/news',
  imgURL: 'http://ec2-52-21-107-249.compute-1.amazonaws.com/cnews/public/',
  baseURL: 'http://ec2-52-21-107-249.compute-1.amazonaws.com/cnews/public/api/v1',
  dataServiceError:'Some error message',
  uaId : 'UA-71427199-1',
  playstoreAppId: 'com.saavn.android',
  appstoreAppId: 'id441813332',
  shareMess : 'Hi I found news app. Install to get latest news.',
  playstoreAppUrl : 'https://play.google.com/store/apps/details?id=com.saavn.android',
  appstoreAppUrl : 'https://itunes.apple.com/in/app/saavn-bollywood-english-hindi/id441813332?mt=8',
  appLogoUrl : 'http://web2developer.in.md-in-26.webhostbox.net/newsapp/splashscreen.jpg',
  admob: {
    android: {
      banner: 'ca-app-pub-1605099908936240/4396968417',
      interstitial: 'ca-app-pub-1605099908936240/5873701618'
    },
    ios: {
      banner: 'ca-app-pub-1605099908936240/8827168010',
      interstitial: 'ca-app-pub-1605099908936240/1303901216'
    },
    browser: {
      banner: 'ca-app-pub-1605099908936240/4257367612',
      interstitial: 'ca-app-pub-1605099908936240/5734100814'
    }
  }
});
