import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

const VARIANT_SURFACE = {
  "primary-light": "bg-ink text-paper hover:opacity-80",
  "primary-dark": "bg-paper text-ink hover:opacity-80",
  "secondary-light": "border border-ink/20 text-ink hover:border-ink",
  "secondary-dark": "border border-paper/30 text-paper hover:border-paper",
} as const;

const SIZES = {
  sm: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
  md: "px-4 py-2 text-sm md:px-6 md:py-3",
  lg: "px-6 py-3 text-sm md:px-8 md:py-4 md:text-base",
} as const;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans transition disabled:opacity-50 disabled:pointer-events-none";

function cx(...parts: (string | undefined | false | null)[]): string {
  return parts.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary";
type Surface = "light" | "dark";
type Size = keyof typeof SIZES;

type BaseProps = {
  variant: Variant;
  surface: Surface;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    type?: never;
    disabled?: never;
  };

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    type?: "button" | "submit";
    disabled?: boolean;
  };

export type ButtonProps = AsAnchor | AsButton;

export function Button(props: ButtonProps) {
  const {
    variant,
    surface,
    size = "md",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;
  const classes = cx(
    BASE,
    VARIANT_SURFACE[`${variant}-${surface}`],
    SIZES[size],
    className,
  );
  const arrow = withArrow ? (
    <span aria-hidden className="text-base leading-none">
      →
    </span>
  ) : null;

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AsAnchor & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
        {arrow}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as Omit<
    AsButton,
    keyof BaseProps
  >;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
      {arrow}
    </button>
  );
}
