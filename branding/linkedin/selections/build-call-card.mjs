import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { tmpdir, homedir } from 'node:os';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
const DIR = resolve(ROOT, 'branding/linkedin/selections');
const FONT_DIR = resolve(ROOT, '.astro/fonts');
const WIDTH = 1200;
const HEIGHT = 630;

function fontB64(family, weight) {
  const re = new RegExp(`^font-${family}-${weight}-normal-latin-(?!ext-)[a-f0-9]+\\.woff2$`);
  const file = readdirSync(FONT_DIR).find((name) => re.test(name));
  if (!file) throw new Error(`Font not found: ${family} ${weight} in ${FONT_DIR}`);
  return readFileSync(join(FONT_DIR, file)).toString('base64');
}

function fileB64(path) {
  return readFileSync(resolve(ROOT, path)).toString('base64');
}

function findChrome() {
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  if (existsSync(cache)) {
    const candidates = readdirSync(cache)
      .filter((name) => name.startsWith('chromium_headless_shell-'))
      .sort()
      .reverse();

    for (const dir of candidates) {
      const bin = join(cache, dir, 'chrome-headless-shell-mac-arm64/chrome-headless-shell');
      if (existsSync(bin)) return bin;
    }
  }

  const chromeApp = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (existsSync(chromeApp)) return chromeApp;
  throw new Error('No headless Chrome found.');
}

const template = readFileSync(resolve(DIR, 'tenex-call-linkedin-card.html'), 'utf8')
  .replace('__ARIMO_700__', fontB64('arimo', 700))
  .replace('__INTER_500__', fontB64('inter', 500))
  .replace('__GEIST_500__', fontB64('geist-mono', 500))
  .replace('__PORTRAIT__', fileB64('public/portrait/mathieu_thiry_founder_tenex_studio.webp'));

const html = join(tmpdir(), 'tenex-call-linkedin-card.html');
const shot = join(tmpdir(), 'tenex-call-linkedin-card@2x.png');

writeFileSync(html, template);

execFileSync(findChrome(), [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-device-scale-factor=2',
  `--window-size=${WIDTH},${HEIGHT}`,
  '--default-background-color=ffffffff',
  `--screenshot=${shot}`,
  `file://${html}`,
], { stdio: 'ignore' });

await sharp(shot)
  .resize(WIDTH, HEIGHT, { kernel: 'lanczos3' })
  .png({ compressionLevel: 9, palette: false })
  .toFile(resolve(DIR, 'tenex-call-linkedin-card.png'));

console.log('wrote branding/linkedin/selections/tenex-call-linkedin-card.png');
