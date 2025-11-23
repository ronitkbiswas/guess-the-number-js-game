"use strict";

const rand = Math.trunc(Math.random() * 10) + 1;
// document.querySelector(".rn").textContent = rand;

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".text").value);
  if (!guess) {
    document.querySelector(".message").textContent = "!! Number Empty !!";
  } else if (guess === rand) {
    document.querySelector(".message").textContent = " WOW! You Won!!";
    document.querySelector(".rn").textContent = rand;
  } else if (guess < rand) {
    document.querySelector(".message").textContent = "Too Low !!!";
  } else if (guess > rand) {
    document.querySelector(".message").textContent = "Too High !!!";
  }
});
