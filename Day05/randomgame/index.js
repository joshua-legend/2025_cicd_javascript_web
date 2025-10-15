// 🎯 DOM 캐싱
const $ = (selector) => document.querySelector(selector);
const guide = $("#guide");
const chance = $("#chance");
const input = $("#input");
const go = $("#go");
const reset = $("#reset");

// 🎯 상수 정의
const MIN = 1;
const MAX = 100;
const INIT_CHANCE = +chance.innerText || 5;
let remainingChance = INIT_CHANCE;
const answer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

// 🎯 게임 종료 함수
const endGame = (isWin) => {
  go.disabled = true;
  input.disabled = true;
  guide.innerText = isWin ? "🎉 정답입니다!" : "💀 게임 오버!";
};

// 🎯 남은 기회 표시 갱신
const updateChance = () => {
  remainingChance--;
  chance.innerText = remainingChance;
  return remainingChance > 0;
};

// 🎯 결과 처리
const handleResult = (value) => {
  if (+value === answer) return endGame(true);
  guide.innerText = +value < answer ? "⬆️ Up! ⬆️" : "⬇️ Down! ⬇️";
};

// 🎯 클릭 이벤트
go.addEventListener("click", () => {
  const guess = input.value.trim();
  if (!guess) return (guide.innerText = "숫자를 입력하세요!");

  const hasChance = updateChance();
  handleResult(guess);

  if (!hasChance && +guess !== answer) endGame(false);
});

// 🎯 리셋 이벤트
reset.addEventListener("click", () => window.location.reload());
