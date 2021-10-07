const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const urlAPI = "https://randomuser.me/api?results=50";
const searchBar = $("input");

const search_resultELM = $(".search_result");

getData()

async function getData() {
  const res = await fetch(urlAPI)
  const data = await res.json();
  renderUsers(data)
}

function renderUsers(data) {
  for (let i = 0; i < data.info.results; i++) {
    const avatar = data.results[i].picture.thumbnail;
    const name = data.results[i].name.first + data.results[i].name.last;
    const city = data.results[i].location.city;
    const userELm = document.createElement("div");
    userELm.classList.add("user");
    userELm.innerHTML =
      `
    <img src="${avatar}" alt="">
        <div class="info">
        <h4 class="name">${name}</h4>
          <p class="location">${city}</p>
          </div>
          `
    search_resultELM.appendChild(userELm);
  }
  const usersElm = $$(".user");
  activeSearch(usersElm);
}

function activeSearch(users) {

  searchBar.addEventListener("input", () => {
    users.forEach(user => {
      if (!user.innerText.toLowerCase().includes(searchBar.value)) {
        user.classList.add("hide")
      } else {
        user.classList.remove("hide");
      }
    });
  })

}