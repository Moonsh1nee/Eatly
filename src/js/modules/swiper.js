import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    576: {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 46,
    },
  },
});

export default swiper;