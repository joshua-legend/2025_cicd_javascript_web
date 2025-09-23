const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const num = document.querySelector("#num");
minus.addEventListener("click", () => {
  num.innerText = +num.innerText - 1;
  if (+num.innerText > 5) {
  }
});
plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  if (+num.innerText > 5) {
    plus.classList.add("overFive");
  } else {
    plus.classList.remove("overFive");
  }
});
