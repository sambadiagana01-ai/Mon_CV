# Projet 001 – Mon CV en React (Vite)

Un petit CV en React avec trois parties : **infos personnelles**, **expériences** et **compétences**.

## Les étapes

1. **Créer le projet** avec Vite :
   ```bash 
   npm create vite@latest 001 -- --template react
   ```
2. **Entrer dans le dossier et installer** :
   ```bash
   cd 001
   npm install
   ```
3. **Lancer le projet** :
   ```bash
   npm run dev
   ```
   Ouvrir `http://localhost:5173` dans le navigateur.
4. **Nettoyer** les fichiers d'exemple de Vite (logos, `App.css`, `index.css`).
5. **Créer deux dossiers** dans `src/` : `data` et `components`.
6. **Écrire les données** du CV dans `src/data/cv.js`.
7. **Créer les 3 composants** dans `src/components/` :
   `InfoPerso.jsx`, `Experiences.jsx`, `Competences.jsx`.
8. **Les assembler** dans `src/App.jsx`.
9. **Ajouter le style** dans `src/index.css` et `src/App.css`.
10. **Vérifier et construire** la version finale :
    ```bash
    npm run lint
    npm run build
    ```

## Les dossiers

| Dossier | Rôle |
|---|---|
| `src/` | Le code que l'on écrit |
| `src/components/` | Les morceaux d'interface (un fichier par partie du CV) |
| `src/data/` | Les informations du CV |
| `public/` | Les fichiers fixes (l'icône du site) |
| `node_modules/` | Les bibliothèques installées par `npm install` (ne pas toucher) |
| `dist/` | Le site final créé par `npm run build` |

## Les fichiers indispensables

| Fichier | Rôle |
|---|---|
| `index.html` | L'unique page HTML, avec `<div id="root">` où React s'affiche |
| `package.json` | La liste des outils du projet et des commandes (`dev`, `build`…) |
| `vite.config.js` | La configuration de Vite |
| `src/main.jsx` | Le point de départ : il affiche `App` dans la page |
| `src/App.jsx` | Assemble les trois parties du CV |
| `src/data/cv.js` | Les infos, expériences et compétences |

## Les commandes

| Commande | Effet |
|---|---|
| `npm install` | Installe les bibliothèques |
| `npm run dev` | Lance le projet en local |
| `npm run build` | Crée la version finale dans `dist/` |
