const btnStart = document.querySelector('.btn__hero--start');
const btnPro = document.querySelector('.btn__hero--pro');

btnPro.addEventListener('mouseenter', () => {
  btnStart.classList.add('btn__start--hover');
});

btnPro.addEventListener('mouseleave', () => {
  btnStart.classList.remove('btn__start--hover');
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

import swiper from './modules/swiper.js';
swiper();
