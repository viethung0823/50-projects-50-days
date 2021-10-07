const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const buttons = $$(".btn");
const good =$("#good_btn");
const cheap =$("#cheap_btn");
const fast =$("#fast_btn");


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (good.classList.contains("active") && cheap.classList.contains("active") && fast.classList.contains("active")) {
      
        if (good === btn) {
          fast.classList.remove("active");
        }

        if (cheap === btn) {
          good.classList.remove("active");
        }

        if (fast === btn) {
          cheap.classList.remove("active");
        }

    }
  })
});