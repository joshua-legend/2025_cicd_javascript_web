const pw = document.querySelector("#password");
const pwcheck = document.querySelector("#passwordCheck");
const btn = document.querySelector("#btn");

pw.addEventListener("input", () => {
  btn.disabled = pw.value != pwcheck.value;
});
pwcheck.addEventListener("input", () => {
  btn.disabled = pw.value != pwcheck.value;
});
