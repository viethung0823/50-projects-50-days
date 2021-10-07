const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const textElm = $("p");
const controlBtn = $("input");
const textArr = textElm.innerText.split("");

let speed;
let newArr = [];
let i = 0;

const updateText = function () {
  if (i === textArr.length) {
    newArr = []
    i = 0;
  }
  newArr.push(textArr[i])
  textElm.innerText = newArr.join("");
  i++
}

let play = setInterval(updateText, 1100);

controlBtn.addEventListener("change", () => {
  speed = 310 - (controlBtn.value * 30);
  clearInterval(play)
  play = setInterval(updateText, speed)
})