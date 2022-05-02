/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

const nav = document.getElementById('navbar')
const menuData = [
    { label: 'Colombia' },
    {
        label: 'Regiones',
        children: [{
            label: 'Departamentos',
            children: [
                { label: 'Amazonas' },
                { label: 'Antioquia' },
                { label: 'Arauca' },
                { label: 'Atlántico' },
                { label: 'Bolívar' },
                { label: 'Boyacá' },
                { label: 'Caldas' },
                { label: 'Caquetá' },
                { label: 'Casanare' },
                { label: 'Cauca' },
                { label: 'Cesar' },
                { label: 'Chocó' },
                { label: 'Córdoba' },
                { label: 'Cundinamarca' },
                { label: 'Guainía' },
                { label: 'Guaviare' },
                { label: 'Huila' },
                { label: 'La Guajira' },
                { label: 'Magdalena' },
                { label: 'Meta' },
                { label: 'Nariño' },
                { label: 'N. de Santander' },
                { label: 'Putumayo' },
                { label: 'Quindío' },
                { label: 'Risaralda' },
                { label: 'San Andrés y P.' },
                { label: 'Santander' },
                { label: 'Sucre' },
                { label: 'Tolima' },
                { label: 'Valle del Cauca' },
                { label: 'Vaupés' }]

        },
        {
            label: 'Areas protegidas',
            children: [{ label: 'Area Natural Unica' }, { label: 'Parque Nacional' }, { label: 'Reservas' }]
        },
        {
            label: 'Areas marinas',
            children: [{ label: 'Mar Caribe' }, { label: 'Oceano Pacifico' }, { label: 'Area de regimen Comun' }]
        },
        {
            label: 'Regiones Natuales',
            children: [{ label: 'Mar Caribe' }, { label: 'Oceano Pacifico' }, { label: 'Area de regimen Comun' }]
        },
        {
            label: 'Ecosistemas estratégicos',
            children: [{ label: 'Mar Caribe' }, { label: 'Oceano Pacifico' }, { label: 'Area de regimen Comun' }]
        },
        {
            label: 'Territorios indigenas',
            children: [{ label: 'Mar Caribe' }, { label: 'Oceano Pacifico' }, { label: 'Area de regimen Comun' }]
        }
        ]
    },
    {
        label: 'Grupos Biologicos',
        children: [{}]
    },
    { label: 'Tematicas', children: [{}] },
    { label: 'Explorador' },
    { label: 'Más', children: [{}] }

]

const href = location.href

function renderDropdown(root, className) {
    const createDropdown = (root, label = '') => {
        if (!root.children) {
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.textContent = root.label
            a.href = `${href}${label}/${root.label}`
            li.appendChild(a)
            return li
        }
        const details = document.createElement('details')
        const summary = document.createElement('summary')
        const ul = document.createElement('ul')
        summary.textContent = root.label
        details.append(summary)
        details.append(ul)
        const children = root.children.map((child) => createDropdown(child))
        children.forEach((child) => {
            if (child.matches('li')) {
                ul.append(child)
            } else {
                const li = document.createElement('li')
                li.append(child)
                ul.append(li)
            }
        })
        return details
    }

    const close = function (origin) {
        const all = Array.from(this.querySelectorAll('[open]'))
        all.forEach((child) => {
            if (child !== origin) {
                child.removeAttribute('open')
            }
        })
    }

    const dropdown = createDropdown(root)
    dropdown.classList.add(className)

    const allDropdowns = Array.from(dropdown.querySelectorAll('details'))
    console.log(allDropdowns)
    allDropdowns.unshift(dropdown)
    console.log(allDropdowns)
    allDropdowns.forEach((d) => {
        d.addEventListener('toggle', function (e) {
            e.stopPropagation()
            if (!d.open) {
                close.call(this)
                return
            }
            const parent = this.parentNode.closest('details')
            if (parent) {
                close.call(parent, this)
            }
        })
    })

    return dropdown
}

const dropdown = menuData.map((item) => renderDropdown(item, 'dropdown'))
console.log(dropdown)
nav.append(...dropdown)
