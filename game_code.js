"use strict";

const rand = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".rn").textContent = rand;

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".text").value);
  if (!guess) {
    document.querySelector(".message").textContent = "!! Number Empty !!";
  } else if (guess === rand) {
    document.querySelector(".message").textContent = " WOW! You Won!!";
  } else if (guess < rand) {
    document.querySelector(".message").textContent = "Too Low !!!";
  } else if (guess > rand) {
    document.querySelector(".message").textContent = "Too High !!!";
  }
});
