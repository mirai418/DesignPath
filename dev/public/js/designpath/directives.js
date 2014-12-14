angular.module("designpathApp")

.directive('graph', [ function () {

  return {
    restrict: 'E',
    templateUrl: '/html/graph.html',

    scope: {
      circles: '=',
      dots: '=',
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

      var pointOnDot = function (dot, x, y) {
        var dx = Math.abs(dot.x - x);
        var dy = Math.abs(dot.y - y);

        return (dx <= 5 && dy <= 5);
      };

      scope.mouseMove = function (event) {
        // console.log(event.offsetX + ", " + event.offsetY);
        var x = event.offsetX;
        var y = event.offsetY;
        angular.forEach(scope.circles, function (circle) {
          circle.hover = pointInCircle(circle, x, y);
        });
        angular.forEach(scope.dots, function (dot) {
          dot.hover = pointOnDot(dot, x, y);
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

      scope.getKeyStyle = function () {
        if (scope.circle.keyPlace == "NE") {
          return { 'top': (scope.circle.top + scope.circle.diameter / 10) + 'px',
                   'left': (scope.circle.left + scope.circle.diameter - scope.circle.diameter / 10) + 'px'
                 };
        } else if (scope.circle.keyPlace == "SE") {
          return { 'top': (scope.circle.top + scope.circle.diameter - scope.circle.diameter / 10) + 'px',
                   'left': (scope.circle.left + scope.circle.diameter - scope.circle.diameter / 10 - 40) + 'px'
                 };
        } else if (scope.circle.keyPlace == "SW") {
          return { 'top': (scope.circle.top + scope.circle.diameter - scope.circle.diameter / 10) + 'px',
                   'left': (scope.circle.left + scope.circle.diameter / 10 - 40) + 'px'
                 };
        } else {
          return { 'top': (scope.circle.top + scope.circle.diameter / 10) + 'px',
                   'left': (scope.circle.left + scope.circle.diameter / 10 - 40) + 'px'
                 };
        }

      };

    }
  };
}])

.directive('graphDots', [ function () {

  return {
    restrict: 'E',
    templateUrl: '/html/graph-dot.html',

    scope: {
      dot: '='
    },

    link: function(scope, iElm, iAttrs, controller) {

      var keyLength = scope.dot.key.length;

      scope.getStyle = function () {
        var adjust = (scope.dot.alwaysHover || scope.dot.hover) ? 8 : 5;
        return { 'top': (scope.dot.y - adjust) + 'px',
                 'left': (scope.dot.x - adjust) + 'px' };
      };

      scope.getKeyStyle = function (thus) {
        var top = (scope.dot.y - 7) + 'px';
        if (scope.dot.keyPlace == "E") {
          return { 'top': top,
                   'left': (scope.dot.x + 13) + 'px'
                 };
        } else {
          return { 'top': top,
                   'left': (scope.dot.x - 16 - keyLength * 6) + 'px'
                 };
        }

      };

    }
  };
}]);