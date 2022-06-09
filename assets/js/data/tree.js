import grupos_biologicos from './arbol_grupos_biologicos.json'
import regiones from './arbol_regiones.json'
import tematicas from './arbol_tematica.json'
import narino_subreg from './narino_subreg.json'
import narino_gr_bio from './narino_gr_bio.json'
import { groups } from './cifras'

export const tree = [
  {
    id: 'grupos-biologicos',
    name: 'Grupos biológicos',
    color: 'green',
    cols: 5,
    stadistics: narino_gr_bio,
    children: grupos_biologicos.children,
    items: groups.filter(item => item.id === 'grupos-biologicos')[0].items
  },
  {
    id: 'tematicas',
    name: 'Temáticas',
    color: 'green-dark',
    cols: 5,
    stadistics: [],
    children: tematicas.children,
    items: groups.filter(item => item.id === 'tematicas')[0].items
  },
  {

    id: 'regiones',
    name: 'Regiones',
    color: 'blue-dark',
    cols: 6,
    stadistics: narino_subreg,
    children: regiones.children,
    items: groups.filter(item => item.id === 'regiones')[0].items
  }
]
