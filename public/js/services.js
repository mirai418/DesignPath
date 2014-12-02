angular.module('webdesfinalApp')

.factory('QuizService', [ function() {

  var quiz = {};

  quiz.questions = [
    {
      id: 1,
      prompt: 'choose one:',
      choices: [
        {
          text: '"I solve problems by leaping between different ideas and possibilities"',
          points: {
            research: 3,
          }
        },
        {
          text: '"I believe I can make the best decisions by weighing what people care about and the points:-of-view of persons involved in a situation"',
          points: {
            business: 3,
          }
        }
      ]
    },
    {
      id: 2,
      prompt: 'choose one:',
      choices: [
        {
          text: '"I solve problems by working through facts until I solve the problem"',
          points: {
            implementation: 3,
          }
        },
        {
          text: '"I like to analyze pros and cons, and then be consistent and logical in deciding"',
          points: {
            business: 3,
          }
        }
      ],
    }
  ];

  quiz.getQuestion = function (id) {
    return quiz.questions[parseInt(id) - 1];
  }

  quiz.nextPath = function (id) {
    if (parseInt(id) === quiz.questions.length) {
      return "/outcome";
    } else {
      return "/quiz/" + (parseInt(id) + 1).toString();
    }
  }

  quiz.prevPath = function (id) {
    if (parseInt(id) === 1) {
      return "/";
    } else {
      return "/quiz/" + (parseInt(id) - 1).toString();
    }
  }

  quiz.getOutcome = function () {
    outcome = {};
    var choices;
    var points;
    angular.forEach(quiz.questions, function (value) {
      choices = value.choices;
      for (var i = 0; i < choices.length; i++) {
        if (choices[i].selected) {
          var points = choices[i].points;
          angular.forEach(points, function (point, key) {
            console.log(key + ", " + point);
            if (angular.isDefined(outcome[key])) {
              outcome[key] = outcome[key] + point;
            } else {
            outcome[key] = outcome[key];
            }
          })
        }
      }
    })

    var res;
    angular.forEach(outcome, function (point, category) {
      if (angular.isDefined(res)) {
        if (res.points < point) {
          res.category = category,
          res.points = point;
        }
      } else {
        res = {
          category: category,
          points: point
        };
      }
    })

    return res;

  }

  return quiz;

}])