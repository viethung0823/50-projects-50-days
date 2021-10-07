const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const progressElm = $(".progress")
const commentElm = $(".comment");
const avatarElm = $("img");
const nameElm = $(".name");

let currentPercent = 0;
let urlAPI = "https://testimonialapi.toolcarton.com/api/";
let currentUserIndex = 1;

async function getData(urlAPI) {
  const res = await fetch(urlAPI);
  const data = await res.json();
  loadData(data);
}

function loadData(user) {
  nameElm.textContent = user.name;
  commentElm.textContent = user.message;
  avatarElm.src = user.avatar;
}

function loadPercent() {
  currentPercent++;
  progressElm.style.width = `${currentPercent}%`;
  if (currentPercent === 100) {
    if(currentUserIndex > 9) {
      currentUserIndex = 1;
    }
    currentUserIndex++;
    currentPercent = 0;
    getData(urlAPI + currentUserIndex)
    clearInterval(percentInterval);
    percentInterval = setInterval(loadPercent, 100);
  }
}

var percentInterval = setInterval(loadPercent, 100);

getData(urlAPI + currentUserIndex);