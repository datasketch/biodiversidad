import { defaultSwiper, netflixSwiper } from './lib/swiper'
const dataPublicadores = require('./data/publicadores.json')

const search = document.getElementById('search')
const publicationCountry = document.getElementById('publicationCountry')
const orderBy = document.getElementById('orderBy')
const publishers = document.getElementById('publishers')

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
  }
}

function filterData () {
  publishers.innerHTML = ''
  const { filters, originalData } = state
  const hasLabelFilter = !!filters.search.length
  const hasPublicationCountryFilter = !!filters.publicationCountry.length
  const hasOrderBy = !!filters.orderBy.length
  state.filteredData = originalData

  if (hasLabelFilter) {
    state.filteredData = state.filteredData.filter((item) => item.label.includes(filters.search[0]))
    console.log(state.filteredData)
  }
  if (hasPublicationCountryFilter) {
    state.filteredData = state.filteredData.filter((item) => filters.publicationCountry.includes(item.pais_publicacion))
  }
  if (hasOrderBy) {
    if (filters.orderBy[0] === 'A') {
      state.filteredData.sort((a, b) => a.label.localeCompare(b.label))
    }
    if (filters.orderBy[0] === 'Z') {
      state.filteredData.sort((a, b) => b.label.localeCompare(a.label))
    }
  }
  state.filteredData.forEach((item) => render(publishers, item))
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

window.addEventListener('load', () => {
  filterData()
})

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
