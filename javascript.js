// FUNCTIONS
function getComputerChoice() {
    let arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random() * arr.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            return "human";
        } else {
            return "computer";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection == "rock") {
            return "human";
        } else {
            return "computer";
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            return "human";
        } else {
            return "computer";
        }
    }
}


// Soundrecords: https://samplefocus.com/samples/round-1-fight

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        //console.log(button.id);
        // how do I make it clickable only once?
        
        const playerSelection = button.id;
        const computerSelection = getComputerChoice();

        console.log("Human choose:", playerSelection, "and computer choose:", computerSelection);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        document.getElementById("result").innerHTML = "The winner of the round is: " + result;
    });
});