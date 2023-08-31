# Nalo Take-Home Test Specification

Tu es un nouveau développeur dans l'équipe Nalo, et ta première tâche consiste à développer la nouvelle plateforme NFT de Nalo.
On te laisse le goût du design.
Nous te recommandons de consacrer entre 2 et 4 heures à cet exercice. (Faites-en plus si vous voulez 😇, faites-en moins si vous pensez avoir montré tout ce qu'il faut 😎).

## Spécifications

Bonjour et bienvenue dans l'équipe.
Nous sommes dans le futur, et Nalo a étendu ses activités en ouvrant une plateforme de NFT.
Ta tâche consiste à développer la nouvelle plateforme de Nalo en te basant sur la maquette en image `nft_plateform.webp`.

Et pour ce faire :

- Tu trouveras une maquette en image `nft_platform.web` qui sera la page d'entrée de l'application et que tu devras développer ;
- Tu trouveras aussi un fichier `data.json` qui te servira de base de données des éléments affichés sur la page ;
- Nous te laissons aussi le choix d'importer les images des NFTs et avatar des `bestSellers` ; 
- Tu peux utiliser une librairie de composants pour la partie style si tu le souhaites.
- Nous te recommandons fortement d'écrire des tests pour t'aider durant ce processus.
- Et tout doit être responsive.

Requis :

- Dans le fichier `data.json` dans la liste `bestSellers`, tu ne peux modifier que les champs :
  - `image` (afin de mettre les images des NFTs) 
  - `avatar` (afin de mettre l'avatar des bestSellers)
- On doit pouvoir cliquer sur un élément NTF ou `bestSellers` et aller sur une page de détails de l'élément ;
  - Sur la page de détails d'un NFT, on doit voir les informations sur le NFT et aussi le profil de son `Seller` ;
  - Sur la page de détails d'un `Seller`, on doit pouvoir voir tous les NFTs que le `Seller` est en train de vendre ;


## Instructions

- [ ] `fork` ce repository
- [ ] Initialise le projet Nextjs ou Reactjs
- [ ] Implémente les fonctionnalités requises
- [ ] Teste toutes tes fonctionnalités
- [ ] Publie-le sur GitHub en tant que `pull-request`
- [ ] Envoie-nous le lien et dis-nous approximativement combien de temps vous avez passé sur ce travail.
