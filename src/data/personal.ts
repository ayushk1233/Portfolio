export interface BeyondPhoto {
  id: string;
  index: string;
  tag: string;
  src: string;
  alt: string;
  objectPosition?: string;
}

export const BEYOND_CODE_INTRO = {
  headingLine1: "There's more to me",
  headingLine2: "than a GitHub graph.",
  supporting:
    "Football, gym, travelling, fashion, guitar, swimming, and learning cool tricks off YouTube.",
} as const;

export const PERSONAL_INTERESTS = [
  "Football",
  "Gym",
  "Travelling",
  "Fashion",
  "Guitar",
  "Swimming",
  "YouTube Tricks",
] as const;

/**
 * First 5 entries appear by default in / BEYOND CODE.
 * Clicking "Show All" reveals the full 12-photo contact sheet.
 */
export const BEYOND_PHOTOS: BeyondPhoto[] = [
  {
    id: "football",
    index: "01",
    tag: "FOOTBALL",
    src: "/images/beyond/01-football.jpg",
    alt: "Ayush wearing jersey 19 on a floodlit football turf with a ball",
    objectPosition: "object-[50%_30%]",
  },
  {
    id: "snow",
    index: "02",
    tag: "SNOW",
    src: "/images/beyond/02-snow.jpg",
    alt: "Overlooking snow-dusted mountain ridges in falling snow",
    objectPosition: "object-[50%_38%]",
  },
  {
    id: "bike",
    index: "03",
    tag: "RIDES",
    src: "/images/beyond/03-bike.jpg",
    alt: "Riding a motorcycle through pine trees in snowfall",
    objectPosition: "object-[50%_35%]",
  },
  {
    id: "kurta",
    index: "04",
    tag: "FASHION",
    src: "/images/beyond/04-kurta.jpg",
    alt: "Ayush in a yellow embroidered kurta and sunglasses",
    objectPosition: "object-[50%_22%]",
  },
  {
    id: "panther-palace",
    index: "05",
    tag: "TRAVEL",
    src: "/images/beyond/05-panther-palace.jpg",
    alt: "Bronze panther sculptures in a historic palace courtyard",
    objectPosition: "object-[50%_60%]",
  },
  {
    id: "gym",
    index: "06",
    tag: "GYM",
    src: "/images/beyond/06-gym.jpg",
    alt: "Black-and-white shot of dumbbells lined up on a gym floor",
    objectPosition: "object-center",
  },
  {
    id: "swimming",
    index: "07",
    tag: "SWIMMING",
    src: "/images/beyond/07-swimming.jpg",
    alt: "Wading into a clear turquoise mountain rock pool",
    objectPosition: "object-[50%_40%]",
  },
  {
    id: "rafting",
    index: "08",
    tag: "OUTDOORS",
    src: "/images/beyond/08-rafting.jpg",
    alt: "Walking down to a turquoise river with a rafting paddle",
    objectPosition: "object-[50%_45%]",
  },
  {
    id: "palace-hall",
    index: "09",
    tag: "ARCHITECTURE",
    src: "/images/beyond/09-palace-hall.jpg",
    alt: "Ornate palace hall with emerald-and-gold pillars and stained glass",
    objectPosition: "object-center",
  },
  {
    id: "mountains",
    index: "10",
    tag: "HILLS",
    src: "/images/beyond/10-mountains.jpg",
    alt: "Misty pine mountains and valley meadow in fog",
    objectPosition: "object-center",
  },
  {
    id: "sunset",
    index: "11",
    tag: "SUNSET",
    src: "/images/beyond/11-sunset.jpg",
    alt: "Warm golden sunset reflecting across a quiet river",
    objectPosition: "object-center",
  },
  {
    id: "misty-road",
    index: "12",
    tag: "ROADTRIP",
    src: "/images/beyond/12-misty-road.jpg",
    alt: "Foggy mountain road winding through tall pine trees",
    objectPosition: "object-center",
  },
];
