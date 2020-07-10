// import functions and grab DOM elements
import { compareNumbers } from './number.js';

// initialize state
const input = document.querySelector('enter-number');

const button = document.querySelector('begin');

const attemptsRemaining = document.querySelector('attempts-remaining');

const guess = document.querySelector('guess');

const yourResults = document.querySelector('your-results');

const WinOrLose = document.querySelector('win-lose');

const endGame = document.querySelector('#endGame');

const resetButton = document.querySelector('reset');


// number generator from MDN
const correctNumber = Math.ceil(Math.random() * 20);
console.log(correctNumber);

// defining remaining attempts
let attemptsLeft = 4;

// blank field test if number is not entered user will receive alert that says 'Pleas enter a number'
function submit(){

const yourGuess = Number(input.value);

console.log(yourGuess);

// if user enters number less than 0 or greater than 20, the conditional statement below will alert user with error
if (yourGuess > 20 || yourGuess < 0) {
    alert('You must enter a number between "0" and "20"');
    return;
}

const updatedResults = compareNumbers(yourGuess, correctNumber);
// set event listeners to update state and DOM
