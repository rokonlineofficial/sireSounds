import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cake,
  Check,
  GraduationCap,
  Heart,
  Home,
  Music,
  PartyPopper,
  Quote,
  Sparkles,
  Users,
  X,
  MessageCircle,
} from "lucide-react";
import type { ReactNode } from "react";

// ছবিগুলো src/assets এ আছে, তাই import করে ব্যবহার করা হয়েছে
import heroImg from "@/assets/private-parties.jpg";
import introImg from "@/assets/private-party.jpg";
import familyImg from "@/assets/gallery-family.jpg";
import danceImg from "@/assets/gallery-quince.jpg";

const PHONE = "(704) 441-2561";
const PHONE_LINK = "tel:+17044412561";

const FAQS = [
  {
    q: "Can you set up in my backyard or home?",
    a: "Yes. We only need a nearby power outlet and a flat, covered spot in case of weather. Our setups fit living rooms, patios, garages and yards.",
  },
  {
    q: "Is there a minimum number of guests?",
    a: "No. We play small family get-togethers and big celebrations. Tell us your guest count and we will size the setup to fit.",
  },
  {
    q: "Can my guests request songs?",
    a: "Yes. Guests can walk up and request songs all night. We fit them into the mix while keeping the energy right.",
  },
  {
    q: "Do you play clean music for kids and teen parties?",
    a: "Yes. We play clean versions so every guest, from kids to grandparents, can enjoy the party.",
  },
  {
    q: "Can you do a themed party, like an 80's or 90's night?",
    a: "Yes. Tell us your theme and we will build the music around it, from 80's and 90's throwbacks to Motown, R&B or Latin nights.",
  },
  {
    q: "Do you bring lights?",
    a: "Yes. Party lighting turns any living room, hall or backyard into a dance floor.",
  },
];

