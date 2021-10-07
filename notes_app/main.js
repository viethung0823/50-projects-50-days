const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createBtn = $(".create_btn");
const noteContainer = $(".note_container");

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
  notes.forEach(note => createNote("",note))
}   

createBtn.addEventListener("click", createNote);

function createNote(e,text = '') {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.innerHTML = `
    <div class = "top_bar">
      <i class = "fas fa-edit btn edit_btn"> </i> 
      <i class = "fas fa-trash-alt btn remove_btn"> </i> 
    </div> 
    <textarea name = "" id = "text_note" cols = "30" rows = "10" ></textarea>
  `;

  noteContainer.appendChild(newNote);

  const removeBtn = newNote.querySelector(".remove_btn");
  const editBtn = newNote.querySelector(".edit_btn");
  const textArea = newNote.querySelector('textarea')

  if (text) {
    textArea.innerText = text;
  }
  
  textArea.addEventListener('input', () => {
    updateLS()
  })

  removeBtn.addEventListener("click", () => {
    newNote.remove();
    updateLS()
  })

  editBtn.addEventListener("click", () => {
    editBtn.classList.toggle("disable_edit");
    newNote.lastElementChild.style.cursor = "initial";
    newNote.lastElementChild.toggleAttribute("readonly");
  })
}

function updateLS() {
  const notesText = document.querySelectorAll('textarea')

  const notes = []

  notesText.forEach(note => notes.push(note.value))

  localStorage.setItem('notes', JSON.stringify(notes))
}