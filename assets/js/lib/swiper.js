// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper'

export const netflixSwiper = (
  element = '.swiper',
  buttons = {
    buttonNextClass: '.swiper-button-next',
    buttonPrevClass: '.swiper-button-prev'
  }) => {
  // init Swiper:
  return new Swiper(element, {
    // configure Swiper to use modules
    modules: [Navigation],

    // Optional parameters
    loop: true,
    spaceBetween: 25,
    slidesPerView: 'auto',

    // Navigation arrows
    navigation: {
      nextEl: buttons.buttonNextClass,
      prevEl: buttons.buttonPrevClass
    }
  })
}
