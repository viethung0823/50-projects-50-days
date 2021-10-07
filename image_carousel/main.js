const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const prevBtn = $(".prev");
const nextBtn = $(".next");
const carousel = $(".carousel");
const length = $$(".carousel>div").length;

let currentIndex = 0;
let left = 0;


let interval = setInterval(() => {
  logicCurrentIndex();
  updateImg()
  currentIndex++;
  left -= 100;
}, 1000);


function resetInterval() {
  clearInterval(interval)
  interval = setInterval(() => {
    logicCurrentIndex();
    updateImg()
    currentIndex++;
    left -= 100;
  }, 1000)
}

function updateImg() {
  carousel.style.left = `${left}%`
}

function logicCurrentIndex() {
  if (currentIndex > length - 1) {
    currentIndex = 0;
    left = 0;
  }
  if (currentIndex < 0) {
    currentIndex = length - 1;
    left = -100 * (length - 1);
  }
}

prevBtn.addEventListener("click", () => {
  currentIndex--;
  left += 100;
  logicCurrentIndex()
  updateImg();
  resetInterval()
})

nextBtn.addEventListener("click", () => {
  currentIndex++;
  left -= 100;
  logicCurrentIndex()
  updateImg();
  resetInterval()
})