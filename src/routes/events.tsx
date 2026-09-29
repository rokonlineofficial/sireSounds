import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import {
  EventsSection,
  FinalCta,
  GallerySection,
  TestimonialsSection,
} from "@/components/site/sections";
import eventWedding from "@/assets/event-wedding.jpg";

const title = "Events We DJ — Weddings, Corporate & Parties | SireSounds";
const description =
  "Weddings, corporate nights, quinceañeras, Sweet 16s, family reunions, school events, HOA block parties and backyard BBQs across Charlotte, NC.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title={
          <>
            Built for <span className="text-primary">every kind of crowd</span>
          </>
        }
        lead="From a 300-guest reception to a neighborhood block party, the setup scales and the energy stays."
        image={eventWedding}
        imageAlt="Packed wedding dance floor at a Charlotte reception"
      />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
