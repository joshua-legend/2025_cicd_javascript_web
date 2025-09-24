const capitalList = document.querySelector("#capitalList");
const capital = document.querySelector("#capital");
const desc = document.querySelector("#desc");

const data = [
  { nation: "England", capital: "London" },
  { nation: "Japan", capital: "Tokyo" },
  { nation: "France", capital: "Paris" },
  { nation: "Korea", capital: "Seoul" },
  { nation: "Newzealand", capital: "WellingTone" },
];

data.forEach((v) => {
  const newLi = document.createElement("li");
  newLi.innerText = v.capital;
  newLi.id = v.capital;
  newLi.addEventListener("click", () => {
    capital.innerText = v.capital;
    desc.innerText = `${v.capital}  is the capital city of ${v.nation}.`;
  });
  capitalList.appendChild(newLi);
});
