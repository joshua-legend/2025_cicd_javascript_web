const input = document.querySelector("#input");
const count = document.querySelector("#count");

input.addEventListener("input", (e) => {
  count.innerText = `${e.target.value.length}/5`;
});
