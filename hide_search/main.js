const searchBtn = document.querySelector(".btn");
const searchBar = document.querySelector(".container>input");
let flag = true;


searchBtn.addEventListener("click", () => {
  if (flag) {
    flag = false;
    searchBar.style.width = 0;
  } else {
    flag = true;
    searchBar.style.width = 200 +"px";
  }
})