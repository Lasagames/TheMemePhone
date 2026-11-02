# 📞 TheMemePhone

<p align="center">
  <strong>Et si tu pouvais appeler tes memes préférés ?</strong>
  <br>
  Un téléphone virtuel, des appels improbables et des surprises sonores.
  <br><br>
  <a href="https://lasagames.github.io/TheMemePhone/">🌐 Essayer TheMemePhone</a>
  ·
  <a href="https://github.com/Lasagames/TheMemePhone">📂 Voir le dépôt GitHub</a>
</p>

---

## 📱 Présentation

**TheMemePhone** est une expérience interactive qui transforme ton navigateur en véritable téléphone virtuel.

Le concept est simple : compose un numéro, lance un appel et découvre quel personnage, meme ou son se cache derrière ce numéro !

Chaque numéro peut correspondre à un contact différent, avec son propre nom, son audio, sa photo de profil et même son arrière-plan personnalisé.

Que tu souhaites retrouver un meme connu ou découvrir des appels inattendus, TheMemePhone propose une expérience originale et amusante directement depuis ton navigateur.

## ✨ Fonctionnalités

### ☎️ Un téléphone interactif
- Clavier numérique permettant de composer des numéros.
- Interface inspirée d'un véritable smartphone.
- Affichage de l'heure en temps réel.
- Animations et transitions pendant les appels.
- Interface adaptée aux différentes tailles d'écran.

### 🔊 Des appels personnalisés
- Chaque numéro peut correspondre à un contact.
- Lecture automatique du son associé au numéro appelé.
- Affichage du nom et de la photo du contact lorsque l'appel est décroché.
- Arrière-plans personnalisés selon le contact.
- Tonalités de numérotation et effets sonores.
- Écran de fin d'appel avec durée de communication.

### 📲 Appels entrants
- Possibilité de demander à un contact de rappeler.
- Réception d'appels entrants après quelques secondes.
- Possibilité de décrocher ou de refuser un appel.
- Détection des appels manqués.
- Sonnerie personnalisée.

### 🕘 Historique des appels
- Enregistrement des appels récents.
- Distinction entre appels entrants, sortants et manqués.
- Affichage de l'heure et de la durée des appels.
- Possibilité de rappeler un contact.
- Suppression complète de l'historique.

### 🎵 Ambiance sonore
- Musique d'ambiance intégrée via SoundCloud.
- Possibilité d'activer ou de désactiver la musique.
- Mise en pause automatique pendant les appels.
- Visualiseur audio animé.
- Sons de clavier et effets sonores générés automatiquement.

## 🎮 Utilisation

L'utilisation de TheMemePhone est simple et intuitive.

1. Ouvre le site.
2. Attends le chargement des contacts et des ressources.
3. Clique sur **Entrer**.
4. Compose un numéro avec le clavier.
5. Appuie sur le bouton d'appel.
6. Découvre ton correspondant !

### Raccourcis clavier

| Touche | Action |
|:---:|---|
| `0-9` | Composer un numéro |
| `*` et `#` | Ajouter les caractères correspondants |
| `Entrée` | Appeler, décrocher ou terminer un appel |
| `Échap` | Raccrocher ou refuser un appel |
| `Retour arrière` | Effacer le dernier chiffre |
| `Ctrl + V` | Coller un numéro |

**Astuce :** Dans l'historique, un simple clic sélectionne un numéro. Un double-clic permet de le rappeler directement sur ordinateur.

## 🛠️ Installation

TheMemePhone fonctionne directement dans un navigateur web. Aucune installation de dépendances n'est nécessaire pour utiliser le projet.

### Télécharger le projet

```bash
git clone https://github.com/Lasagames/TheMemePhone.git
```

Tu peux également télécharger directement le dépôt au format ZIP depuis GitHub.

### Lancer le projet en local

Pour éviter les problèmes liés au chargement des fichiers, utilise un petit serveur web local.

Avec Python :

```bash
python -m http.server 8000
```

Puis ouvre :

```text
http://localhost:8000
```

### Hébergement

Le projet est conçu pour fonctionner sur un hébergement statique.

Il est notamment publié avec **GitHub Pages** :

https://lasagames.github.io/TheMemePhone/

## 🎨 Personnalisation

L'un des intérêts de TheMemePhone est de pouvoir ajouter facilement de nouveaux contacts.

Il suffit d'ajouter des fichiers dans les dossiers correspondants.

