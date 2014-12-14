angular.module('designpathApp')

/**
* Positions and Sizing of the Circles on the graph
*/
.constant("GraphCircles", [
  { key: 'macro', keyPlace: 'SW', diameter: 290, top: 103, left: 150 },
  { key: 'micro', keyPlace: 'NE', diameter: 290, top: 103, left: 190 },
  { key: 'research', keyPlace: 'NW', diameter: 380, top: 100, left: 0 },
  { key: 'business', keyPlace: 'SW', diameter: 370, top: 150, left: 180 },
  { key: 'visual', keyPlace: 'NE', diameter: 290, top: 0, left: 270 },
  { key: 'implementation', keyPlace: 'SE', diameter: 300, top: 200, left: 265 }
])

/**
* Positions of the dots on the graph
*/
.constant("GraphDots", [
  { x: 210, y: 220, keyPlace: 'W', key: 'abstract orientation' }, // 0
  { x: 210, y: 275, keyPlace: 'W', key: 'people skills' }, // 1
  { x: 285, y: 140, keyPlace: 'W', key: 'diagnostic reasoning' }, // 2
  { x: 285, y: 360, keyPlace: 'W', key: 'analytical reasoning' }, // 3
  { x: 305, y: 80, keyPlace: 'E', key: 'design memory' }, // 4
  { x: 305, y: 420, keyPlace: 'E', key: 'number memory' }, // 5
  { x: 325, y: 140, keyPlace: 'E', key: 'intuition' }, // 6
  { x: 325, y: 360, keyPlace: 'E', key: 'sensing' }, // 7
  { x: 410, y: 220, keyPlace: 'E', key: 'concrete orientation' }, // 8
  { x: 410, y: 275, keyPlace: 'E', key: 'information skills' } // 9
])

/**
* Positions of the lines on the graph
*/
// .constant("GraphLines", 

.factory("GraphLines", [ "GraphDots", function (GraphDots) {
  return [
    { x1: GraphDots[0].x, y1: GraphDots[0].y, x2: GraphDots[1].x, y2: GraphDots[1].y }, // 0
    { x1: GraphDots[1].x, y1: GraphDots[1].y, x2: GraphDots[3].x, y2: GraphDots[3].y }, // 1
    { x1: GraphDots[3].x, y1: GraphDots[3].y, x2: GraphDots[5].x, y2: GraphDots[5].y }, // 2
    { x1: GraphDots[5].x, y1: GraphDots[5].y, x2: GraphDots[7].x, y2: GraphDots[7].y }, // 3
    { x1: GraphDots[7].x, y1: GraphDots[7].y, x2: GraphDots[9].x, y2: GraphDots[9].y }, // 4
    { x1: GraphDots[9].x, y1: GraphDots[9].y, x2: GraphDots[8].x, y2: GraphDots[8].y }, // 5
    { x1: GraphDots[8].x, y1: GraphDots[8].y, x2: GraphDots[6].x, y2: GraphDots[6].y }, // 6
    { x1: GraphDots[6].x, y1: GraphDots[6].y, x2: GraphDots[4].x, y2: GraphDots[4].y }, // 7
    { x1: GraphDots[4].x, y1: GraphDots[4].y, x2: GraphDots[2].x, y2: GraphDots[2].y }, // 8
    { x1: GraphDots[2].x, y1: GraphDots[2].y, x2: GraphDots[0].x, y2: GraphDots[0].y }, // 9

    { x1: GraphDots[3].x, y1: GraphDots[3].y, x2: GraphDots[7].x, y2: GraphDots[7].y }, // 10
    { x1: GraphDots[2].x, y1: GraphDots[2].y, x2: GraphDots[6].x, y2: GraphDots[6].y }  // 11
  ];
}])

