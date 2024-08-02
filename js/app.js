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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
    console.log(humanScore, computerScore);
    console.log(`Human : ${humanSelection} -  Computer : ${computerSelection}`);

}

while (true) {
    playRound(humanSelection, computerSelection);
}