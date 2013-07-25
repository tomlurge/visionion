Visionion.directive('graphView', ['$http', function factory($http) {
  return {
    // priority: 0,
    // template: '<div></div>',
    // templateUrl: 'directive.html',
    // replace: false,
    // transclude: false,
    // restrict: 'A',
    // scope: false,
    // controller: ["$scope", "$element", "$attrs", "$transclude", "otherInjectables",
    //   function($scope, $element, $attrs, $transclude, otherInjectables) { ... }],
    // compile: function compile(tElement, tAttrs, transclude) {
    //   return {
    //     pre: function preLink(scope, iElement, iAttrs, controller) { ... },
    //     post: function postLink(scope, iElement, iAttrs, controller) { ... }
    //   }
    // },
    
    link: function postLink(scope, element, attrs) {
      scope.foobar = "aaaa";
    }
  };
}]);

