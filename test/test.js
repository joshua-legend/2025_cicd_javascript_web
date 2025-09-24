const track = document.querySelector(".track");
let slides = [...document.querySelectorAll(".slide")];

// 1) 양끝에 복제본 붙이기
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
track.prepend(lastClone);
track.append(firstClone);

// 2) 시작 위치를 "진짜 첫 슬라이드"에 맞추기 (인덱스 1)
let index = 1;
const slideWidth = slides[0].offsetWidth;
function goTo(i, animate = true) {
  track.style.transition = animate ? "transform 500ms ease" : "none";
  track.style.transform = `translateX(${-i * slideWidth}px)`;
}
goTo(index, false);

// 3) 버튼 동작
document.getElementById("next").onclick = () => {
  index++;
  goTo(index, true);
};
document.getElementById("prev").onclick = () => {
  index--;
  goTo(index, true);
};

// 4) 경계 통과 시 '순간 리셋'
track.addEventListener("transitionend", () => {
  const total = slides.length; // 진짜 슬라이드 개수 (복제 제외)
  if (index === total + 1) {
    // 끝의 firstClone에 도착
    index = 1; // 진짜 첫 슬라이드로 점프
    goTo(index, false);
    track.style.transition = "transform 300ms ease";
  }
  if (index === 0) {
    // 앞의 lastClone에 도착
    index = total; // 진짜 마지막으로 점프
    goTo(index, false);
    void track.offsetHeight;
    track.style.transition = "transform 300ms ease";
  }
});
