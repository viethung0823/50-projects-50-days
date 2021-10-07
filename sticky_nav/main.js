const root = document.documentElement;
var h = document.body.clientHeight;


window.addEventListener("scroll", (e) => {
  var m = window.scrollY;

  if (m > (h / 4)) {
    root.style.setProperty('--bgColor', "#fff");
    root.style.setProperty('--fontColor', "#000");
    root.style.setProperty('--headerSize', "50" + "px");
  } else {
     root.style.setProperty('--bgColor', "#222");
     root.style.setProperty('--fontColor', "#fff");
     root.style.setProperty('--headerSize', "70" + "px");
  }

})