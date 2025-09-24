const tabList = [
  { id: 0, target: document.querySelector("#home"), title: "Home", desc: "Home is where the heart is..", mainColor: "red" },
  { id: 1, target: document.querySelector("#news"), title: "News", desc: "Some news this fine day!", mainColor: "yellow" },
  { id: 2, target: document.querySelector("#contact"), title: "Contact", desc: "Get in touch, or swing by for a cup of coffee.", mainColor: "#2196F3" },
  { id: 3, target: document.querySelector("#about"), title: "About", desc: "Who we are and what we do.", mainColor: "#8E4EC6" },
];

const resetTab = (target) => {
  target.style.backgroundColor = "#eeeeee";
  target.style.color = "black";
};
const renderSection = (num) => {
  document.querySelector("#title").innerText = tabList[num].title;
  document.querySelector("#desc").innerText = tabList[num].desc;
  document.querySelector("#section").style.backgroundColor = tabList[num].mainColor;
};

const reset = (target) => tabList.filter((v) => v.target != target).forEach((v) => resetTab(v.target));
const select = (num, target) => {
  renderSection(num);
  target.style.backgroundColor = tabList[num].mainColor;
  target.style.color = "white";
};
tabList.forEach((v) => {
  v.target.addEventListener("click", () => {
    select(v.id, v.target);
    reset(v.target);
  });
});
