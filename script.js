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
    document.getElementById('p1').innerHTML = 'Make your choice'
    document.getElementById('p2').innerHTML = 'Best out of five rounds takes the win'
    document.getElementById('final_result').innerHTML = ''
    document.getElementById('humanChoice').innerHTML = "?"
    document.getElementById('computerChoice').innerHTML = "?"
    document.getElementById('humanPoints').innerHTML = 0
    document.getElementById('computerPoints').innerHTML = 0
    document.querySelector('#rock').disabled = false
    document.querySelector('#paper').disabled = false
    document.querySelector('#scissors').disabled = false
}

function gameOver(humanPoints, computerPoints) {
    document.querySelector('#rock').disabled = true
    document.querySelector('#paper').disabled = true
    document.querySelector('#scissors').disabled = true
    document.getElementById('p1').innerHTML = ''
    document.getElementById('p2').innerHTML = ''
    document.getElementById('final_result').innerHTML = checkWinner(humanPoints, computerPoints)

    if (humanPoints < computerPoints) {
        const audio = document.querySelector('#computerWin')
        audio.play()
    } else {
        const audio = document.querySelector('#humanWin')
        audio.play()
    }
}

function displayChoice(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        document.getElementById('humanChoice').innerHTML = '🪨'
    } else if (playerSelection === "paper") {
        document.getElementById('humanChoice').innerHTML = '🧻'
    } else if (playerSelection === "scissors") {
        document.getElementById('humanChoice').innerHTML = '✂️'
    }
    if (computerSelection === "rock") {
        document.getElementById('computerChoice').innerHTML = '🪨'
    } else if (computerSelection === "paper") {
        document.getElementById('computerChoice').innerHTML = '🧻'
    } else if (computerSelection === "scissors") {
        document.getElementById('computerChoice').innerHTML = '✂️'
    }
}

function game() {
    
    buttons.forEach((button) => {
        
        button.addEventListener('click', () => {
            if (button.id === "play_again") {
                newGame()
            } else {
                const playerSelection = button.id
                const computerSelection = getComputerChoice()

                displayChoice(playerSelection, computerSelection)

                const result = playRound(playerSelection, computerSelection)

                increasePoints(result)
                numberOfPlayedRounds++

                console.log(numberOfPlayedRounds)

                document.getElementById('humanPoints').innerHTML = humanPoints
                document.getElementById('computerPoints').innerHTML = computerPoints

                if (numberOfPlayedRounds == 5) gameOver(humanPoints, computerPoints)
            }
            
        })
    })
}


//
game()