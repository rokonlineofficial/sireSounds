import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { AboutSection, FinalCta, TestimonialsSection, WhySection } from "@/components/site/sections";
import djSire from "@/assets/dj sire young.jpeg";

const title = "About SireSounds Audio Rentals | Charlotte, NC";
const description =
  "Meet SireSounds, a Charlotte-based audio equipment rental business serving events in North and South Carolina.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.siresoundsaudioequipmentrentals.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Three decades of <span className="text-primary">reading the room</span>
          </>
        }
        lead="SireSounds Mobile DJ is a Charlotte-based, owner-operated service. One DJ, one standard — every event gets the full rig and the full attention."
        image={djSire}
        imageAlt="DJ Sire of SireSounds Mobile DJ in Charlotte, North Carolina"
      />
      <AboutSection />
      <WhySection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
