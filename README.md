# PROJET:

Ce projet est une mini application web de blagues. Elle est composée d'une landing page avec un bouton qui à chaque clic, affichera de manière aléatoire une blague. Toutes les blagues proviennent d'une API versionnée.


# Les différents liens : 

## URL pour le site : 
https://aurelieblanc.github.io/CDA-repoFront-CarambarBlagues/

## Repo Front : 
https://github.com/AurelieBlanc/CDA-repoFront-CarambarBlagues

## Repo Back / API : 
https://github.com/AurelieBlanc/CDA-repoBack-CarambarBlagues

## Documentation SWAGGER : 
https://cda-repoback-carambarblagues.onrender.com/api-docs/


# STACK TECHNIQUE : 
- API versionnée
- Création de 4 endpoints (TESTES via POSTMAN) :
  - pour ajouter une blague 
  - pour consulter TOUTES les blagues
  - pour consulter une blague via son id
  - pour consulter une blague de manière aléatoire
- environnement Node, Express, Sequelize, SQLIte
- Back déployé sur render.com
- Front déployé via GitHub Pages
- Approche MVC : Model (Sequelize ( dossier models >>> fichier Blague.js )) , View (interface réalisé avec REACT), Controller (dossier controllers >>> fichier blagueController.js)
- API documentée via SWAGGER: https://cda-repoback-carambarblagues.onrender.com/api-docs/


