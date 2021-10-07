const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const password = $(".password");
const copyBtn = $(".copy_btn");
const generateBtn = $(".generate_btn");
const lengthOption = $("#password_length");
const lowercaseOption = $("#password_lowercase");
const uppercaseOption = $("#password_uppercase");
const numberOption = $("#password_number");
const symbolOption = $("#password_symbol");

let minRange = 33;
let maxRange = 126;
let arrPass = [];
let randomCharNum;

function generatePass() {
  for (i = 0; i < lengthOption.value; i++) {
    arrPass.push(getRandomCharacter());
  }
  return arrPass.join("");
}

function getRandomCharacter() {
  randomCharNum = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

  if (!lowercaseOption.checked) {
    if (randomCharNum >= 97 && randomCharNum <= 122) getRandomCharacter();
  }

  if (!uppercaseOption.checked) {
    if (randomCharNum >= 58 && randomCharNum <= 90) getRandomCharacter();
  }

  if (!numberOption.checked) {
    if (randomCharNum >= 48 && randomCharNum <= 57) getRandomCharacter();
  }

  if (!symbolOption.checked) {
    if ((randomCharNum >= 33 && randomCharNum <= 47) || (randomCharNum >= 58 && randomCharNum <= 64) || (randomCharNum >= 91 && randomCharNum <= 96) || (randomCharNum >= 123 && randomCharNum <= 126)) getRandomCharacter();
  }

  return String.fromCharCode(randomCharNum);
}

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  arrPass = [];
  const newPass = generatePass();
  password.innerText = newPass;
})

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!password.innerText) {
    return
  }
  navigator.clipboard.writeText(password.innerText);
  alert("Copied password to clipboard: " + password.innerText);
})
