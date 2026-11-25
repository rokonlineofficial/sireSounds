import { createFileRoute } from "@tanstack/react-router";

import {
  EventsSection,
  FinalCta,
  GallerySection,
  Hero,
  MusicSection,
  RatesSection,
  RigSection,
  ServicesSection,
  TestimonialsSection,
  WhySection,
} from "@/components/site/sections";

const title = "SireSounds Audio Equipment Rentals | Speaker & PA Rentals in Charlotte, NC";
const description =
  "Rent speakers, subwoofers, mixers and wireless mics in Charlotte, Rock Hill, York & Clover. Small and large sound setups for weddings, parties, church and community events. Setup & breakdown available. Call (704) 441-2561.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.siresoundsaudioequipmentrentals.com/",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <RigSection />
      <ServicesSection />
      <EventsSection />
      <WhySection />
      <MusicSection />
      <GallerySection />
      <RatesSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
