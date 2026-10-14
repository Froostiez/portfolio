export interface Project {
  title: string;
  year: string;
  description: string;
  stack: string[];
  link?: string;
}

// Ajoute un projet = ajoute un objet dans ce tableau.
export const projects: Project[] = [
  {
    title: 'FIRE!',
    year: '2026',
    description: 'Jeu de propagation de feu en Java/JavaFX, avec une IA basée sur Monte Carlo Tree Search.',
    stack: ['Java', 'JavaFX', 'MCTS'],
  },
  {
    title: 'Vegamon',
    year: '2026',
    description: 'Site d’ouverture de boosters façon Pokémon, entièrement personnalisé.',
    stack: ['Next.js', 'TypeScript'],
  },
  {
    title: 'Hero reveal',
    year: '2026',
    description: 'Section d’accueil interactive : le curseur révèle une prairie sous un désert noir.',
    stack: ['Canvas', 'JavaScript', 'Astro'],
    link: '/lab/brush-reveal',
  },
];
