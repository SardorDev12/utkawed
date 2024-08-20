let isPlaying = false;
const audio = document.getElementById("audio");
const playIcon = document.getElementById("play-icon");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Отправлено успешно");
});

// Paths to your play and pause images
const playImageSrc = "./images/play.png";
const pauseImageSrc = "./images/pause.png";

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playIcon.src = playImageSrc; // Set the image to play icon
  } else {
    audio.play();
    playIcon.src = pauseImageSrc; // Set the image to pause icon
  }
  isPlaying = !isPlaying;
}

// script.js

// Set the target date and time to the wedding day: 28th August at 16:00
const targetDate = new Date("August 28, 2024 19:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector(".countdown").innerHTML = "TIME UP";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;
}, 1000);
