var jsQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["terminal/bash", "console.log", "for loops", "JavaScript"],
    answer: "terminal/bash"
  },
  {
    title: "Arrays in JavaScript can be used to store",
    choices: ["booleans", "other arrays", "numbers and strings", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["parentheses", "quotes", "curly brackets", "commas"],
    answer: "quotes"
  }
];

var scoreStore = JSON.parse(localStorage.getItem("storingScoring")) || [];
var userScore = {name:"", score: 0}


var questionIndex = 0;
// have a function known as getQuestion, set id for each button, based upon current questionIndex - summon next question, 

function getQuestion() {
  var questionTitle = document.getElementById("questionTitle")
  var option1 = document.getElementById("option1")
  var option2 = document.getElementById("option2")
  var option3 = document.getElementById("option3")
  var option4 = document.getElementById("option4")
  questionTitle.textContent = jsQuestions [questionIndex].title
option1.textContent = jsQuestions[questionIndex].choices [0]
option2.textContent = jsQuestions[questionIndex].choices [1]
option3.textContent = jsQuestions[questionIndex].choices [2]
option4.textContent = jsQuestions[questionIndex].choices [3]
option1.addEventListener("click", getAnswer)
option2.addEventListener("click", getAnswer)
option3.addEventListener("click", getAnswer)
option4.addEventListener("click", getAnswer)
}


function getAnswer(event) {
var userChoice = event.target.innerHTML
if (userChoice === jsQuestions [questionIndex].answer) {
  alert("correct")
  userScore = userScore +25
  
} else {
  alert("incorrect")
  timeRemaining = timeRemaining -5;
}
questionIndex ++;
if (questionIndex < jsQuestions.length) {
  getQuestion()
} else {
  clearInterval(quizClock);
  alert("end")
}

}

function scoreSegment() {
  var inputName = document.createElement("input");
  inputName.setAttribute("class", "form-control form-text");
  inputName.setAttribute("placeholder", "Enter your name or initials...");

  var submitScore = document.createElement("button");
submitScore.setAttribute("class", "ml- 2 btn btn-primary");
submitScore.textContent = "Submit Score";

var scoreSubmission = document.getElementById("scoreContainer");
scoreSubmission.appendChild(inputName);
scoreSubmission.appendChild(submitScore);

submitScore.addEventListener("click", function(){
  userScore.name = inputName.value;
  userScore.score = timeRemaining;
  scoreStore.push(userScore);
  localStorage.setItem("storingScoring", JSON.stringify(scoreStore));
});
}







var timeRemaining = 30;
var clock = document.getElementById("timer")
var quizClock;
//begin button as a for loop
var beginButton = document.getElementById("startButton")

beginButton.addEventListener("click", function() {

  getQuestion()
//quizClock variable is the timer

 quizClock = setInterval (function(){
  if (timeRemaining===0){
    clearInterval(quizClock);
    clock.innerHTML = "Quiz Over";

  } else {
    clock.innerHTML = timeRemaining + "seconds remaining."
  }
  timeRemaining--;

  },1000);

})



function quizEnds() {
  questionIndex.textContent = "Congratulations! Your score is " + timeRemaining + score;
  var initials = prompt("Congratulations! Your score is " + timeRemaining + score + "Please enter your initials. ");
  console.log(initials)
  var userScore = initials + " " + timeRemaining;
  highscore.textContent = userScore;
  window.localStorage.setItem(scoreName);
}