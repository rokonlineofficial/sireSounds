import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CtaLink } from "./ui";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/sire-logo.png";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Events", to: "/events" },
  { label: "Rates", to: "/rates" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoMark}
            alt="SireSounds Mobile DJ"
            className="h-10 w-10 shrink-0 object-contain"
          />
          <span className="truncate font-display text-xl font-semibold uppercase tracking-wide text-card-foreground">
            Sire<span className="text-primary">Sounds</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary" }}
                    className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <CtaLink to="/contact" className="hidden sm:inline-flex px-5 py-3">
            Check a Date
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border-strong text-card-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="animate-fade-up border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell py-6">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary" }}
                    className="block border-b border-border py-4 font-display text-2xl font-semibold uppercase text-card-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <CtaLink to="/contact" className="w-full" onClick={() => setOpen(false)}>
                Check a Date
              </CtaLink>
              <a
                href="tel:+17044412561"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border-strong py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground"
              >
                <Phone className="h-4 w-4" /> (704) 441-2561
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
