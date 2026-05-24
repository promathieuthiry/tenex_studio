// OpenGraph image generator for Tenex Studio.
//
// Builds public/og/og-fr.png and og-en.png (1200x630) from:
//   - the brand wordmark  public/brand/tenex-mark-dark.svg
//   - the founder portrait public/portrait/mathieu_thiry_founder_tenex_studio.webp
//   - the local Astro fonts in .astro/fonts (inlined as base64, so no network)
//
// Layout: wordmark + red rule + subtitle on the left, portrait on the right,
// a low-opacity red "10x" watermark bleeding off the bottom-left.
//
// Run from the repo root (fonts must exist — `npm run dev` or `npm run build`
// once generates .astro/fonts):
//
//   node branding/og/build-og.mjs
//
// Renders @2x via headless Chrome then downscales with sharp for crisp text.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { tmpdir, homedir } from 'node:os';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const TMP = tmpdir();

// ---- Tunables -------------------------------------------------------------
const WIDTH = 1200;
const HEIGHT = 630;
const LEFT_W = 620; // width of the white text panel
const MARK_W = 480; // wordmark width in px
const BIGMARK = {
  text: '10x',
  fontSize: 300,
  left: 60,
  bottom: -66,
  color: '#E2231A',
  opacity: 0.08,
};
const LOCALES = {
  fr: { out: 'public/og/og-fr.jpg', subtitle: 'Agence Web<br>et&nbsp;IA' },
  en: { out: 'public/og/og-en.jpg', subtitle: 'Web &amp; AI<br>Agency' },
};
// ---------------------------------------------------------------------------

const FONT_DIR = resolve(ROOT, '.astro/fonts');

// Pick the base (non -ext-) latin woff2 for a given family/weight.
function fontB64(family, weight) {
  const re = new RegExp(`^font-${family}-${weight}-normal-latin-(?!ext-)[a-f0-9]+\\.woff2$`);
  const file = readdirSync(FONT_DIR).find((f) => re.test(f));
  if (!file) throw new Error(`Font not found: ${family} ${weight} in ${FONT_DIR} (run npm run build first)`);
  return readFileSync(join(FONT_DIR, file)).toString('base64');
}

const b64File = (p) => readFileSync(resolve(ROOT, p)).toString('base64');

const arimo700 = fontB64('arimo', 700);
const inter400 = fontB64('inter', 400);
const inter500 = fontB64('inter', 500);
const geist500 = fontB64('geist-mono', 500);
const portrait = b64File('public/portrait/mathieu_thiry_founder_tenex_studio.webp');

// Brand wordmark: swap its google-fonts @import for an offline base64 Arimo face.
let mark = readFileSync(resolve(ROOT, 'public/brand/tenex-mark-dark.svg'), 'utf8');
mark = mark.replace(
  /@import url\([^)]*\);/,
  `@font-face{font-family:'Arimo';font-weight:700;src:url(data:font/woff2;base64,${arimo700}) format('woff2');}`,
);

const page = (subtitle) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face{font-family:'Arimo';font-weight:700;src:url(data:font/woff2;base64,${arimo700}) format('woff2');}
@font-face{font-family:'Inter';font-weight:400;src:url(data:font/woff2;base64,${inter400}) format('woff2');}
@font-face{font-family:'Inter';font-weight:500;src:url(data:font/woff2;base64,${inter500}) format('woff2');}
@font-face{font-family:'Geist Mono';font-weight:500;src:url(data:font/woff2;base64,${geist500}) format('woff2');}
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:${WIDTH}px;height:${HEIGHT}px;}
.card{
  width:${WIDTH}px;height:${HEIGHT}px;display:flex;background:#ffffff;
  font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased;
  overflow:hidden;
}
.left{
  position:relative;overflow:hidden;
  flex:0 0 ${LEFT_W}px;height:100%;
  display:flex;flex-direction:column;justify-content:center;
  padding:0 0 0 80px;gap:26px;
}
.left .mark,.left .rule,.left .subtitle{position:relative;z-index:1;}
.bigmark{
  position:absolute;z-index:0;left:${BIGMARK.left}px;bottom:${BIGMARK.bottom}px;
  font-family:'Arimo',sans-serif;font-weight:700;
  font-size:${BIGMARK.fontSize}px;line-height:.8;letter-spacing:-.06em;
  color:${BIGMARK.color};opacity:${BIGMARK.opacity};white-space:nowrap;
}
.mark{width:${MARK_W}px;height:auto;display:block;}
.subtitle{
  font-family:'Arimo','Inter',sans-serif;font-weight:700;
  font-size:46px;line-height:1.05;letter-spacing:-1.5px;color:#0f0f12;
}
.rule{width:54px;height:4px;background:#E2231A;}
.right{
  flex:1 1 auto;height:100%;position:relative;overflow:hidden;
}
.right img{
  position:absolute;inset:0;width:100%;height:100%;
  object-fit:cover;object-position:50% 28%;
  filter:grayscale(100%);
}
</style></head>
<body><div class="card">
  <div class="left">
    <div class="bigmark">${BIGMARK.text}</div>
    <div class="mark">${mark}</div>
    <div class="rule"></div>
    <div class="subtitle">${subtitle}</div>
  </div>
  <div class="right">
    <img src="data:image/webp;base64,${portrait}" alt="">
  </div>
</div></body></html>`;

// Locate a headless Chrome: prefer Playwright's chrome-headless-shell, else Chrome.app.
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
  throw new Error('No headless Chrome found (install Playwright chromium or Google Chrome).');
}

const chrome = findChrome();

for (const [loc, { out, subtitle }] of Object.entries(LOCALES)) {
  const html = join(TMP, `og-${loc}.html`);
  const shot = join(TMP, `og-${loc}@2x.png`);
  writeFileSync(html, page(subtitle));
  execFileSync(chrome, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=2', `--window-size=${WIDTH},${HEIGHT}`,
    '--default-background-color=ffffffff',
    `--screenshot=${shot}`, `file://${html}`,
  ], { stdio: 'ignore' });
  await sharp(shot)
    .resize(WIDTH, HEIGHT, { kernel: 'lanczos3' })
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(resolve(ROOT, out));
  console.log(`wrote ${out}`);
}
