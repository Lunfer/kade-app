import { Theme } from '../../data/types';

// Real-world categories, not grammar categories. A word keeps its theme no
// matter which grammar point it is drilled under (e.g. "koken" is a food
// word whether it shows up as a present-tense example or, later, in a
// perfectum drill).
export const a1Themes: Theme[] = [
  { id: 'theme-people', name: 'People & family' },
  { id: 'theme-home', name: 'Home' },
  { id: 'theme-food', name: 'Food & drink' },
  { id: 'theme-travel', name: 'Travel & the city' },
  { id: 'theme-work-school', name: 'Work & school' },
  { id: 'theme-weather', name: 'Weather' },
  { id: 'theme-daily-life', name: 'Daily life' },
];
