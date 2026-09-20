import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/site/PageHero";
import {
  FinalCta,
  MusicSection,
  RigSection,
  ServicesSection,
} from "@/components/site/sections";
import gearMixer from "@/assets/gear-mixer.jpg";

const title = "DJ Services in Charlotte — Sound, Lighting & Mics | SireSounds";
const description =
  "Wedding DJ, event DJ, equipment rental, dance-floor lighting, wireless microphones and powered sound systems for Charlotte, NC events.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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
