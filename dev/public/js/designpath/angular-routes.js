angular.module('designpathApp')

.config(["$routeProvider", function ($routeProvider) {

  $routeProvider

  .when("/", {
    title: "Home",
    class: "home-page",
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
    class: "quiz-page",
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
    class: "outcome-page",
    templateUrl: "html/outcome.html",
    controller: "OutcomeCtrl"
  })

  .when("/about", {
    title: "About",
    class: "about-page",
    templateUrl: "html/about.html",
    controller: "AboutCtrl"
  })

  .when("/explore", {
    title: "Explore",
    class: "explore-page",
    templateUrl: "html/explore.html",
    controller: "ExploreCtrl"
  })
  .when("/explore-2", {
    title: "Explore",
    class: "explore-page",
    templateUrl: "html/explore-2.html",
    controller: "Explore2Ctrl"
  })

  .otherwise({
    title: "404",
    template: "Not Found Bru"
  });


}])

.run([ "$window", "$rootScope", "$location", function ($window, $rootScope, $location) {

  angular.element($window).bind("resize", function (event) {
    $rootScope.$apply();
  }).bind("scroll", function (event) {
    if ($rootScope.navOn) {
      $rootScope.navOn = false;
      $rootScope.$apply();
    }

  });

  $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {
    $rootScope.navOn = false;
    if (angular.isDefined(current.$$route)) {
      $rootScope.title = current.$$route.title;
      $rootScope.class = current.$$route.class;
    } else {
      $rootScope.title = "";
      $rootScope.class = "";
    }
  });

}]);
