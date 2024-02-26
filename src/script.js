const adviceNumEl = document.getElementById("advice-number");
const adviceTextEl = document.getElementById("advice-text");
const adviceGeneratorBtn = document.getElementById("advice-generator-btn");

function renderAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumEl.textContent = "Advice #" + data.slip.id;
      adviceTextEl.textContent = data.slip.advice;
    });
}
renderAdvice();
adviceGeneratorBtn.addEventListener("click", renderAdvice);
