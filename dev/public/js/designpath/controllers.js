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

  $scope.circles = [
    { key: 'Research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
    { key: 'UX Macro', keyPlace: 'NW', diameter: 290, top: 103, left: 150 },
    { key: 'UX Micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
    { key: 'Visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
    { key: 'Implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 },
    { key: 'Business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 }
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


}])

.controller("AboutCtrl", [ "$scope", function ($scope) {

  console.log('AboutCtrl');
  $scope.pageClass = 'about-page';

}])

.controller("ExploreCtrl", [ "$scope", function ($scope) {

  console.log('Explore');

  $scope.circles = [
    { key: 'Research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
    { key: 'UX Macro', keyPlace: 'NW', diameter: 290, top: 103, left: 150 },
    { key: 'UX Micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
    { key: 'Visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
    { key: 'Implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 },
    { key: 'Business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 }
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

  $scope.pageClass = 'explore-page';

}]);
