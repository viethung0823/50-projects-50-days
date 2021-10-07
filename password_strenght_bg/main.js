const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const overlayElm = $(".overlay");
const passwordInput = $("#password");

passwordInput.addEventListener("input", ()=> {
  let passwordLength = passwordInput.value.length;
  overlayElm.style.filter = `blur(${10-passwordLength}px)`;
})
