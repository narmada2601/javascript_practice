const quizData=[{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {

  
   question:"which of the following are closures in javascript",
  a:"Variables",
  b:"functions",
  c:"objects",
  d:"all the above",
  correct: "d",
  },
  {
    question:"which of the following are closures in javascript",
  a:"Node",
  b:"vue",
  c:"React",
  d:"cassandra",
   correct: "d",
  }
]
const quiz=document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const op1=document.getElementById("text1");
const op2=document.getElementById("text2");
const op3=document.getElementById("text3");
const op4=document.getElementById("text4");
const submitButton=document.getElementById("submit");

let currentQuiz=0;
let score=0;
const deselectAnswers = () => {
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].checked = false;
  }
};
const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};
const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  text1.innerText = currentQuizData.a;
  text2.innerText = currentQuizData.b;
  text3.innerText = currentQuizData.c;
  text4.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        ` 
  }
}
  });