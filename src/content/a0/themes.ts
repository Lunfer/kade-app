import { Theme } from '../../data/types';

// A0 vocab themes are closed, memorizable word sets (numbers, days/months,
// colors, greetings) rather than the topic-linked, real-world categories
// a1/themes.ts uses -- see docs/grammar-a0-curriculum-map.md for why these
// live at A0 instead of folded into A1's existing themes.
export const a0Themes: Theme[] = [
  { id: 'theme-greetings', name: 'Greetings & politeness' },
  { id: 'theme-numbers', name: 'Numbers' },
  { id: 'theme-time-calendar', name: 'Days, months & time words' },
  { id: 'theme-colors', name: 'Colors' },
];
