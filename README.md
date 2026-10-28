# Projet 001 – Mon CV en React (Vite)

Application React créée avec **Vite** qui présente un CV en trois sections :
**Informations personnelles**, **Expériences** et **Compétences**.

Ce document décrit **toutes les étapes**, de la création du dossier jusqu'à la version finale.

---

## Étape 0 – Prérequis

- **Node.js** version 20 ou plus : `node -v`
- **npm** (installé avec Node.js) : `npm -v`
- Un éditeur de code (VS Code)

## Étape 1 – Créer le dossier de travail

```bash
mkdir travaux
cd travaux
```

## Étape 2 – Créer le projet « 001 » avec Vite

```bash
npm create vite@latest 001 -- --template react
```

- `001` : nom du projet (Vite crée le dossier `001`)
- `--template react` : modèle React en JavaScript

Si Vite pose des questions, choisir **React** puis **JavaScript**.

## Étape 3 – Entrer dans le projet et installer les dépendances

```bash
cd 001
npm install
```

`npm install` lit `package.json`, télécharge les bibliothèques dans `node_modules/` et crée `package-lock.json`.

## Étape 4 – Ouvrir le projet dans l'éditeur

```bash
code .
```

## Étape 5 – Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir l'adresse affichée (en général `http://localhost:5173`). La page se recharge toute seule à chaque modification. Laisser ce terminal ouvert.

## Étape 6 – Nettoyer le modèle par défaut

