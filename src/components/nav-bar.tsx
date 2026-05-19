import { useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'

import type { Locale } from '@/lib/i18n'
import { NAV_LANDMARK, NAV_LINKS, TALK_PILL, WORDMARK } from '@/data/nav'
import { LocaleSwitcher } from './locale-switcher'

const REVEAL_THRESHOLD = 80
const DELTA = 6

export function NavBar({ locale }: { locale: Locale }) {
  const homeHref = locale === 'fr' ? '/' : '/en'
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (current) => {
    if (current < REVEAL_THRESHOLD) {
      setHidden(false)
      return
    }
    const previous = scrollY.getPrevious() ?? 0
    const delta = current - previous
    if (delta > DELTA) setHidden(true)
    else if (delta < -DELTA) setHidden(false)
  })

  return (
    <motion.header
      initial={false}
      animate={{ y: reduceMotion || !hidden ? 0 : -140 }}
      transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3 md:pt-4"
    >
      <div className="flex w-full max-w-screen-xl items-center justify-between gap-4 rounded-full border border-ink/5 bg-paper/90 px-4 py-2 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur md:px-6 md:py-3">
        <a
          href={homeHref}
          className="font-display text-base font-bold tracking-[-0.04em] text-ink transition hover:opacity-80 md:text-lg"
          aria-label={WORDMARK}
        >
          {WORDMARK}
        </a>

        <nav
          aria-label={NAV_LANDMARK[locale]}
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const href = link.href?.[locale]
            if (!href) {
              return (
                <span
                  key={link.id}
                  aria-disabled="true"
                  className="font-sans text-sm text-ink/40"
                >
                  {link.label[locale]}
                </span>
              )
            }
            return (
              <a
                key={link.id}
                href={href}
                className="font-sans text-sm text-ink transition hover:opacity-70"
              >
                {link.label[locale]}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher locale={locale} />
          <a
            href={TALK_PILL.href[locale]}
            className="hidden rounded-full bg-ink px-4 py-2 font-sans text-xs text-paper transition hover:opacity-80 md:inline-block"
          >
            {TALK_PILL.label[locale]}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
