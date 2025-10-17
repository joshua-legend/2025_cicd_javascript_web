const input = document.querySelector("#input");
const saveBtn = document.querySelector("#saveBtn");
const logBtn = document.querySelector("#logBtn");

saveBtn.addEventListener("click", () => {
  if (localStorage.getItem("candylist")) {
    const list = localStorage.getItem("candylist");
    localStorage.setItem("candylist", list + "," + input.value);
    input.value = "";
  } else {
    localStorage.setItem("candylist", input.value);
    input.value = "";
  }
});

logBtn.addEventListener("click", () => {
  const list = localStorage.getItem("candylist");
  console.log(list);
});
