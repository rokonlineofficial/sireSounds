import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

// ⚠️ আপনার GEAR লিস্ট যে ফাইলে আছে, সেখান থেকে এই ৩টা ইমপোর্টের সঠিক পাথ কপি করে বসান
import gearMixer from "@/assets/gear-mixer.jpg";
import evSpeakers from "@/assets/gear-speakers.jpg";
import paSystem from "@/assets/dj Set.jpeg";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Our DJ Equipment | SireSounds Mobile DJ Charlotte, NC" },
      {
        name: "description",
        content:
          "See the pro audio gear SireSounds Mobile DJ brings to Charlotte events: Yamaha MG10XU mixer, Electro-Voice ZLX loudspeakers and a complete PA speaker system.",
      },
    ],
  }),
  component: EquipmentPage,
});

const PHONE = "(704) 441-2561";
const PHONE_LINK = "tel:+17044412561";

const GEAR = [
  {
    tag: "Mixing Console",
    name: "Yamaha MG10XU",
    copy: "Yamaha MG10XU 10-Channel Analog Mixing Console with USB Audio Interface & Effects",
    details:
      "The mixer is the heart of every event we play. The Yamaha MG10XU gives us clean, precise control over every microphone and music source, so toasts are clear, music transitions are smooth, and the volume stays right for the room all night.",
    features: [
      "10 channels for music, microphones and extra sources",
      "Studio-grade Yamaha D-PRE mic preamps for clear, natural vocals",
      "Built-in SPX digital effects to add warmth to speeches and announcements",
      "One-knob compressors that keep vocal levels smooth and even",
      "Built-in USB audio interface for direct laptop playback and recording",
    ],
    img: gearMixer,
    alt: "Yamaha MG10XU 10-channel analog mixing console",
  },
  {
    tag: "Loudspeakers",
    name: "Electro-Voice ZLX",
    copy: "Electro-Voice ZLX Professional Loudspeaker",
    details:
      "Electro-Voice is trusted by touring pros and venues worldwide. The ZLX delivers full, punchy sound for the dance floor and crystal-clear vocals for ceremonies and speeches, without harshness even at high volume.",
    features: [
      "Professional-grade sound trusted by venues and touring engineers",
      "Clear, intelligible vocals for vows, toasts and announcements",
      "Powerful, punchy output that fills a dance floor",
      "Lightweight, pole-mountable design for clean, safe setups",
      "Sound tuned to the size and shape of your venue",
    ],
    img: evSpeakers,
    alt: "Electro-Voice ZLX loudspeaker on a stand under blue stage lighting",
  },
  {
    tag: "Complete Package",
    name: "PA Speaker System Package",
    copy: "PA speaker system with dual speakers, stands, and cables. Perfect for weddings, DJ events, corporate functions, and live performances.",
    details:
      "Everything needed for great sound arrives together. Our complete PA package includes dual speakers, sturdy stands and professional cabling, so setup is fast, tidy and reliable at any venue, indoors or outdoors.",
    features: [
      "Dual speakers for balanced, even coverage across the room",
      "Sturdy speaker stands that lift sound above the crowd",
      "All professional cables included, neatly run and secured",
      "Ideal for weddings, DJ events, corporate functions and live performances",
      "Works for ceremonies, cocktail hours and full receptions",
    ],
    img: paSystem,
    alt: "Complete PA speaker system with dual speakers, stands and cables",
  },
];

const RELIABILITY = [
  {
    title: "Backup Equipment",
    text: "We bring backup gear to every event so a technical issue never stops the music.",
  },
  {
    title: "Clean, Safe Setup",
    text: "Neat cables, secured stands and a DJ booth that looks good in your photos.",
  },
  {
    title: "Early Sound Check",
    text: "We arrive early to set up and test everything before your guests walk in.",
  },
];

function EquipmentPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={evSpeakers}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40" />

        <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
            About · Our Equipment
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-card-foreground md:text-6xl">
            Professional Gear. <span className="text-primary">Reliable Sound.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Great music needs great equipment. From our Yamaha mixing console to Electro-Voice
            loudspeakers, every piece we bring is chosen to make your Charlotte event sound clear,
            powerful and flawless.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Check a Date
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

      {/* ================= GEAR ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
            What We Bring
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-card-foreground md:text-5xl">
            The Gear Behind the Sound
          </h2>

          <div className="mt-14 space-y-20 md:space-y-28">
            {GEAR.map((item, i) => (
              <article
                key={item.name}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg border border-border">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div>
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
                    {String(i + 1).padStart(2, "0")} · {item.tag}
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-semibold uppercase text-card-foreground md:text-4xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">{item.copy}</p>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{item.details}</p>
                  <ul className="mt-6 space-y-3">
                    {item.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELIABILITY ================= */}
      <section className="border-y border-border bg-muted/30">
        <div className="shell py-16 md:py-24">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
            Peace of Mind
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-card-foreground md:text-5xl">
            Built for Reliability
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {RELIABILITY.map((item, i) => (
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

      {/* ================= CTA ================= */}
      <section className="bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Have a Question About Your Venue?
            </h2>
            <p className="mt-2 max-w-xl opacity-90">
              Tell us about your space and guest count, and we will recommend the right setup.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-background/90"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}