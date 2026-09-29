import {
  ArrowRight,
  Heart,
  Lightbulb,
  Mic,
  PartyPopper,
  Phone,
  Play,
  Quote,
  SlidersHorizontal,
  Speaker,
  Star,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { Chip, CtaAnchor, CtaLink, Equalizer, SectionHeading, StatBlock } from "./ui";
import ctaBg from "@/assets/imageye___-_imgi_23_footer_bg.jpeg";
import djSire from "@/assets/djsire 2006.png";
import eventWedding from "@/assets/dj events.png";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";
import galleryQuince from "@/assets/gallery-quince.jpg";
import gearMixer from "@/assets/gearmix.jpeg";
import paSystem from "@/assets/dj Set.jpeg";
import evSpeakers from "@/assets/sound box.jpeg";
import heroDj from "@/assets/sireDJ.png";
import { EVENT_TYPES, GENRES, PHONE_DISPLAY, PHONE_HREF, RATES, SERVICES, TESTIMONIALS } from "@/data/site";
import { cn } from "@/lib/utils";

const SERVICE_ICONS = {
  heart: Heart,
  party: PartyPopper,
  sliders: SlidersHorizontal,
  lightbulb: Lightbulb,
  mic: Mic,
  speaker: Speaker,
} as const;

/* ------------------------------- HERO ------------------------------- */

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 sm:pb-20">
      <img
        src={heroDj}
        alt="DJ mixer and turntables at a Charlotte, NC event with blue stage lighting"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute     inset-0 -z-10 bg-black/75"
      aria-hidden="true" />
      <div className="grid-texture absolute inset-0 -z-10 opacity-40" aria-hidden="true" />

      <div className="shell">
        <p className="eyebrow animate-fade-up">Charlotte, NC • Since 1994</p>
        <h1
          className="animate-fade-up mt-5 max-w-4xl text-[3rem] font-semibold leading-[0.92] sm:text-[4.5rem] lg:text-[6rem]"
          style={{ animationDelay: "80ms" }}
        >
          SIRESOUNDS
          <br /> 
          AUDIO EQUIPMENT RENTAL <span className="text-gradient-accent">AND DJ</span>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          30+ years of weddings, reunions, and packed rooms — run on professional-grade gear and a
          crate that spans every era.
        </p>
        <div
          className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <CtaLink to="/contact" className="w-full sm:w-auto">
            Book Your Date
          </CtaLink>
          <CtaLink to="/services" variant="outline" className="w-full sm:w-auto">
            See the Rig
          </CtaLink>
        </div>

        <dl
          className="animate-fade-up mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3"
          style={{ animationDelay: "320ms" }}
        >
          <StatBlock value="30+" label="Years Spinning" />
          <StatBlock value="1000+" label="Events Played" />
          <StatBlock
            value="#1"
            label="Most Requested DJ in Charlotte"
            className="col-span-2 sm:col-span-1"
          />
        </dl>
      </div>
    </section>
  );
}

/* -------------------------------- RIG -------------------------------- */

const GEAR = [
  {
    name: "Yamaha MG10XU",
    copy: "Yamaha MG10XU 10-Channel Analog Mixing Console with USB Audio Interface & Effects",
    img: gearMixer,
    alt: "Close-up of a professional Pioneer-style DJ battle mixer",
  },
  {
    name: "Electro-Voice ZLX",
    copy: "Electro-Voice ZLX Professional Loudspeaker",
    img: evSpeakers,
    alt: "EV powered speaker on a stand lit with blue stage light",
  },
  {
    name: "PA Speaker System Package",
    copy: "PA speaker system with dual speakers, stands, and cables. Perfect for weddings, DJ events, corporate functions, and live performances.",
    img: paSystem,
    alt: "Laptop running Serato DJ Pro next to two wireless handheld microphones",
  },
];