### 1. Ajouter un contact

Dans le dossier `sounds/`, ajoute un fichier MP3 en respectant cette convention :

```text
NUMERO_NOM.mp3
```

Exemple :

```text
sounds/
├── 1_Maman.mp3
├── 2_Papa.mp3
├── 404_Unknown.mp3
└── 999_Meme.mp3
```

Le numéro correspond à la partie située avant le `_`, tandis que le nom du contact correspond à la partie située après.

Le système détecte automatiquement les fichiers et crée les contacts correspondants.

### 2. Ajouter une photo de profil

Dans `profil-images/`, ajoute une image en utilisant cette convention :

```text
NUMERO_photo.png
```

Exemple :

```text
profil-images/
├── 404_photo.png
└── 999_photo.png
```

Les formats PNG, JPG, JPEG, WEBP, GIF et AVIF sont pris en charge.

### 3. Ajouter un arrière-plan

Dans le dossier `images/`, ajoute une image associée au numéro :

```text
images/
├── 404_image.png
└── 999_image.png
```

Lorsqu'un appel est décroché, l'arrière-plan correspondant apparaît automatiquement.

Si aucun arrière-plan spécifique n'existe, la photo de profil peut être utilisée à sa place.

### 4. Ajouter une sonnerie personnalisée

Deux fichiers spéciaux peuvent être placés dans `sounds/` :

| Fichier | Fonction |
|---|---|
| `sonnerie.mp3` | Sonnerie des appels entrants |
| `error-sounds.mp3` | Son joué lorsqu'un numéro n'existe pas |

Si ces fichiers ne sont pas présents, le téléphone utilise des sons générés automatiquement.

### 5. Génération du manifest.json

Le fichier `manifest.json` permet au téléphone de retrouver les fichiers présents dans les différents dossiers.

Pour le générer manuellement, utilise Node.js :

```bash
node generate-manifest.js
```

Sur GitHub, sa génération est également automatisée grâce au workflow présent dans `.github/workflows/`.

## 📂 Structure du projet

```text
TheMemePhone/
│
├── .github/
│   └── workflows/
│       └── manifest.yml
│
├── images/
│   └── ...                 # Arrière-plans des contacts
│
├── profil-images/
│   └── ...                 # Photos de profil
│
├── sounds/
│   ├── ...                 # Sons des contacts
│   ├── sonnerie.mp3        # Sonnerie personnalisée
│   └── error-sounds.mp3   # Son des numéros inconnus
│
├── index.html              # Structure et fonctionnement
├── styles.css              # Apparence et animations
├── manifest.json           # Liste des ressources
├── generate-manifest.js    # Générateur du manifest
└── README.md               # Documentation du projet
```

## 💻 Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure du téléphone |
| CSS3 | Design, animations et responsive design |
| JavaScript | Interactions et fonctionnement |
| Web Audio API | Génération et visualisation des sons |
| SoundCloud Widget API | Musique d'ambiance |
| LocalStorage | Sauvegarde de l'historique |
| GitHub Pages | Hébergement du site |

## 🌐 Compatibilité

TheMemePhone est accessible depuis un navigateur web moderne.

L'expérience utilise notamment :
- JavaScript pour les interactions.
- L'API Web Audio pour les effets sonores.
- LocalStorage pour conserver l'historique.
- SoundCloud pour la musique d'ambiance.

**Remarque :** Certaines fonctionnalités audio peuvent dépendre des autorisations du navigateur et de la disponibilité des services externes.

## 🚀 Projet

TheMemePhone est un projet personnel développé par **Lasagames**.

Son objectif est de proposer une expérience originale, interactive et amusante, en mélangeant l'univers des memes avec une interface inspirée des téléphones mobiles.

Le projet est susceptible d'évoluer avec l'ajout de nouveaux contacts, de nouveaux sons et de nouvelles fonctionnalités.

## 👤 Auteur

**Lasagames**

- GitHub : [@Lasagames](https://github.com/Lasagames)
- Projet : [TheMemePhone](https://github.com/Lasagames/TheMemePhone)
- Démonstration : [lasagames.github.io/TheMemePhone](https://lasagames.github.io/TheMemePhone/)

---

<p align="center">
  <strong>📞 Merci d'avoir utilisé TheMemePhone !</strong>
  <br>
  Et surtout... fais attention à qui tu appelles ! 
</p>
