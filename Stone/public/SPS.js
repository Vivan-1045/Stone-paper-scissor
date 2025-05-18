let userScore = 0;
let compScore = 0;

const gameimages = document.querySelectorAll(".gameimg");
const msg1 = document.querySelector(".msg");
const uScore = document.querySelector(".user-score");
const cScore = document.querySelector(".comp-score");

const GetcompChoice = () => {
    const chances = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return chances[idx];
};

const shoWinner = (youWin, compChoice, userChoice) => {
    if (youWin) {
        userScore++;
        uScore.innerText = userScore;
        msg1.innerText = `You win! Your ${userChoice} beats ${compChoice}...🏆`;
        msg1.style.backgroundColor = "green";
    } else {
        compScore++;
        cScore.innerText = compScore;
        msg1.innerText = `You lose! ${compChoice} beats ${userChoice}...😟`;
        msg1.style.backgroundColor = "#ffb6b6";
    }
};

const drawgame = () => {
    msg1.innerText = `Game draw! Try again...📍`;
    msg1.style.backgroundColor = "purple";
};

const gameplay = (userChoice) => {
    const compChoice = GetcompChoice();
    if (userChoice === compChoice) {
        drawgame();
    } else {
        let youWin = true;
        if (userChoice === "paper") {
            youWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            youWin = compChoice === "rock" ? false : true;
        } else {
            youWin = compChoice === "paper" ? false : true;
        }
        shoWinner(youWin, compChoice, userChoice);
    }
};

gameimages.forEach((gameimg) => {
    gameimg.addEventListener("click", () => {
        const userChoice = gameimg.getAttribute("id");
        gameplay(userChoice);
    });
});
