"use strict";

let sn = Math.trunc(Math.random() * 10) + 1;
//document.querySelector(".number").textContent = sn;
let score = 10;
let highscore = 0;
let displayResult = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayResult("⛔ No Number !");
  } else if (guess === sn) {
    displayResult("🎉 Congratulations !");
    document.querySelector(".number").textContent = sn;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent =
        "🏆 High Score: " + highscore;
    }
  } else if (guess !== sn) {
    displayResult(guess < sn ? "👇 Too Low !" : "👆 Too High !");
    score--;
    document.querySelector(".score").textContent = "💯 Score: " + score;
    if (score < 0) {
      score = 0;
      displayResult("😩 GAME OVER !");
    }
  }
});
document.querySelector(".btnReset").addEventListener("click", function () {
  displayResult("⚡Start Guessing.....");
  sn = Math.trunc(Math.random() * 10) + 1;
  score = 10;
  document.querySelector(".score").textContent = "💯 Score: " + score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
// binary Search in sorted array
// by ronitkbiswas
const arr = [12,15,17,18,21,26,33];
const search = 15;
function binarySearch(arr, search) {
  let leftEnd = 0;
  let rightEnd = arr.length - 1;
  while(leftEnd <= rightEnd) {
    let mid = Math.floor((leftEnd+rightEnd) / 2);
    if(arr[mid] === search) {
      return mid;
    }
    if(arr[mid] < search) {
      leftEnd = mid + 1;
    } else {
      rightEnd = mid - 1;
    }
  }
  return -1;
}
const result = binarySearch(arr, search);
if (result === -1) {
  console.log('Not Found at any Index by Binary Search');
} else {
  console.log('Found at index:',result);
}
