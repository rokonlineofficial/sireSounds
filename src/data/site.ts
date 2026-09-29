export const PHONE_DISPLAY = "(704) 441-2561";
export const PHONE_HREF = "tel:+17044412561";

export const SERVICES = [
  {
    name: "Wedding DJ",
    icon: "heart",
    description:
      "Ceremony, cocktails, and reception handled end to end with MC support and a clean timeline.",
  },
  {
    name: "Events DJ",
    icon: "party",
    description:
      "Reunions, corporate nights, quinceañeras, Sweet 16s, school events, and block parties.",
  },
  {
    name: "DJ Equipment Rental",
    icon: "sliders",
    description: "Rent the rig for your own event — speakers, stands, mixer, and mics.",
  },
  {
    name: "Event Lighting",
    icon: "lightbulb",
    description: "Dance-floor lighting that matches the room and lifts the energy after dark.",
  },
  {
    name: "Wireless Microphones",
    icon: "mic",
    description: "Handhelds for vows, toasts, and announcements — clear from the back of the room.",
  },
  {
    name: "Sound Equipment",
    icon: "speaker",
    description: "Powered speakers tuned to your venue so every seat hears the same mix.",
  },
] as const;

/** Pricing — edit these values to update the rates section everywhere. */
export const RATES = [
  {
    name: "Wedding DJ",
    price: "BASED ON YOUR NEEDS",
    unit: "Per 4 Hours",
    featured: true,
    includes: ["Full sound system", "Wireless mics", "MC & timeline support"],
  },
  {
    name: "Daytime Event DJ",
    price: "BASED ON YOUR NEEDS",
    unit: "Per Hour • 3 hr min",
    featured: false,
    includes: ["Parties & HOA events", "Outdoor-ready setup", "Clean-edit music"],
  },
  {
    name: "Equipment Rental",
    price: "BASED ON YOUR NEEDS",
    unit: "Per Day",
    featured: false,
    includes: ["Speakers & stands", "Mixer + mics", "Delivery on request"],
  },
] as const;

export const EVENT_TYPES = [
  "Weddings",
  "Corporate",
  "Quinceañeras",
  "Sweet 16",
  "Family Reunions",
  "School Events",
  "HOA & Block Parties",
  "Backyard BBQs",
] as const;

export const GENRES = [
  "Hip Hop",
  "R&B",
  "Top 40",
  "Classic Rock",
  "Old School",
  "Country",
  "Club",
  "And More",
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "DJ Sire kept our reception full from the first dance to the last song. Professional, prompt, and easy to plan with.",
    name: "Danielle M.",
    event: "Wedding",
  },
  {
    quote:
      "He read the room all night — grandparents, cousins, kids, everybody danced. The sound was clean the whole time.",
    name: "Marcus T.",
    event: "Family Reunion",
  },
  {
    quote:
      "Setup was done well before guests arrived and the announcements were crisp. Exactly what we needed for our staff night.",
    name: "Priya R.",
    event: "Corporate Event",
  },
  {
    quote:
      "Our daughter's quinceañera was perfect. Sire worked with our playlist and mixed in everything the family requested.",
    name: "Elena G.",
    event: "Quinceañera",
  },
  {
    quote:
      "Rented the speakers and mics for our block party. Great gear, simple pickup, and he walked us through the setup.",
    name: "Kevin B.",
    event: "HOA Block Party",
  },
  {
    quote:
      "Thirty years of experience shows. He never missed a cue and the dance floor never emptied.",
    name: "Sharon W.",
    event: "Sweet 16",
  },
] as const;
