// Declare variables
const buttons = document.querySelectorAll('button')
const choices = ["rock", "paper", "scissors"];

let numberOfPlayedRounds = 0
let humanPoints = 0
let computerPoints = 0

// FUNCTIONS
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
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
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "human";
        } else {
            return "computer";
        }
    }
}

function increasePoints(result) {
    if (result === "human") {
        humanPoints++
    } else if (result == "computer") {
        computerPoints++
    }
}

function checkWinner(humanPoints, computerPoints) {
    if (humanPoints === computerPoints) {
        return "It's a draw"
    } else if (humanPoints < computerPoints) {
        return "The computer is the winner"
    } else {
        return "The human is the winner"
    }
}

function newGame() {
    numberOfPlayedRounds = 0
    humanPoints = 0
    computerPoints = 0
    document.getElementById('round').innerHTML = numberOfPlayedRounds
    document.getElementById('humanPoints').innerHTML = humanPoints
    document.getElementById('computerPoints').innerHTML = computerPoints
    document.querySelector('#rock').disabled = false
    document.querySelector('#paper').disabled = false
    document.querySelector('#scissors').disabled = false
}

function gameOver() {
    document.querySelector('#rock').disabled = true
    document.querySelector('#paper').disabled = true
    document.querySelector('#scissors').disabled = true
    document.getElementById('result').innerHTML = checkWinner(humanPoints, computerPoints)
    const audio = document.querySelector('audio')
    audio.play()
}

function game() {
    
    buttons.forEach((button) => {
        
        button.addEventListener('click', () => {
            if (button.id === "playAgain") {
                newGame()
            } else {
                const playerSelection = button.id
                const computerSelection = getComputerChoice()

                const result = playRound(playerSelection, computerSelection)

                increasePoints(result)
                numberOfPlayedRounds++

                console.log(numberOfPlayedRounds)

                document.getElementById('round').innerHTML = numberOfPlayedRounds
                document.getElementById('humanPoints').innerHTML = humanPoints
                document.getElementById('computerPoints').innerHTML = computerPoints

                if (numberOfPlayedRounds == 3) gameOver()
            }
            
        })
    })
}


//
game()