// 유저에게 프롬프트로 피자를 커스터마이즈 할수 있도록 바꾸기

const makeDough = () =>
  new Promise((success, fail) => {
    const dough = prompt("도우 입력");
    success(`${dough} 도우 만들기`);
  });

const makeTopping = () =>
  new Promise((success, fail) => {
    const topping = prompt("토핑 입력");
    success(`${topping} 뿌리기`);
  });

const makeCheese = () =>
  new Promise((success, fail) => {
    const cheese = prompt("치즈 입력");
    success(`${cheese} 뿌리기`);
  });

const makeBaked = () =>
  new Promise((success, fail) => {
    success("빵 굽기");
  });
const makePizza = () =>
  new Promise((success, fail) => {
    success("피자 완성");
  });

makeDough()
  .then((v) => {
    console.log(v);
    return makeTomato();
  })
  .then((v) => {
    console.log(v);
    return makeCheese();
  })
  .then((v) => {
    console.log(v);
    return makeBaked();
  })
  .then((v) => {
    console.log(v);
    return makePizza();
  })
  .then((v) => {
    console.log(v);
    console.log("😘😍😋😊😉");
  });
