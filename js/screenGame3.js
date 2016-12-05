import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenStats from './screenStats.js';
import game from './data/game.js';
import {gameHeader} from './blocks/gameHeader.js';
import {gameOption3} from './blocks/gameOption.js';
import gameStatsResult from './blocks/gameStatsResult.js';

let screenGame3 = loadTemplate(`
          ${gameHeader}
          <div class="game">
            <p class="game__task">${game.questions.questionTriple.text}</p>
            <form class="game__content  game__content--triple">
              ${gameOption3}
              ${gameOption3}
              ${gameOption3}
            </form>
            ${gameStatsResult}
          </div>`);

const game3 = showSlide(screenGame3);

const answer = game3.querySelectorAll('.game__option');

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener('click', () => {
    showSlide(screenStats);
  });
}

export default screenGame3;
