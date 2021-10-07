const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const urlAPI = "https://picsum.photos/v2/list?page=2&limit=16";
const containerElm = $(".container");

async function getData() {
  const res = await fetch(urlAPI);
  const data = await res.json();
  loadImages(data);
}

function loadImages(imgs) {
  imgs.forEach(img => {
    const imgElm = document.createElement("div");
    imgElm.style.backgroundImage = `url(${img.download_url})`;
    containerElm.appendChild(imgElm)
  });
}

getData();