export const Route = createFileRoute("/private-parties")({
  head: () => ({
    meta: [
      { title: "Private Party DJ in Charlotte, NC | Birthdays, Sweet 16s & More | SireSounds" },
      {
        name: "description",
        content:
          "Charlotte party DJ for birthdays, Sweet 16s, bridal showers, anniversaries, graduations, family reunions and backyard parties. Music for every age, guest requests welcome.",
      },
      { property: "og:title", content: "Private Party DJ in Charlotte, NC | SireSounds Mobile DJ" },
      {
        property: "og:description",
        content:
          "Birthdays, Sweet 16s, reunions and backyard parties. Music, lights and a packed dance floor by SireSounds Mobile DJ.",
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
  component: PrivatePartiesPage,
});

/* ---------- 1. পার্টির ধরন (আইকন সহ) ---------- */
const PARTIES = [
  {
    icon: Cake,
    title: "Birthday Parties",
    text: "From a 5th birthday to a 50th, with the songs the guest of honor loves most.",
  },
  {
    icon: Sparkles,
    title: "Sweet 16s & Teen Parties",
    text: "Today's hits, clean versions and the high energy teens actually want.",
  },
  {
    icon: Heart,
    title: "Bridal Showers",
    text: "Themed playlists, like 80's and 90's throwbacks, the bride-to-be will remember.",
  },
  {
    icon: PartyPopper,
    title: "Anniversaries",
    text: "The songs from your years together, plus a special dance just for the couple.",
  },
  {
    icon: GraduationCap,
    title: "Graduation Parties",
    text: "Celebrate the grad with music for their friends and their family.",
  },
  {
    icon: Users,
    title: "Family Reunions",
    text: "Line dances, old-school classics and new favorites for every generation.",
  },
  {
    icon: Home,
    title: "Backyard & House Parties",
    text: "Compact, great-sounding setups that fit your yard, patio or living room.",
  },
  {
    icon: Music,
    title: "Holiday & Theme Parties",
    text: "New Year's, Fourth of July, 80's night, Motown night and more.",
  },
];

/* ---------- 2. গানের ধরন ---------- */
const GENRES = [
  "Pop",
  "R&B",
  "Hip-Hop",
  "Old School",
  "Motown",
  "Reggae",
  "Salsa",
  "Line Dances",
  "80's & 90's",
  "Today's Hits",
  "Slow Jams",
  "Party Classics",
];

/* ---------- 3. প্লেলিস্ট ---------- */
const PLAYLIST = [
  {
    icon: Check,
    title: "Must-Play List",
    text: "Send us the songs you cannot party without, and we make sure they hit at the right moment.",
  },
  {
    icon: X,
    title: "Do-Not-Play List",
    text: "Any song or style you do not want to hear, we leave it out. No surprises.",
  },
  {
    icon: MessageCircle,
    title: "Guest Requests",
    text: "Your guests can request songs all night. We fit them in and keep the dance floor moving.",
  },
];

/* ---------- 4. কোথায় পার্টি ---------- */
const VENUES = [
  {
    title: "Home & Backyard",
    text: "Our most popular setup. Compact speakers that fill a yard or living room without taking over your space.",
    needs: ["One standard power outlet nearby", "A flat, covered spot for the DJ table"],
  },
  {
    title: "Clubhouse & Community Hall",
    text: "Perfect for bigger birthdays and reunions. We bring more sound and lights to fill the room.",
    needs: ["Access time for setup before guests arrive", "Venue power and any venue rules"],
  },
  {
    title: "Restaurant & Private Room",
    text: "A smaller, clean setup that works with the restaurant's space and schedule.",
    needs: ["Load-in time from the venue", "Your preferred volume level"],
  },
];

/* ---------- 5. বুকিং এর আগে যা পাঠাবেন ---------- */
const CHECKLIST = [
  "Party date and start / end time",
  "Address or venue name",
  "Type of party and the guest of honor",
  "About how many guests are coming",
  "Age range of your guests",
  "Any theme, favorite artists or must-play songs",
];

// Google থেকে নেওয়া আসল রিভিউ
const FEATURED_REVIEW = {
  name: "Margaret Nelson",
  event: "Private Party",
  quote:
    "SireSounds Mobile was fantastic! My party had great music, lights and plenty of dancing! The DJ was very professional, pleasant, friendly and helpful. He was responsive to all my guest requests and the rate was very fair! I referred him to several of my friends with only great appreciation!",
};

const REVIEWS = [
  {
    name: "Trinity Nelson",
    event: "Sweet 16 Party",
    quote:
      "Greatest DJ, my Sweet 16 party was the best. Everyone had a great time! Would recommend him to anyone having a teen party.",
  },
  {
    name: "Christine Borden",
    event: "Party",
    quote:
      "The music was on point. Such a wide variety, he played Pop, R&B, Reggae, to Salsa. He even slowed down the pace so the seasoned citizens could hit the floor.",
  },
  {
    name: "Tracy Jones",
    event: "Family Events",
    quote:
      "I have used SireSounds for 3 events and I am always happy. My family loves to dance and Mark keeps us on the dance floor.",
  },
];

/* ---------- ছোট কম্পোনেন্ট ---------- */
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

function PrivatePartiesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />

        <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
          <Eyebrow>Services · Private Parties · Charlotte, NC</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-card-foreground md:text-6xl">
            You Bring the Guests. <span className="text-primary">We Bring the Party.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Birthdays, Sweet 16s, bridal showers, reunions or a backyard get-together. SireSounds
            brings the music, lights and energy, so you can put down your phone playlist and
            actually enjoy your own party.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {["Birthdays", "Sweet 16s", "Bridal Showers", "Reunions", "Backyard Parties"].map(
              (tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border-strong bg-background/60 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-foreground backdrop-blur"
                >
                  {tag}
                </li>
              ),
            )}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book My Party
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

      {/* ================= 1. PICK YOUR PARTY ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Every Reason to Celebrate</Eyebrow>
            <Heading>What Are We Celebrating?</Heading>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Every party has its own crowd and its own vibe. Tell us what you are celebrating and
              we will shape the music around it.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTIES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 2. MUSIC FOR EVERY GENERATION ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Eyebrow>Music for Every Generation</Eyebrow>
            <Heading>Kids, Teens, Parents and Grandparents on One Dance Floor</Heading>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Private parties bring together every age. With more than 30 years of experience, we
              know when to bring the energy up for the young crowd and when to slow it down so the
              seasoned citizens can hit the floor too.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {GENRES.map((g) => (
                <li
                  key={g}
                  className="rounded-md border border-border bg-background px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden rounded-lg border border-border lg:order-2">
            <img
              src={familyImg}
              alt="Family of all ages dancing together at a Charlotte party"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= 3. YOUR PLAYLIST ================= */}
      <section>
        <div className="shell grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="aspect-[4/5] overflow-hidden rounded-lg border border-border">
            <img
              src={introImg}
              alt="Guests celebrating at a private party with SireSounds DJ"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>Your Party, Your Playlist</Eyebrow>
            <Heading>You Pick the Songs. We Read the Room.</Heading>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              It is your party, so you decide what gets played. We take your favorites, skip what
              you do not like and mix it all together so the energy never drops.
            </p>
            <div className="mt-8 space-y-4">
              {PLAYLIST.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-lg border border-border bg-background p-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-card-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. BACKYARD OR BALLROOM ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Backyard to Banquet Hall</Eyebrow>
            <Heading>We Fit Your Space</Heading>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Wherever you are hosting, we size the sound and lights to fit the room and the
              crowd.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {VENUES.map((v) => (
              <div key={v.title} className="flex flex-col rounded-lg border border-border bg-background p-7">
                <h3 className="font-display text-2xl font-semibold uppercase text-card-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-primary">
                    What We Need
                  </p>
                  <ul className="mt-3 space-y-2">
                    {v.needs.map((n) => (
                      <li key={n} className="flex gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <Heading>The Party People Have Spoken</Heading>
            </div>
            <Link
              to="/testimonials"
              className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary hover:underline"
            >
              Read All Reviews →
            </Link>
          </div>

          {/* Featured review */}
          <figure className="mt-12 rounded-lg border border-primary/40 bg-primary/5 p-8 md:p-12">
            <Quote className="h-10 w-10 text-primary" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-card-foreground md:text-3xl">
              "{FEATURED_REVIEW.quote}"
            </blockquote>
            <figcaption className="mt-6">
              <span className="font-semibold text-card-foreground">{FEATURED_REVIEW.name}</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {" "}
                · {FEATURED_REVIEW.event} · Google Review
              </span>
            </figcaption>
          </figure>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="flex flex-col rounded-lg border border-border bg-background p-7"
              >
                <blockquote className="flex-1 leading-relaxed text-foreground">"{r.quote}"</blockquote>
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

      {/* ================= 6. PARTY CHECKLIST + WIDE PHOTO ================= */}
      <section className="relative isolate overflow-hidden border-y border-border">
        <img
          src={danceImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-background/85" />
        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Ready to Book?</Eyebrow>
            <Heading>Your Quick Party Checklist</Heading>
            <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
              Send us these details and we will get back to you with availability and a fair,
              clear price.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-background/90 p-4 backdrop-blur"
              >
                <span className="font-display text-xl font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-muted/30">
        <div className="shell max-w-4xl py-16 md:py-24">
          <Eyebrow>Questions</Eyebrow>
          <Heading>Party DJ FAQs</Heading>
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
            <h2 className="font-display text-3xl font-semibold uppercase md:text-4xl">
              Let's Get This Party Started
            </h2>
            <p className="mt-2 max-w-xl opacity-90">
              Tell us your date and what you are celebrating. We will take care of the music.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-background/90"
            >
              Book My Party
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