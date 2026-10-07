# Third-party notices

## Pet engine

The vendored `vendor/pet-engine.js`, `vendor/state-NvDEoCln.js`, and the pet-engine portion of `client-v2.js` are derived from `@linxin666/dsh-pet` version 0.4.5, by linxin666 and upstream contributors, licensed under Apache License 2.0. The complete license is included as `LICENSE.pet-engine`.

Modifications made for minami-kotori-theme:
- Host and Client now share the theme entry and settings namespace.
- Package ships only Minami Kotori hug assets; external pet directories are not scanned.
- Floating UI uses the Harness shell.overlay slot, not a second body-mounted React root.
- Runtime store dependency replaced with a private React-compatible local store.
- Daily external telemetry removed; Live2D renderer registration and whale decoration controls removed.
- Default identity and settings labels changed to Kotori.
- Existing DSH pet persistence location remains unchanged for migration.

No separate dsh-pet package is required at runtime. Generic framework imports are supplied by DSH.

## Minami Kotori hug artwork

Bundled assets originate from the user's local minami-kotori-hug 1.5.0 pet pack. Its manifest license reads: “personal use only; fan art for personal desktop pet”. The repository maintainer stated during release preparation that permission to publicly distribute the included pet artwork, wallpaper, and logos had been obtained. No permission evidence is included here; the original manifest notice is preserved rather than silently rewritten. This statement does not grant downstream commercial or redistribution rights to the artwork or Love Live! characters/logos. Contact the maintainer for applicable terms and permission evidence before reuse.
