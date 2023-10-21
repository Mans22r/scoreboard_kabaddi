let points = 0;
let points1 = 0;
let count = document.getElementById("count1");
let counter1 = document.getElementById("count2");

const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const timerOutput = document.getElementById("timer--output");
const doordie = document.getElementById("do-button");
const audio = new Audio("doordie.m4a")

function one() {
  points += 1;
  count.textContent = points;
}

function two() {
  points += 2;
  count.textContent = points;
}

function three() {
  points += 3;
  count.textContent = points;
}

function minus() {
  points -= 1;
  count.textContent = points;
}

function one1() {
  points1 += 1;
  counter1.textContent = points1;
}

function two2() {
  points1 += 2;
  counter1.textContent = points1;
}

function three3() {
  points1 += 3;
  counter1.textContent = points1;
}

function minus1() {
  points1 -= 1;
  counter1.textContent = points1;
}

function game() {
  count.textContent = 0;
  counter1.textContent = 0;
  points = 0;
  points1 = 0;
}

let timeLeft = 30;
let timerInterval;

function updateTimer() {
  if (timeLeft > 0) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerOutput.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeLeft--;
  } else {
    clearInterval(timerInterval);
    alert("Timer has reached 0 seconds!");
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerOutput.textContent = "00:30";
}

startButton.addEventListener("click", function () {
  if (!timerInterval) {
    timerInterval = setInterval(updateTimer, 1000);
  }
});

resetButton.addEventListener("click", function () {
  resetTimer();
});

doordie.addEventListener("click", ()=>audio.play())
