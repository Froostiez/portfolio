// Boucle commune des heroes du lab : canvas net (DPR), pointeur lissé, pause hors écran,
// prefers-reduced-motion (une seule image fixe).
export interface Ptr { x: number; y: number; px: number; py: number; vx: number; vy: number; active: boolean }
export interface HeroCtx { ctx: CanvasRenderingContext2D; w: number; h: number; dpr: number; ptr: Ptr; reduced: boolean; root: HTMLElement }
export interface HeroDef {
  init?(c: HeroCtx): void;                       // à chaque redimensionnement
  frame(c: HeroCtx, t: number, dt: number): void; // t en secondes (performance.now)
  click?(c: HeroCtx, x: number, y: number, t: number): void;
}

export function runHero(root: HTMLElement, def: HeroDef, maxDpr = 2) {
  const canvas = root.querySelector('canvas')!;
  const ctx = canvas.getContext('2d')!;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ptr: Ptr = { x: -1e4, y: -1e4, px: -1e4, py: -1e4, vx: 0, vy: 0, active: false };
  const c: HeroCtx = { ctx, w: 1, h: 1, dpr: 1, ptr, reduced, root };
  const now = () => performance.now() / 1000;

  const resize = () => {
    const r = root.getBoundingClientRect();
    c.dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    c.w = Math.max(1, r.width);
    c.h = Math.max(1, r.height);
    canvas.width = Math.round(c.w * c.dpr);
    canvas.height = Math.round(c.h * c.dpr);
    ctx.setTransform(c.dpr, 0, 0, c.dpr, 0, 0);
    def.init?.(c);
    if (reduced) def.frame(c, 0, 0);
  };
  new ResizeObserver(resize).observe(root);

  const local = (e: PointerEvent) => {
    const r = root.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  };
  root.addEventListener('pointermove', (e) => {
    const [x, y] = local(e);
    if (!ptr.active) { ptr.px = x; ptr.py = y; }
    ptr.x = x; ptr.y = y; ptr.active = true;
  });
  root.addEventListener('pointerleave', () => { ptr.active = false; ptr.vx = ptr.vy = 0; });
  root.addEventListener('pointerdown', (e) => {
    const [x, y] = local(e);
    if (!ptr.active) { ptr.px = x; ptr.py = y; }
    ptr.x = x; ptr.y = y; ptr.active = true;
    def.click?.(c, x, y, now());
    if (reduced) def.frame(c, 0, 0);
  });
  root.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') ptr.active = false; });

  let visible = true, raf = 0, last = 0;
  const loop = (ms: number) => {
    raf = 0;
    if (!visible || document.hidden) return;
    const t = ms / 1000;
    const dt = Math.min(0.05, Math.max(0, t - last));
    last = t;
    if (ptr.active && dt > 0) {
      ptr.vx += ((ptr.x - ptr.px) / dt - ptr.vx) * 0.35;
      ptr.vy += ((ptr.y - ptr.py) / dt - ptr.vy) * 0.35;
    }
    ptr.px = ptr.x; ptr.py = ptr.y;
    def.frame(c, t, dt);
    raf = requestAnimationFrame(loop);
  };
  const start = () => {
    if (reduced || raf) return;
    last = now();
    raf = requestAnimationFrame(loop);
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); }).observe(root);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) start(); });
  start();
}

export const mix = (a: number[], b: number[], k: number) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
export const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
export const LAV = [201, 184, 255];
export const PINK = [255, 168, 207];
