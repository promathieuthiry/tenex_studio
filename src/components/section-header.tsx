import type { ReactNode } from 'react'

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
}

export function SectionHeader({
  eyebrow,
  title,
  headingId,
  size = 'lg',
  constrained = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink/60">
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`mt-6 font-display ${TITLE_SIZES[size]} tracking-[-0.03em] text-ink${
          constrained ? ' max-w-3xl' : ''
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
