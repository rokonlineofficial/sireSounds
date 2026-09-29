import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Quote } from "lucide-react";
import type { ReactNode } from "react";

/* =====================================================================
 * ছবি: পরে ছবি যোগ করতে, ছবিগুলো public/images/ ফোল্ডারে রাখুন
 * আর নিচে পাথ লিখে দিন। যেমন: hero: "/images/wedding-hero.jpg"
 * ফাঁকা ("") থাকলে ছবির জায়গায় একটা সুন্দর placeholder দেখাবে,
 * তাই ছবি ছাড়াও পেজে কোনো এরর আসবে না।
 * ===================================================================== */
const IMAGES = {
  hero: "/src/assets/wedding-hero.webp",
  intro: "/src/assets/sireDJ.png",
  ceremony: "/src/assets/gallery-family.jpg",
  reception: "/src/assets/recievetion.webp",
};

const PHONE = "(704) 441-2561";
const PHONE_LINK = "tel:+17044412561";

const FAQS = [
  {
    q: "How far in advance should we book our wedding DJ?",
    a: "Most couples book 6 to 12 months ahead. Spring and fall Saturdays in Charlotte fill up first, so check your date as early as you can.",
  },
  {
    q: "Can we choose our own songs?",
    a: "Absolutely. You give us your must-play and do-not-play lists, plus your special songs for the processional, first dance and parent dances. We fill in the rest based on your crowd.",
  },
  {
    q: "Do you act as our MC too?",
    a: "Yes. We handle grand entrances, toasts, first dance, cake cutting, bouquet toss and send-off announcements, and we coordinate timing with your venue and photographer.",
  },
  {
    q: "Can you provide sound for our ceremony and cocktail hour?",
    a: "Yes. We provide wireless microphones for your officiant and vows, and a separate sound setup if your ceremony or cocktail hour is in a different space.",
  },
  {
    q: "Do you play clean versions of songs?",
    a: "Yes. We play clean edits by default so every guest, from kids to grandparents, can enjoy the party.",
  },
  {
    q: "Do you travel outside Charlotte?",
    a: "Yes. We serve Charlotte and the surrounding area. Send us your venue and we will confirm availability.",
  },
];

