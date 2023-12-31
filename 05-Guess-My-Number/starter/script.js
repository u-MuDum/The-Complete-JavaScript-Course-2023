"use strict";

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " 👍 Correct Number !";
document.querySelector(".score").textContent = 50;
console.log((document.querySelector(".guess").value = 26));
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //sayı girilmezse
  if (!guess) {
    // document.querySelector(".message").textContent = "❌ No number";
    displayMessage("❌ No number");

    //doğru tahmin edilirse
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = " 🥇 Correct Number !";
    displayMessage(" 🥇 Correct Number !");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess < secretNumber ? "📉 Too low !" : "📈 Too high !";
      displayMessage(guess < secretNumber ? "📉 Too low !" : "📈 Too high !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "🧨 You lost the game";
      displayMessage("🧨 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
  //aşağı tahmin edilirse
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🧨 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //yukarı tahmin edilirse
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high !";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "🧨 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
