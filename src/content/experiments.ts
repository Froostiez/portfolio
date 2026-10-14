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
];
