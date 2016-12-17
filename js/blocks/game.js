let game = {
  time: 0,
  lifes: 3,

  questionsType: [
    {
      type: "two question",
      count: 2,
      text: "Угадайте для каждого изображения фото или рисунок?"
    },
    {
      type: "only question",
      count: 1,
      text: "Угадай, фото или рисунок?"
    },
    {
      type: "choose painting",
      count: 3,
      text: "Найдите рисунок среди изображений"
    },
    {
      type: "choose photo",
      count: 3,
      text: "Найдите фото среди изображений"
    }
  ],

  questions: [
    {
      type: "photo",
      url: "https://c1.staticflickr.com/3/2012/2135262359_1e8118f37f_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/9/8007/7474850234_6f220d249e_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/9/8195/8149375513_c2f37308d1_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/4/3561/3391067011_dfea55be7d_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/4/3816/19906000779_4b3cfb9629_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/4/3772/10426763795_1c0e6033c9_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/8/7331/15809416364_ac0dd60471_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/5/4009/4493453495_7b9c1f50c1_b.jpg",
      content: "people"
    },
    {
      type: "photo",
      url: "https://c1.staticflickr.com/7/6087/6056545730_4ef1302917_b.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k42.kn3.net/CF42609C8.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k38.kn3.net/AD92BA712.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k35.kn3.net/9ACD0AC56.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k32.kn3.net/42C83EF0A.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k39.kn3.net/B27A12A74.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k37.kn3.net/47F2604E3.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k38.kn3.net/20B8A2B58.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k42.kn3.net/F588C1419.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k43.kn3.net/956572A45.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k43.kn3.net/27AC45B8B.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k39.kn3.net/E07A38605.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k36.kn3.net/1619797DF.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k37.kn3.net/695A61B3C.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k37.kn3.net/0F4598844.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k35.kn3.net/2B925F44D.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k36.kn3.net/E9B401148.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k34.kn3.net/4244FE50B.jpg",
      content: "people"
    },
    {
      type: "painting",
      url: "https://k42.kn3.net/D2F0370D6.jpg",
      content: "animal"
    },
    {
      type: "painting",
      url: "https://k41.kn3.net/CF684A85A.jpg",
      content: "animal"
    },
    {
      type: "painting",
      url: "https://k37.kn3.net/51254FE87.jpg",
      content: "animal"
    },
    {
      type: "painting",
      url: "https://k43.kn3.net/1C4F7F5D5.jpg",
      content: "animal"
    },
    {
      type: "painting",
      url: "https://k41.kn3.net/FF5009BF0.jpg",
      content: "animal"
    },
    {
      type: "painting",
      url: "https://k40.kn3.net/6A7A24F7C.jpg",
      content: "nature"
    },
    {
      type: "painting",
      url: "https://k31.kn3.net/4BF6BBF0E.jpg",
      content: "nature"
    },
    {
      type: "painting",
      url: "https://k42.kn3.net/D660F0768.jpg",
      content: "nature"
    },
    {
      type: "painting",
      url: "https://k32.kn3.net/5C7060EC5.jpg",
      content: "nature"
    }
  ]
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
const gameOption = `
          <div class="game__option">
            <img src="${game.question.url}">
            ${gameAnswer}
          </div>`;
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
const gameLivesFull = "<img src='img/heart__full.svg' class='game__heart' alt='Life' width='32' height='32'>";
const gameLivesEmpty = "<img src='img/heart__empty.svg' class='game__heart' alt='Life' width='32' height='32'>";
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
