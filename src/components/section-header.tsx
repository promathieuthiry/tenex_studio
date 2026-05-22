import type { ReactNode } from 'react'
import { RevealText } from '@/components/ui/reveal-text'

const TITLE_SIZES = {
  md: 'text-4xl leading-[1.05] md:text-6xl',
  lg: 'text-4xl leading-[1.05] md:text-7xl',
  xl: 'text-5xl leading-[1] md:text-8xl',
} as const

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  headingId: string
  size?: keyof typeof TITLE_SIZES
  constrained?: boolean
  className?: string
  animate?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  headingId,
  size = 'lg',
  constrained = false,
  className,
  animate = false,
}: SectionHeaderProps) {
  const eyebrowClass =
    'font-mono text-xs uppercase tracking-[0.12em] text-ink/60'
  const titleClass = `mt-6 font-display ${TITLE_SIZES[size]} tracking-[-0.03em] text-ink${
    constrained ? ' max-w-3xl' : ''
  }`

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
      </h2>
    </div>
  )
}
