const time = document.querySelector("#time");
const date = new Date();
time.innerText = `현재시간:${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const date = new Date();
  time.innerText = `현재시간:${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`;
});
