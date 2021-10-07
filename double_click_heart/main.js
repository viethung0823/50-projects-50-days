const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgElm = $("img");
const counterElm =$("p");
const parentElm = $(".image");
const leftOffset = parentElm.offsetLeft
const topOffset = parentElm.offsetTop
let count = 0;


imgElm.addEventListener("dblclick", (e) => {
  const x = e.clientX
  const y = e.clientY
  count++;

  counterElm.textContent = `You liked it ${count} times`
  const heart = document.createElement("div")
  heart.classList.add("heart");
  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside-32}px`
  parentElm.appendChild(heart)
  setTimeout(() => {
    heart.remove();
  }, 800);
})