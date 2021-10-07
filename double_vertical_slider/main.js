const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const sliderLeft = $(".slider_left");
const sliderRight = $(".slider_right");
const prevBtn = $(".controls>button:first-child");
const nextBtn = $(".controls>button:last-child");

const totalSlides = $$(".slider_left>div").length;
let currentSlide = 0;
let y = 0;

sliderRight.style.transform = `translateY(${-300+y}%)`;

prevBtn.addEventListener("click", () => changeSlide("prev"));
nextBtn.addEventListener("click", () => changeSlide("next"));

const changeSlide = function (dir) {
  if (dir === "prev") {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
      y = 100 * (totalSlides - 1);
    } else {
      y -= 100;
    }
  } else if (dir === "next") {
    currentSlide++;
    if (currentSlide > totalSlides - 1) {
      currentSlide = 0;
      y = 0;
    } else {
      y += 100;
    }
  }

  sliderRight.style.transform = `translateY(${-300+y}%)`;
  sliderLeft.style.transform = `translateY(-${y}%)`;
}