export function RigSection() {
  return (
    <section id="rig" className="bg-background py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="The Rig"
            title={
              <>
                Gear that <span className="text-gradient-accent">earns the room</span>
              </>
            }
            lead="Every function gets the full setup — tuned to the venue, cabled clean, and synchronized before your first guests walk in."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GEAR.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 90}>
              <article className="card-surface zoom-media group h-full overflow-hidden">
                <div className="aspect-[5/6] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-certain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ EVENTS ------------------------------ */

export function EventsSection() {
  return (
    <section id="events" className="bg-surface py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="shell grid w-full max-w-full items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">

        <Reveal className="zoom-media w-full overflow-hidden rounded-xl border border-border">
          <img
            src={eventWedding}
            alt="Wedding guests dancing at a Charlotte reception with warm uplighting"
            loading="lazy"
            width={1280}
            height={1440}
            className="
              block
              h-auto
              w-full
              max-w-full
              object-cover
              aspect-[4/5]
              sm:aspect-[5/6]
              lg:aspect-auto
            "
          />
        </Reveal>


        <Reveal delay={120} className="min-w-0">

          <SectionHeading
            eyebrow="Events"
            title={
              <>
                We read the room,
                <br className="hidden sm:block" />
                then we{" "}
                <span className="text-gradient-accent">
                  own it
                </span>
              </>
            }
            lead="Professional, well-coordinated, and prompt. Fluent in today's charts, classic hits, and everything between."
          />


          <ul
            className="
              mt-8
              flex
              w-full
              max-w-full
              flex-wrap
              gap-x-2
              gap-y-3
              overflow-visible
              pb-2
            "
          >
            {EVENT_TYPES.map((tag) => (
              <li
                key={tag}
                className="
                  max-w-full
                  py-1
                "
              >
                <Chip>
                  {tag}
                </Chip>
              </li>
            ))}
          </ul>


          <div className="mt-8 sm:mt-9">
            <CtaLink to="/events" variant="outline">
              View Events 
              <ArrowRight className="h-4 w-4" />
            </CtaLink>
          </div>


        </Reveal>

      </div>
    </section>
  );
}

/* ----------------------------- SERVICES ----------------------------- */

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title={
              <>
                Built for <span className="text-gradient-accent">your event</span>
              </>
            }
            lead="Full-service DJ, sound, lighting, and rental options for weddings and events across Charlotte, NC."
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <Reveal as="li" key={service.name} delay={i * 70}>
                <article className="card-surface group flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-md border border-border-strong bg-surface-2 text-primary transition-colors group-hover:border-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <CtaLink to="/services" variant="ghost" className="mt-5 justify-start px-0">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CtaLink>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ RATES ------------------------------ */

export function RatesSection() {
  return (
    <section id="rates" className="bg-surface py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Rates"
            title={
              <>
                Straight <span className="text-gradient-accent">pricing</span>
              </>
            }
            lead="No packages to decode. Tell us the hours and the venue and we'll confirm the rest."
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {RATES.map((rate, i) => (
            <Reveal as="li" key={rate.name} delay={i * 90}>
              <article
                className={cn(
                  "card-surface flex h-full flex-col p-8",
                  rate.featured && "border-primary/45 shadow-[var(--shadow-glow)]",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{rate.name}</h3>
                  {rate.featured ? (
                    <span className="shrink-0 rounded-full bg-primary px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
                      Most Booked
                    </span>
                  ) : null}
                </div>
                <p className="mt-6 font-display text-5xl font-semibold text-primary">
                  {rate.price}
                </p>
                <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  {rate.unit}
                </p>
                <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm text-foreground/90">
                  {rate.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
                <CtaLink
                  to="/contact"
                  variant={rate.featured ? "accent" : "outline"}
                  className="mt-8 w-full"
                >
                  Request This
                </CtaLink>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------- WHY SIRESOUNDS --------------------------- */

const BENEFITS = [
  { title: "Professional", copy: "Well-coordinated and reliable service." },
  { title: "Experienced", copy: "More than three decades of DJ and event experience." },
  { title: "Versatile", copy: "Music across generations, cultures, and genres." },
  { title: "Personalized", copy: "Your playlist, your event, your atmosphere." },
];

export function WhySection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why SireSounds"
            title={
              <>
                Experience you can <span className="text-gradient-accent">hear</span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <dl className="mt-10 grid grid-cols-2 gap-8 rounded-xl border border-border bg-card p-8 sm:grid-cols-3">
            <StatBlock value="30+" label="Years of Experience" />
            <StatBlock value="1000+" label="Events" />
            <StatBlock
              value="Charlotte, NC"
              label="Based"
              className="col-span-2 sm:col-span-1"
            />
          </dl>
        </Reveal>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 70}>
              <div className="card-surface h-full p-6">
                <h3 className="text-base font-semibold tracking-[0.08em] text-primary">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------ ABOUT ------------------------------ */

export function AboutSection() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <Reveal className="zoom-media overflow-hidden rounded-xl border border-border">
          <img
            src={djSire}
            alt="Portrait of DJ Sire behind his DJ setup"
            loading="lazy"
            width={1024}
            height={1280}
            className="h-full w-full object-cover"
          />
        </Reveal>

        <Reveal delay={110}>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                Meet <span className="text-gradient-accent">DJ Sire</span>
              </>
            }
          />
          <h3 className="mt-4 text-sm font-bold tracking-[0.2em] text-muted-foreground">
            30+ Years Behind the Music
          </h3>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              DJ Sire began his journey into music and mixing records at age 16, learning on two
              turntables and a mixer. He later DJed college events, fashion shows, homecomings, and
              student union parties, and operated a radio show.
            </p>
            <p>
              He continued developing his skills while serving in the U.S. Marine Corps and later
              moved to Charlotte, NC, where he formed SireSounds Mobile DJ.
            </p>
          </div>
          <ul className="mt-7 flex flex-wrap gap-5">
            <li>
              <Chip>30+ Years of Experience</Chip>
            </li>
            <li>
              <Chip>1000+ Events / Weddings</Chip>
            </li>
            <li>
              <Chip>Charlotte-Based</Chip>
            </li>
          </ul>
          <div className="mt-9">
            <CtaLink to="/about">Meet DJ Sire</CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ MUSIC ------------------------------ */

export function MusicSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">

      <div
        className="grid-texture absolute inset-0 opacity-50"
        aria-hidden="true"
      />


      <div className="shell relative w-full max-w-full px-5 sm:px-6">

        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">


          {/* LEFT CONTENT */}

          <Reveal className="min-w-0 max-w-full">

            <SectionHeading
              eyebrow="Your Music"
              title={
                <>
                  Your music.
                  <br className="hidden sm:block" />
                  Your{" "}
                  <span className="text-gradient-accent">
                    moments.
                  </span>
                </>
              }
              lead="We are here to give you what you want. Build your playlist with the songs you choose and let SireSounds shape the atmosphere around your event."
            />


            {/* GENRES */}

            <div className="mt-8 w-full max-w-full overflow-visible">

              <ul
                className="
                  flex
                  w-full
                  max-w-full
                  flex-wrap
                  gap-x-2.5
                  gap-y-5
                "
              >

                {GENRES.map((g) => (

                  <li
                    key={g}
                    className="
                      max-w-full
                      min-w-0
                    "
                  >

                    <Chip>
                      {g}
                    </Chip>

                  </li>

                ))}

              </ul>

            </div>


          </Reveal>






          {/* RIGHT CARD */}

          <Reveal
            delay={120}
            className="min-w-0 max-w-full"
          >

            <div
              className="
                w-full
                max-w-full
                overflow-hidden
                rounded-xl
                border
                border-border
                bg-card
                p-5
                sm:p-8
              "
            >

              <div
                className="
                  flex
                  w-full
                  items-end
                  justify-center
                  gap-3
                  sm:justify-between
                  sm:gap-4
                "
              >

                <Equalizer
                  bars={9}
                  className="h-16 w-full sm:h-20"
                />


                <Equalizer
                  bars={9}
                  className="h-16 w-full sm:h-20"
                />


                <Equalizer
                  bars={9}
                  className="hidden h-20 w-full sm:flex"
                />


              </div>


              <p
                className="
                  mt-6
                  text-center
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                  sm:mt-8
                  sm:text-sm
                "
              >
                Requests welcome all night
              </p>


            </div>


          </Reveal>


        </div>

      </div>





      {/* MARQUEE */}

      <div
        className="
          mt-12
          flex
          w-full
          max-w-full
          overflow-hidden
          border-y
          border-border
          py-4
          sm:mt-16
          sm:py-5
        "
      >

        <div
          className="
            animate-marquee
            flex
            shrink-0
            gap-8
            whitespace-nowrap
            pr-8
            sm:gap-10
            sm:pr-10
          "
        >

          {[...GENRES, ...GENRES].map((g, i) => (

            <span
              key={`${g}-${i}`}
              className="
                font-display
                text-xl
                uppercase
                tracking-wide
                text-muted-foreground/50
                sm:text-2xl
              "
            >

              {g}

              <span className="text-primary">
                •
              </span>

            </span>

          ))}


        </div>

      </div>


    </section>
  );
}
/* ------------------------------ GALLERY ------------------------------ */

const GALLERY = [
  { title: "Weddings", img: eventWedding, alt: "Wedding reception dance floor" },
  { title: "Corporate Events", img: galleryCorporate, alt: "Corporate event with stage lighting" },
  { title: "Family Reunions", img: galleryFamily, alt: "Outdoor family reunion party at night" },
  { title: "Quinceañeras", img: galleryQuince, alt: "Quinceañera celebration in a ballroom" },
  { title: "Dance Floors", img: ctaBg, alt: "Packed dance floor with hands in the air" },
];

export function GallerySection() {
  return (
    <section className="bg-surface py-16 sm:py-20 lg:py-28 overflow-hidden">

      {/* Heading */}

      <div className="shell px-5 sm:px-6">

        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                See the{" "}
                <span className="text-gradient-accent">
                  energy
                </span>
              </>
            }
            lead="Weddings, family events, parties, and corporate nights across the Charlotte area."
          />
        </Reveal>

      </div>




      {/* Gallery Slider */}

      <div
        className="
          mt-10
          flex
          w-full
          snap-x
          snap-mandatory
          gap-5
          overflow-x-auto
          px-5
          pb-4
          sm:mt-12
          sm:px-6
          md:px-8
          no-scrollbar
        "
      >

        {GALLERY.map((item, i) => (

          <Reveal
            key={item.title}
            delay={i * 70}
            className="
              w-[calc(100vw-40px)]
              shrink-0
              snap-center
              sm:w-[85vw]
              md:w-[46vw]
              lg:w-[32vw]
            "
          >


            <article
              className="
                card-surface
                zoom-media
                group
                relative
                aspect-[4/3]
                w-full
                overflow-hidden
                rounded-xl
              "
            >


              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />



              <div
                className="
                  veil
                  absolute
                  inset-0
                "
                aria-hidden="true"
              />



              <span
                className="
                  absolute
                  left-1/2
                  top-1/2
                  grid
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  place-items-center
                  rounded-full
                  border
                  border-primary/60
                  bg-background/60
                  text-primary
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              >

                <Play className="h-5 w-5" />

              </span>



              <h3
                className="
                  absolute
                  bottom-5
                  left-5
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>



            </article>


          </Reveal>

        ))}


      </div>





      {/* Button */}

      <div className="shell mt-8 px-5 sm:px-6 sm:mt-10">

        <CtaLink
          to="/events"
          variant="outline"
        >
          View All Videos
          <ArrowRight className="h-4 w-4" />
        </CtaLink>

      </div>



    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title={
              <>
                The room <span className="text-gradient-accent">remembers</span>
              </>
            }
            align="center"
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 60}>
              <figure className="card-surface relative h-full p-7">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/15" />
                <div className="flex gap-1 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <span className="block font-display text-lg text-card-foreground">{t.name}</span>
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                    {t.event}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------- FINAL CTA ----------------------------- */

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      <img
        src={ctaBg}
        alt="Crowd with hands in the air under blue lighting at a Charlotte event"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="veil absolute inset-0 -z-10" aria-hidden="true" />
      <div className="grid-texture absolute inset-0 -z-10 opacity-60" aria-hidden="true" />

      <div className="shell text-center">
        <Reveal>
          <p className="eyebrow justify-center">Let's Talk</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold sm:text-6xl lg:text-7xl">
            Let's lock your <span className="text-gradient-accent">date</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
            Tell us the venue, the vibe, and the hours — you'll get a response quickly.
          </p>
          <div className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <CtaLink to="/contact" className="w-full sm:w-auto">
              Check Availability
            </CtaLink>
            <CtaAnchor href={PHONE_HREF} className="w-full sm:w-auto">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </CtaAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
