angular.module("designpathApp")

.controller("HomeCtrl", [ "$scope", function ($scope) {

  $scope.pageClass = 'home-page';

}])

.controller("QuizCtrl", [ "$scope", "$route", "$location", "QuizService", function ($scope, $route, $location, QuizService) {

  $scope.pageClass = 'quiz-page';

  $scope.questionID = $route.current.params.id;

  $scope.question = QuizService.getQuestion($scope.questionID);

  $scope.submitQuestion = function() {
    $location.path(QuizService.nextPath($scope.questionID));
  };

  $scope.prevQuestion = function () {
    $location.path(QuizService.prevPath($scope.questionID));
  };

  $scope.nextQuestion = function () {
    $location.path(QuizService.nextPath($scope.questionID));
  };

}])

.controller("OutcomeCtrl", [ "$scope", "QuizService", function ($scope, QuizService) {

  $scope.pageClass = 'outcome-page';

  $scope.outcome = QuizService.getOutcome();

  $scope.circles = [
    { key: 'research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
    { key: 'macro', keyPlace: 'NW', diameter: 290, top: 103, left: 150 },
    { key: 'micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
    { key: 'visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
    { key: 'implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 },
    { key: 'business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 }
  ];

  $scope.dots = [
    { x: 210, y: 220, title:'abstract'},
    { x: 210, y: 275, title:'people'},
    { x: 285, y: 140, title:'diagnostic'},
    { x: 285, y: 360, title:'analytical'},
    { x: 305, y: 80, title:'design'},
    { x: 305, y: 420, title:'number'},
    { x: 325, y: 140, title:'intuition'},
    { x: 325, y: 360, title:'sensing'},
    { x: 410, y: 220, title:'concrete'},
    { x: 410, y: 275, title:'information'}
  ];

  for (var i = 0; i < $scope.circles.length; i++) {
    if ($scope.circles[i].key === $scope.outcome.pk) {
      $scope.circles[i].alwaysHover = true;
    }
  }


}])

.controller("AboutCtrl", [ "$scope", function ($scope) {

  $scope.pageClass = 'about-page';

}])

.controller("ExploreCtrl", [ "$scope", "QuizService", function ($scope, QuizService) {

  $scope.circles = [
    { key: 'UX Macro', keyPlace: 'NW', diameter: 290, top: 103, left: 150 },
    { key: 'UX Micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
    { key: 'Research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
    { key: 'Business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 },
    { key: 'Visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
    { key: 'Implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 }
  ];

  $scope.outcomes = QuizService.outcomes;

  $scope.curCategory = $scope.outcomes[0];

  $scope.$watch(function () {
    return $scope.circles[0].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[0];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[1].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[1];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[2].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[2];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[3].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[3];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[4].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[4];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[5].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = $scope.outcomes[5];
    }
  });


  $scope.dots = [
    { x: 210, y: 220, title:'abstract'},
    { x: 210, y: 275, title:'people'},
    { x: 285, y: 140, title:'diagnostic'},
    { x: 285, y: 360, title:'analytical'},
    { x: 305, y: 80, title:'design'},
    { x: 305, y: 420, title:'number'},
    { x: 325, y: 140, title:'intuition'},
    { x: 325, y: 360, title:'sensing'},
    { x: 410, y: 220, title:'concrete'},
    { x: 410, y: 275, title:'information'}
  ];

  $scope.pageClass = 'explore-page';

}]);
