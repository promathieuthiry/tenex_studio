import type { Locale } from '@/lib/i18n'
import { Hero } from '@/components/hero'

const MARQUEE_IMAGES = [
  '/work/atelier-brun-cover.webp',
  '/work/maison-aubry-cover.webp',
  '/work/studio-meridien-cover.webp',
  '/work/verso-co-cover.webp',
  '/work/lumen-haus-cover.webp',
  '/work/cote-nord-cover.webp',
  '/work/brasserie-rade-cover.webp',
  '/work/atelier-fauve-cover.webp',
  '/work/nove-labs-cover.webp',
  '/work/rivage-co-cover.webp',
  '/work/maison-orso-cover.webp',
  '/work/signal-form-cover.webp',
  '/work/caldera-co-cover.webp',
  '/work/atelier-noor-cover.webp',
  '/work/maison-vela-cover.webp',
  '/work/studio-prim-cover.webp',
  '/work/forge-co-cover.webp',
  '/work/heline-haus-cover.webp',
  '/work/atelier-sora-cover.webp',
  '/work/vega-form-cover.webp',
]

function MarqueeColumn({
  direction,
  duration,
  offset,
}: {
  direction: 'up' | 'down'
  duration: number
  offset: number
}) {
  const rotated = [
    ...MARQUEE_IMAGES.slice(offset),
    ...MARQUEE_IMAGES.slice(0, offset),
  ]
  const items = [...rotated, ...rotated]
  return (
    <div className="pointer-events-none overflow-hidden">
      <ul
        className="flex flex-col gap-6"
        style={{
          animation: `marquee-y ${duration}s linear infinite`,
          animationDirection: direction === 'up' ? 'normal' : 'reverse',
        }}
      >
        {items.map((src, i) => (
          <li
            key={`${src}-${i}`}
            className="relative aspect-3/4 w-full overflow-hidden rounded-card bg-ink-soft"
          >
            <img
              src={src}
              srcSet={`${src.replace('.webp', '-480.webp')} 480w, ${src} 720w`}
              sizes="(min-width: 768px) 25vw, 50vw"
              width={720}
              height={960}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

// The shrink-on-scroll scrub lives in `global.css` (`.hero-track` / `.hero-pane`
// / `.hero-card`) as a compositor-thread scroll-driven animation. It runs there
// instead of a JS `useScroll` listener so it stays smooth on mobile, where the
// main thread can't track touch scroll. Unsupported browsers and reduced-motion
// users fall back to a static single screen.
export function MonoHero({ locale }: { locale: Locale }) {
  return (
    <div className="hero-track relative bg-ink">
      <div className="hero-pane flex items-center justify-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-10">
          <MarqueeColumn direction="up" duration={40} offset={0} />
          <MarqueeColumn direction="down" duration={50} offset={5} />
          <div className="hidden md:block">
            <MarqueeColumn direction="up" duration={46} offset={10} />
          </div>
          <div className="hidden md:block">
            <MarqueeColumn direction="down" duration={54} offset={15} />
          </div>
        </div>

        <div className="hero-card relative z-10 w-full origin-center bg-paper">
          <Hero locale={locale} />
        </div>
      </div>
    </div>
  )
}
