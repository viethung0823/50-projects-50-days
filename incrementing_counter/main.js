const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = counter.textContent
  const increment = target / 230;
  let current = 0;
  

  const updateCounter = () => {
    current += increment
    if (current < target) {
      counter.innerText = Math.ceil(current);
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
})