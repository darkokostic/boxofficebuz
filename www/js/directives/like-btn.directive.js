/* global app */
'use strict';
app.directive('likeBtn', ['dataservice', 
  function(dataservice){
    return {
      restrict: 'AE',    
      template : '<h4 class="likes" ng-click="toggleLike()" ng-class="{active:isLiked}"><i class="ion-heart"></i>{{likes}}</h4>',
      scope : {
        newsid: '=',
        likes: '='
      },
      link: function(scope) {
       scope.isLiked = dataservice.isLiked(scope.newsid);
       scope.toggleLike = function() {  
         dataservice.userLikes(scope.newsid);
         scope.isLiked = dataservice.isLiked(scope.newsid);        
         dataservice.like(scope.newsid).then(function(d){
          scope.likes = d.data;
         });
       };

     }
   };
 }
 ]);
