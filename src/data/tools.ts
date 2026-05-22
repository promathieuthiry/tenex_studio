import type { Bilingual } from '@/data/_types'

export type Tool = Readonly<{ name: string; file: string }>

export const TOOLS_EYEBROW: Bilingual = { fr: 'Notre stack', en: 'Our stack' }

// Logos in /public/logos/*.svg. Editorial order: build → deploy → commerce →
// ops → marketing → AI → design.
export const TOOLS: readonly Tool[] = [
  { name: 'Next.js', file: 'nextjs' },
  { name: 'React', file: 'react' },
  { name: 'TypeScript', file: 'typescript' },
  { name: 'Astro', file: 'astro' },
  { name: 'Tailwind CSS', file: 'tailwind' },
  { name: 'GSAP', file: 'gsap' },
  { name: 'Framer Motion', file: 'framer-motion' },
  { name: 'Sanity', file: 'sanity' },
  { name: 'Vercel', file: 'vercel' },
  { name: 'Supabase', file: 'supabase' },
  { name: 'Stripe', file: 'stripe' },
  { name: 'Shopify', file: 'shopify' },
  { name: 'Notion', file: 'notion' },
  { name: 'Slack', file: 'slack' },
  { name: 'Calendly', file: 'calendly' },
  { name: 'Cal.com', file: 'cal-com' },
  { name: 'Mailchimp', file: 'mailchimp' },
  { name: 'Brevo', file: 'brevo' },
  { name: 'Resend', file: 'resend' },
  { name: 'HubSpot', file: 'hubspot' },
  { name: 'Google Analytics', file: 'google-analytics' },
  { name: 'Claude', file: 'claude' },
  { name: 'Figma', file: 'figma' },
] as const
