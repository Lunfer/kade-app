import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';
import { WordText } from '../components/WordText';
import { VerbConjugationCard } from '../components/VerbConjugationCard';
import { colors, textStyles, spacing, radii } from '../theme';
import { wordsRepo, themesRepo } from '../data/repositories/content';
import { Theme, Word } from '../data/types';
import { a1Conjugations } from '../content/a1/conjugations';

export function VocabularyScreen() {
  const [words, setWords] = useState<Word[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [query, setQuery] = useState('');
  const [selectedVerbId, setSelectedVerbId] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      Promise.all([wordsRepo.getAll(), themesRepo.getAll()]).then(([w, t]) => {
        setWords(w);
        setThemes(t);
      });
    }, [])
  );

  const normalizedQuery = query.trim().toLowerCase();

  // Sections to render: every theme with at least one word left after the
  // search filter. A theme whose *name* matches keeps all of its words; a
  // theme that only matches on individual words is trimmed down to those.
  const visibleThemes = useMemo(() => {
    if (!normalizedQuery) {
      return themes.map((theme) => ({
        theme,
        themeWords: words.filter((w) => w.themeId === theme.id),
      }));
    }
    return themes
      .map((theme) => {
        const themeNameMatches = theme.name.toLowerCase().includes(normalizedQuery);
        const themeWords = words.filter((w) => {
          if (w.themeId !== theme.id) return false;
          if (themeNameMatches) return true;
          return (
            w.nl.toLowerCase().includes(normalizedQuery) ||
            w.en.toLowerCase().includes(normalizedQuery)
          );
        });
        return { theme, themeWords };
      })
      .filter((section) => section.themeWords.length > 0);
  }, [themes, words, normalizedQuery]);

  const hasNoResults = normalizedQuery.length > 0 && visibleThemes.length === 0;
  const selectedVerb = selectedVerbId ? a1Conjugations[selectedVerbId] ?? null : null;

  return (
    <ScreenContainer>
      <Text style={[textStyles.displayMedium, styles.title]}>Vocabulary</Text>
      <Text style={[textStyles.body, styles.subtitle]}>
        Every word Kade has introduced so far, grouped by everyday theme. Verbs are tappable --
        tap one to see how it conjugates.
      </Text>

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Search words or sections..."
        placeholderTextColor={colors.textFaded}
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      {hasNoResults && (
        <Text style={[textStyles.body, styles.noResults]}>
          No words match "{query.trim()}".
        </Text>
      )}

      {visibleThemes.map(({ theme, themeWords }) => (
        <View key={theme.id} style={styles.themeSection}>
          <Text style={[textStyles.subheading, styles.themeTitle]}>{theme.name}</Text>
          <View style={styles.grid}>
            {themeWords.map((w) => {
              const isVerb = w.id in a1Conjugations;
              const cellContent = (
                <>
                  <WordText nl={w.nl} en={w.en} />
                  {isVerb && <Text style={[textStyles.caption, styles.conjugateHint]}>Tap to conjugate ›</Text>}
                </>
              );
              return isVerb ? (
                <Pressable
                  key={w.id}
                  onPress={() => setSelectedVerbId(w.id)}
                  style={({ pressed }) => [styles.wordCell, styles.wordCellVerb, pressed && styles.wordCellPressed]}
                >
                  {cellContent}
                </Pressable>
              ) : (
                <View key={w.id} style={styles.wordCell}>
                  {cellContent}
                </View>
              );
            })}
          </View>
        </View>
      ))}

      <VerbConjugationCard
        verb={selectedVerb}
        visible={selectedVerbId !== null}
        onClose={() => setSelectedVerbId(null)}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.xs },
  subtitle: { color: colors.textSecondary, marginBottom: spacing.lg },
  searchInput: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    fontSize: 16,
    marginBottom: spacing.xl,
  },
  noResults: { color: colors.textSecondary, marginBottom: spacing.lg },
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
  wordCellVerb: {
    borderColor: colors.teal,
  },
  wordCellPressed: {
    backgroundColor: colors.tealTint,
  },
  conjugateHint: {
    color: colors.teal,
    marginTop: spacing.xs,
  },
});
