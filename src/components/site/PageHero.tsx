import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/80 to-background"
        aria-hidden="true"
      />
      <div className="shell">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl lg:text-[4rem]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          ) : null}
          <nav aria-label="Breadcrumb" className="mt-8">
            <ol className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-primary">{eyebrow}</li>
            </ol>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
