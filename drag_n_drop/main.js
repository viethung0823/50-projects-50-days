const dragItem = document.querySelector("img");
const dragTarget = document.querySelectorAll(".container > *")

dragTarget.forEach(targetEle => {

  targetEle.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.classList.add("over");
  })

  targetEle.addEventListener("dragleave", (e) => {
    e.target.classList.remove("over");
  })

  targetEle.addEventListener("drop", (e) => {
    e.target.classList.remove("over");

    const id = e.dataTransfer.getData('text/plain');
    const newDragItem = document.createElement("img")
    newDragItem.src = `${id}`;
    e.target.appendChild(newDragItem);
    newDragItem.addEventListener("dragend", (e) => {
      console.log(1)
      e.target.remove();
    })

  })

});

dragItem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
})
