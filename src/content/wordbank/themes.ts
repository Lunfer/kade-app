import { Theme } from '../../data/types';

// New real-world categories added when importing the user's personal
// DutchPod101 word bank (see words.ts) -- these sit alongside a0/a1's
// existing themes and reuse them wherever a word already fit (food,
// travel, weather, etc.); these are the domains that didn't have a home.

export const wordbankThemes: Theme[] = [
  { id: 'theme-body-health', name: "Body & health" },
  { id: 'theme-clothing', name: "Clothing & accessories" },
  { id: 'theme-emotions', name: "Feelings & emotions" },
  { id: 'theme-entertainment', name: "Entertainment, hobbies & sports" },
  { id: 'theme-technology', name: "Technology & media" },
  { id: 'theme-nature-animals', name: "Nature & animals" },
  { id: 'theme-money-shopping', name: "Money & shopping" },
  { id: 'theme-tools-materials', name: "Tools, materials & measurements" },
  { id: 'theme-qualities', name: "Qualities & descriptions" },
  { id: 'theme-expressions', name: "Everyday expressions & reactions" },
  { id: 'theme-society-culture', name: "Society, culture & beliefs" },
];
