import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { forwardRef } from "react";

export const NavigationMenu = NavigationMenuPrimitive.Root;
export const NavigationMenuList = NavigationMenuPrimitive.List;
export const NavigationMenuItem = NavigationMenuPrimitive.Item;
export const NavigationMenuLink = NavigationMenuPrimitive.Link;

const TRIGGER =
  "group inline-flex cursor-pointer items-center gap-1 font-sans font-semibold text-sm text-ink outline-none transition hover:opacity-70 focus-visible:opacity-70 data-[state=open]:opacity-70";

export const NavigationMenuTrigger = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={`${TRIGGER} ${className ?? ""}`}
    {...props}
  >
    {children}
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="mt-0.5 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 motion-reduce:transition-none"
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const CONTENT =
  "absolute right-0 top-full z-30 mt-2 min-w-64 origin-top-right overflow-hidden rounded-lg border border-ink/8 bg-paper p-2 shadow-[0_30px_80px_-20px_rgba(15,15,18,0.35)] transition duration-200 ease-out data-[state=closed]:-translate-y-1 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100 motion-reduce:transition-none motion-reduce:data-[state=closed]:translate-y-0";

export const NavigationMenuContent = forwardRef<
  ComponentRef<typeof NavigationMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={`${CONTENT} ${className ?? ""}`}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";
