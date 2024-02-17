let userScore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScoreNumber = document.querySelector("#user-score");
const compScoreNumber = document.querySelector("#comp-score");



const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randId = Math.floor(Math.random() * 3);
    return option[randId];
};

const drawGame = () => {
    // console.log("Game was Draw");  inspect  

    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b30";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        // console.log("you win");     inspect 
        userScore++;
        userScoreNumber.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }
    else{
        // console.log("you loss");       inspect 

        compscore++;
        compScoreNumber.innerText = compscore;
        msg.innerText = `You Loss! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}



const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        //Game draw
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "scissor" ? true : false;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissor" ? false : true;
        }
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }


};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});