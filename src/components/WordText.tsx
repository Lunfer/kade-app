import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles, spacing } from '../theme';

interface WordTextProps {
  nl: string;
  en: string;
  align?: 'left' | 'center';
}

/**
 * The one rule that applies everywhere a Dutch word is introduced: show the
 * English meaning directly underneath, always visible, clearly secondary.
 * Used for standalone vocab (drill options, the Vocabulary grid); for
 * whole sentences, see GlossedSentence.
 */
export function WordText({ nl, en, align = 'left' }: WordTextProps) {
  return (
    <View style={align === 'center' ? styles.centered : undefined}>
      <Text style={[textStyles.dutchWord, styles.nl, align === 'center' && styles.centerText]}>{nl}</Text>
      <Text style={[textStyles.wordSubtitle, styles.en, align === 'center' && styles.centerText]}>{en}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: { alignItems: 'center' },
  centerText: { textAlign: 'center' },
  nl: { color: colors.textPrimary },
  en: { color: colors.textFaded, marginTop: 2 },
});
