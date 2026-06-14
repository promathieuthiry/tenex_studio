import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const VARIANT_SURFACE = {
  "primary-light": "bg-ink text-paper hover:opacity-80",
  "primary-dark": "bg-paper text-ink hover:opacity-80",
  "accent-light": "bg-accent text-paper hover:bg-accent/90",
  "accent-dark": "bg-accent text-paper hover:bg-accent/90",
  "secondary-light": "border border-ink/20 text-ink hover:border-ink",
  "secondary-dark": "border border-paper/30 text-paper hover:border-paper",
} as const;

const SIZES = {
  sm: "h-9 px-4 text-xs md:h-10 md:px-5 md:text-sm",
  md: "h-10 px-4 text-sm md:h-12 md:px-6",
  lg: "h-12 px-6 text-sm md:px-8 md:text-base",
} as const;

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans transition disabled:opacity-50 disabled:pointer-events-none";

function cx(...parts: (string | undefined | false | null)[]): string {
  return parts.filter(Boolean).join(" ");
}

type Variant = "primary" | "secondary" | "accent";
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
    <ArrowRightIcon
      aria-hidden
      className="h-4 w-4 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
    />
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
