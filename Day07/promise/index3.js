// min~max까지 정수를 돌려주는 랜덤 함수
const getRandomInt = (min, max) => {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
};

console.log("오늘의 점메추🎉");

setTimeout(() => {
  console.log("오늘의 메뉴: 제육");
}, getRandomInt(1, 10));

setTimeout(() => {
  console.log("맛점하세요! 😉");
}, getRandomInt(1, 10) + 1000);
