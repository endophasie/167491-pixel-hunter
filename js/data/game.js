let game = {
  time: 0,
  lifes: 3,

  questions: {
    questionDouble: {
      type: 1,
      text: 'Угадайте для каждого изображения фото или рисунок?',
      pic: 'http://placehold.it/468x458',
      imgW: 468,
      imgH: 458
    },
    questionOnly: {
      type: 2,
      text: 'Угадай, фото или рисунок?',
      pic: 'http://placehold.it/705x455',
      imgW: 705,
      imgH: 455
    },
    questionTriple: {
      type: 3,
      text: 'Найдите рисунок среди изображений',
      pic: 'http://placehold.it/304x455',
      imgW: 304,
      imgH: 455
    }
  },

  answer: {
    type: 'foto',
    pic: 'img/pic1.jpg',
    alt: 'Option'
  }
};

export default game;
