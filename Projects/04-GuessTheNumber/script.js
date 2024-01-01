const randomNumber=parseInt(Math.random() * 100 + 1); // 1-100 parseInt() is used to convert a string to an integer.

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 100){
        alert('Please enter a number less than 100!')
    } else {
        previousGuess.push(guess);
        if(numGuess === 11){
            displayGuesses(guess);
            displayMessage(`Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuesses(guess);
            checkGuess(guess);
        }
}

function checkGuess(){
//
}

function displayMessage(message){
//
}

function displayMessage(message){
//
}

function newGame(){
//
}

function endGame(){
//
}
