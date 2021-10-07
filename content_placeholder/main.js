const card_img = document.querySelector('.card_img')
const card_title = document.querySelector('.card_title')
const card_description = document.querySelector('.card_description')
const avatar = document.querySelector('.avatar')
const name = document.querySelector('.name')
const time = document.querySelector('.time')


const animated_bgs = document.querySelectorAll('.placeholder_load')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  card_img.innerHTML =
    '<img src="https://images.unsplash.com/photo-1631559866079-74f89cc201d7?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="car image">'
  card_title.innerHTML = 'Lorem ipsum dolor sit amet'
  card_description.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  avatar.innerHTML =
    '<img src="https://uifaces.co/our-content/donated/n4Ngwvi7.jpg" alt="avatar">'
  name.innerHTML = 'John Doe'
  time.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
