import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenRules from './screenRules.js';
import result from './data/result.js';
import {gameHeaderSimple} from './blocks/gameHeader.js';
import gameStatsResult from './blocks/gameStatsResult.js';

const statTitle = `<h1>${result.finalTitle.win}</h1>`;

let screenStats = loadTemplate(`
          ${gameHeaderSimple}
          <div class="result">
            ${statTitle}
            <table class="result__table">
              <tr>
                <td class="result__number">1.</td>
                <td colspan="2">
                  ${gameStatsResult}
                </td>
                <td class="result__points">×&nbsp;100</td>
                <td class="result__total">900</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">50</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">100</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">-100</td>
              </tr>
              <tr>
                <td colspan="5" class="result__total  result__total--final">950</td>
              </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">2.</td>
                <td>
                  ${gameStatsResult}
                </td>
                <td class="result__total"></td>
                <td class="result__total  result__total--final">fail</td>
              </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">3.</td>
                <td colspan="2">
                  ${gameStatsResult}
                </td>
                <td class="result__points">×&nbsp;100</td>
                <td class="result__total">900</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">100</td>
              </tr>
              <tr>
                <td colspan="5" class="result__total  result__total--final">950</td>
              </tr>
            </table>
          </div>`);

const stats = showSlide(screenStats);

const gameBack = stats.querySelector('.header__back');

gameBack.addEventListener('click', () => {
  showSlide(screenRules);
});

export default screenStats;
