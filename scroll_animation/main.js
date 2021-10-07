const items = document.querySelectorAll(".item");
const triggerBottom = window.innerHeight - 20;

window.addEventListener("scroll", () => {
  items.forEach(item => {
    if (item.getBoundingClientRect().top < triggerBottom) {
      console.log(1);
      item.classList.add("item-show")
    } else {
      console.log(2);
      item.classList.remove("item-show")
    }
  });

})