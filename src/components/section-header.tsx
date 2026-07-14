import type { ReactNode } from 'react'
import { RevealText, type RevealVariant } from '@/components/ui/reveal-text'

const TITLE_SIZES = {
  md: 'text-4xl leading-[1.05] md:text-6xl',
  lg: 'text-4xl leading-[1.05] md:text-7xl',
  xl: 'text-5xl leading-[1] md:text-8xl',
} as const

const TONES = {
  light: { title: 'text-ink', tail: 'text-ink/35' },
  dark: { title: 'text-paper', tail: 'text-paper/35' },
} as const

type SectionHeaderProps = {
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
  const titleClass = [
    'font-display',
    TITLE_SIZES[size],
    'tracking-[-0.03em]',
    tones.title,
    constrained ? 'max-w-3xl' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const titleWords = typeof title === 'string' ? title.split(' ').length : 0

  return (
    <h2 id={headingId} className={titleClass}>
      {typeof title === 'string' ? (
        <RevealText inView variant={animation} text={title} />
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
            delay={titleWords * 0.07}
            className={tones.tail}
          />
        </>
      ) : null}
    </h2>
  )
}
