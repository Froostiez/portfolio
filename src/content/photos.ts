// Galerie de la page Photo. Une entrée = une photo.
// Fichiers dans public/images/photo/ : <file>.webp (grand, 2000 px max) et <file>-thumb.webp (800 px).
// w / h = dimensions de la grande version (évite les sauts de mise en page).
export interface Photo {
  file: string;
  w: number;
  h: number;
  alt: { fr: string; en: string };
  place?: string; // lieu, affiché dans la visionneuse
  variants?: string[]; // autres retouches de la même photo, en carrousel dans la visionneuse (fichiers <nom>.webp)
}

export const instagram = 'https://www.instagram.com/panoramiqe/';

// Ordre = ordre de lecture (de gauche à droite, ligne par ligne). Commentaire = fichier d'origine dans photos-src/.
export const photos: Photo[] = [
  { file: 'statue', w: 1125, h: 2000, variants: ['statue-b', 'statue-c'], alt: { fr: "Statue d'un homme assis au bord d'un immeuble", en: "Statue of a man sitting on the edge of a building" } }, // IMG-20261010-WA0026-2 (+ WA0026, WA0026-3)
  { file: 'p01', w: 1500, h: 2000, alt: { fr: "Cycliste au pied d'une tour illuminée en rouge", en: "Cyclist at the foot of a tower lit in red" } }, // IMG_20210413_214857.jpg
  { file: 'p02', w: 1500, h: 2000, alt: { fr: "La tour Eiffel illuminée, vue d'en bas", en: "The Eiffel Tower lit up, seen from below" } }, // PXL_20260304_182906863.jpg
  { file: 'p03', w: 2000, h: 1333, alt: { fr: "Descente en courant dans la poussière volcanique", en: "Running down through volcanic dust" } }, // _MG_9363~2.JPG
  { file: 'p04', w: 1364, h: 1707, alt: { fr: "Cyclistes en silhouette sous un coucher de soleil rose", en: "Cyclists silhouetted against a pink sunset" } }, // IMG_20210317_223411_226.jpg
  { file: 'p05', w: 2000, h: 1333, alt: { fr: "Coucher de soleil sur les crêtes", en: "Sunset over the ridges" } }, // _MG_3906.jpg
  { file: 'p06', w: 2000, h: 1333, alt: { fr: "Randonneurs dans une prairie fleurie", en: "Hikers in a flowering meadow" } }, // _MG_6126.JPG
  { file: 'p07', w: 1613, h: 2000, alt: { fr: "Silhouette devant une lumière bleue", en: "Silhouette in front of a blue light" } }, // IMG_20210124_232118.jpg
  { file: 'p08', w: 1600, h: 1200, alt: { fr: "Kayak sous un grand ciel nuageux", en: "Kayak under a vast cloudy sky" } }, // IMG_6167~2.jpg
  { file: 'p09', w: 2000, h: 1333, alt: { fr: "Arbres en contre-jour sous un ciel d'orage", en: "Backlit trees under a stormy sky" } }, // _MG_5977~3.JPG
  { file: 'p10', w: 1500, h: 2000, alt: { fr: "Canopée de grands arbres, vue d'en bas", en: "Canopy of tall trees, seen from below" } }, // PXL_20260409_130135807.jpg
  { file: 'p11', w: 2000, h: 1333, alt: { fr: "Caténaires en contre-jour au coucher du soleil", en: "Overhead lines silhouetted at sunset" } }, // fullsizeoutput_2af~2.jpeg
  { file: 'p12', w: 1200, h: 1600, alt: { fr: "Porte de temple ancienne dans la forêt", en: "Ancient temple gate in the forest" } }, // IMG_6238.jpg
  { file: 'p13', w: 2000, h: 1333, alt: { fr: "Groupe au sommet d'une crête", en: "Group at the top of a ridge" } }, // _MG_8175.JPG
  { file: 'p14', w: 2000, h: 1333, alt: { fr: "Coureurs dans un nuage de poussière", en: "Runners in a cloud of dust" } }, // _MG_9367 Copy Copy.JPG
  { file: 'p15', w: 1440, h: 960, alt: { fr: "Trois silhouettes au crépuscule", en: "Three silhouettes at dusk" } }, // IMG_20210926_213938_453.jpg
  { file: 'p16', w: 1500, h: 2000, alt: { fr: "Pause dans une vallée de montagne", en: "A break in a mountain valley" } }, // PXL_20260826_110159638.jpg
  { file: 'p17', w: 2000, h: 1125, alt: { fr: "Portrait en noir et blanc", en: "Black and white portrait" } }, // IMG_20230212_224019~5.jpg
  { file: 'p18', w: 2000, h: 1333, alt: { fr: "Randonneur sur un versant ensoleillé", en: "Hiker on a sunlit slope" } }, // _MG_6450~2.JPG
  { file: 'p19', w: 1086, h: 724, alt: { fr: "Toits de la ville au coucher du soleil", en: "City rooftops at sunset" } }, // UNADJUSTEDNONRAW_thumb_4e9~2.jpg
  { file: 'p20', w: 1333, h: 2000, alt: { fr: "Deux randonneurs face à la forêt", en: "Two hikers facing the forest" } }, // _MG_6127.JPG
  { file: 'p21', w: 1784, h: 2000, alt: { fr: "Graffitis au pied d'un hôtel en forme de voile", en: "Graffiti below a sail-shaped hotel" } }, // IMG_20220629_181312~3.jpg
  { file: 'p22', w: 1500, h: 2000, alt: { fr: "Cimes des arbres contre le ciel", en: "Treetops against the sky" } }, // PXL_20260409_130152946.jpg
  { file: 'p23', w: 2000, h: 1333, alt: { fr: "Randonneurs au bord d'une falaise", en: "Hikers by a cliff" } }, // _MG_3532~3.jpeg
  { file: 'p24', w: 1333, h: 2000, alt: { fr: "Randonneurs montrant la vallée", en: "Hikers pointing at the valley" } }, // _MG_8896~2.JPG
  { file: 'p25', w: 2000, h: 1333, alt: { fr: "Randonneur sur un versant de montagne", en: "Hiker on a mountainside" } }, // _MG_3511~3.jpeg
  { file: 'p26', w: 1333, h: 2000, alt: { fr: "Escalade d'une paroi rocheuse", en: "Climbing a rock face" } }, // _MG_6839~2.JPG
  { file: 'p27', w: 2000, h: 1333, alt: { fr: "Lumière dans une forêt sombre", en: "Light in a dark forest" } }, // _MG_6061~2.JPG
  { file: 'p28', w: 2000, h: 1333, alt: { fr: "Randonneurs dans un sous-bois", en: "Hikers in the undergrowth" } }, // _MG_6146.JPG
  { file: 'p29', w: 1333, h: 2000, alt: { fr: "Pente sombre striée de traces", en: "Dark slope streaked with tracks" } }, // _MG_9433 Copy.JPG
  { file: 'p30', w: 2000, h: 1333, alt: { fr: "Randonneur sous les branches", en: "Hiker under the branches" } }, // _MG_6148.JPG
  { file: 'p31', w: 2000, h: 1333, alt: { fr: "Vallée verte dans la brume", en: "Green valley in the mist" } }, // _MG_3516~2.jpeg
  { file: 'p32', w: 1333, h: 2000, alt: { fr: "Deux randonneurs sur un sentier forestier", en: "Two hikers on a forest trail" } }, // _MG_6154.JPG
  { file: 'p33', w: 1333, h: 2000, alt: { fr: "Façade et fils électriques", en: "Facade and power lines" } }, // _MG_9495.JPG
  { file: 'p34', w: 2000, h: 1333, alt: { fr: "Sentier entre les pins", en: "Trail through the pines" } }, // _MG_3520.jpeg
  { file: 'p35', w: 2000, h: 1333, alt: { fr: "Sentier fleuri en sous-bois", en: "Flowered path in the woods" } }, // _MG_6904.JPG
  { file: 'p36', w: 1333, h: 2000, alt: { fr: "Randonneur dans une clairière", en: "Hiker in a clearing" } }, // _MG_6153~2.JPG
];
