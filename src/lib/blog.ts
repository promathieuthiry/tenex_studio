import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/lib/i18n';
import type { Bilingual } from '@/data/_types';

export type BlogEntry = CollectionEntry<'blog'>;

export const postLocale = (entry: BlogEntry): Locale =>
  entry.id.split('/')[0] as Locale;

export const postSlug = (entry: BlogEntry): string =>
  entry.id.split('/').slice(1).join('/');

export async function postsForLocale(locale: Locale): Promise<BlogEntry[]> {
  const posts = await getCollection('blog', (entry) => postLocale(entry) === locale);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function relatedPosts(
  current: BlogEntry,
  limit = 3,
): Promise<BlogEntry[]> {
  const same = await postsForLocale(postLocale(current));
  return same.filter((entry) => entry.id !== current.id).slice(0, limit);
}

export const BLOG_HEADER: Readonly<{ eyebrow: Bilingual; title: Bilingual }> = {
  eyebrow: { fr: 'Journal', en: 'Journal' },
  title: { fr: 'Derniers articles.', en: 'Latest articles.' },
};

export const BLOG_INDEX: Readonly<{ eyebrow: Bilingual; title: Bilingual }> = {
  eyebrow: { fr: 'Journal', en: 'Journal' },
  title: {
    fr: 'Réflexions sur le métier.',
    en: 'Thoughts on the craft.',
  },
};
