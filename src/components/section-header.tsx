import type { ReactNode } from 'react'
import { RevealText, type RevealVariant } from '@/components/ui/reveal-text'

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
  tone?: keyof typeof TONES
  animation?: RevealVariant
}

export function SectionHeader({
  eyebrow,
  title,
  titleTail,
  headingId,
  size = 'lg',
  constrained = false,
  className,
  tone = 'light',
  animation = 'mask',
}: SectionHeaderProps) {
  const tones = TONES[tone]
  const eyebrowClass = `font-mono text-xs uppercase tracking-[0.12em] ${tones.eyebrow}`
  const titleClass = `mt-6 font-display ${TITLE_SIZES[size]} tracking-[-0.03em] ${tones.title}${
    constrained ? ' max-w-3xl' : ''
  }`

  const titleWords = typeof title === 'string' ? title.split(' ').length : 0

  return (
    <div className={className}>
      <RevealText
        as="p"
        inView
        variant={animation}
        text={eyebrow}
        duration={0.7}
        className={eyebrowClass}
      />
      <h2 id={headingId} className={titleClass}>
        {typeof title === 'string' ? (
          <RevealText inView variant={animation} text={title} delay={0.1} />
        ) : (
          title
        )}
        {titleTail ? (
          <>
            {' '}
            <RevealText
              inView
              variant={animation}
              text={titleTail}
              delay={0.1 + titleWords * 0.07}
              className={tones.tail}
            />
          </>
        ) : null}
      </h2>
    </div>
  )
}
