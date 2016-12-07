let game = {
  time: 0,
  lifes: 3,

  questions: {
    questionDouble: {
      type: 1,
      text: 'Угадайте для каждого изображения фото или рисунок?',
      imgUrl: 'http://placehold.it/468x458',
      imgWidth: 468,
      imgHeight: 458
    },
    questionOnly: {
      type: 2,
      text: 'Угадай, фото или рисунок?',
      imgUrl: 'http://placehold.it/705x455',
      imgWidth: 705,
      imgHeight: 455
    },
    questionTriple: {
      type: 3,
      text: 'Найдите рисунок среди изображений',
      imgUrl: 'http://placehold.it/304x455',
      imgWidth: 304,
      imgHeight: 455
    }
  },

  answer: {
    type: 'foto',
    imgUrl: 'img/img1.jpg',
    imgAlt: 'Option'
  }
};

const gameAnswer = `
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>`;
const gameOption1 = `
          <div class="game__option">
            <img src="${game.questions.questionDouble.imgUrl}" alt="${game.answer.imgAlt}" width="${game.questions.questionDouble.imgWidth}" height="${game.questions.questionDouble.imgHeight}">
            ${gameAnswer}
          </div>`;
const gameOption2 = `
          <div class="game__option">
            <img src="${game.questions.questionOnly.imgUrl}" alt="${game.answer.imgAlt}" width="${game.questions.questionOnly.imgWidth}" height="${game.questions.questionOnly.imgHeight}">
            ${gameAnswer}
          </div>`;
const gameOption3 = `
          <div class="game__option  game__option--selected">
            <img src="${game.questions.questionTriple.imgUrl}" alt="${game.answer.imgAlt}" width="${game.questions.questionTriple.imgWidth}" height="${game.questions.questionTriple.imgHeight}">
          </div>`;
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

export {game, gameOption1, gameOption2, gameOption3, gameHeader, gameHeaderSimple};
