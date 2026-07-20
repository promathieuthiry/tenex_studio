#!/usr/bin/env python3
"""Derive a themed :root{} block from a screenshot's palette.
Usage: theme.py <image>   -> prints a <style> override to stdout.
Samples via ImageMagick histogram; picks a vivid accent + dominant hue,
builds a dark tinted gradient in that hue so the mockup background matches
the screenshot. Pure stdlib + `magick`."""
import subprocess, sys, re, colorsys, math

img = sys.argv[1]
out = subprocess.run(
    ["magick", img, "-alpha", "remove", "-resize", "160x160",
     "-colors", "24", "-format", "%c", "histogram:info:-"],
    capture_output=True, text=True, check=True).stdout

pal = []  # (count, r, g, b)
for line in out.splitlines():
    m = re.match(r"\s*(\d+):.*#([0-9A-Fa-f]{6})", line)
    if m:
        n = int(m.group(1)); hx = m.group(2)
        r, g, b = (int(hx[i:i+2], 16) for i in (0, 2, 4))
        pal.append((n, r, g, b))
if not pal:
    sys.exit("no palette")

total = sum(p[0] for p in pal)

def hsl(r, g, b):
    h, l, s = colorsys.rgb_to_hls(r/255, g/255, b/255)
    return h, s, l  # h,s,l in 0..1

def rgb(h, s, l):
    r, g, b = colorsys.hls_to_rgb(h % 1.0, max(0, min(1, l)), max(0, min(1, s)))
    return f"{round(r*255)},{round(g*255)},{round(b*255)}"

# accent: vivid, present, not near-black/white
cands = []
for n, r, g, b in pal:
    h, s, l = hsl(r, g, b)
    if s > 0.22 and 0.22 < l < 0.82:
        cands.append((s * math.sqrt(n / total), h, s, l, n))
if cands:
    cands.sort(reverse=True)
    _, ah, as_, al, _ = cands[0]
else:  # desaturated image: fall back to weighted-mean hue
    r = sum(p[0]*p[1] for p in pal)/total
    g = sum(p[0]*p[2] for p in pal)/total
    b = sum(p[0]*p[3] for p in pal)/total
    ah, as_, al = hsl(r, g, b); as_ = max(as_, 0.25)

# secondary bloom hue: another vivid color >25deg off accent, else rotate
bh, bs = (ah + 0.06) % 1.0, as_
for _, h, s, l, _ in sorted(cands, reverse=True)[1:]:
    if abs((h - ah + 0.5) % 1.0 - 0.5) > 0.07:
        bh, bs = h, s; break

sat = min(as_, 0.85)
vars = {
    "--c-hi":   rgb(ah, sat*0.72, 0.185),
    "--c-mid":  rgb(ah, sat*0.62, 0.105),
    "--c-lo":   rgb(ah, sat*0.52, 0.052),
    "--c-edge": rgb(ah, sat*0.42, 0.022),
    "--bloom":  rgb(ah, min(sat*1.05, 0.9), 0.56),
    "--bloom2": rgb(bh, min(bs, 0.85), 0.42),
    "--accent": rgb(ah, min(sat*1.05, 0.9), 0.63),
    "--shadow": rgb(ah, sat*0.8, 0.34),
}
block = ";".join(f"{k}:{v}" for k, v in vars.items())
print(f'<style id="theme-adapt">:root{{{block}}}</style>')
