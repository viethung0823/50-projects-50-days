const prevBtn = document.querySelector(".fa-caret-left");
const nextBtn = document.querySelector(".fa-caret-right");
const back_ground = document.querySelector("body");
const slider = document.querySelector(".slider");

const imgLib = [
  "https://images.unsplash.com/photo-1631373797948-2f1e40476b34?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
]

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgLib.length - 1;
  }
  updateBackground(currentIndex);
})

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= imgLib.length) {
    currentIndex = 0;
  }
  updateBackground(currentIndex);
})

const updateBackground = function (index) {
  slider.style.backgroundImage = "url(" + `${imgLib[index]}` + ")";
  back_ground.style.backgroundImage = "url(" + `${imgLib[index]}` + ")";
}