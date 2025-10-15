// 라면 끓이기 프로그램
// 콘솔로 모든 과정이 찍혀야됌!
const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;

// 1. 물받기 (1 ~ 5초)

const watering = () =>
  new Promise((success, fail) => {
    const time = getRandomInt(1, 5);
    console.log("물 받는중~");
    setTimeout(() => {
      success(time);
    }, time);
  });
// 2. 물끓이기 (5~8초)
const heating = (time) =>
  new Promise((success, fail) => {
    console.log("물 끓이기");
    setTimeout(() => {
      console.log("물 끓이기 완료!");
      success();
    }, getRandomInt(5, 8));
  });

// 3. 면과 스프 넣기 (1~3초)
const noodleAndFlake = () =>
  new Promise((success, fail) => {
    console.log("면과 스프 넣는중~");
    setTimeout(() => {
      console.log("면과 스프 넣기 완료!");
      success();
    }, getRandomInt(1, 3));
  });
// 4. 계란 넣기 (1초 ~ 2초)
const egg = () =>
  new Promise((success, fail) => {
    console.log("계란 넣는중~");
    setTimeout(() => {
      console.log("계란 넣기 완료!");
      success();
    }, getRandomInt(1, 2));
  });

// 5. 라면 전체 익히기 (5 ~ 10초)
const cooking = () =>
  new Promise((success, fail) => {
    console.log("라면 전체 끓이는 중~");
    setTimeout(() => {
      console.log("라면 완료!");
      success();
    }, getRandomInt(5, 10));
  });

watering()
  .then((v) => heating(v))
  .then(() => noodleAndFlake())
  .then(() => egg())
  .then(() => cooking())
  .then(() => console.log("라면 완성!"));
