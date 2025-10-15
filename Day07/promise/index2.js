const makeDough = () =>
  new Promise((success, fail) => {
    success("도우 만들기");
  });

const makeTomato = () =>
  new Promise((success, fail) => {
    success("토마토 뿌리기");
  });

const makeCheese = () =>
  new Promise((success, fail) => {
    success("치즈 뿌리기");
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
  });
