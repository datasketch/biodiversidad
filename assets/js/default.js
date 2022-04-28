'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav')
const buttonMenu = document.querySelector('.menu-button')
const iconMenu = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const menuName = document.querySelector('.menu__name')
const menuPanel = document.querySelector('.menu__panel')

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

menu.addEventListener('click', function (e) {
  menuName.classList.toggle('menu__name--active')
  menuPanel.classList.toggle('menu__panel--active')
})
