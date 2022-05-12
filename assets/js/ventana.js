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
        image: '/images/grupos-biologicos/animales-bg.svg',
        statistics: [
          {
            label: 'Especies amenazadas',
            value: '86',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies CITES',
            value: '216',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies endémicas',
            value: '41',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          }
        ],
        children: [
          {
            name: 'Destacados'
          },
          {
            name: 'Vertebrados',
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
            name: 'Invertebrados'
          }
        ]
      },
      {
        name: 'Plantas',
        image: '/images/grupos-biologicos/plantas-bg.svg',
        statistics: [
          {
            label: 'Plantas',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies CITES',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies endémicas',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          }
        ],
      },
      {
        name: 'Hongos',
        image: '/images/grupos-biologicos/hongos-bg.svg',
        statistics: [
          {
            label: 'Hongos',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies CITES',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies endémicas',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          }
        ],
      },
      {
        name: 'Bacterias',
        image: '/images/grupos-biologicos/bacterias-bg.svg',
        statistics: [
          {
            label: 'Bacterias',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies CITES',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          },
          {
            label: 'Especies endémicas',
            value: 'x',
            image: '/images/public/chart.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
          }
        ],
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
        image: '/images/tematicas/especies-amenazadas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: '15',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
          }
        ],
        featured: [
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'Mikania micrantha',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: '13'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'Columba livia',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: '8'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'Syngonium podophyllum',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: '3'
          }
        ]
      },
      {
        name: 'Especies endémicas',
        image: '/images/tematicas/especies-endemicas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
          }
        ],
        featured: [
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          }
        ]
      },
      {
        name: 'Especies exóticas',
        image: '/images/tematicas/especies-exoticas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
          }
        ],
        featured: [
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          }
        ]
      },
      {
        name: 'Especies CITES',
        image: '/images/tematicas/especies-CITES.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
          }
        ],
        featured: [
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          }
        ]
      },
      {
        name: 'Especies migratorias',
        image: '/images/tematicas/especies-migratorias.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit'],
          }
        ],
        featured: [
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          },
          {
            image: '/images/regiones/departamentos/feature-1.jpg',
            label: 'x',
            details: [
              'Lorem ipsum dolor sit dolor',
              'Lorem ipsum dolor sit dolor'
            ],
            value: 'x'
          }
        ]
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

