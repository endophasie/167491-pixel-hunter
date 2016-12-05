const gameStatsData = {
  wrong: 'stats__result--wrong',
  slow: 'stats__result--slow',
  fast: 'stats__result--fast',
  correct: 'stats__result--correct',
  base: 'stats__result--unknown'
};

const gameStatsResult = `
          <ul class="stats">
            <li class="stats__result ${gameStatsData.wrong}"></li>
            <li class="stats__result ${gameStatsData.slow}"></li>
            <li class="stats__result ${gameStatsData.fast}"></li>
            <li class="stats__result ${gameStatsData.correct}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
            <li class="stats__result ${gameStatsData.base}"></li>
          </ul>`;

export default gameStatsResult;
