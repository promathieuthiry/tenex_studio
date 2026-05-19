export function ArrowGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5.25 10.75L10.75 5.25" />
      <path d="M6.5 5.25h4.25v4.25" />
    </svg>
  )
}
