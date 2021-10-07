const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playBtn = $("button");
const welcomePage = $(".welcome");
const choosePage = $(".choose");
const playingPage = $(".playing");
const timeElm = $("#time");
const scoreElm = $("#score");
const playgroundElm = $(".playground");
const insectsElm = $$(".insect");

let score = 0;

playBtn.addEventListener("click", () => {
  welcomePage.classList.add("hide");
  choosePage.classList.remove("hide");
})

insectsElm.forEach(insect => {
  insect.addEventListener("click", () => {
    choosePage.classList.add("hide");
    playingPage.classList.remove("hide");
    displayInsect(insect.childNodes[3].src)
    startTiming();
  })
});

function startTiming() {
  let second = 0;
  let minute = 0;

  const start = setInterval(() => {
    second++;
    second = (second).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    minute = (minute).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    if (second > 59) {
      second = (0).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });;
      minute++;
      minute = (minute).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    }
    if (minute >= 2) {
      alert("Time's Up");
      clearInterval(start);
      location.reload();
    }
    timeElm.textContent = `Time:  ${minute}:${second}`
  }, 1000);
}

function displayInsect(srcImg) {
  const x = setInterval(() => {
    const targetsElm = $$(".target");
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const insectElm = document.createElement("img");
    insectElm.src = srcImg;
    insectElm.classList.add("target");
    insectElm.style.left = `${x}%`;
    insectElm.style.top = `${y}%`;
 
    playgroundElm.appendChild(insectElm);
    insectElm.addEventListener("click", ()=> {
         insectElm.classList.add("small");
         score++;
         scoreElm.textContent = `Score: ${score}`;
         setTimeout(()=> {
           insectElm.remove();
         }, 500);
    })

  
  }, 1000)
}