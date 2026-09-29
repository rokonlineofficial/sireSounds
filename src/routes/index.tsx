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

const title = "SireSounds Mobile DJ — Charlotte NC Wedding & Event DJ";
const description =
  "Charlotte's premium mobile DJ: 30+ years of weddings, corporate events and parties with pro sound, lighting, wireless mics and MC support. Call (704) 441-2561.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
