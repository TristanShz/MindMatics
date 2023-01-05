# MindMatics

Application de calcul mental contre la montre.

## Lancer le projet en local

Après avoir cloné le projet, effectuer les commandes suivantes : 

```bash
npm install && npm client-install
npm run dev
```
## Lancer le projet en local

Pour lancer les tests back end
```bash
npm test
```
Pour lancer les tests front 
```bash
npm run client-test
```

## Technologies utilisées

### Backend

Environnement : NodeJs + ExpressJs (https://expressjs.com/fr/)

Bdd : MongoDb (https://www.mongodb.com/fr-fr)

Orm : Mongoose (https://mongoosejs.com/)

Tests: Jest + Supertest (https://jestjs.io/fr/)

### Frontend

Environnement : React (https://fr.reactjs.org/)

Css : TailwindCss (https://tailwindcss.com/)

Tests : Jest + React testing library (https://jestjs.io/fr/)

## Fonctionnement de l’application

### Jeu

- Choix de la difficulté (Facile, normal, difficile)
- Démarrage du jeu, l’utilisateur a 60 secondes pour répondre au plus de calculs possible
- Une mauvaise réponse entraine la perte de 5 secondes sur le timer
- L’utilisateur a la possibilité de passer à la question suivant sans donner de réponse (entraine la perte de 2.5 secondes sur le timer)
- À la fin des 60 secondes on affiche le score ainsi que le détail des réponses à chaque calcul
- L’utilisateur à la possibilité de sauvegarder ou non son score et peut relancer une partie.

### Diagramme useCase
![Untitled Diagram drawio (2)](https://user-images.githubusercontent.com/56965488/210798241-c1d3a8bf-7720-4c38-89bc-3faec97645bc.png)

### Authentification

- Possibilité de s’inscrire et se connecter
- Si l’utilisateur n’est pas connecté il est automatiquement redirigé vers la page d’authentification

## Features

### Authentification

- Schéma du User

```jsx
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    select: false, //Permet de ne jamais renvoyé le mot de passe lors d'une requête
  },
});
```

- Utilisation de jwt (JSON Web Token)
- Hashage des mots de passe grâce au package Bcrypt

```jsx
exports.hashPassword = (plainTextPassword) => {
  const saltRounds = 10;
  return bcrypt.hash(plainTextPassword, saltRounds);
};

exports.comparePasswords = (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash);
};
```

- Middleware de protection pour les routes qui nécessitent d’être authentifier

```jsx
const checkTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ");

  if (!token?.[1]) {
    return res.status(401).json({ message: "Error. Need a token" });
  }
  jwt.verify(token[1], apiConfig.jwtSecret, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Error. Bad token" });
    } else {
      return next();
    }
  });
};
```

### Résultats

- Schéma de Result

```jsx
const resultSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
});
```
Liaison avec la collection User par l'id de l'User

Récupération de tous les résultats avec l'API puis affichage et filtres en front

## Architecture

![schemaArchitectureMindMatics drawio (1)](https://user-images.githubusercontent.com/56965488/210797639-98bb729b-f5e5-422b-ad3a-6422706c6d21.png)

