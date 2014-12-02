angular.module("webdesfinalApp")

.controller("HomeCtrl", [ "$scope", function ($scope) {

  console.log('HomeCtrl');
  $scope.pageClass = 'page-home';

}])

.controller("QuizCtrl", [ "$scope", "$route", "$location", "QuizService", function ($scope, $route, $location, QuizService) {

  $scope.pageClass = 'page-quiz';

  $scope.questionID = $route.current.params.id;

  $scope.question = QuizService.getQuestion($scope.questionID);

  $scope.submitQuestion = function() {
    $location.path(QuizService.nextPath($scope.questionID));
  }

  $scope.prevQuestion = function () {
    $location.path(QuizService.prevPath($scope.questionID));
  }

  $scope.nextQuestion = function () {
    $location.path(QuizService.nextPath($scope.questionID));
  }

}])

.controller("OutcomeCtrl", [ "$scope", "QuizService", function ($scope, QuizService) {

  console.log('OutcomeCtrl');
  $scope.pageClass = 'page-outcome';

  $scope.outcome = QuizService.getOutcome();

}])