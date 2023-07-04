function getComputerChoice() {
    let arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random() * arr.length)]
}

function humanSelection() {
    selection = prompt("What do you choose? Rock, paper or scissor?")
    selection = selection.toLowerCase();
    return selection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissor") {
            return "You win! Rock smashes scissor.";
        } else {
            return "You lose! Paper covers rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper covers rock.";
        } else {
            return "You lose! Scissor cut's paper.";
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            return "You win! Scissor cut's paper";
        } else {
            return "You lose! Rock smashes scissor."
        }
    }
}
   
const playerSelection = humanSelection();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));