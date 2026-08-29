/**
 * Fraunces for display/headers -- a characterful serif with enough
 * quirk to feel like a hand-painted gable sign, not a generic app font.
 * Inter for body/quiz content -- it is read constantly during drills,
 * so legibility wins over character there.
 */
export const fontFamilies = {
  displaySemiBold: 'Fraunces_600SemiBold',
  displayBold: 'Fraunces_700Bold',
  displayItalic: 'Fraunces_500Medium_Italic',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
} as const;

export const textStyles = {
  displayLarge: { fontFamily: fontFamilies.displayBold, fontSize: 32, lineHeight: 38 },
  displayMedium: { fontFamily: fontFamilies.displayBold, fontSize: 24, lineHeight: 30 },
  heading: { fontFamily: fontFamilies.displaySemiBold, fontSize: 20, lineHeight: 26 },
  subheading: { fontFamily: fontFamilies.bodySemiBold, fontSize: 16, lineHeight: 22 },
  body: { fontFamily: fontFamilies.body, fontSize: 16, lineHeight: 23 },
  bodySmall: { fontFamily: fontFamilies.body, fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: fontFamilies.bodyMedium, fontSize: 12, lineHeight: 16 },
  // Small, faded, always-visible translation under any Dutch word.
  wordSubtitle: { fontFamily: fontFamilies.body, fontSize: 12, lineHeight: 15, fontStyle: 'italic' as const },
  dutchWord: { fontFamily: fontFamilies.bodySemiBold, fontSize: 17, lineHeight: 21 },
};
