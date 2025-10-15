const heading = document.querySelector("#heading");

const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, transform: "translateY(0px)" },
];
const option = {
  duration: 400,
  fill: "forwards",
};

heading.animate(keyframes, option);
