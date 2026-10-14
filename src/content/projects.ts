export type ProjectKind = 'web' | 'android' | 'pro' | 'lab';

export interface Project {
  title: string;
  year: string;
  kind: ProjectKind;
  description: string;
  stack: string[];
  logo?: string;            // chemin dans public/ (sans base)
  logoBack?: string;
  watermark?: string;       // grand visuel discret en fond de carte        // si présent : le logo devient une pièce 3D (face + dos)
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
    logo: P + 'vegamon-front.webp',
    logoBack: P + 'vegamon-back.webp',
    link: 'https://vegamon.vercel.app/',
  },
  {
    title: 'Mysteria',
    year: '2026',
    kind: 'web',
    description: 'Sanctuaire d’énigmes en ligne : filtres par catégorie et difficulté, réponses vérifiées sans tenir compte des accents ni de la casse, indices, top 3 présenté en cartes à jouer et formulaire de proposition d’énigmes.',
    stack: ['JavaScript', 'HTML/CSS', 'Canvas', 'SVG'],
    logo: P + 'mysteria.webp',
    watermark: P + 'mysteria-logo.webp',
    link: 'https://mysteria-gamma.vercel.app/',
  },
  {
    title: 'RacketLab',
    year: '2026',
    kind: 'web',
    description: 'Catalogue immersif des raquettes du top 100 ATP et WTA : deux univers (terre battue et gazon), recherche, filtres, fiches détaillées et raquette en 3D.',
    stack: ['React', 'TanStack Start', 'Three.js', 'Tailwind'],
    logo: P + 'racketlab.webp',
    link: 'https://racketlab-two.vercel.app/',
  },
  {
    title: 'FIRE!',
    year: '2026',
    kind: 'web',
    description: 'Jeu de réflexion au tour par tour : brûler tous les arbres malades en un minimum de tours. 10 niveaux de tutoriel, mode sans fin et solveur Monte Carlo Tree Search. Projet d’équipe à Télécom SudParis, en version Java/JavaFX et en version web.',
    stack: ['Java', 'JavaFX', 'TypeScript', 'Vite', 'MCTS'],
    logo: P + 'fire.webp',
    link: 'https://fire-vert-pi.vercel.app/',
  },
  {
    title: 'Miette',
    year: '2026',
    kind: 'android',
    description: 'Application mobile de suivi alimentaire : recherche dans la table CIQUAL, scan de codes-barres, placard, recettes, export CSV et sauvegarde.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    logo: P + 'miette.webp',
  },
  {
    title: 'Choipo',
    year: '2026',
    kind: 'pro',
    description: 'Projet réalisé dans un cadre professionnel.',
    stack: ['Pro'],
    logo: P + 'choipo.webp',
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
