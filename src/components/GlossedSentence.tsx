import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles, spacing } from '../theme';

interface GlossedSentenceProps {
  nl: string;
  /** Full sentence translation, always shown beneath the sentence. */
  en?: string;
}

/**
 * Renders a Dutch example sentence with its full English translation
 * underneath -- always, consistently, for every example. (Word-by-word
 * glossing lives separately in WordText, for standalone vocab like drill
 * options and the Vocabulary grid; mixing that into full sentences here
 * made some examples show a couple of stray per-word glosses and others
 * show none, depending on which words happened to be in the tracked
 * vocabulary list, so it was dropped in favor of just the sentence
 * translation.)
 */
export function GlossedSentence({ nl, en }: GlossedSentenceProps) {
  return (
    <View>
      <Text style={[textStyles.body, styles.nl]}>{nl}</Text>
      {en ? <Text style={[textStyles.wordSubtitle, styles.sentenceEn]}>{en}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  nl: { color: colors.textPrimary },
  sentenceEn: { color: colors.textFaded, marginTop: spacing.xs },
});
