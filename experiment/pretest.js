
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "High amount of Dissolved Oxygen in a lake indicate  ",
      answers: {
        a: "Excessive aquatic plant or algae blooms",
        b: "Better water quality",
        c: "High turbidity",
        d: "Less water quality"
      },
      correctAnswer: "b"
    },
    {
      question: "If sample water does not contain enough microorganism then what needed to be done ",
      answers: {
        a: "Seeding the sample",
        b: "Boiling the sample",
        c: "Treating it with alkaline solution",
        d: "All of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Why is the Concentrated Sulphuric acid added to the sample after precipitates settle down? ",
      answers: {
        a: "To neutralize alkaline iodide-azide solution",
        b: "For dissolution of precipitate",
        c: "To prevent escape of iodide ions from solution for titration",
        d: "None of these"
      },
      correctAnswer: "c"
    },
    {
        question: "According to drinking water specification provided by IS 10500 (2012), what should be range of DO of drinking water ",
        answers: {
          a: "Greater than 2mg/l",
          b: "Less than 1mg/l",
          c: "Greater than 1mg/l",
          d: "None of the above"
        },
        correctAnswer: "b"
      },
    {
        question: "The method used to measure Dissolved Oxygen in this experiment is ",
    answers: {
          a: "Mohr's method",
          b: "EDTA method",
          c: "Winkler's method",
          d: "Titrimetric method"
        },
        correctAnswer: "c"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
