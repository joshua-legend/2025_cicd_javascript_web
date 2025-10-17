class Unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = name;
    this.#emoji = emoji;
    this.#hp = hp;
  }
  attack() {
    console.log(`${this.#emoji} ${this.#name}이(가) 공격했다`);
  }
  status() {
    console.log(`남은 ${this.#hp}`);
  }
}

class Hero extends Unit {
  #skills;
  constructor(name, emoji, hp, skills) {
    super(name, emoji, hp);
    this.#skills = skills;
  }
  activate() {
    console.log(`${this.#skills}이 발동했다!`);
  }
}
class Monster extends Unit {
  #level;
  constructor(name, emoji, hp, level) {
    super(name, emoji, hp);
    this.#level = level;
  }
}
