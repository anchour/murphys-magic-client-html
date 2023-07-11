import './lib/carousels.js';

const classes = {
  NAV_OPEN: 'nav-open',
};

function mobileNav() {
  const mobileNav = document.querySelector('.mobile-navigation');
  const mobileToggle = document.querySelector('.header__nav__menu-toggle');

  mobileToggle.addEventListener('click', function () {
    const b = document.body;
    b.classList.toggle(classes.NAV_OPEN);

    if (b.classList.contains(classes.NAV_OPEN)) {
      disableBodyScroll(mobileNav);
    } else {
      clearAllBodyScrollLocks();
    }
  });
}

function main() {
  mobileNav();
}

document.addEventListener('DOMContentLoaded', main);
