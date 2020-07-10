// import functions and grab DOM elements
import { compareNumbers, convertStrings } from './number.js';

const input = document.querySelector('#enter-number');

const button = document.querySelector('#begin');

const attemptsRemaining = document.querySelector('#attempts-remaining');

//const guess = document.querySelector('#guess');

const yourResults = document.querySelector('#your-results');

const WinOrLose = document.querySelector('#win-lose');


const resetButton = document.querySelector('#reset');

// initialize state
let attemptsLeft = 4;
let randomNumber = Math.ceil(Math.random() * 20);


button.addEventListener('click', () => {
    attemptsLeft--;
    attemptsRemaining.textContent = attemptsLeft;
    const playerGuess = Number(input.value);

    const result = compareNumbers(playerGuess, randomNumber);

    const finalResult = convertStrings(result);
    yourResults.textContent = finalResult;

    if (result === 0) {
        WinOrLose.textContent = 'You win';
        input.disabled = true;
        button.disabled = true;   
    }
    if (attemptsLeft === 0) {
        WinOrLose.textContent = 'You lose';
        input.disabled = true;
        button.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    input.disabled = false;
    button.disabled = false;
    attemptsLeft = 4;
    attemptsRemaining.textContent = attemptsLeft;
    randomNumber = Math.ceil(Math.random() * 20);
    input.value = '';
});

















// set event listeners to update state and DOM
