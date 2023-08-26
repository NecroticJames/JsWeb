'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let scores;
let currentScore;
let activeplayer;
let playing;

diceEl.classList.add('hidden');
score0el.textContent = 0;
score1el.textContent = 0;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playing = true;

  score0el.textContent = 0;
  score1el.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  // switch

  activeplayer = activeplayer === 0 ? 1 : 0;
  // set score to 0
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rolling

btnRoll.addEventListener('click', function () {
  if (playing) {
    // genearate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //   show the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //   check roll 1 , true switch
    if (dice !== 1) {
      // add dice to current
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      // change curr score of previous player to 0
      switchplayer();
    }
  }
});

//hold

btnHold.addEventListener('click', function () {
  if (playing) {
    // current score of score of active player
    scores[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    // check score of >100
    if (scores[activeplayer] >= 5) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
    // so finish
  }
  // not switch to next player
});

// resest

btnNew.addEventListener('click', init);
