import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

// ⚠️ হিরোর ব্যাকগ্রাউন্ড ছবি: src/assets এ ছবিটা রেখে এখানে সঠিক নাম দিন
import heroBg from "@/assets/dj-sire.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews & Testimonials | SireSounds Mobile DJ Charlotte, NC" },
      {
        name: "description",
        content:
          "Real Google reviews from weddings, bridal showers, corporate events and private parties. See why Charlotte hosts trust SireSounds Mobile DJ.",
      },
    ],
  }),
  component: TestimonialsPage,
});

const PHONE = "(704) 441-2561";
const PHONE_LINK = "tel:+17044412561";

// Google থেকে নেওয়া আসল রিভিউ। event শুধু সেখানেই দেওয়া হয়েছে যেখানে রিভিউতে উল্লেখ আছে।
const TESTIMONIALS: { name: string; quote: string; event?: string }[] = [
  {
    name: "Margaret Nelson",
    event: "Private Party",
    quote:
      "SireSounds Mobile was fantastic! My party had great music, lights and plenty of dancing! The DJ was very professional, pleasant, friendly and helpful. He was responsive to all my guest requests and the rate was very fair! I referred him to several of my friends with only great appreciation! Awesome!",
  },
  {
    name: "Vernon Bynoe",
    event: "Wedding",
    quote:
      "Mark did a phenomenal job at my wedding! He is professional and offers a wide variety of music and offers suggestions on how to make your event most enjoyable!",
  },
  {
    name: "Brad Barnett",
    event: "Corporate Event",
    quote:
      "Very professional DJ who worked a corporate event that I attended. Showed up early to make sure that everything was already going when the guests arrived. Played a strong mix of music and kept the energy level high. Highly recommend to anyone looking for a professional, timely DJ to work your event.",
  },
  {
    name: "La'Tracia Jones",
    event: "Bridal Shower",
    quote:
      "MAN, Mark had the roof on fire!!!! Mark made my bridal shower ONE TO REMEMBER!!! He played the best songs for the 80's/90's theme!! From the first time I booked Mark until now I've always been pleased with the professionalism and music selection!!!!",
  },
  {
    name: "Tracy Jones",
    event: "Family Events",
    quote:
      "This is one review I am happy to write. I have used SireSounds for 3 events and I am always happy. My family loves to dance and Mark keeps us on the dance floor. Mark is always on time and very professional. We always have a great time. We will be using him again real soon.",
  },
  {
    name: "Theresa Castillo",
    quote:
      "Mark is incredible to work with. He is organized, attentive and super professional and followed up on text or emails incredibly fast. Mark did a fantastic job of keeping a high-energy dance floor all night. I highly recommend Mark for your upcoming events.",
  },
  {
    name: "Victoria Jones",
    event: "Bridal Shower",
    quote:
      "Mark did an amazing job for my sister's 80's/90's bridal shower! Every song was a hit and the attendees loved it! If you're looking for someone who is professional, keeps the music bumping, and gives you exactly what you are asking for...",
  },
  {
    name: "KaTrina Hudson",
    quote:
      "My experience with Sire Sounds Mobile DJ was great. Mark Nelson is a true professional and an awesome DJ. He had all types of music for the mixed age group attending my function. I highly recommend his services!!!",
  },
  {
    name: "Christine Borden",
    quote:
      "The music was on point. Such a wide variety and different types of music, he played Pop, R&B, Reggae, to Salsa. He even slowed down the pace so the seasoned citizens could hit the floor. I would definitely recommend this DJ for any event that you are having.",
  },
  {
    name: "Liza Hanif",
    quote:
      "Wonderful professional DJ service with a personal touch. He has a great selection and knows how to cycle the playlist to keep everyone on the dance floor and having a good time. I will be using him again.",
  },
  {
    name: "Ismenia Azcanio",
    event: "Parties",
    quote:
      "We have used SireSounds for our parties and have had an excellent experience. DJ was very professional and played the songs we love. I would recommend SireSounds to anyone looking for a DJ.",
  },
  {
    name: "Amy Gilchrist",
    quote:
      "Mark is friendly and professional and has a wide variety of music to cater to any crowd! SireSounds is the best DJ in the Queen City!!",
  },
  {
    name: "Trinity Nelson",
    event: "Sweet 16 Party",
    quote:
      "Greatest DJ, my Sweet 16 party was the best. Everyone had a great time! Would recommend him to anyone having a teen party.",
  },
  {
    name: "Natasha Gilchrist",
    quote:
      "I definitely recommend SireSounds. Very professional and punctual, kept the hits coming and made my event a blast.",
  },
  {
    name: "T Babb",
    quote:
      "Great DJ, gets a feel for the crowd and is able to adapt accordingly, keeps clean versions, and is fair priced.",
  },
  {
    name: "Chanita Horton",
    quote: "Awesome DJ! Sire Sounds is very professional and caters to the audience.",
  },
];

const HIGHLIGHTS = [
  { value: `${TESTIMONIALS.length}+`, label: "Google Reviews" },
  { value: "30+", label: "Years Behind the Decks" },
  { value: "Queen City", label: "Charlotte, NC" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialsPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-top object-certain md:object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40" />

        <div className="shell pb-20 pt-36 md:pb-28 md:pt-44">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
            About · Testimonials
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-card-foreground md:text-6xl">
            What Our Clients <span className="text-primary">Say</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From weddings and bridal showers to corporate nights and Sweet 16s, we measure success
            by full dance floors and happy hosts. Here is what real Charlotte clients say after
            their events.
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

          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-2xl font-semibold uppercase text-card-foreground md:text-4xl">
                  {h.value}
                </dd>
                <dd className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {h.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section>
        <div className="shell py-16 md:py-24">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-primary">
            Real Reviews From Google
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold uppercase text-card-foreground md:text-5xl">
            Straight From the Dance Floor
          </h2>

          <div className="mt-12 columns-1 gap-6 md:columns-2 lg:columns-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="mb-6 break-inside-avoid rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary/60"
              >
                <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
                <blockquote className="mt-4 leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-extrabold text-primary">
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block font-semibold text-card-foreground">{t.name}</span>
                    <span className="block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      {t.event ? `${t.event} · ` : ""}Google Review
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold uppercase">
              Let's Make Your Event Next
            </h2>
            <p className="mt-2 max-w-xl opacity-90">
              Check your date and join our list of happy clients.
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