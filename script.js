let timerEl = document.querySelector(".timer");
let questionEl = document.querySelector("#question");
const startEl = document.querySelector("#start-game");
let endgameEl = document.querySelector("#end-game");
let scoreEl = document.querySelector("#score");
let choices = document.querySelector(".choices");
let form = document.querySelector("#form-example");
let timer = 30;
let interval;
let questionIndex = 0;
let choice1 = document.querySelector("#choices1");
let choice2 = document.querySelector("#choices2");
let choice3 = document.querySelector("#choices3");
let choice4 = document.querySelector("#choices4");
let answerListEl = document.querySelector("#answerList");
let answerKey = [];
let nameEl = document.querySelector("#name");
let input = document.querySelector("input");
let submit = document.getElementById("submit");
let outputEl = document.querySelector("#output");
// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

let highScore = [
  {
    username: "score",
  },
];

function startTimer() {
  // adds display none to startEl
  startEl.classList.add("hide");
  //  removes display none to
  questionEl.classList.remove("hide");

  interval = setInterval(function () {
    if (timer <= 0) {
      timer = 0;
      endGame();
    } else {
      timer--;
    }
    timerEl.textContent = timer;
  }, 1000);

  startQuiz();
}

// let  localStorage.setItem("myCat", "Tom");

function startQuiz() {
  let questionDiv = document.getElementById("question");

  questionDiv.textContent = questions[questionIndex].title;
  choice1.textContent = questions[questionIndex].choices[0];
  choice2.textContent = questions[questionIndex].choices[1];
  choice3.textContent = questions[questionIndex].choices[2];
  choice4.textContent = questions[questionIndex].choices[3];
}

function endGame() {
  clearInterval(interval);
  endgameEl.classList.remove("hide");
  answerListEl.classList.add("hide");
  questionEl.classList.add("hide");
  timerEl.textContent = "";
  scoreEl.textContent = timer;
  form.classList.remove("hide");
}

// function playerForm() {
//   startEl.classList.add("hide");
//   questionEl.classList.add("hide");
//   form.classList.remove("hide");
// }

answerListEl.addEventListener("click", (event) => {
  console.log(questions[questionIndex].answer);
  if (event.target.textContent !== questions[questionIndex].answer) {
    timer = timer - 10;
  }
  questionIndex++;
  if (questionIndex > questions.length - 1) {
    endGame();
    // playerForm();
  } else {
    startQuiz();
  }
});

function addNameHighScore() {
  localStorage.setItem("keyName", nameEl.value);
  outputEl.innerHTML = localStorage.getItem("keyName");
}

// function secondFunction() {
//   localStorage.setItem("keyName2", scoreEl.value);
//   outputEl.innerHTML = localStorage.getItem("keyName2");
// }

submit.addEventListener("click", addNameHighScore);

// submit.addEventListener("click", secondFunction);
//Need to grab the value of the input

startEl.addEventListener("click", startTimer);

// createPromptModule;
