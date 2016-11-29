import loadTemplate from './loadTemplate.js';
import showSlide from './showSlide.js';
import screenGreeting from './screenGreeting.js';

let screenIntro = loadTemplate(`
          <div class="intro">
            <h1 class="intro__asterisk">*</h1>
            <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
            Sparnaay.</p>
          </div>`);

showSlide(screenIntro);

const introBox = document.querySelector('.intro');
const asterisk = introBox.querySelector('.intro__asterisk');

asterisk.addEventListener('click', () => {
  showSlide(screenGreeting);
});

export default screenIntro;

