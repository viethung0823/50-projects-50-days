const keyElm = document.querySelector("#key>.content");
const keyCodeElm = document.querySelector("#key-code>.content");
const codeElm = document.querySelector("#code>.content");

document.addEventListener("keydown", display);

function display(e) {
  keyElm.textContent = e.key;
  keyCodeElm.textContent = e.keyCode;
  codeElm.textContent = e.code; 
}