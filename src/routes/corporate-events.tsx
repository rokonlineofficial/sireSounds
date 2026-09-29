import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Quote } from "lucide-react";
import type { ReactNode } from "react";

/* ================================================================================================================ */

import heroImg from "@/assets/corporate-dj-event.jpg";
import introImg from "@/assets/corporate-dj-events.png";
import programImg from "@/assets/corporate-dj.jpg";
import partyImg from "@/assets/dj-event.jpg";

const IMAGES = {
  hero: heroImg,
  intro: introImg,
  program: programImg,
  party: partyImg,
};

const PHONE = "(704) 441-2561";
const PHONE_LINK = "tel:+17044412561";

const FAQS = [
  {
    q: "Is the music clean and workplace-appropriate?",
    a: "Yes. We play clean edits at every corporate event and follow any content guidelines your company provides.",
  },
  {
    q: "Can you provide microphones for speeches and presentations?",
    a: "Yes. Wireless handheld and lapel microphones are available for executives, presenters, award hosts and guest speakers.",
  },
  {
    q: "Can you act as the MC for our program?",
    a: "Yes. We can introduce speakers, announce award winners, keep your run of show on time and make housekeeping announcements.",
  },
  {
    q: "Do you work with event planners and venues?",
    a: "Yes. We coordinate load-in times, power, setup location and timelines directly with your planner or venue contact.",
  },
  {
    q: "What do your DJs wear?",
    a: "We dress professionally to match the tone of your event, from business attire to formal black-tie galas.",
  },
  {
    q: "Do you provide invoices for company accounting?",
    a: "Yes. Contact us with your event details and we will send a clear quote and invoice for your records.",
  },
];

