const nextBg = document.getElementById("next");
const previousBg = document.getElementById("previous");
const defaultBg = document.querySelector(".container");

let backgrounds = [
  "url(/src/img/nasus.jpg)",
  "url(/src/img/irelia.jpg)",
  "url(/src/img/ryze.jpg)",
  "url(/src/img/jax.jpg)",
];
let currentBackgroundIndex = 0;

nextBg.addEventListener("click", () => {
  currentBackgroundIndex++;
  if (currentBackgroundIndex >= backgrounds.length) {
    currentBackgroundIndex = 0;
  }
  defaultBg.style.backgroundImage = backgrounds[currentBackgroundIndex];
});

previousBg.addEventListener("click", () => {
  currentBackgroundIndex--;
  if (currentBackgroundIndex < 0) {
    currentBackgroundIndex = backgrounds.length - 1;
  }
  defaultBg.style.backgroundImage = backgrounds[currentBackgroundIndex];
});
