// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

import { SITE_ORIGIN } from './src/lib/site.ts';
import { SEO_LANDING_PAGES, seoLandingPath } from './src/data/seo-landing-pages.ts';

const sitemapAlternates = new Map(
  [
    ['/', '/en/'],
    ['/mathieu/', '/en/mathieu/'],
    ['/mentions-legales/', '/en/legal-notice/'],
    ['/outils/', '/en/tools/'],
    ...SEO_LANDING_PAGES.map((page) => [
      seoLandingPath(page, 'fr'),
      seoLandingPath(page, 'en'),
    ]),
  ].flatMap(([fr, en]) => {
    const links = [
      { lang: 'fr-FR', url: `${SITE_ORIGIN}${fr}` },
      { lang: 'en-US', url: `${SITE_ORIGIN}${en}` },
      { lang: 'x-default', url: `${SITE_ORIGIN}${fr}` },
    ];

    return [
      [`${SITE_ORIGIN}${fr}`, links],
      [`${SITE_ORIGIN}${en}`, links],
    ];
  }),
);

// https://astro.build/config
export default defineConfig({
  site: SITE_ORIGIN,
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
      serialize(item) {
        return {
          url: item.url,
          links: sitemapAlternates.get(item.url) ?? item.links,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
      ],
    },
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
  },
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Arimo',
      cssVariable: '--font-arimo',
      weights: [400, 700],
      subsets: ['latin', 'latin-ext'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600],
      subsets: ['latin', 'latin-ext'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      weights: [400, 500],
      subsets: ['latin'],
      styles: ['normal'],
    },
  ],
});
