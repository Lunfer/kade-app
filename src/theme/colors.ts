/**
 * Canal house palette.
 * Read like a real grachtenhuis: mostly muted brick and warm white plaster,
 * with canal-water teal used sparingly as the accent (window trim, progress,
 * water reflections) -- never a 50/50 split with brick.
 */
export const colors = {
  // Base / plaster
  background: '#F6EFE3',
  surface: '#FFFBF2',
  surfaceRaised: '#FFFFFF',
  border: '#E4D8C4',
  borderStrong: '#D3C3A6',

  // Brick (primary brand color -- the house facade)
  brick: '#AE4632',
  brickDark: '#7E3120',
  brickTint: '#F1DCD3',

  // Canal water teal (the accent -- trim, water, progress)
  teal: '#1F6E74',
  tealDark: '#154E53',
  tealTint: '#DCEEEE',

  // Brass / window trim, used very sparingly for highlights (streaks, gold stars)
  brass: '#C79A45',
  // Pale brass wash -- the "highlighter marker" tint behind emphasized
  // grammar-rule text. Same family as brass, just light enough to sit
  // behind a full sentence without fighting the body text.
  brassTint: '#F3E3B8',

  // Text
  textPrimary: '#2B2118',
  textSecondary: '#5B5044',
  textFaded: '#9A8F80',
  textOnBrick: '#FFF7EE',
  textOnTeal: '#F4FBFB',

  // Semantic
  success: '#3E7A4C',
  successTint: '#E1EEE2',
  error: '#B3402D',
  errorTint: '#F4DEDA',
  warning: '#B8863A',

  // Mastery scale, low to high -- used by the "street of houses" map and
  // per-topic progress badges.
  masteryNone: '#D3C3A6',
  masteryLow: '#C9846F',
  masteryMid: '#4C9298',
  masteryHigh: '#1F6E74',
  masteryDone: '#C79A45',
} as const;

export type ColorToken = keyof typeof colors;
