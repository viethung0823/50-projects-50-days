const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const showBtn = $("button");
const parentElm = $(".toast_container");
let counter = 0;

showBtn.addEventListener("click", () => {
  counter++;
  const toastElm = document.createElement("div");
  toastElm.classList.add("toast_noti");
  toastElm.innerText = `Message ${counter}`;
  parentElm.appendChild(toastElm)
  setTimeout(() => {
    toastElm.remove();
  }, 2000);
})