let timeLeft = 0;
let timerId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const title = document.getElementById("timeRemaining");

  timeLeft = Number(input.value);

  if (timerId) {
    clearInterval(timerId);
  }

  timerId = setInterval(() => {
    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    title.textContent = `Time Remaining: ${mm}:${ss}`;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      title.textContent = "Time Remaining: 00:00";
      audio.loop = true;
      playAlarm();
      document.body.style.backgroundColor = "blue";
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
