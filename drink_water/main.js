const smallGlasses = document.querySelectorAll(".glass--s");
const bigGlass = document.querySelector(".glass--l");
const percent = document.querySelector(".percent");
const remainElm = document.querySelector(".remained");


let percentStep = Math.round(100 / smallGlasses.length * 10) / 10;
let root = document.documentElement;
let lastClick = 0;

for (let i = 0; i < smallGlasses.length; i++) {
  smallGlasses[i].addEventListener("click", () => {
    fill_small_glass(i);

    fill_big_glass(counterFill());

  })
}

const fill_small_glass = function (index) {
  if (lastClick === index) {
    smallGlasses[index].classList.toggle("fill")
  } else {
    for (let j = 0; j <= index; j++) {
      smallGlasses[j].classList.add("fill")
    }
    for (let k = smallGlasses.length - 1; k > index; k--) {
      smallGlasses[k].classList.remove("fill")
    }
  }
  lastClick = index;
}

const counterFill = function() {
  let countFill = 0;
  for (let i = 0; i < smallGlasses.length; i++) {
    if (smallGlasses[i].classList.contains("fill")) {
      countFill++;
    }
  }
  console.log(countFill)
  return countFill;
}

const fill_big_glass = function (value) {
  let remain = ((smallGlasses.length - value) * percentStep * 2 /100);
  console.log(remain)
  if (smallGlasses[0].classList.contains("fill")) {
    bigGlass.classList.add("fill")
  } else {
    bigGlass.classList.remove("fill")
  }

  if (value === smallGlasses.length) {
    remainElm.classList.add("hide")
  } else {
    remainElm.classList.remove("hide")
  }

  root.style.setProperty('--percentHeight', (value * percentStep) + "%");
  percent.textContent = (value * percentStep) + "%";
  remainElm.innerHTML = `${remain}L<span>Remained</span>`.split("").join("")
}