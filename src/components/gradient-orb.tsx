import type { CSSProperties, ReactNode } from "react";

type GradientOrbProps = {
  size?: string;
  className?: string;
  children?: ReactNode;
  src?: string;
};

const DEFAULT_SRC = "/brand/orb.mp4";

export function GradientOrb({
  size = "2.5rem",
  className = "",
  children,
  src = DEFAULT_SRC,
}: GradientOrbProps) {
  const root: CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <span
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full ${className}`}
      style={root}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        className="absolute inset-0 h-full w-full scale-215 object-cover"
      />
      <span className="relative z-10 font-display font-semibold leading-none text-paper drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
        {children}
      </span>
    </span>
  );
}