1. Supprimer `public/icons.svg` (images d'exemple non utilisées).
2. Supprimer le contenu de `src/assets/` (logos d'exemple).
3. Vider `src/App.css` et `src/index.css`.
4. Le contenu de `src/App.jsx` est remplacé à l'étape 12.

## Étape 7 – Créer les dossiers

```bash
mkdir src/data
mkdir src/components
```

## Étape 8 – Écrire les données : `src/data/cv.js`

**C'est le seul fichier à modifier pour changer le contenu du CV.**

```js
export const infoPerso = {
  nom: 'Samba DIAGANA',
  titre: 'Étudiant en Génie Logiciel',
  email: 'samba.diagana.01@gmail.com',
  telephone: '+221 77 596 80 81',
  ville: 'Dakar, Sénégal',
  presentation:
    "Étudiant motivé, passionné par le développement web et les interfaces modernes avec React. Je cherche un stage pour mettre en pratique mes compétences et continuer à apprendre.",
}

export const experiences = [
  {
    id: 1,
    poste: 'Stagiaire en maintenance serveur',
    entreprise: 'isicom Sarl',
    periode: 'Juillet 2026 – Septembre 2026',
    description:
      'Maintenance des serveurs, gestion des utilisateurs et résolution des problèmes techniques.',
  },
  {
    id: 2,
    poste: "Projet de fin d’études – Site web de gestion des colis",
    entreprise: 'ISI Dakar',
    periode: 'Août 2026',
    description:
      'Développement d’un site web pour la gestion des colis, incluant la création d’interfaces utilisateur et l’intégration de fonctionnalités de suivi.',
  },
  {
    id: 3,
    poste: 'Job étudiant – Infographiste',
    entreprise: 'Freelance',
    periode: '2025',
    description: 'Création d’illustrations et de graphismes pour divers supports.',
  },
]

export const competences = [
  { id: 1, nom: 'HTML / CSS', niveau: 90 },
  { id: 2, nom: 'JavaScript', niveau: 75 },
  { id: 3, nom: 'React', niveau: 50 },
  { id: 4, nom: 'Git / GitHub', niveau: 65 },
  { id: 5, nom: 'Travail en équipe', niveau: 90 },
]
```

## Étape 9 – Composant 1 : `src/components/InfoPerso.jsx`

```jsx
function InfoPerso({ info }) {
  return (
    <section className="carte" id="info-perso">
      <h1>{info.nom}</h1>
      <p className="titre">{info.titre}</p>
      <p>{info.presentation}</p>
      <ul className="contacts">
        <li>✉️ {info.email}</li>
        <li>📞 {info.telephone}</li>
        <li>📍 {info.ville}</li>
      </ul>
    </section>
  )
}

export default InfoPerso
```

## Étape 10 – Composant 2 : `src/components/Experiences.jsx`

```jsx
function Experiences({ liste }) {
  return (
    <section className="carte" id="experiences">
      <h2>Expériences</h2>
      {liste.map((exp) => (
        <article className="experience" key={exp.id}>
          <h3>{exp.poste}</h3>
          <p className="meta">
            {exp.entreprise} · {exp.periode}
          </p>
          <p>{exp.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Experiences
```

## Étape 11 – Composant 3 : `src/components/Competences.jsx`

```jsx
function Competences({ liste }) {
  return (
    <section className="carte" id="competences">
      <h2>Compétences</h2>
      <ul className="competences">
        {liste.map((c) => (
          <li key={c.id}>
            <div className="ligne">
              <span>{c.nom}</span>
              <span>{c.niveau}%</span>
            </div>
            <div className="barre">
              <div className="barre-remplie" style={{ width: `${c.niveau}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Competences
```

## Étape 12 – Assembler les sections : `src/App.jsx`

```jsx
import './App.css'
import { infoPerso, experiences, competences } from './data/cv.js'
import InfoPerso from './components/InfoPerso.jsx'
import Experiences from './components/Experiences.jsx'
import Competences from './components/Competences.jsx'

function App() {
  return (
    <main className="page">
      <InfoPerso info={infoPerso} />
      <Experiences liste={experiences} />
      <Competences liste={competences} />
    </main>
  )
}

export default App
```

## Étape 13 – Vérifier `src/main.jsx`

Fichier fourni par Vite, à laisser tel quel :

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

## Étape 14 – Styles globaux : `src/index.css`

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background: #f1f5f9;
  color: #1e293b;
  line-height: 1.6;
}
```

## Étape 15 – Styles du CV : `src/App.css`

```css
.page {
  max-width: 760px;
  margin: 0 auto;
  padding: 24px 16px 48px;
  display: grid;
  gap: 20px;
}

.carte {
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.1);
}

h1,
h2,
h3 {
  margin: 0 0 8px;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.4rem;
  color: #2563eb;
  border-bottom: 2px solid #dbeafe;
  padding-bottom: 6px;
  margin-bottom: 16px;
}

h3 {
  font-size: 1.1rem;
}

.titre {
  color: #2563eb;
  font-weight: 600;
  margin: 0 0 12px;
}

.contacts {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}

.experience {
  padding: 12px 0;
  border-top: 1px solid #e2e8f0;
}

.experience:first-of-type {
  border-top: none;
  padding-top: 0;
}

.meta {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 0 4px;
}

.competences {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.ligne {
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  margin-bottom: 4px;
}

.barre {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.barre-remplie {
  height: 100%;
  background: #2563eb;
  border-radius: 999px;
}
```

## Étape 16 – Adapter `index.html`

Dans `index.html`, mettre la langue en français et un titre clair :

```html
<html lang="fr">
...
<title>Mon CV</title>
```

## Étape 17 – Vérifier le code et générer la version finale

Arrêter le serveur (`Ctrl + C`), puis :

```bash
npm run lint      # vérifie le code avec ESLint (doit n'afficher aucune erreur)
npm run build     # crée le dossier dist/ (version optimisée)
npm run preview   # teste cette version en local
```

**À refaire après chaque modification** : le dossier `dist/` n'est pas mis à jour automatiquement.

## Étape 18 – Rendre le projet

Compresser le dossier `001` **sans** `node_modules` (ni `dist`) en `001.zip`, ou l'envoyer sur GitHub :

```bash
git init
git add .
git commit -m "Projet 001 - CV en React"
```

Le fichier `.gitignore` exclut déjà `node_modules` et `dist`.

---

## Arborescence finale

```
001/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── assets/
    ├── data/
    │   └── cv.js
    └── components/
        ├── InfoPerso.jsx
        ├── Experiences.jsx
        └── Competences.jsx
```

Dossiers générés automatiquement (à ne pas modifier) : `node_modules/` et `dist/`.

## Rôle des dossiers

| Dossier | Rôle |
|---|---|
| `001/` (racine) | Configuration du projet et fichiers de départ. |
| `src/` | **Code source** : tout ce que vous écrivez (composants, styles, données). |
| `src/components/` | Composants React réutilisables, un fichier par morceau d'interface. |
| `src/data/` | Données du CV, séparées de l'affichage pour les modifier facilement. |
| `src/assets/` | Images utilisées dans le code (vide pour l'instant). |
| `public/` | Fichiers statiques servis tels quels (icône du site `favicon.svg`). |
| `node_modules/` | Bibliothèques téléchargées par `npm install`. Très volumineux, jamais envoyé sur Git. |
| `dist/` | Version finale créée par `npm run build`, prête à être mise en ligne. |

## Rôle des fichiers indispensables

| Fichier | Rôle |
|---|---|
| `index.html` | **Unique page HTML**. Contient `<div id="root">` où React affiche l'interface, et charge `src/main.jsx`. |
| `package.json` | Carte d'identité du projet : nom, **scripts** (`dev`, `build`, `lint`, `preview`) et **dépendances** (react, react-dom, vite…). |
| `package-lock.json` | Fixe les versions exactes installées (créé par `npm install`). |
| `vite.config.js` | Configuration de Vite : active le plugin React pour comprendre le JSX. |
| `eslint.config.js` | Règles de ESLint, l'outil qui détecte les erreurs de code. |
| `src/main.jsx` | **Point d'entrée** : affiche le composant `<App />` dans `<div id="root">`. |
| `src/App.jsx` | **Composant racine** : assemble les trois sections. |
| `src/index.css` / `src/App.css` | Styles : `index.css` pour toute la page, `App.css` pour les composants. |
| `src/data/cv.js` | Informations personnelles, expériences et compétences. |
| `src/components/*.jsx` | Un composant par section : `InfoPerso`, `Experiences`, `Competences`. |
| `.gitignore` | Liste ce que Git doit ignorer (`node_modules`, `dist`…). |
| `README.md` | Ce fichier : documentation du projet. |

## Notions React utilisées

- **Composant** : fonction qui renvoie du JSX (une partie de l'interface).
- **JSX** : écriture de type HTML à l'intérieur du JavaScript.
- **Props** : données transmises d'un composant parent à un enfant (`<Experiences liste={experiences} />`).
- **`.map()` et `key`** : afficher une liste d'éléments, chacun avec un identifiant unique.
- **Import / export** : partager du code entre fichiers.

## Commandes utiles

| Commande | Effet |
|---|---|
| `npm install` | Installe les dépendances |
| `npm run dev` | Lance le serveur de développement |
| `npm run lint` | Détecte les erreurs dans le code |
| `npm run build` | Génère la version de production dans `dist/` |
| `npm run preview` | Prévisualise la version de production |

## Problèmes fréquents

- **`vite` n'est pas reconnu / module introuvable** : lancer `npm install` dans le dossier `001`.
- **La page affiche l'ancien contenu après `npm run preview`** : relancer `npm run build`.
- **Erreur après avoir déplacé ou copié `node_modules`** : le supprimer puis refaire `npm install` (les fichiers dépendent du système d'exploitation).
