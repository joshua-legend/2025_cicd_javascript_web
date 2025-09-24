const confirmBtn = document.querySelector("#confirm");
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("click", () => {
  confirmBtn.disabled = !checkbox.checked;
});
