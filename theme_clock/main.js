const currentTime = document.querySelector(".real-time");
const currentDate = document.querySelector(".real-date");
const bodyElm = document.querySelector("body");
const toggleElm = document.querySelector("button");
const clockElm = document.querySelector(".clock");
const hourNeedle = document.querySelector(".hour");
const minuteNeedle = document.querySelector(".minute");
const secondNeedle = document.querySelector(".second");


toggleElm.addEventListener("click", () => {
  if (toggleElm.textContent === "Dark Mode") {
    toggleElm.textContent = "Light Mode"
  } else {
    toggleElm.textContent = "Dark Mode"
  }

  bodyElm.classList.toggle("dark")
  clockElm.classList.toggle("dark")
  toggleElm.classList.toggle("dark")
  hourNeedle.classList.toggle("dark")
  minuteNeedle.classList.toggle("dark")
  secondNeedle.classList.toggle("dark")
  currentTime.classList.toggle("dark")
  currentDate.classList.toggle("dark")
})

const setTime = function () {
const today = new Date();
var suffix = today.getHours() >= 12 ? "PM" : "AM";

  hourNeedle.style.transform = `rotate(${scale(today.getHours(), 0, 12, 0, 360)}deg)`;
  minuteNeedle.style.transform = `rotate(${scale(today.getMinutes(), 0, 60, 0, 360)}deg)`;
  secondNeedle.style.transform = `rotate(${scale(today.getSeconds(), 0, 60, 0, 360)}deg)`;

  currentTime.textContent = today.getHours() + " : " + today.getMinutes() + ` ${suffix}`;
  currentDate.textContent = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
}


const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
setInterval(setTime, 1000)