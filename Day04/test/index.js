import { keyframe, option } from "./animation.js";
import { boxes } from "./query.js";

boxes.forEach((v, i) => {
  v.animate(keyframe, { ...option, delay: 300 * i });
});
