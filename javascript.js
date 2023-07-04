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

function game() {
    let humanPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = humanSelection();
        const computerSelection = getComputerChoice();
        console.log("Human chosed: ", playerSelection, "and computer chosed: ", computerSelection);    


        round = playRound(playerSelection, computerSelection);
        if (round === "human") {
            humanPoints++;
            console.log("Human is the winner of the round with: ", humanPoints, "points.")
        } else if (round === "computer") {
            computerPoints++;
            console.log("Computer is the winner of this round with: ", computerPoints, "points.")
        } else {
            console.log("It's a tie!")
        }
    }

    if (humanPoints === computerPoints) {
        console.log("Aaaand it's a tie :(");
    } else if (humanPoints > computerPoints) {
        console.log("We have a winner...Huuuuuuuuuman!");
    } else {
        console.log("Nooo...The computer won :(");
    }
}

game();