const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const backBtn = $("#back_btn");
const sendBtn = $("#send_btn");
const feedbackUI = $(".feedback");
const thanksUI = $(".thanks");
const feelings = $$(".feeling");
let urFeedback;


backBtn.addEventListener("click", () => {
  thanksUI.classList.add("hide")
  feedbackUI.classList.remove("hide")
})

sendBtn.addEventListener("click", () => {
  feedbackUI.classList.add("hide")
  thanksUI.classList.remove("hide")
})


feelings.forEach(feeling => {
  feeling.addEventListener("click", () => {
    feelings.forEach(feeling => {
      feeling.classList.remove("active")
    })
    feeling.classList.add("active");

    let urEmojiFb = feeling.childNodes[1].textContent;
    let urNameFb = feeling.childNodes[3].textContent;
    updateFeedback(urNameFb, urEmojiFb);
  })
});

function updateFeedback(name, emoji) {
  const nameFb = $(".ur_feedback>.name");
  const emojiFb = $(".ur_feedback>.emoji");
  nameFb.textContent = `Feedback: ${name}`;
  emojiFb.textContent = emoji;
}