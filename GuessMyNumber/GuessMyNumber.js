"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!🎉";

document.querySelector("#quesMark").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 7;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // When there is no Input
  if (!guess) {
    document.querySelector(".message").textContent = "❌No Number❌";
  }
  // When the player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!🎉";
    document.querySelector("#quesMark").textContent = guess;
    // Implementing styles
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector("#quesMark").style.width = "30rem";

    // Assigning Score to High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // When the player enters the different number
  else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈It's too high" : "📉It's too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the Game😕";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  }
  // else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📈It's too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the Game😕";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  //   }
  // }
  // // When the player enters the number lower than Secret Number
  // else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "📉It's too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //     document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the Game😕";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#quesMark").textContent = "?";
  document.querySelector("#quesMark").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "rgb(19, 18, 18)";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
});
