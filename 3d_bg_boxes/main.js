const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playBtn = $("button");
const boxesElm = $(".boxes");

playBtn.addEventListener("click", () => {
  boxesElm.classList.toggle("box--l");
  if (boxesElm.classList.contains("box--l")) {
    boxesElm.innerHTML = "";
  } else {
    createBox();
  }
})

function createBox() {
  for (i = 0; i < 4; i++) {
    for (j = 0; j <4; j++) {
      const boxElm = document.createElement("div");
      boxElm.classList.add("box--m");
      boxElm.style.backgroundPosition = `-${j*105}px -${i*105 + 180}px `;
      boxesElm.appendChild(boxElm);
    }
;  }
}
