angular.module("designpathApp")

.directive('graph', [ function () {

  return {
    restrict: 'E',
    templateUrl: '/html/graph.html',

    scope: {
      circles: '=',
    },

    link: function(scope, iElm, iAttrs, controller) {

      var distanceBetweenPoints = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt(dx * dx + dy * dy);
      };

      var pointInCircle = function (circle, x, y) {
        var cx = circle.left + circle.diameter / 2;
        var cy = circle.top + circle.diameter / 2;
        var d = distanceBetweenPoints(cx, cy, x, y);
        return (d < circle.diameter / 2);
      };

      scope.mouseMove = function (event) {
        console.log(event.offsetX + ", " + event.offsetY);
        var x = event.offsetX;
        var y = event.offsetY;
        angular.forEach(scope.circles, function (circle) {
          circle.hover = pointInCircle(circle, x, y);
        });
      };
    }
  };

}])

.directive('vennCircle', [ function () {

  return {
    restrict: 'E',
    templateUrl: '/html/venn-circle.html',

    scope: {
      circle: '='
    },

    link: function(scope, iElm, iAttrs, controller) {
      console.log('sup');

      // scope.mouseEnter = function (event) {
      //   console.log(scope.$id +  ' enter');
      //   // console.log(event);
      //   scope.hover = true;
      // };

      // scope.mouseLeave = function (event) {
      //   console.log(scope.$id +  ' leave');
      //   // scope.hover = false;
      // };

    }
  };
}]);