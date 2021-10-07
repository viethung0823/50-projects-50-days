const navBtn = document.querySelector(".nav-toggle");
const parent = document.querySelector(".container");
navBtn.addEventListener("click", ()=>{
  parent.classList.toggle("show-nav");
})