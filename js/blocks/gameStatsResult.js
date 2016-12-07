const gameStatsMap = {
  wrong: 'wrong',
  slow: 'slow',
  fast: 'fast',
  correct: 'correct',
  base: 'unknown'
};

const gameStatsResult = `
          <ul class="stats">
            <li class="stats__result stats__result--${gameStatsMap.wrong}"></li>
            <li class="stats__result stats__result--${gameStatsMap.slow}"></li>
            <li class="stats__result stats__result--${gameStatsMap.fast}"></li>
            <li class="stats__result stats__result--${gameStatsMap.correct}"></li>
            <li class="stats__result stats__result--${gameStatsMap.base}"></li>
          </ul>`;

export default gameStatsResult;
