const rocket = document.querySelector("#rocket");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let time = 4;
  let interval = setInterval(() => {
    rocket.innerHTML = `🚀 ${time}초전`;
    time = time - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    rocket.innerHTML = `💥`;
  }, 5000);
});
