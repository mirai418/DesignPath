angular.module("designpathApp")

.controller("HomeCtrl", [ "$scope", function ($scope) {

  console.log('HomeCtrl');
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

  console.log('OutcomeCtrl');
  $scope.pageClass = 'outcome-page';

  $scope.outcome = QuizService.getOutcome();

}])

.controller("AboutCtrl", [ "$scope", function ($scope) {

  console.log('AboutCtrl');
  $scope.pageClass = 'about-page';

}])

.controller("ExploreCtrl", [ "$scope", function ($scope) {

  console.log('Explore');

  $scope.circles = [
    { diameter: 380, top: 100, left: 0 },
    { diameter: 290, top: 103, left: 150 },
    { diameter: 290, top: 103, left: 190 },
    { diameter: 290, top: 0, left: 270 },
    { diameter: 300, top: 200, left: 265 }
  ];

  $scope.pageClass = 'explore-page';

}]);
