# Portfolio de Ferdinand Lacroix

Site statique Astro (TypeScript) : CV virtuel avec un hero interactif, une page Projets et un lab d'expériences.
En ligne : [froostiez.github.io/portfolio](https://froostiez.github.io/portfolio/) (page Projets : [/projects](https://froostiez.github.io/portfolio/projects/)) (repo `Froostiez/portfolio`, GitHub Pages via Actions).

## Commandes (PowerShell)

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build
```

Dossier local : `C:\Users\ferdi\Desktop\PROJET\Froostiez\portfolio`.
Workflow voulu : Claude modifie les fichiers directement dans ce dossier (pas de zip). À chaque étape : `git add .`, message de commit, `git push`.

## Structure

- `src/pages/` : `index` (hero), `projects`, `photo`, `about`, `contact`, `lab/index`, `lab/[slug]`.
- `src/layouts/Base.astro`, `src/components/Nav.astro` : cadre commun et navigation.
- `src/components/BrushReveal.astro` : hero. Image sombre (sable noir) recouvrant un canvas qui révèle la prairie de fleurs sous le curseur (blobs procéduraux Catmull-Rom, traînée qui rétrécit, blob au repos "Move to reveal", `prefers-reduced-motion` géré).
- `BrushReveal` accepte des props `baseLg/baseSm/revealLg/revealSm` (chemins dans `public/`) et `label` ; sans props, il garde les images du hero d'accueil. Variante `heroes/ForestReveal.astro` (images dans `public/images/lab/foret-*`).
- `src/components/Coin.astro` : pièce 3D three.js (Vegamon). Tranche cannelée dégradé bleu/cuivre, bump map, supersampling, repli image plate sans WebGL, statique en reduced-motion, rotation au survol/drag.
- `src/content/projects.ts` : la liste des projets (une entrée = une carte).
- `src/components/heroes/` : heroes du lab (`CrossField`, `Bokeh`, `Meadow`, `FlowField`, `Petals`), chacun dans un `HeroShell` (plein écran, canvas, voile, `<slot />`). `HeroCopy` = titre type accueil pour les voir en situation. Réglages dans le bloc CONFIG de chaque script.
- `src/hero.ts` : boucle commune (canvas net selon le DPR, pointeur lissé avec vitesse, pause hors écran et onglet caché, `prefers-reduced-motion` = image fixe). Pour un nouveau hero : `runHero(root, { init, frame, click })`.
- `src/content/experiments.ts` : le lab. Ajouter aussi une entrée dans `demos` de `src/pages/lab/[slug].astro`.
- `src/utils.ts` : `url()` préfixe les chemins avec `import.meta.env.BASE_URL` (obligatoire pour GitHub Pages).
- `astro.config.mjs` : SITE et BASE lus depuis l'environnement. `.github/workflows/deploy.yml` les calcule (BASE = `/repo`, ou `/` si le repo finit par `.github.io`).

## Cartes projets (`projects.ts`)

Champs : `title, year, kind (web|android|pro|lab), description, stack, link, linkLabel`, plus les options visuelles :

- `logo` : image du logo. Avec `logoBack`, le logo devient la pièce 3D (face + dos).
- `watermark` : grand visuel discret, coin haut droit, coupé par le bord (Mysteria : logo runique, RacketLab : `loupe-dark.svg`).
- `video` / `videoPoster` : vidéo de démo (mp4 1080p d'origine, non recompressé) avec vignette cliquable dans la carte, ouverte dans un lecteur `<dialog>` (Miette : `miette-demo.mp4`).
- `titleStyle` : titre dans la police et la couleur du site du projet (classes `.t-*` dans `projects.astro`) : Vegamon = Saira Stencil One violet pastel, Mysteria = Cinzel Decorative dégradé bleu-violet, FIRE! = Press Start 2P rouge `#ff4500`, Miette = DM Sans + point `#dc8468`. Polices chargées depuis Google Fonts sur la page Projets seulement, limitées aux lettres des titres (paramètre `text`, à compléter si un titre change). `Base.astro` a un slot `head` pour ce genre d'ajout.
- `titleImage` : remplace le titre texte par un wordmark (RacketLab : `logo-wordmark-dark.svg`, texte seul rogné à partir du logo horizontal).
- `background` / `backgroundAlt` : fond de carte, fondu enchaîné vers l'alt au survol (Vegamon : `card-bg-gold.webp` puis `card-bg-neon.webp`). Affichés à la largeur de la carte ; le gold est rogné sur les traits du cadre pour s'aligner avec les bords.
- `cardBack` / `cardBackAlt` : dos de carte Vegamon dessiné en CSS (treillis, cadre, losange, "V") en filigrane coin haut droit ; palette alt au survol. Couleurs fond/treillis réelles de VGS1 et VGS2 ; les couleurs "or" (`#E0B84F`, `#7FD8FF`) sont des estimations, à remplacer par la couleur de tranche All-in de chaque série.

Projets actuels : Vegamon, Mysteria, RacketLab, FIRE!, Miette (Android, sans lien, vidéo de démo), Choipo (projet pro, logo seul), Hero reveal (lab).
Liens : vegamon.vercel.app, mysteria-gamma.vercel.app, racketlab-two.vercel.app, fire-vert-pi.vercel.app (URL publique, l'ancienne preview était protégée par Vercel).

## Images

`public/images/` : `base-*.webp` / `reveal-*.webp` (hero), `projects/<projet>/...`. Dossiers en minuscules.
Formats WebP, pas de base64. Les SVG RacketLab utilisent `currentColor` ou une couleur fixe : en `<img>` utiliser la variante colorée (`loupe-dark.svg` = crème pour fond sombre). Les originaux lourds ne sont pas dans le repo ; les `card-bg-*.webp` sont des versions allégées (720 px).

## Bilingue FR/EN

- Activé page par page : `<Base ... bilingual>`. Ça affiche le bouton FR/EN dans la nav et choisit la langue (choix mémorisé dans `localStorage`, sinon langue du navigateur).
- Dans la page, doubler chaque texte : `<span data-l="fr">…</span><span data-l="en">…</span>` (marche aussi sur `p`, `a`, etc.). La règle CSS est dans `global.css`.
- Pages bilingues : `about`, `contact`, `photo`. Les autres sont encore en français seul.

## Photo

- Page `/photo` (bilingue) : mosaïque en colonnes qui garde les formats d'origine, visionneuse plein écran (flèches, clavier, swipe), bouton Instagram `@panoramiqe`.
- Liste dans `src/content/photos.ts` (`file`, `w`, `h`, `alt` FR/EN, `place` optionnel). L'ordre du tableau = l'ordre d'affichage.
- Fichiers dans `public/images/photo/` : `<file>.webp` (2000 px max) + `<file>-thumb.webp` (800 px).
- Originaux à déposer dans `photos-src/` (ignoré par git) : Claude les convertit et remplit `photos.ts`.

## CV

Déposer `public/cv/cv-fr.pdf` et/ou `public/cv/cv-en.pdf` : le bouton de téléchargement apparaît tout seul sur About (s'il n'y a qu'une version, elle sert pour les deux langues).

## Pièges connus

- Windows : renommer un dossier en changeant seulement la casse demande une étape intermédiaire.
- Ne pas lancer `npm install` depuis un autre OS que Windows dans ce dossier (a déjà corrompu `node_modules/three`).
- Après un changement d'image avec le même nom, faire Ctrl+F5.

## À faire

- Lab : 5 nouveaux heroes (champ de croix, mise au point, prairie au vent, champ de flux, pétales). Choisir celui qui remplacera ou complétera l'accueil.
- Miette : vidéo de démo ajoutée ; description plus précise si besoin (le code peut être fourni).
- Favicon : fait ("F" blanc + croix rose en x (clin d'oeil à Lacroix) sur fond #0f0e14, SVG + PNG 32 + ICO + apple-touch 180, dans `public/`).
- About et Contact : faits, bilingues. CV FR et EN déposés dans `public/cv/` (versions web sans numéro de téléphone, recompilées depuis les .tex).
- Photo : déposer les originaux dans `photos-src/`.
- Bilingue : étendre aux pages Accueil, Projects et Lab si voulu.
- Décisions prises : couleurs du dos de carte Vegamon et résolution de la pièce suffisantes, Choipo reste en logo seul, l'URL garde `/portfolio`.
