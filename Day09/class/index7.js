class Character {
  constructor(name, emoji, hp, minDmg, maxDmg) {
    this.name = name;
    this.emoji = emoji;
    this.hp = hp;
    this.minDmg = minDmg;
    this.maxDmg = maxDmg;
  }

  attack(target) {
    const damage = Math.floor(Math.random() * (this.maxDmg - this.minDmg + 1)) + this.minDmg;
    target.hp = Math.max(0, target.hp - damage);
    return `${this.emoji} ${this.name} → ${target.emoji} ${target.name}: -${damage} HP`;
  }

  isDead() {
    return this.hp <= 0;
  }
}

class Player extends Character {
  constructor(name, emoji) {
    super(name, emoji, 100, 10, 20);
  }
}

class Monster extends Character {
  constructor() {
    const monsters = [
      { name: "슬라임", emoji: "👾", hp: 60, min: 5, max: 15 },
      { name: "고블린", emoji: "👹", hp: 80, min: 8, max: 18 },
      { name: "드래곤", emoji: "🐉", hp: 120, min: 10, max: 25 },
    ];
    const pick = monsters[Math.floor(Math.random() * monsters.length)];
    super(pick.name, pick.emoji, pick.hp, pick.min, pick.max);
  }
}

class Battle {
  constructor(player, monster, logEl, resultEl) {
    this.player = player;
    this.monster = monster;
    this.logEl = logEl;
    this.resultEl = resultEl;
  }

  turn() {
    const logs = [];
    logs.push(this.player.attack(this.monster));
    if (this.monster.isDead()) {
      this.resultEl.textContent = `🏆 ${this.player.name} 승리!`;
      return logs;
    }

    logs.push(this.monster.attack(this.player));
    if (this.player.isDead()) {
      this.resultEl.textContent = `💀 ${this.player.name} 패배...`;
    }
    return logs;
  }
}

const selectScreen = document.getElementById("select-screen");
const battleScreen = document.getElementById("battle-screen");
const resultScreen = document.getElementById("result-screen");

const logs = document.getElementById("logs");
const playerEl = document.getElementById("player");
const monsterEl = document.getElementById("monster");
const attackBtn = document.getElementById("attackBtn");
const resultEl = document.getElementById("result");

let player, monster, battle;

document.querySelectorAll("#characters button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const emoji = btn.dataset.emoji;
    player = new Player(name, emoji);
    monster = new Monster();

    playerEl.textContent = `${player.emoji} ${player.name} (HP: ${player.hp})`;
    monsterEl.textContent = `${monster.emoji} ${monster.name} (HP: ${monster.hp})`;

    selectScreen.style.display = "none";
    battleScreen.style.display = "block";
    battle = new Battle(player, monster, logs, resultEl);
  });
});

attackBtn.addEventListener("click", () => {
  logs.textContent = "";
  const results = battle.turn();
  results.forEach((line) => (logs.innerHTML += line + "<br>"));
  playerEl.textContent = `${player.emoji} ${player.name} (HP: ${player.hp})`;
  monsterEl.textContent = `${monster.emoji} ${monster.name} (HP: ${monster.hp})`;

  if (player.isDead() || monster.isDead()) {
    battleScreen.style.display = "none";
    resultScreen.style.display = "block";
  }
});

document.getElementById("restartBtn").addEventListener("click", () => {
  resultScreen.style.display = "none";
  selectScreen.style.display = "block";
});
