# Checkpoint : Composants React et JSX

## Objectif

Dans ce checkpoint, nous allons utiliser ce que nous avons appris jusqu'ici pour manipuler des composants React et du JSX.

## Instructions

- Créez un projet avec `create-react-app`.
- Créez `App.js` dans le dossier `src` et utilisez-le comme composant racine de votre application React.
- Créez un fichier `product.js` contenant un objet JSON avec le nom, le prix, la description d'un produit et le chemin ou l'URL d'une image. (N'oubliez pas d'exporter l'objet JSON.)

## Critères

- Créez quatre composants qui retournent le nom, le prix, la description et l'image du produit (`Name.js`, `Price.js`, `Description.js` et `Image.js`).
- Exportez tous vos composants afin de pouvoir les utiliser dans le composant racine (dans `App.js`).
- Importez l'objet JSON créé précédemment dans tous les nouveaux composants.
- Créez, avec `react-bootstrap` dans votre `App.js`, une carte contenant tous les composants créés.
- Affichez sous la carte un message qui dit `Hello`, suivi de votre prénom, ou, si vous n'avez pas encore fourni de prénom, affichez « Hello, there! ». (Vous pouvez définir votre prénom dans une variable au-dessus du composant racine.)
- Affichez une image si le prénom est fourni.
- Soyez le plus créatif possible pour le style !
