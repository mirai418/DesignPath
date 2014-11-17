angular.module('webdesfinalApp', ["ngRoute", "ngAnimate"])

.config(["$routeProvider", function ($routeProvider) {

  $routeProvider

  .when("/", {
    title: "Home",
    templateUrl: "html/home.html",
    controller: "HomeCtrl"
  })
  .when("/quiz", {
    title: "Quiz",
    templateUrl: "html/quiz.html",
    controller: "QuizCtrl"
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
