import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenGame2 from './screenGame2.js';
import {game, gameHeader, gameOption1} from './blocks/game.js';
import gameStatsResult from './blocks/gameStatsResult.js';

let screenGame1 = loadTemplate(`
          ${gameHeader}
          <div class="game">
            <p class="game__task">${game.questions.questionDouble.text}</p>
            <form class="game__content">
              ${gameOption1}
              ${gameOption1}
            </form>
            ${gameStatsResult}
          </div>`);

const game1 = showSlide(screenGame1);

const answer = game1.querySelectorAll('.game__answer');

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener('click', () => {
    showSlide(screenGame2);
  });
}

export default screenGame1;
