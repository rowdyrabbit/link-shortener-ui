'use strict';

/**
 * @ngdoc function
 * @name linkShortenerUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the linkShortenerUiApp
 */
angular.module('linkShortenerUiApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.shortenUrl = function() {
        var url = $scope.url
        console.log("Got the URL: " + url)

        $http({
            method  : 'POST',
            url     : 'http://localhost:9000/shorten',
            data    : JSON.stringify({"url" : url})
        })
        .success(function(data) {
            console.log(data);

            $scope.shortenedUrl = data.shortenedUrl;
        });

    }


  });
