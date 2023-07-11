/**
 * Hero carousel setup using Splide.
 * 
 * @see https://splidejs.com/
 * 
 * @return {void}
 */
function heroCarousel() {
  let carousels = document.querySelectorAll('.hero-carousel .splide');

  carousels.forEach((carousel) => {
    new Splide(carousel, {
      arrows: false,
    }).mount();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  heroCarousel();
});
