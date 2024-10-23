import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 46,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();