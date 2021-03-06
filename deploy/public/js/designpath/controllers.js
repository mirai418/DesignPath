angular.module("designpathApp")

.controller("HomeCtrl", [ "$scope", function ($scope) {

  $scope.pageClass = 'home-page';

}])

/**
* Responsible for retrieving the question based on the current quiz index, then
* allowing the user to select a choice for a question or navigate the quiz.
*/
.controller("QuizCtrl", [ "$scope", "$route", "$location", "QuizService", "DesignPathQuestions",
  function ($scope, $route, $location, QuizService, DesignPathQuestions) {

  $scope.pageClass = 'quiz-page';

  $scope.questionPk = parseInt($route.current.params.id, 10);

  if ($scope.questionPk > DesignPathQuestions.length) {
    $location.path("/404");
  }

  $scope.question = DesignPathQuestions[$scope.questionPk - 1];

  $scope.selectAnswer = function (index) {
    QuizService.select($scope.questionPk, index);
    $scope.nextQuestion();
  };

  $scope.isSelected = function (index) {
    return index == QuizService.getSelected($scope.questionPk);
  };

  $scope.prevQuestion = function () {
    if ($scope.questionPk === 1) {
      return $location.path("/");
    } else {
      return $location.path("/quiz/" + ($scope.questionPk - 1).toString());
    }
  };

  $scope.nextQuestion = function () {
    if ($scope.questionPk === DesignPathQuestions.length) {
      return $location.path("/outcome");
    } else {
      return $location.path("/quiz/" + ($scope.questionPk + 1).toString());
    }
  };

}])

/**
* Based on the user's response, it will evaluate the quiz and show the best
* fit for the user.
*/
.controller("OutcomeCtrl", [ "$scope", "QuizService", "GraphCircles", "GraphDots", "GraphLines", "DesignPathOutcomes",
  function ($scope, QuizService, GraphCircles, GraphDots, GraphLines, DesignPathOutcomes) {

  $scope.pageClass = 'outcome-page';

  $scope.circles = GraphCircles;
  $scope.dots = GraphDots;
  $scope.lines = GraphLines;

  // get the results of the quiz.
  var userBestFitStack = QuizService.evaluate();

  var getOutcomeByPk = function (pk) {
    for (var i = 0; i < DesignPathOutcomes.length; i++) {
      if (DesignPathOutcomes[i].pk === pk) {
        return DesignPathOutcomes[i];
      }
    }
  };

  // reset the graph to its original state.
  // this should be extracted out to the the factories in the future.
  var j;
  for (j = 0; j < $scope.circles.length; j++) {
    $scope.circles[j].alwaysHover = false;
  }
  for (j = 0; j < $scope.dots.length; j++) {
    $scope.dots[j].alwaysHover = false;
  }
  for (j = 0; j < $scope.lines.length; j++) {
    $scope.lines[j].show = false;
  }

  // find the outcome information based on the evaluation
  $scope.userBestFit = getOutcomeByPk(userBestFitStack[0].key);
  $scope.index = DesignPathOutcomes.indexOf($scope.userBestFit);

  // want to highlight the relevant circles, dots and lines.
  $scope.circles[$scope.index].alwaysHover = true;
  for (j = 0; j < $scope.userBestFit.relevantDots.length; j++) {
    $scope.dots[$scope.userBestFit.relevantDots[j]].alwaysHover = true;
  }
  for (j = 0; j < $scope.userBestFit.relevantLines.length; j++) {
    $scope.lines[$scope.userBestFit.relevantLines[j]].show = true;
  }

}])

.controller("AboutCtrl", [ "$scope", function ($scope) {

  $scope.pageClass = 'about-page';

}])

/**
* Allows the users to explore each of the outcome categories.
*/
.controller("ExploreCtrl", [ "$scope", "GraphCircles", "GraphDots", "DesignPathOutcomes",
  function ($scope, GraphCircles, GraphDots, DesignPathOutcomes) {

  $scope.pageClass = 'explore-page';

  $scope.circles = GraphCircles;
  $scope.dots = GraphDots;

  $scope.outcomes = DesignPathOutcomes;

  $scope.curCategory = DesignPathOutcomes[0];

  $scope.$watch(function () {
    return $scope.circles[0].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[0];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[1].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[1];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[2].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[2];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[3].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[3];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[4].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[4];
    }
  });

  $scope.$watch(function () {
    return $scope.circles[5].hover;
  }, function  (newValue, oldValue) {
    if (newValue) {
      $scope.curCategory = DesignPathOutcomes[5];
    }
  });

}])


.controller("Explore2Ctrl", [ "$scope", "GraphCircles", "GraphDots", "GraphLines", "DesignPathOutcomes",
  function ($scope, GraphCircles, GraphDots, GraphLines, DesignPathOutcomes) {

  $scope.pageClass = 'explore-page';

  $scope.circles = GraphCircles;
  $scope.dots = GraphDots;
  $scope.lines = GraphLines;

  $scope.DesignPathOutcomes = DesignPathOutcomes;

  $scope.curCategory = DesignPathOutcomes[0];

  $scope.$watch(function () {
    return $scope.curCategory;
  }, function (newValue) {
    var index = DesignPathOutcomes.indexOf(newValue);
    if (angular.isDefined($scope.curIndex)) {
      $scope.circles[$scope.curIndex].alwaysHover = false;
      var i;
      for (i = 0; i < DesignPathOutcomes[$scope.curIndex].relevantDots.length; i++) {
        $scope.dots[DesignPathOutcomes[$scope.curIndex].relevantDots[i]].alwaysHover = false;
      }
      for (i = 0; i < DesignPathOutcomes[$scope.curIndex].relevantLines.length; i++) {
        $scope.lines[DesignPathOutcomes[$scope.curIndex].relevantLines[i]].show = false;
      }
    }
    $scope.circles[index].alwaysHover = true;
    var j;
    for (j = 0; j < newValue.relevantDots.length; j++) {
      $scope.dots[newValue.relevantDots[j]].alwaysHover = true;
    }
    for (j = 0; j < newValue.relevantLines.length; j++) {
      $scope.lines[newValue.relevantLines[j]].show = true;
    }
    $scope.curIndex = index;

  });

}]);
