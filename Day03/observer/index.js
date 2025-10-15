const lunch = document.querySelector("#lunch");

const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(0px)" },
];
const option = {
  duration: 400,
  fill: "forwards",
};

const ob = new IntersectionObserver((entries, x) => {
  entries.forEach((v) => {
    if (v.isIntersecting) {
      v.target.animate(keyframes, option);
      x.unobserve(v.target);
    }
  });
});

ob.observe(lunch);
