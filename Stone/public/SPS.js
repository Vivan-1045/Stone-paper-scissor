let userScore = 0;
let compScore = 0;

const gameimages = document.querySelectorAll(".gameimg")
const msg1 = document.querySelector(".msg")
const uScore = document.querySelector(".user-score")
const cScore = document.querySelector(".comp-score")


//Genrate computer choice
const GetcompChoice = () => {
    const chances = ["rock","paper","scissor"]
    const idx = Math.floor(Math.random() * 3)
    return chances[idx]
}
const shoWinner = (youWin , compChoice,userChoice) => {
    if(youWin){
        //To update the User score on the screen
        userScore++;
        uScore.innerText = userScore;
        //To saw the message of win on screen 
        msg1.innerText = `You win!.your ${userChoice} beats ${compChoice}...🏆`
        msg1.style.backgroundColor = "green"
    }else{
        //To update the computer score on the screen
        compScore++;
        cScore.innerText = compScore;
        //To saw the message of lose on screen 
        msg1.innerText = `You lose!.${compChoice} beats ${userChoice}...😟`
        msg1.style.backgroundColor = "red"
    }

}

const drawgame = () => {
        //To saw the message of Draw on screen 
    msg1.innerText = `Game draw! try again...📍`
    msg1.style.backgroundColor = "purple"

}

//Get User choice from userChoice function
const gameplay = (userChoice) => {
    console.log("User score",userChoice)
    //Get computer choice from GetcompChoice function
    const compChoice = GetcompChoice()
    console.log("comp score",compChoice) 
    
    if(userChoice===compChoice){
        drawgame()
    }
    else{
        let youWin =  true;
        if(userChoice==="paper"){
            //comp chance rock or scissor
            youWin = compChoice === "scissor" ? false : true;
        }
       else if(userChoice==="scissor"){
            //comp chance paper or scissor
            youWin = compChoice === "rock" ? false : true;
        }
        
        else{
            //comp choice scissor or paper
            youWin = compChoice === "paper" ? false : true;
        }
        shoWinner(youWin , compChoice,userChoice)
    }
};
gameimages.forEach((gameimg) => {
    gameimg.addEventListener("click",() => {
        const userChoice = gameimg.getAttribute("id")
        gameplay(userChoice)
    })
})