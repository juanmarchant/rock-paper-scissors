let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * 3)]
}

function getHumanChoice(value) {


    if (value.toLowerCase() != 'rock' && value.toLowerCase() != 'paper' && value.toLowerCase() != 'scissors') {
        alert('Choose \nRock | Paper | Scissors');
    } else {
        return value.toLowerCase();
    }
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
    return;
}

function playGame(value) {
    const humanSelection = getHumanChoice(value);
    const computerSelection = getComputerChoice();
    updateSelection(humanSelection.toLowerCase(), computerSelection.toLowerCase());
    playRound(humanSelection, computerSelection);
}



function updateSelection(human, computer) {
    const humanSelecion = document.querySelector('#humanSelection');
    const computerSelection = document.querySelector('#computerSelection');

    humanSelecion.src = `/img/${human}.png`
    computerSelection.src = `/img/${computer}.png`


}
function updateScore() {
    const scoreHuman = document.querySelector('#scoreHuman');
    const scoreComputer = document.querySelector('#scoreComputer');

    scoreHuman.textContent = humanScore;
    scoreComputer.textContent = computerScore;

    showWinner();
}

function showWinner() {

    const winner = document.querySelector('#winner');
    const humanSelecion = document.querySelector('#humanSelection');
    const computerSelection = document.querySelector('#computerSelection');


    if (computerScore >= 5 || humanScore >= 5) {

        if (computerScore > humanScore) {
            winner.textContent = 'COMPUTER WINS!'
        } else {
            winner.textContent = 'U WIN!'
        }

        humanScore = 0
        computerScore = 0
        humanSelecion.src = '/img/question.png'
        computerSelection.src = '/img/question.png'
        updateScore();

        setTimeout(() => {
            winner.textContent = ''
        }, 1000);
    }
}





const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => {
    playGame(rockBtn.textContent)
    updateScore();
});

paperBtn.addEventListener('click', () => {
    playGame(paperBtn.textContent)
    updateScore();
});

scissorsBtn.addEventListener('click', () => {
    playGame(scissorsBtn.textContent)
    updateScore();
});


