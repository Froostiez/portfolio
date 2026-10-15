export type ProjectKind = 'web' | 'android' | 'pro' | 'lab';

export interface Project {
  title: string;
  year: string;
  kind: ProjectKind;
  description: string;      // français
  descriptionEn: string;    // anglais
  stack: string[];
  logo?: string;            // chemin dans public/ (sans base)
  logoBack?: string;        // si présent : le logo devient une pièce 3D (face + dos)
  watermark?: string;       // grand visuel discret en fond de carte
  background?: string;      // fond de carte (image)
  backgroundAlt?: string;   // fond au survol (fondu enchaîné)
  cardBack?: { fond: string; primaire: string; or: string };      // mini dos de carte dans le coin
  cardBackAlt?: { fond: string; primaire: string; or: string };   // palette au survol
  titleImage?: string;      // remplace le titre texte par une image (wordmark)
  titleStyle?: 'vegamon' | 'mysteria' | 'fire' | 'miette'; // police et couleur du site du projet (voir projects.astro)
  video?: string;           // vidéo de démo en anglais (mp4), ouverte dans un lecteur plein écran
  videoFr?: string;         // version française de la vidéo (sinon : `video`)
  videoPoster?: string;     // vignette affichée dans la carte (anglais)
  videoPosterFr?: string;   // vignette française
  link?: string;            // URL externe ou chemin interne (/lab/...)
  linkLabel?: string;
  linkLabelEn?: string;
}

const P = '/images/projects/';

// Ajouter un projet = ajouter un objet dans ce tableau.
export const projects: Project[] = [
  {
    title: 'Vegamon',
    titleStyle: 'vegamon',
    year: '2026',
    kind: 'web',
    description: 'Jeu d’ouverture de boosters de cartes personnalisées au thème Vegas : comptes joueurs, booster quotidien, collection « Végadex » sur une table de roulette, booster en 3D. De nouvelles extensions s’ajoutent sans écrire de code.',
    descriptionEn: 'Booster-opening game with custom cards and a Vegas theme: player accounts, a daily booster, a “Vegadex” collection laid out on a roulette table, a 3D booster. New sets can be added without writing any code.',
    stack: ['Next.js', 'TypeScript', 'Postgres', 'Vercel'],
    logo: P + 'vegamon/vegamon-front.webp',
    logoBack: P + 'vegamon/vegamon-back.webp',
    background: P + 'vegamon/card-bg-gold.webp',
    backgroundAlt: P + 'vegamon/card-bg-neon.webp',
    cardBack: { fond: '#0B0B0F', primaire: '#8E4F9E', or: '#E0B84F' },
    cardBackAlt: { fond: '#05070F', primaire: '#7A3BE0', or: '#7FD8FF' },
    link: 'https://vegamon.vercel.app/',
  },
  {
    title: 'Mysteria',
    titleStyle: 'mysteria',
    year: '2026',
    kind: 'web',
    description: 'Sanctuaire d’énigmes en ligne : filtres par catégorie et difficulté, réponses vérifiées sans tenir compte des accents ni de la casse, indices, top 3 présenté en cartes à jouer et formulaire de proposition d’énigmes.',
    descriptionEn: 'Online riddle sanctuary: filters by category and difficulty, answers checked regardless of accents and case, hints, a top 3 shown as playing cards and a form to submit new riddles.',
    stack: ['JavaScript', 'HTML/CSS', 'Canvas', 'SVG'],
    logo: P + 'mysteria/mysteria.webp',
    watermark: P + 'mysteria/mysteria-logo.webp',
    link: 'https://mysteria-gamma.vercel.app/',
  },
  {
    title: 'RacketLab',
    year: '2026',
    kind: 'web',
    description: 'Catalogue immersif des raquettes du top 100 ATP et WTA : deux univers (terre battue et gazon), recherche, filtres, fiches détaillées et raquette en 3D.',
    descriptionEn: 'Immersive catalogue of the rackets used by the ATP and WTA top 100: two worlds (clay and grass), search, filters, detailed sheets and a 3D racket.',
    stack: ['React', 'TanStack Start', 'Three.js', 'Tailwind'],
    logo: P + 'racketlab/rk-tile-ball.svg',
    watermark: P + 'racketlab/loupe-dark.svg',
    titleImage: P + 'racketlab/logo-wordmark-dark.svg',
    link: 'https://racketlab-two.vercel.app/',
  },
  {
    title: 'FIRE!',
    titleStyle: 'fire',
    year: '2026',
    kind: 'web',
    description: 'Jeu de réflexion au tour par tour : brûler tous les arbres malades en un minimum de tours. 10 niveaux de tutoriel, mode sans fin et solveur Monte Carlo Tree Search. Projet d’équipe à Télécom SudParis, en version Java/JavaFX et en version web.',
    descriptionEn: 'Turn-based puzzle game: burn every diseased tree in as few turns as possible. 10 tutorial levels, an endless mode and a Monte Carlo Tree Search solver. Team project at Télécom SudParis, in Java/JavaFX and on the web.',
    stack: ['Java', 'JavaFX', 'TypeScript', 'Vite', 'MCTS'],
    logo: P + 'fire/fire.webp',
    link: 'https://fire-vert-pi.vercel.app/',
  },
  {
    title: 'Miette',
    titleStyle: 'miette',
    year: '2026',
    kind: 'android',
    description: 'Application mobile de suivi alimentaire : recherche dans la table CIQUAL, scan de codes-barres, placard, recettes, export CSV et sauvegarde.',
    descriptionEn: 'Food-tracking mobile app: search in the French CIQUAL nutrition table, barcode scanning, pantry, recipes, CSV export and backup.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    logo: P + 'miette/miette.webp',
    video: P + 'miette/miette-demo.mp4',
    videoPoster: P + 'miette/miette-demo-poster.webp',
    videoFr: P + 'miette/miette-demo-fr.mp4',
    videoPosterFr: P + 'miette/miette-demo-poster-fr.webp',
  },
  {
    title: 'Choipo',
    year: '2026',
    kind: 'pro',
    description: 'Projet réalisé dans un cadre professionnel.',
    descriptionEn: 'Project built in a professional setting.',
    stack: ['Pro'],
    logo: P + 'choipo/choipo.webp',
  },
  {
    title: 'Hero reveal',
    year: '2026',
    kind: 'lab',
    description: 'Section d’accueil interactive : le curseur révèle une prairie sous un désert noir.',
    descriptionEn: 'Interactive landing section: the cursor reveals a meadow beneath a black desert.',
    stack: ['Canvas', 'JavaScript', 'Astro'],
    logo: P + 'hero.webp',
    link: '/lab/brush-reveal',
    linkLabel: 'Voir dans le lab',
    linkLabelEn: 'See it in the lab',
  },
];
