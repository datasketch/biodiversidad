export const groups = [
  {
    id: 'grupos-biologicos',
    name: 'Grupos biológicos',
    color: 'green',
    cols: 5,
    items: [
      {
        name: 'Animales',
        image: '/images/grupos-biologicos/animales-bg.svg',
        image_active: '/images/grupos-biologicos/animales-white-bg.svg',
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
        image_active: '/images/grupos-biologicos/plantas-white-bg.svg',
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
        ]
      },
      {
        name: 'Bacterias',
        image: '/images/grupos-biologicos/bacterias-bg.svg',
        image_active: '/images/grupos-biologicos/bacterias-white-bg.svg',
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
        ]
      },
      {
        name: 'Algas',
        image: '/images/grupos-biologicos/hongos-bg.svg',
        image_active: '/images/grupos-biologicos/hongos-white-bg.svg',
        statistics: [
          {
            label: 'Algas',
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
        ]
      },
      {
        name: 'Microorganismos',
        image: '/images/grupos-biologicos/hongos-bg.svg',
        image_active: '/images/grupos-biologicos/hongos-white-bg.svg',
        statistics: [
          {
            label: 'Microorganismos',
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
        ]
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
        image_active: '/images/tematicas/especies-white-amenazadas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: '15',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
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
        image_active: '/images/tematicas/especies-white-endemicas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
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
        image_active: '/images/tematicas/especies-white-exoticas.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
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
        image_active: '/images/tematicas/especies-white-CITES.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
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
        image_active: '/images/tematicas/especies-white-migratorias.svg',
        statistics: [
          {
            label: 'Especies registradas',
            value: 'x',
            image: '/images/public/chart-blue.svg',
            details: ['Lorem ipsum dolor sit', 'Lorem ipsum dolor sit']
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
    cols: 6,
    items: [
      {
        name: 'Áreas protegidas',
        image: '/images/regiones/areas-protegidas.svg',
        image_active: '/images/regiones/areas-protegidas-white.svg'
      },
      {
        name: 'Áreas marinas',
        image: '/images/regiones/areas-marinas.svg',
        image_active: '/images/regiones/areas-marinas-white.svg'
      },
      {
        name: 'Regiones naturales',
        image: '/images/regiones/regiones-naturales.svg',
        image_active: '/images/regiones/regiones-naturales-white.svg'
      },
      {
        name: 'Municipios',
        image: '/images/regiones/departamentos.svg',
        image_active: '/images/regiones/departamentos-white.svg',
        statistics: '/images/public/graphic.svg',
        municipalities: [
          'Puerres',
          'Pupiales',
          'Ricaurte',
          'Roberto Payán']
      },
      {
        name: 'Ecosistemas estratégicos',
        image: '/images/regiones/ecosistemas-estratetigicos.svg',
        image_active: '/images/regiones/ecosistemas-estratetigicos-white.svg'
      },
      {
        name: 'Territorios indígenas',
        image: '/images/regiones/territorios-indigenas.svg',
        image_active: '/images/regiones/territorios-indigenas-white.svg'
      }
    ]
  }
]
