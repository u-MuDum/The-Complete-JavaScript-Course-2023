"use strict";

/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = " 👍 Correct Number !";
document.querySelector(".score").textContent = 50;
console.log((document.querySelector(".guess").value = 26));
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 👍 Correct Number !";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low !";
    score--;
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high !";
    score--;
  }
});
