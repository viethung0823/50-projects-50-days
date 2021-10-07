const ronaldo = document.querySelector("#item1");
const messi = document.querySelector("#item2");
let flag = 

ronaldo.addEventListener("mouseover", ()=> {
  console.log(1)
  ronaldo.style.flex = 3;
})

messi.addEventListener("mouseover", ()=> {
  console.log(2)
  messi.style.flex = 3;
})

ronaldo.addEventListener("mouseleave", () => {
  ronaldo.style.flex = 1;
})

messi.addEventListener("mouseleave", () => {
  messi.style.flex = 1;
})