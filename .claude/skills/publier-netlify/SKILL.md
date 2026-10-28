---
name: publier-netlify
description: Compile Kalima et le publie en production sur Netlify (l'équivalent automatique de Netlify Drop). À utiliser quand Adam demande de publier, déployer ou mettre en ligne le projet sur Netlify ou Netlify Drop.
---

# Publier Kalima sur Netlify

Netlify Drop demande un glisser-déposer dans le navigateur. On fait la même chose avec Netlify CLI, qui envoie le dossier `dist/` sur le même site Netlify à chaque fois.

Le site Netlify s'appelle `kalima-damsz42` (adresse : https://kalima-damsz42.netlify.app).

Dans Git Bash, commencer chaque commande par `export PATH="/c/Program Files/nodejs:$PATH";`.

## Étapes

1. Lancer `npm test`. Si un test échoue, s'arrêter et expliquer l'erreur à Adam en français.
2. Lancer `npm run build`. L'avertissement « Some chunks are larger than 500 kB » est sans gravité.
3. Vérifier la connexion avec `npx -y netlify-cli status`. Si Adam n'est pas connecté, lui demander de taper `! npx -y netlify-cli login` (une page s'ouvre dans le navigateur pour autoriser), puis reprendre.
4. Publier :
   ```bash
   npx -y netlify-cli deploy --prod --no-build --dir=dist --site kalima-damsz42
   ```
   Si le site n'existe pas encore (première fois, erreur « not found »), le créer en publiant avec `--site-name kalima-damsz42` à la place de `--site kalima-damsz42`. Si le nom est déjà pris par quelqu'un d'autre, choisir un autre nom, et mettre à jour ce fichier avec le nouveau nom.
5. Copier aussi `dist/` vers `C:\Users\adams\Desktop\kalima-netlify` (en remplaçant l'ancien contenu), pour garder une version prête pour un glisser-déposer manuel sur https://app.netlify.com/drop.
6. Donner à Adam l'adresse du site en ligne, en français.
