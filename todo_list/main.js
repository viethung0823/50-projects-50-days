const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const inputElm = $("input");
const listElm = $(".list");

inputElm.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (inputElm.value === "") return false;
    const noteElm = document.createElement("li");
    noteElm.innerHTML =
      `
    <p class="note">${inputElm.value}</p>
         <div class="controls">
           <button id ="done_btn">
             <ion-icon name="checkmark-done-outline"></ion-icon>
           </button>
           <button id="remove_btn">
             <ion-icon name="close-outline"></ion-icon>
           </button>
         </div>
    `
    listElm.prepend(noteElm); 
    inputElm.value = "";
  }
  activeButton();
})

function activeButton() {
 const doneBtn = $$("#done_btn");
 const removeBtn = $$("#remove_btn");

 doneBtn.forEach((element) => {
   element.addEventListener("click", () => {
     element.parentNode.previousElementSibling.classList.toggle("done")
     if (element.parentNode.previousElementSibling.classList.contains("done")) {
       listElm.appendChild(element.parentNode.parentNode)
     } else {
       listElm.prepend(element.parentNode.parentNode)
     }
   })
 });

 removeBtn.forEach(element => {
   element.addEventListener("click", () => {
     element.parentNode.parentNode.remove();
   })
 });
}