const BiologicGroups = ({ data, name, isActive }) => {
  const { items } = data
  const result = items.filter(i => i.name === name)
  return (
    <>
      <div>
        <h2 className="text-center font-bold text-xl xl:text-2xl">
          {isActive && result[0].name}
        </h2>
      </div>
      <div className="mx-auto lg:w-11/12 pb-8">
        <div className="flex flex-col lg:flex-row space-y-12  lg:space-y-0 justify-evenly">
          {isActive && result[0].statistics?.map(s => {
            return (
              <div key={s.label} className="space-y-6 md:col-start-1 md:col-end-4 lg:col-end-2">
                <h3 className="font-open-sans-condensed text-base text-center">
                  <span className="block font-oswald text-5xl xl:text-6xl font-bold mb-2">
                    {s.value}
                  </span>
                  {s.label}
                </h3>
                <img className="mx-auto" src={s.image} alt="chart" />
                <div className="space-y-4 text-center">
                  {
                    s.details.map((d, i) => {
                      return (
                        <p key={`details-${i}`}>
                          {d}
                        </p>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

const Thematics = ({ data, name, isActive }) => {
  const { items } = data;
  const result = items.filter(i => i.name === name)
  return (
    <div className="mx-auto lg:w-11/12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
        <div className="flex flex-col justify-between pb-8 space-y-12">
          {
            isActive && result[0].statistics?.map(s => {
              return (
                <div className="space-y-6">
                  <h3 className="font-open-sans-condensed text-base text-center">
                    <span className="block font-oswald text-5xl xl:text-6xl font-bold mb-2">
                      {s.value}
                    </span>
                    {s.label}
                  </h3>
                  <img className="mx-auto" src="/images/public/chart-blue.svg" alt="chart" />
                  <div className="space-y-1 text-center">
                    {
                      s.details.map((d, i) => {
                        return (
                          <p key={`details-${i}`}>
                            {d}
                          </p>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
          <div className="text-center">
            <span className="inline-block py-2 px-10 border-blue-section border-2 text-blue-section">
              Listado de especies
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-blue-2 font-bold text-xl xl:text-2xl">
            {isActive && result[0].name} destacadas
          </h2>
          <div>
            {
              isActive && result[0].featured?.map(f => {
                return (
                  <div className="flex justify-between space-x-6 xl:space-x-10 py-8 border-b-2 border-green-2">
                    <div className="w-2/6">
                      <img src={f.image} />
                    </div>
                    <div className="w-4/6 flex flex-col justify-between">
                      <div>
                        <h3 className="xl:text-lg font-bold">
                          {f.label}
                        </h3>
                      </div>
                      <div>
                        {
                          f.details.map((d, i) => {
                            return (
                              <p key={`details-${i}`}>
                                {d}
                              </p>
                            )
                          })
                        }
                      </div>
                      <div>
                        <p className="font-open-sans-condensed">
                          <span className="font-oswald font-bold text-xl xl:text-2xl">
                            { f.value }
                          </span>
                          Registros
                        </p>
                      </div>
                      <div className="flex">
                        <div className="w-12 h-1" style={{ backgroundColor: '#93FF41' }}>&nbsp;</div>
                        <div className="w-12 h-1" style={{ backgroundColor: '#FF4141' }}>&nbsp;</div>
                        <div className="w-12 h-1" style={{ backgroundColor: '#FFB341' }}>&nbsp;</div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Regiones = ({ data, name, isActive }) => {
  return (
    <>
      <div className="space-y-8 text-center font-bold">
        <h2 className="text-xl xl:text-2xl mx-auto text-blue-dark" style={{ maxWidth: '442px' }}>
          Número de especies registradas por municipios de Nariño
        </h2>
        <img className="mx-auto" src="/images/public/graphic.svg" alt="grapich" />
        <h3>
          Municipios de Nariño
        </h3>
      </div>
      <div className="text-center space-y-5 mx-auto pb-8" style={{ maxWidth: '445.9px' }}>
        <h3 className="font-bold text-xl xl:text-2xl text-blue-light space-y-5">
          Explora municipios
        </h3>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <select defaultValue='default' className="border border-blue-dark py-2 px-8" name="municipios" id="municipios">
          <option value="default" disabled>Selecciona un municipio</option>
          <option value="Puerres">Puerres</option>
          <option value="Pupiales">Pupiales</option>
          <option value="Ricaurte">Ricaurte</option>
          <option value="Roberto Payán">Roberto Payán</option>
        </select>
      </div>
    </>
  )
}

const TreeItem = ({ item, color, isActive, setIsActive, setValueBreadCrumb }) => {
  const handleClick = (e) => {
    setIsActive(!isActive)
    setValueBreadCrumb(e.target.closest('button').dataset.name)
  }

  // const hasChildren = item.children && item.children.length
  return (
    <div className={`bg-white-3 border border-${color}`}>
      <div className="py-8 px-2 text-center h-36">
        {
          item.image
            ? <img className="mx-auto h-7" src={item.image} alt={item.name} />
            : <div className={`mx-auto bg-${color} bg-opacity-20 w-24 h-7`}></div>
        }
        <p className="mt-4 font-bold text-lg">{item.name}</p>
      </div>
      <button data-name={item.name} className={`w-full border-t py-3 border-${color}`} onClick={handleClick}>
        <img className="mx-auto h-3" src={`/images/public/arrow-bottom-${color}.svg`} alt="arrow bottom" />
      </button>
    </div>
  )
}

const LayoutGroup = ({ children, setIsActive, isActive, valueBreadCrumb }) => {
  return (
    <div className={`bg-white py-12 lg:py-16 xl:py-20 -mt-9 ${!isActive && 'hidden'}`}>
      <div className="mx-auto w-10/12 max-w-screen-xl bg-white-3">
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="inline-flex items-center space-x-2 font-open-sans-condensed text-white bg-blue-light py-2 px-6">
                <span>
                  {valueBreadCrumb}
                </span>
                <img src="/images/public/breadcrumbs-arrow.svg" alt="breadcrum" />
              </p>
            </div>
            <button onClick={() => setIsActive(!isActive)} className="pr-2">
              <img className="w-6 h-6" src="/images/public/close.svg" alt="close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

const Group = ({ group }) => {
  const [isActive, setIsActive] = useState(false)
  const [valueBreadCrumb, setValueBreadCrumb] = useState('')
  return (
    <div>
      <div className={`pt-24 px-6 bg-${group.color}`}>
        <div className="mx-auto max-w-6xl w-11/12">
          <h2 className="text-white font-bold text-xl lg:text-2xl">
            <span className="font-normal text-lg">Conoce las cifras por </span>{group.name}
          </h2>
          <ul className={`grid grid-cols-1 lg:grid-cols-${group.cols} gap-8 mt-16`}>
            {group.items.map((item, index) => {
              return (
                <TreeItem item={item} color={group.color} isActive={isActive} setIsActive={setIsActive} setValueBreadCrumb={setValueBreadCrumb} key={index} />
              )
            })}
          </ul>
        </div>
      </div>
      <LayoutGroup isActive={isActive} setIsActive={setIsActive} valueBreadCrumb={valueBreadCrumb}>
        {
          group.id === 'grupos-biologicos' && <BiologicGroups data={group} name={valueBreadCrumb} isActive={isActive} />
        }
        {
          group.id === 'tematicas' && <Thematics data={group} name={valueBreadCrumb} isActive={isActive} />
        }
        {
          group.id === 'regiones' && <Regiones data={group} name={valueBreadCrumb} isActive={isActive} />
        }
      </LayoutGroup>
    </div>
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
