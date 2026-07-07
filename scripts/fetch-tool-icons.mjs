// One-off content-prep tool: downloads each tool's brand icon so the static
// site self-hosts them (no runtime third-party requests). Prefers the SVG
// icon declared in the site's <link rel="icon"> tags; falls back to the
// Google favicon PNG. Run via `npm run tools:icons` (add `-- --force` to
// redownload existing icons and retry SVG upgrades).
import { mkdir, writeFile, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import resources from '../src/data/resources.json' with { type: 'json' };

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/tool-icons');
const MANIFEST_PATH = path.join(ROOT, 'src/data/tool-icons-manifest.json');
const FORCE = process.argv.includes('--force');
const BATCH_SIZE = 5;
const fetchOpts = () => ({
  signal: AbortSignal.timeout(10_000),
  headers: {
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
  },
});

// Tools with a hand-picked `icon` file (e.g. an SVG) are served directly; no fetch.
const tools = resources
  .flatMap((category) => category.tools)
  .filter((tool) => !tool.icon);

function looksLikeSvg(body) {
  const head = body.slice(0, 512).trimStart().toLowerCase();
  return head.startsWith('<svg') || (head.startsWith('<?xml') && head.includes('<svg'));
}

// Returns the best SVG icon URL declared on the page, or null. Ignores
// rel="mask-icon" (usually a monochrome silhouette, not the brand mark).
function findSvgIconUrl(html, pageUrl) {
  const links = html.match(/<link\b[^>]*>/gi) ?? [];
  for (const tag of links) {
    const rel = /rel=["']?([^"'>\s]+(?:\s[^"']*)?)["']?/i.exec(tag)?.[1]?.toLowerCase() ?? '';
    if (!rel.includes('icon') || rel.includes('mask-icon')) continue;
    const href = /href=["']?([^"'>\s]+)["']?/i.exec(tag)?.[1];
    if (!href) continue;
    const type = /type=["']?([^"'>\s]+)["']?/i.exec(tag)?.[1]?.toLowerCase() ?? '';
    const isSvg = type === 'image/svg+xml' || href.split('?')[0].toLowerCase().endsWith('.svg');
    if (!isSvg) continue;
    try {
      return new URL(href, pageUrl).href;
    } catch {
      continue;
    }
  }
  return null;
}

async function fetchSvg(tool) {
  const page = await fetch(tool.url, fetchOpts());
  if (!page.ok) throw new Error(`page HTTP ${page.status}`);
  const svgUrl = findSvgIconUrl(await page.text(), page.url);
  if (!svgUrl) return null;
  const res = await fetch(svgUrl, fetchOpts());
  if (!res.ok) return null;
  const body = await res.text();
  if (!looksLikeSvg(body)) return null;
  return body;
}

async function fetchGooglePng(tool) {
  const hostname = new URL(tool.url).hostname;
  const res = await fetch(
    `https://www.google.com/s2/favicons?sz=128&domain=${hostname}`,
    fetchOpts(),
  );
  const type = res.headers.get('content-type') ?? '';
  if (!res.ok || !type.startsWith('image/')) {
    throw new Error(`HTTP ${res.status} (${type || 'no content-type'})`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.byteLength < 64) throw new Error('empty response');
  return buf;
}

async function removeStale(id, keepExt) {
  const other = keepExt === 'svg' ? 'png' : 'svg';
  const stale = path.join(OUT_DIR, `${id}.${other}`);
  if (existsSync(stale)) await unlink(stale);
}

async function fetchIcon(tool) {
  const svgDest = path.join(OUT_DIR, `${tool.id}.svg`);
  const pngDest = path.join(OUT_DIR, `${tool.id}.png`);
  if (!FORCE && existsSync(svgDest)) return { id: tool.id, file: `${tool.id}.svg`, skipped: true };
  if (!FORCE && existsSync(pngDest)) return { id: tool.id, file: `${tool.id}.png`, skipped: true };

  try {
    const svg = await fetchSvg(tool).catch(() => null);
    if (svg) {
      await writeFile(svgDest, svg);
      await removeStale(tool.id, 'svg');
      return { id: tool.id, file: `${tool.id}.svg` };
    }
    const png = await fetchGooglePng(tool);
    await writeFile(pngDest, png);
    await removeStale(tool.id, 'png');
    return { id: tool.id, file: `${tool.id}.png` };
  } catch (err) {
    // On --force, keep whatever file already exists instead of dropping the icon.
    if (existsSync(svgDest)) return { id: tool.id, file: `${tool.id}.svg`, skipped: true };
    if (existsSync(pngDest)) return { id: tool.id, file: `${tool.id}.png`, skipped: true };
    return { id: tool.id, file: null, reason: err instanceof Error ? err.message : String(err) };
  }
}

await mkdir(OUT_DIR, { recursive: true });

const results = [];
for (let i = 0; i < tools.length; i += BATCH_SIZE) {
  const batch = tools.slice(i, i + BATCH_SIZE);
  results.push(...(await Promise.all(batch.map(fetchIcon))));
}

const icons = Object.fromEntries(
  results
    .filter((r) => r.file)
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((r) => [r.id, r.file]),
);
const missing = results.filter((r) => !r.file);

await writeFile(
  MANIFEST_PATH,
  `${JSON.stringify({ generatedAt: new Date().toISOString(), icons }, null, 2)}\n`,
);

const svgCount = Object.values(icons).filter((f) => f.endsWith('.svg')).length;
const downloaded = results.filter((r) => r.file && !r.skipped).length;
const skipped = results.filter((r) => r.skipped).length;
console.log(
  `Icons: ${Object.keys(icons).length}/${tools.length} present (${svgCount} svg, ${downloaded} downloaded, ${skipped} kept).`,
);
for (const miss of missing) {
  console.warn(`  missing ${miss.id}: ${miss.reason}`);
}
