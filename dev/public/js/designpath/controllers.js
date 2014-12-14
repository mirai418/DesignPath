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
.controller("OutcomeCtrl", [ "$scope", "QuizService", "GraphCircles", "GraphDots", "DesignPathOutcomes",
  function ($scope, QuizService, GraphCircles, GraphDots, DesignPathOutcomes) {

  $scope.pageClass = 'outcome-page';

  $scope.circles = GraphCircles;
  $scope.dots = GraphDots;

  var userBestFitStack = QuizService.evaluate();

  var getOutcomeByPk = function (pk) {
    for (var i = 0; i < DesignPathOutcomes.length; i++) {
      if (DesignPathOutcomes[i].pk === pk) {
        return DesignPathOutcomes[i];
      }
    }
  };

  $scope.userBestFit = getOutcomeByPk(userBestFitStack[0].key);

  for (var i = 0; i < $scope.circles.length; i++) {
    if ($scope.circles[i].key === $scope.userBestFit.pk) {
      $scope.circles[i].alwaysHover = true;
    }
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


.controller("Explore2Ctrl", [ "$scope", "GraphCircles", "GraphDots", "DesignPathOutcomes",
  function ($scope, GraphCircles, GraphDots, DesignPathOutcomes) {

  $scope.pageClass = 'explore-page';

  $scope.circles = GraphCircles;
  $scope.dots = GraphDots;

  $scope.DesignPathOutcomes = DesignPathOutcomes;

  $scope.curCategory = DesignPathOutcomes[0];

  $scope.$watch(function () {
    return $scope.curCategory;
  }, function (newValue) {
    var index = DesignPathOutcomes.indexOf(newValue);
    if (angular.isDefined($scope.curIndex)) {
      $scope.circles[$scope.curIndex].alwaysHover = false;
      for (var i = 0; i < DesignPathOutcomes[$scope.curIndex].relevantDots.length; i++) {
        $scope.dots[DesignPathOutcomes[$scope.curIndex].relevantDots[i]].alwaysHover = false;
      }
    }
    $scope.circles[index].alwaysHover = true;
    for (var j = 0; j < newValue.relevantDots.length; j++) {
      $scope.dots[newValue.relevantDots[j]].alwaysHover = true;
    }
    $scope.curIndex = index;

  });

}]);
