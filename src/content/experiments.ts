export interface Experiment {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  copy?: boolean;         // false : pas de titre "Code Data Curiosity" par-dessus (le hero a déjà son texte)
}

// Ajoute une expérience : 1) une ligne ici, 2) une entrée dans `demos` de src/pages/lab/[slug].astro
export const experiments: Experiment[] = [
  {
    slug: 'brush-reveal',
    title: 'Brush reveal hero',
    titleEn: 'Brush reveal hero',
    date: '2026-10',
    description: 'Un pinceau procédural révèle une seconde image sous la première. Canvas, spline de Catmull-Rom, traînée qui rétrécit.',
    descriptionEn: 'A procedural brush reveals a second image beneath the first. Canvas, Catmull-Rom spline, shrinking trail.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'foret',
    title: 'Forêt',
    titleEn: 'Forest',
    date: '2026-10',
    description: 'Brush reveal sur deux images alignées : une forêt morte et ses ruines, et la même forêt vivante, en fleurs et baignée de lumière. Le curseur ramène la vie.',
    descriptionEn: 'Brush reveal on two aligned images: a dead forest with its ruins, and the same forest alive, in bloom and bathed in light. The cursor brings it back to life.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'concept',
    title: 'Concept',
    titleEn: 'Concept',
    date: '2026-10',
    description: 'Une vraie simulation de fluide (Navier-Stokes en WebGL) en bleu-violet et cyan : la souris remue l’encre, le mot CONCEPT sert de fenêtre plus lumineuse. Repères HUD, coordonnées et timecode en direct.',
    descriptionEn: 'A real fluid simulation (Navier-Stokes in WebGL) in blue-violet and cyan: the mouse stirs the ink, and the word CONCEPT acts as a brighter window. HUD marks, live coordinates and timecode.',
    tags: ['webgl', 'simulation', 'interaction'],
    copy: false,
  },
  {
    slug: 'glace-et-lave',
    title: 'Glace et lave',
    titleEn: 'Ice and lava',
    date: '2026-10',
    description: 'Brush reveal sur un canyon gelé sous une aurore boréale. Le curseur fait fondre la glace : la rivière devient lave, le volcan entre en éruption, la porte du temple rougeoie.',
    descriptionEn: 'Brush reveal on a frozen canyon under the northern lights. The cursor melts the ice: the river turns to lava, the volcano erupts, the temple gate glows red.',
    tags: ['canvas', 'interaction', 'ia-images'],
  },
  {
    slug: 'champ-de-croix',
    title: 'Champ de croix',
    titleEn: 'Field of crosses',
    date: '2026-10',
    description: 'Une grille de « × » qui pivotent en « + » et rosissent autour du curseur, comme une onde. Un clic envoie une vague. Clin d’œil à Lacroix.',
    descriptionEn: 'A grid of “×” that turn into “+” and blush pink around the cursor, like a ripple. A click sends a wave. A nod to my surname, Lacroix.',
    tags: ['canvas', 'interaction', 'génératif'],
  },
  {
    slug: 'mise-au-point',
    title: 'Mise au point',
    titleEn: 'Focus',
    date: '2026-10',
    description: 'Un bokeh pastel. La hauteur du curseur règle la profondeur de champ : les disques deviennent nets, et le titre aussi quand on fait le point en bas.',
    descriptionEn: 'Pastel bokeh. The cursor height sets the depth of field: the discs come into focus, and so does the title when you focus at the bottom.',
    tags: ['canvas', 'photo', 'interaction'],
  },
  {
    slug: 'prairie-au-vent',
    title: 'Prairie au vent',
    titleEn: 'Meadow in the wind',
    date: '2026-10',
    description: 'Herbes et fleurs procédurales sur fond nuit, qui ondulent au vent et se couchent au passage du curseur. Ressorts amortis et lucioles.',
    descriptionEn: 'Procedural grass and flowers on a night background, swaying in the wind and bending as the cursor passes. Damped springs and fireflies.',
    tags: ['canvas', 'physique', 'génératif'],
  },
  {
    slug: 'champ-de-flux',
    title: 'Champ de flux',
    titleEn: 'Flow field',
    date: '2026-10',
    description: 'Des milliers de fils suivent un champ de vecteurs (bruit de Perlin 3D). Le curseur crée un tourbillon, un clic rebat le champ.',
    descriptionEn: 'Thousands of threads follow a vector field (3D Perlin noise). The cursor creates a vortex, a click reshuffles the field.',
    tags: ['canvas', 'maths', 'génératif'],
  },
  {
    slug: 'petales',
    title: 'Pétales',
    titleEn: 'Petals',
    date: '2026-10',
    description: 'Des pétales de cerisier tombent, poussés par le curseur, et s’accumulent en bas. Un geste rapide au ras du sol les fait repartir.',
    descriptionEn: 'Cherry blossom petals fall, pushed by the cursor, and pile up at the bottom. A quick swipe along the ground sends them flying again.',
    tags: ['canvas', 'physique', 'interaction'],
  },
];
