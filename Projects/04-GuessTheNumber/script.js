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

function validateGuess(guess){
//
}

function checkGuess(){
//
}

function displayMessage(guess){
//
}