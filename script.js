"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let wins = true;

const displayMessage = function (place, message) {
  document.querySelector(place).textContent = message;
};
//again button
document.querySelector(".again").addEventListener("click", function () {
  wins = true;
  displayMessage(".number", "?");
  displayMessage(".message", "Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage(".score", 20);
  number = Math.trunc(Math.random() * 20) + 1;
});

//check button
document.querySelector(".check").addEventListener("click", function () {
  if (wins) {
    const usernumber = Number(document.querySelector(".guess").value);
    let message;
    let highscore = Number(document.querySelector(".highscore").textContent);
    let score = Number(document.querySelector(".score").textContent);

    // When usernumber is not input
    if (!usernumber) message = "⛔ No number !";
    //When player is wins
    else if (usernumber === number) {
      message = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      wins = false;
      displayMessage(".number", number);
      if (score > highscore) {
        highscore = score;
        displayMessage(".highscore", highscore);
      }

      // When guess is wrong
    } else {
      if (score > 1) {
        message = usernumber < number ? "📈 TOO low!" : "📈 TOO high!";
        score--;
        displayMessage(".score", score);
      } else {
        message = "💥 You Lost the game!";
        document.querySelector("body").style.backgroundColor = "#900a0a";
        wins = false;
        displayMessage(".score", 0);
      }
    }
    displayMessage(".message", message);
  }
});
