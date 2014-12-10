angular.module('designpathApp')

.factory('QuizService', [ function () {

  var quiz = {};

  quiz.outcomeCategoriesHuman = ["Macro Psychology Design", "Micro Psychology Design", "Research", "Business", "Visual", "Implementation"];
  quiz.outcomeCategories = ["macro", "micro", "research", "business", "visual", "implementation"];

  quiz.outcomes = [
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
      prompt: 'Select the statement which best describes you.',

      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/1.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/2.png'
        }
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
      prompt: 'Select the statement which best describes you.',
      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/3.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/4.png'
        }
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
      prompt: 'Select the statement which best describes you.',
      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/5.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/6.png'
        }
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
      prompt: 'Select the statement which best describes you.',
      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/7.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/8.png'
        }
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
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 5,
      prompt: 'Select the statement which best describes you.',
      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/9.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/10.png'
        }
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
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 6,
      prompt: 'Select the statement which best describes you.',
      choices: [
        {
          text: 'I solve problems by leaping between different ideas and possibilities',
          image: '/images/quiz/11.png'
        },
        {
          text: 'I solve problems by working through facts until I solve the problem',
          image: '/images/quiz/12.png'
        }
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
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 7,
      prompt: 'Which game do you prefer playing?',
      choices: [
        {
          text: '',
          image: '/images/quiz/monop.jpg'
        },
        {
          text: '',
          image: '/images/quiz/pictionary.jpg'
        }
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
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
    {
      id: 8,
      prompt: 'Which website do you like to spend more time on?',
      choices: [
        {
          text: '',
          image: '/images/quiz/wiki.png'
        },
        {
          text: '',
          image: '/images/quiz/pinterest.png'
        }
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
        }
      },
      selector: function (index) {
        if (angular.isDefined(this.currentSelected)) {
          this.selected[this.currentSelected] = false;
        }
        this.selected[index] = true;
        this.currentSelected = index;
      },
      selected: [false, false, false, false]
    },
  ];

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

  quiz.getOutcomeByPk = function (pk) {
    for (var i = 0; i < quiz.outcomes.length; i++) {
      if (quiz.outcomes[i].pk === pk) {
        return quiz.outcomes[i];
      }
    }
  };

  quiz.getOutcome = function () {
      var res;
      angular.forEach(quiz.outcome, function (point, category) {
        console.log(category + " " + point);
        if (angular.isDefined(res)) {
          if (res.points < point) {
            res = quiz.getOutcomeByPk(category);
            res.points = point;
          }
        } else {
          res = quiz.getOutcomeByPk(category);
          res.points = point;
        }
      });

      return res;
  };

  return quiz;

}]);
