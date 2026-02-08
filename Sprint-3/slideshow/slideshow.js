const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const backward = document.getElementById("backward-btn");
const forward = document.getElementById("forward-btn");
const img = document.getElementById("carousel-img");

let currentIndex = 0;
let intervalId = null;

forward.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  img.src = images[currentIndex];
});

backward.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  img.src = images[currentIndex];
});

// Level 2
/* function createButton(text, id) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.type = "button";
  btn.id = id;
  return btn;
}
const autoBackward = createButton("Auto Back", "auto-backward");
const stopBtn = createButton("Stop", "stop");
const autoForward = createButton("Auto Forward", "auto-forward");

document.body.insertBefore(autoBackward, backward);
backward.after(stopBtn);
forward.after(autoForward);
*/

const autoBackward = document.getElementById("auto-backward");
const autoForward = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop");

autoForward.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  autoForward.disabled = true;
  autoBackward.disabled = true;

  intervalId = setInterval(() => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    img.src = images[currentIndex];
  }, 2000);
});

autoBackward.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  autoForward.disabled = true;
  autoBackward.disabled = true;
  intervalId = setInterval(() => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    img.src = images[currentIndex];
  }, 2000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  autoForward.disabled = false;
  autoBackward.disabled = false;
});
