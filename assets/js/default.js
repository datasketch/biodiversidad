'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav')
const buttonMenu = document.querySelector('.menu-button')
const iconMenu = document.querySelector('.menu-icon')

// FUNCTIONS
const menuToggle = () => {
  // SHOW MENU BAR
  navMobile.classList.toggle('nav--active')
  // SHOW ICON TRANSITION
  iconMenu.classList.toggle('menu-icon--active')
}

// EVENTS HANDLERS
buttonMenu.addEventListener('click', menuToggle)

window.addEventListener('scroll', (e) => {
  if (e.isTrusted && navMobile.classList.contains('nav--active')) menuToggle()
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMobile.classList.contains('nav--active')) menuToggle()
})