export const Route = createFileRoute("/corporate-events")({
  head: () => ({
    meta: [
      { title: "Corporate Event DJ in Charlotte, NC | SireSounds Mobile DJ" },
      {
        name: "description",
        content:
          "Professional DJ, sound and MC services for Charlotte company parties, holiday events, galas, awards nights, conferences and team celebrations.",
      },
      { property: "og:title", content: "Corporate Event DJ in Charlotte, NC | SireSounds Mobile DJ" },
      {
        property: "og:description",
        content:
          "Clean music, clear microphones and an on-time program for Charlotte corporate events by SireSounds Mobile DJ.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: CorporateEventsPage,
});

const WHY = [
  "30+ years of DJ, sound and MC experience",
  "Clean, workplace-appropriate music every time",
  "Clear wireless mics for speakers and presenters",
  "Early arrival and on-time program cues",
  "Professional attire and a tidy, branded-friendly setup",
];

const EVENT_TYPES = [
  {
    title: "Holiday Parties",
    text: "Festive, polished entertainment that gets the whole team celebrating together at the end of the year.",
  },
  {
    title: "Galas & Fundraisers",
    text: "Elegant background music, clear program announcements and a dance set for the after-party.",
  },
  {
    title: "Awards Nights",
    text: "Walk-up music for every winner and a reliable microphone setup for presenters.",
  },
  {
    title: "Conferences & Meetings",
    text: "Clean speech sound, wireless microphones and background music between sessions and breaks.",
  },
  {
    title: "Company Picnics",
    text: "Outdoor-ready sound and family-friendly music for summer team and family days.",
  },
  {
    title: "Product Launches & Grand Openings",
    text: "Sound and lighting that match your brand and put the spotlight where it belongs.",
  },
];

const TIMELINE = [
  {
    time: "Guest Arrival",
    title: "Make a Great First Impression",
    text: "Welcoming background music as guests check in, set at the right volume for conversation and networking.",
  },
  {
    time: "Networking",
    title: "Keep the Room Relaxed",
    text: "Smooth, upbeat music that fills the room without competing with conversation.",
  },
  {
    time: "Program & Speeches",
    title: "Every Word Heard",
    text: "Clear wireless microphones for executives and presenters, with music cues for each speaker.",
  },
  {
    time: "Awards & Recognition",
    title: "Celebrate Your People",
    text: "Walk-up music and energetic announcements that make every honoree feel special.",
  },
  {
    time: "Dinner",
    title: "Set the Atmosphere",
    text: "Dinner music that matches the tone of your event, from elegant to fun.",
  },
  {
    time: "After-Party",
    title: "Open the Dance Floor",
    text: "Clean, crowd-pleasing hits that get colleagues of every age dancing together.",
  },
];

const INCLUDED = [
  {
    title: "Professional Sound System",
    text: "Pro speakers and mixer sized to your venue, from meeting rooms to ballrooms.",
  },
  {
    title: "Wireless Microphones",
    text: "Handheld and lapel mics for speeches, presentations, panels and awards.",
  },
  {
    title: "MC & Announcements",
    text: "Speaker introductions, award announcements and housekeeping, delivered clearly and on time.",
  },
  {
    title: "Curated Clean Music",
    text: "Background, dinner and dance music selected for your audience and brand.",
  },
  {
    title: "Event Lighting",
    text: "Uplighting in your brand colors and dance lighting for the after-party.",
  },
  {
    title: "Planner & Venue Coordination",
    text: "We confirm load-in, power and run of show with your team before the day.",
  },
];

const PROCESS = [
  {
    title: "Share the Brief",
    text: "Tell us the event type, date, guest count, venue and run of show.",
  },
  {
    title: "Get Your Quote",
    text: "We send a clear quote based on your event needs and timeline.",
  },
  {
    title: "Plan the Details",
    text: "We match music to your audience, prepare announcements and coordinate with your venue.",
  },
  {
    title: "Seamless Delivery",
    text: "Early setup, professional attire, on-time cues and a clean breakdown after the event.",
  },
];

// Google থেকে নেওয়া আসল রিভিউ
const REVIEWS = [
  {
    name: "Brad Barnett",
    event: "Corporate Event",
    quote:
      "Very professional DJ who worked a corporate event that I attended. Showed up early to make sure that everything was already going when the guests arrived. Played a strong mix of music and kept the energy level high.",
  },
  {
    name: "T Babb",
    event: "",
    quote:
      "Great DJ, gets a feel for the crowd and is able to adapt accordingly, keeps clean versions, and is fair priced.",
  },
  {
    name: "Natasha Gilchrist",
    event: "",
    quote:
      "I definitely recommend SireSounds. Very professional and punctual, kept the hits coming and made my event a blast.",
  },
];

/* ---------- ছবি না থাকলে placeholder দেখায় ---------- */
function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid h-full w-full place-items-center bg-gradient-to-br from-primary/25 via-muted to-background ${className}`}
    >
      <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        Photo Coming Soon
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">{children}</p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight text-card-foreground md:text-5xl">
      {children}
    </h2>
  );
}

function CorporateEventsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-border">
        {IMAGES.hero ? (
          <img
            src={IMAGES.hero}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/20 via-background to-background" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40" />

        <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
          <Eyebrow>Services · Corporate Events · Charlotte, NC</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-card-foreground md:text-6xl">
            Professional Sound for <span className="text-primary">Professional Events</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Reliable DJ, MC and audio services for Charlotte businesses. From holiday parties to
            awards galas, we keep your program on schedule, your speakers clearly heard and your
            team celebrating.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-md border border-border-strong px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ================= 1. WHY US ================= */}
      <section>
        <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border">
            <Photo src={IMAGES.intro} alt="DJ performing at a Charlotte corporate event" />
          </div>
          <div>
            <Eyebrow>Why Companies Choose SireSounds</Eyebrow>
            <Heading>Your Event Reflects Your Brand</Heading>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              A company event is more than a party. It is a chance to thank your team, impress
              clients and celebrate your wins. You need a DJ who shows up early, dresses the part,
              keeps the music appropriate and makes sure every speaker is heard.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With more than 30 years of experience, SireSounds works quietly behind the scenes
              with your planner and venue so your event runs smoothly from the first guest to the
              last song.
            </p>
            <ul className="mt-7 space-y-3">
              {WHY.map((w) => (
                <li key={w} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 2. EVENTS WE COVER ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
          <Eyebrow>Corporate Events</Eyebrow>
          <Heading>Events We Cover</Heading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENT_TYPES.map((item, i) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary/60"
              >
                <span className="font-display text-3xl font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. EVENT TIMELINE ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Your Event, Start to Finish</Eyebrow>
              <Heading>From Welcome to After-Party</Heading>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We handle every part of your event with the right music, the right volume and the
                right announcement at the right moment.
              </p>
              <div className="mt-8 hidden aspect-[4/3] overflow-hidden rounded-lg border border-border lg:block">
                <Photo src={IMAGES.program} alt="Speaker presenting with a wireless microphone" />
              </div>
            </div>

            <ol className="relative border-l border-border pl-8">
              {TIMELINE.map((step) => (
                <li key={step.time} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.35rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary">
                    {step.time}
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ================= 4. WHAT'S INCLUDED + PROCESS ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
          <Eyebrow>Corporate Package</Eyebrow>
          <Heading>What’s Included</Heading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => (
              <div key={item.title} className="rounded-lg border border-border bg-background p-7">
                <Check className="h-6 w-6 text-primary" />
                <h3 className="mt-3 text-lg font-semibold text-card-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 aspect-[21/9] overflow-hidden rounded-lg border border-border">
            <Photo src={IMAGES.party} alt="Corporate after-party with dance lighting" />
          </div>

          <div className="mt-20">
            <Eyebrow>Simple & Stress-Free</Eyebrow>
            <Heading>How It Works</Heading>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((item, i) => (
                <div key={item.title} className="rounded-lg border border-border bg-background p-7">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. REVIEWS ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Real Reviews From Google</Eyebrow>
              <Heading>Trusted by Charlotte Hosts</Heading>
            </div>
            <Link
              to="/testimonials"
              className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary hover:underline"
            >
              Read All Reviews →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-lg border border-border bg-background p-7"
              >
                <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block font-semibold text-card-foreground">{r.name}</span>
                  <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {r.event ? `${r.event} · ` : ""}Google Review
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="border-t border-border bg-muted/30">
        <div className="shell max-w-4xl py-16 md:py-24">
          <Eyebrow>Questions</Eyebrow>
          <Heading>Corporate Event FAQs</Heading>
          <div className="mt-12 divide-y divide-border rounded-lg border border-border bg-background">
            {FAQS.map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-card-foreground">
                  {item.q}
                  <span className="text-2xl leading-none text-primary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Planning a Company Event?
            </h2>
            <p className="mt-2 max-w-xl opacity-90">
              Send us your date, venue and guest count and we will put together a quote for your
              event.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-background/90"
            >
              Get a Quote
            </Link>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] transition-colors hover:bg-primary-foreground/10"
            >
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}