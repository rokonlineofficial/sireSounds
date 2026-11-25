import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import {
  FinalCta,
  MusicSection,
  RigSection,
  ServicesSection,
} from "@/components/site/sections";
import gearMixer from "@/assets/gear-mixer.jpg";

const title = "Audio Equipment Rentals in Charlotte | SireSounds";
const description =
  "Rent PA speakers, subwoofers, mixers and wireless microphones for Charlotte events, with setup and breakdown available.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.siresoundsaudioequipmentrentals.com/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Everything the night needs, <span className="text-primary">handled</span>
          </>
        }
        lead="Sound, lighting, microphones and MC work — booked together or rented on their own."
        image={gearMixer}
        imageAlt="Professional DJ mixer used by SireSounds Mobile DJ"
      />
      <ServicesSection />
      <RigSection />
      <MusicSection />
      <FinalCta />
    </>
  );
}
