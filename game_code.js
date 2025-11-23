"use strict";

const rand = Math.trunc(Math.random() * 10) + 1;
document.querySelector(".rn").textContent = rand;
let cl = 10;
document.querySelector(".chancesLeft").textContent = "Chances left: " + cl;

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".text").value);
  if (!guess) {
    document.querySelector(".message").textContent = "!! Number Empty !!";
  } else if (guess === rand) {
    document.querySelector(".message").textContent = " WOW! You Won!!";
    document.querySelector(".rn").textContent = rand;
<<<<<<< HEAD
    document.querySelector(".chancesLeft").textContent =
      "You had only " + cl + " chances left.. Congratulations!";
=======
>>>>>>> 365727b128412187e434cd5c705ac37e4f1448b6
  } else if (guess < rand) {
    document.querySelector(".message").textContent = "Too Low !!!";
    cl--;
    document.querySelector(".chancesLeft").textContent = "Chances left: " + cl;
    if (cl <= 0) {
      document.querySelector(".message").textContent = "GAME OVER!!";
      document.querySelector(".chancesLeft").textContent = "";
    }
  } else if (guess > rand) {
    document.querySelector(".message").textContent = "Too High !!!";
    cl--;
    document.querySelector(".chancesLeft").textContent = "Chances left: " + cl;
    if (cl <= 0) {
      document.querySelector(".message").textContent = "GAME OVER!!";
      document.querySelector(".chancesLeft").textContent = "";
    }
  }
});
