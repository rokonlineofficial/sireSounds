import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import { FinalCta, RatesSection, WhySection } from "@/components/site/sections";
import ctaBg from "@/assets/cta-bg.jpg";

const title = "DJ Rates in Charlotte NC — Transparent Pricing | SireSounds";
const description =
  "Wedding DJ from $600 per 4 hours, daytime event DJ from $400 per hour (3 hr minimum), and full equipment rental at $350 per day in Charlotte, NC.";

export const Route = createFileRoute("/rates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/rates" },
    ],
    links: [{ rel: "canonical", href: "/rates" }],
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
