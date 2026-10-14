export type ProjectKind = 'web' | 'android' | 'pro' | 'lab';

export interface Project {
  title: string;
  year: string;
  kind: ProjectKind;
  description: string;
  stack: string[];
  logo?: string;            // chemin dans public/ (sans base)
  logoBack?: string;        // si présent : le logo devient une pièce 3D (face + dos)
  watermark?: string;       // grand visuel discret en fond de carte
  background?: string;      // fond de carte (image)
  backgroundAlt?: string;   // fond au survol (fondu enchaîné)
  cardBack?: { fond: string; primaire: string; or: string };      // mini dos de carte dans le coin
  cardBackAlt?: { fond: string; primaire: string; or: string };   // palette au survol
  titleImage?: string;      // remplace le titre texte par une image (wordmark)
  link?: string;            // URL externe ou chemin interne (/lab/...)
  linkLabel?: string;
}

const P = '/images/projects/';

// Ajouter un projet = ajouter un objet dans ce tableau.
export const projects: Project[] = [
  {
    title: 'Vegamon',
    year: '2026',
    kind: 'web',
    description: 'Jeu d’ouverture de boosters de cartes personnalisées au thème Vegas : comptes joueurs, booster quotidien, collection « Végadex » sur une table de roulette, booster en 3D. De nouvelles extensions s’ajoutent sans écrire de code.',
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
    year: '2026',
    kind: 'web',
    description: 'Sanctuaire d’énigmes en ligne : filtres par catégorie et difficulté, réponses vérifiées sans tenir compte des accents ni de la casse, indices, top 3 présenté en cartes à jouer et formulaire de proposition d’énigmes.',
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
    stack: ['React', 'TanStack Start', 'Three.js', 'Tailwind'],
    logo: P + 'racketlab/rk-tile-ball.svg',
    watermark: P + 'racketlab/loupe-dark.svg',
    titleImage: P + 'racketlab/logo-wordmark-dark.svg',
    link: 'https://racketlab-two.vercel.app/',
  },
  {
    title: 'FIRE!',
    year: '2026',
    kind: 'web',
    description: 'Jeu de réflexion au tour par tour : brûler tous les arbres malades en un minimum de tours. 10 niveaux de tutoriel, mode sans fin et solveur Monte Carlo Tree Search. Projet d’équipe à Télécom SudParis, en version Java/JavaFX et en version web.',
    stack: ['Java', 'JavaFX', 'TypeScript', 'Vite', 'MCTS'],
    logo: P + 'fire/fire.webp',
    link: 'https://fire-vert-pi.vercel.app/',
  },
  {
    title: 'Miette',
    year: '2026',
    kind: 'android',
    description: 'Application mobile de suivi alimentaire : recherche dans la table CIQUAL, scan de codes-barres, placard, recettes, export CSV et sauvegarde.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    logo: P + 'miette/miette.webp',
  },
  {
    title: 'Choipo',
    year: '2026',
    kind: 'pro',
    description: 'Projet réalisé dans un cadre professionnel.',
    stack: ['Pro'],
    logo: P + 'choipo/choipo.webp',
  },
  {
    title: 'Hero reveal',
    year: '2026',
    kind: 'lab',
    description: 'Section d’accueil interactive : le curseur révèle une prairie sous un désert noir.',
    stack: ['Canvas', 'JavaScript', 'Astro'],
    logo: P + 'hero.webp',
    link: '/lab/brush-reveal',
    linkLabel: 'Voir dans le lab',
  },
];
