// const btn = document.createElement("button");
// btn.innerText = "테스트";
// btn.addEventListener("click", () => {
//   alert("전상워니");
// });
// document.body.appendChild(btn);

// div 태그 만들고
// 내용은 점메추 만들고
// 클릭하면 콘솔로그로 오늘의 점심메뉴는 마라탕입니다!

// 버튼 태그 만들고
// 안에 콜라 내용 넣고
// 클릭하면 콜라가 사이다로 변하도록하기
// const btn = document.createElement("button");
// btn.innerText = "coke";
// btn.addEventListener("click", () => {
//   btn.innerText = "cider";
// });
// document.body.appendChild(btn);

// 버튼 만들고
// 버튼 내용: 😶 <-> 😍
// const btn = document.createElement("button");
// btn.innerText = "😶";
// btn.addEventListener("click", () => {
//   btn.innerText = btn.innerText == "😶" ? "😍" : "😶";
// });
// document.body.appendChild(btn);

const btn = document.createElement("button");
btn.innerText = "✔";
btn.style.cssText = "background-color:white;padding:4px;border-radius:4px;border:1px solid #efefef;transition:all 0.5s";

btn.addEventListener("click", () => {
  btn.style.backgroundColor = btn.style.backgroundColor == "white" ? "skyblue" : "white";
});

document.body.appendChild(btn);
