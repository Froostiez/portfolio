# Portfolio

Site Astro statique : accueil avec hero interactif, projets, lab d'expériences.

```powershell
npm install
npm run dev      # http://localhost:4321
npm run build
```

Ajouter un projet : `src/content/projects.ts`.
Ajouter une expérience : `src/content/experiments.ts` + `demos` dans `src/pages/lab/[slug].astro`.
Déploiement : GitHub Pages via `.github/workflows/deploy.yml` (SITE et BASE calculés automatiquement).
