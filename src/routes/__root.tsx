import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Footer } from "../components/site/Footer";
import { Header } from "../components/site/Header";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "SireSounds Audio Equipment Rentals | Speaker & PA Rentals in Charlotte, NC",
      },
      {
        name: "description",
        content:
          "Rent speakers, subwoofers, mixers and wireless mics in Charlotte, Rock Hill, York & Clover. Small and large sound setups for weddings, parties, church and community events. Setup & breakdown available. Call (704) 441-2561.",
      },
      { name: "author", content: "SireSounds Audio Equipment Rentals" },
      {
        property: "og:title",
        content: "SireSounds Audio Equipment Rentals | Speaker & PA Rentals in Charlotte, NC",
      },
      {
        property: "og:description",
        content:
          "Rent speakers, subwoofers, mixers and wireless mics in Charlotte, Rock Hill, York & Clover. Small and large sound setups for weddings, parties, church and community events. Setup & breakdown available. Call (704) 441-2561.",
      },
      { property: "og:site_name", content: "SireSounds Audio Equipment Rentals" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.siresoundsaudioequipmentrentals.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "SireSounds Audio Equipment Rentals | Speaker & PA Rentals in Charlotte, NC",
      },
      {
        name: "twitter:description",
        content:
          "Rent speakers, subwoofers, mixers and wireless mics in Charlotte, Rock Hill, York & Clover. Small and large sound setups for weddings, parties, church and community events. Setup & breakdown available. Call (704) 441-2561.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      {
        rel: "canonical",
        href: "https://www.siresoundsaudioequipmentrentals.com/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SireSounds Audio Equipment Rentals",
          description:
            "Rent speakers, subwoofers, mixers and wireless mics in Charlotte, Rock Hill, York & Clover. Small and large sound setups for weddings, parties, church and community events. Setup & breakdown available. Call (704) 441-2561.",
          telephone: "+1-704-441-2561",
          url: "https://www.siresoundsaudioequipmentrentals.com/",
          logo: "https://www.siresoundsaudioequipmentrentals.com/new-logo.png",
          image: "https://www.siresoundsaudioequipmentrentals.com/new-logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "214 N Tryon St Ste 2000",
            addressLocality: "Charlotte",
            addressRegion: "NC",
            postalCode: "28202",
            addressCountry: "US",
          },
          areaServed: [
            "Charlotte",
            "Rock Hill",
            "York",
            "Clover",
            "North Carolina",
            "South Carolina",
          ],
          priceRange: "$$",
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
