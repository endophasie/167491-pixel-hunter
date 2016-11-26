import screenIntro from './screenIntro.js';
import screenGreeting from './screenGreeting.js';
import screenRules from './screenRules.js';
import screenGame1 from './screenGame1.js';
import screenGame2 from './screenGame2.js';
import screenGame3 from './screenGame3.js';
import screenStats from './screenStats.js';

(function () {

  // Rules
  let rulesSubmit = screenRules.querySelector('.rules__button');
  let rulesField = screenRules.querySelector('.rules__input');

  rulesField.oninput = (e) => {
    if (e.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = `<span class="prev">
                          <img src="img/arrow_left.svg" alt="Left" width="50" height="50">
                        </span>
                        <span class="next">
                          <img src="img/arrow_right.svg" alt="Right" width="50" height="50">
                        </span>`;
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    screenIntro,
    screenGreeting,
    screenRules,
    screenGame1,
    screenGame2,
    screenGame3,
    screenStats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
