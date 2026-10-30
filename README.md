# Kalima — كَلِمَة

Chaque jour, un mot parmi les plus fréquents du Coran : ses différents sens, plusieurs versets
d'exemple, cinq exercices courts et des révisions espacées.

## Démarrage

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script                   | Rôle                                                    |
| ------------------------ | ------------------------------------------------------- |
| `npm run dev`            | Serveur de développement Vite                           |
| `npm run build`          | Vérification TypeScript + build de production (`dist/`) |
| `npm run preview`        | Sert le build de production                             |
| `npm test`               | Tests unitaires (Vitest)                                |
| `npm run lint`           | ESLint                                                  |
| `npm run generate:words` | Régénère `src/data/words.ts` depuis les sources         |

Stack : Vite, React 19, TypeScript, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com)
(style Nova, primitives Radix), polices Amiri et Amiri Quran,
[Supabase](https://supabase.com) pour le compte facultatif.

## Fonctionnement

- **Mot du jour** : `index = jours écoulés depuis le 01/01/2026 (date locale) mod nombre de mots`.
  Tout le monde voit le même mot à une date donnée. Le mot change à minuit, même si l'onglet
  reste ouvert.
- **Fiche** : forme vocalisée, translittération, sens, nombre d'occurrences, racine et sa
  famille, note pédagogique.
- **Prononciation** : récitation du mot seul, sans préfixe ni suffixe, prise dans un verset où
  il apparaît ainsi (avec l'article ٱل si le Coran ne l'emploie jamais sans).
- **Sens dans le Coran** : un même mot peut prendre plusieurs sens selon le contexte
  (صَلَاة : prière, bénédiction, invocation, lieux de prière). Chaque sens est illustré par un
  verset, avec le passage de la traduction qui le rend.
- **Versets d'exemple** : trois versets avec le mot surligné et l'audio de chaque verset.
- **Exercices** (méthodes d'apprentissage) :
  1. _Carte_ : rappel actif, on se souvient du sens avant de retourner la carte.
  2. _Quiz_ : sept questions, du plus simple au plus exigeant (sens, écriture arabe,
     prononciation, racine, sens en contexte, mot manquant dans un verset), avec une correction
     après chaque réponse et un bilan final.
  3. _Écoute_ : on reconnaît le mot récité dans chacun de ses versets.
  4. _Lettres_ : on reconstitue l'orthographe lettre par lettre.
  5. _Verset_ : on repère le mot dans chacun de ses versets (préfixes, suffixes).
- **Révisions** : système de Leitner (intervalles de 1, 2, 4, 7, 15 et 30 jours) appliqué aux
  mots des jours précédents.
  Le niveau d'un mot (1 à 6) monte avec « Je savais » et revient à 1 avec « À revoir ».
- **Mes mots** : la liste des mots déjà vus, du plus fréquent au moins fréquent, avec leur
  niveau, un badge « Maîtrisé » à partir du niveau 4, la translittération, la racine et l'audio.
- **Progression** : série de jours, mots découverts, mots maîtrisés, jours d'étude. Elle est
  stockée dans le `localStorage` du navigateur.
- **Compte (facultatif)** : la connexion avec Google synchronise la progression entre tous les
  appareils, via [Supabase](https://supabase.com). Les progressions de deux appareils sont
  fusionnées sans rien perdre, l'app reste utilisable hors ligne, et « Réinitialiser » efface
  partout. Seuls l'e-mail et la progression sont enregistrés (voir
  `public/confidentialite.html`), et « Supprimer mon compte » efface tout ce qui est en ligne.

## Architecture

```
src/
├── components/        Composants partagés (ArabicText, AudioButton, en-tête…)
│   └── ui/            Composants shadcn/ui générés (ne pas modifier à la main)
├── data/words.ts      Données générées (62 mots)
├── features/
│   ├── today/         Fiche du mot : héros, sens, versets, racine
│   ├── activities/    Les 5 exercices, le moteur de quiz, le registre et le panneau à onglets
│   ├── review/        Révisions espacées
│   ├── lexicon/       Carte « Mes mots »
│   ├── progress/      Contexte de progression (useReducer + localStorage) et statistiques
│   └── account/       Connexion Google et synchronisation (useSession, useSync)
├── hooks/             useToday, useAudio
├── lib/               Logique pure et testée : dates, Leitner, progression et fusion, quiz,
│                      arabe ; client Supabase (supabase.ts)
└── types/             Types du domaine
public/confidentialite.html  Page de confidentialité (exigée par Google)
supabase/schema.sql    Table `progress` et fonction `delete_user`, à exécuter dans le SQL Editor
scripts/
├── curated-words.json Liste éditoriale (lemme, verset, translittération, sens principal, note, sens coraniques)
└── generate-words.mjs Calcule les fréquences, extrait versets et traductions, vérifie les sens
```

Pour **ajouter un mot**, ajoute une entrée dans `scripts/curated-words.json`. Il faut le lemme
tel qu'il est écrit dans le corpus, une référence de verset qui contient ce mot et au moins un
sens. Lance ensuite `npm run generate:words`. Le script s'arrête si le lemme ou le mot dans le
verset est introuvable.

Pour **ajouter un sens**, ajoute une ligne dans `senses` avec :

- `ref` : un verset qui contient le mot ;
- `fr` : le passage de la traduction de Hamidullah qui rend ce sens ;
- `en` : le passage de la traduction Saheeh International qui le confirme ;
- `tafsir` (facultatif) : une citation du Tafsir al-Muyassar, obligatoire en pratique quand le
  sens vient de l'exégèse et non des traductions (رَحْمَة = la pluie en 7:57).

Le script refuse tout sens dont l'un de ces passages est introuvable.

## Sources des données

- **Fréquences, racines, découpage des mots** : [Quranic Arabic Corpus](https://corpus.quran.com)
  (Université de Leeds), via sa
  [version corrigée](https://github.com/mustafa0x/quran-morphology). Les chiffres sont des
  occurrences de _lemme_ : toutes les formes conjuguées ou fléchies sont comptées. Les composés
  comme يَوْمَئِذٍ sont exclus, comme dans le corpus officiel (يَوْم = 405).
- **Texte arabe** : écriture ʿuthmānī de [Tanzil](https://tanzil.net).
- **Traduction** : Muhammad Hamidullah, via [alquran.cloud](https://alquran.cloud).
- **Vérification des sens** : traduction anglaise Saheeh International, via
  [alquran.cloud](https://alquran.cloud), et Tafsir al-Muyassar (Complexe du roi Fahd), via
  l'[API de quran.com](https://api.quran.com/api/v4/resources/tafsirs).
- **Audio** : mot à mot de [quran.com](https://quran.com) ; verset récité par Mishary Alafasy
  ([islamic.network](https://islamic.network)). Une connexion internet est nécessaire.

## Mise en ligne

- **GitHub Pages** : https://damsz42.github.io/kalima/, publié automatiquement à chaque push
  sur `main` si les tests passent.
- **Netlify** : https://kalima-damsz42.netlify.app, publié à la demande avec Netlify CLI.

Pour qu'une nouvelle adresse puisse utiliser la connexion Google, il faut l'ajouter dans
Supabase (**Authentication → URL Configuration → Redirect URLs**) et dans Google Cloud
(**Authorized JavaScript origins** du client OAuth « Kalima web »).
