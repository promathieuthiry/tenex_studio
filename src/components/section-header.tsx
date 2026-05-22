import type { ReactNode } from 'react'
import { RevealText } from '@/components/ui/reveal-text'

const TITLE_SIZES = {
  md: 'text-4xl leading-[1.05] md:text-6xl',
  lg: 'text-4xl leading-[1.05] md:text-7xl',
  xl: 'text-5xl leading-[1] md:text-8xl',
} as const

const TONES = {
  light: { eyebrow: 'text-ink/60', title: 'text-ink', tail: 'text-ink/35' },
  dark: { eyebrow: 'text-paper/55', title: 'text-paper', tail: 'text-paper/35' },
} as const

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  titleTail?: string
  headingId: string
  size?: keyof typeof TITLE_SIZES
  constrained?: boolean
  className?: string
  animate?: boolean
  tone?: keyof typeof TONES
}

export function SectionHeader({
  eyebrow,
  title,
  titleTail,
  headingId,
  size = 'lg',
  constrained = false,
  className,
  animate = false,
  tone = 'light',
}: SectionHeaderProps) {
  const tones = TONES[tone]
  const eyebrowClass = `font-mono text-xs uppercase tracking-[0.12em] ${tones.eyebrow}`
  const titleClass = `mt-6 font-display ${TITLE_SIZES[size]} tracking-[-0.03em] ${tones.title}${
    constrained ? ' max-w-3xl' : ''
  }`

  const titleWords = typeof title === 'string' ? title.split(' ').length : 0

  return (
    <div className={className}>
      {animate ? (
        <RevealText
          as="p"
          inView
          text={eyebrow}
          duration={0.7}
          className={eyebrowClass}
        />
      ) : (
        <p className={eyebrowClass}>{eyebrow}</p>
      )}
      <h2 id={headingId} className={titleClass}>
        {animate && typeof title === 'string' ? (
          <RevealText inView text={title} delay={0.1} />
        ) : (
          title
        )}
        {titleTail ? (
          <>
            {' '}
            {animate ? (
              <RevealText
                inView
                text={titleTail}
                delay={0.1 + titleWords * 0.07}
                className={tones.tail}
              />
            ) : (
              <span className={tones.tail}>{titleTail}</span>
            )}
          </>
        ) : null}
      </h2>
    </div>
  )
}
