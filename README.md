# ReserviaV2

Réservia V2 - Nouvelle création et amélioration du site Réservia (1er version du site basé sur projet de formation OC (Transformez une maquette en site web avec HTML & CSS)

Réservia V1 : https://github.com/DaSilvaChristophe/ChristopheDaSilva_2_03052021

Réservia V2 : - HTML/CSS
BOOTSTRAP 5
JS

              - Axe d'amélioration côté Front :
                    - Suivi du design de la V1 avec mise en place d'animation CSS3 (Keyframes)
                    - Home Page : Mise en place de l'activation des Filtres pour un choix de préférences utilisateurs (non actif dans la V1)
                    - Création page inscription & connexion utilisateurs
                    - Inscription & Connexion Page : Formulaire avec validation des données utilisateurs côté Front
                    - Inscription & Connexion Page : Regex pour la validation des données utilisateurs intégré via l'attribut Pattern directement dans le HTML
                    - Utilisation de la méthode fetch pour la relation client-serveur

              - Axe d'amélioration côté Back :
                    - Création serveur Node avec framework Express
                    - Mise en place BDD mongoDB
                    - Variable d'environnement pour le MDP BDD
                    - Mise en place d'un systeme d'authentification utilisateur (jsonwebtoken) avec cryptage & salage de MDP (bcrypt)
                    - Dépendances versions :
                      "bcrypt": "^5.0.1",
                      "express": "^4.17.3",
                      "jsonwebtoken": "^8.5.1",
                      "mongoose": "^6.2.3",
                      "mongoose-unique-validator": "^3.0.0",
                      "dotenv": "^16.0.0",


Connexion serveur : Ouvrez votre terminal => cd ReserviaV2 => cd backend => npm install => nodemon server