const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const urlAPI = "https://opentdb.com/api.php?amount=4&category=18&type=multiple";
const resultElm = $(".result");
const questionElm = $(".question");
const answerElm = $(".answers");
const answerA = $("#a");
const answerB = $("#b");
const answerC = $("#c");
const answerD = $("#d");
const labelAnswerA = $("label[for='a']")
const labelAnswerB = $("label[for='b']")
const labelAnswerC = $("label[for='c']")
const labelAnswerD = $("label[for='d']")
const submitBtn = $("button");
const urChoice = $$("input[name='answer']");

let quizData;
let i = 0;
let correctAnswer = 0;

async function getData() {
  const res = await fetch(urlAPI);
  const data = await res.json();
  quizData = data.results;
  renderQuiz(quizData, i);
}

function renderQuiz(quizData, i) {
  const {
    question,
    correct_answer,
    incorrect_answers
  } = quizData[i];
  const temp = [];
  temp.push(correct_answer, incorrect_answers)
  const answerArr = temp.flat();
  const randomIndex = swapChoices();

  urChoice.forEach(element => {
    element.checked = false;
  });

  questionElm.textContent = question;
  answerA.value = answerArr[randomIndex[0]];
  answerB.value = answerArr[randomIndex[1]];
  answerC.value = answerArr[randomIndex[2]];
  answerD.value = answerArr[randomIndex[3]];
  labelAnswerA.textContent = answerArr[randomIndex[0]];
  labelAnswerB.textContent = answerArr[randomIndex[1]];
  labelAnswerC.textContent = answerArr[randomIndex[2]];
  labelAnswerD.textContent = answerArr[randomIndex[3]];

  checkResult(correct_answer);
}

function swapChoices() {
  const array = [0, 1, 2, 3];
  var i = array.length;
  var j = 0;
  var temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function showResult() {
  questionElm.classList.add("hide");
  answerElm.classList.add("hide");
  resultElm.classList.remove("hide");
  submitBtn.textContent = "Reload"
  resultElm.textContent = `You answered ${correctAnswer}/4 questions correctly`
}

function hideResult() {
  questionElm.classList.remove("hide");
  answerElm.classList.remove("hide");
  resultElm.classList.add("hide");
  submitBtn.textContent = "Submit"
}

function checkResult(correct_answer) {
  urChoice.forEach(element => {
    element.addEventListener("click", (e) => {
      if (element.value === correct_answer) {
        correctAnswer++;
      }
    })
  });
}

submitBtn.addEventListener("click", () => {
  if (questionElm.classList.contains("hide")) {
    location.reload();
  }
  ++i;
  if (i > quizData.length - 1) {
    i = 0
    showResult()
  } else {
    hideResult()
    renderQuiz(quizData, i)
  }
})

getData()