export const Route = createFileRoute("/wedding-dj")({
  head: () => ({
    meta: [
      { title: "Wedding DJ in Charlotte, NC | SireSounds Mobile DJ" },
      {
        name: "description",
        content:
          "Charlotte wedding DJ and MC with 30+ years of experience. Ceremony sound, cocktail hour, grand entrances, reception dance party and uplighting.",
      },
      { property: "og:title", content: "Wedding DJ in Charlotte, NC | SireSounds Mobile DJ" },
      {
        property: "og:description",
        content:
          "Ceremony to last dance: music, MC and lighting for Charlotte weddings by SireSounds Mobile DJ.",
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
  component: WeddingDjPage,
});

const WHY = [
  "30+ years of DJ and MC experience",
  "Music for every generation on one dance floor",
  "Clean edits and a professional, polished presence",
  "Wireless mics for vows, toasts and speeches",
  "On time, organized and fast to respond",
];

const TIMELINE = [
  {
    time: "Ceremony",
    title: "Walk Down the Aisle",
    text: "Prelude music as guests arrive, your processional cued perfectly, clear wireless mics for your officiant and vows, and a joyful recessional.",
  },
  {
    time: "Cocktail Hour",
    title: "Set the Mood",
    text: "Relaxed, upbeat background music while you take photos, with a separate sound setup if cocktail hour is in another room or outdoors.",
  },
  {
    time: "Grand Entrance",
    title: "Make Your Big Moment",
    text: "We introduce your wedding party and announce you as a married couple with the song and energy you choose.",
  },
  {
    time: "Dinner & Toasts",
    title: "Every Word Heard",
    text: "Dinner music at the right volume for conversation, and clear microphones for every toast and speech.",
  },
  {
    time: "Special Dances",
    title: "Moments to Remember",
    text: "First dance, parent dances, anniversary dance, cake cutting and bouquet toss, all timed with your photographer.",
  },
  {
    time: "Dance Party",
    title: "Pack the Dance Floor",
    text: "We read the room and mix Pop, R&B, Hip-Hop, Motown, Line Dances and more to keep every age group dancing.",
  },
  {
    time: "Send-Off",
    title: "The Last Dance",
    text: "A final song that ends the night on a high, plus send-off announcements to gather guests for your exit.",
  },
];

const INCLUDED = [
  {
    title: "Ceremony Sound",
    text: "Wireless mics for your officiant and vows, plus processional and recessional music cued to the second.",
  },
  {
    title: "Cocktail Hour Music",
    text: "A separate sound setup when your cocktail hour is in a different room or outdoors.",
  },
  {
    title: "Professional MC",
    text: "Clear, warm announcements for grand entrances, toasts, first dance, cake cutting and send-off.",
  },
  {
    title: "Reception Dance Party",
    text: "Music across generations so grandparents and college friends are on the floor together.",
  },
  {
    title: "Uplighting & Dance Lighting",
    text: "Color-matched uplighting to transform your venue, plus dance lighting when the party starts.",
  },
  {
    title: "Planning Support",
    text: "A planning session to build your timeline, special songs, must-play and do-not-play lists.",
  },
];

const PROCESS = [
  {
    title: "Check Your Date",
    text: "Call or send a message with your wedding date and venue. We confirm availability quickly.",
  },
  {
    title: "Reserve Your Date",
    text: "Lock in your date and package so you can check the DJ off your wedding list.",
  },
  {
    title: "Plan Your Music",
    text: "We walk through your timeline, special songs, announcements and the vibe you want.",
  },
  {
    title: "Celebrate",
    text: "We arrive early, sound-check and run the night, so you can enjoy every moment.",
  },
];

// Google থেকে নেওয়া আসল রিভিউ
const REVIEWS = [
  {
    name: "Vernon Bynoe",
    event: "Wedding",
    quote:
      "Mark did a phenomenal job at my wedding! He is professional and offers a wide variety of music and offers suggestions on how to make your event most enjoyable!",
  },
  {
    name: "La'Tracia Jones",
    event: "Bridal Shower",
    quote:
      "Mark made my bridal shower ONE TO REMEMBER!!! He played the best songs for the 80's/90's theme!! From the first time I booked Mark until now I've always been pleased with the professionalism and music selection!",
  },
  {
    name: "Victoria Jones",
    event: "Bridal Shower",
    quote:
      "Mark did an amazing job for my sister's 80's/90's bridal shower! Every song was a hit and the attendees loved it!",
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

function WeddingDjPage() {
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
          <Eyebrow>Services · Wedding DJ · Charlotte, NC</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-card-foreground md:text-6xl">
            Your Wedding, <span className="text-primary">Perfectly Soundtracked</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From the first note of the processional to the last song of the night, SireSounds
            handles the music, MC work and lighting so you can be present for every moment of your
            Charlotte wedding.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check My Date
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
            <Photo src={IMAGES.intro} alt="Couple dancing at their Charlotte wedding reception" />
          </div>
          <div>
            <Eyebrow>Why Couples Choose SireSounds</Eyebrow>
            <Heading>More Than a Playlist</Heading>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Your wedding happens once. You need a DJ who knows how to keep a timeline on track,
              speak clearly into a microphone and read a room full of family and friends of every
              age. With more than 30 years behind the decks, SireSounds brings calm, professional
              experience to your big day.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We work with you, your planner, venue and photographer so every moment happens right
              on cue, and the dance floor stays full until the very last song.
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

      {/* ================= 2. WEDDING DAY TIMELINE ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>Your Wedding Day</Eyebrow>
              <Heading>From “I Do” to the Last Dance</Heading>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We cover every part of your day with the right music, the right volume and the
                right announcement at the right time.
              </p>
              <div className="mt-8 hidden aspect-[4/3] overflow-hidden rounded-lg border border-border lg:block">
                <Photo src={IMAGES.ceremony} alt="Wedding ceremony with wireless microphone setup" />
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

      {/* ================= 3. WHAT'S INCLUDED ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <Eyebrow>Wedding Package</Eyebrow>
          <Heading>What’s Included</Heading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item, i) => (
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
          <div className="mt-12 aspect-[21/9] overflow-hidden rounded-lg border border-border">
            <Photo src={IMAGES.reception} alt="Wedding reception with uplighting and a full dance floor" />
          </div>
        </div>
      </section>

      {/* ================= 4. PLANNING PROCESS ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
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
      </section>

      {/* ================= 5. REVIEWS ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Real Reviews From Google</Eyebrow>
              <Heading>Love Notes From Our Clients</Heading>
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
                    {r.event} · Google Review
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
          <Heading>Wedding DJ FAQs</Heading>
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
            <h2 className="font-display text-3xl font-semibold uppercase">Is Your Date Available?</h2>
            <p className="mt-2 max-w-xl opacity-90">
              Tell us your wedding date and venue and we will get back to you with availability
              and pricing.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-background/90"
            >
              Check My Date
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