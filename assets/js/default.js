'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav')
const buttonMenu = document.querySelector('.menu-button')
const iconMenu = document.querySelector('.menu-icon')
const navMenuItems = Array.from(document.querySelectorAll('.nav-menu-item'))
const events = ['mouseover', 'focusin']

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
navMenuItems.forEach((navMenuItem) => {
  const margin = 50
  events.forEach((eventName) => {
    navMenuItem.addEventListener(eventName, () => {
      const submenu = navMenuItem.querySelector('.nav-menu-item-submenu')
      if (!submenu) return
      const boundingClientRect = submenu.getBoundingClientRect()
      const totalWidth =
                boundingClientRect.left + boundingClientRect.width + margin
      if (totalWidth > window.innerWidth) {
        submenu.style.right = '0'
        submenu.style.left = 'auto'
      } else {
        submenu.style.left = '0'
        submenu.style.right = 'auto'
      }
    })
  })
})
