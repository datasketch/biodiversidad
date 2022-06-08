import { arboles } from './arboles'
import { data } from './data'
import { imagesData } from './images'

export const groups = [
  {
    id: 'grupos-biologicos',
    name: 'Grupos biológicos',
    color: 'green',
    cols: arboles.grupos_biologicos.length,
    arbol: arboles.grupos_biologicos,
    data: data.grupos_biologicos,
    imageNames: imagesData.grupos_biologicos
  },
  {
    id: 'tematicas',
    name: 'Temáticas',
    color: 'green-dark',
    cols: arboles.tematicas.length,
    arbol: arboles.tematicas,
    data: data.tematicas,
    imageNames: imagesData.tematicas
  },
  {
    id: 'regiones',
    name: 'Regiones',
    color: 'blue-dark',
    cols: arboles.regiones.length,
    arbol: arboles.regiones,
    data: data.regiones,
    imageNames: imagesData.regiones
  }
]
