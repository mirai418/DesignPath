angular.module('webdesfinalApp', ["ngRoute", "ngAnimate", "asui"])

.config(["$routeProvider", function ($routeProvider) {

  $routeProvider

  .when("/", {
    title: "Home",
    templateUrl: "html/home.html",
    controller: "HomeCtrl"
  })
  .when("/home", {
    redirectTo: function () {
      return "/";
    }
  })

  .when("/quiz/:id", {
    title: "Quiz",
    templateUrl: "html/quiz.html",
    controller: "QuizCtrl"
  })
  .when("/quiz", {
    redirectTo: function () {
      return "/quiz/1";
    }
  })

  .when("/outcome", {
    title: "Outcome",
    templateUrl: "html/outcome.html",
    controller: "OutcomeCtrl"
  })
  .otherwise({
    title: "404",
    template: "Not Found Bru"
  })


}])

.run([ "$window", "$rootScope", "$location", function ($window, $rootScope, $location) {

  angular.element($window).bind("resize", function (event) {
    $rootScope.$apply();
  });

}])
