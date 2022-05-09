// core version + navigation, pagination modules:
import Swiper, { Navigation, Autoplay, FreeMode } from 'swiper'

export const defaultSwiper = (
  element = '.swiper',
  buttons = {
    buttonNextClass: '.swiper-button-next',
    buttonPrevClass: '.swiper-button-prev'
  }
) => {
  // init Swiper:
  return new Swiper(element, {
    // configure Swiper to use modules
    modules: [Navigation],
    // Optional parameters
    loop: false,
    spaceBetween: 25,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: buttons.buttonNextClass,
      prevEl: buttons.buttonPrevClass
    }
  })
}

export const netflixSwiper = (
  element = '.swiper',
  buttons = {
    buttonNextClass: '.swiper-button-next',
    buttonPrevClass: '.swiper-button-prev'
  }) => {
  // init Swiper:
  return new Swiper(element, {
    // configure Swiper to use modules
    modules: [Navigation, Autoplay, FreeMode],

    autoplay: {
      delay: 100
    },

    speed: 2000,

    // Optional parameters
    loop: false,
    spaceBetween: 25,
    slidesPerView: 'auto',
    freeMode: true,
    effect: 'coverflow',

    // Navigation arrows
    navigation: {
      nextEl: buttons.buttonNextClass,
      prevEl: buttons.buttonPrevClass
    }
  })
}
