'use strict';

// Selecting elements
const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');
const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');

const diceElement1 = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement1.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerElement0.classList.toggle('player--active');
  playerElement1.classList.toggle('player--active');
};

// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceElement1.classList.remove('hidden');
    diceElement1.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;

    //** scores[1] = scores[1] + currentScore; */
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. chick if player's score is >= 100

    if (scores[activePlayer] >= 20) {
      document;
      // Finish the game
      playing = false;
      diceElement1.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
