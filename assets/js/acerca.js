const navigation = document.querySelector('.navigation-scroll')

navigation.addEventListener('click', function (e) {
  e.preventDefault()
  const childNavigation = e.target.closest('.navigation-child')
  // eslint-disable-next-line no-useless-return
  if (!childNavigation) return

  // clear
  document.querySelectorAll('.navigation-child').forEach(child => {
    child.style.color = null
    child.style.fontWeight = null
  })

  // active
  childNavigation.style.color = '#247CE1'
  childNavigation.style.fontWeight = '700'

  // scroll in to section
  const id = childNavigation.getAttribute('href')
  document.querySelector(id).scrollIntoView({ block: 'start', behavior: 'smooth' })
})
