import { defaultSwiper, netflixSwiper } from './lib/swiper'

// eslint-disable-next-line no-unused-vars
const swiper_default = defaultSwiper('.swiper-summary',
  {
    buttonPrevClass: '.swiper-button-prev-summary',
    buttonNextClass: '.swiper-button-next-summary'
  })

// eslint-disable-next-line no-unused-vars
const swiper_netflix = netflixSwiper('.swiper-netflix',
  {
    buttonPrevClass: '.swiper-button-prev-netflix',
    buttonNextClass: '.swiper-button-next-netflix'
  })
