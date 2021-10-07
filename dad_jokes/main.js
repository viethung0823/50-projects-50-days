const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const mockApi = "http://localhost:3000/users";

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const res = await fetch(mockApi)

  const data = await res.json()

  jokeEl.innerHTML = data[1].name

}

// USING .then()
// function generateJoke() {
//   fetch(mockApi)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data[0].name;
//     })
// }
