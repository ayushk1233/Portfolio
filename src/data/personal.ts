export type BeyondMotif = "football" | "anime" | "reading" | "life-lately";

export interface PersonalCard {
  id: string;
  index: string;
  title: string;
  label: string;
  motif: BeyondMotif;
  /**
   * Optional personal photograph path under /public/images/beyond/
   * Example: "/images/beyond/football.jpg"
   * Leave undefined to display the architectural placeholder frame.
   */
  photoPath?: string;
  photoAlt: string;
  caption: string;
  placeholderNote: string;
}

export const BEYOND_CODE_INTRO = {
  headingLine1: "There's more to me",
  headingLine2: "than a GitHub graph.",
  supporting: "Football, anime, books, and a curiosity that rarely switches off.",
} as const;

export const PERSONAL_CARDS: PersonalCard[] = [
  {
    id: "football",
    index: "01",
    title: "FOOTBALL",
    label: "01 / FOOTBALL",
    motif: "football",
    photoPath: undefined,
    photoAlt: "Placeholder frame for a personal football photograph",
    caption: "Matchday focus, tactics, and the rhythm of ninety minutes.",
    placeholderNote: "Add photo → public/images/beyond/football.jpg",
  },
  {
    id: "anime",
    index: "02",
    title: "ANIME",
    label: "02 / ANIME",
    motif: "anime",
    photoPath: undefined,
    photoAlt: "Placeholder frame for an anime still or personal photograph",
    caption: "Visual storytelling, sound design, and sharp world-building.",
    placeholderNote: "Add photo → public/images/beyond/anime.jpg",
  },
  {
    id: "reading",
    index: "03",
    title: "READING",
    label: "03 / READING",
    motif: "reading",
    photoPath: undefined,
    photoAlt: "Placeholder frame for a books or reading photograph",
    caption: "Long-form ideas, paper margins, and quiet pages off-screen.",
    placeholderNote: "Add photo → public/images/beyond/reading.jpg",
  },
  {
    id: "life-lately",
    index: "04",
    title: "LIFE LATELY",
    label: "04 / LIFE LATELY",
    motif: "life-lately",
    photoPath: undefined,
    photoAlt: "Placeholder frame for a recent personal photograph",
    caption: "Notes, snapshots, and small obsessions outside the terminal.",
    placeholderNote: "Add photo → public/images/beyond/life-lately.jpg",
  },
];
