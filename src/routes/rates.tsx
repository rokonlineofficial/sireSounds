import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { FinalCta, RatesSection, WhySection } from "@/components/site/sections";
import ctaBg from "@/assets/cta-bg.jpg";

const title = "Audio Rental Rates in Charlotte, NC | SireSounds";
const description =
  "Transparent rates for speakers, subwoofers, mixers and wireless microphones, with small and large event sound setups.";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/rates" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://www.siresoundsaudioequipmentrentals.com/rates" }],
  }),
  component: RatesPage,
});

function RatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Rates"
        title={
          <>
            Clear pricing, <span className="text-primary">no surprises</span>
          </>
        }
        lead="Every package includes the full sound system, wireless mics and setup before guests arrive."
        image={ctaBg}
        imageAlt="Cinematic dance floor lighting at a SireSounds event"
      />
      <RatesSection />
      <WhySection />
      <FinalCta />
    </>
  );
}
