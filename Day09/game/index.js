class SlotMachine {
  emojis = ["🍎", "🍌", "🍇", "🍒", "🍋"];

  constructor(btnId, resultId) {
    this.button = document.getElementById(btnId);
    this.result = document.getElementById(resultId);
    this.button.addEventListener("click", this.spin.bind(this));
  }

  spin() {
    const pick = () => this.emojis[Math.floor(Math.random() * this.emojis.length)];
    const result = [pick(), pick(), pick()];
    this.result.textContent = result.join(" ");
  }
}

new SlotMachine("btn", "result");
