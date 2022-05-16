
library(tidyverse)
library(yaml)

regiones <- read_delim("db-cifras-sib/regiones.tsv")

deptos_divipola <- read_delim("db-cifras-sib/divipola_departamentos.tsv")
publicadores <- read_delim("db-cifras-sib/publicadores.tsv")

especies <- read_delim("db-cifras-sib/especies.tsv")

sel_region <- "narino"

reg <- regiones |> filter(slug == sel_region) |> transpose()
reg <- reg[[1]]

frontmatter <- list()
frontmatter$title <- reg$label
frontmatter$slug <- reg$slug
frontmatter$fecha_corte <- as.character(as.Date(reg$fecha_corte, origin = "1970-01-01"))
frontmatter$layout <- "single"
frontmatter$featured <- TRUE
frontmatter$image <-"/images/regiones/departamentos/narino.jpg"
frontmatter$bgImage <- "/images/regiones/departamentos/banner-narino.png"
frontmatter$include_marino <- deptos_divipola |> 
  filter(slug == sel_region) |> pull(marino)
frontmatter$especies <- reg$especies
frontmatter$especies_continentales <- reg$especies_continentales
frontmatter$especies_marinas <- reg$especies_marinas
frontmatter$especies <- reg$observaciones
frontmatter$observaciones_continentales <- reg$observaciones_continentales
frontmatter$observaciones_marinas <- reg$observaciones_marinas

# Temática
tematica_json_path <- glue::glue("data/{sel_region}_tematica.json")
jsonlite::write_json(reg, 
                     paste0("../static/",tematica_json_path),
                     auto_unbox = TRUE, pretty = TRUE)
frontmatter$json_tematica <- tematica_json_path

# Grupos biologicos
grupo_biologico <- read_delim("db-cifras-sib/grupos_biologicos.tsv")

gr_bio_sel_region <- grupo_biologico |> 
  filter(slug_region == sel_region) 
gr_bio_json_path <- glue::glue("data/{sel_region}_gr_bio.json")
jsonlite::write_json(gr_bio_sel_region, 
                     paste0("../static/",gr_bio_json_path),
                     auto_unbox = TRUE, pretty = TRUE)
frontmatter$json_grupos_biologicos <- gr_bio_json_path

# Subregiones
arbol_regiones <- read_delim("db-cifras-sib/arbol_regiones.tsv")
arbol_regiones <- arbol_regiones |> filter(parent == sel_region)
tree <- FromDataFrameNetwork(arbol_regiones)
tree
l <- ToListExplicit(tree, unname = TRUE, nameName = "slug", 
                    childrenName = "children")
l
subreg_json_path <- glue::glue("data/{sel_region}_subreg.json")
jsonlite::write_json(l, 
                     paste0("../static/",subreg_json_path),
                     auto_unbox = TRUE, pretty = TRUE)
frontmatter$json_subregiones <- subreg_json_path

# Temáticas Especies
especie_tematica <- read_delim("db-cifras-sib/especie_tematica.tsv")
esp_tematica_sel_region <- especie_tematica |> 
  filter(slug_region == sel_region) |> 
  select(-slug_region) |> 
  group_by(slug_tematica)
x <- esp_tematica_sel_region |> 
  group_split() |> 
  set_names(unlist(group_keys(esp_tematica_sel_region)))  
tematica_esp_json_path <- glue::glue("data/{sel_region}_tematica_esp.json")
jsonlite::write_json(x, 
                     paste0("../static/",tematica_esp_json_path),
                     auto_unbox = TRUE, pretty = TRUE)
frontmatter$json_tematica_esp <- tematica_esp_json_path


# Publicadores
pubs_sel_region <- publicadores |> 
  filter(slug_region == sel_region)
pubs_json_path <- glue::glue("data/{sel_region}_pubs.json")
jsonlite::write_json(pubs_sel_region, 
                     paste0("../static/",pubs_json_path),
                     auto_unbox = TRUE, pretty = TRUE)
frontmatter$json_publicadores <- pubs_json_path

# Write YAML

yaml <- paste("---",
      yaml::as.yaml(frontmatter),
      "---\n\n",
      sep = "\n")
write_lines(yaml, glue::glue("../content/",sel_region,".md"))



