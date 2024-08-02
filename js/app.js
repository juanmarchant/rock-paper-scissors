let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let promptChoice = ''

    while (true) {
        if (promptChoice != 'rock' && promptChoice != 'paper' && promptChoice != 'scissors') {
            promptChoice = prompt('Choose \nRock | Paper | Scissors').toLowerCase();
        } else {
            break;
        }
    }

    return promptChoice;
}

function playRound(humanSelection, computerSelection) {

    if (humanSelection != computerSelection) {

        switch (humanSelection) {
            case 'paper':
                if (computerSelection === 'rock') {
                    humanScore++;
                } else {
                    computerScore++;
                }
                break;
            case 'rock':
                if (computerSelection === 'scissors') {
                    humanScore++;
                } else {
                    computerScore++;
                }
                break;
            case 'scissors':
                if (computerSelection === 'paper') {
                    humanScore++;
                } else {
                    computerScore++;
                }
                break;
            default:
                break;
        }

    } else {
        console.log('Draw!');
    }
    console.log(`\t\tSCORE\nHUMAN : ${humanScore} --- COMPUTER : ${computerScore}\n*******THE CHOICES**********\nHuman : ${humanSelection} -  Computer : ${computerSelection}`)
    return;
}

function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

let n = 1
while (n <= 5) {
    playGame();
    n++;
}


if (computerScore > humanScore) {
    console.log('THE COMPUTER WONS!!')
} else {
    console.log('U WON !!')
}
