import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenGame3 from './screenGame3.js';
import game from './data/game.js';
import {gameHeader} from './blocks/gameHeader.js';
import {gameOption2} from './blocks/gameOption.js';
import gameStatsResult from './blocks/gameStatsResult.js';

let screenGame2 = loadTemplate(`
          ${gameHeader}
          <div class="game">
            <p class="game__task">${game.questions.questionOnly.text}</p>
            <form class="game__content  game__content--wide">
              ${gameOption2}
            </form>
            ${gameStatsResult}
          </div>`);

const game2 = showSlide(screenGame2);

const answer = game2.querySelectorAll('.game__answer');

for (let i = 0; i < answer.length; i++) {
  answer[i].addEventListener('click', () => {
    showSlide(screenGame3);
  });
}

export default screenGame2;
