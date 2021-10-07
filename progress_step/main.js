const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const numSteps = $$("ul li");
const jumpPercent = 100 / numSteps.length;
const prevBtn = $(".btn.btn-prev");
const nextBtn = $(".btn.btn-next");
const progress = $(".progress");
let currentStep = 0;
let currentPercent = 0;

prevBtn.onclick = function () {
  numSteps[currentStep].classList.remove("active")
  if (currentStep === 0) {
    currentPercent = 0;
    progress.style.width = "0%";
  } else {
    currentStep--;
    currentPercent -= jumpPercent;
    console.log(currentStep)
    progress.style.width = `${currentPercent}` + "%";
  }
}

nextBtn.onclick = function () {
  numSteps[currentStep].classList.add("active");
  if (currentStep === numSteps.length -1) {
    currentPercent = 100;
    progress.style.width = "100%";
  } else {
    currentStep++;
    currentPercent += jumpPercent;
    console.log(currentStep)
    progress.style.width = `${currentPercent}` + "%";
  }
}