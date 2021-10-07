const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const APIURL = 'https://api.github.com/users/';
const formElm = $("form");
const inputElm = $("input");
const userFormElm = $(".user_form");

async function getUser(username) {
  try {
    const {
      data
    } = await axios(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status == 404) {
      console.log(err)
    }
  }
}

async function getRepos(username) {
  try {
    const {
      data
    } = await axios(APIURL + username + '/repos?sort=created')

    addReposToCard(data)
  } catch (err) {
    console.log(err)
  }
}

const createUserCard = function (objData) {
  const htmls = `
  <div class="avatar">
  <img src="${objData.avatar_url}" alt=${objData.name}>
  </div>
 <div class="user_info">
  <h3 class = "user_name"> ${objData.name} </h3>
  <p class = "user_bio"> ${objData.bio} </p>
  <div class="numbers_container">
    <div>
      <div class="stat">${objData.followers}</div>
      <p class="text">Followers</p>
    </div>
    <div>
      <div class="stat">${objData.following}</div>
      <p class="text">Following</p>
    </div>
    <div>
      <div class="stat">${objData.public_repos}</div>
      <p class="text">Repos</p>
    </div>
  </div>
  <div class="repos_container">
  </div>
</div>
  `;
  userFormElm.style.padding = "3vw";
  userFormElm.innerHTML = htmls;
}


const addReposToCard = function (objData) {
      const reposEl = $(".repos_container");
      objData
        .slice(0, 5)
        .forEach(repo => {
          const repoEl = document.createElement('a')
          repoEl.classList.add('repo')
          repoEl.href = repo.html_url
          repoEl.target = '_blank'
          repoEl.innerText = repo.name

          reposEl.appendChild(repoEl)
        })
}

formElm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = inputElm.value

  if (username) {
    getUser(username)
    inputElm.value = ''
  }
})