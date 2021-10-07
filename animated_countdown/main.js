const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const goElm = $("h1");
const count_downElm = $(".count_down");
const replayBtn = $("button");
const counter = $("p");

let count = 3;

replayBtn.addEventListener("click", newNumber)

function newNumber() {
  count_downElm.classList.remove("hide");
  replayBtn.classList.add("hide");
  goElm.classList.add("hide")


  const number = document.createElement("p");
  number.textContent = count;
  count_downElm.appendChild(number);
  number.addEventListener("animationend", () => {
    number.remove();
    count--;
    if (count >= 0) {
      newNumber();
    } else {
      count = 3;
      replayBtn.classList.remove("hide");
      goElm.classList.remove("hide");
      count_downElm.classList.add("hide");
    }
  })
}

newNumber();