# PROJET:

Ce projet est une mini application web de blagues. Elle est composée d'une landing page avec un bouton qui à chaque clic, affichera de manière aléatoire une blague. Toutes les blagues proviennent d'une API versionnée.


# Liens Utiles : 

** Démo en ligne : 
https://aurelieblanc.github.io/CDA-repoFront-CarambarBlagues/

** Repo Front-end (REACT) : 
https://github.com/AurelieBlanc/CDA-repoFront-CarambarBlagues

** Repo Back-end (Node/Express) / API : 
https://github.com/AurelieBlanc/CDA-repoBack-CarambarBlagues

** Documentation SWAGGER : 
https://cda-repoback-carambarblagues.onrender.com/api-docs/

# Fonctionnalités : 
- Landing page avec un bouton pour afficher une blague aléatoire.
- API REST avec 4 endpoints :
  - Ajouter une blague (`POST`)
  - Récupérer toutes les blagues (`GET`)
  - Récupérer une blague par ID (`GET`)
  - Récupérer une blague aléatoire (`GET`)
- Blagues stockées dans une base SQLite.
- App testée avec Postman.
- API documentée avec Swagger.

# STACK TECHNIQUE : 
** Front-end** : React, CSS + déploiement sur GitHub Pages 
** Back-end**: Node.js, Express.js
- API versionnée
- Création de 4 endpoints (TESTES via POSTMAN) :
  - pour ajouter une blague 
  - pour consulter TOUTES les blagues
  - pour consulter une blague via son id
  - pour consulter une blague de manière aléatoire
- environnement Node, Express, Sequelize, SQLIte
- Back déployé sur render.com
- Front déployé via GitHub Pages
- Approche MVC :
   - Model : Sequelize (models/Blague.js) : définit la structure de la base de données
   - Controller : Express (controllers/blagueController.js) : gère la logique métier et les requêtes HTTP
   - View : REACT (repo Front) : affiche les blagues et interagit avec l'utilisateur 
- API documentée via SWAGGER: https://cda-repoback-carambarblagues.onrender.com/api-docs/


