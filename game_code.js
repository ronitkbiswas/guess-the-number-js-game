"use strict";

let sn = Math.trunc(Math.random() * 10) + 1;
// document.querySelector('.number').textContent = sn;
let score = 10;
document.querySelector(".btn").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number !";
  } else if (guess < sn) {
    document.querySelector(".message").textContent = "👇 Too Low !";
    score--;
    document.querySelector(".score").textContent = "Score: " + score;
    if (score < 0) {
      document.querySelector(".message").textContent = "😩 GAME OVER !";
      score = 0;
    }
  } else if (guess > sn) {
    document.querySelector(".message").textContent = "👆 Too High !";
    score--;
    document.querySelector(".score").textContent = "Score: " + score;
    if (score < 0) {
      document.querySelector(".message").textContent = "😩 GAME OVER !";
      score = 0;
    }
  } else {
    document.querySelector(".message").textContent = "🎉 Congratulations !";
    document.querySelector(".number").textContent = sn;
  }
});

document.querySelector(".btnReset").addEventListener("click", function () {
  location.reload();
});
