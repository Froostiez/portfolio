// Préfixe un chemin avec la base du site (utile sur GitHub Pages : /nom-du-repo).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
}
