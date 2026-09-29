<<<<<<< HEAD
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
=======
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
import { useEffect, useState } from "react";

import { CtaLink } from "./ui";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/sire-logo.png";

<<<<<<< HEAD
type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Equipment", to: "/equipment" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Wedding DJ", to: "/wedding-dj" },
      { label: "Corporate Events", to: "/corporate-events" },
      { label: "Private Parties", to: "/private-parties" },
    ],
  },
=======
export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
  { label: "Events", to: "/events" },
  { label: "Rates", to: "/rates" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
<<<<<<< HEAD
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // সাব-পেজে থাকলে প্যারেন্ট মেনুও হাইলাইট হবে
  const isChildActive = (item: NavItem) =>
    item.children?.some((sub) => pathname === sub.to) ?? false;

  const closeMenu = () => {
    setOpen(false);
    setSubOpen(null);
  };
=======
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029

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
<<<<<<< HEAD
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={closeMenu}>
=======
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
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
<<<<<<< HEAD
          {/* ============ DESKTOP MENU ============ */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.to} className="group relative">
                    <Link
                      to={item.to}
                      activeProps={{ className: "text-primary" }}
                      className={cn(
                        "inline-flex items-center gap-1 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary",
                        isChildActive(item) && "text-primary",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <ul className="min-w-56 rounded-md border border-border bg-background/95 py-2 shadow-2xl backdrop-blur-xl">
                        {item.children.map((sub) => (
                          <li key={sub.to}>
                            <Link
                              to={sub.to}
                              activeProps={{ className: "text-primary" }}
                              className="block whitespace-nowrap px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
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
                ),
              )}
=======
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
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
            </ul>
          </nav>
          <CtaLink to="/contact" className="hidden sm:inline-flex px-5 py-3">
            Check a Date
          </CtaLink>
          <button
            type="button"
<<<<<<< HEAD
            onClick={() => (open ? closeMenu() : setOpen(true))}
=======
            onClick={() => setOpen((v) => !v)}
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border-strong text-card-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* ============ MOBILE MENU ============ */}
      {open ? (
        <div className="animate-fade-up max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="shell py-6">
            <ul className="space-y-1">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.to} className="border-b border-border">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.to}
                        onClick={closeMenu}
                        activeProps={{ className: "text-primary" }}
                        className={cn(
                          "block flex-1 py-4 font-display text-2xl font-semibold uppercase text-card-foreground",
                          isChildActive(item) && "text-primary",
                        )}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSubOpen(subOpen === item.to ? null : item.to)}
                        aria-expanded={subOpen === item.to}
                        aria-label={`Toggle ${item.label} submenu`}
                        className="grid h-10 w-10 place-items-center rounded-md text-card-foreground transition-colors hover:text-primary"
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300",
                            subOpen === item.to && "rotate-180",
                          )}
                        />
                      </button>
                    </div>

                    {subOpen === item.to ? (
                      <ul className="pb-4 pl-4">
                        {item.children.map((sub) => (
                          <li key={sub.to}>
                            <Link
                              to={sub.to}
                              onClick={closeMenu}
                              activeProps={{ className: "text-primary" }}
                              className="block py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={closeMenu}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "text-primary" }}
                      className="block border-b border-border py-4 font-display text-2xl font-semibold uppercase text-card-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-6 grid gap-3">
              <CtaLink to="/contact" className="w-full" onClick={closeMenu}>
=======
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
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 8ebfb26db11026ca86d131d4936007fb0f391029
