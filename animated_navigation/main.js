const btnElm = document.querySelector(".btn");
const ulElm = document.querySelectorAll("ul");
const liElm = document.querySelectorAll("li");


btnElm.addEventListener("click", ()=> {
  ulElm.forEach(ul => {
    ul.classList.toggle("close")
  });

  liElm.forEach(li => {
    li.classList.toggle("close")
  });

  btnElm.classList.toggle("close")
})