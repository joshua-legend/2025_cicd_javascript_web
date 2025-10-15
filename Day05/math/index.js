const a = Math.abs(-10); // 10
const b = Math.PI; // 3.14
const c = Math.round(3.6); // 반올림
const d = Math.floor(3.6); // 내림
const e = Math.ceil(3.6); // 올림
const f = Math.random(); // 0~1 사이 아무숫자

// min~max까지 돌려주는 랜덤 함수
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// min~max까지 정수를 돌려주는 랜덤 함수
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
