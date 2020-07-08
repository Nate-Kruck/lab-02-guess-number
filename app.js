// import functions and grab DOM elements
import { compareNumbers } from './number.js';

// initialize state
const input = document.querySelector('enter-number');

const button = document.querySelector('begin');

const attemptsRemaining = document.querySelector('attempts-remaining');

const guess = document.querySelector('guess');

const yourResults = document.querySelector('your-results');

const WinOrLose = document.querySelector('win-lose');


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


    const updatedResults = compareNumbers(yourGuess, correctNumber);

    function winner() {
        WinOrLose.textContent = 'Hooray! You guessed correctly!';
        yourResults.style.opacity = '5';
    }

    function loser() {
        WinOrLose.textContent = 'Laa hoo zaa herr!';
        yourResults.style.opacity = '5';
    }

    function reduceByOne() {
        attemptsLeft--;
        if (attemptsLeft <= 0)
            loser();
    }

    function result(lowHigh) {
        attemptsRemaining.textContent = `${attemptsLeft}attempts left.`;
        guess.textContent = `Guess too ${lowHigh}`;
    }

    // winner
    if (updatedResults === 0) {
        winner();

    // too low
    } else if (updatedResults === -1) {
        reduceByOne();
        result('low');

    // too high
    } else { (updatedResults === 1);
        reduceByOne();
        result('high');
    }}

button.addEventListener('click', submit);

resetButton.addEventListener('click');















// set event listeners to update state and DOM
