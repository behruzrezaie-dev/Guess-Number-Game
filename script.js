let random = Math.trunc(Math.random() * 20) + 1;

const body = document.querySelector("body");
const refresh = document.querySelector(".again");
const check = document.querySelector(".check");
const userGuess = document.querySelector(".guess");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");

check.addEventListener("click", () => {
  const guess = Number(userGuess.value);

  if (isNaN(guess) || guess < 1 || guess > 20) {
    message.textContent = "Please enter a number between 1 to 20";
    return;
  }

  if (guess === random) {
    message.textContent = "Correct! 🎉👏";
    body.style.backgroundColor = "green";
    number.textContent = random;

    if (Number(score.textContent) > Number(highScore.textContent)) {
      highScore.textContent = score.textContent;
    }
  } else {
    if (Number(score.textContent) > 1) {
      message.textContent = guess > random ? "Too High" : "Too Low";
      score.textContent = Number(score.textContent) - 1;
    } else {
      message.textContent = "You lost the game 💥";
      score.textContent = 0;
    }
  }
});

refresh.addEventListener("click", () => {
  random = Math.trunc(Math.random() * 20) + 1;
  score.textContent = 20;
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  userGuess.value = "";
});
