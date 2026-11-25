import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import {
  EventsSection,
  FinalCta,
  GallerySection,
  TestimonialsSection,
} from "@/components/site/sections";
import eventWedding from "@/assets/event-wedding.jpg";

const title = "Event Sound Equipment Rentals | SireSounds Charlotte";
const description =
  "PA and speaker rentals for weddings, corporate events, parties and community gatherings in Charlotte and nearby towns.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/events" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.siresoundsaudioequipmentrentals.com/events" }],
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
