const d = new Date();
const e = Math.PI;
const f = new RegExp("hello"); // 정규표현식
console.log(f.test("hello world!"));
console.log(f.test("bye bye"));

const g = new RegExp("cat");
g.test("my cat"); // true
g.test("your cat"); // true
g.test("my dog"); // false
g.test("my catgory"); //true

const h = /cat/; // cat를 포함만 하면됨
const i = /^cat/; // cat로 시작을 해야함
const j = /cat$/; // cat로 끝나야함
const koreaDays = ["일", "월", "화"];

const a = new Date();
const date = a.getDate(); // 일 (1~31)
const day = a.getDay(); // 요일 (0=일,1=월,...6=토)
const hour = a.getHours(); // 시 (0~23)
const month = a.getMonth(); // 월 (0~11)
const iso = a.toISOString(); // ISO 8601 문자열 (UTC 기준)
const locale = a.toLocaleString(); // 사용자의 로컬 설정에 맞는 날짜+시간 문자열
const date1 = a.toLocaleDateString(); // 로컬 날짜 부분만
const time = a.toLocaleTimeString(); // 로컬 시간 부분만

Math.round(); // 반올림
Math.floor(); // 내림
Math.ceil(); // 올림
Math.random(); // 0 ~ 1

// min~max까지 정수를 돌려주는 랜덤 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
