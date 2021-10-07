const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.querySelector(".main");
const bgImg = document.querySelector(".movie__img");
const form = document.querySelector("form")
const search = document.querySelector("input")


getData(API_URL);

async function getData(api) {
  const res = await fetch(api);
  const data = await res.json()

  renderMovie(data.results)
}

const renderMovie = function (movies) {

  main.innerHTML = "";

  movies.forEach(movie => {
    const {
      title,
      vote_average,
      overview,
      poster_path,
    } = movie;
    const htmls = `
       <img src = "${IMG_PATH + poster_path}" class = "movie__img">
       <h3 class = "movie__name"> ${title} </h3> 
       <p class = "movie__score" > ${vote_average} </p>
        <div class = "movie__overview">
         <h4> Overview </h4> 
         <p class = "detail">${overview} </p> 
         </div>
      `;
    const movieEle = document.createElement("div");
    movieEle.classList.add("movie");
    movieEle.innerHTML = htmls.split("").join("");
    
    main.appendChild(movieEle);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getData(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})