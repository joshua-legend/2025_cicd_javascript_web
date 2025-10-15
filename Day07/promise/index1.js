const apple = () =>
  new Promise((success, fail) => {
    success("사과");
  });

const iphone = (color, version) =>
  new Promise((success, fail) => {
    success(`${color}색상 ${version}인 아이폰`);
  });
