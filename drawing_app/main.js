const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const canvasElm = $("#draw-window");
const decreaseElm = $(".decrease");
const increaseElm = $(".increase");
const sizeElm = $(".current-size");
const colorElm = $(".color");
const clearElm = $(".clear");

let ctx = canvasElm.getContext("2d");
let current_size = 5;
let isDrawing = false;


sizeElm.textContent = current_size;

decreaseElm.addEventListener("click", () => {
  current_size--;
  if (current_size < 0) {
    current_size = 0;
  }
  sizeElm.textContent = current_size;
  ctx.lineWidth = current_size;
})

increaseElm.addEventListener("click", () => {
  current_size++;
  sizeElm.textContent = current_size;
  ctx.lineWidth = current_size;
})

colorElm.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
})

clearElm.addEventListener('click', () => ctx.clearRect(0, 0, canvasElm.width, canvasElm.height))


const start_drawing = function (e) {
  isDrawing = true;
  ctx.beginPath();
}

const drawing = function (e) {
  if (isDrawing) {
    var x = e.clientX - this.offsetLeft;
    var y = e.clientY - this.offsetTop;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

const finish_drawing = function () {
  isDrawing = false;
}

canvasElm.addEventListener("mousedown", start_drawing);
canvasElm.addEventListener("mousemove", drawing);
canvasElm.addEventListener("mouseup", finish_drawing);