import { defaultSwiper, netflixSwiper } from './lib/swiper'
const dataPublicadores = require('./data/publicadores.json')

const search = document.getElementById('search')
const publicationCountry = document.getElementById('publicationCountry')
const orderBy = document.getElementById('orderBy')
const publishers = document.getElementById('publishers')
const pagination = document.querySelector('.pagination')

// eslint-disable-next-line no-unused-vars
const swiper_default = defaultSwiper('.swiper-summary',
  {
    buttonPrevClass: '.swiper-button-prev-summary',
    buttonNextClass: '.swiper-button-next-summary'
  })

// eslint-disable-next-line no-unused-vars
const swiper = netflixSwiper('.swiper-netflix',
  {
    buttonPrevClass: '.swiper-button-prev-netflix',
    buttonNextClass: '.swiper-button-next-netflix'
  })

const state = {
  originalData: dataPublicadores,
  filteredData: null,
  filters: {
    search: [],
    publicationCountry: [],
    orderBy: []
  },
  itemsPerPage: 15,
  currentPage: 1,
  numberOfPages: 4
}

function filterData () {
  publishers.innerHTML = ''
  const { filters, originalData } = state
  const hasLabelFilter = !!filters.search.length
  const hasPublicationCountryFilter = !!filters.publicationCountry.length
  const hasOrderBy = !!filters.orderBy.length
  state.filteredData = originalData

  if (hasLabelFilter) {
    state.filteredData = state.filteredData.filter((item) => item.label.toLowerCase().includes(filters.search[0].toLowerCase()))
  }

  if (hasPublicationCountryFilter) {
    if (filters.publicationCountry[0] !== '-') {
      state.filteredData = state.filteredData.filter((item) => filters.publicationCountry.includes(item.pais_publicacion))
    }
  }

  if (hasOrderBy) {
    if (filters.orderBy[0] === 'A') {
      state.filteredData.sort((a, b) => a.label.localeCompare(b.label))
    }
    if (filters.orderBy[0] === 'Z') {
      state.filteredData.sort((a, b) => b.label.localeCompare(a.label))
    }
  }

  paginate(state.currentPage, state.itemsPerPage, state.filteredData).forEach((item) => render(publishers, item))
  renderButtons(pagination, state.currentPage, state.itemsPerPage, state.filteredData)
}

search.addEventListener('keyup', (e) => {
  const { id: key, value } = e.target
  const filterKeyValue = state.filters[key]
  filterKeyValue[0] = value
  filterData()
})

publicationCountry.addEventListener('change', (e) => {
  const { id: key, value } = e.target
  const filterKeyValue = state.filters[key]
  filterKeyValue[0] = value
  filterData()
})

orderBy.addEventListener('change', (e) => {
  const { id: key, value } = e.target
  const filterKeyValue = state.filters[key]
  filterKeyValue[0] = value
  filterData()
})

pagination.addEventListener('click', (e) => {
  e.stopPropagation()
  const { value } = e.target
  console.log(Number(value))
  state.currentPage = Number(value)
  filterData()
})

console.log(state.currentPage)
window.addEventListener('load', () => {
  filterData()
})

const paginate = (page = 1, itemsPerPagination, data) => {
  const start = (page - 1) * itemsPerPagination
  const end = page * itemsPerPagination
  return data.slice(start, end)
}

const renderButtons = (parentEl, currentPage, itemsPerPage, data) => {
  parentEl.innerHTML = ''
  const totalPages = Math.ceil(data.length / itemsPerPage)
  let maxButtonsLeft = currentPage - Math.floor(state.numberOfPages / 2)
  let maxButtonsRight = currentPage + Math.floor(state.numberOfPages / 2)

  if (maxButtonsLeft < 1) {
    maxButtonsLeft = 1
    maxButtonsRight = state.numberOfPages
  }
  if (maxButtonsRight > totalPages) {
    maxButtonsLeft = totalPages - (state.numberOfPages - 1)
    maxButtonsRight = totalPages

    if (maxButtonsLeft < 1) {
      maxButtonsLeft = 1
    }
  }

  // if (state.currentPage !== 1) {
  //   parentEl.innerHTML += `<button value=${1} class="page px-2 py-1 font-bold text-blue-section hover:bg-blue-section hover:text-white"> < </button>`
  // }

  for (let page = maxButtonsLeft; page <= maxButtonsRight; page++) {
    if (page === currentPage) {
      parentEl.innerHTML += `<button value=${page} class="page px-2 py-1 font-bold text-white bg-blue-section hover:bg-blue-section hover:text-white">${page}</button>`
    } else {
      parentEl.innerHTML += `<button value=${page} class="page px-2 py-1 font-bold text-blue-section hover:bg-blue-section hover:text-white">${page}</button>`
    }
  }

  // if (state.currentPage !== totalPages) {
  //   parentEl.innerHTML += `<button value=${totalPages} class="page px-2 py-1 font-bold text-blue-section hover:bg-blue-section hover:text-white"> > </button>`
  // }
}

const render = (parentEl, item) => {
  const html = `
  <div class="relative pt-14 pb-7 bg-white-3" style="height: 252px;">
    <div class="mx-auto w-10/12 h-full">
        <div class="flex flex-col justify-between h-full">
            <div>
            <p class="text-blue-section italic">Pais de publicacion: <span class="font-semibold">
             ${item.pais_publicacion}</span>
                </p>
                <div class="absolute top-0 right-0">
                    <img class="w-20 h-20" src=${item.url_logo || ''} alt=${item.label}>
                </div>
                <p class="font-open-sans text-lg font-bold text-blue-section">
                    ${item.label}
                </p>
            </div>
            <table class="xl:mx-auto xl:w-11/12">
                <tbody>
                    <tr class="text-sm">
                        <th class="text-left bg-gray-light">Observaciones</th>
                        <th class="text-blue-section border-l bg-gray-light border-blue-section">
                            ${item.registros || ''}
                        </th>
                    </tr>
                    <tr class="text-sm">
                        <th class="text-left">Total Especies</th>
                        <th class="border-l border-blue-section">
                            ${item.especies || ''}
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>`

  parentEl.insertAdjacentHTML('beforeend', html)
}

// console.log(pagination.children.length)
