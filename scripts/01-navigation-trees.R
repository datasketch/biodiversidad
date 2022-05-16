
library(tidyverse)
library(data.tree)
library(jsonlite)

## Regiones

arbol_regiones <- read_delim("db-cifras-sib/arbol_regiones.tsv")

tree <- FromDataFrameNetwork(arbol_regiones)
tree

l <- ToListExplicit(tree, unname = TRUE, nameName = "slug", 
                    childrenName = "children")
l

jsonlite::write_json(l, "../static/data/arbol_regiones.json",
                     auto_unbox = TRUE, pretty = TRUE)

## Grupos biológicos

arbol_grupos_biologicos <- read_delim("db-cifras-sib/arbol_grupos_biologicos.tsv")

tree <- FromDataFrameNetwork(arbol_grupos_biologicos)
tree

l <- ToListExplicit(tree, unname = TRUE, nameName = "slug", 
                    childrenName = "children")
l

jsonlite::write_json(l, "../static/data/arbol_grupos_biologicos.json",
                     auto_unbox = TRUE, pretty = TRUE)



## Temática

arbol_tematica <- read_delim("db-cifras-sib/arbol_tematica.tsv")

tree <- FromDataFrameNetwork(arbol_tematica)
tree

l <- ToListExplicit(tree, unname = TRUE, nameName = "slug", 
                    childrenName = "children")
l

jsonlite::write_json(l, "../static/data/arbol_tematica.json",
                     auto_unbox = TRUE, pretty = TRUE)

## Publicadores

publicadores <- read_delim("db-cifras-sib/publicadores.tsv")

pubs <- publicadores |> 
  select(-slug_region) |> 
  distinct()
jsonlite::write_json(pubs, "../static/data/publicadores.json",
                     auto_unbox = TRUE, pretty = TRUE)


