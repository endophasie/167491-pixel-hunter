import game from '../data/game.js';

const gameTimer = `<h1 class="game__timer">${game.time}</h1>`;
const gameBack = `
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>`;
const gameLivesFull = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
const gameLivesEmpty = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
const gameHeader = `
          <header class="header">
            <div class="header__back">
              ${gameBack}
            </div>
            ${gameTimer}
            <div class="game__lives">
              ${gameLivesEmpty}
              ${gameLivesFull}
              ${gameLivesFull}
            </div>
          </header>`;
const gameHeaderSimple = `
          <header class="header">
            <div class="header__back">
              ${gameBack}
            </div>
          </header>`;

export {gameHeader, gameHeaderSimple};
