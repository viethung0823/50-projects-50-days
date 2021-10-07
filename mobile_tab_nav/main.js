const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgArr = [
  "https://images.unsplash.com/photo-1632054633095-fe761b9237bc?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1632077622353-daeef65ef114?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1631887274354-11b56f40ce24?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1632060129703-809847a2bc1d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
];

const content = $(".content>img");
const navItems = $$("li>a")
content.src = imgArr[0]


navItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    removeLastActive()
    item.classList.add("active")
    content.src = imgArr[i]
  })
});

function removeLastActive() {
  navItems.forEach(item => item.classList.remove('active'))
}