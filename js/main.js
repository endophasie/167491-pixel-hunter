import showSlide from './showSlide.js';
import screenIntro from './screenIntro.js';

(function () {

  const init = () => {
    showSlide(screenIntro);
  };

  document.addEventListener('DOMContentLoaded', init);

})();
