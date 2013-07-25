Visionion.controller('HomeCtrl', ['$scope', '$http', 'exampleService',
    function($scope, $http, exampleService) {
      $scope.test = "Hello world!";
      var myService = exampleService();
      $scope.bar = myService.bar;
}]);
