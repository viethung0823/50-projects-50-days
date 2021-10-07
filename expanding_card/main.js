const cards = document.querySelectorAll(".card");
const background = document.getElementsByTagName("body")[0];
const regex = /[();]/g;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    let urlBackground = cards[i].getAttributeNode("style").value.replace("background-image: ", "").replace("url", "").replace(regex, "");
    cards[i].classList.toggle("active")
    background.style.backgroundImage = `url(${urlBackground})`;
    for (let j = 0; j < cards.length; j++) {
      if (i === j) {
        continue
      } else {
        if (cards[j].getAttributeNode("class").value === "card active") {
          cards[j].classList.remove("active")
        }
      }
    }
  })
}