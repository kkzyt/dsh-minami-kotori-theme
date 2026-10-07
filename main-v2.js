// Single theme entry: the pet engine is vendored, not imported from dsh-pet.
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { apply as applyPet, loadPetRegistry } from './vendor/pet-engine.js';
export { Config, inject } from './vendor/pet-engine.js';
export const name = 'minami-kotori-theme';
export function apply(ctx, config = {}) {
  const registry = loadPetRegistry({
    packageRoot: fileURLToPath(new URL('./', import.meta.url)),
    petsDir: '',
    dshPetsDir: '',
  });
  if (registry.entries.length !== 1 || registry.entries[0].id !== 'minami-kotori-hug') {
    throw new Error('minami-kotori-theme must ship exactly one pet: minami-kotori-hug');
  }
  // Exact allowlisted assets, independent of pet visibility/enabled state.
  ctx.effect(() => {
    const disposers = [
      ['wallpaper-light.webp', 'image/webp'],
      ['wallpaper-dark.jpg', 'image/jpeg'],
      ['kotori-favicon.png', 'image/png'],
      ['kotori-thinking.gif', 'image/gif'],
      ['kotori-new-session.png', 'image/png'],
      ['kotori-settings-icon.webp', 'image/webp'],
    ].map(([filename, type]) => ctx.webServer.register({
      kind: 'exact',
      path: `/kotori-theme/assets/${filename}`,
      async handler(req, res) {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405, { Allow: 'GET, HEAD' });
          res.end();
          return;
        }
        try {
          const body = await readFile(new URL(`./assets/${filename}`, import.meta.url));
          res.writeHead(200, {
            'Content-Type': type,
            'Content-Length': body.length,
            'Cache-Control': 'no-cache',
            'X-Content-Type-Options': 'nosniff',
          });
          res.end(req.method === 'HEAD' ? undefined : body);
        } catch (error) {
          res.writeHead(error.code === 'ENOENT' ? 404 : 500);
          res.end();
        }
      },
    }));
    return () => disposers.forEach(dispose => dispose());
  }, 'kotori: wallpaper assets');
  applyPet(ctx, { ...config, registry });
}