/**
* DesignPathOutcomes is the full set of possible outcomes of the quiz.
* It includes the indicated field and possible jobs, accompanied by a
* description
* This is saved in a constant so not to be changed.
*/
.constant("DesignPathOutcomes", [
  {
    pk: "macro",
    field: "User Experience Design (Macro)",
    job: "User Experience (UX) Designer, Information Architect",
    link: "https://www.linkedin.com/job/ux-designer-jobs/",
    relevantDots: [0, 1, 2, 3, 6, 7, 8, 9],
    relevantLines: [0, 1, 4, 5, 6, 9, 10, 11],
    description: "User Experience is a process in which the needs, wants, and limitations of end users of a product, service or process are given extensive attention at each stage of the design process. At a macro level, designers consider heuristics to enhance customer satisfaction and loyalty by improving the usability, ease of use, and pleasure provided in the interaction between the customer and the product.within any professional field of design."
  },
  {
    pk: "micro",
    field: "User Experience Design (Micro)",
    job: "User Experience (UX) Designer",
    link: "https://www.linkedin.com/job/interaction-designer-jobs/",
    relevantDots: [0, 1, 2, 3, 6, 7, 8, 9],
    relevantLines: [0, 1, 4, 5, 6, 9, 10, 11],
    description: "The 'micro' level of User Experience Design is detail-oriented, and involves the micro-interactions between users and products. Often, designers work on interfaces where the interactions between humans and machines occur. The goal of this interaction is to allow effective operation and control of the machine from the human end, whilst the machine simultaneously feeds back information that aids the operators decision making process."
  },
  {
    pk: "research",
    field: "Design Research",
    job: "User Experience(UX) Researcher",
    link: "https://www.linkedin.com/job/user-experience-researcher-jobs/",
    relevantDots: [0, 1, 2, 3, 5, 7],
    relevantLines: [0, 1, 2, 3, 9],
    description: "Design researchers explore the process of design, using various design methods. Research may be embedded within the process of design, including work concerned with the context of designing and research-based design practice. The field is broad: aimed at understanding and improving design processes and practices, rather than developing domain-specific knowledge within any professional field of design."
  },
  {
    pk: "business",
    field: "Design Business",
    job: "Product Manager",
    link: "https://www.linkedin.com/job/product-manager-jobs/",
    relevantDots: [1, 3, 5, 7, 8, 9],
    relevantLines: [1, 2, 3, 4, 5],
    description: "Careers in the 'business' of design deal with managing the creative output of designers, and driving value. For example, product management is an organizational lifecycle function within a company dealing with the planning, forecasting, and production, or marketing of a product or products at all stages of the product lifecycle. A product manager investigates, selects, and drives the development of products for an organization, performing the activities of product management."
  },
  {
    pk: "visual",
    field: "Visual Design",
    job: "Visual Designer",
    link: "https://www.linkedin.com/job/visual-designer-jobs/",
    relevantDots: [2, 4, 6, 8, 9],
    relevantLines: [5, 6, 7, 8],
    description: "Visual design focuses on the aesthetics, or the 'look and feel' of a product. A Visual Designer may also be known as a 'Graphic Designer' or a 'Communication Designer.' Practitioners need to be able to use colors, images, and symbols to convey meaning; communicate messages non-verbally; and have an intuitive knowledge of how people will respond to their products."
  },
  {
    pk: "implementation",
    field: "Design Implementation",
    job: "Front End Engineer, Web Developer",
    link: "https://www.linkedin.com/job/front-end-engineer-jobs/",
    relevantDots: [3, 5, 7, 8, 9],
    relevantLines: [2, 3, 4, 5],
    description: "Implementation is the making of products, which other people may have designed. In order to implement designs, practitioners must have specific skillsets. For example, a web developer is a programmer who specializes in the development of World Wide Web applications. A software engineer develops and maintains software."
  }
])

