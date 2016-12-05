import game from '../data/game.js';

const gameOption1 = `
          <div class="game__option">
            <img src="${game.questions.questionDouble.pic}" alt="${game.answer.alt}" width="${game.questions.questionDouble.imgW}" height="${game.questions.questionDouble.imgH}">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>`;
const gameOption2 = `
          <div class="game__option">
            <img src="${game.questions.questionOnly.pic}" alt="${game.answer.alt}" width="${game.questions.questionOnly.imgW}" height="${game.questions.questionOnly.imgH}">
            <label class="game__answer game__answer--photo">
              <input name="question1" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer game__answer--paint">
              <input name="question1" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>`;
const gameOption3 = `
          <div class="game__option  game__option--selected">
            <img src="${game.questions.questionTriple.pic}" alt="${game.answer.alt}" width="${game.questions.questionTriple.imgW}" height="${game.questions.questionTriple.imgH}">
          </div>`;

export {gameOption1, gameOption2, gameOption3};
