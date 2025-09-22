// 자바스크립트로 버튼을 만들거임
// 기본: 5개// 참조: obj,func,arr + Document[html], Element[tag]

const btn = document.createElement("button");
btn.innerText = "월요일 ㅅㄱ";
btn.style.color = "pink";
document.body.appendChild(btn);

// div태그로 내일은 화요일이다! 만드셈
const tomorrow = document.createElement("div");
tomorrow.innerText = "내일은 화요일";
document.body.appendChild(tomorrow);

// a태그 만들어서 쿠팡 이동 내용 만드셈
const coupang = document.createElement("a");
coupang.innerText = "쿠팡 이동";
coupang.href = "www.naver.com";
document.body.appendChild(coupang);
