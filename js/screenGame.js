import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import {game, gameHeader, gameOption1} from './blocks/game.js';
import gameStatsResult from './blocks/gameStatsResult.js';

export default (data) => {

  let screenGame = loadTemplate(`
            ${gameHeader}
            <div class="game">
              <p class="game__task">${game.questions.questionDouble.text}</p>
              <form class="game__content">
                ${gameOption1}
                ${gameOption1}
              </form>
              ${gameStatsResult}
            </div>`);

  const game = showSlide(screenGame);

  const answer = game.querySelectorAll('.game__answer');

  for (let i = 0; i < answer.length; i++) {
    answer[i].addEventListener('click', () => {
      //screenGame2();
    });
  }

  return game;
}
