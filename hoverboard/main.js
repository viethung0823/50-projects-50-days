const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$(".col")
let root = document.documentElement;


items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = randomColor();
    item.classList.add("on");
  })

  item.addEventListener("mouseleave", () => {
    setTimeout(() => {
      item.style.backgroundColor = "rgb(24, 23, 23)";
       item.classList.remove("on");
    }, 500)
  })
});

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  const redColor = randomNumber();
  const greenColor = randomNumber();
  const blueColor = randomNumber();
  return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}