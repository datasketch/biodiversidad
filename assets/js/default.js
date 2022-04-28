const menu = document.querySelector('.menu')
const menuName = document.querySelector('.menu__name')
const menuPanel = document.querySelector('.menu__panel')

menu.addEventListener('click', function (e) {
  menuName.classList.toggle('menu__name--active')
  menuPanel.classList.toggle('menu__panel--active')
})
