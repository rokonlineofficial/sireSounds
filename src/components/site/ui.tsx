import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-sans text-xs font-extrabold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const variants = {
  accent:
    "bg-primary text-primary-foreground px-6 py-3.5 hover:brightness-110 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5",
  outline:
    "border border-border-strong text-foreground px-6 py-3.5 hover:border-primary hover:text-primary hover:-translate-y-0.5",
  ghost: "text-muted-foreground px-3 py-2 hover:text-primary",
} as const;

export type CtaVariant = keyof typeof variants;

export function CtaLink({
  to,
  variant = "accent",
  className,
  children,
  ...rest
}: { to: string; variant?: CtaVariant; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "children"
>) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  variant = "outline",
  className,
  children,
  ...rest
}: { variant?: CtaVariant; children: ReactNode } & ComponentProps<"a">) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      ) : null}
    </div>
  );
}

export function StatBlock({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0", className)}>
      <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">{value}</p>
      <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="cursor-default whitespace-nowrap rounded-full border border-border-strong bg-surface-2/60 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-foreground transition-colors duration-300 hover:border-primary hover:text-primary">
      {children}
    </span>
  );
}

export function Equalizer({ bars = 7, className }: { bars?: number; className?: string }) {
  return (
    <div className={cn("flex h-10 items-end gap-1", className)} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="animate-eq w-1.5 rounded-sm bg-primary/80"
          style={{ height: "100%", animationDelay: `${(i % 5) * 0.16}s` }}
        />
      ))}
    </div>
  );
}
