import type { Bilingual, IsoYear2, Slug, Url } from '@/data/_types'
import { slug, url, yearmark } from '@/data/_types'

export type WorkProject = Readonly<{
  slug: Slug
  name: Bilingual
  mark: string
  yearmark: IsoYear2
  cover: Url
  tags: ReadonlyArray<Bilingual>
  description: Bilingual
  headline: Bilingual
  category: Bilingual
  liveUrl?: Url
}>

export const WORK: ReadonlyArray<WorkProject> = [
  {
    slug: slug('studio-lumen'),
    name: { fr: 'Studio Lumen', en: 'Studio Lumen' },
    mark: 'SL',
    yearmark: yearmark('26'),
    cover: url('/work/studio-lumen-cover.webp'),
    tags: [
      { fr: 'Design Website', en: 'Website Design' },
      { fr: 'Développement', en: 'Development' },
    ],
    description: {
      fr: 'Studio vidéo mobile pour entreprises. Site portfolio qui convertit, prise de rendez-vous Calendly et CMS Sanity sur mesure pour rester maître du contenu.',
      en: 'Mobile video studio for businesses. A portfolio site that converts, Calendly booking, and a tailored Sanity CMS that keeps them in control of their content.',
    },
    headline: {
      fr: 'STUDIO VIDEO',
      en: 'STUDIO VIDEO',
    },
    category: { fr: 'Identité et site', en: 'Identity and site' },
    liveUrl: url('https://www.studiolumen.fr'),
  },
] as const
