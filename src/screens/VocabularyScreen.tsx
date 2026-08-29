import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { WordText } from '../components/WordText';
import { colors, textStyles, spacing, radii } from '../theme';
import { wordsRepo, themesRepo } from '../data/repositories/content';
import { Theme, Word } from '../data/types';

export function VocabularyScreen() {
  const [words, setWords] = useState<Word[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);

  useFocusEffect(
    useCallback(() => {
      Promise.all([wordsRepo.getAll(), themesRepo.getAll()]).then(([w, t]) => {
        setWords(w);
        setThemes(t);
      });
    }, [])
  );

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>Vocabulary</Text>
      <Text style={[textStyles.body, styles.subtitle]}>
        Every word Kade has introduced so far, grouped by everyday theme.
      </Text>

      {themes.map((theme) => {
        const themeWords = words.filter((w) => w.themeId === theme.id);
        if (themeWords.length === 0) return null;
        return (
          <View key={theme.id} style={styles.themeSection}>
            <Text style={[textStyles.subheading, styles.themeTitle]}>{theme.name}</Text>
            <View style={styles.grid}>
              {themeWords.map((w) => (
                <View key={w.id} style={styles.wordCell}>
                  <WordText nl={w.nl} en={w.en} />
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.xs },
  subtitle: { color: colors.textSecondary, marginBottom: spacing.xl },
  themeSection: { marginBottom: spacing.xl },
  themeTitle: { color: colors.teal, marginBottom: spacing.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  wordCell: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 120,
  },
});
