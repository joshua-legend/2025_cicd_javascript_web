// 클래스는 오브젝트를 만들어주는 문법 with 함수까지
// 클래스: 변수 & 함수(초기화/일반)
// 1. 컨스트럭터 이해안됨
// 2. 속성 왜 두번 중복함?
class Coffee {
  name;
  price;
  shots;
  constructor(a, b, c) {
    this.name = a;
    this.price = b;
    this.shots = c;
  }
}
const dogcoffee = new Coffee("개커피", 1000, 2);
const catcoffee = new Coffee("냥커피", 2000, 3);

//클래스: 변수 + 함수(초기화/일반)
class SoccerTeam {
  name;
  players;
  director;
  est;
  constructor(name, director, est) {
    this.name = name;
    this.director = director;
    this.est = est;
    this.players = [];
  }
  registerPlayer(name, number) {
    this.players.push({ name, number });
  }
}

const yuna = new SoccerTeam("FC 유나", "짱유나", 2025);
yuna.registerPlayer("여진", 7);
yuna.registerPlayer("영철", 10);
yuna.registerPlayer("정우", 12);
console.log(yuna);
