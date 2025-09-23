const minus = document.createElement("button");
minus.innerText = "-";
const plus = document.createElement("button");
plus.innerText = "+";
const num = document.createElement("span");
num.innerText = "0";

plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});
minus.addEventListener("click", () => {
  num.innerText = +num.innerText == 0 ? 0 : +num.innerText - 1;
  num.style.color = +num.innerText > 10 ? "blue" : "black";
});

document.body.appendChild(minus);
document.body.appendChild(num);
document.body.appendChild(plus);
