const loading = document.querySelector("#loading");
window.addEventListener("load", () => {
  loading.style.display = "none";
});

window.addEventListener("scroll", () => {
  console.log("스크롤함");
});
