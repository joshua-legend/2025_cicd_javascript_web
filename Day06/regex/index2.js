const news = document.querySelector("#news");
const word = document.querySelector("#word");
const hasWord = document.querySelector("#hasWord");
const count = document.querySelector("#count");

word.addEventListener("input", () => {
  const valueRegex = new RegExp(`\\b${word.value}\\b`, "gi");
  hasWord.innerText = valueRegex.test(news.value) ? "있음" : "없음";
  count.innerText = `${news.value.match(valueRegex).length}개`;
});
