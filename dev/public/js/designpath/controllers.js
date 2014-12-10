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
      console.log('asdf');
      $scope.circles[i].alwaysHover = true;
    }
  }


}])

.controller("AboutCtrl", [ "$scope", function ($scope) {

  $scope.pageClass = 'about-page';

}])

.controller("ExploreCtrl", [ "$scope", function ($scope) {

  $scope.circles = [
    { key: 'UX Macro', keyPlace: 'NW', diameter: 290, top: 103, left: 150 },
    { key: 'UX Micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
    { key: 'Research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
    { key: 'Business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 },
    { key: 'Visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
    { key: 'Implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 }
  ];

  $scope.outcomes = [
    {
      pk: "macro",
      field: "User Experience Design (Macro)",
      job: "User Experience (UX) Designer, Information Architect",
      link: "",
      description: "User Experience is a process in which the needs, wants, and limitations of end users of a product, service or process are given extensive attention at each stage of the design process. At a macro level, designers consider heuristics to enhance customer satisfaction and loyalty by improving the usability, ease of use, and pleasure provided in the interaction between the customer and the product.within any professional field of design."
    },
    {
      pk: "micro",
      field: "User Experience Design (Micro)",
      job: "User Experience (UX) Designer",
      link: "",
      description: "The 'micro' level of User Experience Design is detail-oriented, and involves the micro-interactions between users and products. Often, designers work on interfaces where the interactions between humans and machines occur. The goal of this interaction is to allow effective operation and control of the machine from the human end, whilst the machine simultaneously feeds back information that aids the operators decision making process."
    },
    {
      pk: "research",
      field: "Design Research",
      job: "User Experience(UX) Researcher",
      link: "",
      description: "Design researchers explore the process of design, using various design methods. Research may be embedded within the process of design, including work concerned with the context of designing and research-based design practice. The field is broad: aimed at understanding and improving design processes and practices, rather than developing domain-specific knowledge within any professional field of design."
    },
    {
      pk: "business",
      field: "Design Business",
      job: "Product Manager",
      link: "",
      description: "Careers in the 'business' of design deal with managing the creative output of designers, and driving value. For example, product management is an organizational lifecycle function within a company dealing with the planning, forecasting, and production, or marketing of a product or products at all stages of the product lifecycle. A product manager investigates, selects, and drives the development of products for an organization, performing the activities of product management."
    },
    {
      pk: "visual",
      field: "Visual Design",
      job: "Visual Designer",
      link: "",
      description: "Visual design focuses on the aesthetics, or the 'look and feel' of a product. A Visual Designer may also be known as a 'Graphic Designer' or a 'Communication Designer.' Practitioners need to be able to use colors, images, and symbols to convey meaning; communicate messages non-verbally; and have an intuitive knowledge of how people will respond to their products."
    },
    {
      pk: "implementation",
      field: "Design Implementation",
      job: "Front End Engineer, Web Developer",
      link: "",
      description: "Implementation is the making of products, which other people may have designed. In order to implement designs, practitioners must have specific skillsets. For example, a web developer is a programmer who specializes in the development of World Wide Web applications. A software engineer develops and maintains software."
    }
  ];

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
