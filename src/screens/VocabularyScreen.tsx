import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, SectionList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ArrowUp } from 'lucide-react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { WordText } from '../components/WordText';
import { VerbConjugationCard } from '../components/VerbConjugationCard';
import { FlashcardsCard } from '../components/FlashcardsCard';
import { colors, textStyles, spacing, radii, fontFamilies, shadow } from '../theme';
import { wordsRepo, themesRepo } from '../data/repositories/content';
import { Theme, Word } from '../data/types';
import { a1Conjugations } from '../content/a1/conjugations';

// Word cards wrap based on content width in a plain flexWrap grid, but with
// ~2,200 words now in the vocabulary list, rendering every card up front
// (even off-screen ones) gets slow. Chunking each theme's words into fixed-size
// rows lets SectionList virtualize -- only rows near the viewport are mounted --
// while still rendering as a wrapping-looking grid.
const ROW_SIZE = 2;

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

interface Section {
  key: string;
  title: string;
  data: Word[][];
}

export function VocabularyScreen() {
  const [words, setWords] = useState<Word[]>([]);
  const [themes, setThemes] = useState<Theme[]>([]);
  const [query, setQuery] = useState('');
  const [selectedVerbId, setSelectedVerbId] = useState<string | null>(null);
  const [flashcardsVisible, setFlashcardsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionListRef = useRef<SectionList<Word[], Section>>(null);

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

  const sections: Section[] = useMemo(
    () =>
      visibleThemes.map(({ theme, themeWords }) => ({
        key: theme.id,
        title: theme.name,
        data: chunk(themeWords, ROW_SIZE),
      })),
    [visibleThemes]
  );

  const hasNoResults = normalizedQuery.length > 0 && visibleThemes.length === 0;
  const selectedVerb = selectedVerbId ? a1Conjugations[selectedVerbId] ?? null : null;

  const handleScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setShowScrollTop(e.nativeEvent.contentOffset.y > 400);
  }, []);

  const scrollToTop = useCallback(() => {
    sectionListRef.current?.getScrollResponder()?.scrollTo({ y: 0, animated: true });
  }, []);

  const renderWordCell = useCallback(
    (w: Word) => {
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
    },
    []
  );

  const listHeader = (
    <>
      <Text style={[textStyles.displayMedium, styles.title]}>Vocabulary</Text>
      <Text style={[textStyles.body, styles.subtitle]}>
        Every word Kade has introduced so far, grouped by everyday theme. Verbs are tappable --
        tap one to see how it conjugates.
      </Text>

      <View style={styles.searchRow}>
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
        <Pressable
          onPress={() => setFlashcardsVisible(true)}
          style={({ pressed }) => [styles.flashcardsButton, pressed && styles.flashcardsButtonPressed]}
        >
          <Text style={[textStyles.bodySmall, styles.flashcardsButtonText]}>Flashcards</Text>
        </Pressable>
      </View>

      {hasNoResults && (
        <Text style={[textStyles.body, styles.noResults]}>
          No words match "{query.trim()}".
        </Text>
      )}
    </>
  );

  return (
    <ScreenContainer scroll={false}>
      <SectionList
        ref={sectionListRef}
        sections={sections}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(row, index) => (row.length > 0 ? row.map((w) => w.id).join(',') : `empty-${index}`)}
        renderItem={({ item }) => <View style={styles.grid}>{item.map(renderWordCell)}</View>}
        renderSectionHeader={({ section }) => (
          <Text style={[textStyles.subheading, styles.themeTitle]}>{section.title}</Text>
        )}
        ListHeaderComponent={listHeader}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={7}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
      />

      <VerbConjugationCard
        verb={selectedVerb}
        visible={selectedVerbId !== null}
        onClose={() => setSelectedVerbId(null)}
      />

      <FlashcardsCard
        words={words}
        visible={flashcardsVisible}
        onClose={() => setFlashcardsVisible(false)}
      />

      {showScrollTop && (
        <Pressable
          onPress={scrollToTop}
          style={({ pressed }) => [styles.scrollTopButton, pressed && styles.scrollTopButtonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Scroll to top"
        >
          <ArrowUp color={colors.textOnTeal} size={22} />
        </Pressable>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: colors.brick, marginBottom: spacing.xs },
  subtitle: { color: colors.textSecondary, marginBottom: spacing.lg },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  searchInput: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    fontSize: 16,
  },
  flashcardsButton: {
    backgroundColor: colors.teal,
    borderWidth: 1,
    borderColor: colors.teal,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  flashcardsButtonPressed: {
    backgroundColor: colors.tealDark,
    borderColor: colors.tealDark,
  },
  flashcardsButtonText: {
    color: colors.textOnTeal,
    fontFamily: fontFamilies.bodySemiBold,
  },
  noResults: { color: colors.textSecondary, marginBottom: spacing.lg },
  listContent: { flexGrow: 1 },
  themeTitle: { color: colors.teal, marginBottom: spacing.md, marginTop: spacing.md },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md, marginBottom: spacing.md },
  wordCell: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    minWidth: 120,
    flexGrow: 1,
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
  scrollTopButton: {
    position: 'absolute',
    right: spacing.lg,
    bottom: spacing.lg,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.teal,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadow.card,
  },
  scrollTopButtonPressed: {
    backgroundColor: colors.tealDark,
  },
});
