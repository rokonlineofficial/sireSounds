import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/sections";
import { SectionHeading } from "@/components/site/ui";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import { EVENT_TYPES, PHONE_DISPLAY, PHONE_HREF } from "@/data/site";

const title = "Contact SireSounds Mobile DJ — Check Your Date | Charlotte NC";
const description =
  "Check your date with SireSounds Mobile DJ in Charlotte, NC. Call (704) 441-2561 or send event details for a fast quote.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-md border border-border-strong bg-surface-2/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Check your <span className="text-primary">date</span>
          </>
        }
        lead="Tell us the date, venue and vibe. You'll hear back with availability and a straight quote."
        image={galleryCorporate}
        imageAlt="Corporate event lit for a SireSounds Mobile DJ set in Charlotte"
      />

      <section className="section-y mt-10">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Request a Quote"
              title="Send your event details"
              lead="Fastest response is a phone call, but this form reaches us just as directly."
            />

            {sent ? (
              <div className="mt-8 rounded-lg border border-primary/40 bg-surface-2/60 p-6">
                <p className="font-display text-2xl uppercase text-card-foreground">
                  Request received
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks — we'll confirm availability shortly. For anything urgent, call{" "}
                  <a href={PHONE_HREF} className="text-primary">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                className="mt-8 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Name
                  <input name="name" required className={fieldClass} placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    required
                    className={fieldClass}
                    placeholder="(704) 000-0000"
                  />
                </label>
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:col-span-2">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </label>
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Event date
                  <input name="date" type="date" className={fieldClass} />
                </label>
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Event type
                  <select name="type" className={fieldClass} defaultValue={EVENT_TYPES[0]}>
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:col-span-2">
                  Details
                  <textarea
                    name="details"
                    rows={5}
                    className={fieldClass}
                    placeholder="Venue, guest count, hours needed, must-play songs…"
                  />
                </label>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[var(--shadow-glow)]"
                >
                  Send Request
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h2 className="font-display text-3xl uppercase text-card-foreground">
                Talk to <span className="text-primary">DJ Sire</span>
              </h2>
              <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={PHONE_HREF} className="font-display text-xl text-card-foreground hover:text-primary">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Charlotte, North Carolina — and surrounding areas
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    Mon–Fri: 9:00 AM – 11:00 PM
                    <br />
                    Sat–Sun: 9:00 AM – 5:00 PM
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  Prefer email? Use the form and we'll reply the same way.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
