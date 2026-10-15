// Galerie de la page Photo. Une entrée = une photo.
// Fichiers dans public/images/photo/ : <file>.webp (grand, 2000 px max) et <file>-thumb.webp (800 px).
// w / h = dimensions de la grande version (évite les sauts de mise en page).
export interface Photo {
  file: string;
  w: number;
  h: number;
  alt: { fr: string; en: string };
  place?: string; // lieu, affiché dans la visionneuse
}

export const instagram = 'https://www.instagram.com/panoramiqe/';

export const photos: Photo[] = [];
