let showSlide = (slide) => {
  const mainElement = document.getElementById('main');

  mainElement.innerHTML = '';
  mainElement.appendChild(slide);

  return slide;
};

export default showSlide;
