const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const labelElm = $("label");
const inputElm = $("input");

inputElm.addEventListener("input", ()=> {
  labelElm.innerText = inputElm.value
  labelElm.style.left = inputElm.value - 10 + 'px'
})
