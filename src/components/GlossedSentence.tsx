import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, textStyles, spacing } from '../theme';
import { buildSurfaceFormIndex } from '../content';

interface GlossedSentenceProps {
  nl: string;
  /** Fallback shown once for the whole sentence when no per-word gloss is available. */
  en?: string;
}

const surfaceFormIndex = buildSurfaceFormIndex();

/**
 * Renders a Dutch sentence word-by-word, with a small faded English gloss
 * under any token that matches a known vocabulary word (including its
 * tracked inflected forms). This is what makes "every new word gets a
 * translation underneath" hold true inside full example sentences, not
 * just in isolated vocab lists.
 */
export function GlossedSentence({ nl, en }: GlossedSentenceProps) {
  const tokens = useMemo(() => nl.split(/\s+/), [nl]);
  const anyMatched = useMemo(
    () => tokens.some((t) => surfaceFormIndex.has(t.replace(/[.,!?;:'"]/g, '').toLowerCase())),
    [tokens]
  );

  return (
    <View>
      <View style={styles.row}>
        {tokens.map((token, i) => {
          const clean = token.replace(/[.,!?;:'"]/g, '').toLowerCase();
          const match = surfaceFormIndex.get(clean);
          return (
            <View key={i} style={styles.tokenWrap}>
              <Text style={[textStyles.body, styles.nl]}>{token}</Text>
              {match ? <Text style={[textStyles.wordSubtitle, styles.en]}>{match.en}</Text> : null}
            </View>
          );
        })}
      </View>
      {!anyMatched && en ? <Text style={[textStyles.wordSubtitle, styles.sentenceEn]}>{en}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flexWrap: 'wrap', columnGap: spacing.xs, rowGap: spacing.xs },
  tokenWrap: { alignItems: 'flex-start' },
  nl: { color: colors.textPrimary },
  en: { color: colors.textFaded, marginTop: 1 },
  sentenceEn: { color: colors.textFaded, marginTop: spacing.xs },
});
