const tabList = [
  { id: 0, target: document.querySelector("#home"), title: "Home", desc: "Home is where the heart is..", mainColor: "red" },
  { id: 1, target: document.querySelector("#news"), title: "News", desc: "Some news this fine day!", mainColor: "yellow" },
  { id: 2, target: document.querySelector("#contact"), title: "Contact", desc: "Get in touch, or swing by for a cup of coffee.", mainColor: "#2196F3" },
  { id: 3, target: document.querySelector("#about"), title: "About", desc: "Who we are and what we do.", mainColor: "#8E4EC6" },
];
const title = document.querySelector("#title");
const desc = document.querySelector("#desc");
const section = document.querySelector("#section");
const reset = (target) => {
  tabList
    .filter((v) => v.target != target)
    .forEach((v) => {
      v.target.style.backgroundColor = "#eeeeee";
      v.target.style.color = "black";
    });
};
const select = (num, target) => {
  title.innerText = tabList[num].title;
  desc.innerText = tabList[num].desc;
  section.style.backgroundColor = tabList[num].mainColor;
  target.style.backgroundColor = tabList[num].mainColor;
  target.style.color = "white";
};
tabList.forEach((v) => {
  v.target.addEventListener("click", () => {
    select(v.id, v.target);
    reset(v.target);
  });
});
