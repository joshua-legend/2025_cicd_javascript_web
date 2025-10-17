// 축구선수 클래스
// 이름, 포지션, 나이, 연봉 + 포지션 바꾸기 함수
class SoccerPlayer {
  name;
  position;
  age;
  salary;
  constructor(name, position, age, salary) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.salary = salary;
  }
  changePosition(newPosition) {
    this.position = newPosition;
  }
}

// 축구팀 클래스
// 이름, 선수들, 감독 + 선수등록하기/ 선수삭제하기 함수
class SoccerTeam {
  name;
  players;
  director;
  constructor(name, director) {
    this.name = name;
    this.director = director;
    this.players = [];
  }

  listPlayer() {
    console.log(this.players);
  }

  addPlayer(newPlayer) {
    this.players.push(newPlayer);
  }
  removePlayer(name) {
    this.players = this.players.filter((v) => v.name != name);
  }
}

const fcIT = new SoccerTeam("IT FC", "긁힌취당");
fcIT.addPlayer(new SoccerPlayer("신여진", "미드필더", 25, 3000));
fcIT.addPlayer(new SoccerPlayer("손정우", "공격수", 27, 3500));
fcIT.addPlayer(new SoccerPlayer("권유나", "수비수", 25, 4000));
fcIT.addPlayer(new SoccerPlayer("손영선", "수비수", 25, 3500));
fcIT.addPlayer(new SoccerPlayer("황태진", "골키퍼", 25, 2500));
fcIT.addPlayer(new SoccerPlayer("이영철", "미드필더", 25, 3500));
fcIT.listPlayer();

//인스턴트(instance) 음식
const a = new SoccerPlayer("손흥민", "미드필더", 25, 3500);
const b = new SoccerPlayer("황희찬", "미드필더", 25, 3500);

// 버거킹 - 본사[유나버거]
// 유나버거 - 클래스
// 부평점,김포점,... 인스턴스
