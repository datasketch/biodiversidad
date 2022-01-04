export const groups = [
  {
    id: 'grupos-biologicos',
    name: 'Grupos biológicos',
    color: 'bittersweet',
    items: [
      {
        name: 'Invertebrados',
        image: '/images/invertebrados.svg'
      },
      {
        name: 'Vertebrados',
        image: '/images/vertebrados.svg',
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
        name: 'Plantas',
        image: '/images/plantas.svg'
      },
      {
        name: 'Hongos'
      },
      {
        name: 'Microorganismos',
        image: '/images/micro-organismos.svg'
      }
    ]
  },
  {
    id: 'areas-geograficas',
    name: 'Áreas geográficas',
    color: 'command-blue',
    items: [
      {
        name: 'Área marina',
        image: '/images/area-marina.svg'
      },
      {
        name: 'Municipios',
        image: '/images/municipios.svg'
      },
      {
        name: 'Áreas especiales'
      },
      {
        name: 'Áreas protegidas',
        image: '/images/areas-protegidas.svg'
      },
      {
        name: 'Ecosistemas estratégicos'
      }
    ]
  },
  {
    id: 'tematicas',
    name: 'Temáticas',
    color: 'forest',
    items: [
      {
        name: 'Especies amenazadas',
        image: '/images/especies-amenazadas.svg'
      },
      {
        name: 'Especies endémicas',
        image: '/images/especies-endemicas.svg'
      },
      {
        name: 'Especies exóticas',
        image: '/images/especies-exoticas.svg'
      },
      {
        name: 'Especies CITES'
      },
      {
        name: 'Especies migratorias',
        image: '/images/especies-migratorias.svg'
      }
    ]
  }
]
