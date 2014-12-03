angular.module('designpathApp')

.factory('QuizService', [ function () {

  var quiz = {};

  quiz.outcomeCategoriesHuman = ["Macro Psychology Design", "Micro Psychology Design", "Research", "Business", "Visual", "Implementation"];
  quiz.outcomeCategories = ["macro", "micro", "research", "business", "visual", "implementation"];


  quiz.init = function () {
    quiz.outcome = {};
    angular.forEach(quiz.outcomeCategories, function (value) {
      quiz.outcome[value] = 0;
    });
  };
  quiz.init();


  quiz.questions = [
    {
      id: 1,
      prompt: 'Which best describes you?',
      choices: [
        '"I solve problems by leaping between different ideas and possibilities"',
        '"I solve problems by working through facts until I solve the problem"',
        'Both of them apply.',
        'Neither of them apply.'
      ],
      evaluator: function () {
        if (this.selected[0]) {
          quiz.outcome.macro += 1;
          quiz.outcome.micro += 1;
          quiz.outcome.research += 1;
          quiz.outcome.business += 0;
          quiz.outcome.visual += 2;
          quiz.outcome.implementation += 0;
        } else if (this.selected[1]) {
          quiz.outcome.macro += 1;
          quiz.outcome.micro += 1;
          quiz.outcome.research += 1;
          quiz.outcome.business += 2;
          quiz.outcome.visual += 0;
          quiz.outcome.implementation += 2;
        } else if (this.selected[2]) {
          quiz.outcome.macro += 2;
          quiz.outcome.micro += 2;
          quiz.outcome.research += 2;
          quiz.outcome.business += 1;
          quiz.outcome.visual += 1;
          quiz.outcome.implementation += 1;
        } else if (this.selected[3]) {
        }
      },
      selector: function (index) {
        console.log('hey');
        console.log(index);
        console.log(this);
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 2,
      prompt: 'Which best describes you?',
      choices: [
        '"I believe I can make the best decisions by weighing what people care about and the points-of-view of persons involved in a situation"',
        '"I like to analyze pros and cons, and then be consistent and logical in deciding"',
        'Both of them apply.',
        'Neither of them apply.'
      ],
      evaluator: function () {
        if (this.selected[0]) {
          quiz.outcome.macro += 1;
          quiz.outcome.micro += 1;
          quiz.outcome.research += 1;
          quiz.outcome.business += 0;
          quiz.outcome.visual += 2;
          quiz.outcome.implementation += 0;
        } else if (this.selected[1]) {
          quiz.outcome.macro += 1;
          quiz.outcome.micro += 1;
          quiz.outcome.research += 1;
          quiz.outcome.business += 2;
          quiz.outcome.visual += 0;
          quiz.outcome.implementation += 2;
        } else if (this.selected[2]) {
          quiz.outcome.macro += 2;
          quiz.outcome.micro += 2;
          quiz.outcome.research += 2;
          quiz.outcome.business += 1;
          quiz.outcome.visual += 1;
          quiz.outcome.implementation += 1;
        } else if (this.selected[3]) {
        }
      },
      selector: function (index) {
        console.log('hey');
        console.log(index);
        console.log(this);
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 3,
      prompt: 'Which game do you prefer playing?',
      choices: [
        '"Monopoly"',
        '"Pictionary"',
        'Both of them apply.',
        'Neither of them apply.'
      ],
      evaluator: function () {
        if (this.selected[0]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 2;
          quiz.outcome.visual += 0;
          quiz.outcome.implementation += 2;
        } else if (this.selected[1]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 0;
          quiz.outcome.visual += 2;
          quiz.outcome.implementation += 0;
        } else if (this.selected[2]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 1;
          quiz.outcome.visual += 1;
          quiz.outcome.implementation += 1;
        } else if (this.selected[3]) {
        }
      },
      selector: function (index) {
        console.log('hey');
        console.log(index);
        console.log(this);
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 4,
      prompt: 'Which website do you like to spend more time on?',
      choices: [
        '"Wikipedia"',
        '"Pinterest"',
        'Both of them apply.',
        'Neither of them apply.'
      ],
      evaluator: function () {
        if (this.selected[0]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 2;
          quiz.outcome.visual += 0;
          quiz.outcome.implementation += 2;
        } else if (this.selected[1]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 0;
          quiz.outcome.visual += 2;
          quiz.outcome.implementation += 0;
        } else if (this.selected[2]) {
          quiz.outcome.macro += 0;
          quiz.outcome.micro += 0;
          quiz.outcome.research += 0;
          quiz.outcome.business += 1;
          quiz.outcome.visual += 1;
          quiz.outcome.implementation += 1;
        } else if (this.selected[3]) {
        }
      },
      selector: function (index) {
        console.log('hey');
        console.log(index);
        console.log(this);
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
  ];

  // quiz.questions = [
  //   {
  //     id: 1,
  //     prompt: 'choose one:',
  //     choices: [
  //       {
  //         text: '"I solve problems by leaping between different ideas and possibilities"',
  //         points: {
  //           research: 3,
  //         }
  //       },
  //       {
  //         text: '"I believe I can make the best decisions by weighing what people care about and the points:-of-view of persons involved in a situation"',
  //         points: {
  //           business: 3,
  //         }
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     prompt: 'choose one:',
  //     choices: [
  //       {
  //         text: '"I solve problems by working through facts until I solve the problem"',
  //         points: {
  //           implementation: 3,
  //         }
  //       },
  //       {
  //         text: '"I like to analyze pros and cons, and then be consistent and logical in deciding"',
  //         points: {
  //           business: 3,
  //         }
  //       }
  //     ],
  //   }
  // ];

  quiz.getQuestion = function (id) {
    return quiz.questions[parseInt(id, 10) - 1];
  };

  quiz.nextPath = function (id) {
    if (parseInt(id, 10) === quiz.questions.length) {
      return "/outcome";
    } else {
      return "/quiz/" + (parseInt(id, 10) + 1).toString();
    }
  };

  quiz.prevPath = function (id) {
    if (parseInt(id, 10) === 1) {
      return "/";
    } else {
      return "/quiz/" + (parseInt(id, 10) - 1).toString();
    }
  };

  // quiz.getOutcome = function () {
  //   outcome = {};
  //   var choices;
  //   var points;

  //   var accumulator = function (point, key) {
  //     console.log(key + ", " + point);
  //     if (angular.isDefined(outcome[key])) {
  //       outcome[key] = outcome[key] + point;
  //     } else {
  //     outcome[key] = outcome[key];
  //     }
  //   };

  //   angular.forEach(quiz.questions, function (value) {
  //     choices = value.choices;
  //     for (var i = 0; i < choices.length; i++) {
  //       if (choices[i].selected) {
  //         var points = choices[i].points;
  //         angular.forEach(points, accumulator);
  //       }
  //     }
  //   });

  //   var res;
  //   angular.forEach(outcome, function (point, category) {
  //     if (angular.isDefined(res)) {
  //       if (res.points < point) {
  //         res.category = category;
  //         res.points = point;
  //       }
  //     } else {
  //       res = {
  //         category: category,
  //         points: point
  //       };
  //     }
  //   });

  //   return res;

  // };

  quiz.getOutcome = function () {
      var res;
      angular.forEach(quiz.outcome, function (point, category) {
        console.log(category + " " + point);
        if (angular.isDefined(res)) {
          if (res.points < point) {
            res.category = category;
            res.points = point;
          }
        } else {
          res = {
            category: quiz.outcomeCategoriesHuman[quiz.outcomeCategories.indexOf(category)],
            points: point
          };
        }
      });

      return res;
  };

  return quiz;

}]);
