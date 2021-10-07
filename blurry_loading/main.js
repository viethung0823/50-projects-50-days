const main = document.getElementsByTagName("body")[0];
const loadMessage = document.getElementsByTagName("h1")[0];

let load = 0;

document.addEventListener("DOMContentLoaded", () => {
  let stop = setInterval(() => {
    load++;
    if (load > 99) {
      loadMessage.remove()
      clearInterval(stop)
    }
    loadMessage.innerText = `Loading ${load}%`;
  }, 60)

  main.style.backdropFilter = "unset";
});

