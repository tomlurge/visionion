'use strict';

var Visionion = angular.module('Visionion', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).

      otherwise({
        redirectTo: '/'
      })
}]);
