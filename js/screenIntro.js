import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenGreeting from './screenGreeting.js';

export default () => {
  let screenIntro = loadTemplate(`
            <div class="intro">
              <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
              Sparnaay.</p>
            </div>`);

  const intro = showSlide(screenIntro);

  const asterisk = intro.querySelector('.intro__asterisk');

  asterisk.addEventListener('click', () => {
    screenGreeting();
  });

  return intro;
}

