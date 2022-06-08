const arbol_grupos_biologicos = require('./arbol_grupos_biologicos.json')
const arbol_regiones = require('./arbol_regiones.json')
const arbol_tematicas = require('./arbol_tematica.json')

export const arboles = {
  grupos_biologicos: arbol_grupos_biologicos.children,
  regiones: arbol_regiones.children,
  tematicas: arbol_tematicas.children
}
