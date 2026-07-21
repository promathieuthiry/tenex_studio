// App icon generator for TeneX Studio.
//
// Builds the touch/PWA icons from the "10x" brand motif (white on Swiss red):
//   public/apple-touch-icon.png  180x180
//   public/icon-192.png          192x192
//   public/icon-512.png          512x512  (also the Organization logo in JSON-LD)
//
// Run from the repo root (needs .astro/fonts present):
//   node branding/og/build-icons.mjs
//
// Renders a single @2x master via headless Chrome, then downscales with sharp.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { tmpdir, homedir } from 'node:os';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const TMP = tmpdir();
const FONT_DIR = resolve(ROOT, '.astro/fonts');

const SIZE = 512; // master size
const OUT = [
  { file: 'public/apple-touch-icon.png', size: 180 },
  { file: 'public/icon-192.png', size: 192 },
  { file: 'public/icon-512.png', size: 512 },
];

function fontB64(family, weight) {
  const re = new RegExp(`^font-${family}-${weight}-normal-latin-(?!ext-)[a-f0-9]+\\.woff2$`);
  const file = readdirSync(FONT_DIR).find((f) => re.test(f));
  if (!file) throw new Error(`Font not found: ${family} ${weight} (run npm run build first)`);
  return readFileSync(join(FONT_DIR, file)).toString('base64');
}

const arimo700 = fontB64('arimo', 700);

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Arimo';font-weight:700;src:url(data:font/woff2;base64,${arimo700}) format('woff2');}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:${SIZE}px;height:${SIZE}px;}
.icon{
  width:${SIZE}px;height:${SIZE}px;background:#E2231A;
  display:flex;align-items:center;justify-content:center;
}
.mark{
  font-family:'Arimo',sans-serif;font-weight:700;color:#fff;opacity:.92;
  font-size:230px;letter-spacing:-.05em;line-height:1;
}
</style></head><body><div class="icon"><div class="mark">10x</div></div></body></html>`;

function findChrome() {
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  if (existsSync(cache)) {
    for (const d of readdirSync(cache).filter((n) => n.startsWith('chromium_headless_shell-'))) {
      const bin = join(cache, d, 'chrome-headless-shell-mac-arm64/chrome-headless-shell');
      if (existsSync(bin)) return bin;
    }
  }
  const chromeApp = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (existsSync(chromeApp)) return chromeApp;
  throw new Error('No headless Chrome found.');
}

const htmlPath = join(TMP, 'icon.html');
const masterPath = join(TMP, 'icon@2x.png');
writeFileSync(htmlPath, html);
execFileSync(findChrome(), [
  '--headless', '--disable-gpu', '--hide-scrollbars',
  '--force-device-scale-factor=2', `--window-size=${SIZE},${SIZE}`,
  `--screenshot=${masterPath}`, `file://${htmlPath}`,
], { stdio: 'ignore' });

for (const { file, size } of OUT) {
  await sharp(masterPath)
    .resize(size, size, { kernel: 'lanczos3' })
    .png({ compressionLevel: 9 })
    .toFile(resolve(ROOT, file));
  console.log(`wrote ${file}`);
}
