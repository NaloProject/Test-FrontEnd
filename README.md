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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
