const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputElms = $$("input");

inputElms.forEach((input, idx) => {
  input.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      inputElms[idx].value = ''
      setTimeout(() => inputElms[idx + 1].focus(), 10)
    } else if (e.key === 'Backspace') {
      setTimeout(() => inputElms[idx - 1].focus(), 10)
    }
  })
})