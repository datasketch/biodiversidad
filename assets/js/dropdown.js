// funcional
console.Log('dropdown.js loaded')
const navMenuItems = Array.from(document.querySelectorAll('.nav-menu-item'))

const events = ['mouseover', 'focusin']

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
