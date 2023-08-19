'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

score0.textContent = 0;
score1.textContent = 0;
let currentscore = 0;
let activeplayer = 0;
let playing = true;
let totalscore = [0, 0];

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

dice.classList.add('hidden');

btnroll.addEventListener('click', function () {
  if (playing) {
    const diceno = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceno}.png`;
    if (diceno !== 1) {
      currentscore += diceno;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;

      // current0.textContent = currentscore;
    } else {
      switchplayer();
    }
  }
  btnhold.addEventListener('click', function () {
    if (playing) {
      totalscore[activeplayer] += currentscore;
      document.getElementById(`score--${activeplayer}`).textContent =
        totalscore[activeplayer];
      if (totalscore[activeplayer] >= 20) {
        playing = false;
        dice.classList.add('hidden');
        document
          .querySelector(`.player--${activeplayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activeplayer}`)
          .classList.remove('player--active');
      } else {
        switchplayer();
      }
    }
  });
});
btnnew.addEventListener('click', function () {
  dice.classList.add('hidden');
  currentscore = 0;
  current0.textContent = currentscore;
  current1.textContent = currentscore;
  score0.textContent = 0;
  score1.textContent = 0;
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.remove('player--winner');
  playing = true;
});
