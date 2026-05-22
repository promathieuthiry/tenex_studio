import type { Bilingual } from '@/data/_types'

// What the studio 10×s — the second line of the "10x ___" headline. Words
// are 1-noun declaratives matching BRAND.md voice rules; "leverage" closes
// the loop because that word IS the brand promise (BRAND.md §6).
export const VALUE_WORDS: Bilingual<readonly string[]> = {
  en: [
    'revenue',
    'sales',
    'leads',
    'conversions',
    'bookings',
    'signups',
    'growth',
    'traffic',
    'reach',
    'visibility',
    'retention',
    'referrals',
    'engagement',
    'authority',
    'impact',
    'productivity',
    'velocity',
  ],
  fr: [
    'revenus',
    'ventes',
    'prospects',
    'conversions',
    'réservations',
    'inscriptions',
    'croissance',
    'trafic',
    'audience',
    'visibilité',
    'fidélisation',
    'recommandations',
    'engagement',
    'autorité',
    'impact',
    'productivité',
    'vélocité',
  ],
}
