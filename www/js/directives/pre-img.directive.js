/*
global app
 */
'use strict';
app
.directive('preImg', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      ratio:'@',
      helperClass: '@'
    },
    controller: function($scope) {
      $scope.loaded = false;

      this.hideSpinner = function(){
        // Think i have to use apply because this function is not called from this controller ($scope)
        $scope.$apply(function () {
          $scope.loaded = true;
        });
      };
    },
    templateUrl: 'templates/pre-img.html'
  };
});