/**
* DesignPathQuestions is the full set of questions that the quiz asks.
* Each question has a prompt, a list of possible choices, and an evaluator
* function which is used to evaluate the user's answers.
* This is saved in a constant so not to be changed.
*/
.constant("DesignPathQuestions", [
  {
    pk: 1,
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
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 2;
        tally.micro += 2;
        tally.research += 1;
        tally.business += 0;
        tally.visual += 3;
        tally.implementation += 0;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 1;
        tally.visual += 0;
        tally.implementation += 2;
      }
    },
  },
  {
    pk: 2,
    prompt: 'Select the statement which best describes you.',
    choices: [
      {
        text: 'I make my best decisions by weighing the points-of-view of others',
        image: '/images/quiz/3.png'
      },
      {
        text: 'I analyze pros and cons to be consistent and logical in deciding',
        image: '/images/quiz/4.png'
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 2;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 0;
        tally.visual += 3;
        tally.implementation += 0;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 2;
        tally.research += 1;
        tally.business += 2;
        tally.visual += 0;
        tally.implementation += 2;
      }
    },
  },
  {
    pk: 3,
    prompt: 'Select the statement which best describes you.',
    choices: [
      {
        text: 'I think more about what can be done now, then what might happen in the future', // sensory
        image: '/images/quiz/5.png'
      },
      {
        text: 'I think more about the future than the present',
        image: '/images/quiz/6.png' // intuitive perception
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 2;
        tally.micro += 2;
        tally.research += 1;
        tally.business += 0;
        tally.visual += 2;
        tally.implementation += 0;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 2;
        tally.business += 2;
        tally.visual += 0;
        tally.implementation += 1;
      }
    },
  },
  {
    pk: 4,
    prompt: 'Select the statement which best describes you.',
    choices: [
      {
        text: 'I start with facts, and only then do I form the big picture',
        image: '/images/quiz/7.png' // sensory
      },
      {
        text: 'I “read between the lines” when forming the big picture',
        image: '/images/quiz/8.png' // intuitive
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 2;
        tally.business += 0;
        tally.visual += 2;
        tally.implementation += 0;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 2;
        tally.visual += 0;
        tally.implementation += 2;
      }
    },
  },
  {
    pk: 5,
    prompt: 'Select the statement which best describes you.',
    choices: [
      {
        text: 'I’m happiest when I’m analyzing the components of complex problems', // abstract orine
        image: '/images/quiz/9.png'
      },
      {
        text: 'I’m happiest when I’m creating concrete solutions to abstract problems',
        image: '/images/quiz/10.png' // concrete orient
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 1;
        tally.micro += 2;
        tally.research += 3;
        tally.business += 1;
        tally.visual += 0;
        tally.implementation += 3;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 2;
        tally.research += 1;
        tally.business += 2;
        tally.visual += 3;
        tally.implementation += 2;
      }
    },
  },
  {
    pk: 6,
    prompt: 'Select the statement which best describes you.',
    choices: [
      {
        text: 'I like working with People; mentoring, observing, and cultivating relationships', // with people
        image: '/images/quiz/11.png'
      },
      {
        text: 'I like working with Information: brainstorming ideas and analyzing', // with info
        image: '/images/quiz/12.png'
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 2;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 3;
        tally.visual += 1;
        tally.implementation += 0;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 2;
        tally.visual += 0;
        tally.implementation += 2;
      }
    },
  },
  {
    pk: 7,
    prompt: 'Which game do you prefer playing?',
    choices: [
      {
        text: 'Monopoly',
        image: '/images/quiz/monop.jpg'
      },
      {
        text: 'Pictionary',
        image: '/images/quiz/pictionary.jpg'
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 2;
        tally.micro += 1;
        tally.research += 0;
        tally.business += 3;
        tally.visual += 0;
        tally.implementation += 2;
      } else if (selectedIndex === 1) {
        tally.macro += 1;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 0;
        tally.visual += 3;
        tally.implementation += 0;
      }
    },
  },
  {
    pk: 8,
    prompt: 'Which website do you like to spend more time on?',
    choices: [
      {
        text: 'Wikipedia',
        image: '/images/quiz/wiki.png'
      },
      {
        text: 'Pinterest',
        image: '/images/quiz/pinterest.png'
      }
    ],
    evaluator: function (selectedIndex, tally) {
      if (selectedIndex === 0) {
        tally.macro += 0;
        tally.micro += 0;
        tally.research += 2;
        tally.business += 2;
        tally.visual += 0;
        tally.implementation += 2;
      } else if (selectedIndex === 1) {
        tally.macro += 0;
        tally.micro += 1;
        tally.research += 1;
        tally.business += 0;
        tally.visual += 2;
        tally.implementation += 0;
      }
    },
  },
])

/**
* The QuizService is what takes care of the exeuction of the quiz itself.
* It is reponsible for initializing and remembering the user's answers for
* each question.
*/
.factory('QuizService', [ "DesignPathOutcomes", "DesignPathQuestions", function (DesignPathOutcomes, DesignPathQuestions) {

  var quiz = {};

  /**
  * Initialize (or re-initialize) the quiz selected values, so the user can
  * take the quiz.
  */
  var selected;
  quiz.init = function () {
    selected = new Array(DesignPathQuestions.length);
  };
  // call the method on initial call.
  quiz.init();

  /**
  * Select the index for a particular question.
  */
  quiz.select = function (questionPk, index) {
    if (angular.isUndefined(selected)) {
      quiz.init();
    }
    selected[questionPk - 1] = index;
  };

  /**
  * This method evaluates the answers that the user selected by tallying up the
  * points. At the end, it sorts the outcome categories in point order from
  * highest to lowest, which indicates the user-best-fit stack.
  */
  quiz.evaluate = function () {

    // initialize the tally. for now, we can start every category with zero.
    // this could be tuned to other values if necessary.
    var tally = {};
    for (var i = 0; i < DesignPathOutcomes.length; i++) {
      tally[DesignPathOutcomes[i].pk] = 0;
    }

    // now tally up the points based on each question's evaluator.
    // the evaluator is the key to defining how each question affects the
    // overall result.
    // the values that the user selected are saved in quiz.selected
    for (var j = 0; j < DesignPathQuestions.length; j++) {
      DesignPathQuestions[j].evaluator(selected[j], tally);
    }

    // dump the hash into an array.
    var sortedTally = [];
    angular.forEach(tally, function (value, key) {
      sortedTally.push({
        key: key,
        value: value
      });
    });

    // create a custom comparator for sorting the tally.
    var compareTally = function (a, b) {
      if (a.value > b.value)
         return -1;
      if (a.value < b.value)
        return 1;
      return 0;
    };

    // use the custom compatator to sort.
    sortedTally.sort(compareTally);

    return sortedTally;
  };

  return quiz;

}]);
