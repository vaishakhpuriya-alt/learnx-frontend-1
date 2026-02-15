const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in browser?",
    options: ["Java", "C++", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "HTML stands for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark",
      "None"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which is a database?",
    options: ["MySQL", "HTML", "CSS", "React"],
    answer: "MySQL"
  }
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let answered = false;

const startBtn = document.getElementById("startBtn");
const usernameInput = document.getElementById("username");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const nextBtn = document.getElementById("nextBtn");
const resultText = document.getElementById("resultText");
const progress = document.getElementById("progress");

startBtn.addEventListener("click", () => {
  userName = usernameInput.value.trim();

  if (userName === "") {
    alert("Please enter your name!");
    return;
  }

  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  loadQuestion();
});

function loadQuestion() {
  answered = false;

  const q = questions[currentQuestion];
  questionElement.textContent = q.question;

  optionButtons.forEach((button, index) => {
    button.textContent = q.options[index];
    button.classList.remove("correct", "wrong");
    button.disabled = false;
  });

  updateProgress();
}

optionButtons.forEach(button => {
  button.addEventListener("click", () => {

    if (answered) return; 
    answered = true;

    const correctAnswer = questions[currentQuestion].answer;

    if (button.textContent === correctAnswer) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");

      optionButtons.forEach(btn => {
        if (btn.textContent === correctAnswer) {
          btn.classList.add("correct");
        }
      });
    }

    optionButtons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
      nextQuestion();
    }, 1500);
  });
});

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultText.innerHTML = `
    🎉 <strong>${userName}</strong><br><br>
    Your Score: ${score} / ${questions.length}
  `;

  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

  leaderboard.push({
    name: userName,
    score: score
  });

  leaderboard.sort((a, b) => b.score - a.score);

  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  let quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];

  quizResults.push({
    name: userName,
    score: score,
    total: questions.length,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("quizResults", JSON.stringify(quizResults));

}

function updateProgress() {
  const percent = (currentQuestion / questions.length) * 100;
  progress.style.width = percent + "%";
}
