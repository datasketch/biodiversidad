/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const groups = [
  {
    id: 'grupos-biologicos',
    name: 'Grupos biológicos',
    color: 'green',
    cols: 4,
    items: [
      {
        name: 'Animales',
        image: '/images/grupos-biologicos/animales-bg.svg'
      },
      {
        name: 'Plantas',
        image: '/images/grupos-biologicos/plantas-bg.svg',
        children: [
          {
            name: 'Mamíferos'
          },
          {
            name: 'Aves'
          },
          {
            name: 'Anfibios'
          },
          {
            name: 'Reptiles'
          },
          {
            name: 'Peces'
          }
        ]
      },
      {
        name: 'Hongos',
        image: '/images/grupos-biologicos/hongos-bg.svg'
      },
      {
        name: 'Bacterias',
        image: '/images/grupos-biologicos/bacterias-bg.svg'
      }
    ]
  },
  {
    id: 'tematicas',
    name: 'Temáticas',
    color: 'green-dark',
    cols: 5,
    items: [
      {
        name: 'Especies amenazadas',
        image: '/images/tematicas/especies-amenazadas.svg'
      },
      {
        name: 'Especies endémicas',
        image: '/images/tematicas/especies-endemicas.svg'
      },
      {
        name: 'Especies exóticas',
        image: '/images/tematicas/especies-exoticas.svg'
      },
      {
        name: 'Especies CITES',
        image: '/images/tematicas/especies-CITES.svg'
      },
      {
        name: 'Especies migratorias',
        image: '/images/tematicas/especies-migratorias.svg'
      }
    ]
  },
  {
    id: 'regiones',
    name: 'Regiones',
    color: 'blue-dark',
    cols: 3,
    items: [
      {
        name: 'Áreas protegidas',
        image: '/images/regiones/areas-protegidas.svg'
      },
      {
        name: 'Áreas marinas',
        image: '/images/regiones/areas-marinas.svg'
      },
      {
        name: 'Regiones naturales',
        image: '/images/regiones/regiones-naturales.svg'
      },
      {
        name: 'Municipios',
        image: '/images/regiones/departamentos.svg'
      },
      {
        name: 'Ecosistemas estratégicos',
        image: '/images/regiones/ecosistemas-estratetigicos.svg'
      },
      {
        name: 'Territorios indígenas',
        image: '/images/regiones/territorios-indigenas.svg'
      }
    ]
  }
]

const TreeItem = ({ item, color }) => {
  const [isActive, setIsActive] = useState(false)
  console.log(isActive)
  const hasChildren = item.children && item.children.length
  return (
      <li>
        <div className={`bg-white-3 border border-${color}`}>
          <div className="py-8 px-2 text-center h-36">
            {
              item.image
                ? <img className="mx-auto h-7" src={item.image} alt={item.name} />
                : <div className={`mx-auto bg-${color} bg-opacity-20 w-24 h-7`}></div>
            }
            <p className="mt-4 font-bold text-lg">{item.name}</p>
          </div>
          <button className={`w-full border-t py-3 border-${!isActive ? color : 'white'}`} onClick={() => setIsActive(!isActive)}>
            <img className="mx-auto h-3" src={`/images/public/arrow-bottom-${color}.svg`} alt="arrow bottom" />
          </button>
        </div>
        {isActive && <div>I'm open</div>}
      </li>
  )
}

const Group = ({ group }) => {
  return (
      <>
        <section className={`pt-24 px-6 bg-${group.color}`}>
          <div className="mx-auto max-w-6xl w-11/12">
            <h2 className="text-white font-bold text-xl lg:text-2xl">
              <span className="font-normal text-lg">Conoce las cifras por </span>{group.name}
            </h2>
            <ul className={`grid grid-cols-1 lg:grid-cols-${group.cols} gap-8 mt-16`}>
              {group.items.map((item, index) => {
                return (
                  <TreeItem item={item} color={group.color} key={index} />
                )
              })}
            </ul>
          </div>
        </section>
        <div className="bg-cultured h-32" style={{ marginTop: '-36px' }}></div>
      </>
  )
}

const App = () => {
  return (
      <>
        {groups.map(group => {
          return <Group group={group} key={group.id} />
        })}
      </>
  )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)
