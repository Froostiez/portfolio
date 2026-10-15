export interface Experiment {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

// Ajoute une expérience : 1) une ligne ici, 2) une entrée dans `demos` de src/pages/lab/[slug].astro
export const experiments: Experiment[] = [
  {
    slug: 'brush-reveal',
    title: 'Brush reveal hero',
    date: '2026-10',
    description: 'Un pinceau procédural révèle une seconde image sous la première. Canvas, spline de Catmull-Rom, traînée qui rétrécit.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'foret',
    title: 'Forêt',
    date: '2026-10',
    description: 'Brush reveal sur deux images alignées : une forêt morte et ses ruines, et la même forêt vivante, en fleurs et baignée de lumière. Le curseur ramène la vie.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'glace-et-lave',
    title: 'Glace et lave',
    date: '2026-10',
    description: 'Brush reveal sur un canyon gelé sous une aurore boréale. Le curseur fait fondre la glace : la rivière devient lave, le volcan entre en éruption, la porte du temple rougeoie.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'champ-de-croix',
    title: 'Champ de croix',
    date: '2026-10',
    description: 'Une grille de « × » qui pivotent en « + » et rosissent autour du curseur, comme une onde. Un clic envoie une vague. Clin d’œil à Lacroix.',
    tags: ['canvas', 'interaction', 'génératif'],
  },
  {
    slug: 'mise-au-point',
    title: 'Mise au point',
    date: '2026-10',
    description: 'Un bokeh pastel. La hauteur du curseur règle la profondeur de champ : les disques deviennent nets, et le titre aussi quand on fait le point en bas.',
    tags: ['canvas', 'photo', 'interaction'],
  },
  {
    slug: 'prairie-au-vent',
    title: 'Prairie au vent',
    date: '2026-10',
    description: 'Herbes et fleurs procédurales sur fond nuit, qui ondulent au vent et se couchent au passage du curseur. Ressorts amortis et lucioles.',
    tags: ['canvas', 'physique', 'génératif'],
  },
  {
    slug: 'champ-de-flux',
    title: 'Champ de flux',
    date: '2026-10',
    description: 'Des milliers de fils suivent un champ de vecteurs (bruit de Perlin 3D). Le curseur crée un tourbillon, un clic rebat le champ.',
    tags: ['canvas', 'maths', 'génératif'],
  },
  {
    slug: 'petales',
    title: 'Pétales',
    date: '2026-10',
    description: 'Des pétales de cerisier tombent, poussés par le curseur, et s’accumulent en bas. Un geste rapide au ras du sol les fait repartir.',
    tags: ['canvas', 'physique', 'interaction'],
  },
];
