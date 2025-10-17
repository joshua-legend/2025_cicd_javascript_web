// 동물 6마리 랜덤시간!
const makeRandomTime = (max, min) => (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
const animal = ["🐘", "🐈", "🐕", "🐅", "🐇", "🦦"];
const makeRace = (name) =>
  new Promise((success) => {
    const time = makeRandomTime(10, 1);
    setTimeout(() => success({ name: name, time: time }), time);
  });

Promise.all(animal.map((v) => makeRace(v))).then((v) => console.log(v));
