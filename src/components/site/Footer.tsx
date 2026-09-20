import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";

import { NAV } from "./Header";
import logoMark from "@/assets/sire-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logoMark}
                alt="SireSounds Mobile DJ"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-2xl font-semibold uppercase text-card-foreground">
                SireSounds <span className="text-primary">Mobile DJ</span>
              </span>
            </Link>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Charlotte, North Carolina
            </p>
            <a
              href="tel:+17044412561"
              className="mt-2 inline-flex items-center gap-2 font-display text-xl text-card-foreground transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> (704) 441-2561
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/SireSounds"
                aria-label="SireSounds on Facebook"
                className="grid h-10 w-10 place-items-center rounded-md border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                aria-label="SireSounds on Instagram"
                className="grid h-10 w-10 place-items-center rounded-md border border-border-strong text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-bold tracking-[0.2em] text-primary">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-primary">Office Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" /> Mon–Fri: 9:00 AM – 11:00 PM
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" /> Sat–Sun: 9:00 AM – 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 SireSounds Mobile DJ</span>
          <span>Charlotte, North Carolina</span>
          <span>Developed by <a href="https://rokonline.com/"></a>Rokonlne</span>
        </div>
      </div>
    </footer>
  );
}
